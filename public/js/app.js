(function() {
  $(function() {
    var $htmlAndBody, $navLinks, $sections, $window, clock, mainClock, openPhotoSwipe;
    $('.bxslider').bxSlider({
      auto: true,
      pause: 5000,
      mode: 'fade',
      autocontrols: false,
      controls: false,
      speed: 1500,
      pager: false
    });
    $('.main-parallax').parallax({
      imageSrc: '/img/table11.jpg'
    });
    $('.parallax-window').parallax({
      imageSrc: '/img/table2.jpg'
    });
    mainClock = $('.main-countdown').FlipClock({
      countdown: true,
      language: 'ru'
    });
    mainClock.setTime(15000);
    mainClock.start();
    clock = $('.countdown').FlipClock({
      countdown: true,
      language: 'ru'
    });
    clock.setTime(15000);
    clock.start();
    openPhotoSwipe = function() {
      var gallery, images, pswpElement, pswpOptions;
      pswpElement = document.querySelectorAll('.pswp')[0];
      images = [
        {
          src: '/img/table11.jpg',
          w: 1440,
          h: 900,
          msrc: '/img/table11.jpg'
        }, {
          src: '/img/table22.jpg',
          w: 1440,
          h: 900
        }, {
          src: '/img/table33.jpg',
          w: 1440,
          h: 900
        }, {
          src: '/img/table44.jpg',
          w: 1440,
          h: 900
        }
      ];
      pswpOptions = {
        showHideOpacity: true
      };
      gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, images, pswpOptions);
      return gallery.init();
    };
    $('.gallery-button').click(openPhotoSwipe);
    $window = $(window);
    $navLinks = $('.nav-list-link');
    $htmlAndBody = $('html, body');
    $sections = $('section');
    $navLinks.on("click", function(e) {
      var $self, sectionId;
      e.preventDefault();
      $self = $(this);
      sectionId = $self.data("section-id");
      return $htmlAndBody.animate({
        scrollTop: $("." + sectionId).offset().top - 50
      }, 300, function() {
        $navLinks.removeClass("active");
        return $self.addClass("active");
      });
    });
    $window.on('mousewheel scroll', function() {
      var aboveBlocks;
      aboveBlocks = $sections.map(function(i, section) {
        if (section.getBoundingClientRect().top <= $window.height() / 2) {
          return section;
        }
      });
      $navLinks.removeClass("active");
      return $($navLinks[aboveBlocks.length - 1]).addClass("active");
    });
    $('.email-form').submit(function(e) {
      var $this, request;
      e.preventDefault();
      $this = $(this);
      request = $.ajax({
        url: $this.attr('action'),
        method: 'POST',
        data: $this.serialize()
      });
      request.done(function(response) {
        return swal("Отлично", "Спасибо большое за ваше письмо, мы свяжемся с Вам в ближайшее время", "success");
      });
      return request.fail(function(response) {
        var error, errors, errorsString, i;
        errors = JSON.parse(response.responseText);
        errorsString = '<ul style="color: red">';
        for (i in errors) {
          error = errors[i];
          errorsString += '<li>' + error + '</li>';
        }
        errorsString += '</ul>';
        return swal({
          title: "Пожалуйста, введите правильные данные",
          text: errorsString,
          type: "warning",
          html: true
        });
      });
    });
    $('.order-form').submit(function(e) {
      var $this, request;
      e.preventDefault();
      $this = $(this);
      request = $.ajax({
        url: $this.attr('action'),
        method: 'POST',
        data: $this.serialize()
      });
      request.done(function(response) {
        return swal("Отлично", "Спасибо большое за Ваш заказ, мы свяжемся с Вам в ближайшее время", "success");
      });
      return request.fail(function(response) {
        var error, errors, errorsString, i;
        console.log(response.responseText);
        errors = JSON.parse(response.responseText);
        errorsString = '<ul style="color: red">';
        for (i in errors) {
          error = errors[i];
          errorsString += '<li>' + error + '</li>';
        }
        errorsString += '</ul>';
        return swal({
          title: "Пожалуйста, введите правильные данные",
          text: errorsString,
          type: "warning",
          html: true
        });
      });
    });
  });

}).call(this);

//# sourceMappingURL=app.js.map
