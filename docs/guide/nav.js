var navstr = "" +
    "<li data-role='list-divider'>开发指南</li>" +
    "<li><a href='intro.html'>概览</a></li>" +
    "<li><a href='project.html'>创建项目</a></li>" +
    "<li><a href='html.html'>创建HTML页面</a></li>" +
    "<li><a href='cssjs.html'>引入css和js文件</a></li>" +
    "<li><a href='content.html'>添加HTML内容</a></li>" +
    "<li><a href='skin.html'>使用皮肤</a></li>" +
    "<li><a href='component.html'>配置控件</a></li>" +
    "<li><a href='style.html'>添加自定义样式</a></li>" +
    "<li><a href='js.html'>添加自定义脚本</a></li>" +
    "<li><a href='pages.html'>多个页面相互链接</a></li>" +
    "<li><a href='senior.html'>高级用法</a></li>";
var p = $.mobile.path.parseUrl(window.location.href).filename;
document.write(navstr);
$("li>a[href='"+p+"']").parent("li").addClass("active");