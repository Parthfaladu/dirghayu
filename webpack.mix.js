const mix = require('laravel-mix');

mix.webpackConfig({
  resolve: {
    alias: {
    '@': path.resolve(__dirname, 'resources/assets/js'),
    '@components': path.resolve(__dirname, 'resources/assets/js/components'),
    '@assets': path.resolve(__dirname, 'resources/assets/js/assets'),
    '@router': path.resolve(__dirname, 'resources/assets/js/router'),
    '@services': path.resolve(__dirname, 'resources/assets/js/services'),
    '@store': path.resolve(__dirname, 'resources/assets/js/store'),
    '@views': path.resolve(__dirname, 'resources/assets/js/views'),
    '@layouts': path.resolve(__dirname, 'resources/assets/js/layouts'),
    '@i18n': path.resolve(__dirname, 'resources/assets/js/i18n')
    }
  }
})

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

mix.js('resources/assets/js/app.js', 'public/assets/js')
    .sass('resources/assets/sass/app.scss', 'public/assets/css');
