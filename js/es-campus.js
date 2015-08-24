var campus_json = [{
	"n": "ysu",
	"u": "http://job.ysu.edu.cn/default.html"
}, {
	"n": "chinahr",
	"u": "http://www.chinahr.com"
}, {
	"n": "dajie",
	"u": "http://www.dajie.com"
}, {
	"n": "zhilian",
	"u": "http://www.zhaopin.com/"
}, {
	"n": "liepin",
	"u": "http://www.liepin.com/"
}, {
	"n": "51job",
	"u": "http://www.51job.com/"
}, {
	"n": "ganji",
	"u": "http://www.ganji.com/zhaopin/"
}, {
	"n": "58",
	"u": "http://qhd.58.com/job.shtml"
}, {
	"n": "alibaba",
	"u": "https://campus.alibaba.com/index.htm"
}, {
	"n": "baidu",
	"u": "http://talent.baidu.com/external/baidu/index.html#/campusClose"
}, {
	"n": "tencent",
	"u": "http://join.qq.com/index.php"
}, {
	"n": "360",
	"u": "http://campus.360.cn/2015/grad.html"
}, {
	"n": "letv",
	"u": "http://www.letv.com/campus/zhiwei.html"
}, {
	"n": "163",
	"u": "http://campus.163.com/"
}, {
	"n": "huawei",
	"u": "http://career.huawei.com/recruitment/campus.html"
}, {
	"n": "mogujie",
	"u": "http://job.mogujie.com/campus2016"
}, {
	"n": "xiaomi",
	"u": "http://hr.xiaomi.com/user/resume"
}, {
	"n": "iqiyi",
	"u": "http://www.iqiyi.com/common/employ.html"
}, {
	"n": "qunar",
	"u": "http://campus.qunar.com/main.html"
}, {
	"n": "vip",
	"u": "http://campus.vip.com/vip/campus/employ_process/"
}, {
	"n": "google",
	"u": "https://code.google.com/codejam/apactest"
}, {
	"n": "sohu",
	"u": "http://campus.sogou.com/"
}, {
	"n": "jd",
	"u": "http://campus.jd.com/"
}, {
	"n": "sogou",
	"u": "http://campus.jd.com/"
}, {
	"n": "sina",
	"u": "http://career.sina.com.cn"
}];



$(document).ready(function() {
	$.each(campus_json, function(n, value) {
		$("#webgrid").append('<div class="campus-block esopen" esOpenVaule="' + value.u + '"><img src="img/campus/' + value.n + '.jpg"></img></div>');
	});
	
	$("div.esopen").click(function() {
		var urlopen = $(this).attr("esOpenVaule");
		if (urlopen != undefined) {
			window.open(urlopen);
		}
	});
});
