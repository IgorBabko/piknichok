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
