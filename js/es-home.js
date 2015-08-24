$(document).ready(function() {
	$.each(webs, function(n, value) {
		var normalNode;
		var group = value.g;
		$("#navmain").append('<li class="navlicustomcss"><a href="#">' + value.n + '</a><ul id="' + value.g + '"></ul></li>');
		$.each(value.web, function(n, value) {
			if (value.u != undefined && value.hide == undefined)
				$("#" + group).append('<li esOpenVaule="' + value.u + '"><a href="#">' + value.n + '</a></li>');
		});
	});

	$("li").click(function() {
		var urlframe = $(this).attr("esVaule");
		var urlopen = $(this).attr("esOpenVaule");
		if (urlopen != undefined) {
			window.open(urlopen);
		}
		if (urlframe != undefined) {
			$("#viewer", parent.document.body).attr("src", urlframe);
			$('li').removeClass("current");
			$(".menu .hover").addClass("current");
		}
	});

	$('a[rel*=leanModal]').leanModal({
		top: 200,
		closeButton: ".modal_close"
	});

	/*
	99Lime.com HTML KickStart by Joshua Gatcke
	kickstart.js
	*/
	$('ul.menu').each(function(){
		// add the menu toggle
		$(this).prepend('<li class="menu-toggle"><a href="#"><span class="icon" data-icon="Y"></span> Menu</a></li>');

		// find menu items with children.
		$(this).find('li').has('ul').addClass('has-menu')
		.find('a:first').append('<span class="arrow">&nbsp;</span>');
	});
	$('ul.menu li').hover(function(){
		$(this).find('ul:first').stop(true, true).fadeIn('fast');
		$(this).addClass('hover');
	},		
	function(){
		$(this).find('ul').stop(true, true).fadeOut('slow');
		$(this).removeClass('hover');
	});
	$('ul').find('li:first-child').addClass('first');
	$('ul').find('li:last-child').addClass('last');



	console.info("           ES           \n       做一个环保的人\n============================\nPowered by\nhttp://www.littleji.com\nhttp://www.xiaobaidonghui.cn\n\n In YanShan University 2015\n============================");
});