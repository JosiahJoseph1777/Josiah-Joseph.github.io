/*************************************************************************
    Template Name: Magala
    Template URI: https://themeforest.net/user/tortoiz
    Description: A 'magala – Magazine and Blog Template' is perfect if you like a clean and modern design. This theme is ideal for Magazine, Blog, Post, Travel, Personal, and those who need an easy, attractive and effective way to share their work with clients.
    Author: tortoiz
    Version: 1.0
    Author URI: http://tortoizthemes.com 
    
    Note: style js.
*************************************************************************/
/*
    01. Scroll top
    02. Background Fit Image
    03. Sidebar Menu And Right Search
    04. Mobile Menu
    05. News Ticker
    06. All Scroll Bar
    07. Sticky Sidebar
    08. Frontpage Slider
    09. Widget Posts Slider
    10. Popular Posts Carousel
    11. Trending Posts Carousel
    12. Featured Carousel
    13. Category Carousel
    10. Tumbnail Carousel
    11. Restaurant Gallery
    12. Gallery Popup
    13. Youtube video trigger 
    14. Single Post Slider
    15. Posts Load More
    16. Masonry
 
==================================================
[ End table content ]
==================================================*/


(function($) {
    'use strict';
    
    var magalaApp = { 
        /* ---------------------------------------------
            01. Scroll top
         --------------------------------------------- */
        scroll_top: function () {
            $("body").append("<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fa fa-angle-double-up'></span></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop
                        .addClass('btn-show')
                        .removeClass('btn-hide');
                } else {
                    $scrolltop
                        .addClass('btn-hide')
                        .removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "normal");
                return false;
            });
        },
        
        /* ---------------------------------------------
            02. Background Fit Image
        --------------------------------------------- */
        background_fit_image: function() {
            $.fn.bgImage = function() {
                $(this).each(function() {
                    var $image = $(this).find('img');
                    var imageSource = $image.attr('src');
                    $image.css('visibility','hidden');
                    $(this).css('backgroundImage', 'url(' + imageSource + ')');
                    if(!$image.length) {
                        $(this).css('backgroundImage', 'none');
                    }                    
                });
            }; 
            $('.frontpage-featured-posts.featured-style-one .featured-item .featured-media').bgImage();
            $('.frontpage-featured-posts.featured-style-two .featured-item .featured-media').bgImage();
            $('.post-grid.style-five .thumb-wrap').bgImage();
            $('.post-grid.style-six .thumb-wrap').bgImage();
            $('.slider-item .slider-thumb').bgImage();
            $('.singlePost-item .slider-thumb').bgImage();
        },
        
        /* ---------------------------------------------
            03. Sidebar Menu And Right Search
        --------------------------------------------- */
        sidebar_menu_and_search: function () {
            // Sidebar Menu
            //-------------------------------
            $(".sidebar-menu-btn").on("click", function () {
                $(".sidebar-menu").toggleClass("active");
            });
            $('.sidebar-menu-close-button, .sidebar-menu-close-all-window').on('click', function(){
                $(".sidebar-menu").toggleClass("active");
                return false;
            });
            $('.site-header .navigation-area .mainmenu-area').clone().appendTo('.sidebar-menu-inner');
            $('.sidebar-menu-inner li.dropdown-trigger > a').on('click', function () {
                $(this).siblings('.dropdown-content').slideToggle(500);
                $(this).toggleClass("active");
            });
            
            // Sidebar Posts
            //-------------------------------
            $('#bt-show-sidebar').on('click', function(){
                $("body").addClass("off-canves-opend")
                return false;
            });

            $('.magala-close-all-window, .sidebar-close-button').on('click', function(){
                $("body").removeClass("off-canves-opend")
                return false;
            });
        },
        
        /* ---------------------------------------------
            04. Mobile Menu
        --------------------------------------------- */
        mobile_menu: function () {
            var mobilesearch = $('.site-header .navigation-area .search-wrap').clone().appendTo('.mobile-menu');
            // mobile Menu
            //-------------------------------
            $('.site-navigation .mainmenu-area nav').meanmenu({
                meanMenuClose: "<i class='fa fa-close'></i>",
                meanMenuCloseSize: '18px',
                meanScreenWidth: '991',
                meanExpandableChildren: true,
                meanMenuContainer: '.mobile-menu'
            });
        },
        
        /*-------------------------------------------
            05. News Ticker
        --------------------------------------------- */
        news_ticker: function() {
            $('#newsTicker').breakingNews({
				effect: 'typography'
			});
        },
        
        /*-------------------------------------------
            06. All Scroll Bar
        --------------------------------------------- */
        scroll_bar: function() {
            // Magala Sidebar Scroll
            //-------------------------------
            if ($('.magala-side-sidebar').length) {
                var $sidebar_scroll = $('.magala-side-sidebar');
                $sidebar_scroll.TrackpadScrollEmulator();
                $( window ).resize(function() {
                    setTimeout(function() {
                        $sidebar_scroll.TrackpadScrollEmulator('recalculate');
                    }, 250);
                });
            }
            
            // Sidebar Menu Scroll
            //-------------------------------
            if ($('.video-channels-inner').length) {
                var $video_channels_scroll = $('.video-channels-inner');
                $video_channels_scroll.TrackpadScrollEmulator();
                $( window ).resize(function() {
                    setTimeout(function() {
                        $video_channels_scroll.TrackpadScrollEmulator('recalculate');
                    }, 250);
                });
            }
            
            // Sidebar Menu Scroll
            //-------------------------------
            if ($('.sidebar-menu').length) {
                var $sidebar_scroll2 = $('.sidebar-menu');
                $sidebar_scroll2.TrackpadScrollEmulator();
                $( window ).resize(function() {
                    setTimeout(function() {
                        $sidebar_scroll2.TrackpadScrollEmulator('recalculate');
                    }, 250);
                });
            }
        },
        
        
        /*-------------------------------------------
            07. Sticky Sidebar
        --------------------------------------------- */
        sticky_sidebar: function() {
            if ($('.sidebar').length) {
                $('.sidebar').theiaStickySidebar({
                    'containerSelector': '.main-wrapper',
                    'additionalMarginTop': 0,
                    'minWidth': 992,
                });
            } 
        },
        
        /*-------------------------------------------
            08. Frontpage Slider
        --------------------------------------------- */
        frontpage_slider: function() {
            if ($('#frontpage-slider.frontpage-slider-one').length) {
                $('#frontpage-slider.frontpage-slider-one').owlCarousel({
                    center: true,
                    items: 1,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    loop: true,
                    margin: 0,
                    singleItem : true,
                    nav: false,
                    dots: false,
                    thumbs: true,
                    thumbsPrerendered: true,
                    animateIn: 'fadeIn',
                    animateOut: 'fadeOut'
                }); 
            }
            
            if ($('#frontpage-slider.frontpage-slider-two').length) {
                $('#frontpage-slider.frontpage-slider-two').owlCarousel({
                    center: true,
                    items: 2,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    smartSpeed: 800,
                    loop: true,
                    margin: 30,
                    singleItem : true,
                    dots: false,
                    nav: true,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive: {
                        280: {
                            items: 1
                        },
                        576: {
                            items: 2
                        },
                        768: {
                            items: 2
                        }
                    }
                });   
            }
            if ($('#frontpage-slider.frontpage-slider-three').length) {
                $('#frontpage-slider.frontpage-slider-three').owlCarousel({
                    center: true,
                    items: 1,
                    autoplay: false,
                    autoplayTimeout: 3000,
                    smartSpeed: 800,
                    loop: true,
                    margin: 0,
                    singleItem : true,
                    dots: false,
                    nav: true,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                }); 
            }
        },
        
        /*-------------------------------------------
            09. Widget Posts Slider
        --------------------------------------------- */
        widget_posts_slider: function() {
            if ($('#post-widget-carousel').length) {
                $('#post-widget-carousel').owlCarousel({
                    center: true,
                    items: 1,
                    smartSpeed: 800,
                    autoplay: false,
                    autoplayTimeout: 3000,
                    loop: true,
                    margin: 0,
                    nav: true,
                    dots: false,
                    singleItem: true, 
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                });  
            }
        },
        
        /*-------------------------------------------
            10. Popular Posts Carousel
        --------------------------------------------- */
        popular_posts_carousel: function() {
            if ($('#popular-posts-carousel').length) {
                $('#popular-posts-carousel').owlCarousel({
                    center: false,
                    items: 3,
                    smartSpeed: 800,
                    autoplay: false,
                    autoplayTimeout: 3000,
                    loop: true,
                    margin: 30,
                    nav: true,
                    dots: false,
                    singleItem: false, 
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive: {
                        280: {
                            items: 1
                        },
                        450: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1300: {
                            items: 3
                        },
                        1400: {
                            items: 3
                        }
                    }
                });     
            }
        },
        
        
        /*-------------------------------------------
            11. Trending Posts Carousel
        --------------------------------------------- */
        trending_posts_carousel: function() {
            if ($('#trending-posts-carousel').length) {
                $('#trending-posts-carousel').owlCarousel({
                    center: false,
                    items: 3,
                    smartSpeed: 800,
                    autoplay: false,
                    autoplayTimeout: 3000,
                    loop: true,
                    margin: 1,
                    nav: false,
                    dots: true,
                    singleItem: false, 
                    responsive: {
                        280: {
                            items: 1
                        },
                        450: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1300: {
                            items: 3
                        },
                        1400: {
                            items: 3
                        }
                    }
                });   
            }
        },
        
        
        /* ---------------------------------------------
            12. Featured Carousel
         --------------------------------------------- */
        featured_slider: function() {
            if ($('#featured-carousel').length) {
                $('#featured-carousel').owlCarousel({
                    center: false,
                    items: 4,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    smartSpeed: 800,
                    margin: 0,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: false,
                    responsive: {
                        280: {
                            items: 1
                        },
                        680: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        1080: {
                            items: 3
                        },
                        1300: {
                            items: 3
                        },
                        1400: {
                            items: 4
                        }
                    }
                });  
            }
            
            if ($('#featured-carousel-two').length) {
                $('#featured-carousel-two').owlCarousel({
                    center: false,
                    items: 5,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    margin: 0,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: true,
                    responsive: {
                        280: {
                            items: 1
                        },
                        450: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        800: {
                            items: 3
                        },
                        1200: {
                            items: 4
                        },
                        1400: {
                            items: 5
                        }
                    }
                });  
            }
        },
        
        /* ---------------------------------------------
            13. Category Carousel
         --------------------------------------------- */
        category_carousel: function() {
            if ($('#category-carousel').length) {
                $('#category-carousel').owlCarousel({
                    center: false,
                    items: 6,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    margin: 30,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: false,
                    responsive: {
                        280: {
                            items: 1
                        },
                        450: {
                            items: 2
                        },
                        768: {
                            items: 3
                        },
                        800: {
                            items: 4
                        },
                        1000: {
                            items: 5
                        },
                        1200: {
                            items: 6
                        },
                        1400: {
                            items: 6
                        }
                    }
                });  
            }
        },
        
        /*-------------------------------------------
            14. Single Post Slider
        --------------------------------------------- */
        single_post_slider: function() {
            if ($('#singlePost-slider').length) {
                $('#singlePost-slider').owlCarousel({
                    center: true,
                    items: 2,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    smartSpeed: 800,
                    loop: true,
                    margin: 1,
                    singleItem : true,
                    dots: false,
                    nav: true,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive: {
                        280: {
                            items: 1
                        },
                        576: {
                            items: 2
                        },
                        768: {
                            items: 2
                        }
                    }
                });
            }
        },
        
        /* ---------------------------------------------
            15. Posts Load More
        --------------------------------------------- */
        posts_load_more: function () {
            $(function () {
                var $show_post = 8;
                var $post_count = $(".site-main .load-post").length;
                $(".site-main .load-post").slice(0, $show_post).show();
                
                if($show_post < $post_count) {
                    if( $show_post < $post_count ){
                        $(".load-more-area .loadmore").addClass('active');
                        $(".loadmore").on('click', function (e) {
                            e.preventDefault();
                            $(".load-post:hidden").slice(0, 2).fadeIn(2000);
                            if ($(".load-post:hidden").length == 0) {
                                $(".loadmore").fadeOut(100);
                                $(".no-posts").show().fadeIn('slow');
                            }
                            $('html,body').animate({
                                scrollTop: $(this).offset().top - 300
                            }, 1200);
                        });
                    }
                    else {
                        $(".load-more-area .no-posts").addClass('active');
                    }
                }
            });
        },
        
        /* ---------------------------------------------
            16. Masonry
        --------------------------------------------- */
        grid_masonry: function () {
            if ($('#masonry-posts').length > 0) {
                $('#masonry-posts').masonry({
                    itemSelector: '.grid-item'
                });
            }
        },
        
        /* ---------------------------------------------
            16. Search
        --------------------------------------------- */
        search: function () {
            $('.search-btn').on('click', function(){
                if($(this).siblings('.search-form').hasClass('active')){

                    $(this).siblings('.search-form').removeClass('active').slideUp();
                    $(this).removeClass('active');
                }
                else{
                    $(this).siblings('.search-form').removeClass('active').slideUp();
                    $(this).siblings('.search-form').removeClass('active');
                    $(this).addClass('active');
                    $(this).siblings('.search-form').addClass('active').slideDown();
                }
            });
        },
        
        
    
        /* ---------------------------------------------
         function initializ
         --------------------------------------------- */
        initializ: function() {          
            magalaApp.scroll_top();         
            magalaApp.background_fit_image();         
            magalaApp.sidebar_menu_and_search();         
            magalaApp.mobile_menu();         
            magalaApp.news_ticker();         
            magalaApp.scroll_bar();         
            magalaApp.sticky_sidebar(); 
            magalaApp.frontpage_slider();       
            magalaApp.widget_posts_slider();        
            magalaApp.popular_posts_carousel();        
            magalaApp.trending_posts_carousel();          
            magalaApp.featured_slider();         
            magalaApp.category_carousel();
            magalaApp.single_post_slider();  
            magalaApp.posts_load_more(); 
            magalaApp.grid_masonry();        
            magalaApp.search();        
        }
    };

    /* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
    $(function() {
        magalaApp.initializ();
    }); 
    

})(jQuery);
