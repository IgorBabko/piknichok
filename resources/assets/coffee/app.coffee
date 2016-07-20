$ ->
    $('.bxslider').bxSlider
        auto: true
        pause: 5000
        mode: 'fade'
        autocontrols: false
        controls: false
        speed: 1500
        pager: false

    $('.main-parallax').parallax(
        imageSrc: '/img/table11.jpg'
    ) 

    $('.parallax-window').parallax(
        imageSrc: '/img/table2.jpg'
    ) 

    # $('.reviews-block').slick(
    #     dots: true
    #     arrows: true
    # )

    mainClock = $('.main-countdown').FlipClock
        countdown: true
        language: 'ru'

    mainClock.setTime(15000)
    mainClock.start()

    clock = $('.countdown').FlipClock
        countdown: true
        language: 'ru'

    clock.setTime(15000)
    clock.start()


    openPhotoSwipe = ->
        pswpElement = document.querySelectorAll('.pswp')[0]

        images = [
                src: '/img/table11.jpg'
                w: 1440
                h: 900
                msrc: '/img/table11.jpg'
            ,
                src: '/img/table22.jpg'
                w: 1440
                h: 900
            ,
                src: '/img/table33.jpg'
                w: 1440
                h: 900
            ,
                src: '/img/table44.jpg'
                w: 1440
                h: 900
        ]
        
        pswpOptions =
            #bgOpacity: 0.7
            showHideOpacity: true
        
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, images, pswpOptions)
        gallery.init()

    $('.gallery-button').click(openPhotoSwipe)

    $window = $(window)
    $navLinks = $('.nav-list-link')
    $htmlAndBody = $('html, body')
    $sections = $('section')

    $navLinks.on("click", (e) ->
        e.preventDefault()
        $self = $(this)
        sectionId = $self.data("section-id")

        $htmlAndBody.animate 
            scrollTop: $("." + sectionId).offset().top - 50,
            300,
            () ->
                $navLinks.removeClass("active")
                $self.addClass("active")
    )

    $window.on('mousewheel scroll', ->
        aboveBlocks = $sections.map (i, section) ->
            if section.getBoundingClientRect().top <= $window.height() / 2
                return section
        
        $navLinks.removeClass("active")
        $($navLinks[aboveBlocks.length - 1]).addClass("active")
    )



    return
