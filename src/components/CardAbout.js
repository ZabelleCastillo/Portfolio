import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grow } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 445,
    cursor: "pointer",
    margin: "20px",
  },
  media: {
    height: 345,
    width: "100%",
    transition: "0.5s",

    "&:hover": {
      transform: "rotate(-5deg) scale(1)",

      transition: "0.6s",
      //transform:"translateX(100px) scale(0.8)",
      opacity: 1,
    },
  },
  title: {
    fontFamily: "Roboto",
    color: "blue",
  },
}));

export default function CardAbout({ info, checked }) {
  const classes = useStyles();

  return (
    <Grow in={checked} {...(checked ? { timeout: 2000 } : {})}>
      <Card
        className={classes.root}
        style={{
          background: "rgba(0,0,0,0.2)",
        }}
      >
        <CardMedia
          className={classes.media}
          image={info.imageUrl}
          component="img"
          //image={process.env.PUBLIC_URL + "/assets/jess.jpg"}
        />

        <CardContent className={classes.title}>
          <Typography
            gutterBottom
            variant="h5"
            style={{ fontWeight: "bold" }}
            className={classes.title}
            component="div"
          >
            {info.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ color: "white" }}
          >
            {info.desc}
          </Typography>
        </CardContent>
      </Card>
    </Grow>
  );
}
