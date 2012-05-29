define('Event', function() {
  function Event() {
    console.log('init Event');
  }

  Event.prototype.onClick = function(d, i) {
    var that = this;
    if (that.options.popoverRemainsOnClick) {
      if (that.lastSelectedId !== i) {
        that.removePopover(that, that.lastSelectedId);
        that.removeRollState(that, d, that.lastSelectedId);
      }
    }
    that.lastSelectedId = that.selectedId;
  };

  Event.prototype.onMouseOver = function(context) {
    var that = context;
    return function(d, i) {
      if (d && d.y && that.options.addMouseoverAction) {
        d3.select('#' + that.id + '-bar-' + i)
            .data(that.data)
          .transition().duration(that.options.barMouseoverDuration)
            .attr('fill', that.options.barRollColor)
            .attr('stroke', that.options.barRollStrokeColor)
            .attr('stroke-width', that.options.barRollStrokeWidth)
            .attr('opacity', that.options.barRollOpacity);

        if (that.options.barBgMouseover) {
          d3.select('#' + that.id + '-bar-bg-' + i)
            .data(that.data)
          .transition().duration(25)
            .attr('opacity', that.options.barBgRollOpacity)
            .attr('fill', that.options.barBgRollColor)
            .attr('stroke', that.options.barBgRollStrokeColor)
            .attr('stroke-width', that.options.barBgRollStrokeWidth);
        }

        //that.addPopover(that, d, i);
      }
    };
  };

  Event.prototype.onMouseOut = function(context) {
    var that = context;
    return function(d, i) {
      if (d && d.y && i != that.selectedId && that.options.addMouseoverAction) {
        that.removeRollState(that, d, i);
        that.removePopover(that, i);
      }
    };
  };

  Event.prototype.removeRollState = function(context, d, i) {
    var that = context;

    d3.select('#' + that.id + '-bar-' + i)
        .data(that.data)
      .transition().duration(that.options.barMouseoutDuration)
        .attr('fill', that.options.barColor)
        .attr('stroke', that.options.barStrokeColor)
        .attr('stroke-width', that.options.barStrokeWidth)
        .attr('opacity', that.options.barOpacity);

    if (that.options.barBgMouseover) {
      d3.select('#' + that.id + '-bar-bg-' + i)
        .data(that.data)
      .transition().duration(25)
        .attr('opacity', that.options.barBgOpacity)
        .attr('fill', that.options.barBgColor)
        .attr('stroke', that.options.barBgStrokeColor)
        .attr('stroke-width', that.options.barBgStrokeWidth);
    }
  };

  Event.prototype.getMouseOver = function() {
    var that = this;
    if (this.options.onMouseOver) {
      return this.options.onMouseOver;
    } else if (this.options.addMouseoverAction) {
      return this.onMouseOver(this);
    } else {
      return function() {};
    }
  };

  Event.prototype.getMouseOut = function() {
    var that = this;
    if (this.options.onMouseOut) {
      return this.options.onMouseOut;
    } else if (this.options.addMouseoverAction) {
      return this.onMouseOut(this);
    } else {
      return function() {};
    }
  };



  return Event;
});
