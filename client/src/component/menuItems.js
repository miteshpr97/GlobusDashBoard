
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
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function MenuItems() {
  const [menuData, setMenuData] = useState([]);
  const [open, setOpen] = useState({});

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
    data.forEach(item => {
      if (!menuMap[item.MODULE_CD]) {
        menuMap[item.MODULE_CD] = {
          text: item.MODULE_NM,
          icon: <LeaderboardIcon />,
          path: "/dashboard", 
          submenu: []
        };
      }
      menuMap[item.MODULE_CD].submenu.push({
        text: item.PAGE_NM,
        path: item.PAGE_LNK
      });
    });
    return Object.values(menuMap);
  };

  const handleClick = (moduleCd) => {
    setOpen(prevState => ({ ...prevState, [moduleCd]: !prevState[moduleCd] }));
  };

  if (!menuData || menuData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <List>
      {menuData.map((menuItem, index) => (
        <div key={index}>
          <ListItem button onClick={() => handleClick(menuItem.text)}>
            <ListItemIcon>{menuItem.icon}</ListItemIcon>
            <ListItemText primary={menuItem.text} />
            {open[menuItem.text] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[menuItem.text]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {menuItem.submenu.map((subItem, subIndex) => (
                <ListItem button key={subIndex} sx={{ pl: 4 }}>
                  <ListItemText primary={subItem.text} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};
