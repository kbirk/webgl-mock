(function () {

    'use strict';

    function HTMLCanvasElement( width, height ) {
        this.width = width;
        this.height = height;
    }

    HTMLCanvasElement.prototype.getContext = function() {
        return new WebGLRenderingContext( this );
    }

    global.HTMLCanvasElement = HTMLCanvasElement;

    module.exports = HTMLCanvasElement;

}());
