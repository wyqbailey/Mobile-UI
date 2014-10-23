/*
* jQuery Mobile Framework : "slidebox" plugin.
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
* Note: write by wyqbailey
*/
( function( $, undefined ) {
$.widget( "mobile.slidebox", $.mobile.widget, {
    options: {
		direction: 'left',
		interval: 3000,
        navbar: true,
        auto: true
	},
	_create: function() {
		var $el = this.element,
            $direction = this.options.direction,
            $interval = this.options.interval
            $navbar = this.options.navbar
            $auto = this.options.auto;

        //wrap the children
        $el.children().wrap("<div class='ui-slide-item'></div>");
        //clear float
        var $c = $el.html()+"<div class='clear'></div>";
        //make navpoint
        var $l = $el.children().length;
        var pt = '';
        for(i=0;i<$l;i++){
            pt += "<a class='ui-point'>"+(i+1)+"</a>";
        }

        //add slidebox class,append wraped children and navpoint,set first point active
		$el .attr( "role", "slidebox" ).addClass( "ui-slidebox" ).empty()
            .append("<div class='ui-inbox'>"+$c+"</div>")
            .append("<div class='ui-navpoint'>"+pt+"</div>").find("div.ui-navpoint").css("display",$navbar?"block":"none")
            .find("a.ui-point:first").addClass("active");

        function setW(){
            function doset(){
                 if($direction=="left"){
                    var w = $el.width();
                    $el.find("div.ui-inbox").width(w*($l+1));
                    $el.find("div.ui-slide-item").width(w).css("float","left");
                } else if($direction=="up"){
                    var h = $el.height();
                    $el.find("div.ui-inbox").height(h*($l+1));
                    $el.find("div.ui-slide-item").height(h);
                }
            }
           window.setTimeout(doset,50);//延时，保证动画切换完成，取得正确的高度或宽度
        }
        //when page show,set the width of ui-inbox and ui-slide-item
        $el.closest(".ui-page").bind("pageshow",setW);
        $(window).bind("resize",setW);

         //slide function
            function $slide(d){
                if($direction=="left"){
                    var left;
                    var $p = $el.find("div.ui-inbox").eq(0);
                    var cur = $el.find("a.ui-point").index($el.find("a.active"));
                    if(d=="left"){
                        left = $el.find("a.active").next().length ? $p.find("div.ui-slide-item").eq(cur+1).position().left :0;
                        $p.animate({left:-left},200,"swing");
                        $el.find("a.active").next().length ? $el.find("a.active").removeClass("active").next().addClass("active") : $el.find("a.active").removeClass("active").siblings(":first").addClass("active");
                    } else if(d=="right"){
                        left = $el.find("a.active").prev().length ? $p.find("div.ui-slide-item").eq(cur-1).position().left :$p.find("div.ui-slide-item:last").position().left;
                        $p.animate({left:-left},200,"swing");
                        $el.find("a.active").prev().length ? $el.find("a.active").removeClass("active").prev().addClass("active") : $el.find("a.active").removeClass("active").siblings(":last").addClass("active");
                    }
                } else if($direction=="up"){
                    var top;
                    var $p = $el.find("div.ui-inbox").eq(0);
                    var cur = $el.find("a.ui-point").index($el.find("a.active"));
                    if(d=="left"){
                        top = $el.find("a.active").next().length ? $p.find("div.ui-slide-item").eq(cur+1).position().top :0;
                        $p.animate({top:-top},400,"swing");
                        $el.find("a.active").next().length ? $el.find("a.active").removeClass("active").next().addClass("active") : $el.find("a.active").removeClass("active").siblings(":first").addClass("active");
                    } else if(d=="right"){
                        top = $el.find("a.active").prev().length ? $p.find("div.ui-slide-item").eq(cur-1).position().top :$p.find("div.ui-slide-item:last").position().top;
                        $p.animate({left:-top},400,"swing");
                        $el.find("a.active").prev().length ? $el.find("a.active").removeClass("active").prev().addClass("active") : $el.find("a.active").removeClass("active").siblings(":last").addClass("active");
                    }
                }

            }
           //auto slide
           if($auto) var autoslide = setInterval(function(){$slide("left")},$interval);
        //bind swipe function
		$el.bind( "swipeleft", function( e ) {
                autoslide && clearInterval(autoslide);
                $slide("left");
			}).bind( "swiperight", function(e) {
                autoslide && clearInterval(autoslide);
                $slide("right");
			});

	}
});
})( jQuery );