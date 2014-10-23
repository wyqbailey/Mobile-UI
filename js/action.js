/**
 * Created by JetBrains WebStorm.
 * User: bailey
 * Date: 11-12-6
 * Time: 下午2:52
 * To change this template use File | Settings | File Templates.
 */

function widgets(type,xd,yd,helper){//控制控件悬放效果、生成控件
    var y = yd || 0;
    var ws = $("body>div[data-role='page']").find("*[wt]");
    var t = $("body>div[data-role='page']");
    if(ws.length){
        for (var i = 0; i < ws.length; i++) {
            var wi = ws.eq(i);
            var wt = wi.offset().top;
            wi.removeClass("hoverwb");
            if(yd>wt&&yd<wt+wi.height()){
                t = wi;
            }
        }
    }
    type=="hover"&&t.addClass("hoverwb");
    type=="clear"&& t.removeClass("hoverwb");
    if(type=="add"){
        var src = helper.attr("src");
        addWidget(t,src.substring(src.lastIndexOf("/")+1,src.lastIndexOf(".")-1));
    }
}

function addWidget(t,type){//生成控件的具体实现
    var ele;
    switch(type){
        case "span":
            ele = $("<span wt='span'>普通文字</span>");
            add(t,ele); break;
        case "p":
            ele = $("<p wt='p'>段落文字</p>");
            add(t,ele); break;
        case "img":
            ele = $("<img wt='img' src='../../../css/images/icons/imgL.png' />");
            add(t,ele); break;
        case "h1":
            ele = $("<h1 wt='h1'>标题</h1>");
            add(t,ele); break;
        case "textlink":
            ele = $("<a wt='textlink' href='#'>文字链接</a>");
            add(t,ele); break;
        case "hr":
            ele = $("<hr wt='hr' style='border: none;height: 1px; background-color: #aaa;'/>");
            add(t,ele); break;
        case "br":
            ele = $("<div wt='br' style='width:100%;height:14px; font-size: 12px; line-height: 12px; text-align: center; background-color: #eeeeee; color: #999; clear: both;'>仅在编辑模式下可见</div>");
            add(t,ele); break;
        case "button":
            ele = $("<button type='button'>按钮</button>");
            add(t,ele);
            ele.button().closest("div.ui-btn").attr("wt","button").addClass(ele.hasClass("ui-btn-left")?"ui-btn-left":(ele.hasClass("ui-btn-right")?"ui-btn-right":""));
            break;
        case "linkbtn":
            ele = $("<a data-role='button' href='#'>链接按钮</a>");
            add(t,ele);
            ele.button().closest("div.ui-btn").attr("wt","linkbtn").addClass(ele.hasClass("ui-btn-left")?"ui-btn-left":(ele.hasClass("ui-btn-right")?"ui-btn-right":""));;
            break;
        case "iconbtn":
            ele = $("<button type='button' data-icon='star'>图标按钮</button>");
            add(t,ele);
            ele.button().closest("div.ui-btn").attr("wt","iconbtn").addClass(ele.hasClass("ui-btn-left")?"ui-btn-left":(ele.hasClass("ui-btn-right")?"ui-btn-right":""));;
            break;
        case "iconlinkbtn":
            ele = $("<a data-role='button' href='#' data-icon='star'>图标链接按钮</a>");
            add(t,ele);
            ele.button().closest("div.ui-btn").attr("wt","iconlinkbtn").addClass(ele.hasClass("ui-btn-left")?"ui-btn-left":(ele.hasClass("ui-btn-right")?"ui-btn-right":""));;
            break;
        case "btnset":
            var btns = $("<button type='button'>按钮1</button><button type='button'>按钮2</button><button type='button'>按钮3</button>");
            ele = $("<div wt='btnset' data-type='horizontal' data-role='controlgroup'></div>").append(btns);
            add(t,ele);
            btns.button().closest("div.ui-btn").attr("mui","btnitem");
            ele.controlgroup();
            break;
        case "linkbtnset":
            var btns = $("<a href='#' data-role='button'>按钮1</a><a href='#' data-role='button'>按钮2</a><a href='#' data-role='button'>按钮3</a>");
            ele = $("<div wt='linkbtnset' data-type='horizontal' data-role='controlgroup'></div>").append(btns);
            add(t,ele);
            btns.button().closest("div.ui-btn").attr("mui","linkbtnitem");
            ele.controlgroup();
            break;
        case "iconbtnset":
            var btns = $("<button data-icon='plus' type='button'>按钮1</button><button data-icon='delete' type='button'>按钮2</button>");
            ele = $("<div wt='iconbtnset' data-type='horizontal' data-role='controlgroup'></div>").append(btns);
            add(t,ele);
            btns.button().closest("div.ui-btn").attr("mui","iconbtnitem");
            ele.controlgroup();
            break;
        case "iconlinkbtnset":
            var btns = $("<a href='#' data-icon='plus' data-role='button'>按钮1</a><a href='#' data-icon='delete' data-role='button'>按钮2</a>");
            ele = $("<div wt='iconlinkbtnset' data-type='horizontal' data-role='controlgroup'></div>").append(btns);
            add(t,ele);
            btns.button().closest("div.ui-btn").attr("mui","iconlinkbtnitem");
            ele.controlgroup();
            break;
        case "jheader":
            var header = $("<div wt='jheader' data-role='header' class='ui-header ui-bar-c'><h1 class='ui-title'>标题</h1></div>");
            add(t,header);
            break;
        case "jfooter":
            var footer = $("<div wt='jfooter' data-role='footer' class='ui-footer ui-bar-c'><h4 wt='h1' class='ui-title'>页脚信息</h4></div>");
            add(t,footer);
            break;
        case "bar":
            var footer = $("<div wt='bar' class='ui-bar ui-bar-b'><h3>工具条</h3></div>");
            add(t,footer);
            break;
        case "jnavbar":
            var navbar = $("<div wt='jnavbar' data-role='navbar'><ul><li><a mui='navbaritem' href='#'>One</a></li><li><a  mui='navbaritem' href='#'>Two</a></li><li><a mui='navbaritem' href='#'>Three</a></li></ul></div>");
            add(t,navbar);
            navbar.navbar();
            break;
        case "iconnavbar":
            var navbar = $("<div wt='iconnavbar' data-role='navbar'><ul><li><a mui='iconnavbaritem' href='#' data-icon='grid'>One</a></li><li><a mui='iconnavbaritem' href='#' data-icon='star'>Two</a></li><li><a mui='iconnavbaritem' href='#' data-icon='gear'>Three</a></li></ul></div>");
            add(t,navbar);
            navbar.navbar();
            break;
        case "linklv":
            var lv = $("<ul wt='linklv' data-role='listview' data-inset='true'><li mui='linklvitem'><a href='#'>第一条</a></li><li mui='linklvitem'><a href='#'>第二条</a></li><li mui='linklvitem'><a href='#'>第三条</a></li></ul>");
            add(t,lv);
            lv.listview();
            break;
        case "orderlv":
            var lv = $("<ol wt='orderlv' data-role='listview' data-inset='true'><li mui='linklvitem'><a href='#'>第一条</a></li><li mui='linklvitem'><a href='#'>第二条</a></li><li mui='linklvitem'><a href='#'>第三条</a></li></ol>");
            add(t,lv);
            lv.listview();
            break;
        case "readonlylv":
            var lv = $("<ul wt='readonlylv' data-role='listview' data-inset='true'><li mui='readonlylvitem'>第一条</li><li mui='readonlylvitem'>第二条</li><li mui='readonlylvitem'>第三条</li></ul>");
            add(t,lv);
            lv.listview();
            break;
        case "dividerlv":
            var lv = $("<ul wt='dividerlv' data-role='listview' data-inset='true'><li mui='divider' data-role='list-divider'>A</li><li mui='linklvitem'><a href='#'>Apple</a></li><li mui='linklvitem'><a href='#'>amazon</a></li><li mui='linklvitem'><a href='#'>alibaba</a></li></ul>");
            add(t,lv);
            lv.listview();
            break;
        case "imgslv":
            var lv = $("<ul wt='imgslv' data-role='listview' data-inset='true'><li><a mui='imgslvitem' href='#'><img mui='img' src='../nresources/images/icon/1.png' width='80'><h3 mui='h1'>Map</h3><p mui='p'>地图信息</p></a></li><li><a mui='imgslvitem' href='#'><img mui='img' src='../nresources/images/icon/13.png' width='80'><h3 mui='h1'>System</h3><p mui='p'>系统信息</p></a></li></ul>");
            add(t,lv);
            lv.listview();
            break;
        case "splitlv":
            var lv = $("<ul wt='splitlv' data-role='listview' data-inset='true'><li><a href='#'><img src='../nresources/images/icon/1.png' width='80'><h3>Map</h3><p>地图信息</p></a><a href='#'>分离按钮</a></li><li><a href='#'><img src='../nresources/images/icon/13.png' width='80'><h3>System</h3><p>系统信息</p></a><a href='#'>分离按钮</a></li></ul>");
            add(t,lv);
            lv.listview();
            break;
        case "iconslv":
            var lv = $("<ul wt='iconslv' data-role='listview' data-inset='true'><li mui='iconlvitem'><a href='#'><img mui='img' src='../nresources/images/icon/gf.png' class='ui-li-icon'>France </a></li><li mui='iconlvitem'><a href='#'><img mui='img' src='../nresources/images/icon/de.png' class='ui-li-icon'>Germany </a></li></ul>");
            add(t,lv);
            lv.listview();
            break;
        case "countlv":
            var lv = $("<ul wt='countlv' data-role='listview' data-inset='true'><li mui='countlvitem'><a href='#'>Inbox<span mui='span' class='ui-li-count'>12</span></a></li><li mui='countlvitem'><a href='#'>Outbox<span mui='span' class='ui-li-count'>0</span></a></li></ul>");
            add(t,lv);
            lv.listview();
            break;
        case "searchlv":
            var lv = $("<ul data-role='listview' data-inset='true' data-filter='true'><li data-role='list-divider'>A</li><li><a href='#'>Apple</a></li><li><a href='#'>amazon</a></li><li><a href='#'>alibaba</a></li></ul>");
            var box = $("<div wt='searchlv'></div>").append(lv);
            add(t,box);
            lv.listview();
            break;
        case "label":
            var label = $("<label wt='label'>标签：</label>");
            add(t,label);
            break;
        case "textinput":
            var input = $("<input wt='textinput' type='text' placeholder='text' />");
            //var box = $("<div wt='fieldcontain' data-role='fieldcontain'></div>").append(input);
            add(t,input);
            //box.fieldcontain();
            input.textinput();
            break;
        case "password":
            var input = $("<input wt='password' type='password' placeholder='password' />");
            add(t,input);
            input.textinput();
            break;
        case "searchinput":
            var input = $("<input type='search' placeholder='keywords' />");
            add(t,input);
            input.textinput().parent("div").attr("wt","searchinput");
            break;
        case "textarea":
            var input = $("<textarea rows='3' wt='textarea' placeholder='text'></textarea>");
            add(t,input);
            input.textinput();
            break;
        case "slider":
            var input = $("<input type='number' value='25' min='0' max='100' />");
            var box = $("<div wt='slider'></div>").append(input);
            add(t,box);
            input.slider();
            break;
        case "toggle":
            var input = $("<select wt='toggle' data-role='slider'><option value='off'>Off</option><option value='on'>On</option></select>");
            add(t,input);
            input.slider().next("div.ui-slider-switch").attr("wt","toggle");
            break;
        case "radio":
            var radios = $("<input type='radio' name='radio-view' id='radio-view-a' value='list' /><label for='radio-view-a'>List</label><input type='radio' name='radio-view' id='radio-view-b' value='grid'  /><label for='radio-view-b'>Grid</label><input type='radio' name='radio-view' id='radio-view-c' value='gallery'  /><label for='radio-view-c'>Gallery</label>");
            ele = $("<fieldset wt='radio' data-role='controlgroup' data-type='horizontal'>").append(radios);
            add(t,ele);
            radios.checkboxradio().find("span.ui-btn-text").attr("mui","span");
            ele.controlgroup();
            break;
        case "checkbox":
            var radios = $("<input type='checkbox' name='checkbox-6' id='checkbox-6' /><label for='checkbox-6'>萝卜</label><input type='checkbox' name='checkbox-7' id='checkbox-7' /><label for='checkbox-7'>青菜</label><input type='checkbox' name='checkbox-8' id='checkbox-8' /><label for='checkbox-8'>苹果</label>");
            ele = $("<fieldset wt='checkbox' data-role='controlgroup' data-type='horizontal'>").append(radios);
            add(t,ele);
            radios.checkboxradio().find("span.ui-btn-text").attr("mui","span");
            ele.controlgroup();
            break;
        case "select":
            var select = $("<select><option value='1'>选择第一项</option><option value='2'>选择第二项</option><option value='3'>选择第三项</option></select>");
            add(t,select);
            select.selectmenu().parent("div.ui-btn").attr("wt","select").parent("div.ui-select").attr("wt","ui-select");
            break;
        case "collapsible":
            var collapsible = $("<div wt='collapsible' data-role='collapsible' data-collapsed='false' data-content-theme='c'><h3>标题</h3><p mui='p'>折叠区内容</p></div>");
            add(t,collapsible);
            collapsible.collapsible().find("h3 span.ui-btn-text").attr("mui","span").find("span").remove();
            break;
        case "collset":
            var collsets = $("<div data-role='collapsible' mui='collapsible'><h3>Section 1</h3><p mui='p'>Collapsible content</p></div><div data-role='collapsible' mui='collapsible'><h3>Section 2</h3><p mui='p'>Collapsible content</p></div><div data-role='collapsible' mui='collapsible'><h3>Section 3</h3><p mui='p'>Collapsible content</p></div>");
            var collset = $("<div wt='collset' data-role='collapsible-set' data-theme='c' data-content-theme='d'></div>").append(collsets);
            add(t,collset);
            collsets.collapsible().find("h3 span.ui-btn-text").attr("mui","span").find("span").remove();;
            break;
        case "icongrid":
            var icons = $("<div wt='icongrid' data-role='icongrid'><a href='#' mui='link'><img mui='img' src='../nresources/images/icon/1.png'><span mui='span'>列表页</span></a><a href='#' mui='link'><img mui='img' src='../nresources/images/icon/2.png'><span mui='span'>信息页</span></a><a mui='link' href='#'><img mui='img' src='../nresources/images/icon/3.png'><span mui='span'>空白页面</span></a><a mui='link' href='#'><img mui='img' src='../nresources/images/icon/4.png'><span mui='span'>通讯录</span></a></div>");
            add(t,icons);
            icons.icongrid();
            break;
        case "jtab":
            var tabs = $("<div wt='jtab' data-role='tabs'><ul><li><a href='#tab1' mui='span'>Tab1</a></li><li><a href='#tab2' mui='span'>Tab2</a></li></ul><div id='tab1' mui='p'>tab1内容区</div><div id='tab2' mui='p'>tab2内容区</div></div>");
            add(t,tabs);
            tabs.tabs();
            break;
        case "slidebox":
            var boxs = $("<div wt='slidebox' data-auto='false' data-role='slidebox'><div mui='p' style='background: #eee;width:300px; min-height:100px;'>第一屏</div><div mui='p' style='background: #eee;width:300px; min-height:100px;'>第二屏</div><div mui='p' style='background: #eee;width:300px; min-height:100px;'>第三屏</div></div>");
            add(t,boxs);
            boxs.slidebox();
            break;
        case "imgslidebox":
            var boxs = $("<div wt='slidebox' data-auto='false' data-role='slidebox' style='text-align: center;'><img mui='img' src='../../../images/case2.png'><img mui='img' src='../../../images/case3.png'><img mui='img' src='../../../images/case5.png'></div>");
            add(t,boxs);
            boxs.slidebox();
            break;
        case "andrdate":
            var input = $("<input placeholder='日期' type='date' data-role='datebox' data-options='{\"mode\":\"datebox\"}'/>");
            add(t,input);
            input.datebox().parent("div").attr("wt","andrdate");
            break;
        case "andrtime":
            var input = $("<input placeholder='时间' type='date' data-role='datebox' data-options='{\"mode\":\"timebox\"}'/>");
            add(t,input);
            input.datebox().parent("div").attr("wt","andrtime");
            break;
        case "iosdate":
            var input = $("<input placeholder='日期' type='date' data-role='datebox' data-options='{\"mode\":\"flipbox\"}'/>");
            add(t,input);
            input.datebox().parent("div").attr("wt","iosdate");
            break;
        case "iostime":
            var input = $("<input placeholder='时间' type='date' data-role='datebox' data-options='{\"mode\":\"timeflipbox\"}'/>");
            add(t,input);
            input.datebox().parent("div").attr("wt","iostime");
            break;
        case "calendar":
            var input = $("<input placeholder='日历' type='date' data-role='datebox' data-options='{\"mode\":\"calbox\"}'/>");
            add(t,input);
            input.datebox().parent("div").attr("wt","calendar");
            break;
        case "hradio":
            ele = $("<input type='radio' wt='hradio' data-role='none' />");
            add(t,ele); break;
        case "hcheckbox":
            ele = $("<input type='checkbox' wt='hcheckbox' data-role='none' />");
            add(t,ele); break;
    }
    function add(t,ele){
        var role = t.attr("data-role");
        var elerole = ele.attr("data-role")|| '';
        if(elerole=="header"){
            if($("div[data-role='header']").length==0) {
                $("div[data-role='page']").prepend(ele);
                setiScroll();
            }
            else{
                alert("每个页面只允许有一个顶部栏");
            }
            return;
        }
        if(elerole=="footer"){
            if($("div[data-role='footer']").length==0){
                $("div[data-role='page']").append(ele);
                setiScroll();
            }
            else{
                alert("每个页面只允许有一个底部栏")
            }
            return;
        }
        if(role=="header"){
            if(elerole=="button"){
                var hbtns = t.find("*[data-role='button']").length;
                if(hbtns<2){
                    ele.addClass(hbtns==0?"ui-btn-left":"ui-btn-right").appendTo(t);
                }else{
                    alert("顶部栏最多允许包含两个按钮");
                    return;
                }
            }else{
                alert("顶部栏只允许包含最多两个按钮，不能包含其他控件");
                return;
            }
        }
        if(role=="page"||role=="content"){
            t.append(ele);
        }else{
            t.after(ele);
        }
    }
}

