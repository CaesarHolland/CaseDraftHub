// const require = parent.window.require;
// const fs = require('fs');
// const { BrowserWindow } = require('@electron/remote');

var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf(' electron/') > -1) {
    const remote = require('@electron/remote'); //修改默认对话框，修复electron弹出默认对话框后页面失去焦点的bug
    // 获取父窗口对象
    let mainwindow = remote.getCurrentWindow();
    alert = function(str) {
        var options = {
            type: 'warning',
            buttons: ["确定"],
            defaultId: 0,
            cancelId: 0,
            detail: str,
            message: ''
        }
        remote.dialog.showMessageBox(mainwindow, options)
    }
    confirm = function(str) {
        var options = {
            type: 'warning',
            buttons: ["确认", "取消"],
            defaultId: 0,
            cancelId: 1,
            detail: '',
            message: str
        }
        var flag = remote.dialog.showMessageBox(mainwindow, options);
        console.log(flag);
        if (flag == 0) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * 根据自定义模板model.txt初始化编辑器预定义的内容
 * @param {*} editor 
 */
function initModel(editor) {
    let fs = require('fs');
    let confpath = "./conf/model.txt";
    let content = fs.readFileSync(confpath, { encoding: "utf-8" });
    console.log(content);
    editor.setValue(content);
}

// function saveFile(content, name) {
//     // var fs = require('fs');
//     var d = new Date();
//     var path = "./data/unfinished/" + d.getTime() + ".yaml";
//     var time = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
//     var realcontent = "姓名: " + name + "\n" + "入院时间: " + time + "\n" + content;
//     // console.log(realcontent);
//     fs.writeFileSync(path, realcontent);
//     alert("保存成功");
// }


// function makeUuid() {

//     var s = [];
//     var hexDigits = "0123456789abcdef";

//     for (var i = 0; i < 36; i++) {

//         s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);

//     }

//     s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
//     s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
//     s[8] = s[13] = s[18] = s[23] = "-";
//     var uuid = s.join("");
//     return uuid;
// }