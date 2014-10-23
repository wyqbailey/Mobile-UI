/**
 * Created by JetBrains WebStorm.
 * User: bailey
 * Date: 11-12-23
 * Time: 上午11:32
 * To change this template use File | Settings | File Templates.
 */
jQuery.fn.extend({
    sourcecode: function() {
        //删除datebox控件生成的dialog，保持代码清洁
        $(this).children("div[data-role='dialog']").remove();
        //获取关键节点
        var page = $(this).children("div[data-role='page']").removeAttr("class").removeAttr("style").removeAttr("data-url").removeAttr("tabindex");
        var header = $(this).find("div[data-role='header']").removeAttr("class").removeAttr("wt").removeAttr("role");
            header.find("h1").removeAttr("class").removeAttr("role").removeAttr("aria-level").removeAttr("tabindex");
        var footer = $(this).find("div[data-role='footer']").removeAttr("class").removeAttr("wt").removeAttr("role");
            footer.find("h4").removeAttr("class").removeAttr("role").removeAttr("aria-level").removeAttr("tabindex").removeAttr("wt");
        var content = $(this).find("div[data-role='content']").removeAttr("class").removeAttr("wt").removeAttr("role").removeAttr("style");
        content.children().each(function() {
            var $this = $(this);
            var wt = $(this).attr("wt");
            if (wt) {
                if (wt == "button" || wt == "iconbtn") {
                    $this.replaceWith($this.find("button").removeAttr("class").removeAttr("aria-disabled"));
                }
                if (wt == "linkbtn" || wt == "iconlinkbtn") {
                    $this.replaceWith($this.find("a").removeAttr("class").removeAttr("aria-disabled"));
                }
                if (wt == "btnset" || wt == "iconbtnset") {
                    var ele = $this.find("button").clone().removeAttr("class").removeAttr("aria-disabled");
                    var box = $this.clone().removeAttr("class").removeAttr("wt").empty().append(ele);
                    $this.replaceWith(box);
                }
                if (wt == "linkbtnset" || wt == "iconlinkbtnset") {
                    var ele = $this.find("a").clone().removeAttr("class").removeAttr("aria-disabled");
                    var box = $this.clone().removeAttr("class").removeAttr("wt").empty().append(ele);
                    $this.replaceWith(box);
                }
                if (wt == "jnavbar" || wt == "iconnavbar") {
                    var ele = $this.clone().removeAttr("class").removeAttr("wt").removeAttr("role");
                    ele.find("ul").removeAttr("class").find("li").removeAttr("class").find("a").each(function() {
                        var t = $(this).find("span.ui-btn-text").text();
                        $(this).removeAttr("class").removeAttr("mui").text(t);
                    });
                    $this.replaceWith(ele);
                }
                if(wt=="linklv"||wt=="orderlv"||wt=="dividerlv"||wt=="readonlylv"||wt=="imgslv"||wt=="iconslv"||wt=="countlv"){
                    var ele = $this.clone().removeAttr("class").removeAttr("wt");
                    ele.find("li").removeAttr("class").each(function(){
                        if($(this).attr("mui")=="divider"||$(this).attr("mui")=="readonlylvitem"){
                            $(this).removeAttr("mui").removeAttr("class").removeAttr("role");
                        }
                        else{
                            $(this).removeAttr("mui").html($(this).find("a").removeAttr("class").removeAttr("mui"));
                        }
                    });
                    $this.replaceWith(ele);
                }
                if(wt=="textinput"||wt=="password"||wt=="textarea"){
                    $this.removeAttr("class");
                }
                if(wt=="searchinput"||wt=="slider"){
                    var ele = $this.find("input").clone().removeAttr("class");
                    wt=="slider"&&ele.attr("type","range");
                    $this.replaceWith(ele);
                }
                if(wt=="toggle"){
                    $this.is("select")?$this.removeAttr("class"):$this.remove();
                }
                if(wt=="radio"||wt=="checkbox"){
                    var ele = $this.find("input,label").removeAttr("class").removeAttr("data-theme").each(function(){
                        $(this).is("label")&&$(this).html($(this).text());
                    });
                    var box = $this.clone().removeAttr("wt").removeAttr("class").html(ele);
                    $this.replaceWith(box);
                }
                if(wt=="ui-select"){
                    var ele = $this.find("select");
                    $this.replaceWith(ele);
                }
                if(wt=="collapsible"){
                    var h = $this.find("h3").removeAttr("class");
                    h.html(h.text());
                    var c = $this.find("p").removeAttr("mui");
                    $this.removeAttr("wt").removeAttr("class").html(h).append(c);
                }
                if(wt=="collset"){
                    var ele = $this.children().clone().each(function(){
                        var h = $(this).find("h3").removeAttr("class");
                        h.html(h.text());
                        var c = $(this).find("p").removeAttr("mui");
                        $(this).removeAttr("mui").removeAttr("class").html(h).append(c);
                    });
                    var box = $this.clone().removeAttr("wt").removeAttr("class").html(ele);
                    $this.replaceWith(box);
                }
                if(wt=="icongrid"){
                    var ele = $this.find("a").removeAttr("mui").removeAttr("class").removeAttr("style");
                    ele.find("img,span").removeAttr("mui").removeAttr("style");
                    var box = $this.clone().removeAttr("wt").removeAttr("role").removeAttr("class").html(ele);
                    $this.replaceWith(box);
                }
                if(wt=="jtab"){
                    $this.removeAttr("wt").removeAttr("class").removeAttr("role").find("a,div").removeAttr("mui").removeAttr("class");
                }
                if(wt=="slidebox"||wt=="imgslidebox"){
                    var items = $this.find("div.ui-slide-item").children().clone().removeAttr("mui");
                    $this.empty().append(items).removeAttr("wt").removeAttr("role").removeAttr("class");
                }
                if(wt=="h1"||wt=="img"||wt=="p"||wt=="span"||wt=="textlink"||wt=="hr"||wt=="hradio"||wt=="hcheckbox"){
                    $this.removeAttr("wt");
                }
                if(wt=="br"){
                    $this.removeAttr("wt").removeAttr("style").text("");
                }
                if(wt=="andrdate"||wt=="andrtime"||wt=="iosdate"||wt=="iostime"||wt=="calendar"){
                    var input = $this.find("input").clone();
                    $this.replaceWith(input);
                }
            } else {
                $this.remove();
            }
        });
        page.empty().append(header).append(content).append(footer);
        var body = $(this).empty().append(page);
        console.log(body);
        return body;
    }
});