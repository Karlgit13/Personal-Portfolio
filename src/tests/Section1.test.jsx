import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Section1 from "../components/Section1";

import { screen } from "@testing-library/react";

describe("Section1", () => {
  test("renders Section1 component", () => {
    render(<Section1 />);
  });

  test("checks if profile image is present", () => {
    expect(screen.getByAltText("Profile")).toBeInTheDocument();
  });

  test("checks if header1 is present", () => {
    expect(screen.getByText("Karl Vareskog")).toBeInTheDocument();
  });

  test("checks if header2 is present", () => {
    expect(screen.getByText(/Webbutvecklare,/i)).toBeInTheDocument();
  });

  test("checks if scroll down arrow is clickable", () => {
    const scrollDownArrow = screen.getByTestId("scroll-down-arrow");
    fireEvent.click(scrollDownArrow);
  });
});
