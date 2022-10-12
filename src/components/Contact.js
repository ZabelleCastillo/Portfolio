import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, IconButton, Slide, Stack, Typography } from "@mui/material";
import Footer from "./Footer";
import { Box } from "@mui/system";
import { TextField } from "@material-ui/core";
import InboxIcon from "@mui/icons-material/Inbox";
import React, { useEffect, useState } from "react";
import { useFormik, Form, Formik, Field } from "formik";
import * as Yup from "yup";
import MuiAlert from "@mui/material/Alert";
import emailjs from "emailjs-com";
import "../style.css";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/pexels.jpg"})`,
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

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .required("Required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Invalid email."),
  message: Yup.string().required("Required"),
});

export default function Contact() {
  const [status, setStatusBase] = useState("");

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (data, props) => {
      try {
        emailjs
          .send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            data,
            process.env.REACT_APP_EMAILJS_USER_ID
          )
          .then(() => {
            setStatusBase({ msg: "Success", key: Math.random() });
          });
        setTimeout(() => {
          props.resetForm();
          props.setSubmitting(false);
          setStatusBase(false);
        }, 5000);
      } catch (error) {
        setStatusBase({ error: "Failed to send" });
      }
    },
  });
  const { errors, touched, handleSubmit, getFieldProps } = formik;
  return (
    <Box
      bgcolor={"background.default"}
      color={"text.primary"}
      className={classes.root}
    >
      <CssBaseline />
      <Helmet>
        <title> Portfolio | Contact</title>
        <meta name="Contact" content="Contact me." />
      </Helmet>
      <Slide
        direction="right"
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
              Let's chat.
            </Typography>
            <Typography
              className={classes.TextTypo}
              style={{ fontWeight: "bold", fontSize: "50px", color: "green" }}
            >
              Tell me about <br></br> your project.
            </Typography>
            <span
              style={{ fontWeight: "bold", fontSize: "15px", color: "blue" }}
            >
              Let's create something together.
            </span>
            <span
              style={{ fontWeight: "bold", fontSize: "15px", color: "blue" }}
            >
              <IconButton style={{ color: "green" }}>
                <InboxIcon
                  style={{ fontSize: "large " }}
                  sx={{ "&:hover": { color: "blue" } }}
                />
              </IconButton>
              Mail me at <br></br> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              jessabellecastillo1993@yahoo.com
            </span>
          </Stack>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Formik value={formik}>
            {() => (
              <Form autoComplete="off" onSubmit={handleSubmit} noValidate>
                <span>
                  {status ? (
                    <Alert
                      className="snackbar"
                      id={status ? "show" : "hide"}
                      severity="success"
                      sx={{
                        //width: "100%",
                        //maxWidth: "200px",
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      Message has been successfully sent!
                    </Alert>
                  ) : null}
                </span>
                <Stack direction="column" spacing={2}>
                  <Typography
                    className={classes.TextTypo}
                    style={{ fontWeight: "bold", fontSize: "30px" }}
                  >
                    Contact 👋😃
                  </Typography>
                  <TextField
                    type="text"
                    placeholder="Full name"
                    id="name"
                    name="name"
                    {...getFieldProps("name")}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                  />
                  <TextField
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <Field
                    component="textarea"
                    required
                    placeholder=" Message"
                    style={{
                      minWidth: "300px",
                      minHeight: "200px",
                      resize: "none",
                      boxShadow: 5,
                      borderRadius: 10,
                      border: "none",
                      ariaHidden: "true",
                      fontSize: "14px",
                      transition: "border-color 150ms ease",
                      width: "100%",
                    }}
                    id="message"
                    name="message"
                    {...getFieldProps("message")}
                    // helperText={touched.message && errors.message}
                    // error={Boolean(touched.message && errors.message)}
                  />

                  {/* <InputEmoji
              value={text}
              onChange={setText}
              cleanOnEnter
              onEnter={handleOnEnter}
              placeholder="Type a message"
              style={{ height: 450 }}
            /> */}
                  <Button type="submit" variant="contained">
                    send
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Slide>
      <Footer />
    </Box>
  );
}
