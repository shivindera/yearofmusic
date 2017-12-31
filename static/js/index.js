var monthNames = [
	"Jan", "Feb", "Mar",
	"Apr", "May", "Jun", "Jul",
	"Aug", "Sep", "Oct",
	"Nov", "Dec"
];

var BreakException = {};

$(document).ready(function () {
	$.getJSON('/json/list.json', function (json) {
		var now = new Date();
		var d = new Date(2018,0,1);
		try {
			json.forEach(function (val) {
				if (Math.ceil((now.getTime() - d.getTime()) / (1000 * 3600 * 24)) <= 1) {
					var extra = '';
					var vid = val.l.substring(val.l.indexOf('?v=') + 3);
					if (vid === 'QeP-WxjHyk8') {
						extra = '&start=1837'
					}
					if (vid === '67QB2h6JsMQ') {
						extra = '&start=243'
					}
					$('.videoWrapper').append("<iframe id='ytplayer' src='https://www.youtube.com/embed/" + vid + "?autoplay=1" + extra + "' frameborder='0'></iframe>");
					throw BreakException;
				}
				$('.list').append("<li><span>" + monthNames[d.getMonth()] + " " + d.getDate() + "</span><a href=" + val.l + ">" + val.t + "</span></li>");
				d.setDate(d.getDate() + 1);
			});
		} catch (e) {
			if (e !== BreakException) throw e;
		}
	});
});
