const fs = require('fs');

const defaultDataRootPath = "./data/";
const defaultDataPath = ["./data/unfinished", "./data/finished"];
const defaultConfPath = "./conf/"

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
    if (!fs.existsSync(defaultConfPath)) {
        fs.mkdirSync(defaultConfPath);
        fs.writeFileSync(defaultConfPath + "model.txt", "年龄:\n现病史:\n个人史:\n住址:\n家族史:\n电话:\n体格检查:\n辅助检查:");
    }
} catch (err) {
    console.log(err);
}