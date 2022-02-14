// const { listenerCount } = require('process');

const require = parent.window.require;

/**
 * 保存文件，以【姓名-时间戳.yaml】的格式保存至/data/unfinished/下
 * @param {*} content 
 * @param {*} name 
 */
function saveFile(content, name) {
    let fs = require('fs');
    let d = new Date();
    let path = "./data/unfinished/" + name + "-" + d.getTime() + ".yaml";
    let time = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    let realcontent = "姓名: " + name + "\n" + "入院时间: " + time + "\n" + content;
    // console.log(realcontent);
    fs.writeFileSync(path, realcontent);
    alert("保存成功");
}

/**
 * 根据filepath读取data内相应yaml文件，并解析为JSON对象返回
 * @param {*} filepath 
 * @returns JSON object
 */
function getMyFile(filepath) {
    let yaml = require('js-yaml');
    let fs = require('fs');
    let content = fs.readFileSync("./data/" + filepath, { encoding: "utf8" });
    let res = yaml.load(content);
    return eval(res);
}

/**
 * 根据类型读取unfinished或finished文件夹yaml文件列表，并解析为[[name,filename],...]格式数组返回
 * @param {*} type 
 * @returns [[name,filename],...]格式数组
 */
function getFileList(type) {
    let yaml = require('js-yaml');
    let fs = require("fs");

    if (type == 0) {
        var path = "./data/unfinished/";
    } else if (type == 1) {
        var path = "./data/finished/";
    }

    let fileGroup = new Array();
    let filelist = fs.readdirSync(path);
    filelist.forEach(function(file) {
        let content = fs.readFileSync(path + file, { encoding: "utf-8" });
        let res = yaml.load(content);
        let parsed = eval(res);
        fileGroup.push([parsed["姓名"], file]);
    });
    // console.log(fileGroup);
    return fileGroup;
}