var selWidget;//当前选中的控件

$(function(){
    selWidget = $("div[data-role='page']")
    window.parent.loadF();

    var wst,wet,mst,met,ss;
    //select widgets
    $("*[wt]").live("mousedown",function(e){
        wst = new Date().getTime();
    });
    $("*[wt]").live("mouseup",function(e){
        wet = new Date().getTime();
        if(wet-wst<500){
            var $this = $(this);
        e.stopPropagation();
        loadOptForm($this,"wt");
        }
    });
    $("*[mui]").live("mousedown",function(e){
        mst = new Date().getTime();var $this = $(this);
        ss = setTimeout(function(){loadOptForm($this,"mui");},500);
    });
    $("*[mui]").live("mouseup",function(e){
        met = new Date().getTime();
        if(met-mst<500){
           clearTimeout(ss);
        }
    });
    $("*[mui]").live("dblclick",function(e){
        e.stopPropagation();
        var $this = $(this);
        loadOptForm($this,"mui");
    });
    
    //屏蔽右键
    $(document).bind("contextmenu",function(e){return false;});
    //快捷键支持
    var k = new Kibo();
    k.down('f5', function() { return false;});//确认刷新
    k.down('delete',function(){$(window.parent.document.getElementById("deleteW")).trigger("click");});
    k.down('up',function(){$(window.parent.document.getElementById("goupW")).trigger("click");});
    k.down('down',function(){$(window.parent.document.getElementById("godownW")).trigger("click");});

});

