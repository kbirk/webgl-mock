(function () {

    'use strict';

    var WebGLRenderingContext = require('./WebGLRenderingContext');

    function HTMLCanvasElement( width, height ) {
        this.width = width !== undefined ? width : 100;
        this.height = height !== undefined ? height : 100;
    }

    HTMLCanvasElement.prototype.getContext = function() {
        return new WebGLRenderingContext( this );
    };

    module.exports = HTMLCanvasElement;

}());
