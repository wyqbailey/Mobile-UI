//set up the theme switcher on the homepage
$('div').live('pagecreate',function(event){
	if( !$(this).is('.ui-dialog')){ 
		var appendEl = $(this).find('.ui-footer:last');
		
		if( !appendEl.length ){
			appendEl = $(this).find('.ui-content');
		}
		
		if( appendEl.is("[data-position]") ){
			return;
		}
		
	}	

});

//collapse page navs after use
$(function(){
	$('body').delegate('.content-secondary .ui-collapsible-content', 'vclick',  function(){
		$(this).trigger("collapse")
	});
});

function setDefaultTransition(){
	var winwidth = $( window ).width(),
		trans ="slide";
		
	if( winwidth >= 1000 ){
		trans = "none";
	}
	else if( winwidth >= 650 ){
		trans = "fade";
	}

	$.mobile.defaultPageTransition = trans;
}

//set default documentation 
$( document ).bind( "mobileinit", setDefaultTransition );
$(function(){
	$( window ).bind( "throttledresize", setDefaultTransition );
});