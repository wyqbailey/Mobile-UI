/**
 * Created by JetBrains WebStorm.
 * User: bailey
 * Date: 11-12-14
 * Time: 下午2:03
 * To change this template use File | Settings | File Templates.
 */
function getOption(w,id){
    var f = $(id);
    f.find("input,select,textarea").each(function(){
        var $this = $(this);
        var name = $this.attr("name");
        switch($this.attr("rel")){
            case "css":
                var wt = w.attr("wt")||w.attr("mui");
                if(wt=="andrdate"||wt=="andrtime"||wt=="iosdate"||wt=="iostime"||wt=="calendar"){
                    w = w.find("input");
                }
                if(name=="font-weight"&&$this.is(":checkbox")){
                    w.css(name)=="bold"?$this.attr("checked",true):$this.attr("checked",false);
                    return;
                }
                if(name=="font-style"&&$this.is(":checkbox")){
                    w.css(name)=="italic"?$this.attr("checked",true):$this.attr("checked",false);
                    return;
                }
                if(name=="underline"&&$this.is(":checkbox")){
                    w.css("text-decoration")=="underline"?$this.attr("checked",true):$this.attr("checked",false);
                    return;
                }
                if(name=="color"||name=="background-color"){
                    $this.val(rgb2hex(w.css(name)));
                    return;
                }
                $this.val(w.css(name));
                break;
            case "attr":
                var wt = w.attr("wt")||w.attr("mui");
                if(wt=="linkbtn"||wt=="iconlinkbtn"||wt=="linkbtnitem"||wt=="iconlinkbtnitem"||wt=="linklvitem"||wt=="orderlvitem"||wt=="iconlvitem"||wt=="countlvitem"){
                    w=w.find("a");
                }
                if(wt=="searchinput"||wt=="slider"||wt=="andrdate"||wt=="andrtime"||wt=="iosdate"||wt=="iostime"||wt=="calendar"){
                    w=w.find("input");
                }
                $this.val(w.attr(name));
                break;
            case "text":
                $this.val(w.text());
                break;
            case "val":
                var wt = w.attr("wt")||w.attr("mui");
                if(wt=="slider"){w=w.find("input");}
                $this.val(w.val());
                break;
            case "data":
                var wt = w.attr("wt")||w.attr("mui");
                switch(name){
                    case "text":
                        if(wt=="button"||wt=="iconbtn"||wt=="btnitem"||wt=="iconbtnitem"){$this.val(w.find("button").text());}
                        if(wt=="linkbtn"||wt=="iconlinkbtn"||wt=="linkbtnitem"||wt=="iconlinkbtnitem"){$this.val(w.find("a").text());}
                        if(wt=="jheader"){$this.val(w.find("h1").text());}
                        if(wt=="navbaritem"||wt=="iconnavbaritem"){$this.val(w.find("span.ui-btn-text").text());}
                        if(wt=="linklvitem"||wt=="orderlvitem"||wt=="iconlvitem"){$this.val(w.find("a").text());}
                        if(wt=="countlvitem"){$this.val(w.find("a").html().slice(0,w.find("a").html().indexOf("<span")));}
                        break;
                    case "data-inline":
                        if(wt=="button"||wt=="iconbtn"){$this.val(w.find("button").attr(name));}
                        if(wt=="linkbtn"||wt=="iconlinkbtn"){$this.val(w.find("a").attr(name));}
                        break;
                    case "data-corners":
                        if(wt=="button"||wt=="iconbtn"||wt=="linkbtn"||wt=="iconlinkbtn"){$this.attr("checked",w.hasClass("ui-btn-corner-all"));}
                        break;
                    case "data-shadow":
                        if(wt=="button"||wt=="iconbtn"||wt=="linkbtn"||wt=="iconlinkbtn"){$this.attr("checked",w.hasClass("ui-shadow"));}
                        break;
                    case "data-icon":
                        if(wt=="iconbtn"||wt=="iconbtnitem"){$this.val(w.find("button").attr("data-icon"));}
                        if(wt=="iconlinkbtn"||wt=="iconlinkbtnitem"){$this.val(w.find("a").attr("data-icon"));}
                        if(wt=="iconnavbaritem"){$this.val(w.attr("data-icon"));}
                        break;
                    case "data-iconpos":
                        if(wt=="iconbtn"||wt=="iconbtnset"){$this.val(w.find("button").eq(0).attr("data-iconpos"));}
                        if(wt=="iconlinkbtn"||wt=="iconlinkbtnset"){$this.val(w.find("a").eq(0).attr("data-iconpos"));}
                        if(wt=="iconnavbar"){$this.val(w.attr("data-iconpos"));}
                        break;
                    case "data-type":
                        $this.val(w.attr("data-type"));
                        break;
                    case "data-theme":
                        if(wt=="btnset"||wt=="linkbtnset"||wt=="iconbtnset"||wt=="iconlinkbtnset"||wt=="jnavbar"||wt=="iconnavbar"){
                            w = w.find(".ui-btn").eq(0);
                        }
                        if(wt=="toggle"){
                            w = w.prev("select");
                        }
                        if(wt=="andrdate"||wt=="andrtime"||wt=="iosdate"||wt=="iostime"||wt=="calendar"){
                            w = w.find("input");
                        }
                        if($this.val()==(w.attr(name)||"c")){
                            $this.attr("checked",true).closest("li").siblings("li.check").removeClass("check").end().addClass("check");
                        }
                        //$this.val(w.attr("data-theme"));
                        break;
                    case "data-dividertheme":
                        if($this.val()==(w.attr(name)||"c")){
                            $this.attr("checked",true).closest("li").siblings("li.check").removeClass("check").end().addClass("check");
                        }
                        break;
                    case "data-count-theme":
                        if($this.val()==(w.attr(name)||"c")){
                            $this.attr("checked",true).closest("li").siblings("li.check").removeClass("check").end().addClass("check");
                        }
                        break;
                    case "data-content-theme":
                        if($this.val()==(w.attr(name)||"c")){
                            $this.attr("checked",true).closest("li").siblings("li.check").removeClass("check").end().addClass("check");
                        }
                        break;
                    case "data-pick-page-theme":
                        if(wt=="andrdate"||wt=="andrtime"||wt=="iosdate"||wt=="iostime"||wt=="calendar"){
                            w = w.find("input");
                        }
                        if($this.val()==(w.attr(name)||"c")){
                            $this.attr("checked",true).closest("li").siblings("li.check").removeClass("check").end().addClass("check");
                        }
                        break;
                    case "ontext":
                        $this.val(w.prev("select").find("option").last().text());
                        break;
                    case "offtext":
                        $this.val(w.prev("select").find("option").first().text());
                        break;
                    case "option":
                        var v="";
                        w.find("option").each(function(){
                           v+=($(this).text()+"\n");
                        });
                        $this.val(v);
                        break;
                    case "data-navbar":
                        $this.val(w.attr("data-navbar")?w.attr("data-navbar"):"true");
                        break;
                    case "data-auto":
                        $this.val(w.attr("data-auto")?w.attr("data-auto"):"true");
                        break;
                }
                break;
        }
    });
}
//rgb颜色转换为hex
function rgb2hex(rgb) {
  if (rgb.charAt(0) == '#')
    return rgb;
  var n = Number(rgb);
  var ds = rgb.split(/\D+/);
  var decimal = Number(ds[1]) * 65536 + Number(ds[2]) * 256 + Number(ds[3]);
  return "#" + zero_fill_hex(decimal, 6);
}
function zero_fill_hex(num, digits) {
  var s = num.toString(16);
  while (s.length < digits)
    s = "0" + s;
  return s;
}