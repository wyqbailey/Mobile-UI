/*
* jQuery Mobile Framework : "tabs" plugin.
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
* Note: write by wyqbailey
*/
( function( $, undefined ) {
$.widget( "mobile.tabs", $.mobile.widget, {
	_create: function() {
        var $tabs = this.element,
			$tabtitle = $tabs.find("ul a"),
			$tabcontent = $tabs.children("div");

		$tabs.addClass('ui-tabs').attr("role","tabs");
        $tabcontent.addClass("tabcontent");
        $tabtitle
            .addClass("ui-btn-up-c ui-corner-top")
            .each(function(i,n){
                var t = $(this).attr("href");
                if(i == 0){
                    $(this).addClass("active")
                    $(t).addClass("in");
                } else{
                    $(t).css("display","none");
                }
                $(this).bind("vclick",function(){
                    $tabtitle.filter(".active").removeClass("active");
                    $(this).addClass("active");
                    $(t).siblings(".in").removeClass("in").css("display","none");
                    $(t).addClass("in").css("display","block");
                    return false;
                });
        });

	}
});
})( jQuery );
