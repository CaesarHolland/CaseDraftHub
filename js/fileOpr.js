// const { listenerCount } = require('process');

const require = parent.window.require;
// const fs = require('fs');

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

function getMyFile(filename) {

}

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

function count(o) {
    var t = typeof o;

    if (t == 'string') {
        return o.length;
    } else if (t == 'object') {
        var n = 0;

        for (var i in o) {
            n++;
        }
        return n;
    }
    return false;
}