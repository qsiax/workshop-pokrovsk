const directionsSlider = new Swiper('.directions__slider', {
	speed: 600,
	slidesPerView: 2.5,
	spaceBetween: 20,
	navigation: {
        nextEl: ".directions__arrow-next",
        prevEl: ".directions__arrow-prev",
    },
	// breakpoints: {
	// 	0: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 10,
	// 	},
	// 	680: {
	// 		slidesPerView: 3,
	// 		spaceBetween: 60,
	// 		autoplay: false
	// 	}
	// },
});

const coursesSlider = new Swiper('.courses__slider', {
	speed: 600,
	slidesPerView: 5,
	spaceBetween: 20,
	navigation: {
        nextEl: ".courses__arrow-next",
        prevEl: ".courses__arrow-prev",
    },
	// breakpoints: {
	// 	0: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 10,
	// 	},
	// 	680: {
	// 		slidesPerView: 3,
	// 		spaceBetween: 60,
	// 		autoplay: false
	// 	}
	// },
});

function checkSlide() {
	numSlide = document.getElementById('numSlide');
	slideActive = document.getElementsByClassName('swiper-slide-active');

	slideOne = document.querySelector('.slideOne');
	slideTwo = document.querySelector('.slideTwo');
	slideThree = document.querySelector('.slideThree');
	slideFour = document.querySelector('.slideFour');
	slideFive = document.querySelector('.slideFive');
	slideSix = document.querySelector('.slideSix');
	slideSeven = document.querySelector('.slideSeven');

	if (slideOne.classList.contains("swiper-slide-active")) {
		numSlide.innerHTML = '01'
	};
	
	if (slideTwo.classList.contains("swiper-slide-active")) {
		numSlide.innerHTML = '02'
	};
	
	if (slideThree.classList.contains("swiper-slide-active")) {
		numSlide.innerHTML = '03'
	};
	
	if (slideFour.classList.contains("swiper-slide-active")) {
		numSlide.innerHTML = '04'
	};
	
	if (slideFive.classList.contains("swiper-slide-active")) {
		numSlide.innerHTML = '05'
	};
	
	if (slideSix.classList.contains("swiper-slide-active")) {
		numSlide.innerHTML = '06'
	};
	
	if (slideSeven.classList.contains("swiper-slide-active")) {
		numSlide.innerHTML = '07'
	};
};


