const mix = require('laravel-mix');

mix.js('src/js/app.js', 'public/js')
    .sass("src/sass/app.scss", "public/css");


if (mix.inProduction()) {
    mix.version();
} else {
    mix.browserSync({
        proxy: "http://localhost:8080/",
        snippetOptions: {
            rule: {
                match: /<\/head>/i,
                fn(snippet, match) {
                    return snippet + match;
                },
            },
        },
    });
}
