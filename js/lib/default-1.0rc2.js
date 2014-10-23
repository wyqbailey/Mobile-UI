/**
 * Created by JetBrains WebStorm.
 * User: bailey
 * Date: 11-11-7
 * Time: 下午3:53
 * To change this template use File | Settings | File Templates.
 */
$(document).bind("mobileinit", function(){
    $.mobile.loadingMessage="正在加载...";//loading信息
    $.mobile.ajaxEnabled=false;//是否异步加载链接页面
    $.mobile.pageLoadErrorMessage="加载失败";//加载失败后提示语
    $.mobile.page.prototype.options.backBtnText="返回";//返回按钮文字
    $.mobile.page.prototype.options.addBackBtn=false;//是否自动添加返回按钮
    $.mobile.page.prototype.options.headerTheme="c";//标题栏默认主题
    $.mobile.page.prototype.options.footerTheme="c";//底部栏默认主题
    $.mobile.dialog.prototype.options.theme="c";//dialog默认主题
    $.mobile.collapsible.prototype.options.iconTheme="c";//折叠面板的图标主题
    $.mobile.listview.prototype.options.dividerTheme="c";//列表分隔符默认主题
    $.mobile.listview.prototype.options.headerTheme="c";//列表标题主题
    $.mobile.listview.prototype.options.splitTheme="c";//列表分隔符主题
    $.mobile.listview.prototype.options.filterPlaceholder="输入关键字..."//列表搜索框提示文字
});
