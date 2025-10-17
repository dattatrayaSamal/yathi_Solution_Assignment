const express = require("express");
const { getMenu } = require("../controllers/menuController");
const router = express.Router();

routerouter.get("/", getMenu);

module.exports = router;
