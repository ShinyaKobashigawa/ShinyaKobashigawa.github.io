var mainswiper = new Swiper('.main_pic', {
  autoplay: {
    delay: 3000,
  },
  
  loop: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

})

// var swiper = new Swiper('.swiper-container main_pic', {
//   loop: true,
//   autoplay: {
//   delay: 3000,
//   stopOnLastSlide: false,
//   disableOnInteraction: false,
//   reverseDirection: false
// },
//   pagination: {
//   el: '.swiper-pagination',
//   type: 'bullets',
//   clickable: true
//   }
  
// });


$(function(){
        $('.bikes').hover(function(){
            $(this).text('バイク');
        },function(){
            $(this).text('BIKES');
        });
        $('.news').hover(function(){
            $(this).text('ニュース');
        },function(){
            $(this).text('NEWS');
        });
        $('.athlete').hover(function(){
            $(this).text('ビアンキ　アスリート');
        },function(){
            $(this).text('BIANCHI AHELETE');
        });
        $('.about').hover(function(){
            $(this).text('ビアンキについて');
        },function(){
            $(this).text('ABOUT BIANCHI');
        });
        $('.store').hover(function(){
            $(this).text('ストア');
        },function(){
            $(this).text('STORE');
        });
        $('.online').hover(function(){
            $(this).text('ビアンキオンラインストア');
        },function(){
            $(this).text('BIANCHI ONLINE STORE');
        });
        $('.user').hover(function(){
            $(this).text('ユーザー登録');
        },function(){
            $(this).text('USER');
        });
        });
    

//          var swiper = new Swiper('.swiper-container', {
//       slidesPerView: 1,
//       spaceBetween: 10,
//       // init: false,
//       navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//       },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       breakpoints: {
//         '@0.00': {
//           slidesPerView: 1,
//           spaceBetween: 10,
//         },
//         '@0.75': {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },

//         '@1.50': {
//           slidesPerView: 4,
//           spaceBetween: 17,
//         },
//       }
//     });

    // articleスワイパー
    var artswiper = new Swiper('.article-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        // init: false,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
  
          960: {
            slidesPerView: 4,
            spaceBetween: 17,
          },
        }
      });