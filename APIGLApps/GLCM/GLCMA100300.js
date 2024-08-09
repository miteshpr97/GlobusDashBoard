const express = require("express");
const dbUtil = require("../DBCall/DBUtil");
const router = express.Router();

router.post("/codeNo",async(req,res) => {
  const strParaMeter = {
    MODULE_CD : req.body.MODULE_CD,
    SER_TEXT : req.body.SER_TEXT,
    REG_BY : req.body.REG_BY
  }; 
  try {
    const result = await dbUtil.dbUtil_Temp.Select_SP("SP_GLCMA100300_01" , strParaMeter);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "An error occurred while getting specific user detail." });
  }
});

router.post("/",async(req,res) => {
    const strParaMeter = {
      MODULE_CD : req.body.MODULE_CD,
      C_DVN : req.body.C_DVN,
      CODE_NO : req.body.CODE_NO,
      REG_BY : req.body.REG_BY
    }; 
    try {
      const result = await dbUtil.dbUtil_Temp.Select_SP("SP_GLCMA100300_02" , strParaMeter);
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "An error occurred while getting specific user detail." });
    }
});

module.exports = router;
