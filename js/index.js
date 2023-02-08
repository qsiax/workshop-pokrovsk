gsap.registerPlugin(ScrollTrigger, TweenMax);

window.onload = function () {
	TweenMax.to('.overlay-preloader', 2, {
		delay: .5,
		filter: "hue-rotate(0deg)",
		ease: Expo.easeInOut
	})
	TweenMax.to('.overlay-preloader-logo', 1.5, {
		delay: 1,
		width: "100%",
		ease: Expo.easeInOut
	})
	TweenMax.to('.overlay-preloader', 1.5, {
		delay: 3,
		width: 0,
		ease: Expo.easeInOut
	})
	TweenMax.to('.overlay-preloader-el01', 1.5, {
		delay: 3,
		right: "100%",
		ease: Expo.easeInOut
	})
	TweenMax.to('.overlay-preloader-logo', 1.5, {
		delay: 2.8,
		x: "-100%",
		ease: Expo.easeInOut
	})
};
