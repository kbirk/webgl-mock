(function () {

    'use strict';

    var CanvasRenderingContext2D = require('./CanvasRenderingContext2D');
    var WebGLRenderingContext = require('./WebGLRenderingContext');

    function HTMLCanvasElement( width, height ) {
        this.width = width !== undefined ? width : 100;
        this.height = height !== undefined ? height : 100;
    }

    HTMLCanvasElement.prototype.getContext = function( arg ) {
        switch ( arg ) {
            case '2d':
                return new CanvasRenderingContext2D( this );
            case 'webgl':
            case 'experimental-webgl':
                return new WebGLRenderingContext( this );
        }
        return null;
    };

    module.exports = HTMLCanvasElement;

}());
