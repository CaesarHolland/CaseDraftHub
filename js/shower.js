const { clipboard } = require('electron');

function mycopy(obj) {
    // let content = $(obj).parents('tr').contents().eq(1).contents().prop('value');
    let content = $(obj).parents('tr').contents().eq(1).prop("innerHTML");
    // console.log(content);
    clipboard.writeText(content);
}

function endAct(btn) {
    if ($(btn).prop("innerHTML") == "完成") {
        let filepath = sessionStorage.getItem("file");
        console.log(filepath);
    } else if ($(btn).prop("innerHTML") == "删除") {}
}