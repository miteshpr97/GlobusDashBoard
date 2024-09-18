//sidebar.js

import React, {useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "./Header";
import MenuItems from "./menuItems"; 
import logo from "../assets/logo/OWM_Final.png";


const drawerWidth = 200;

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

  backgroundImage: `url(${logo})`, 
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
  // const [submenuOpen, setSubmenuOpen] = useState({}); // State to track open status of submenus
  // const navigate = useNavigate();
  // const location = useLocation(); // Add this line to get the current location

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const handleSubMenuClick = (path) => {
  //   navigate(path);
  // };

  // const handleToggleSubMenu = (index) => {
  //   setSubmenuOpen(prevState => ({
  //     ...prevState,
  //     [index]: !prevState[index]
  //   }));
  // };



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
       
         <MenuItems/>
        </List>
      </Drawer>
    </Box>
  );
}


// import React, { useState } from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Header from "./Header";
// import MenuItems from "./menuItems";
// import logo from "../assets/logo/OWM_Final.png";

// const drawerWidth = 200;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
//   background: "#0d2336", // Match the sidebar background color
//   color: "white",
//   fontFamily: "sans-serif",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   background: "#0d2336", // Match the sidebar background color
//   color: "white",
//   width: `calc(${theme.spacing(6)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(5)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
//   backgroundImage: `url(${logo})`, // Set the logo as the background image
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// export default function Sidebar() {
//   const theme = useTheme();
//   const [open, setOpen] = useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
//             {open ? theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon /> : <MenuIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           <MenuItems />
//         </List>
//       </Drawer>
//       <Header />
//     </Box>
//   );
// }
