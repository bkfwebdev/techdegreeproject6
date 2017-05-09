function writeData(scrapeResult) {
	let newStamps = timeStamps()
for (let x = 0; x <=7;x++){
	console.log(scrapeResult[x].shirtTitle, scrapeResult[x].shirtImage, scrapeResult[x].shirtLink, scrapeResult[x].shirtPrice);
    scrapeResult[x].theTime = newStamps[1];
}
	var csvData = json2csv({data:scrapeResult,fields:myFields});
	var myFileName = newStamps[0] + '.csv';
	fs.writeFile('./data/' + myFileName, csvData, function(err) {
	if (err) throw err;
	console.log('file saved');
	console.dir(csvData);
});
}

// var dateStampString = (toString(myYear)) + "-" + (toString(myMonth)) + "-" + (toString(myYear));
// console.log(timeMachine.toString());


/*json2csv({data:scrapeResult, fields:myFields}, function(err,csv) {
  if (err) console.log(err);
  fs.writeFile(myFileName, csv, function(err) {
    if (err) throw err;
    console.log('file saved');
});
};  
