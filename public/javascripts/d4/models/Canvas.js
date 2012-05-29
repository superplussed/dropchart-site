define('Canvas', ['utils'], function(utils) {
  function Canvas() {
    console.log('init Canvas');
  }

  Canvas.prototype.formatX = function(val) {
    return this.formatValue(val, 'x');
  };

  Canvas.prototype.formatY = function(val) {
    return this.formatValue(val, 'y');
  };

  Canvas.prototype.translateX = function(val) {
    return this.translateValue(val, 'x');
  };

  Canvas.prototype.translateY = function(val) {
    return this.translateValue(val, 'y');
  };

  Canvas.prototype.translateValue = function(val, axis) {
    var that = this;
    if ((isNaN(val) && typeof(val) === "number") || val === "%") {
      return 0;
    } else if (typeof(val) === 'string' && val.substr(-1) === '%') {
      return utils.percToFloatOfContainer(val, axis, that.canvasBoundaries);
    } else {
      return val;
    }
  };

  Canvas.prototype.formatValue = function(val, axis) {
    var that = this;
    if (!that.options.usePerc || (that.options.usePerc && typeof(val) === 'string' && val.substr(-1) === '%')) {
      return val;
    } else if (that.options.usePerc) {
      return utils.floatToPercOfContainer(val, axis, that.canvasBoundaries);
    }
  };

  Canvas.prototype.getContainerBound = function(data) {
    var bound = utils.getBoundingRect('#' + this.options.id);
    if (!this.canvasBoundaries) {
      this.canvasBoundaries = {};
    }
    if (bound) {
      this.canvasBoundaries.fullWidth = bound.width;
      this.canvasBoundaries.fullHeight = bound.height;
      this.canvasBoundaries.width = bound.width - this.translateX(this.options.marginLeft) - this.translateX(this.options.marginRight);
      this.canvasBoundaries.height = bound.height - this.translateY(this.options.marginTop) - this.translateY(this.options.marginBottom);
    }
    if (this.canvasBoundaries.height <= 0 || this.canvasBoundaries.width <= 0) {
      this.abortRender = true;
    }
  };

  return Canvas;
});