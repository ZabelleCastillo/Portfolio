import { AppBar, IconButton, Toolbar, styled, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  "&:hover": {
    background: "none",
  },
});

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "50px",
});

export default function HeadNav() {
  return (
    <div id="header">
      <AppBar
        position="sticky"
        style={{ background: "rgba(0,0,0,0.2)" }}
        elevation={0}
      >
        <StyleToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Portfolio &nbsp; <CloudCircleIcon />
          </Typography>

          <IconButton
            style={{ color: "white" }}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon style={{ fontSize: "30px" }} />
          </IconButton>
          <Icons>
            <IconButton
              style={{
                color: "white",
                background: "rgba(0,0,0,0.1)",
              }}
            >
              <HomeIcon
                style={{
                  fontSize: "30px",
                }}
                sx={{ "&:hover": { color: "blue" } }}
              />
            </IconButton>
            <IconButton
              style={{ color: "white", background: "rgba(0,0,0,0.1)" }}
            >
              <AccountCircleIcon
                style={{ fontSize: "30px" }}
                sx={{ "&:hover": { color: "blue" } }}
              />
            </IconButton>
            <IconButton
              style={{ color: "white", background: "rgba(0,0,0,0.1)" }}
            >
              <ElectricBoltIcon
                style={{ fontSize: "30px" }}
                sx={{ "&:hover": { color: "blue" } }}
              />
            </IconButton>
            <IconButton
              style={{ color: "white", background: "rgba(0,0,0,0.1)" }}
            >
              <BookmarksIcon
                style={{ fontSize: "30px" }}
                sx={{ "&:hover": { color: "blue" } }}
              />
            </IconButton>
            <IconButton
              style={{ color: "white", background: "rgba(0,0,0,0.1)" }}
            >
              <PhoneIcon
                style={{ fontSize: "30px" }}
                sx={{ "&:hover": { color: "blue" } }}
              />
            </IconButton>
          </Icons>
        </StyleToolbar>
      </AppBar>
    </div>
  );
}
