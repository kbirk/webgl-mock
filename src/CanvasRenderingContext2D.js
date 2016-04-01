(function () {

    'use strict';

    var ImageData = require('./ImageData');

    function CanvasRenderingContext2D( canvas ) {
        this.canvas = canvas;
    }

    CanvasRenderingContext2D.prototype.drawImage = function() {
        if ( arguments.length === 5 ) {
            this.canvas.width = arguments[3];
            this.canvas.height = arguments[4];
        } else if ( arguments.length === 9 ) {
            this.canvas.width = arguments[7];
            this.canvas.height = arguments[8];
        }
    };

    CanvasRenderingContext2D.prototype.getImageData = function() {
        return new ImageData(
            new Array( this.canvas.width * this.canvas.height * 4 ),
            this.canvas.width,
            this.canvas.height );
    };

    module.exports = CanvasRenderingContext2D;

}());
