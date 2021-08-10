$(document).ready(function () {
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

    // 分頁選單
    respMenu()
    leftMenu()
    caenterMenu()

    //tab
    tab()
    
    // breadcrumb
    resetBreadCrumbTruncate()

    // sliders
    setupMainSlider()
    setupSliderCol3()
    setupProductGallery()

    //timeline
    timelineRWD();

    // scroll event
    $(window).on('scroll', function () {
        updateHeaderFixed()
        updateScrollTopBtn()
    });

    $(window).on('resize', function (e) {
        resetHeaderSubmenu()
    });

    // Preloader JS
	$(function() {
		$('body').addClass('loaded');

	});
    
    AOS.init({
        easing: 'ease-in-out-sine'
    });

    $(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) {
			$('.go-top, .float-sidebar').addClass('active');
		}

		if (scrolled < 300) {
			$('.go-top, .float-sidebar').removeClass('active');
		}

	});
    
    // Click Event JS
	$('.box-gotop, .go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});
    
    function resetHeaderSubmenu () {
        $('.headerwrap .has_submenu > a').siblings('.submenu').css('display', '')
    }

    // submenu click function
    function setupHeaderSubmenu () {
        if ($(window).width() < 992) {
            $('.headerwrap .has_submenu > a').on('click', function (e) {
                e.preventDefault();

                $(this).siblings('.submenu').slideToggle();
            })
        } else {
        }
    }

    function setupToggleOpen() {
        // toggleopen click function
        $('.toggleopen').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('opened');
            $(this).next().slideToggle();
        });

    }

    function setupPageCont() {
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

        $('.pagecont').css('min-height', 'calc(100vh - ' + topbottomH + 'px)');
    }

    function setupWow() {
        // init wow animation
        wow = new WOW(
            {
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            }
        )
        wow.init();
    }

    function setupWavesAnimation() {
        // node-waves animation
        if (Waves) {
            Waves.init({ duration: 1000 })
            Waves.attach('.btn', ['waves-float']);
        }
    }

    function resetBreadCrumbTruncate() {
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


    function setupMainSlider() {
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

    function setupSliderCol3() {
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
            responsive: [
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

    function setupProductGallery() {
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
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            }
        });

    }

    
    function timelineRWD() {
        // timeline
        $(".historyGroupList").slick({
            dots: false,
            arrows: true,
            autoplay: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,        
            slidesToScroll: 1,
            adaptiveHeight: false
        });

        $(".historyList").slick({
            dots: false,
            arrows: true,
            autoplay: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,        
            slidesToScroll: 2,
            adaptiveHeight: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    function updateHeaderFixed() {
        var menuh = $('.topbar').outerHeight();

        if ($(window).scrollTop() > menuh) {
            $('.headerwrap').addClass('fixed');
            $('.headerwrap').css('padding-top', menuh);
        } else {
            $('.headerwrap').removeClass('fixed');
            $('.headerwrap').css('padding-top', 0);
        }
    }

    function updateScrollTopBtn() {
        if ($(window).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    }

    function setupScrollTopBtn() {
        $('.scrollToTop').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

    }
    function respMenu() {
        $("#respMenu").aceResponsiveMenu({
            resizeWidth: '991',
            animationSpeed: 'fast',
            accoridonExpAll: false
        });
        $('#menu-btnd').click(function () {
            $('#respMenu').toggleClass('hide-menu');
        });
    }

    function leftMenu() {
        $("#leftMenu").aceResponsiveMenu({
            resizeWidth: '991',
            animationSpeed: 'fast',
            accoridonExpAll: false
        });
        $('#menu-btnl').click(function () {
            $('#leftMenu').toggleClass('hide-menu');
        });
    }
    function caenterMenu() {
        $("#caenterMenu").aceResponsiveMenu({
            resizeWidth: '991',
            animationSpeed: 'fast',
            accoridonExpAll: false
        });
        $('#menu-btns').click(function () {
            $('#caenterMenu').toggleClass('hide-menu');
        });
    }
    function tab() {
        $(".tab_content").hide();
        $(".tab_content:first").show();

        $("ul.tabs li").click(function () {

            $(".tab_content").hide();
            var activeTab = $(this).attr("rel");
            $("#" + activeTab).fadeIn();

            $("ul.tabs li").removeClass("active");
            $(this).addClass("active");

            $(".tab_drawer_heading").removeClass("d_active");
            $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

        });

        $('ul.tabs li').last().addClass("tab_last");

    }
});
