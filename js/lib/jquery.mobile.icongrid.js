/*
* jQuery Mobile Framework : "icongrid" plugin.
* Copyright (c) jQuery Project
* Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
* Note: write by wyqbailey
*/
( function( $, undefined ) {
$.widget( "mobile.icongrid", $.mobile.widget, {
    options: {
		iconsize: [60,60],
		iconmargin: [10,10]
	},
	_create: function() {
		var $el = this.element;
        var iconsize = this.options.iconsize;
        var iconmargin = this.options.iconmargin;
        var icons = $el.children();

        $el.closest(".ui-page").bind("pageshow",icongrid);
        //add slidebox class,append wraped children and navpoint,set first point active
		$el .attr( "role", "icongrid" ).addClass( "ui-icongrid");

        function icongrid(){
            var tds = parseInt($el.width() / (iconsize[0]*1+iconmargin[0]*2));
            var trs = Math.ceil(icons.length / tds);
            var table = $("<table class='ui-icongrid-table'></table>");
            for(var i=0;i<trs;i++){
                var tr = $("<tr></tr>");
                for(var j=0;j<tds;j++){
                    icons.eq(i*tds+j).find("img").css({width:iconsize[0]+"px",height:iconsize[1]+"px"});
                    var td = $("<td></td>").append(icons.eq(i*tds+j).addClass("ui-icongrid-a").css({margin:iconmargin[0]+"px "+iconmargin[1]+"px"}));
                    tr.append(td);
                }
                table.append(tr);
            }
            $el.empty().append(table);
        }

        $(window).bind("resize",icongrid);

	}
});
})( jQuery );