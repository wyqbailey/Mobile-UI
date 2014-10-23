/*
* jQuery Mobile Framework : "imgview" plugin.
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
* Note: write by wyqbailey
*/
( function( $, undefined ) {
$.widget( "mobile.imgview", $.mobile.widget, {
	_create: function() {
        var $img = this.element;
        if(!$img.is("img")) return false;
        var oimg = $("<img>",{src:$img.attr("src"),rel:"bigview"}).appendTo("body").css("display","none");

        $img.bind("click",function(){
            var ow = oimg.width(),oh = oimg.height(),
            ww = $(window).width()-20,wh = $(window).height()-20,
            xs = ow/ww,ys = oh/wh;
            if(xs>1 || ys>1){
                if(xs>ys){
                    oimg.width(ww);
                }else{
                    oimg.height(wh);
                }
            }
            oimg.css({zIndex:"998",border:"3px solid #fff","box-shadow":"0 0 8px rgba(0,0,0,.5)","-webkit-box-shadow":"0px 0px 8px rgba(0,0,0,.5)",position:"absolute",top:(wh-oimg.height())/2+10+"px",left:(ww-oimg.width())/2+10+"px"}).fadeIn();
            $("<span class='ui-icon ui-icon-delete'></span>").css({zIndex:"999",position:"absolute","background-color":"rgba(255,0,0,0.8)",top:(wh-oimg.height())/2+"px",left:(ww-oimg.width())/2+"px"}).insertAfter(oimg);
        });
        oimg.bind("click",function(e){
            var et = e || window.event;
            et.stopPropagation();
            var imgs = $("img:jqmData(role='imgview')");
            var i = imgs.index($img);
            if(i+1==imgs.length) i=-1;
            $("img[rel='bigview']").eq(i).fadeOut();
            imgs.eq(i+1).trigger("click");
        });
        $("body").bind("click",function(e){
            var et = e || window.event;
            if(et.target!=$img[0]){
                oimg.fadeOut();
                oimg.next("span").remove();
            }
        });
	}
});
})( jQuery );