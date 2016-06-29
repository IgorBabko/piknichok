(function() {
  $(function() {
    $('.bxslider').bxSlider({
      auto: true,
      pause: 5000,
      mode: 'fade',
      autocontrols: false,
      controls: false,
      speed: 1500,
      pager: false
    });
    return $('.parallax-window').parallax({
      imageSrc: '/img/table2.jpg'
    });
  });

}).call(this);

//# sourceMappingURL=app.js.map
