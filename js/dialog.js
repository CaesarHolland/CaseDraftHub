var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf(' electron/') > -1) {
    const remote = require('electron').remote; //修改默认对话框，修复electron弹出默认对话框后页面失去焦点的bug
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