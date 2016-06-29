$ ->
    $('.bxslider').bxSlider
        auto: true
        pause: 5000
        mode: 'fade'
        autocontrols: false
        controls: false
        speed: 1500
        pager: false

    $('.parallax-window').parallax(
        imageSrc: '/img/table2.jpg'
    ) 

    $('.reviews-block').slick(
        dots: true
        arrows: false
    )
