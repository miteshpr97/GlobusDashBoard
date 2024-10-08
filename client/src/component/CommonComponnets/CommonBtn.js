// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import CustomButton from "../Buttons/CustomButton";
// import { Box, Container, Stack } from "@mui/material";

// const CommonBtn = ({ PAGE_CD }) => {
//   const [permissions, setPermissions] = useState(null);
//   console.log(PAGE_CD, "page btn code");

//   useEffect(() => {
//     const fetchPermissions = async () => {
//       try {
//         const response = await axios.post("/api/GLCMA100200/", {
//           USER_CD: window.sessionStorage.getItem("USER_CD"),
//           // PAGE_CD: window.sessionStorage.getItem("PAGE_CD"),
//           PAGE_CD: PAGE_CD,
//         });

//         if (response.status === 200) {
//           const data = response.data;
//           console.log(data, "dataatatt");
//           const pagePermissions = data.find(
//             (page) => page.PAGE_CD === window.sessionStorage.getItem("PAGE_CD")
//           );
//           setPermissions(pagePermissions);
//         }
//       } catch (error) {
//         console.error("Error fetching permissions:", error);
//       }
//     };

//     fetchPermissions();
//   }, []);

//   const handleClick = (action) => {
//     alert(`${action} button clicked!`);
//   };

//   if (!permissions) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Box sx={{
//       width: "100%",
//       height: "60px",
//       background: "#dddddd",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "flex-start",
//       padding:"0px 10px"
//     }}>

//         <Stack direction="row" spacing={2}>
//           {permissions.PAGE_INQUIRY === "Y" && (
//             <CustomButton
//               variant="contained"
//               onClick={() => handleClick("INQUIRY")}
//               sx={{ backgroundColor: "#003285", color: "white" }}
//             > 
//               INQUIRY
//             </CustomButton>
//           )}

//           {permissions.PAGE_SAVE === "Y" && (
//             <CustomButton
//               variant="contained"
//               onClick={() => handleClick("SAVE")}
//               sx={{ backgroundColor: "#003285", color: "white" }}
//             >
//               SAVE
//             </CustomButton>
//           )}

//           {permissions.PAGE_UPDATE === "Y" && (
//             <CustomButton
//               variant="contained"
//               onClick={() => handleClick("UPDATE")}
//               sx={{ backgroundColor: "#7E8EF1", color: "white" }}
//             >
//               UPDATE
//             </CustomButton>
//           )}

//           {permissions.PAGE_DELETE === "Y" && (
//             <CustomButton
//               variant="contained"
//               onClick={() => handleClick("DELETE")}
//               sx={{ backgroundColor: "#A1C398", color: "white" }}
//             >
//               DELETE
//             </CustomButton>
//           )}

//           {permissions.PAGE_EXCEL === "Y" && (
//             <CustomButton
//               variant="contained"
//               onClick={() => handleClick("EXCEL")}
//               sx={{ backgroundColor: "#704264", color: "white" }}
//             >
//               EXCEL
//             </CustomButton>
//           )}
//         </Stack>
//     </Box>
//   );
// };

// export default CommonBtn;














import React, { useEffect, useState } from "react";

import CustomButton from "../Buttons/CustomButton";
import { Box, Stack } from "@mui/material";
import { _post_WithoutToken } from "../../CommonUtilAPI/GLApiClient";

const CommonBtn = ({ PAGE_CD, SAVE_CLICK }) => {
  const [permissions, setPermissions] = useState(null);
  console.log(PAGE_CD, "page btn code");

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const response = await _post_WithoutToken("/api/AccessRight/", {
          USER_CD: window.sessionStorage.getItem("USER_CD"),
          // PAGE_CD: window.sessionStorage.getItem("PAGE_CD"),
          PAGE_CD: PAGE_CD,
        });

        if (response.status === 200) {
          const data = response.data;
          console.log(data, "data 12345");
          const pagePermissions = data.find((page) => page.PAGE_CD === PAGE_CD);
          setPermissions(pagePermissions);
        }
      } catch (error) {
        console.error("Error fetching permissions:", error);
      }
    };

    fetchPermissions();
    console.log("after fecth per");
  }, []);

  const handleClick = (action) => {
    alert(`${action} button clicked!`);
  };

  //const SAVE_CLICK = () => {
  // alert(`Save CLick button clicked!`);
  // };

  if (!permissions) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        background: "#dddddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0px 10px",
      }}
    >
      <Stack direction="row" spacing={2}>
        {permissions.PAGE_INQUIRY === "Y" && (
          <CustomButton
            variant="contained"
            onClick={() => handleClick("INQUIRY")}
            sx={{ backgroundColor: "#003285", color: "white" }}
          >
            INQUIRY
          </CustomButton>
        )}

        {permissions.PAGE_SAVE === "Y" && (
          <CustomButton
            variant="contained"
            onClick={() => SAVE_CLICK()}
            sx={{ backgroundColor: "#003285", color: "white" }}
          >
            SAVE
          </CustomButton>
        )}

        {permissions.PAGE_UPDATE === "Y" && (
          <CustomButton
            variant="contained"
            onClick={() => handleClick("UPDATE")}
            sx={{ backgroundColor: "#7E8EF1", color: "white" }}
          >
            UPDATE
          </CustomButton>
        )}

        {permissions.PAGE_DELETE === "Y" && (
          <CustomButton
            variant="contained"
            onClick={() => handleClick("DELETE")}
            sx={{ backgroundColor: "#A1C398", color: "white" }}
          >
            DELETE
          </CustomButton>
        )}

        {permissions.PAGE_EXCEL === "Y" && (
          <CustomButton
            variant="contained"
            onClick={() => handleClick("EXCEL")}
            sx={{ backgroundColor: "#704264", color: "white" }}
          >
            EXCEL
          </CustomButton>
        )}
      </Stack>
    </Box>
  );
};

export default CommonBtn;
