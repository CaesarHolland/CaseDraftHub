$.sidebarMenu = function(menu) {
    var animationSpeed = 300;

    $(menu).on('click', 'li a', function(e) {
        var $this = $(this);
        var checkElement = $this.next();

        if (checkElement.is('.treeview-menu') && checkElement.is(':visible')) {
            checkElement.slideUp(animationSpeed, function() {
                checkElement.removeClass('menu-open');
            });
            checkElement.parent("li").removeClass("active");
        }

        //If the menu is not visible
        else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
            //Get the parent menu
            var parent = $this.parents('ul').first();
            //Close all open menus within the parent
            var ul = parent.find('ul:visible').slideUp(animationSpeed);
            //Remove the menu-open class from the parent
            ul.removeClass('menu-open');
            //Get the parent li
            var parent_li = $this.parent("li");

            //Open the target menu and add the menu-open class
            checkElement.slideDown(animationSpeed, function() {
                //Add the class active to the parent li
                checkElement.addClass('menu-open');
                parent.find('li.active').removeClass('active');
                parent_li.addClass('active');
            });
        }
        //if this isn't a link, prevent the page from being redirected
        if (checkElement.is('.treeview-menu')) {
            e.preventDefault();
        }
    });
}

/**
 * a标签点击事件函数，负责根据触发事件的a标签的id设置iframe到相应的src
 * @param {*} obj 
 * @returns 
 */
function aClick(obj) {
    let id = $(obj).prop('id');
    if (id == "addfile") {
        $("iframe").attr("src", "html/edit.html");
        return;
    } else if (id == "modelEdit") {
        $("iframe").attr("src", "html/modelEditor.html");
        return;
    }

    let pid = $(obj).parents("ul").attr("id");
    let path = pid + "/" + id;
    sessionStorage.setItem("file", path);
    $("iframe").attr("src", "html/shower.html");
    return;
}