import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Slide, Stack, Typography } from "@mui/material";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { CardContent, CardMedia, Divider } from "@material-ui/core";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/about.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  titleAbout: {
    background: "rgba(0,0,0,0.5)",
    color: "white",
    fontFamily: "Roboto",
    textDecoration: "underline",
  },
  media: {
    minHeight: 345,
    maxWidth: 345,
    width: "100%",
  },
}));

export default function About() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
      <Helmet>
        <title> Portfolio | About</title>
        <meta name="About" content="About me." />
      </Helmet>
      <CssBaseline />

      <Slide
        direction="left"
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedheight={50}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          style={{
            background: "rgba(0,0,0,0.1)",
          }}
          className={classes.root}
        >
          <Stack direction="row">
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h5" className={classes.titleAbout}>
                SOME WORDS ABOUT ME
              </Typography>
              <Typography variant="subtitle1" color="white">
                Hi, there! I'm Jessa. My mission is to design and develop a
                website that I am confident and determined that you and your
                audience would love. I always enjoy designing tech websites and
                digital products. I build value through design and codes.
                Develop knowledge with quality work where I can be able to
                communicate ideas to a wide range of the team and have the
                ability to cope with different situations.
              </Typography>
              <br />
              <Divider />
              <br />
              <Typography variant="h5" className={classes.titleAbout}>
                {" "}
                BASIC ACADEMIC CREDENTIALS
              </Typography>
              <Typography variant="subtitle1" color="white">
                College | Southern Leyte State University | 2011-2015
              </Typography>
              <Typography variant="subtitle1" color="white">
                High School | Saint Thomas Aquinas College | 2005-2009
              </Typography>
              <Typography variant="subtitle1" color="white">
                Elementary | Sogod Central Elementary School | 1999-2005
              </Typography>
            </CardContent>

            <CardMedia
              component="img"
              className={classes.media}
              image={process.env.PUBLIC_URL + "/assets/jb.PNG"}
              alt="photo"
            />
          </Stack>
        </Stack>
      </Slide>

      <Footer />
    </div>
  );
}
