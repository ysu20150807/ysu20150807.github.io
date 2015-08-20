$(document).ready(function() {
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
	
	console.info("           ES           \n       做一个环保的人\n============================\nPowered by\nhttp://www.littleji.com\nhttp://www.xiaobaidonghui.cn\n\n In YanShan University 2015\n============================");
});


function SearchLibrary() {
    var txtsjk = document.getElementById("wd").value;
    var actionURL = "http://202.206.242.99/opac/openlink.php";
//  var select1 = document.getElementById("select10");
//  switch (select1.value) {
        actionURL = actionURL + "?strSearchType=title&match_flag=forward&historyCount=1&strText=" + encodeURIComponent(txtsjk) + "&doctype=ALL&displaypg=20&showmode=list&sort=CATA_DATE&orderby=desc&location=ALL";
//      break;
//  }
    window.open(actionURL, "_blank");
}