import { Box } from '@mui/material'
import React from 'react'
import SideBar from '../component/SideBar'
import CommonBtn from '../component/CommonComponnets/CommonBtn'

const GLCMA100100 = () => {
  return (
    <Box sx={{ display: "flex" }}>
    <SideBar />
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        marginTop: "55px",
        height: "93vh",
      }}
    >

      <CommonBtn
        PAGE_CD="GLCMA100100"
      />
    </Box>
  </Box>
  )
}

export default GLCMA100100