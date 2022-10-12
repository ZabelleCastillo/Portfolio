import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CardProfile() {
  return (
    <Card
      sx={{ display: "flex" }}
      style={{
        width: "100%",
        background: "rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Some words about me
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Hi, there! I'm Jessa. My mission is to design and develop a website
            that I am confident and determined that you and your audience would
            love. I always enjoy designing tech websites and digital products. I
            build value through design and codes. Develop knowledge with quality
            work where I can be able to communicate ideas to a wide range of the
            team and have the ability to cope with different situations.
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ minWidth: 345 }}
        image={process.env.PUBLIC_URL + "/assets/jb.PNG"}
        alt="photo"
      />
    </Card>
  );
}
