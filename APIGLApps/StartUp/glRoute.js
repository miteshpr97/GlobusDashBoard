const express = require("express");
const glErrors = require("../CommonUtil/glErrors");
const objVerify = require("../CommonUtil/authVerify")
const apiLogin = require("../GLCM/GLCM1001");
const apiMenu = require("../GLCM/GLCM1003");
const apiPageAccessRight = require("../GLCM/GLCM1004");
const apiUserCreation = require("../GLCM/GLCMA100100");
const apiAccessRight = require("../GLCM/GLCMA100200");

require("express-async-errors");
module.exports = function (app) {
  app.use(express.json());
  app.use("/api/login", apiLogin);
  app.use("/api/Menu", apiMenu);
  app.use("/api/PageAccessRight", apiPageAccessRight);
  app.use("/api/GLCMA100200", apiAccessRight);
  app.use("/api/UserCreation", apiUserCreation);
  app.use(glErrors);
};
