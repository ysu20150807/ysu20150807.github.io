function gengrid() {
	$("#webgrid").empty();
	$("#tile").empty();
	
	/* 20150824 完善自适应 */
	var rcols = parseInt($("#webgrid").width() / 150);
	if(rcols<=3)
	{
		rcols=3;
	}
	else if(rcols == 5){
		rcols=7;
	}
	/*********************/
	
	$.each(webs, function(n, value) {

		var webgroup = value.g;
		$("#webgrid").append('<div id="' + webgroup + '0" class="row cells' + rcols + '"><span class="cell" align="center">' + value.n + '</span></div>');

		var webid = 0;
		$.each(value.web, function(n, value) {
			if (value.tile == undefined) {
				if (value.hide == undefined) {
					webid++;
					var rowid = parseInt(webid / rcols);
					if (webid % rcols == 0) {
						$("#" + webgroup + (rowid - 1)).after('<div id="' + webgroup + rowid + '" class="row cells' + rcols + '"><span class="cell" align="center"></span></div>');
						webid++;
					}

					if (value.id == undefined) {
						$("#" + webgroup + rowid).append('<div class="cell"><a href="' + value.u + '" target="_blank">' + value.n + '</a></div>');
					} else {
						$("#" + webgroup + rowid).append('<div class="cell"><a id="' + value.id + '" href="#" onclick="_czc.push([\'_trackEvent\', \'good\', \'click\', \'\', \'\', \'trythis\']);trythisfun();">' + value.n + '</a></div>');
					}

				}
			} else {
				$("#tile").append(getTile(value.u, 'img//' + value.tile + '.png', value.n));
			}
		});
	});
};


function getTile(url, img, text) {
	return '<div rel="tile" class="tile fg-white" onclick="openTile(\'' + url + '\')"><div class="tile-content slide-up"><div class="slide"><div class="image-container image-format-square" style="width: 100%;"><div class="frame" style="background-position: center; background-image: url(' + img + '); background-size: auto; background-repeat: no-repeat;"></div></div></div><div class="slide-over op-cyan text-small padding10">' + text + '</div></div></div>'
}

function openTile(tileurl) {
	window.open(tileurl, "_blank");
}

function trythisfun() {
	var rnd = [ //他在推推推
		"http://i.83jie.com/stt/6iZtZGaVdA?pid=mm_34619426_10544719_34746681", //头条：七夕美饰一秒变女神
		"http://s.click.taobao.com/kdydq1y?pid=mm_34619426_10544719_34746681", //天猫美妆频道
		"http://temai.taobao.com/event9776.htm?pid=mm_34619426_10544719_34746681", //淘宝特卖 精品疯抢季
		"http://s.click.taobao.com/kmDZq1y?pid=mm_34619426_10544719_34746681", //天猫男装频道
		"http://i.83jie.com/stt/UlPjORaVdA?pid=mm_34619426_10544719_34746681&scm=20140618.1.02030003.12s12", //神团购丝巾来袭
		//自媒体 自媒体必备
		"http://i.83jie.com/stt/nLBRWqMXdA?pid=mm_34619426_10544719_34746681", //女神新装那一款最爱
		//内容网站
		"http://s.click.taobao.com/VtmSJvx?pid=mm_34619426_10544719_34746681", //天猫新风尚
		//淘宝特卖PC
		"http://temai.taobao.com?pid=mm_34619426_10544719_34746681&scm=20140618.1.02030003.4s12",
		//淘宝特卖一折清仓
		"http://temai.taobao.com/event9769.htm?pid=mm_34619426_10544719_34746681&scm=20140618.1.02030003.4s12",
		//淘宝特卖精品疯抢季
		"http://temai.taobao.com/event9776.htm?pid=mm_34619426_10544719_34746681&scm=20140618.1.02030003.4s12",
		//天猫女装频道
		"http://s.click.taobao.com/na5cq1y?pid=mm_34619426_10544719_34746681&scm=20140618.1.02030003.4s12",
		//淘宝特卖9块9包邮
		"http://temai.taobao.com/event10323.htm?pid=mm_34619426_10544719_34746681&scm=20140618.1.02030003.5s12",
		//淘宝特卖天天9.9PC
		"http://temai.taobao.com/cheap.htm?pid=mm_34619426_10544719_34746681&scm=20140618.1.02030003.5s12",

		//爱淘宝PC
		"http://ai.taobao.com/?pid=mm_34619426_10544719_34746681&scm=20140618.1.02030003.6s12",

		//天猫电器抢稀缺数码
		"http://ai.taobao.com/album/detail.htm?preview=true&albumId=31557&pid=mm_34619426_10544719_34746681&scm=20140618.1.02030003.8s12",

		//功能网站

		//天猫超市
		"http://s.click.taobao.com/lB7Yq1y?pid=mm_34619426_10544719_34746681&scm=20140618.1.02030003.9s12",

		//聚划算
		"http://s.click.taobao.com/ZQscq1y?pid=mm_34619426_10544719_34746681&scm=20140618.1.02030003.9s12",

		//淘优惠
		"http://s.click.taobao.com/JLcXq1y?pid=mm_34619426_10544719_34746681&scm=20140618.1.02030003.9s12",

		//天猫精选
		"http://s.click.taobao.com/JVTYq1y?pid=mm_34619426_10544719_34746681&scm=20140618.1.02030003.10s12",

		//天猫精选值得选择
		"http://s.click.taobao.com/JVTYq1y?pid=mm_34619426_10544719_34746681&scm=20140618.1.02030003.11s12"
	]

	var url = rnd[Math.floor(Math.random() * rnd.length)];
	window.open(url, "_blank");
}


$(window).resize(function() {
	gengrid();
});
$(document).ready(function() {
	gengrid();
	
	$('#searchtext').bind('keypress', function(event) {
		if (event.keyCode == "13") {
			baidu();
		}
	});
	
	$('#btn_bd').click(function(){
		self.location = "https://www.baidu.com/s?wd=" + encodeURIComponent($('#searchtext').val());
	});
	
	$('#btn_gg').click(function(){
		self.location = "https://duliziyou.com/search?q=" + encodeURIComponent($('#searchtext').val());
	});
	
	$('#btn_lib').click(function(){
		var actionURL = "http://202.206.242.99/opac/openlink.php?strSearchType=title&match_flag=forward&historyCount=1&strText=" + encodeURIComponent($('#searchtext').val()) + "&doctype=ALL&displaypg=20&showmode=list&sort=CATA_DATE&orderby=desc&location=ALL";
		window.open(actionURL, "_blank");
	});
});