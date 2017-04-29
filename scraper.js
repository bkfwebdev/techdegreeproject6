// tech degree project 6
// web scraper powered by node js , x-ray , and fast-csv
const Xray = require("x-ray");
const csv = require("fast-csv");
const request = require("request");
const fs = require("fs");
const appTarget = "http://shirts4mike.com/shirts.php";
const shirtXray = new Xray();
const mySelector = ".products li";
shirtXray(appTarget,mySelector,[{
	details:"a@href",
	shirtImage:"img@src",
	shirtName:"img@alt"
}])
(function(err,myData){
	let myString = JSON.stringify(myData);
	// console.log(myString);
	console.log(typeof(myData));
	console.dir(myData)
});

/*
Scraping and Saving Data:
The scraper should get the price, title, url and image url from the product page and save this information into a CSV file.
The information should be stored in an CSV file that is named for the date it was created, e.g. 2016-11-21.csv.
Assume that the the column headers in the CSV need to be in a certain order to be correctly entered into a database. They should be in this order: Title, Price, ImageURL, URL, and Time
The CSV file should be saved inside the ‘data’ folder.
If your program is run twice, it should overwrite the data in the CSV file with the updated information.
If http://shirts4mike.com is down, an error message describing the issue should appear in the console.
The error should be human-friendly, such as “There’s been a 404 error. Cannot connect to the to http://shirts4mike.com.”
To test and make sure the error message displays as expected, you can disable the wifi on your computer or device.
*/

