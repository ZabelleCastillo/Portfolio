import {
  AppBar,
  IconButton,
  Toolbar,
  styled,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Tooltip,
  Button,
  Drawer,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const StyleToolbar = styled(Toolbar)({
  display: "flex",

  justifyContent: "space-between",
  "&:hover": {
    background: "none",
  },
});

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));
export default function Header({ mode, setMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Portfolio <CloudCircleIcon style={{ color: "blue" }} />
      </Typography>
      <Divider />
      <List>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "none", color: "red" }
              : { textDecoration: "none", color: "blue" }
          }
          to="/"
        >
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </NavLink>
        <Divider />
        <NavLink
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "none", color: "red" }
              : { textDecoration: "none", color: "blue" }
          }
          to="/about"
        >
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="About" />
          </ListItemButton>
        </NavLink>
        <Divider />
        <NavLink
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "none", color: "red" }
              : { textDecoration: "none", color: "blue" }
          }
          to="/projects"
        >
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </NavLink>
        <Divider />
        <NavLink
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "none", color: "red" }
              : { textDecoration: "none", color: "blue" }
          }
          to="/skills"
        >
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Skills" />
          </ListItemButton>
        </NavLink>
        <Divider />
        <NavLink
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "none", color: "red" }
              : { textDecoration: "none", color: "blue" }
          }
          to="/contact"
        >
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </NavLink>
        <Divider />
      </List>
    </Box>
  );

  return (
    <div id="header">
      <AppBar
        position="sticky"
        style={{ background: "rgba(0,0,0,0.2)" }}
        elevation={0}
      >
        <StyleToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ fontSize: "30px" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Portfolio &nbsp; <CloudCircleIcon />
          </Typography>
          <Box component="nav">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <IconButton
              style={{
                color: "white",
                background: "rgba(0,0,0,0.1)",
              }}
            >
              <HomeIcon
                style={{
                  fontSize: "medium",
                }}
                sx={{ "&:hover": { color: "blue" } }}
              />
            </IconButton>
            <Tooltip title="Home">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "none", color: "red" }
                    : { textDecoration: "none", color: "white" }
                }
                to="/"
              >
                <Button sx={{ color: "#fff", "&:hover": { color: "blue" } }}>
                  Home
                </Button>
              </NavLink>
            </Tooltip>
            <IconButton
              style={{ color: "white", background: "rgba(0,0,0,0.1)" }}
            >
              <AccountCircleIcon
                style={{ fontSize: "medium" }}
                sx={{ "&:hover": { color: "blue" } }}
              />
            </IconButton>

            <Tooltip title="About">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "none", color: "red" }
                    : { textDecoration: "none", color: "blue" }
                }
                to="/about"
              >
                <Button sx={{ color: "#fff", "&:hover": { color: "blue" } }}>
                  About
                </Button>
              </NavLink>
            </Tooltip>
            <IconButton
              style={{ color: "white", background: "rgba(0,0,0,0.1)" }}
            >
              <ElectricBoltIcon
                style={{ fontSize: "medium" }}
                sx={{ "&:hover": { color: "blue" } }}
              />
            </IconButton>
            <Tooltip title="Projects">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "none", color: "red" }
                    : { textDecoration: "none", color: "white" }
                }
                to="/projects"
              >
                <Button sx={{ color: "#fff", "&:hover": { color: "blue" } }}>
                  Projects
                </Button>
              </NavLink>
            </Tooltip>

            <IconButton
              style={{ color: "white", background: "rgba(0,0,0,0.1)" }}
            >
              <BookmarksIcon
                style={{ fontSize: "medium" }}
                sx={{ "&:hover": { color: "blue" } }}
              />
            </IconButton>
            <Tooltip title="Skills">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "none", color: "red" }
                    : { textDecoration: "none", color: "white" }
                }
                to="/skills"
              >
                <Button sx={{ color: "#fff", "&:hover": { color: "blue" } }}>
                  Skills
                </Button>
              </NavLink>
            </Tooltip>
            <IconButton
              style={{ color: "white", background: "rgba(0,0,0,0.1)" }}
            >
              <PhoneIcon
                style={{ fontSize: "medium" }}
                sx={{ "&:hover": { color: "blue" } }}
              />
            </IconButton>
            <Tooltip title="Contact">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "none", color: "red" }
                    : { textDecoration: "none", color: "white" }
                }
                to="/contact"
              >
                <Button sx={{ color: "#fff", "&:hover": { color: "blue" } }}>
                  Contact
                </Button>
              </NavLink>
            </Tooltip>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
          </Box>
        </StyleToolbar>
      </AppBar>
    </div>
  );
}
