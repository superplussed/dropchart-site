define('Popover', ['utils'], function(utils) {
  function Popover() {
    console.log('init Popover');
  }

  Popover.prototype.addPopover = function(bar, d, i) {
    var that = this,
      data = d;

    if (!this.popoverFound(i)) {
      this.popoverGroup = this.canvasGroup.append('svg:g')
        .attr('transform', 'translate(' + (that.xScale(i) + that.barWidth + that.options.popoverMargin) + ',' + that.options.popoverY + ')')
        .attr('id', this.id + '-bar-popover-group-' + i);

      this.popover = this.popoverGroup.append('svg:rect')
        .attr('id', this.id + '-bar-popover-' + i)
        .attr('class', this.id + '-bar-popover chart-popover')
        .attr('x', 0)
        .attr('y', 0)
        .attr('rx', this.options.popoverRadius)
        .attr('ry', this.options.popoverRadius)
        .attr('width', this.options.popoverWidth)
        .attr('height', this.options.popoverHeight);

      if (this.getBoundingRect(this.popover).right >= this.getBoundingRect('svg').right) {
        this.popoverGroup
          .attr('transform', 'translate(' + (that.xScale(i) - utils.pixelsToInt(that.options.popoverWidth) - that.options.popoverMargin) + ',' + that.options.popoverY + ')');
      }

      this.popoverText = this.popoverGroup.append('svg:g')
        .attr('id', this.id + '-bar-popover-text-' + i)
        .attr('width', this.options.popoverWidth)
        .attr('height', this.options.popoverHeight);

      $.each(this.options.popoverText, function(k, textObj) {
        var d = data,
        x = utils.pixelsToInt(textObj.x),
        y = utils.pixelsToInt(textObj.y);
        that.popoverText.append('svg:text')
          .attr('class', textObj.className(d, i))
          .attr('x', x)
          .attr('y', y)
          .text(textObj.text(d, i));
      });
    }
  };

  Popover.prototype.popoverFound = function(i) {
    return $('#' + this.id + '-bar-popover-' + i).length !== 0;
  };

  Popover.prototype.removePopover = function(context, i) {
    var that = context;
    if (that.selectedId !== i) {
      d3.select('#' + that.id + '-bar-popover-group-' + i).remove();
    }
  };

  return Popover;
});
