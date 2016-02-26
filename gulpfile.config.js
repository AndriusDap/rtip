'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        //Got tired of scrolling through all the comments so removed them
        //Don't hurt me AC :-)
        this.source = './www/';

        this.buildDir = this.source + '/build';
        this.allJavaScript = [this.source + '/js/**/*.js'];
        this.allTypeScript = this.source + '/**/*.ts';
        this.jsLibPath = this.source + '/lib';

        this.allSassFiles = ['./scss/**/*.scss', 
                                this.source + '/**/*.scss'];

        this.libraryTypeScriptDefinitions = './typings/main.d.ts';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;