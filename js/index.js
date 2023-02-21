$(function() {
    let windowWidth;
    $(window).resize(function() { // 사이즈가 변경되면 수행함
        windowWidth = $(this).width()
        if(windowWidth <= 1024) {  // 데스크탑이 아닐 경우
            $(".main-menu").off("mouseenter"); // off = 이벤트 제거
            $(".main-menu").off("mouseleave");
            $("nav").prependTo(".h-top"); // nav가 h-top 앞으로 이동
            $(".jordan-logo").find("img").attr("src", "images/AIR-JORDAN-LOGO-b.svg");
        }else {  // 1024보다 클 경우~ (데스크탑일 경우에 수행)
            $("nav").appendTo("header");
            $(".jordan-logo").find("img").attr("src", "images/AIR-JORDAN-LOGO.svg");
            $(".main-menu").on({
                mouseenter: function() {
                    $(".sub-menu, .sub-bg").stop().show();  // stop을 안써주면 보였다안보였다 무한반복
                },
                mouseleave: function() {
                    $(".sub-menu, .sub-bg").stop().hide();
                }
            });
        }

    }); // resize 이벤트 끝
    $(window).trigger("resize");  // trigger = 강제 이벤트 발생    메뉴에 마우스 올리면 서브메뉴 보여짐
    if(windowWidth <= 480) {
        $(".main-01 img").attr("src", "images/M-01-mobile.png");
        $(".main-02 img").attr("src", "images/M-02-mobile.png");
        $(".main-03 img").attr("src", "images/M-03-mobile.png");
    }else {
        $(".main-01 img").attr("src", "images/M-01.png");
        $(".main-02 img").attr("src", "images/M-02.png");
        $(".main-03 img").attr("src", "images/M-03.png");
    }
    // 스와이퍼 플러그인
    // let swiperSlide = new Swiper(사용할 자료, 객체설정); 로 플러그인이 설정되어있음
    let swiperSlide = new Swiper(".Featured-slide", {
        // 아무 속성을 주지않으면 모바일 기준
        slidesPerView: "auto",  // 한 화면에 들어오는 슬라이드 개수,  auto해주면 슬라이드 너비에 맞게 자동설정
        spaceBetween: 8,  // 슬라이드간의 여백
        pagination: {
            el: ".f-pager",  // .f-pager에 현재 슬라이드 나타내줌
            clickable: true,
            type: "fraction" // 전체 슬라이드 중에 몇번째 슬라이드 ex) 1/6, bullets, progressbar
        },
        navigation: {
            nextEl: ".f-next",
            prevEl: ".f-prev"
        },
        // 반응형 웹에서 사용하도록 만들어진 breakpoints (화면 넓이에 따라 레이아웃을 알아서 변경)
        breakpoints: {
            1025: {  // 1025 이상일 경우 (데스크탑)
                slidesPerView: 3,
                spaceBetween: 24
            },
            480: {  // 480 이상일 경우 (테블릿)
                slidesPerView: "auto",
                spaceBetween: 16
            }
        }
    }); // 스와이퍼 플러그인 끝
    // 햄버거 메뉴 클릭
    $(".menu-btn").click(function(event) {
        $(".index-wrap").css("filter", "blur(10px)");
        $("body, html").css({
            height: "100vh",
            overflow: "hidden"
        });
        $(".menu-area").show();
        $(".h-top").animate({
            right: "0%"
        }, "fast");
    });
    $(".menu-area").mouseup(function(event){
        console.log($(this).has(event.target).length);  // 메뉴 안에서는 1이 전달됨 메뉴 밖에서는 0
        console.log($(this).has(event.target));
        if($(this).has(event.target).length === 0) {
            $(".index-wrap").css("filter", "blur(0px)");
            $("body, html").css({
                height: "auto",
                overflow: "visible"
            });
            $(".h-top").animate({
                right: "-100%"
            }, "fast", function() {
                $(".menu-area").hide();
            });
        }
    });

    $(".main-menu > li > a").click(function() {
        $(this).siblings(".sub-menu").animate({
            left : "0%"
        }, "fast");
    });
    $(".all > a").click(function() {
        $(this).parents(".sub-menu").animate({
            left : "150%"
        }, "fast");
    });
});