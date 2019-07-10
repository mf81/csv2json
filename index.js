const csvFilePath = "input.csv";
const csv = require("csvtojson/v2");

const result = async function run() {
  return await csv({
    delimiter: ";"
  }).fromFile(csvFilePath);
};
result().then(result => console.log(result));
