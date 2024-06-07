import React, { useEffect } from 'react'
import { _post } from "./CommonUtilAPI/GLApiClient"

import axios from 'axios';

const Test = () => {

  // useEffect(() => {
  //   const fetchMenuData = async () => {
  //     try {
  //       const USER_CD = window.sessionStorage.getItem("USER_CD");
  //       console.log("User Code:", USER_CD); // Log to verify the user code

  //       const response = await _post("api/Menu", {
  //         USER_CD,
  //       });
        
  //       console.log("Menus", response.data[0]);
  //     } catch (error) {
  //       console.error("Error fetching menu data", error);
  //     }
  //   };
  //   fetchMenuData();
  // }, []);
  

  useEffect(() => {
    const fetchMenuData = async () => {
      const authTokenGl = window.sessionStorage.getItem("authToken");
      const userData = window.sessionStorage.getItem("USER_CD");

      if (!authTokenGl || !userData) {
        console.error("Auth token or user data is missing.");
        return;
      }

      try {
        const response = await axios.post(
          "/api/Menu", // Ensure the correct path is used
          { USER_CD: userData },
          {
            headers: {
              Authorization: `${authTokenGl}`,
            },
          }
        );

        if (response.status === 200) {
          
          console.log("Menus", response.data[0]);
        } else {
          console.error("Failed to fetch menu data", response);
        }
      } catch (error) {
        console.error("Error fetching menu data", error);
      }
    };

    fetchMenuData();
  }, []);


















  return (
    <div>
     hhh
    </div>
  )
}

export default Test
