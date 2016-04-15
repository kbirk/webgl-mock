(function () {

    'use strict';

    // canvas
    global.HTMLCanvasElement = require('./HTMLCanvasElement');
    global.CanvasRenderingContext2D = require('./CanvasRenderingContext2D');
    global.ImageData = require('./ImageData');
    global.Image = require('./Image');
    global.HTMLImageElement = global.Image;
    global.HTMLVideoElement = global.Image;

    // WebGL 1.0
    global.WebGLRenderingContext = require('./WebGLRenderingContext');
    global.WebGLActiveInfo = function() {};
    global.WebGLBuffer = function() {};
    global.WebGLContextEvent = function() {};
    global.WebGLFramebuffer = function() {};
    global.WebGLProgram = function() {};
    global.WebGLQuery = function() {};
    global.WebGLRenderbuffer = function() {};
    global.WebGLShader = function() {};
    global.WebGLShaderPrecisionFormat = function() {};
    global.WebGLTexture = function() {};
    global.WebGLUniformLocation = function() {};

    // WebGL 2.0
    //global.WebGL2RenderingContext = function() {};
    //global.WebGLSync = function() {};
    //global.WebGLTransformFeedback = function() {};
    //global.WebGLSampler = function() {};
    //global.WebGLVertexArrayObject = function() {};

}());
