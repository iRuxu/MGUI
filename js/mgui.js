jQuery(function($){
	var pathname=location.pathname;
	"/"!=pathname&&($(".m-menu li, .m-submenu li").removeClass("on"),$(".m-submenu-item, .m-menu-item").map(function(a,m){var e=$(this);e.attr("href")==pathname&&e.parents("li").addClass("on")}));
});