// tech degree project 6
// web scraper powered by node js , x-ray , and fast-csv
const Xray = require("x-ray");
const json2csv = require("json2csv");
const request = require("request");
const fs = require("fs");
const appTarget = "http://shirts4mike.com/shirts.php";
const shirtXray = new Xray();
const mySelector = ".products li";
const myFields = ["Title", "Price", "ImageURL", "URL", "Time"];



function timeStamps(){
let myStamps = [];
let timeMachine = new Date;
let myYear = timeMachine.getFullYear();
let yearString = myYear.toString();
let myMonth = timeMachine.getMonth();
let monthString = myMonth.toString();
let myDay = timeMachine.getDate();
let dayString = myDay.toString();
let myHours = timeMachine.getHours() - 12;
let hoursString = myHours.toString();
let myMinutes = timeMachine.getMinutes();
let minutesString = myMinutes.toString();
let mySeconds = timeMachine.getSeconds();
let secondsString = mySeconds.toString();
myStamps[0] = yearString + "-" + monthString + "-" + dayString;
myStamps[1] = hoursString + ":" + minutesString + ":" + secondsString; 

return myStamps;
}
// var dateStampString = (toString(myYear)) + "-" + (toString(myMonth)) + "-" + (toString(myYear));
// console.log(timeMachine.toString());
function writeData(scrapeResult) {
	let newStamps = timeStamps()
	for (let i=0; i <= 7 ; i++){
		scrapeResult[i].theTime = newStamps[1]
	}
	let csvData = json2csv({data:scrapeResult,fields:myFields});
	let myFileName = newStamps[0] + ".csv";
	fs.writeFile("./data/" + myFileName, csv, function(err) {
  if (err) throw err;
  console.log('file saved');
});
}


try {
shirtXray(appTarget,mySelector,[{
	shirtTitle:"img@alt",
	shirtPrice:shirtXray("a@href",".price"),
	shirtImage:"img@src",
	shirtLink:"a@href"
	
	
}])
(function(err,myData){
	
	console.log(typeof(myData));
	console.dir(myData); 
	console.dir(err);
	writeData(myData);  
	
});
}
 catch (e){
	console.log("no internet connection");
	console.log(e);
}
stampTest = timeStamps();
console.log(stampTest[0],stampTest[1] );






/*

Instructions/grading points

Scraping and Saving Data:

>The scraper should get the price, title, url and image url from the product page and save this information into a CSV file.

>The information should be stored in an CSV file that is named for the date it was created, e.g. 2016-11-21.csv.

>Assume that the the column headers in the CSV need to be in a certain order to be correctly entered into a database. 

>They should be in this order: Title, Price, ImageURL, URL, and Time

>The CSV file should be saved inside the ‘data’ folder.

>If your program is run twice, it should overwrite the data in the CSV file with the updated information.

>If http://shirts4mike.com is down, an error message describing the issue should appear in the console.

>The error should be human-friendly, such as “There’s been a 404 error. Cannot connect to the to http://shirts4mike.com.”
To test and make sure the error message displays as expected, you can disable the wifi on your computer or device.
*/

/*
Extra Credit

To get an "exceeds" rating, you can expand on the project in the following ways:

2 steps

1.Edit your package.json file so that your program runs when the npm start command is run.

2.When an error occurs, log it to a file named scraper-error.log . 
It should append to the bottom of the file with a time stamp and error e.g. 
[Tue Feb 16 2016 10:02:12 GMT-0800 (PST)] <error message>

*/

