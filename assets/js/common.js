$(document).ready(function(){
  // animation & wave effect
  setupWow()
  setupWavesAnimation()

  // page layout height
  setupPageCont()

  // Header Submenu
  setupHeaderSubmenu()

  // Toggle Open
  setupToggleOpen()

  // scroll top
  setupScrollTopBtn()

  // breadcrumb
  resetBreadCrumbTruncate()

  // sliders
  setupMainSlider()
  setupSliderCol3()
  setupProductGallery()
  
  // scroll event
  $(window).on('scroll',function(){
    updateHeaderFixed()
    updateScrollTopBtn()
  });

  
  // submenu click function
  function setupHeaderSubmenu () {
    if($(window).width()<992){
      $('.headerwrap .has_submenu>a').on('click', function(e){
        e.preventDefault();

        $(this).siblings('.submenu').slideToggle();
      })
    }
  }

  function setupToggleOpen () {
    // toggleopen click function
    $('.toggleopen').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('opened');
        $(this).next().slideToggle();
    });

  }

  function setupPageCont () {
    // set page height
    var headerwrap = $('.headerwrap')
    var topbar = $('.headerwrap .topbar')
    var footer = $('.footer')

    // height
    var topbarH = 0
    var headerH = 0
    var footerH = 0
    var topbottomH

    if (headerwrap) { headerH = headerwrap.height() }
    if (topbar) { topbarH = topbar.height() }
    if (footer) { footerH = footer.height() }

    topbottomH = (headerH - topbarH) + footerH;

    $('.pagecont').css('min-height','calc(100vh - '+ topbottomH +'px)');
  }

  function setupWow () {
    // init wow animation
      wow = new WOW(
      {
        boxClass:     'wow',      
        animateClass: 'animated', 
        offset:       0,          
        mobile:       true,       
        live:         true        
      }
    )
      wow.init();
  }

  function setupWavesAnimation () {
    // node-waves animation
    if (Waves) {
      Waves.init({ duration: 1000 })
      Waves.attach('.btn', ['waves-float']);
    }
  }

  function resetBreadCrumbTruncate () {
    var len = 8

    $(".js-ellipsis").each(function (i) {
      if ($(window).width() < 576) {
        if ($(this).text().length > len) {
          var text = $(this).text().substring(0, len - 1) + "..."

          $(this).text(text)
        }
      }
    });
  }


  function setupMainSlider () {
    // home slider setting
    $('.mainslider').slick({
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  }

  function setupSliderCol3 () {
    // normal slider
      $('.slider-col-3').slick({
          dots: false,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 3000,
          infinite: true,
          speed: 200,
          slidesToShow: 3,
          adaptiveHeight: true,
          responsive:[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
      });
  }

  function setupProductGallery () {
    // product gallery slider setting
        var album = $('.gallery');
        var pager = $('.thumbs');
        var picPopup = $('.popup');

        album.slick({
          mobileFirst: true,
          autoplay: true,
          autoplaySpeed: 3000,
          fade: true,
          arrows: false,
          draggable: false,
          swipe: false,
          cssEase: 'cubic-bezier(0,.4,.4,1)',
          asNavFor: pager
        });

        pager.slick({
          mobileFirst: true,
          dots: false,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
          focusOnSelect: true,
          asNavFor: album,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
              }
            }
          ]
        });
    
    // pictures popup
        picPopup.magnificPopup({
          type: 'image',
          tLoading: 'Loading ...',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          }
        });

  }

  function updateHeaderFixed () {
    var menuh = $('.topbar').outerHeight();

    if ($(window).scrollTop() > menuh) {
      $('.headerwrap').addClass('fixed');
      $('.headerwrap').css('padding-top',menuh);
    }else{
      $('.headerwrap').removeClass('fixed');
      $('.headerwrap').css('padding-top',0);
    }
  }

  function updateScrollTopBtn () {
    if ($(window).scrollTop() > 300) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
  }

  function setupScrollTopBtn () {
    $('.scrollToTop').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

  }
});
