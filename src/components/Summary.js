import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardAbout from "./CardAbout";
import info from "../static/desc";
import useWindowPosition from "../hook/useWindowPosition";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Summary() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="id-to-info">
      <NavLink
        style={({ isActive }) =>
          isActive
            ? { textDecoration: "none", color: "red" }
            : { textDecoration: "none", color: "blue" }
        }
        to="/about"
      >
        <CardAbout info={info[0]} checked={checked} />
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive
            ? { textDecoration: "none", color: "red" }
            : { textDecoration: "none", color: "blue" }
        }
        to="/projects"
      >
        <CardAbout info={info[1]} checked={checked} />
      </NavLink>
    </div>
  );
}
