<!DOCTYPE html>
<html>
    <head>
        <title>Piknichok</title>
        @include ('partials.styles')
    </head>
    <body>
        @include ('partials.navbar')
        @yield ('content')

        @include ('partials.scripts')
        @include ('partials.livereload')
    </body>
</html>
