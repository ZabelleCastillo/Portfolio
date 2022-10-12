import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Toolbar,
  styled,
  Typography,
  Tooltip,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import { Box } from "@mui/system";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-evenly",
  "&:hover": {
    background: "none",
  },
});

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export default function Footer() {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <div id="header">
      <AppBar
        position="sticky"
        style={{ background: "rgba(0,0,0,0.5)" }}
        elevation={0}
      >
        <StyleToolbar>
          <Typography sx={{ display: { xs: "none", sm: "block" } }}>
            Working with passion while exploring the world.
          </Typography>

          <>
            &copy; All right reserved. {date} <CodeIcon />
          </>
          <Icons>
            <Tooltip title="Facebook" placement="top-start">
              <a href="https://web.facebook.com/jbcastillo.taylorswiftcode/">
                <IconButton
                  style={{
                    color: "white",
                    background: "rgba(0,0,0,0.1)",
                  }}
                >
                  <FacebookIcon
                    style={{
                      fontSize: "20px",
                    }}
                    sx={{ "&:hover": { color: "blue" } }}
                  />
                </IconButton>
              </a>
            </Tooltip>
            <Tooltip title="Instagram" placement="top-start">
              <a href="https://www.instagram.com/billyjessc/">
                <IconButton
                  style={{ color: "white", background: "rgba(0,0,0,0.1)" }}
                >
                  <InstagramIcon
                    style={{ fontSize: "20px" }}
                    sx={{ "&:hover": { color: "blue" } }}
                  />
                </IconButton>
              </a>
            </Tooltip>
            <Tooltip title="Github" placement="top-start">
              <a href="https://github.com/ZabelleCastillo">
                <IconButton
                  style={{
                    color: "white",
                    background: "rgba(0,0,0,0.1)",
                  }}
                >
                  <GitHubIcon
                    style={{ fontSize: "20px" }}
                    sx={{ "&:hover": { color: "blue" } }}
                  />
                </IconButton>
              </a>
            </Tooltip>
            <Tooltip title="LinkedIn" placement="top-start">
              <a href="https://www.linkedin.com/in/jessa-belle-castillo-21a724134/">
                <IconButton
                  style={{ color: "white", background: "rgba(0,0,0,0.1)" }}
                >
                  <LinkedInIcon
                    style={{ fontSize: "20px" }}
                    sx={{ "&:hover": { color: "blue" } }}
                  />
                </IconButton>
              </a>
            </Tooltip>
            <Tooltip title="Contact" placement="top-start">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "none", color: "red" }
                    : { textDecoration: "none", color: "blue" }
                }
                to="/contact"
              >
                <IconButton
                  style={{ color: "white", background: "rgba(0,0,0,0.1)" }}
                >
                  <PhoneIcon
                    style={{ fontSize: "20px" }}
                    sx={{ "&:hover": { color: "blue" } }}
                  />
                </IconButton>
              </NavLink>
            </Tooltip>
          </Icons>
        </StyleToolbar>
      </AppBar>
    </div>
  );
}
