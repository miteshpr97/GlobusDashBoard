// // menuItems.js
// import React, { useEffect, useState } from "react";
// import LeaderboardIcon from "@mui/icons-material/Leaderboard";
// import { _post } from "../CommonUtilAPI/GLApiClient";

// export default function MenuItems() {
//   const [menuData, setMenuData] = useState([]);

//   console.log(menuData, "hhhhhhhhhh")

//   useEffect(() => {
//     const fetchMenuData = async () => {
//       try {
//         const response = await _post("/api/Menu", {
//           USER_CD: window.sessionStorage.getItem("USER_CD"),
//         });
//         if (response.status === 200) {
//           const processedData = processMenuData(response.data);
//           setMenuData(processedData);
//         } else {
//           console.error("Failed to fetch menu data", response.status);
//         }
//       } catch (error) {
//         console.error("Error fetching menu data", error);
//       }
//     };

//     fetchMenuData();
//   }, []);

//   const processMenuData = (data) => {
//     const menuMap = {};
//     data.forEach(item => {
//       if (!menuMap[item.MODULE_CD]) {
//         menuMap[item.MODULE_CD] = {
//           text: item.MODULE_NM,
//           icon: <LeaderboardIcon />,
//           path: "/dashboard",
//           submenu: []
//         };
//       }
//       menuMap[item.MODULE_CD].submenu.push({
//         text: item.PAGE_NM,
//         path: item.PAGE_LNK
//       });
//     });
//     return Object.values(menuMap);
//   };

//   if (!menuData || menuData.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//     </div>
//   );
// };

// export const menuItems = [
//   {
//     text: "HR",
//     icon: <LeaderboardIcon />,
//     path: "/dashboard",
//     submenu: [
//       { text: "Employee", path: "/employee" },
//       { text: "Code Selection", path: "/code-selection" },
//       { text: "Leave Selection", path: "/leave-selection" },
//     ],
//   },
//   {
//     text: "CM",
//     icon: <LeaderboardIcon />,
//     path: "/dashboard",
//     submenu: [
//       { text: "Basic Setting", path: "/basic-setting" },
//       { text: "Common Code", path: "/common-code" },
//     ],
//   },
// ];



// menuItems.js
import React, { useEffect, useState } from "react";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { _post } from "../CommonUtilAPI/GLApiClient";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListItemButton,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function MenuItems() {
  const [menuData, setMenuData] = useState([]);
  const [open, setOpen] = useState({});


  console.log(menuData);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await _post("/api/Menu", {
          USER_CD: window.sessionStorage.getItem("USER_CD"),
        });
        if (response.status === 200) {
          const processedData = processMenuData(response.data);
          setMenuData(processedData);
        } else {
          console.error("Failed to fetch menu data", response.status);
        }
      } catch (error) {
        console.error("Error fetching menu data", error);
      }
    };

    fetchMenuData();
  }, []);

  const processMenuData = (data) => {
    const menuMap = {};
    data.forEach((item) => {
      if (!menuMap[item.MODULE_CD]) {
        menuMap[item.MODULE_CD] = {
          text: item.MODULE_CD,
          icon: <LeaderboardIcon />,
          submenu: {},
        };
      }
      if (!menuMap[item.MODULE_CD].submenu[item.MENU_CD]) {
        menuMap[item.MODULE_CD].submenu[item.MENU_CD] = {
          text: item.MENU_NM,
          submenu: [],
        };
      }
      menuMap[item.MODULE_CD].submenu[item.MENU_CD].submenu.push({
        text: item.PAGE_NM,
        path: item.PAGE_LNK,
      });
    });

    return Object.values(menuMap).map((module) => ({
      ...module,
      submenu: Object.values(module.submenu),
    }));
  };

  const handleClick = (key) => {
    setOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  if (!menuData || menuData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <List>
      {menuData.map((module, index) => (
        <ListItem key={index} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => handleClick(module.text)}
            sx={{
              minHeight: 48,
              color: "white",
              justifyContent: "initial",
              px: 1.5,
              mt: 1,
              borderBottom: "1px solid #ccc",
              background: "#045e84",
              ":hover": {
                background: "#045e8490",
                color: "white",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 3,
                justifyContent: "center",
                color: "white",
                ":hover": {
                  background: "#045e8477",
                  color: "#045e84",
                },
              }}
            >
              {module.icon}
            </ListItemIcon>
            <ListItemText
              primary={module.text}
              style={{ margin: 0, overflow: "hidden" }}
            />
            {open[module.text] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse
            in={open[module.text]}
            timeout="auto"
            unmountOnExit
            sx={{ background: "#045e8430", color: "#045e84" }}
          >
            <List component="div" disablePadding>
              {module.submenu.map((menu, subIndex) => (
                <ListItem key={subIndex} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    onClick={() => handleClick(`${module.text}-${menu.text}`)}
                    sx={{
                      pl: 4,
                      color: "white",
                      justifyContent: "initial",
                      px: 1.5,
                      mt: 1,
                      borderBottom: "1px solid #ccc",
                      background: "#045e84",
                      ":hover": {
                        background: "#045e8490",
                        color: "white",
                      },
                    }}
                  >
                    <ListItemText primary={menu.text} />
                    {open[`${module.text}-${menu.text}`] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse
                    in={open[`${module.text}-${menu.text}`]}
                    timeout="auto"
                    unmountOnExit
                    sx={{ background: "#045e8430", color: "#045e84" }}
                  >
                    <List component="div" disablePadding>
                      {menu.submenu.map((subItem, subSubIndex) => (
                        <ListItem button key={subSubIndex} sx={{ pl: 8 }}>
                          <ListItemText primary={subItem.text} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </ListItem>
      ))}
    </List>
  );
}

