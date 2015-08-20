$(function() {
	var webs = [{
		"n": "默认",
		"g": "navmr",
		"web": [{
			"n": "百度",
			"u": "https://www.baidu.com",
			"self": true,
			"hide": true
		}, {
			"n": "谷歌",
			"u": "http://duliziyou.com",
			"self": true,
			"hide": true
		}, {
			"n": "谷歌学术",
			"u": "https://scholar.google.com"
		}, {
			"n": "百度学术",
			"u": "https://xueshu.baidu.com"
		}, {
			"n": "新浪微博",
			"u": "http://weibo.com",
			"tile": "wb"
		}, {
			"n": "百度贴吧",
			"u": "http://tieba.baidu.com"
		}, {
			"n": "燕山大学吧",
			"u": "http://tieba.baidu.com/f?kw=%D1%E0%C9%BD%B4%F3%D1%A7&fr=index"
		}, {
			"n": "知乎",
			"u": "http://www.zhihu.com"
		}]
	}, {
		"n": "翻译·论文",
		"g": "navfy",
		"web": [{
			"n": "Google翻译",
			"u": "http://translate.google.cn/"
		}, {
			"n": "有道翻译",
			"u": "http://fanyi.youdao.com/"
		}, {
			"n": "必应翻译",
			"u": "http://www.bing.com/translator/"
		}, {
			"n": "中国知网",
			"u": "http://epub.cnki.net/kns/default.htm"
		}, {
			"n": "维普期刊",
			"u": "http://lib.cqvip.com/"
		}, {
			"n": ">>更多数据库",
			"u": "http://library.ysu.edu.cn/sourceRight.aspx?caid=0&title=&parentID="
		}]
	}, {
		"n": "燕大",
		"g": "navyd",
		"web": [{
			"n": "图书馆",
			"u": "http://library.ysu.edu.cn",
			"tile": "tsg"
		}, {
			"n": "燕大新闻",
			"u": "http://news.ysu.edu.cn/"
		}, {
			"n": "本科生教务系统",
			"u": "http://202.206.245.231/default2.aspx"
		}, {
			"n": "里仁学院教务系统",
			"u": "http://211.81.249.99/default2.aspx"
		}, {
			"n": "研究生教务系统",
			"u": "http://202.206.245.111/"
		}, {
			"n": "校园直播",
			"u": "http://yit.ysu.edu.cn/dmtfw/dszb/CCTV1.htm",
			"tile": "zb"
		}, {
			"n": "博云资料",
			"u": "http://202.206.242.26:88/poweb/index.jsp"
		}, {
			"n": ">>燕大主页",
			"u": "http://www.ysu.edu.cn"
		}]
	}, {
		"n": "视频",
		"g": "navsp",
		"web": [{
			"n": "优酷",
			"u": "http://www.youku.com/"
		}, {
			"n": "爱奇艺",
			"u": "http://www.iqiyi.com/"
		}, {
			"n": "腾讯视频",
			"u": "http://v.qq.com/"
		}, {
			"n": "土豆",
			"u": "http://www.tudou.com/"
		}, {
			"n": "乐视",
			"u": "http://www.letv.com/"
		}, {
			"n": "哔哩哔哩",
			"u": "http://www.bilibili.tv/"
		}]
	}, {
		"n": "公开课",
		"g": "navgkk",
		"web": [{
			"n": "网易公开课",
			"u": "http://open.163.com/"
		}, {
			"n": "MOOC学院",
			"u": "http://mooc.guokr.com/"
		}, {
			"n": "Coursera",
			"u": "https://www.coursera.org/",
			"tile": "ca"
		}, {
			"n": "edX",
			"u": "https://www.edx.org/"
		}, {
			"n": "Stanford Online",
			"u": "http://online.stanford.edu/"
		}, {
			"n": "优课联盟",
			"u": "http://ysdx.benke.chaoxing.com/"
		}, {
			"n": "极客学院",
			"u": "http://www.jikexueyuan.com/"
		}]
	}, {
		"n": "门户·新闻",
		"g": "navmx",
		"web": [{
			"n": "新浪门户",
			"u": "http://www.sina.com.cn/"
		}, {
			"n": "搜狐门户",
			"u": "http://www.sohu.com/"
		}, {
			"n": "腾讯门户",
			"u": "http://www.qq.com/"
		}, {
			"n": "网易门户",
			"u": "http://www.163.com/"
		}, {
			"n": "新浪新闻",
			"u": "http://news.sina.com.cn/"
		}, {
			"n": "凤凰新闻",
			"u": "http://news.ifeng.com/"
		}]
	}, {
		"n": "生活",
		"g": "navsh",
		"web": [{
			"n": "4399小游戏",
			"u": "http://www.4399.com/"
		}, {
			"n": "12306",
			"u": "http://www.12306.cn/"
		}, {
			"n": "工商银行",
			"u": "http://www.icbc.com.cn/"
		}, {
			"n": "农业银行",
			"u": "http://www.abchina.com/",
			"tile": "nh"
		}, {
			"n": "中国移动",
			"u": "http://www.10086.cn/"
		}, {
			"n": "中国电信",
			"u": "http://www.189.cn/"
		}, {
			"n": "中国联通",
			"u": "http://www.10010.com/"
		}]
	}, {
		"n": "购物",
		"g": "navgw",
		"web": [{
			"n": "淘宝",
			"u": "http://www.taobao.com",
		}, {
			"n": "淘宝特卖",
			"u": "http://temai.taobao.com/event9776.htm?pid=mm_34619426_10544719_34746681",
			"tile": "tb"
		}, {
			"n": "天猫精选",
			"u": "http://s.click.taobao.com/JVTYq1y?pid=mm_34619426_10544719_34746681",
			"tile": "tm"
		}, {
			"n": "9块9包邮",
			"u": "http://temai.taobao.com/event10323.htm?pid=mm_34619426_10544719_34746681"
		}, {
			"n": "聚划算",
			"u": "http://s.click.taobao.com/ZQscq1y?pid=mm_34619426_10544719_34746681"
		}, {
			"n": "美团",
			"u": "http://www.meituan.com/"
		}, {
			"n": "百度糯米",
			"u": "http://www.nuomi.com/"
		}, {
			"n": "聚美优品",
			"u": "http://www.jumei.com/"
		}, {
			"n": "唯品会",
			"u": "http://www.vip.com"
		}, {
			"n": "京东商城",
			"u": "http://www.jd.com"
		}, {
			"n": "当当",
			"u": "http://www.dangdang.com"
		}, {
			"n": "亚马逊",
			"u": "http://www.amazon.cn"
		}, {
			"n": "蘑菇街",
			"u": "http://www.mogujie.com"
		}, {
			"n": ">>试试手气",
			"id": "trythis"
		}]
	}];

	$.each(webs, function(n, value) {
			var normalNode;
			var group = value.g;
			if (value.g != 'navmr') {
				$("#navmain").append('<li class="navlicustomcss"><a href="#">' + value.n + '</a><ul id="' + value.g + '"></ul></li>');
				$.each(value.web, function(n, value) {
					if(value.u != undefined)
						$("#" + group).append('<li esOpenVaule="' + value.u + '"><a href="#">' + value.n + '</a></li>');
				});
			} else {
				
				if (normalNode == undefined) {
					normalNode = $("#navlogo").next()
				}
				
				$.each(value.web, function(n, value) {
					normalNode.before('<li class="navlicustomcss" ' + ((value.self) ? 'esVaule="' : 'esOpenVaule="') + value.u + '"><a href="#">' + value.n + '</a></li>');
				});				
			}
		});


});