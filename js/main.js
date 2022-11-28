$(function(){
  
  $(window).load(function(){
    $('.grid').isotope({
      // options
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      fitRows: {
        gutter: 0
      }
    });
  });


  // Isotope Filter Setting
  var grid = $('.grid');
  var m1 = $('#m1');
  var m2 = $('#m2');
  var m3 = $('#m3');
  var m4 = $('#m4');
  var m5 = $('#m5');

  // // 라이트박스 초기 설정
  // $('.grid-item a').magnificPopup({
  //   type:'inline',
  //   gallery: {
  //     enabled: true
  //   }  
  // });
  //   $('.grid-item a').magnificPopup({
  //   type: 'inline',
  //   closeOnBgClick:false,
  //   closeBtnInside:true,
  //   gallery: {
  //     enabled: true
  //   },
  // });
  $('.g1 a').magnificPopup({
    type:'inline',
    closeOnBgClick: false, 
    closeBtnInside: true,
    gallery: {
      enabled: true
    }  
  });
  $('.g2 a').magnificPopup({
    type:'inline',
    closeOnBgClick: false, 
    closeBtnInside: true,
    gallery: {
      enabled: true
    }  
  });
  $('.g3 a').magnificPopup({
    type:'inline',
    closeOnBgClick: false, 
    closeBtnInside: true,
    gallery: {
      enabled: true
    }  
  });
  


  // 창닫기 버튼 설정
  // $('.close_btn').click(function(){
  //   $.magnificPopup.close();
  // });


  // All 버튼 설정
  // m1.click(function(e){
  //   grid.isotope({ 
  //     itemSelector: '.grid-item',
  //     layoutMode: 'fitRows',
  //     filter : '.grid-item' 
  //   });

  //   $('.grid-item a').magnificPopup({
  //     type:'image',
  //     gallery: {
  //       enabled: true
  //     }  
  //   });

  //   e.preventDefault();
  // });
  m1.click(function(e){
    grid.isotope({ filter: '.grid-item' });
    $('.grid-item a').magnificPopup({
      type: 'inline',
      gallery: {
        enabled: true
      },
    });
  
    $('.grid-item a').magnificPopup({
      type: 'inline',
      closeOnBgClick:false,
      closeBtnInside:true,
      gallery: {
        enabled: true
      }
    });

    e.preventDefault();
  });


  // .g1 버튼 설정
  // m2.click(function(e){
  //   grid.isotope({       
  //     itemSelector: '.grid-item',
  //     layoutMode: 'fitRows',
  //     filter : '.g1' 
  //   });

  //   $('.g1 a').magnificPopup({
  //     type:'image',
  //     gallery: {
  //       enabled: true
  //     }  
  //   });

  //   e.preventDefault();
  // });
  m2.click(function(e){
    grid.isotope({ filter: '.g1' });
    $('.g1 a').magnificPopup({
      type: 'inline',
      gallery: {
        enabled: true
      },
    });
    $('.g1 a').magnificPopup({
      type: 'inline',
      closeOnBgClick:false,
      closeBtnInside:true,
      gallery: {
        enabled: true
      }
    });

    e.preventDefault();
  });


  // // .g2 버튼 설정
  // m3.click(function(e){
  //   grid.isotope({ 
  //     itemSelector: '.grid-item',
  //     layoutMode: 'fitRows',
  //     filter : '.g2' 
  //   });

  //   $('.g2 a').magnificPopup({
  //     type:'image',
  //     gallery: {
  //       enabled: true
  //     }  
  //   });

  //   e.preventDefault();
  // });
  m3.click(function(e){
    grid.isotope({ filter: '.g2' });
    $('.g2 a').magnificPopup({
      type: 'inline',
      gallery: {
        enabled: true
      },
    });
    $('.g2 a').magnificPopup({
      type: 'inline',
      closeOnBgClick:false,
      closeBtnInside:true,
      gallery: {
        enabled: true
      }
    });

    e.preventDefault();
  });

  
  // // .g3 버튼 설정
  // m4.click(function(e){
  //   grid.isotope({ 
  //     itemSelector: '.grid-item',
  //     layoutMode: 'fitRows',
  //     filter : '.g3' 
  //   });

  //   $('.g3 a').magnificPopup({
  //     type:'image',
  //     gallery: {
  //       enabled: true
  //     }  
  //   });

  //   e.preventDefault();
  // });
  m4.click(function(e){
    grid.isotope({ filter: '.g3' });
    $('.g3 a').magnificPopup({
      type: 'inline',
      gallery: {
        enabled: true
      },
    });
    $('.g3 a').magnificPopup({
      type: 'inline',
      closeOnBgClick:false,
      closeBtnInside:true,
      gallery: {
        enabled: true
      }
    });

    e.preventDefault();
  });

  // // .g4 버튼 설정
  // m5.click(function(e){
  //   grid.isotope({ 
  //     itemSelector: '.grid-item',
  //     layoutMode: 'fitRows',
  //     filter : '.g4' 
  //   });

  //   $('.g4 a').magnificPopup({
  //     type:'image',
  //     gallery: {
  //       enabled: true
  //     }  
  //   });

  //   e.preventDefault();
  // });
  m5.click(function(e){
    grid.isotope({ filter: '.g4' });
    $('.g4 a').magnificPopup({
      type: 'inline',
      gallery: {
        enabled: true
      },
    });
    $('.g4 a').magnificPopup({
      type: 'inline',
      closeOnBgClick:false,
      closeBtnInside:true,
      gallery: {
        enabled: true
      }
    });
    e.preventDefault();
  });

  const cursorParent = document.getElementById('mouse-cursor')
  const cursorChild = cursorParent.children[0]
  window.addEventListener('mousemove', mousemove)
  window.addEventListener('mousedown', mousedown)
  window.addEventListener('mouseup', mouseup)

  let scale = 1
  let stage = ''
  let carouselDirection = ''
  let cursorX = 0, cursorY = 0
  function mousemove(e) {
    cursorX = e.pageX - cursorParent.offsetWidth / 2
    cursorY = e.pageY - cursorParent.offsetHeight / 2
    cursorParent.style.transform =
      `translate3d(${cursorX}px, ${cursorY}px, 0)`

    switch(e.target.getAttribute('data-cursor')) {
      case 'carousel':
        carouselDirection = cursorX < innerWidth / 2 ? 'Prev' : 'Next'
        cursorChild.setAttribute('data-name', carouselDirection)
        if (stage === 'carousel') return
        scale = 5
        stage = 'carousel'
        cursorParent.className = 'cursor-text-mode'
        break
      case 'link':
        if (stage === 'link') return
        scale = 5
        stage = 'link'
        cursorChild.setAttribute('data-name', e.target.getAttribute('data-name'))
        cursorParent.className = 'cursor-text-mode'
        break
      case 'img':
        if (stage === 'img') return
        scale = 1
        stage = 'img'
        cursorChild.setAttribute('data-name', '')
        cursorParent.className = ''
        break
      default:
        if (stage === '') return
        scale = 1
        stage = ''
        cursorChild.setAttribute('data-name', '')
        cursorParent.className = ''
        break
      }
      cursorChild.style.setProperty('--cursor-scale', scale)
    }
    function mousedown(e) {
      scale *= 0.8
      cursorChild.style.setProperty('--cursor-scale', scale)
    }
    function mouseup(e) {
      scale *= 1.25
      cursorChild.style.setProperty('--cursor-scale', scale)
    }

   // 상단 네비게이션 설정시작 - 스크롤 이벤트 함수: $('대상').scroll()
   $(window).scroll(function(){

    var scrollPos = $(window).scrollTop();
    // console.log(scrollPos);

    if(scrollPos > 860){
      $('#header').addClass('act');
    }else{
      $('#header').removeClass('act');
    }
    
  });
  
  // Sticky JS
  var menuItem = $('#gnb a, h1 a, .popup_menubar a');
  var goAboutItem = $('.goAbout a');

  menuItem.click(function(e){
    var el = $(this).attr('href');
    var elWrap = $(el);
    scrollMove(elWrap, 63);
    e.preventDefault();
  })

  goAboutItem.click(function(e){
    var el = $(this).attr('href');
    var elWrap = $(el);
    scrollMove(elWrap, 63);
    e.preventDefault();
  })

  // 부드러운 움직임 함수
  function scrollMove(el, navHeight){
    var offset = el.offset().top;
    var totalPos = offset - navHeight;

    $('html, body').animate({scrollTop: totalPos}, 800);
  }

  // AOS Animation
  AOS.init();

  // ScrollMagic Call
  // 1. 컨트롤러 생성
  var controller = new ScrollMagic.Controller();

  // 2. 애니메이션 설정
  var circle1 = $('.circle1');
  var circle2 = $('.circle2');
  var circle3 = $('.circle3');
  var circle4 = $('.circle4');
  var circle5 = $('.circle5');
  var circle6 = $('.circle6');
  var circle7 = $('.circle7');
  var tl = new TimelineMax();

  tl.from(circle1, 1, {y: 40, opacity: 0})
    .from(circle2, 1, {y: 40, opacity: 0})
    .from(circle3, 1, {y: 40, opacity: 0})
    .from(circle4, 1, {y: 40, opacity: 0})
    .from(circle5, 1, {y: 40, opacity: 0})
    .from(circle6, 1, {y: 40, opacity: 0})
    .from(circle7, 1, {y: 40, opacity: 0});

  // 3. 장면 생성 및 설정
  var scene = new ScrollMagic.Scene({
    triggerElement: '#skills',
    triggerHook: 0.5
  })
  .setTween(tl)
  // .addIndicators({
  //   name: 'Scene',
  //   colorStart: 'red',
  //   colorEnd: 'red',
  //   colorTrigger: 'blue' 
  // })
  .addTo(controller)
  .on('start end', function(){

    // Circle1 Call
    $('.circle1').circleProgress({
      value: 0.9,
      size: 180,
      thickness: 10,
      fill: '#34495e',
      animation: {
        duration: 1000
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
    });

    // Circle2 Call
    $('.circle2').circleProgress({
      value: 0.8,
      size: 180,
      thickness: 10,
      fill: '#34495e',
      animation: {
        duration: 2000
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
    });

    // Circle3 Call
    $('.circle3').circleProgress({
      value: 0.75,
      size: 180,
      thickness: 10,
      fill: '#34495e',
      animation: {
        duration: 3000
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
    });

    // Circle4 Call
    $('.circle4').circleProgress({
      value: 0.75,
      size: 180,
      thickness: 10,
      fill: '#34495e',
      animation: {
        duration: 4000
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
    });
    
    // Circle5 Call
    $('.circle5').circleProgress({
      value: 0.9,
      size: 180,
      thickness: 10,
      fill: '#34495e',
      animation: {
        duration: 5000
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
    });
    
    // Circle6 Call
    $('.circle6').circleProgress({
      value: 0.85,
      size: 180,
      thickness: 10,
      fill: '#34495e',
      animation: {
        duration: 6000
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(85 * progress) + '<i>%</i>');
    });
    
    // Circle7 Call
    $('.circle7').circleProgress({
      value: 0.9,
      size: 180,
      thickness: 10,
      fill: '#34495e',
      animation: {
        duration: 7000
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
    });

  });


  $('#popup_btn').magnificPopup({ 
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/', 
          id: function(url) {        
            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
            if ( !m || !m[1] ) return null;
            return m[1];
          },
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        }
      }
    }
  });




  particlesJS("particles-js", {"particles":{"number":{"value":300,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":2,"opacity_min":0.1,"sync":false}},"size":{"value":10,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":3,"direction":"top","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});


});