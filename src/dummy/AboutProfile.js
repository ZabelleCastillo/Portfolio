import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Avatar,
  Button,
  IconButton,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as Scroll } from "react-scroll";

import Summary from "./Summary";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import TerminalIcon from "@mui/icons-material/Terminal";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/about.jpg"})`,
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

export default function AboutProfile() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
      <CssBaseline />

      <Slide
        direction="up"
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedheight={50}
      >
        <Box
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          className={classes.LinkButton}
        >
          <Stack direction="column" spacing={2}>
            <Typography
              className={classes.TextTypo}
              style={{ fontWeight: "bold", fontSize: "50px" }}
            >
              Hi, there!
            </Typography>
            <Typography
              className={classes.TextTypo}
              style={{ fontWeight: "bold", fontSize: "50px", color: "green" }}
            >
              I am
              <span
                style={{ fontWeight: "bold", fontSize: "50px", color: "blue" }}
              >
                {" "}
                JB Castillo.{" "}
              </span>
            </Typography>
            I code, I design.
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="medium"
                style={{
                  background: "blue",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                View Portfolio &nbsp; <TerminalIcon />
              </Button>
              <Button
                variant="outlined"
                size="medium"
                style={{
                  background: "green",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                Hire me &nbsp;
                <DesignServicesIcon />
              </Button>
              <IconButton
                style={{
                  color: "blue",
                }}
              >
                <Scroll to="id-to-info" smooth={true}>
                  <ExpandMoreIcon />
                </Scroll>
              </IconButton>
            </Stack>
          </Stack>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <IconButton sx={{ display: { xs: "none", sm: "block" } }}>
            <Avatar
              style={{
                minHeight: 300,
                minWidth: 300,
                display: "flex",
                cursor: "none",
              }}
              alt="Zabelle Castillo"
              src={process.env.PUBLIC_URL + "/assets/jb.PNG"}
            />
          </IconButton>
        </Box>
      </Slide>

      <Summary />
      <Footer />
    </div>
  );
}
