const express = require("express");
const objVerify = require("../CommonUtil/authVerify");
const dbUtil = require("../DBCall/DBUtil");
const router = express.Router();

//Get All Menu for UserId
router.get("/", objVerify, (req, res) => {
  console.log("Menu");
  const resultCall = new Promise((resolve, reject) => {
    const strParaMeter = { USER_ID: "", PASS_TOKEN: "" };
    resolve(dbUtil.dbUtil_Temp.Select_SP("[SP_GLCM1002]", strParaMeter));
  });

  resultCall.then((result) => {
    console.log("Result", result);
    res.send(result);
  });
});

router.post("/", objVerify, async (req, res) => {
  console.log("Menu");
  const resultCall = new Promise((resolve, reject) => {
    const strParaMeter = {
      USER_CD: req.body.USER_CD,
    };
    resolve(dbUtil.dbUtil_Temp.Select_SP("SP_GLCM1002", strParaMeter));
  });

  resultCall.then((result) => {
    console.log("Result", result);
    res.send(result);
  });
});





module.exports = router;
