import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Avatar, IconButton, Slide, Stack, Typography } from "@mui/material";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/skills.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  LinkButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    color: "green",
    fontFamily: "Roboto",
    fontSize: "4rem",
    fontWeight: "bold",
  },
  TextTypo: {
    color: "blue",
    fontFamily: "Roboto",
  },
  button: {
    background: "green",
    color: "white",
    border: "none",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3c52b2",
    },
  },
}));

export default function Experience() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
      <Helmet>
        <title> Portfolio | Projects</title>
        <meta name="Projects" content="my projects." />
      </Helmet>
      <CssBaseline />

      <Slide
        direction="down"
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedheight={50}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          className={classes.LinkButton}
        >
          <Stack direction="column" spacing={2}>
            <Typography
              className={classes.TextTypo}
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                fontSize: "50px",
                color: "black",
              }}
            >
              Projects
            </Typography>
            <Typography
              className={classes.TextTypo}
              style={{ fontWeight: "bold", fontSize: "20px" }}
            >
              Hotel Reservation System | Syshore Hotel <br></br>
              Front-end: HTML+CSS <br></br>Back-end: PHP
            </Typography>
            <Typography
              className={classes.TextTypo}
              style={{ fontWeight: "bold", fontSize: "20px", color: "green" }}
            >
              Motorcycle Inventory System |<br></br>
              Front-end: VB.net | Framework<br></br> Back-end: C#
            </Typography>
            <Typography
              className={classes.TextTypo}
              style={{ fontWeight: "bold", fontSize: "20px" }}
            >
              School Management System | SNHS
              <br></br>
              Front-end: VB.net | Framework <br></br>Back-end: C#
            </Typography>
          </Stack>

          <Stack direction="column" spacing={2}>
            <Typography
              className={classes.TextTypo}
              style={{ fontWeight: "bold", fontSize: "20px", color: "green" }}
            >
              Food Reservation System | Sogod Bellychon <br></br>
              Front-end: ReactJS |<br></br> Back-end: C#
            </Typography>
            <Typography
              className={classes.TextTypo}
              style={{ fontWeight: "bold", fontSize: "20px" }}
            >
              Portfolio web design | Curriculum Vitae
              <br></br>
              Front-end: ReactJS <br></br>Back-end: C#
            </Typography>
          </Stack>
          <IconButton sx={{ display: { xs: "none", sm: "block" } }}>
            <Avatar
              style={{
                minHeight: 300,
                minWidth: 300,
                display: "flex",
                cursor: "none",
              }}
              alt="Zabelle Castillo"
              src={process.env.PUBLIC_URL + "/assets/computer.webp"}
            />
          </IconButton>
        </Stack>
      </Slide>

      <Footer />
    </div>
  );
}
