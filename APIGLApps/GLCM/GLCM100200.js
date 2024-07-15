const express = require("express");
const dbUtil = require("../DBCall/DBUtil");
const router = express.Router();

// Getting template for user access Page...
router.get("/",async(req,res) => {
  console.log("GettingUserAccessPageTemplate");

  try {
    const result  = await dbUtil.dbUtil_Temp.Select_SP("SP_GLCMA100200_06");
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({error:"An error occured while fetching the template"});
  }
})

// Getting user access by their user cd  
router.post("/", (req, res) => {
  console.log("AccessRights");
  const resultCall = new Promise((resolve, reject) => {
    const strParaMeter = {
      USER_CD: req.body.USER_CD,
    };
    resolve(dbUtil.dbUtil_Temp.Select_SP("SP_GLCMA100200_05", strParaMeter));
  });

  resultCall.then((result) => {
    console.log("Result", result);
    res.send(result);
  });
});

// Save user's access
router.post("/Save", async (req, res) => {
  console.log("Save user's access");

  const strParaMeter = {
    CRUD:'C',
    USER_CD: req.body.USER_CD,
    PAGE_CD: req.body.PAGE_CD,
    PAGE_YN: req.body.PAGE_YN,
    PAGE_INQUIRY: req.body.PAGE_INQUIRY,
    PAGE_SAVE: req.body.PAGE_SAVE,
    PAGE_UPDATE: req.body.PAGE_UPDATE,
    PAGE_DELETE: req.body.PAGE_DELETE,
    PAGE_APP_Y1: req.body.PAGE_APP_Y1,
    PAGE_APP_Y2: req.body.PAGE_APP_Y2,
    PAGE_APP_Y3: req.body.PAGE_APP_Y3,
    PAGE_APP_Y4: req.body.PAGE_APP_Y4,
    PAGE_APP_Y5: req.body.PAGE_APP_Y5,
    PAGE_APP_Y6: req.body.PAGE_APP_Y6,
    PAGE_PRINT: req.body.PAGE_PRINT,
    PAGE_EXCEL: req.body.PAGE_EXCEL,
    REG_BY: req.body.REG_BY,
    REG_DTE: req.body.REG_DTE,
    RSTATUS: req.body.RSTATUS
  };

  try {
    const result = await dbUtil.dbUtil_Temp.Save_SP("SP_GLCMA100200_01", strParaMeter);
    console.log("Result", result);
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "An error occurred while giving access to the user." });
  }
});

// Update user's access
router.put("/Update", async (req, res) => {
  console.log("Updating user's access");

  const strParaMeter = {
    CRUD:'U',
    USER_CD: req.body.USER_CD,
    PAGE_CD: req.body.PAGE_CD,
    PAGE_YN: req.body.PAGE_YN,
    PAGE_INQUIRY: req.body.PAGE_INQUIRY,
    PAGE_SAVE: req.body.PAGE_SAVE,
    PAGE_UPDATE: req.body.PAGE_UPDATE,
    PAGE_DELETE: req.body.PAGE_DELETE,
    PAGE_APP_Y1: req.body.PAGE_APP_Y1,
    PAGE_APP_Y2: req.body.PAGE_APP_Y2,
    PAGE_APP_Y3: req.body.PAGE_APP_Y3,
    PAGE_APP_Y4: req.body.PAGE_APP_Y4,
    PAGE_APP_Y5: req.body.PAGE_APP_Y5,
    PAGE_APP_Y6: req.body.PAGE_APP_Y6,
    PAGE_PRINT: req.body.PAGE_PRINT,
    PAGE_EXCEL: req.body.PAGE_EXCEL,
    REG_BY: req.body.REG_BY,
    REG_DTE: req.body.REG_DTE,
    RSTATUS: req.body.RSTATUS
  };

  try {
    const result = await dbUtil.dbUtil_Temp.Save_SP("SP_GLCMA100200_01", strParaMeter);
    console.log("Result", result);
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "An error occurred while giving access to the user." });
  }
});

// Delete user's access
router.delete("/Delete", async (req, res) => {
  console.log("Deleting user's access");

  const strParaMeter = {
    CRUD:'D',
    USER_CD: req.body.USER_CD,
    PAGE_CD: req.body.PAGE_CD,
    PAGE_YN: req.body.PAGE_YN,
    PAGE_INQUIRY: req.body.PAGE_INQUIRY,
    PAGE_SAVE: req.body.PAGE_SAVE,
    PAGE_UPDATE: req.body.PAGE_UPDATE,
    PAGE_DELETE: req.body.PAGE_DELETE,
    PAGE_APP_Y1: req.body.PAGE_APP_Y1,
    PAGE_APP_Y2: req.body.PAGE_APP_Y2,
    PAGE_APP_Y3: req.body.PAGE_APP_Y3,
    PAGE_APP_Y4: req.body.PAGE_APP_Y4,
    PAGE_APP_Y5: req.body.PAGE_APP_Y5,
    PAGE_APP_Y6: req.body.PAGE_APP_Y6,
    PAGE_PRINT: req.body.PAGE_PRINT,
    PAGE_EXCEL: req.body.PAGE_EXCEL,
    REG_BY: req.body.REG_BY,
    REG_DTE: req.body.REG_DTE,
    RSTATUS: req.body.RSTATUS
  };

  try {
    const result = await dbUtil.dbUtil_Temp.Save_SP("SP_GLCMA100200_01", strParaMeter);
    console.log("Result", result);
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "An error occurred while giving access to the user." });
  }
});

module.exports = router;
