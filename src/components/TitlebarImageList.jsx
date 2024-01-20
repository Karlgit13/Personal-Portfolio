import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Certifikat</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
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

const itemData = [
  {
    img: require("../assets/AdvancedReact.jpg"),
    title: "Advanced React",
  },
  {
    img: require("../assets/Programming_With_Javascript_Meta_page-0001.jpg"),
    title: "Javascript",
  },
  {
    img: require("../assets/HTML and CSS in depth_page-0001.jpg"),
    title: "HTML & CSS",
  },
  {
    img: require("../assets/Version_Controll_Meta_page-0001.jpg"),
    title: "Version Control",
  },
  {
    img: require("../assets/DeveloperCapstone.jpg"),
    title: "Developer Capstone",
  },
  {
    img: require("../assets/Principles of UX-UI Design_page-0001.jpg"),
    title: "UX-UI",
  },

  {
    img: require("../assets/React_Basics_Meta_page-0001.jpg"),
    title: "React Basics",
  },

  {
    img: require("../assets/IntroFrontEnd_Meta_page-0001.jpg"),
    title: "Intro Front-end",
  },
];
