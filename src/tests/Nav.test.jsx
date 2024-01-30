import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Nav from "../components/Nav";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it("renders without crashing", () => {
  render(<Nav />, container);
});

it("renders with always-visible class when isSection1 is true", () => {
  render(<Nav isSection1={true} />, container);

  const header = container.querySelector(".header-navbar");
  expect(header).toHaveClass("always-visible");
});

it("renders without always-visible class when isSection1 is false", () => {
  render(<Nav isSection1={false} />, container);

  const header = container.querySelector(".header-navbar");
  expect(header).not.toHaveClass("always-visible");
});
