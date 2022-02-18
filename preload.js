const fs = require('fs');

const defaultDataRootPath = "./data/";
const defaultDataPath = ["./data/unfinished", "./data/finished"];

console.log("preload.js loaded");

try {
    if (!fs.existsSync(defaultDataRootPath)) {
        fs.mkdirSync(defaultDataRootPath);
        fs.mkdirSync(defaultDataPath[0]);
        fs.mkdirSync(defaultDataPath[1]);
    }
    if (!fs.existsSync(defaultDataPath[0])) {
        fs.mkdirSync(defaultDataPath[0]);
    }
    if (!fs.existsSync(defaultDataPath[1])) {
        fs.mkdirSync(defaultDataPath[1]);
    }
} catch (err) {
    console.log(err);
}