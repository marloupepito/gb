const mix = require('laravel-mix');
const path =require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */



mix.js('resources/js/app.js', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
    ])
    .sass('resources/sass/app.scss', 'public/css');


   

      
mix.webpackConfig({
    stats:{
        children:true
    },
})
.alias({
    "@": path.join(__dirname,"resources/js/")
});