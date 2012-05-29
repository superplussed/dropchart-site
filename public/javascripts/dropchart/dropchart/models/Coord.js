 define('Coord',
  ['utils', 'jquery'],
  function(utils, $) {

  function Coord( args ) {
    console.log( 'init Coord' );
    this.args = args;
    this.data = args.data;

    this.canvasHeight = this.args.canvas.innerHeight;
    this.canvasWidth = this.args.canvas.innerWidth;
    if (this.args.chart && this.args.chart.height) {
      this.chartHeight = this.args.chart.height;
      this.chartWidth = this.args.chart.width;
    } else {
      this.chartHeight = this.canvasHeight;
      this.chartWidth = this.canvasWidth;
    }

    this._toPerc = function(type, val, axis) {
      if (typeof(val) === 'number' && this.args.canvas.usePerc) {
        return this._floatToPercOfContainer(type, val, axis);
      } else {
        return val;
      }
    };

    this._toFloat = function(type, val, axis) {
      if (typeof(val) === 'string' && val.substr(-1) === '%') {
        return this._percToFloatOfContainer(type, val, axis);
      } else if (isNaN(val)) {
        return 0;
      } else {
        return val;
      }
    };

    this._getPixels = function(type, axis) {
      if (type === 'chart') {
        return (axis === 'y' ? this.chartHeight : this.chartWidth);
      } else {
        return (axis === 'y' ? this.canvasHeight : this.canvasWidth);
      }
    };

    this._percToFloatOfContainer =  function(type, val, axis) {
      return utils.percToFloat(val, this._getPixels(type, axis));
    };

    this._floatToPercOfContainer = function(type, val, axis) {
      return utils.floatToPerc(val, this._getPixels(type, axis));
    };
  }

  Coord.prototype.x = function(type, val) {
    return this._toPerc(type, val, 'x');
  };

  Coord.prototype.y = function(type, val) {
    return this._toPerc(type, val, 'y');
  };

  Coord.prototype.xToFloat = function(type, val) {
    return this._toFloat(type, val, 'x');
  };

  Coord.prototype.yToFloat = function(type, val) {
    return this._toFloat(type, val, 'y');
  };


  return Coord;

});