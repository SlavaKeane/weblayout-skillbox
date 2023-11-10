const 
    personalLabel = document.querySelector('#personal-data-label'),
	personalInput = document.querySelector('#personal-data-input'),
	menu = document.querySelector('.nav'),
	burger = document.querySelector('.burger'),
	overlay = document.querySelector('.overlay'),
	accordionTrigger = document.querySelectorAll('.accordion-item__trigger'),
	tabsLink = document.querySelectorAll('.tabs__link'),
	tabContent = document.querySelectorAll('.tabs__content'),
	scrollLinks = document.querySelectorAll('.header__nav__link');


const lockScroll = () => {
    document.body.classList.add('lock');
}

const unlockScroll = () => {
    document.body.classList.remove('lock');
}

burger.addEventListener('click', (e) => {
    menu.classList.add('open');
    menu.classList.remove('close');
    overlay.classList.add('open');
    lockScroll();
});

overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    menu.classList.add('close');
    overlay.classList.remove('open');
    unlockScroll();
});

const mySwiper = new Swiper('.swiper', {
    navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	ally: {
		nextSlideMessage: 'Следущий слайд',
		prevSlideMessage: 'Предыдущий слайд',
		paginationBulletMessage: 'Перейти к слайду {{index}}',
	},
	
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
	dynamicBullets: true,
  },

//   scrollbar: {
// 	el: '.swiper-scrollbar',
// 	draggable: true,
//   }
    // grabCursor: true,
	// slideToClickedSlide: true,
	mousewheel: {
	    sensitivity: 1,
	},

	autoplay: {
        delay: 2000,
		disableOnInteraction: false,
	},

	// speed: 800,
	// effect: 'fade',
	// fadeEffect: {
	// 	crossFade:true,
	// },
    // speed: 800,
	// effect: 'flip',
	// fadeEffect: {
	// 	slideShadows: true,
	// 	limitRotation: true,
	// },
    speed:800,
	effect: 'cube',
	cubeEffect: {
		slideShadows: true,
		shadow: true,
		shadowOffeset: 20,
		shadowScale: 1,
	},
})

accordionTrigger.forEach(function(item){
	item.addEventListener('click', function() {
	item.parentNode.classList.toggle('accordion-item--active');
	})
})

personalLabel.addEventListener('keydown', function(e) { 
	if (e.keyCode === 13) { 
	personalInput.click(); 
	}
});

tabsLink.forEach(function(tabsBtn){

    tabsBtn.addEventListener('click', function(e) {
	    const path = e.currentTarget.dataset.path;

		    tabContent.forEach(function(tabItem){
			    tabItem.classList.remove('tab-content-active');
		    });

		document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
	});
});

scrollLinks.forEach(function(el){
	el.addEventListener('click', function(e) {
		e.preventDefault();
		const blockID = el.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
});
