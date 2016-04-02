# webgl-mock.js

[![npm version](https://badge.fury.io/js/webgl-mock.svg)](http://badge.fury.io/js/webgl-mock) [![Dependency Status](https://david-dm.org/kbirk/webgl-mock.svg)](https://david-dm.org/kbirk/webgl-mock)

A simple implementation-less interface for testing code _outside_ of WebGL.

## Installation

Requires [node](http://nodejs.org/).

```bash
npm install webgl-mock
```

## Usage

Write source code using webgl.

```javascript
function VertexBuffer( gl, options ) {
    options = options || {};
    this.gl = gl;
    this.type = ( options.type !== undefined ) ? options.type : gl.FLOAT;
    this.mode = ( options.mode !== undefined ) ? options.mode : gl.TRIANGLES;
    this.buffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, this.buffer );
    gl.bufferData( gl.ARRAY_BUFFER, options.data || options.size, gl.STATIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, null );
}
```

Test source code outside of webgl.

```javascript
require('webgl-mock');
var canvas = new HTMLCanvasElement( 500, 500 );
var gl = canvas.getContext( 'webgl' );

describe('VertexBuffer', function() {
    describe('#constructor()', function() {
        it('should default type to gl.FLOAT', function() {
            var vb = new VertexBuffer( gl );
            assert( vb.type === gl.FLOAT );
        });
        it('should default mode to gl.TRIANGLES', function() {
            var vb = new VertexBuffer( gl );
            assert( vb.type === gl.TRIANGLES );
        });
    });
});
```
