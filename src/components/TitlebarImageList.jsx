import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import "../style/section3.css";

const handleIconClick = (url) => {
  if (url) {
    window.open(url, "_blank");
  } else {
    console.log("No URL");
  }
};

export default function TitlebarImageList() {
  return (
    <ImageList className="imageList" sx={{ height: 430 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader className="listSubHeader" component="div">
          Mina Certifikat - Klicka på (i) för verifiering.
        </ListSubheader>
      </ImageListItem>
      {MinaCerts.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            url={item.url}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
                onClick={() => handleIconClick(item.url)}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const MinaCerts = [
  {
    img: require("../assets/AdvancedReact.jpg"),
    title: "Advanced React",
    url: "https://www.coursera.org/account/accomplishments/verify/W8Q4PJX5TJSH",
  },
  {
    img: require("../assets/Programming_With_Javascript_Meta_page-0001.jpg"),
    title: "Javascript",
    url: "https://www.coursera.org/account/accomplishments/verify/DQ4PELRKQN67",
  },
  {
    img: require("../assets/HTML and CSS in depth_page-0001.jpg"),
    title: "HTML & CSS",
    url: "https://www.coursera.org/account/accomplishments/verify/QPT4JKPV2APZ",
  },
  {
    img: require("../assets/Version_Controll_Meta_page-0001.jpg"),
    title: "Version Control",
    url: "https://www.coursera.org/account/accomplishments/verify/VHPAKQGN2YGE",
  },
  {
    img: require("../assets/DeveloperCapstone.jpg"),
    title: "Developer Capstone",
    url: "https://www.coursera.org/account/accomplishments/verify/VVK7GBKM82LD",
  },
  {
    img: require("../assets/Principles of UX-UI Design_page-0001.jpg"),
    title: "UX-UI",
    url: "https://www.coursera.org/account/accomplishments/verify/RTBCK7CNAHWF",
  },

  {
    img: require("../assets/React_Basics_Meta_page-0001.jpg"),
    title: "React Basics",
    url: "https://www.coursera.org/account/accomplishments/verify/56X7LAQ6QPEN",
  },

  {
    img: require("../assets/IntroFrontEnd_Meta_page-0001.jpg"),
    title: "Intro Front-end",
    url: "https://www.coursera.org/account/accomplishments/verify/JW2WDUJ4JJ8T",
  },
];
