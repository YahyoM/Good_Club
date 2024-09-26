import { useContext, useState } from "react";
import { Box, Menu, MenuItem, IconButton } from "@mui/material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import logo from "../../assets/logo.svg";
import logoBlack from "../../assets/logo-black.svg";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { logout } from "../../axios/UserApi";
import { GlobalContext } from "../../context";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, setUser, darkmode, setDarkmode } = useContext(GlobalContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  const handleDarkModeToggle = (param) => {
    setDarkmode(param);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: (darkmode === "dark") ? "#292A32" : "#ffffff",
        borderBottom: "2px solid",
        borderBottomColor: (darkmode === "dark") ? "#292A32" : "#E2E2EA",
        boxShadow: "0",
        height: "80px",
      }}
    >
      <Box
        sx={{
          maxWidth: "1460px",
          width: "100%",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <Toolbar
          sx={{
            padding: "8px 0",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={darkmode === "dark" ? logoBlack : logo} alt="Logo" style={{ height: "60px" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0px 10px",
            }}
          >
            <IconButton>
              {darkmode === "dark" ? (
                <LightModeIcon sx={{
                  color :"orange"
                }} onClick={() => handleDarkModeToggle("light")} />
              ) : (
                <DarkModeIcon onClick={() => handleDarkModeToggle("dark")} />
              )}
            </IconButton>

            <Typography
              sx={{
                color: (darkmode === "dark") ? "#fafafa": "#1F2029",
                cursor: "pointer",
                fontSize: "16px",
                lineHeight: "18px",
                fontWeight: "bold",
                fontFamily: "Inter",
              }}
              variant="h6"
              onClick={handleClick}
            >
              {user.firstName} {user.lastName}
            </Typography>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              getContentAnchorEl={null}
            >
              <MenuItem onClick={handleLogout}>Chiqish</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;
