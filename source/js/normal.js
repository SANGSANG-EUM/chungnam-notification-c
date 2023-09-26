/**
 * [공통] 모바일 브라우저 100vh 해결
 */
const mobileHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
}

// document ready
$(document).ready(function(){
  // mobileHeight();

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  let swiper = new Swiper(".nt-direction-img-slider", {
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      init: function () {
        
      },
      slideChangeTransitionStart: function () {
        let actIndex = $(".swiper-slide-active").index();
        $(".nt-direction_pnavi-list").removeClass('act');
        $(".nt-direction_pnavi-list").eq(actIndex).addClass('act');
      },
    },
  });
}); // document ready end