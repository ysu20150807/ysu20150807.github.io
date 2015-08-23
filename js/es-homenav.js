$(function() {
		$.each(webs, function(n, value) {
			var normalNode;
			var group = value.g;
//			if (value.g != 'navmr') {
				$("#navmain").append('<li class="navlicustomcss"><a href="#">' + value.n + '</a><ul id="' + value.g + '"></ul></li>');
				$.each(value.web, function(n, value) {
					if(value.u != undefined)
						$("#" + group).append('<li esOpenVaule="' + value.u + '"><a href="#">' + value.n + '</a></li>');
				});
//			} else {
//				
//				if (normalNode == undefined) {
//					normalNode = $("#navlogo").next()
//				}
//				
//				$.each(value.web, function(n, value) {
//					normalNode.before('<li class="navlicustomcss" ' + ((value.self) ? 'esVaule="' : 'esOpenVaule="') + value.u + '"><a href="#">' + value.n + '</a></li>');
//				});				
//			}
		});


});