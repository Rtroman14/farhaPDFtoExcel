const parse = require("csv-parse");
const fs = require("fs");

const csvData = [];
let newData = [];

let newDataSet = true;

fs.createReadStream(__dirname + "/Communities Database.csv")
    .pipe(parse({ delimiter: "," }))
    .on("data", (dataRow) => {
        csvData.push(dataRow);
    })
    .on("end", () => {
        objectify(csvData);
    });

const objectify = (csvData) => {
    csvData.forEach((row) => {});
};

// left off at line 3000
