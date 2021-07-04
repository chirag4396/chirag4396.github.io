$(document).ready(function () {
	$('#nav-icon').click(function () {
		$(this).toggleClass('open');
	});
});

var o1 = $(".parellex1");
var o2 = $(".parellex2");
var o3 = $(".parellex3");
var o4 = $(".parellex4");
var o5 = $(".parellex5");
var o6 = $(".parellex6");
var o7 = $(".parellex7");
var o8 = $(".parellex8");
var o9 = $(".parellex9");
var o = $(".parellex");
$("#scene").on("mousemove", function (t) {
	var e = -($(window).innerWidth() / 2 - t.pageX) / 30,
		n = ($(window).innerHeight() / 2 - t.pageY) / 10,
		s = e + n,
		m = e - n,
		sm = s + m,
		ms = s - m,
		a = sm + e,
		msn = m + e + s - ms + sm,
		snm = sm - ms + s + n,
		mms = m + s + e + sm - a
		sms = s + m - sm + ms - a + mms;

	o1.attr("style", "transform: translate(" + e + "px," + n + "px);-webkit-transform: translate(" + e + "px," + n + "px);-moz-transform: translate(" + e + "px," + n + "px);")

	o2.attr("style", "transform: translate(" + s + "px," + s + "px);-webkit-transform: translate(" + s + "px," + s + "px);-moz-transform: translate(" + s + "px," + s + "px);")

	o3.attr("style", "transform: translate(" + m + "px," + m + "px);-webkit-transform: translate(" + m + "px," + m + "px);-moz-transform: translate(" + m + "px," + m + "px);")

	o4.attr("style", "transform: translate(" + sm + "px," + sm + "px);-webkit-transform: translate(" + sm + "px," + sm + "px);-moz-transform: translate(" + sm + "px," + sm + "px);")

	o5.attr("style", "transform: translate(" + ms + "px," + ms + "px);-webkit-transform: translate(" + ms + "px," + ms + "px);-moz-transform: translate(" + ms + "px," + ms + "px);")

	o6.attr("style", "transform: translate(" + a + "px," + a + "px);-webkit-transform: translate(" + a + "px," + a + "px);-moz-transform: translate(" + a + "px," + a + "px);")

	o7.attr("style", "transform: translate(" + msn + "px," + msn + "px);-webkit-transform: translate(" + msn + "px," + msn + "px);-moz-transform: translate(" + msn + "px," + msn + "px);")

	o8.attr("style", "transform: translate(" + snm + "px," + msn + "px);-webkit-transform: translate(" + snm + "px," + msn + "px);-moz-transform: translate(" + snm + "px," + msn + "px);")

	o9.attr("style", "transform: translate(" + mms + "px," + mms + "px);-webkit-transform: translate(" + mms + "px," + mms + "px);-moz-transform: translate(" + mms + "px," + mms + "px);")

	o.attr("style", "transform: translate(" + sms + "px," + sms + "px);-webkit-transform: translate(" + sms + "px," + sms + "px);-moz-transform: translate(" + sms + "px," + sms + "px);")
})