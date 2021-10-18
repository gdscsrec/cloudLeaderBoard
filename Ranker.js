let fs = require('fs');
let csvToJson = require('convert-csv-to-json');
let fileInputName = __dirname + '/src/resources/rank.csv'; 
let fileoutputName=__dirname + '/src/resources/rank.json';
var i=0;
function CSVtoJSON(){
    let jsondata =csvToJson.fieldDelimiter(",").formatValueByType().getJsonFromCsv(fileInputName);
    
    jsondata.forEach(element => {
        element["total"]=element["#ofSkillBadgesCompletedinTrack1"]+element["#ofSkillBadgesCompletedinTrack2"]
        //console.log(element["#ofSkillBadgesCompletedinTrack1"]+element["#ofSkillBadgesCompletedinTrack2"])
    });
    jsondata.sort(dynamicSort("total"));
    var curtot=0;
    jsondata.forEach(element => {
        if(curtot==element["total"]){
            element["rank"]=i.toString();
        }
        else{
            i=i+1;
            curtot=element["total"];
            element["rank"]=i.toString();
        }
        console.log(jsondata[0]["StudentName"]);
    });
    
    fs.writeFile( fileoutputName,(JSON.stringify(jsondata)),function(err) {
        if (err) throw err;
            // if no error
        console.log("Data is written to file successfully.");
    });
}
function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? 1 : (a[property] > b[property]) ? -1 : 0;
        return result * sortOrder;
    }
}
CSVtoJSON();