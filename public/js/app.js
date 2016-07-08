(function() {
  $(function() {
    var clock, openPhotoSwipe;
    $('.bxslider').bxSlider({
      auto: true,
      pause: 5000,
      mode: 'fade',
      autocontrols: false,
      controls: false,
      speed: 1500,
      pager: false
    });
    $('.parallax-window').parallax({
      imageSrc: '/img/table2.jpg'
    });
    $('.reviews-block').slick({
      dots: true,
      arrows: false
    });
    clock = $('.your-clock').FlipClock({
      countdown: true,
      language: 'ru'
    });
    clock.setTime(5000);
    clock.start();
    openPhotoSwipe = function() {
      var gallery, images, pswpElement, pswpOptions;
      pswpElement = document.querySelectorAll('.pswp')[0];
      images = [
        {
          src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
          w: 964,
          h: 1024
        }, {
          src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
          w: 1024,
          h: 683
        }
      ];
      pswpOptions = {
        history: false,
        focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0,
        index: 0
      };
      gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, images, pswpOptions);
      return gallery.init();
    };
    $('.gallery-button').click(openPhotoSwipe);
  });

}).call(this);

//# sourceMappingURL=app.js.map
