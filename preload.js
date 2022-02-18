const fs = require('fs');

const defaultDataRootPath = "./data/";
const defaultDataPath = ["./data/unfinished", "./data/finished"];

try {
    if (!fs.statSync(defaultDataRootPath)) {
        fs.mkdirSync(defaultDataRootPath);
        fs.mkdirSync(defaultDataPath[0]);
        fs.mkdirSync(defaultDataPath[1]);
    }
    if (!fs.statSync(defaultDataPath[0])) {
        fs.mkdirSync(defaultDataPath[0]);
    }
    if (!fs.statSync(defaultDataPath[1])) {
        fs.mkdirSync(defaultDataPath[1]);
    }
} catch(err) {
    console.log(err);
}