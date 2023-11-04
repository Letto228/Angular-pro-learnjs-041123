const concat = require('concat');

(async function build() {
    const files = [
        './dist/web-component/runtime.js',
        './dist/web-component/polyfills.js',
        './dist/web-component/main.js',
    ];

    await concat(files, './dist/web-component.js');
})()