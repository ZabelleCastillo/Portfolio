import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Slide, Stack, Typography } from "@mui/material";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Legend,
  Bar,
  Tooltip,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/Project.jpg"})`,
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
  },
  Text: {
    display: "flex",
    color: "blue",
    fontFamily: "Roboto",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Skills() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  const data = [
    { name: "HTML", percentage: 100 },
    { name: "CSS", percentage: 90 },

    { name: "React JS", percentage: 80 },
    { name: "C#", percentage: 95 },
    { name: "PHP", percentage: 75 },
    { name: "Java", percentage: 60 },
    { name: "mySQL", percentage: 88 },
    { name: "VB", percentage: 99 },
    { name: "Node JS", percentage: 70 },
  ];
  return (
    <div className={classes.root}>
      <Helmet>
        <title> Portfolio | Skills</title>
        <meta name="Skills" content="My Skills." />
      </Helmet>
      <CssBaseline />

      <Slide
        direction="down"
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedheight={50}
      >
        <Paper>
          <Stack
            direction={{ xs: "column" }}
            spacing={2}
            className={classes.LinkButton}
          >
            <br></br>
            <Stack>
              <br></br>
              <Typography className={classes.Text}>
                Programming Languages that I learned with a markup language.
              </Typography>
              <br></br>
              <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="percentage" fill="#8884d8" />
              </BarChart>
            </Stack>
            <Stack>
              GENERAL AND GRAPHIC APPLICATION <br></br>
              ⚛️Adobe Photoshop <br></br>
              ⚛️Adobe Illustrator <br></br>
              ⚛️Flash <br></br>
              ⚛️Scratch <br></br>
              ⚛️Vegas Pro <br></br>
              ⚛️Microsoft Office Word, Microsoft Office Excel, Microsoft Office
              Power Point <br></br>
              ⚛️Internet Browsing <br></br> <br></br>
              INTERPERSONAL SKILLS <br></br>
              ⚛️Ability to rapidly build relationship and set up trust.{" "}
              <br></br>
              ⚛️Confident and Determined. <br></br>
              ⚛️Ability to cope up with different situations. <br></br>
              ⚛️Persevere and Goal- Oriented <br></br>
              ⚛️Highly capable, trustworthy, honest and flexible <br></br>{" "}
            </Stack>
          </Stack>
          <br></br> <br></br> <br></br>
        </Paper>
      </Slide>

      <Footer />
    </div>
  );
}
