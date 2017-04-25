// tech degree project 6
// web scraper powered by node js , x-ray , and fast-csv
const Xray = require("x-ray");
const csv = require("fast-csv");
const request = require("request");
const fs = require("fs");
const appTarget = "http://shirts4mike.com/shirts.php";
const shirtXray = new Xray();
shirtXray(appTarget);
