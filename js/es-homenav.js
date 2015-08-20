$(function() {
	var group = [{
		"n": "默认",
		"g": "navmr",
	}, {
		"n": "翻译·论文",
		"g": "navfy"
	}, {
		"n": "燕大",
		"g": "navyd",
	}, {
		"n": "视频",
		"g": "navsp",
	}, {
		"n": "公开课",
		"g": "navgkk",
	}, {
		"n": "门户·新闻",
		"g": "navmx",
	}, {
		"n": "生活",
		"g": "navsh",
	}, {
		"n": "购物",
		"g": "navgw",
	}];

	var obj = [{
		"n": "燕大首页",
		"u": "http://www.ysu.edu.cn",
		"g": "navyd",
		"id": 1
	}, {
		"n": "图书馆",
		"u": "http://library.ysu.edu.cn",
		"g": "navyd",
		"tile": true,
		"id": 2
	}, {
		"n": "燕大新闻",
		"u": "http://news.ysu.edu.cn/",
		"g": "navyd",
		"id": 3
	}, {
		"n": "本科生教务系统",
		"u": "http://202.206.245.231/default2.aspx",
		"g": "navyd",
		"id": 4
	}, {
		"n": "里仁学院教务系统",
		"u": "http://211.81.249.99/default2.aspx",
		"g": "navyd",
		"id": 5
	}, {
		"n": "研究生教务系统",
		"u": "http://202.206.245.111/",
		"g": "navyd",
		"id": 6
	}, {
		"n": "校园直播",
		"u": "http://yit.ysu.edu.cn/dmtfw/dszb/CCTV1.htm",
		"g": "navyd",
		"tile": true,
		"id": 7
	}, {
		"n": "博云资料",
		"u": "http://202.206.242.26:88/poweb/index.jsp",
		"g": "navyd",
		"id": 8
	}, {
		"n": "招生就业",
		"u": "http://zsjyc.ysu.edu.cn/",
		"g": "navyd",
		"id": 9
	}, {
		"n": "百度",
		"u": "https://www.baidu.com",
		"g": "navmr",
		"id": 0,
		"self" : true
	}, {
		"n": "谷歌",
		"u": "http://duliziyou.com",
		"g": "navmr",
		"id": 0,
		"self" : true
	}, {
		"n": "谷歌学术",
		"u": "https://scholar.google.com",
		"g": "navmr",
		"id": 1
	}, {
		"n": "百度学术",
		"u": "https://xueshu.baidu.com",
		"g": "navmr",
		"id": 2
	}, {
		"n": "新浪微博",
		"u": "http://weibo.com",
		"g": "navmr",
		"tile": true,
		"id": 3
	}, {
		"n": "百度贴吧",
		"u": "http://tieba.baidu.com",
		"g": "navmr",
		"id": 4
	}, {
		"n": "燕山大学吧",
		"u": "http://tieba.baidu.com/f?kw=%D1%E0%C9%BD%B4%F3%D1%A7&fr=index",
		"g": "navmr",
		"id": 5
	}, {
		"n": "12306",
		"u": "http://www.12306.cn/",
		"g": "navsh",
		"id": 1
	}, {
		"n": "工商银行",
		"u": "http://www.icbc.com.cn/",
		"g": "navsh",
		"id": 2
	}, {
		"n": "农业银行",
		"u": "http://www.abchina.com/",
		"g": "navsh",
		"tile": true,
		"id": 3
	}, {
		"n": "中国移动",
		"u": "http://www.10086.cn/",
		"g": "navsh",
		"id": 4
	}, {
		"n": "中国电信",
		"u": "http://www.189.cn/",
		"g": "navsh",
		"id": 5
	}, {
		"n": "中国联通",
		"u": "http://www.10010.com/",
		"g": "navsh",
		"id": 6
	}, {
		"n": "Google翻译",
		"u": "http://translate.google.cn/",
		"g": "navfy",
		"id": 1
	}, {
		"n": "有道翻译",
		"u": "http://fanyi.youdao.com/",
		"g": "navfy",
		"id": 2
	}, {
		"n": "必应翻译",
		"u": "http://www.bing.com/translator/",
		"g": "navfy",
		"id": 3
	}, {
		"n": "中国知网",
		"u": "http://epub.cnki.net/kns/default.htm",
		"g": "navfy",
		"id": 4
	}, {
		"n": "维普期刊",
		"u": "http://lib.cqvip.com/",
		"g": "navfy",
		"id": 5
	}, {
		"n": ">>更多数据库",
		"u": "http://library.ysu.edu.cn/sourceRight.aspx?caid=0&title=&parentID=",
		"g": "navfy",
		"id": 6
	}, {
		"n": "优酷",
		"u": "http://www.youku.com/",
		"g": "navsp",
		"id": 1
	}, {
		"n": "爱奇艺",
		"u": "http://www.iqiyi.com/",
		"g": "navsp",
		"id": 2
	}, {
		"n": "腾讯视频",
		"u": "http://v.qq.com/",
		"g": "navsp",
		"id": 3
	}, {
		"n": "土豆",
		"u": "http://www.tudou.com/",
		"g": "navsp",
		"id": 4
	}, {
		"n": "乐视",
		"u": "http://www.letv.com/",
		"g": "navsp",
		"id": 5
	}, {
		"n": "哔哩哔哩",
		"u": "http://www.bilibili.tv/",
		"g": "navsp",
		"id": 6
	}, {
		"n": "网易公开课",
		"u": "http://open.163.com/",
		"g": "navgkk",
		"id": 1
	}, {
		"n": "MOOC学院",
		"u": "http://mooc.guokr.com/",
		"g": "navgkk",
		"id": 2
	}, {
		"n": "Coursera",
		"u": "https://www.coursera.org/",
		"g": "navgkk",
		"tile": true,
		"id": 3
	}, {
		"n": "edX",
		"u": "https://www.edx.org/",
		"g": "navgkk",
		"id": 4
	}, {
		"n": "MIT Open CW",
		"u": "http://ocw.mit.edu/index.htm",
		"g": "navgkk",
		"id": 5
	}, {
		"n": "Open Yale Courses",
		"u": "http://oyc.yale.edu/",
		"g": "navgkk",
		"id": 6
	}, {
		"n": "Stanford Online",
		"u": "http://online.stanford.edu/",
		"g": "navgkk",
		"id": 7
	}, {
		"n": "Khan Academy",
		"u": "https://www.khanacademy.org/",
		"g": "navgkk",
		"id": 8
	}, {
		"n": "优课联盟(免流量)",
		"u": "http://ysdx.benke.chaoxing.com/",
		"g": "navgkk",
		"id": 9
	}, {
		"n": "极客学院",
		"u": "http://www.jikexueyuan.com/",
		"g": "navgkk",
		"id": 10
	}, {
		"n": "淘宝特卖",
		"u": "http://temai.taobao.com/event9776.htm?pid=mm_34619426_10544719_34746681",
		"g": "navgw",
		"tile": true,
		"id": 1
	}, {
		"n": "天猫精选",
		"u": "http://s.click.taobao.com/JVTYq1y?pid=mm_34619426_10544719_34746681",
		"g": "navgw",
		"tile": true,
		"id": 2
	}, {
		"n": "9块9包邮",
		"u": "http://temai.taobao.com/event10323.htm?pid=mm_34619426_10544719_34746681",
		"g": "navgw",
		"id": 3
	}, {
		"n": "聚划算",
		"u": "http://s.click.taobao.com/ZQscq1y?pid=mm_34619426_10544719_34746681",
		"g": "navgw",
		"id": 4
	}, {
		"n": "美团",
		"u": "http://www.meituan.com/",
		"g": "navgw",
		"id": 5
	}, {
		"n": "百度糯米",
		"u": "http://www.nuomi.com/",
		"g": "navgw",
		"id": 6
	}, {
		"n": "聚美优品",
		"u": "http://www.jumei.com/",
		"g": "navgw",
		"id": 7
	}, {
		"n": "唯品会",
		"u": "http://www.vip.com",
		"g": "navgw",
		"id": 8
	}, {
		"n": "京东商城",
		"u": "http://www.jd.com",
		"g": "navgw",
		"id": 9
	}, {
		"n": "当当",
		"u": "http://www.dangdang.com",
		"g": "navgw",
		"id": 10
	}, {
		"n": "亚马逊",
		"u": "http://www.amazon.cn",
		"g": "navgw",
		"id": 11
	}, {
		"n": "蘑菇街",
		"u": "http://www.mogujie.com",
		"g": "navgw",
		"id": 12
	}, {
		"n": "新浪门户",
		"u": "http://www.sina.com.cn/",
		"g": "navmx",
		"id": 1
	}, {
		"n": "搜狐门户",
		"u": "http://www.sohu.com/",
		"g": "navmx",
		"id": 2
	}, {
		"n": "腾讯门户",
		"u": "http://www.qq.com/",
		"g": "navmx",
		"id": 3
	}, {
		"n": "网易门户",
		"u": "http://www.163.com/",
		"g": "navmx",
		"id": 4
	}, {
		"n": "新浪新闻",
		"u": "http://news.sina.com.cn/",
		"g": "navmx",
		"id": 5
	}, {
		"n": "凤凰新闻",
		"u": "http://news.ifeng.com/",
		"g": "navmx",
		"id": 6
	}];

	$.each(group, function(n, value) {
		if (value.g != 'navmr') {
		$("#navmain").append('<li class="navlicustomcss"><a href="#">' + value.n + '</a><ul id="' + value.g + '"></ul></li>');
		}
	});

    var normalNode;
    
	$.each(obj, function(n, value) {
		if (value.g != 'navmr') {
			$("#" + value.g).append('<li esOpenVaule="' + value.u + '"><a href="#">' + value.n + '</a></li>');
		} else {
			if(normalNode == undefined)
			{
				normalNode = $("#navlogo").next()
			}
			
			normalNode.before('<li class="navlicustomcss" ' + ((value.self)?'esVaule="':'esOpenVaule="') + value.u + '"><a href="#">' + value.n + '</a></li>');
		}
	});
});