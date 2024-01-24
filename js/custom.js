/*
 Template Name: HABRO
 Description: HABRO
 Author: mazaajthemes
 Developed by: mazaj themes
 Version: 1.0
 */

(function ($) {
    "use strict";

    //  GLOBAL VARIABLES
    var $win = $(window);
    var body_trigger = $("body,html");

    //  BODY SCROLL TOP
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 500) {
            $(".btn-scrollup").fadeIn(300);
        } else {
            $(".btn-scrollup").fadeOut(300);
        }
    });
    $('.btn-scrollup').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('.avatar-upload').on("click", function () {
        $('.account-photo').trigger('click');
    });

    //  ITEM FAV
    function item_fave() {
        $(".item-fav").on("click", function () {
            var this_ele = $(this);
            this_ele.toggleClass("active");
            this_ele.find("i").toggleClass("fa-heart-o").toggleClass("fa-heart");
        });
    }

    item_fave();

    //  ADD COMMA TO VALUE
    var addCommas = function (nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    };

    //  RANGE SLIDER
    function ced_range_slider() {
        var slider_wrap = $(".range-slider-wrap");

        // range slider for price
        var price_slider = $(".price-range-slider");
        price_slider.each(function () {

            var range_min = $(this).data("range-min");
            var range_max = $(this).data("range-max");
            var input_min = $(".input-min");
            var input_max = $(".input-max");
            var range_unit = $(this).data("range-unit");

            $(this).slider({
                range: true,
                min: range_min,
                max: range_max,
                values: [range_min, range_max],
                slide: function (event, ui) {
                    $(this).closest(slider_wrap).find(input_min).val(range_unit + addCommas(ui.values[0]));
                    $(this).closest(slider_wrap).find(input_max).val(range_unit + addCommas(ui.values[1]));
                }
            });
            $(this).closest(slider_wrap).find(input_min).val(range_unit + addCommas($(this).slider("values", 0)));
            $(this).closest(slider_wrap).find(input_max).val(range_unit + addCommas($(this).slider("values", 1)));
        });

        // range slider for price
        var area_slider = $(".area-range-slider");
        area_slider.each(function () {

            var range_min = $(this).data("range-min");
            var range_max = $(this).data("range-max");
            var input_min = $(".input-min");
            var input_max = $(".input-max");
            var range_unit = $(this).data("range-unit");

            $(this).slider({
                range: true,
                min: range_min,
                max: range_max,
                values: [range_min, range_max],
                slide: function (event, ui) {
                    $(this).closest(slider_wrap).find(input_min).val(ui.values[0] + " " + range_unit);
                    $(this).closest(slider_wrap).find(input_max).val(ui.values[1] + " " + range_unit);
                }
            });
            $(this).closest(slider_wrap).find(input_min).val($(this).slider("values", 0) + " " + range_unit);
            $(this).closest(slider_wrap).find(input_max).val($(this).slider("values", 1) + " " + range_unit);
        });
    }

    ced_range_slider();

    //  SEARCH FILTER DROPDOWN
    function ced_filter_search() {

        // range input selectors
        var search_range_dropdown = $(".search-range-dropdown");
        var trigger_input = search_range_dropdown.find(".search-range-outer input");
        var trigger_input_min = search_range_dropdown.find(".input-range-min");
        var trigger_input_max = search_range_dropdown.find(".input-range-max");

        // range min max btn selectors
        var range_btn = $(".btn-price-range");
        var btn_text_min = range_btn.find(".min-price");
        var btn_text_max = range_btn.find(".max-price");


        // range options elements selectors
        var range_options = $(".search-range-options");
        var range_option_selector = range_options.find("li a");

        // Header Search filter dropdown
        var filter_wrap = $('.header-search-filter');
        var filter_btn = filter_wrap.find('.filter-btn');
        var filter_body = $(".filter-body");
        filter_btn.on('click', function () {
            $(this).toggleClass('active');
        });

        // Stop hiding dropdowns if click itself
        $('.search-area-dropdown, .search-range-dropdown').on("click", function (e) {
            e.stopPropagation();
        });

        // Cities selection
        var search_city_dropdown = $(".search-city-dropdown");
        var search_city_trigger = search_city_dropdown.find("a");
        var btn_city = $(".btn-city .btn-value");

        search_city_trigger.on("click", function (e) {
            var this_city = $(this);
            var city_data = this_city.data('city');
            search_city_dropdown.find('li').removeClass("active");
            this_city.parent("li").addClass("active");
            $(".search-city-input").val(city_data).add(btn_city).text(city_data);
            e.preventDefault();
        });

        // range dropdown options selectors
        var range_options_min = $(".range-option-min");
        var range_options_max = $(".range-option-max");

        // hide show min max options
        trigger_input.on("focus", function () {
            var this_input = $(this);
            if (this_input.hasClass("input-range-min")) {
                range_options_min.removeClass('hide');
                range_options_max.addClass('hide');
            }
            else if (this_input.hasClass("input-range-max")) {
                range_options_min.addClass('hide');
                range_options_max.removeClass('hide');
            }
        });

        trigger_input.on("change", function () {
            var this_input = $(this);
            var range_val = this_input.val();
            if (this_input.hasClass("input-range-min")) {
                if ($.isNumeric(range_val)) {
                    btn_text_min.text(addCommas(range_val)).add(this_input.val(addCommas(range_val)));
                } else {
                    btn_text_min.text("Min").add(this_input.val(""));
                }
            }
            else if (this_input.hasClass("input-range-max")) {
                if ($.isNumeric(range_val)) {
                    btn_text_max.text(addCommas(range_val)).add(this_input.val(addCommas(range_val)));
                } else {
                    btn_text_max.text("Max").add(this_input.val(""));
                }
            }

        });

        range_option_selector.on("click", function (e) {
            var this_ele = $(this);

            if (this_ele.attr("data-min-price")) {
                var ele_data_min = this_ele.data('min-price');
                if (ele_data_min === " ") {
                    btn_text_min.text("Min").add(trigger_input_min).val("");
                } else {
                    btn_text_min.text(ele_data_min).add(trigger_input_min).val(ele_data_min);
                }
            }
            else if (this_ele.attr("data-max-price")) {
                var ele_data_max = this_ele.data('max-price');
                if (ele_data_max === " ") {
                    btn_text_max.text("Min").add(trigger_input_max).val("");
                } else {
                    btn_text_max.text(ele_data_max).add(trigger_input_max).val(ele_data_max);
                }
            }
            if (this_ele.hasClass()) {

            }
            e.preventDefault();
        });

        // advance search filter
        var adv_filter_trigger = $('.filter-trigger');
        adv_filter_trigger.on('click', function () {
            $(this).toggleClass('active');
            $(this).closest(".advanced-search-wrap").find('.more-filter-block').animate({
                height: 'toggle',
                opacity: 'toggle'
            }, 500);
        });

        // advance search mobile
        var mobile_btn_filter = $('.search-mobile .advance-btn');
        mobile_btn_filter.on('click', function () {
            $(this).toggleClass('active');
            $(this).closest(".advanced-search-wrap").find('.search-body').animate({
                height: 'toggle',
                opacity: 'toggle'
            }, 700);
        });

        // expanded advanced search
        var expanded_search = $('.search-expanded');
        var expanded_trigger = expanded_search.find('.btn-search');
        var media_map = $(".ced-page-media");

        expanded_trigger.on("click", function () {
            expanded_search.toggleClass("active");
            if (expanded_search.hasClass("active")) {
                setTimeout(function () {
                    media_map.css("overflow", "visible");
                }, 500);
            } else {
                media_map.css("overflow", "hidden");
            }
        });
        if (expanded_search.hasClass("active")) {
            media_map.css("overflow", "visible");
        }
    }

    ced_filter_search();

    //  parseInt Radix 10
    function parseInt10(val) {
        return parseInt(val, 10);
    }

    //  BOOTSTRAP POPOVER
    var popover_ele = $('[data-toggle="popover"]');
    popover_ele.popover({
        //trigger: "hover",
        html: true
    });

    //  BOOTSTRAP TOOLTIP
    var data_tooltip = $('[data-toggle="tooltip"]');
    data_tooltip.tooltip();

    //  MAGNIFIC POPUP INIT
    $('.lightbox-video-link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 300,
        preloader: false,
        fixedContentPos: true
    });

    $('.lightbox-image').magnificPopup({
        type: 'image',
        disableOn: 700,
        mainClass: 'mfp-fade',
        removalDelay: 300,
        preloader: false,
        fixedContentPos: true
    });
    $('.lightbox-gallery').magnificPopup({
        type: 'image',
        disableOn: 700,
        mainClass: 'mfp-fade',
        removalDelay: 300,
        preloader: false,
        fixedContentPos: true,
        gallery: {
            enabled: true
        }
    });

    //  POST CARDS MASONRY
    var msnry_wrap = $(".masonry-grid-wrap");
    $(window).on('load', function () {
        if (msnry_wrap.length > 0) {
            msnry_wrap.isotope({
                // options
                itemSelector: '.tile-block'
                //layoutMode: 'fitRows'
            });
        }
    });

    //  SHARE TOOLTIP
    var actions_trigger = $('.property-actions .item-share');
    var share_tooltip = $('.ced-share-tooltip');
    actions_trigger.on('click', function () {
        if ($(this).hasClass("item-share")) {
            share_tooltip.toggleClass('open');
        }
        actions_trigger.removeClass("active");
        $(this).addClass('active');
    });
    $(document).mouseup(function (e) {
        var tip = $(".item-share");
        if (!tip.is(e.target) // if the target of the click isn't the container...
            && tip.has(e.target).length === 0) // ... nor a descendant of the container
        {
            share_tooltip.removeClass('open');
            actions_trigger.removeClass("active");
        }
    });

    //  AGENT SHOW NUMBER
    $('.gent-call-button').on("click", function () {
        $(this).toggleClass("active");
    });

    //  BOOTSTRAP SELECT PICKER
    var select_picker = $('.selectpicker');
    if (select_picker.length > 0) {
        select_picker.selectpicker({
            dropupAuto: false
        });
    }

    //  HABRO DATEPICKER
    var date_picker = $(".ced_datepicker");
    if (date_picker.length > 0) {
        date_picker.datepicker();
    }

    //  CHECK USER AGENTS
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);


    //  HABRO NAVIGATION
    function ced_navigation() {
        $('.navi ul li').each(function () {
            $(this).has('ul').not('.ced-megamenu li').addClass('has-sub-child')
        });

        $(".navi ul .has-sub-child").on({
            mouseenter: function () {
                $(this).addClass('active');
            },
            mouseleave: function () {
                $(this).removeClass('active');
            }
        });
    }

    ced_navigation();

    function ced_megamenu() {
        if ($(window).width() > 991) {

            if ($('.navi ul li').hasClass('ced-megamenu')) {
                $('.navi ul .ced-megamenu').each(function () {

                    var header = $('.header-type-1,.header-type-2,.header-type-3');
                    var container = header.find(".container");
                    var containOffset = container.offset();
                    var windowWidth = $win.width();
                    var thisOffset = $(this).offset();

                    if (header.hasClass("header-fullwidth")) {
                        //if(container.length > 0){
                        $("> .ced-megamenu-wrap", this).css({width: windowWidth, left: -thisOffset.left});
                    } else {
                        $("> .ced-megamenu-wrap", this).css({
                            width: container.innerWidth(),
                            left: -(thisOffset.left - containOffset.left)
                        });
                    }
                });
            }
        }
    }

    ced_megamenu();
    $win.on('resize', function () {
        ced_megamenu();
    });


    //  HABRO STICKY HEADER
    var ced_header = $('.header-wrap');
    var ced_header_sticky = $('.header-wrap.this-sticky');

    if (ced_header.hasClass("this-sticky")) {
        ced_this_sticky(ced_header_sticky);
    }

    function ced_this_sticky(ele) {

        var header_position = ele.outerHeight();
        var sticky_nav = ele.clone().removeClass('this-sticky').addClass('header-sticky');

        $('.header-area').append(sticky_nav);

        ced_navigation();
        ced_megamenu();

        function fix_header() {
            sticky_nav.css('top', '0');
        }

        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= header_position + 100) {
                sticky_nav.addClass("start-sticky");
            }
            else {
                sticky_nav.removeClass("start-sticky");
            }
        });

        fix_header();
        $(window).resize(function () {
            fix_header();
        });
    }

    function search_sticky() {
        var header_search = $('.header-search');
        var search_offset = header_search.offset();
        var searchH = header_search.outerHeight();
        if (header_search.hasClass("this-sticky")) {
            header_search.closest(".header-search-outer").height(searchH);
            $(window).on('scroll', function () {
                if ($(window).scrollTop() >= search_offset.top) {
                    header_search.addClass("start-sticky");
                }
                else {
                    header_search.removeClass("start-sticky");
                }
            });
        }
    }

    search_sticky();

    //	HABRO EXTENDED MEGA MENU
    var extended_menu_btn = $('.extended-menu-btn');
    var extended_menu = $('.header-extended-menu');
    extended_menu_btn.on('click', function () {
        var $this = $(this);
        $this.toggleClass("active");
        $this.parents('.header-wrap').find(extended_menu).slideToggle().toggleClass('menu-open');
        ced_megamenu();
    });

    //  ACCOUNT DROPDOWN
    function accountDropdown() {
        // for mobile
        $('.mobile-header-user .user-icon').on('click', function () {
            $(this).toggleClass('open');
        });

        // for desktop
        $(".account-loggedin .user-image").on({
            mouseenter: function () {
                $(this).parents(".account-loggedin").addClass('active');
            },
            mouseleave: function () {
                $(this).parents(".account-loggedin").removeClass('active');
            }
        });
    }

    accountDropdown();

    function element_hide(ele_trigger, ele, ele_class) {
        $(document).mouseup(function (e) {
            var nav_trigger = $(ele_trigger);

            if (!nav_trigger.is(e.target) // if the target of the click isn't the container...
                && nav_trigger.has(e.target).length === 0 // ... nor a descendant of the container
                && !$(ele).is(e.target)
                && $(ele).has(e.target).length === 0
            ) {
                nav_trigger.removeClass(ele_class);
            }
        });
    }

    element_hide('.mobile-nav-trigger', '.mobile-nav-dropdown', 'open');
    element_hide('.mobile-header-user .user-icon', '.account-dropdown', 'open');
    element_hide('.header-search-filter .filter-btn', '.filter-body', 'active');

    //  HABRO MOBILE MENU
    function ced_mobile_menu(html, place) {
        var siteMenu = $(html).html();
        $(place).html(siteMenu);

        $(place + ' ul li').each(function () {
            $(this).has('ul').addClass('has-sub-child');
        });

        $(place + ' ul .has-sub-child').append('<span class="menu-expand"></span>');

        $(place + ' .menu-expand').on('click', function () {
            var parent = $(this).parent('li');
            parent.toggleClass('active');
            if (parent.hasClass('active') !== true) {
                parent.children('ul').slideUp();
            } else {
                parent.children('ul').slideDown();
            }
        });
    }

    ced_mobile_menu('.navi', '.mobile-nav-dropdown');

    $('.mobile-nav-trigger').on('click', function () {
        $(this).toggleClass('open');
    });

    //  HABRO BANNER PARALLAX
    function parallax() {
        var banner_parallax = $('.banner-parallax');
        var ele_offset = $('.ced-page-media');
        var ele_parallax = $('.parallax-inner');

        var ele_bg = ele_parallax.data('background');

        if (banner_parallax.length) {
            var top_distance = ele_offset.offset().top;
            //var start_scroll = banner_distance;
            ele_parallax.css("background-image", "url(" + ele_bg + ")");
            var scrolled = $(window).scrollTop() - top_distance;
            if ($(window).scrollTop() >= top_distance) {
                ele_parallax.css("transform", "translate3d(0," + -scrolled * -0.6 + "px,0)");
            } else if ($(window).scrollTop() < top_distance) {
                ele_parallax.css("transform", "translate3d(0,0px,0)");
            }
        }
    }

    parallax();
    $(window).scroll(function () {
        parallax();
    });

    //  CHANGE GRID LIST
    $('.view-changer-btn').on("click", function () {
        $('.view-changer-btn').removeClass('active');
        $(this).addClass('active');
        if ($(this).hasClass('btn-list')) {
            $('.item-list-wrap').removeClass('item-grid-view item-grid-three item-grid-two').addClass('item-list-view');
        }
        else if ($(this).hasClass('btn-grid')) {
            $('.item-list-wrap').removeClass('item-list-view item-grid-three').addClass('item-grid-view item-grid-two');
        }
        else if ($(this).hasClass('btn-grid-three')) {
            $('.item-list-wrap').removeClass('item-list-view item-grid-view item-grid-two').addClass('item-grid-view item-grid-three');
        }
    });


    //  SECTION HEIGHT
    function setSectionHeight() {
        var win_height = $win.innerHeight();
        var header_area = $('.header-area');
        var footer_area = $('.footer-area');
        var header_area_height = header_area.innerHeight();
        var footer_area_height = footer_area.outerHeight();

        if (header_area.hasClass("header-transparent")) {
            win_height = win_height + header_area_height;
        }

        var ced_screenFix = (win_height - header_area_height) - footer_area_height;
        $('.ced-screen-fix').css('height', ced_screenFix);

        var page_media = $(".ced-page-media");
        var page_media_height = page_media.data("page-height");
        if (page_media_height === "fullscreen") {
            page_media.css('height', ced_screenFix);
        } else {
            page_media.css('height', page_media_height);
        }

        var slider_media = $(".ced-property-slider");
        var slider_media_item = $(".ced-property-slider .item > img");
        var slider_media_height = slider_media.data("page-height");

        if (slider_media_height === "fullscreen") {
            slider_media_item.css('height', ced_screenFix);
        } else {
            slider_media_item.css('height', slider_media_height);
        }
    }

    setSectionHeight();

    $win.on('resize', function () {
        setSectionHeight();
    });

    function getWindowWidth() {
        return Math.max($(window).width(), window.innerWidth);
    }

    function getWindowHeight() {
        return Math.max($(window).height(), window.innerHeight);
    }

    //  START CREATE LISTING FORM STEPS AND VALIDATION
    $("[data-hide]").on("click", function () {
        $(this).closest("." + $(this).attr("data-hide")).hide();
    });

    var current = 1;

    var form = $("#add-property-form");
    var formStep = $(".form-step");
    var formStepGal = $(".form-step-gal");
    var btnnext = $(".btn-step-next");
    var btnback = $(".btn-step-back");
    var btnsubmitBlock = $(".btn-step-submit");
    var btnsubmit = btnsubmitBlock.find("button[type='submit']");
    var total_steps = $('.total-steps');
    var steps_counter = $('.step-counter');


    var errorBlock = $(".validate-errors");
    var errorBlockGal = $(".validate-errors-gal");
    var galThumbs = $(".upload-gallery-thumb");

    total_steps.html(formStep.length);
    steps_counter.html(current);

    // Init buttons and UI
    formStep.not(':eq(0)').hide();
    hideButtons(current);

    // Next button click action
    btnnext.on("click", function () {
        if (current < formStep.length) {
            // Check validation
            if ($(formStepGal).is(':visible')) {
                if (!$(galThumbs).length > 0) {
                    errorBlockGal.show();
                    body_trigger.animate({scrollTop: 0}, "slow");
                    return
                } else {
                    errorBlockGal.hide();
                }
            }
            if (form.valid()) {
                formStep.show();
                formStep.not(':eq(' + (current++) + ')').hide();
                errorBlock.hide();
            } else {
                errorBlock.show();
                body_trigger.animate({scrollTop: 0}, "slow");
            }
        }
        hideButtons(current);
        steps_counter.html(current);
    });

    // Back button click action
    btnback.on("click", function () {
        body_trigger.animate({scrollTop: 0}, "slow");
        if (current > 1) {
            current = current - 2;
            if (current < formStep.length) {
                formStep.show();
                formStep.not(':eq(' + (current++) + ')').hide();
            }
        }
        hideButtons(current);
        steps_counter.html(current);
    });

    // Submit button click
    btnsubmit.on("click", function (event) {
        event.preventDefault();
        // Check validation
        if ($(formStepGal).is(':visible')) {
            if (!$(galThumbs).length > 0) {
                errorBlockGal.show();
                return
            } else {
                errorBlockGal.hide();
            }
        }
        if (form.valid()) {
            errorBlock.hide();
            btnsubmit.attr('disabled', true);
        } else {
            errorBlock.show();
            body_trigger.animate({scrollTop: 0}, "slow");
        }
    });

    if (form.length > 0) {
        form.validate({ // initialize plugin
            //ignore:":not(:visible)",
            ignore: ":hidden:not(.selectpicker)",
            errorPlacement: function (error, element) {
                return false;
            },
            rules: {
                //title : "required",
                //bedroom_name : "required"
                night_price: {
                    required: true,
                    number: true,
                    rangelength: [4, 10]
                }

            }
        });
    }

    // Hide buttons according to the current step
    function hideButtons(current) {
        var limit = parseInt10(formStep.length);
        $(".action").hide();
        if (current < limit) btnnext.show();
        if (current > 1) btnback.show();
        if (current === limit) {
            btnnext.hide();
            btnsubmitBlock.show();
        }
    }


    //  MAP VIEW TABER
    $('[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var this_e = e;
        this_e.target // newly activated tab
        this_e.relatedTarget // previous active tab
    });

    //	HABRO TABER
    var ced_taber = $(".ced-taber");

    ced_taber.each(function () {
        var this_taber = $(this);
        var taber_id = this_taber.attr("id");
        var tab = $("#" + taber_id + " .tab");
        var tab_content = $("#" + taber_id + " .tab-pane");

        tab.on('click', function () {
            var this_tab = $(this);
            if (this_tab.hasClass('active') === false) {
                tab.removeClass('active');
                this_tab.addClass('active');
                tab_content.removeClass('active in');
                tab_content.eq(this_tab.index()).addClass('active').delay(5).queue(function (next) {
                    tab_content.eq(this_tab.index()).addClass('in');
                    next();
                });
            }
        });
    });

    //  HABRO SLIDERS LOAD
    var ced_all_slider = $('#ced-property-slider, .slider-load-animated, .item-carousel');
    ced_all_slider.on('initialized.owl.carousel', function () {
        //item_fave();
        setTimeout(function () {
            ced_all_slider.animate({opacity: 1}, 1000);
            $('.slider-load-animated, #ced-property-slider, .item-carousel').prev('.ced-loader-wrap').animate({opacity: 0}, function () {
                $(this).remove();
            });
        }, 1000);
    });

    //  BANNER SLIDER
    var ced_property_slider = $("#ced-property-slider");
    if (ced_property_slider.length > 0) {
        ced_property_slider.owlCarousel({
            //rtl: ced_rtl,
            loop: true,
            dots: false,
            slideBy: 1,
            items: 1,
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 4000,
            autoplayHoverPause: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            addClassActive: true,
            callbacks: true,
            responsive: {
                0: {
                    nav: false
                },
                767: {
                    nav: true
                }
            }

        });
    }


    //  HABRO CAROUSEL
    var gird_carousel = $(".grid-carousel");
    if (gird_carousel.length > 0) {
        gird_carousel.owlCarousel({
            margin: 20,
            loop: true,
            dots: true,
            items: 3,
            slideBy: 1,
            autoplay: false,
            smartSpeed: 1000,
            autoplayTimeout: 4000,
            autoplayHoverPause: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        });
    }

    var item_carousel = $(".item-carousel");
    if (item_carousel.length > 0) {
        item_carousel.owlCarousel({
            loop: true,
            dots: false,
            items: 1,
            slideBy: 1,
            smartSpeed: 600,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
    }

    var agent_carousel = $(".agent-carousel-module");
    if (agent_carousel.length > 0) {
        agent_carousel.owlCarousel({
            loop: true,
            dots: true,
            items: 4,
            slideBy: 1,
            nav: false,
            smartSpeed: 600,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 4
                }
            }
        });
    }

    var partners_carousel = $(".partners-carousel");
    if (partners_carousel.length > 0) {
        partners_carousel.owlCarousel({
            margin: 10,
            loop: true,
            dots: true,
            items: 5,
            slideBy: 1,
            nav: false,
            autoplay: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 5
                }
            }
        });
    }

    var news_item_carousel = $(".news-item-carousel");
    if (news_item_carousel.length > 0) {
        news_item_carousel.owlCarousel({
            loop: true,
            dots: true,
            items: 3,
            slideBy: 1,
            nav: false,
            smartSpeed: 600,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        });
    }

    var news_item_layer_carousel = $(".news-item-layer-carousel");
    if (news_item_layer_carousel.length > 0) {
        news_item_layer_carousel.owlCarousel({
            loop: true,
            dots: true,
            items: 3,
            slideBy: 1,
            nav: false,
            smartSpeed: 600,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        });
    }

    var widget_slider = $(".ced-widget-slider");
    if (widget_slider.length > 0) {
        widget_slider.owlCarousel({
            dots: true,
            items: 1,
            smartSpeed: 700,
            slideBy: 1,
            nav: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
    }


    //  HABRO TESTIMONIAL SLIDER
    var testi_thumb_slider = $(".testimonial-thumbs-slider");
    var testi_content_slider = $(".testimonial-content-slider");
    var testi_content_slider_v2 = $(".testimonial-content-slider-v2");

    if (testi_content_slider.length) {
        testi_content_slider.on('changed.owl.carousel', function (event) {
            //testi_thumb_slider.trigger('to.owl.carousel', [event.item.index,300,true])
            if (event.namespace && event.property.name === 'position') {
                var target = event.relatedTarget.relative(event.property.value, true);
                testi_thumb_slider.owlCarousel('to', target, 300, true);
            }
        });

        testi_content_slider.owlCarousel({
            startPosition: 0,
            center: !0,
            items: 1,
            nav: !0,
            loop: !0,
            dots: !1,
            autoplay: 1,
            //rtl: v,
            smartSpeed: 1e3,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    nav: !1,
                },
                768: {
                    nav: !0,
                }
            }
        });
        testi_thumb_slider.owlCarousel({
            startPosition: 0,
            center: !0,
            items: 3,
            loop: !0,
            nav: !1,
            dots: !1,
            autoplay: !1,
            margin: 10,
            mouseDrag: !1,
            touchDrag: !1,
            pullDrag: !1,
            freeDrag: !1,
            //rtl: v,
            smartSpeed: 1e3,
            responsive: {

                0: {
                    items: 1
                },
                370: {
                    items: 3
                }
            }
        });
    }


    if (testi_content_slider_v2.length) {
        testi_content_slider_v2.owlCarousel({
            startPosition: 0,
            items: 1,
            nav: true,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            speed: 1000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    nav: !1,
                },
                768: {
                    nav: !0,
                }
            }
        })
    }


    //  HABRO LIGHTBOX SLIDER
    var lightbox_slider = $('#lightbox-slider');
    var lightbox_slider_thumbs = $('#lightbox-slider-thumbs');
    var slidesPerPage = 4; // global define number of elements per page
    var syncedSecondary = true;
    var slider_speed = 1200;
    var slider_thumbs_speed = 1000;

    function ced_lightbox_slider_options() {
        return {
            //rtl: ced_rtl,
            animateOut: 'fadeOut',
            stopOnHover: true,
            items: 1,
            margin: 0,
            nav: true,
            dots: false,
            loop: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: false,
            smartSpeed: slider_speed,
            autoplaySpeed: slider_speed,
            responsiveRefreshRate: 200
        }
    }

    function ced_lightbox_thumbs_options() {
        return {
            //rtl: ced_rtl,
            margin: 5,
            items: 16,
            center: false,
            nav: true,
            dots: false,
            loop: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: false,
            smartSpeed: slider_thumbs_speed,
            autoplaySpeed: slider_thumbs_speed,
            responsiveRefreshRate: 100,
            //autoHeight : true,
            responsive: {

                0: {
                    items: 4
                },
                480: {
                    items: 6
                },
                620: {
                    items: 7
                },
                767: {
                    items: 7
                },
                992: {
                    items: 9
                },
                1199: {
                    items: 12
                },
                1441: {
                    items: 16
                }
            }
        }
    }

    function ced_lightbox_slider() {

        var ttl_slides = lightbox_slider.find(".item").length;
        $(".ttl-slides").html(ttl_slides);

        lightbox_slider.on('initialized.owl.carousel', function (el) {
            var src = $(el.target).find(".owl-item").eq(0).find("img").attr('src');
            $(".view-original-image").attr("href", src);

        }).owlCarousel(ced_lightbox_slider_options()).on('changed.owl.carousel', syncPosition);

        lightbox_slider_thumbs.on('initialized.owl.carousel', function () {
            lightbox_slider_thumbs.find(".owl-item").eq(0).addClass("current");
        }).owlCarousel(ced_lightbox_thumbs_options()).on("click", ".owl-item", function (e) {
            e.preventDefault();
            var number = $(this).index();
            lightbox_slider.data('owl.carousel').to(number, slider_speed, true);
        });

        //.on('changed.owl.carousel', syncPosition2)*/

        function syncPosition(el) {

            //if you set loop to false, you have to restore this next line
            var current = el.item.index;

            lightbox_slider_thumbs.find(".owl-item").removeClass("current").eq(current).addClass("current");
            var onscreen = lightbox_slider_thumbs.find('.owl-item.active').length - 1;
            var start = lightbox_slider_thumbs.find('.owl-item.active').first().index();
            var end = lightbox_slider_thumbs.find('.owl-item.active').last().index();

            if (current > end) {
                lightbox_slider_thumbs.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                lightbox_slider_thumbs.data('owl.carousel').to(current - onscreen, 100, true);
            }

            var src = $(el.target).find(".owl-item").eq(current).find("img").attr('src');
            $(".view-original-image").attr("href", src);
            $(".slide-counter").html(current + 1);
        }
    }

    ced_lightbox_slider();


    //  GRID LAYER FUNCTION
    var grid_element = $(".property-item-layer");
    grid_element.on({
        mouseenter: function () {
            var this_ele = $(this);
            var bottom_padding = this_ele.find(".layer-bottom").innerHeight();
            this_ele.find(".layer-top").css("padding-bottom", bottom_padding);
        },
        mouseleave: function () {
            var this_ele = $(this);
            this_ele.find(".layer-top").css("padding-bottom", "");
        }
    });


    //  MORTGAGE CALCULATOR SHOW RESULTS
    $('.show-morg').on('click', function () {
        var this_ele = $(this);
        $('.morg-summery').slideToggle();
    });

    // FORM VALIDATION AND AJAX SUBMISSION
    var contact_form = $('#contact-form');
    contact_form.validate({
        errorPlacement: function (error, element) {
        }
    });
    var submit_btn = $(".btn-submit");
    var btn_html = submit_btn.html();
    var btn_text = submit_btn.text();

    contact_form.submit(function (event) {
        if (contact_form.valid()) {
            submit_form();

        }
        event.preventDefault();
    });

    function submit_form() {
        var form_alert = $(".form-alert");
        form_alert.hide();
        submit_btn.html(btn_text + '<i class="fa fa-spin fa-spinner fa-left-8"></i>');
        $.ajax({
            type: "POST",
            url: "process.php",
            data: contact_form.serialize(),
            dataType: 'json',
            success: function (response) {
                if (response.success) {
                    form_alert.html(response.success);
                    form_alert.slideDown(200);
                    submit_btn.html(btn_html).addClass("disabled").attr("disabled", "disabled");
                }
                else {
                    form_alert.html(response.error);
                    form_alert.slideDown(200);
                    submit_btn.html(btn_html);
                }
            }
        });
    }

})(jQuery);
