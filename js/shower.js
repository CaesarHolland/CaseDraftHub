/**
 * 剪切板，将复制按钮前的文本节点的内容复制到剪切板
 * @param {*} obj 
 */
function mycopy(obj) {
    const { clipboard } = require('electron');
    // let content = $(obj).parents('tr').contents().eq(1).contents().prop('value');
    let content = $(obj).parents('tr').contents().eq(1).prop("innerHTML");
    // console.log(content);
    clipboard.writeText(content);
}

/**
 * 文件展示页按钮操作，完成操作将把文件从unfinished区域移动至finished区域，回滚则相反
 * @param {*} btn 
 */
function endAct(btn) {
    let fs = require('fs');
    let content = sessionStorage.getItem("file");
    let oldpath = "./data/" + content;

    if ($(btn).prop("innerHTML") == "完成") {
        let newpath = "./data/finished/" + content.split("/")[1];
        console.log(newpath);
        fs.renameSync(oldpath, newpath);
    } else if ($(btn).prop("innerHTML") == "删除") {
        fs.unlinkSync(oldpath);
    } else if ($(btn).prop("innerHTML") == "回滚") {
        let newpath = "./data/unfinished/" + content.split("/")[1];
        fs.renameSync(oldpath, newpath);
    }
}