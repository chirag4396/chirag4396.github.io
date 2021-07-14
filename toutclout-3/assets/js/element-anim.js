/* general.js */
var controller = new ScrollMagic.Controller;
$.fn.parallax = function (e, t) {
	$el = $(this), TweenLite.to($el, .2, {
		x: -(t.clientX - window.innerWidth / 2) / e,
		y: -(t.clientY - window.innerHeight / 2) / e
	})
}, $(".banner-content h1, .banner-content h2").mousemove(function (e) {
	$(".banner-content h1, .banner-content h2").parallax(-20, e)
}), TweenMax.staggerTo(".left-side-shape .grey-border-circle", 2.5, {
	y: 30,
	yoyo: !0,
	repeat: -1,
	autoRound: !0,
	ease: Power1.easeInOut
}, .1), TweenMax.staggerTo(".left-side-shape .half-circle ", 3, {
	y: 30,
	yoyo: !0,
	repeat: -1,
	autoRound: !0,
	ease: Power1.easeInOut
}, .1), TweenMax.staggerTo(".left-side-shape .small-light-grey-circle ", 4, {
	y: 30,
	yoyo: !0,
	repeat: -1,
	autoRound: !0,
	ease: Power1.easeInOut
}, .1), TweenMax.staggerTo(".left-side-shape .light-grey-circle ", 2.5, {
	x: 20,
	yoyo: !0,
	repeat: -1,
	autoRound: !0,
	ease: Power1.easeInOut
}, .1), TweenMax.staggerTo(".left-side-shape .spiral ", 4, {
	x: 20,
	yoyo: !0,
	repeat: -1,
	autoRound: !0,
	ease: Power1.easeInOut
}, .1), TweenMax.staggerTo(".right-side-shape .circles ", 3, {
	y: 30,
	yoyo: !0,
	repeat: -1,
	autoRound: !0,
	ease: Power1.easeInOut
}, .1), TweenMax.staggerTo(".right-side-shape .right-light-grey-circle ", 4, {
	x: 20,
	yoyo: !0,
	repeat: -1,
	autoRound: !0,
	ease: Power1.easeInOut
}, .1), TweenMax.staggerTo(".right-side-shape .circle-semicircle ", 5, {
	y: 35,
	yoyo: !0,
	repeat: -1,
	autoRound: !0,
	ease: Power1.easeInOut
}, .1), TweenMax.staggerTo(".right-side-shape .grey-bg-shape ", 3, {
    x: 30,
    yoyo: !0,
    repeat: -1,
    autoRound: !0,
    ease: Power1.easeInOut
}, .1), TweenMax.staggerTo(".right-side-shape .curve-lines ", 2, {
    x: 20,
    yoyo: !0,
    repeat: -1,
    autoRound: !0,
    ease: Power1.easeInOut
}, .1), TweenMax.staggerTo(".right-side-shape .light-grey-border-circle ", 2.5, {
    y: 20,
    yoyo: !0,
    repeat: -1,
    autoRound: !0,
    ease: Power1.easeInOut
}, .1);

