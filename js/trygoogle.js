var hs = ["go.hibenben.com","www.hlfeel.com","g.yon.hk","www.guge119.com","www.ggooo.net"];   

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function red(h) {
	var l = 'http://' + h + '/search' + window.location.search
	+ '&hl=zh-CN';
	window.location = l;
}

var stop = false;
function trygoogle(i) {
	var h = hs[i];
	red(h);
	i++;
	if (i >= hs.length) {
		stop = true;
		i = 0;
	}
	if (stop) {
		return;
	}
	setTimeout(function() { load(i); }, 500);
}