$('div[data-role="page"]').live('pageinit',function(event){
    //控件拖放排序
    $("div[data-role='content']").sortable({cancel:"input.cancel,button.cancel",cursor:"move"});
    $("div[data-role='content']").disableSelection();
});

function loadOptForm($this,attr){
        $(".mui-selected").removeClass("mui-selected");
        $this.addClass("mui-selected");
        selWidget = $this;
        var pd = $(window.parent.document);
        var optFid = "#"+$this.attr(attr)+"OptF";
        if(pd.find(optFid).length){
            pd.find("#scrollarea>form").addClass("hidden");
            pd.find(optFid).removeClass("hidden");
            window.parent.getOption(selWidget,optFid);
        }else{
            var f = $("<form></form>").attr("id",$this.attr(attr)+"OptF");
            pd.find("#scrollarea").append(f).find("form").addClass("hidden");
            f.load("../../options/"+$this.attr(attr)+".html?"+Math.random(),function(){//加了随机数，避免缓存
                window.parent.initInputs(optFid);
                window.parent.getOption(selWidget,optFid);
            }).removeClass("hidden");
        }
        pd.find("#operation").removeClass("hidden");
        if($this.attr(attr)=="content"){pd.find("#operation").addClass("hidden");}
        return false;
}

//控件参数设置
function setOption(t){
    var rel = t.attr("rel");
    var name = t.attr("name") || "";
    var value;
    //特殊表单元素取值处理
    if(t.is(":checkbox")){
        value = t.attr("checked");
    }
    else{
        value = t.val();
    }

    switch(rel){
        //删除、上移、下移处理
        case "delete":
            if(selWidget.attr("wt")=="content"||selWidget.attr("data-role")=='page'){return;}

            var wt = selWidget.attr("wt")||selWidget.attr("mui");
            if(wt=="navbaritem"||wt=="iconnavbaritem"){
                var bar = selWidget.closest("div");
                selWidget.parent("li").remove();
                var ele = bar.clone().removeClass();
                ele.find("ul").removeClass().find("li").removeClass().find("a").each(function(){
                    var t = $(this).find("span.ui-btn-text").text();
                    $(this).empty().removeClass().text(t);
                });
                bar.replaceWith(ele);
                ele.navbar();
                return;
            }
            
            selWidget.remove();
            break;
        case "goup":
            if(selWidget.prev().length){selWidget.prev().insertAfter(selWidget);}
            break;
        case "godown":
            if(selWidget.next().length){selWidget.next().insertBefore(selWidget);}
            break;
        //css类型处理
        case "css":
            var wt = selWidget.attr("wt")||selWidget.attr("mui");
            if(wt=="andrdate"||wt=="andrtime"||wt=="iosdate"||wt=="iostime"||wt=="calendar"){
                selWidget = selWidget.find("input");
            }
            if(name=="background-image"){value="url('"+value+"')";}
            if(name=="font-weight"){value = value=="checked"?"bold":"normal";}
            if(name=="font-style"){value = value=="checked"?"italic":"normal";}
            if(name=="underline"){
                value = value=="checked"?name:"none";
                name = "text-decoration";
            }
            selWidget.css(name,value);
            break;
        //attr类型处理
        case "attr":
            var wt = selWidget.attr("wt")||selWidget.attr("mui");
            if(wt=="linkbtn"||wt=="iconlinkbtn"||wt=="linkbtnitem"||wt=="iconlinkbtnitem"||wt=="linklvitem"||wt=="orderlvitem"){
                selWidget = selWidget.find("a");
            }
            if(wt=="searchinput"||wt=="slider"||wt=="andrdate"||wt=="andrtime"||wt=="iosdate"||wt=="iostime"||wt=="calendar"){
                selWidget = selWidget.find("input");
            }
            selWidget.attr(name,value);
            break;
        //text类型处理
        case "text":
            selWidget.text(value);
            break;
        //val类型处理
        case "val":
            //selWidget.val(value);
            //firefox、chrome等无法使用html()方法获取动态修改的value值，所以不建议提供value项配置
            selWidget.html(value);//该方法仅为textarea使用
            break;
        //class类型处理
        case "class":
            value=="checked"?selWidget.addClass(name):selWidget.removeClass(name);
            break;

        //data-xx类型处理
        case "data":
            var wt = selWidget.attr("wt")||selWidget.attr("mui");
            switch(name){
                case "text":
                    if(wt=="button"||wt=="iconbtn"||wt=="btnitem"||wt=="iconbtnitem"){
                        selWidget.find("span,button").text(value);
                    }
                    if(wt=="linkbtn"||wt=="iconlinkbtn"||wt=="linkbtnitem"||wt=="iconlinkbtnitem"){
                        selWidget.find("span,a").text(value);
                    }
                    if(wt=="jheader"){
                        selWidget.find("h1").text(value);
                    }
                    if(wt=="navbaritem"||wt=="iconnavbaritem"){
                        selWidget.find("span.ui-btn-text").text(value);
                    }
                    if(wt=="linklvitem"||wt=="orderlvitem"){
                        selWidget.find("a").text(value);
                    }
                    if(wt=="iconlvitem"){
                        var img = selWidget.find("a").html();
                        img=img.slice(0,img.indexOf(">")+1);
                        selWidget.find("a").html(img+value);
                    }
                    if(wt=="countlvitem"){
                        var span = selWidget.find("a").html();
                        span=span.slice(span.indexOf("<span"));
                        selWidget.find("a").html(value+span);
                    }
                    break;
                case "data-inline":
                    var ele;
                    if(wt=="button"||wt=="iconbtn"){ele = selWidget.find("button");}
                    if(wt=="linkbtn"||wt=="iconlinkbtn"){ele = selWidget.find("a");}
                    if(value=="true"){
                        selWidget.addClass("ui-btn-inline");
                        ele.attr(name,"true");
                    }else{
                        selWidget.removeClass("ui-btn-inline");
                        ele.attr(name,"false");
                    }
                    break;
                case "data-corners":
                    var ele;
                    if(wt=="button"||wt=="iconbtn"){ele = selWidget.find("button");}
                    if(wt=="linkbtn"||wt=="iconlinkbtn"){ele = selWidget.find("a");}
                    if(wt=="select"){ele = selWidget.find("select");}
                    if(value=="checked"){
                        selWidget.find("span").andSelf().addClass("ui-btn-corner-all");
                        ele.attr(name,"true");
                    }else{
                        selWidget.find("span").andSelf().removeClass("ui-btn-corner-all");
                        ele.attr(name,"false");
                    }
                    break;
                case "data-shadow":
                    var ele;
                    if(wt=="button"||wt=="iconbtn"){ele = selWidget.find("button");}
                    if(wt=="linkbtn"||wt=="iconlinkbtn"){ele = selWidget.find("a");}
                    if(wt=="select"){ele = selWidget.find("select");}
                    if(value=="checked"){
                        selWidget.addClass("ui-shadow");
                        ele.attr(name,"true");
                    }else{
                        selWidget.removeClass("ui-shadow");
                        ele.attr(name,"false");
                    }
                    break;
                case "data-icon":
                    var ele;
                    if(wt=="iconbtn"){
                        ele = selWidget.find("button").clone().attr(name,value).removeClass("ui-btn-hidden");
                        selWidget.replaceWith(ele);
                        ele.button().closest("div.ui-btn").attr("wt",wt);
                    }
                    if(wt=="iconlinkbtn"){
                        ele = selWidget.find("a").clone().attr(name,value).removeClass("ui-btn-hidden");
                        selWidget.replaceWith(ele);
                        ele.button().closest("div.ui-btn").attr("wt",wt);
                    }
                    if(wt=="iconbtnitem"){
                        selWidget.find("button").attr(name,value);
                        ele = selWidget.parent().find("button").clone().removeClass("ui-btn-hidden");
                        var box = selWidget.parent().clone().removeClass("mui-selected ui-controlgroup-vertical ui-controlgroup-horizontal").empty().append(ele);
                        selWidget.parent().replaceWith(box);
                        ele.button().closest("div.ui-btn").attr("mui","iconbtnitem");
                        box.controlgroup();
                    }
                    if(wt=="iconlinkbtnitem"){
                        selWidget.find("a").attr(name,value);
                        ele = selWidget.parent().find("a").clone().removeClass("ui-btn-hidden");
                        var box = selWidget.parent().clone().removeClass("mui-selected ui-controlgroup-vertical ui-controlgroup-horizontal").empty().append(ele);
                        selWidget.parent().replaceWith(box);
                        ele.button().closest("div.ui-btn").attr("mui","iconlinkbtnitem");
                        box.controlgroup();
                    }
                    if(wt=="iconnavbaritem"){
                        selWidget.find("a").attr(name,value);
                        selWidget.find("span.ui-icon").removeClass().addClass("ui-icon ui-icon-shadow ui-icon-"+value);
                    }
                    break;
                case "data-iconpos":
                    if(wt=="iconbtn"){
                        var ele = selWidget.find("button").clone().attr(name,value).removeClass("ui-btn-hidden");
                        selWidget.replaceWith(ele);
                        ele.button().closest("div.ui-btn").attr("wt",wt);
                    }
                    if(wt=="iconlinkbtn"){
                        var ele = selWidget.find("a").clone().attr(name,value).removeClass("ui-btn-hidden");
                        selWidget.replaceWith(ele);
                        ele.button().closest("div.ui-btn").attr("wt",wt);
                    }
                    if(wt=="iconbtnset"){
                        var ele = selWidget.find("button").clone().attr(name,value).removeClass("ui-btn-hidden");
                        var box = selWidget.clone().removeClass("mui-selected ui-controlgroup-vertical ui-controlgroup-horizontal").empty().append(ele);
                        selWidget.replaceWith(box);
                        ele.button().closest("div.ui-btn").attr("mui","iconbtnitem");
                        box.controlgroup();
                    }
                    if(wt=="iconlinkbtnset"){
                        var ele = selWidget.find("a").clone().attr(name,value).removeClass("ui-btn-hidden");
                        var box = selWidget.clone().removeClass("mui-selected ui-controlgroup-vertical ui-controlgroup-horizontal").empty().append(ele);
                        selWidget.replaceWith(box);
                        ele.button().closest("div.ui-btn").attr("mui","iconlinkbtnitem");
                        box.controlgroup();
                    }
                    if(wt=="iconnavbar"){
                        selWidget.attr(name,value).find("a").removeClass("ui-btn-icon-left ui-btn-icon-right ui-btn-icon-top ui-btn-icon-bottom").addClass("ui-btn-icon-"+value);
                    }
                    break;
                case "data-type":
                    if(wt=="radio"||wt=="checkbox"){
                        var ele = selWidget.find("input,label").clone().removeClass().attr(name,value).each(function(){
                            if($(this).is("label")){
                                var t = $(this).find("span.ui-btn-text").text();
                                $(this).empty().text(t);
                            }
                        });
                        var box = selWidget.clone().attr(name,value).removeClass().empty().append(ele);
                        selWidget.replaceWith(box);
                        ele.checkboxradio().find("span.ui-btn-text").attr("mui","span");
                        box.controlgroup();
                        return;
                    }
                    if(value=="horizontal"){
                        selWidget.removeClass("ui-controlgroup-vertical").addClass("ui-controlgroup-horizontal");
                        selWidget.find(".ui-btn").removeClass("ui-corner-top ui-corner-bottom").eq(0).addClass("ui-corner-left").end().last().addClass("ui-corner-right");
                    }
                    if(value=="vertical"){
                        selWidget.removeClass("ui-controlgroup-horizontal").addClass("ui-controlgroup-vertical");
                        selWidget.find(".ui-btn").removeClass("ui-corner-left ui-corner-right").eq(0).addClass("ui-corner-top").end().last().addClass("ui-corner-bottom");
                    }
                    selWidget.attr(name,value);
                    break;
                case "data-theme":
                    if(wt=="button"||wt=="iconbtn"){
                        var ele = selWidget.find("button").clone().attr("data-theme",value).removeClass("ui-btn-hidden");
                        selWidget.replaceWith(ele);
                        ele.button().closest("div.ui-btn").attr("wt",wt);
                    }
                    if(wt=="linkbtn"||wt=="iconlinkbtn"){
                        var ele = selWidget.find("a").clone().attr("data-theme",value).removeClass("ui-btn-hidden");
                        selWidget.replaceWith(ele);
                        ele.button().closest("div.ui-btn").attr("wt",wt);
                    }
                    if(wt=="btnset"||wt=="iconbtnset"){
                        var ele = selWidget.find("button").clone().attr("data-theme",value).removeClass("ui-btn-hidden");
                        var box = selWidget.clone().removeClass("mui-selected ui-controlgroup-vertical ui-controlgroup-horizontal").empty().append(ele);
                        selWidget.replaceWith(box);
                        ele.button().closest("div.ui-btn").attr("mui",wt=="btnset"?"btnitem":"iconbtnitem");
                        box.controlgroup();
                    }
                    if(wt=="linkbtnset"||wt=="iconlinkbtnset"){
                        var ele = selWidget.find("a").clone().attr("data-theme",value).removeClass("ui-btn-hidden");
                        var box = selWidget.clone().removeClass("mui-selected ui-controlgroup-vertical ui-controlgroup-horizontal").empty().append(ele);
                        selWidget.replaceWith(box);
                        ele.button().closest("div.ui-btn").attr("mui",wt=="linkbtnset"?"linkbtnitem":"iconlinkbtnitem");
                        box.controlgroup();
                    }
                    if(wt=="jheader"||wt=="jfooter"){
                        selWidget.attr(name,value).removeClass().addClass("ui-bar-"+value+" ui-"+wt.substring(1));
                    }
                    if(wt=="jnavbar"||wt=="iconnavbar"){
                        selWidget.find("a").attr(name,value).removeClass().addClass("ui-btn ui-btn-up-"+value);
                        wt=="iconnavbar"&&selWidget.find("a").addClass("ui-btn-icon-"+(selWidget.attr("data-iconpos")||"top"));
                    }
                    if(wt=="linklv"||wt=="orderlv"||wt=="dividerlv"||wt=="imgslv"||wt=="iconslv"||wt=="countlv"){
                        var lis = selWidget.find("li:not(.ui-li-divider)");
                        var t = lis.first().attr(name);
                        selWidget.find("li:not(.ui-li-divider)").andSelf().attr(name,value);
                        lis.removeClass("ui-btn-up-"+t).addClass("ui-btn-up-"+value);
                    }
                    if(wt=="readonlylv"){
                        var t = selWidget.attr(name)||"c";
                        selWidget.attr(name,value).find("li").removeClass("ui-body-"+t).addClass("ui-body-"+value);
                    }
                    if(wt=="textinput"||wt=="password"||wt=="textarea"){
                        var t = selWidget.attr(name)||"c";
                        selWidget.attr(name,value).removeClass("ui-body-"+t).addClass("ui-body-"+value);
                    }
                    if(wt=="searchinput"){
                        var input = selWidget.find("input").clone().attr(name,value);
                        selWidget.replaceWith(input);
                        input.textinput().parent("div").attr("wt","searchinput");
                    }
                    if(wt=="slider"){
                        var input = selWidget.find("input").clone().attr(name,value).attr("data-trackTheme",value);
                        var box = $("<div wt='slider'></div>").append(input);
                        selWidget.replaceWith(box);
                        input.slider({trackTheme:value});
                    }
                    if(wt=="toggle"){
                        var select = selWidget.prev("select").clone();
                        select.attr(name,value);
                        selWidget.prev("select").andSelf().replaceWith(select);
                        select.slider().next("div.ui-slider-switch").attr("wt","toggle");
                    }
                    if(wt=="radio"||wt=="checkbox"){
                        var ele = selWidget.find("input,label").clone().removeClass().attr(name,value).each(function(){
                            if($(this).is("label")){
                                var t = $(this).find("span.ui-btn-text").text();
                                $(this).empty().text(t);
                            }
                        });
                        var box = selWidget.clone().attr(name,value).removeClass().empty().append(ele);
                        selWidget.replaceWith(box);
                        ele.checkboxradio().find("span.ui-btn-text").attr("mui","span");
                        box.controlgroup();
                    }
                    if(wt=="select"){
                        var select = selWidget.find("select").clone().attr(name,value);
                        selWidget.parent("div.ui-select").replaceWith(select);
                        select.selectmenu().parent("div.ui-btn").attr("wt","select");
                    }
                    if(wt=="collapsible"){
                        var collapsible = selWidget.clone().removeClass().empty().attr(name,value);
                        $("<h3></h3>").text(selWidget.find("h3").text()).appendTo(collapsible);
                        $("<p mui='p'></p>").text(selWidget.find("p").text()).appendTo(collapsible);
                        selWidget.replaceWith(collapsible);
                        collapsible.collapsible().find("h3 span.ui-btn-text").attr("mui","span").find("span").remove();
                    }
                    if(wt=="collset"){
                        var collapsible = selWidget.children("div").clone().removeClass();
                        collapsible.each(function(){
                            var $this = $(this);
                            var h3 = $("<h3></h3>").text($this.find("h3").text());
                            var p = $("<p mui='p'></p>").text($this.find("p").text());
                            $this.removeClass().empty().append(h3).append(p);
                        });
                        var collset = selWidget.clone().removeClass().empty().attr(name,value).append(collapsible);
                        selWidget.replaceWith(collset);
                        collapsible.collapsible().find("h3 span.ui-btn-text").attr("mui","span").find("span").remove();
                    }
                    if(wt=="andrdate"||wt=="andrtime"||wt=="iosdate"||wt=="iostime"||wt=="calendar"){
                        var t = selWidget.find("input").attr("data-theme") || "c";
                        selWidget.removeClass("ui-body-"+t).addClass("ui-body-"+value).find("input").attr(name,value).end().find("a").removeClass("ui-btn-up-"+t).addClass("ui-btn-up-"+value);
                    }
                    break;
                case "data-dividertheme":
                    var lis = selWidget.find("li.ui-li-divider");
                    var t = selWidget.attr(name)||"c";
                    selWidget.attr(name,value);
                    lis.removeClass("ui-bar-"+t).addClass("ui-bar-"+value);
                    break;
                case "data-count-theme":
                    var spans = selWidget.find("span.ui-li-count");
                    var t = selWidget.attr(name)||"c";
                    selWidget.attr(name,value);
                    spans.removeClass("ui-btn-up-"+t).addClass("ui-btn-up-"+value);
                    break;
                case "data-content-theme":
                    if(wt=="collapsible"){
                        var collapsible = selWidget.clone().removeClass().empty().attr(name,value);
                        $("<h3></h3>").text(selWidget.find("h3").text()).appendTo(collapsible);
                        $("<p mui='p'></p>").text(selWidget.find("p").text()).appendTo(collapsible);
                        selWidget.replaceWith(collapsible);
                        collapsible.collapsible().find("h3 span.ui-btn-text").attr("mui","span").find("span").remove();
                    }
                    if(wt=="collset"){
                        var collapsible = selWidget.children("div").clone().removeClass();
                        collapsible.each(function(){
                            var $this = $(this);
                            var h3 = $("<h3></h3>").text($this.find("h3").text());
                            var p = $("<p mui='p'></p>").text($this.find("p").text());
                            $this.removeClass().empty().append(h3).append(p);
                        });
                        var collset = selWidget.clone().removeClass().empty().attr(name,value).append(collapsible);
                        selWidget.replaceWith(collset);
                        collapsible.collapsible().find("h3 span.ui-btn-text").attr("mui","span").find("span").remove();
                    }
                    break;
                case "data-pick-page-theme":
                    var t = selWidget.find("input").attr("data-pick-page-theme") || "c";
                    selWidget.find("input").attr(name,value).trigger('datebox', {'method':'open'});
                    $("div.ui-datebox-container").not(".ui-datebox-hidden").removeClass("ui-body-"+t).addClass("ui-body-"+value).find("a.ui-btn").removeClass("ui-btn-up-"+t).addClass("ui-btn-up-"+value);
                    break;
                case "ontext":
                    var select = selWidget.prev("select").clone();
                    select.find("option").last().text(value);
                    selWidget.prev("select").andSelf().replaceWith(select);
                    select.slider().next("div.ui-slider-switch").attr("wt","toggle");
                    break;
                case "offtext":
                    var select = selWidget.prev("select").clone();
                    select.find("option").first().text(value);
                    selWidget.prev("select").andSelf().replaceWith(select);
                    select.slider().next("div.ui-slider-switch").attr("wt","toggle");
                    break;
                case "option":
                    var vs = value.split("\n");
                    var option="";
                    for (var i in vs){
                        option+="<option value='"+vs[i]+"'>"+vs[i]+"</option>";
                    }
                    selWidget.find("select").html(option);
                    selWidget.find("select").selectmenu("refresh");
                    break;
                case "data-auto":
                    var items = selWidget.find("div.ui-slide-item").children();
                    var box = selWidget.clone().empty().attr(name,value).append(items).removeClass();
                    selWidget.replaceWith(box);
                    box.slidebox();
                    break;
                case "data-navbar":
                    selWidget.attr(name,value).find("div.ui-navpoint").css("display",value=="true"?"block":"none");
                    break;
            }
            break;
        case "addItem":
                if(name=="btnset"||name=="iconbtnset"){
                    var ele = selWidget.find("button").clone().removeClass("ui-btn-hidden");
                    ele = ele.add(ele.last().clone().text("按钮"));
                    var box = selWidget.clone().removeClass("mui-selected ui-controlgroup-vertical ui-controlgroup-horizontal").empty().append(ele);
                    selWidget.replaceWith(box);
                    ele.button().closest("div.ui-btn").attr("mui",name=="btnset"?"btnitem":"iconbtnitem");
                    box.controlgroup();
                }
                if(name=="linkbtnset"||name=="iconlinkbtnset"){
                    var ele = selWidget.find("a").clone().removeClass("ui-btn-hidden");
                    ele = ele.add(ele.last().clone().text("按钮"));
                    var box = selWidget.clone().removeClass("mui-selected ui-controlgroup-vertical ui-controlgroup-horizontal").empty().append(ele);
                    selWidget.replaceWith(box);
                    ele.button().closest("div.ui-btn").attr("mui",name=="linkbtnset"?"linkbtnitem":"iconlinkbtnitem");
                    box.controlgroup();
                }
                if(name=="jnavbar"||name=="iconnavbar"){
                    var ele = selWidget.clone().removeClass();
                    ele.find("ul").removeClass().find("li").removeClass().find("a").each(function(){
                        var t = $(this).find("span.ui-btn-text").text();
                        $(this).empty().removeClass().text(t);
                    });
                    ele.find("ul").append(ele.find("li").last().clone());
                    selWidget.replaceWith(ele);
                    ele.navbar();
                }
                if(name=="linklv"||name=="orderlv"||name=="dividerlv"){
                    var li = $("<li mui='linklvitem'><a href='#'>列表项</a></li>").attr("data-theme",selWidget.attr("data-theme")||"c");
                    selWidget.append(li).listview("refresh");
                }
                if(name=="readonlylv"){
                    var li = $("<li mui='readonlylvitem'>列表项</li>").attr("data-theme",selWidget.attr("data-theme")||"c");
                    selWidget.append(li).listview("refresh");
                }
                if(name=="imgslv"){
                    var li = $("<li><a mui='imgslvitem' href='#'><img mui='img' src='../nresources/images/icon/13.png' width='80'><h3 mui='h1'>System</h3><p mui='p'>系统信息</p></a></li>").attr("data-theme",selWidget.attr("data-theme")||"c");
                    selWidget.append(li).listview("refresh");
                }
                if(name=="iconslv"){
                    var li = $("<li mui='iconlvitem'><a href='#'><img mui='img' src='../nresources/images/icon/de.png' class='ui-li-icon'>列表项</a></li>").attr("data-theme",selWidget.attr("data-theme")||"c");
                    selWidget.append(li).listview("refresh");
                }
                if(name=="countlv"){
                    var li = $("<li mui='countlvitem'><a href='#'>列表项<span mui='span' class='ui-li-count'>0</span></a></li>").attr("data-theme",selWidget.attr("data-theme")||"c");
                    selWidget.append(li).listview("refresh");
                }
                if(name=="radio"||name=="checkbox"){
                    var ele = selWidget.find("input,label").clone().removeClass().attr(name,value).each(function(){
                            if($(this).is("label")){
                                var t = $(this).find("span.ui-btn-text").text();
                                $(this).empty().text(t);
                            }
                        });
                    var r = Math.random();var theme = selWidget.attr("data-theme")||"c";
                    var n = name=="radio"?
                        $("<input type='radio' id='radio-view-"+r+"' value='new' /><label for='radio-view-"+r+"'>按钮</label>")
                        : $("<input type='checkbox' id='radio-view-"+r+"' value='new' /><label for='radio-view-"+r+"'>按钮</label>");
                    ele = ele.add(n);
                    var box = selWidget.clone().attr(name,value).removeClass().empty().append(ele);
                    selWidget.replaceWith(box);
                    ele.checkboxradio({theme:theme}).find("span.ui-btn-text").attr("mui","span");
                    box.controlgroup();
                }
                if(name=="collset"){
                    var collapsible = selWidget.children("div").clone().removeClass();
                    collapsible.each(function(){
                        var $this = $(this);
                        var h3 = $("<h3></h3>").text($this.find("h3").text());
                        var p = $("<p mui='p'></p>").text($this.find("p").text());
                        $this.removeClass().empty().append(h3).append(p);
                    });
                    collapsible = collapsible.add(collapsible.last().clone());
                    var collset = selWidget.clone().removeClass().empty().attr(name,value).append(collapsible);
                    selWidget.replaceWith(collset);
                    collapsible.collapsible().find("h3 span.ui-btn-text").attr("mui","span").find("span").remove();
                }
                if(name=="icongrid"){
                    var icons = selWidget.find("td").children().clone();
                    icons = icons.add(icons.last().clone());
                    var box = $("<div wt='icongrid' data-role='icongrid'></div>").append(icons);
                    selWidget.replaceWith(box);
                    box.icongrid();
                }
                if(name=="slidebox"){
                    var items = selWidget.find("div.ui-slide-item").children().clone();
                    items = items.add(items.last().clone());
                    var box = selWidget.clone().empty().append(items).removeClass();
                    selWidget.replaceWith(box);
                    box.slidebox();
                }
            break;
        case "function":
            if(name=="li2divider"){
                var ul = selWidget.parent("ul,ol");
                var divider = $("<li mui='divider' data-role='list-divider'></li>").text(selWidget.find("a").text());
                selWidget.replaceWith(divider);
                ul.listview("refresh");
            }
            if(name="divider2li"){
                var ul = selWidget.parent("ul,ol");
                var li = $("<li mui='linklvitem'><a href='#'>"+selWidget.text()+"</a></li>").attr("data-theme",ul.attr("data-theme")||"c");
                selWidget.replaceWith(li);
                ul.listview("refresh");
            }
            break;
    }

}

