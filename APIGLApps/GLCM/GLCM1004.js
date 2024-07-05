const express = require("express");
const dbUtil = require("../DBCall/DBUtil");
const router = express.Router();
/**
 *@swagger
 * /AccessRights:
 *   get:
 *   description: List All Menu
 *   responses:
 *     200:
 *       description: success
 *
 */
//Access Rights For employee for Page...
router.post("/", (req, res) => {
  console.log("AccessRights");
  const resultCall = new Promise((resolve, reject) => {
    const strParaMeter = {
      USER_CD: req.body.USER_CD,
      PAGE_CD: req.body.PAGE_CD,
    };
    resolve(dbUtil.dbUtil_Temp.Select_SP("SP_GLCM1003", strParaMeter));
  });

  resultCall.then((result) => {
    console.log("Result", result);
    res.send(result);
  });
});

router.post("/Save", async (req, res) => {
  console.log("User's access");

  const strParaMeter = {
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
