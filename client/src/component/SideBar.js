
import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";
import MenuItems from "./menuItems"; // Import the menuItems
import logo from "../assets/logo/OWM_Final.png";


const drawerWidth = 200;


//console.log(menuItems)



const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "white",
  color: "white",
  fontFamily: "sans-serif",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  background: "white",
  color: "white",
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(5)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,

  backgroundImage: `url(${logo})`, // Set the logo as the background image
  backgroundSize: "66px auto",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));



export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState({}); // State to track open status of submenus
  const navigate = useNavigate();
  const location = useLocation(); // Add this line to get the current location

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubMenuClick = (path) => {
    navigate(path);
  };

  const handleToggleSubMenu = (index) => {
    setSubmenuOpen(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };



  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{ color: "#045e84" }}>
            {theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
       
        <List>
          {/* {menuItems.map((item, index) => (
            <div key={index}>
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => navigate(item.path)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    color: "#045e84",
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    mt: 1,
                    borderBottom: "1px solid #ccc",
                    // Add styles for the active menu item based on the route
                    ...(location.pathname === item.path && {
                      background: " #045e84",
                      color: "white",
                    }),
                    ":hover": {
                      background: "#045e8477", // Add the desired hover background color
                      color: "white", // Add the desired hover text color
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "#045e84",
                      ...(location.pathname === item.path && {
                        background: " #045e84",
                        color: "white",
                      }),
                      ":hover": {
                        background: "#045e8477", // Add the desired hover background color
                        color: "white", // Add the desired hover text color
                      },
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <div
                        style={{ fontSize: "1rem", fontFamily: "Georgia, serif" }}
                      >
                        {item.text}
                      </div>
                    }
                    sx={{
                      opacity: open ? 1 : 0,
                    }}
                  />
                  {item.submenu && (
                    open ? 
                    (submenuOpen[index] ? <ExpandLessIcon onClick={() => handleToggleSubMenu(index)} /> : <ExpandMoreIcon onClick={() => handleToggleSubMenu(index)} />) 
                    : 
                    (location.pathname === item.path ? <ExpandLessIcon onClick={() => handleToggleSubMenu(index)} /> : <ExpandMoreIcon onClick={() => handleToggleSubMenu(index)} />)
                  )}
                </ListItemButton>
              </ListItem>
              {item.submenu && submenuOpen[index] && (
                <List>
                  {item.submenu.map((subItem, subIndex) => (
                    <ListItem
                      key={subIndex}
                      disablePadding
                      sx={{ display: "block", pl: 4 }}
                      onClick={() => handleSubMenuClick(subItem.path)}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          color: "#045e84",
                          justifyContent: "initial",
                          px: 2.5,
                          mt: 1,
                          borderBottom: "1px solid #ccc",
                          // Add styles for the active menu item based on the route
                          ...(location.pathname === subItem.path && {
                            background: " #045e84",
                            color: "white",
                          }),
                          ":hover": {
                            background: "#045e8477", // Add the desired hover background color
                            color: "white", // Add the desired hover text color
                          },
                        }}
                      >
                        <ListItemText
                          primary={
                            <div
                              style={{
                                fontSize: "1rem",
                                fontFamily: "Georgia, serif",
                              }}
                            >
                              {subItem.text}
                            </div>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              )}
            </div>
          ))} */}
         <MenuItems/>
        </List>
      </Drawer>
    </Box>
  );
}

