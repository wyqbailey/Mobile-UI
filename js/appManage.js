/**
 * Created by JetBrains WebStorm.
 * User: bailey
 * Date: 12-1-6
 * Time: 上午11:41
 * To change this template use File | Settings | File Templates.
 */
function appMode(){
    if(localStorage.getItem("appname")){
        var ele = "<div title='是否为您恢复上次创建的App？'>"
            +"<p>应用名称:"+localStorage.getItem('appname')+"</p>"
            +"<p>应用版本:"+localStorage.getItem('appver')+"</p>"
            +"<p>创建时间:"+localStorage.getItem('apptime')+"</p>"
            +"<p>包含页面:"+localStorage.getItem('apppages')+"</p></div>";
        $(ele).dialog({width:400,height:190,modal:true,autoOpen:true,closeOnEscape:false,
                open:function(){$(this).dialog("widget").find("a.ui-dialog-titlebar-close").hide();},
                buttons:{
                    "No，创建新的App":function(){
                        $(this).dialog("close");
                        $("#appInfo").dialog("open");
                    },
                    "恢复App":function(){
                        var apptemps = localStorage.getItem("apptemps").split(",");
                        for(var i in apptemps){
                            if(apptemps[i].split(".")[0]){
                                pagename = localStorage.getItem("apppages").split(",")[i];
                                temp = apptemps[i].split(".")[0];
                                $("#tabs").tabs("add","#tab-"+pagename, pagename+".html").tabs("select","#tab-"+pagename);
                            }
                        }
                        $(this).dialog("close");
                    }
                }
            });
    }else{
        $("#appInfo").dialog("open");
    }
}
function saveApp(){
    localStorage.setItem("appname",$("#appname").val());
    localStorage.setItem("appver",$("#appver").val());
    localStorage.setItem("appdes",$("#appdes").val());
    var now = new Date();
    localStorage.setItem("apptime",now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate());
}
function savePages(){
    var apppages = "";
    var apptemps = "";
    $("#tabs iframe").each(function(i,n){
        var idx = $(this).attr("id");
        var page = idx.split("Frame")[0];
        apppages += (page+",");
        apptemps += ($(this).attr("src").substr($(this).attr("src").lastIndexOf("/")+1)+",");
        var html = document.getElementById(idx).contentWindow.document;
        //var head = $(html).find("head").clone();
        //head.find("script.mui,base").remove();
        var body = $(html).find("body").html();
        localStorage.setItem(idx,body);
    });
    localStorage.setItem("apppages",apppages);
    localStorage.setItem("apptemps",apptemps);
}