process.env.DISABLE_NOTIFIER = true;

var elixir = require('laravel-elixir'),
    postStylus = require('poststylus');

require('laravel-elixir-stylus');
require('laravel-elixir-livereload');

elixir(function(mix) {

    /**
     * JQuery
     **/
    mix.copy('node_modules/jquery/dist/jquery.min.js', 'public/js');

    /**
     * Bxslider css
     **/
    mix.copy('bower_components/bxslider-4/dist/jquery.bxslider.min.css', 'public/css');

    /**
     * Bxslider js
     **/
    mix.copy('bower_components/bxslider-4/dist/jquery.bxslider.min.js', 'public/js');

    /**
     * Parallax js
     **/
    mix.copy('bower_components/parallax.js/parallax.min.js', 'public/js');

    /**
     * Slick carousel css 
     **/
    mix.copy('node_modules/slick-carousel/slick/slick.css', 'public/css')

    /**
     * Slick carousel default css theme
     **/
    mix.copy('node_modules/slick-carousel/slick/slick-theme.css', 'public/css')

    /**
     * Slick carousel js
     **/
    mix.copy('node_modules/slick-carousel/slick/slick.min.js', 'public/js')

    /**
     * Scrollmagic js
     **/
    mix.copy('node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js', 'public/js');

    /**
     * Font-awesome css
     **/
    mix.copy('node_modules/font-awesome/css/font-awesome.css', 'public/css/font-awesome.css');

    /**
     * Font-awesome fonts
     **/
    mix.copy('node_modules/font-awesome/fonts', 'public/fonts');

    /**
     * Bootstrap css
     **/
    mix.copy('node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/css');

    /**
     * Bootstrap js
     **/
    mix.copy('node_modules/bootstrap/dist/js/bootstrap.min.js', 'public/js');

    /**
     * Flipclock css 
     **/
    mix.copy('bower_components/flipclock/compiled/flipclock.css', 'public/css');

    /**
     * Flipclock js
     **/
    mix.copy('bower_components/flipclock/compiled/flipclock.min.js', 'public/js');

    /**
     * Photoswipe css
     **/
    mix.copy('bower_components/photoswipe/dist/photoswipe.css', 'public/css/photoswipe');

    /**
     * Photoswipe default skin css and images
     **/
    mix.copy('bower_components/photoswipe/dist/default-skin', 'public/css/photoswipe/default-skin');

    /**
     * Photoswipe js
     **/
    mix.copy('bower_components/photoswipe/dist/photoswipe.min.js', 'public/js');

    /**
     * Photoswipe ui js
     **/
    mix.copy('bower_components/photoswipe/dist/photoswipe-ui-default.min.js', 'public/js');

    /**
     * Owl carousel css
     **/
    mix.copy('bower_components/owl.carousel/dist/assets', 'public/css/owl-carousel');

    /**
     * Owl carousel js
     **/
    mix.copy('bower_components/owl.carousel/dist/owl.carousel.min.js', 'public/js');

    /**
     * Sweetalert css
     **/
    mix.copy('bower_components/sweetalert/dist/sweetalert.css', 'public/css');

    /**
     * Sweetalert js
     **/
    mix.copy('bower_components/sweetalert/dist/sweetalert.min.js', 'public/js');




    /**
     * Stylus
     **/
    mix.stylus('app.styl', null, {
        use: [
            postStylus( [ 'autoprefixer', 'lost', 'rucksack-css' ] )
        ]
    });

    /**
     * Coffee compilation
     **/
    mix.coffee('app.coffee');

    /**
     * LiveReload
     **/
    mix.livereload();
});
