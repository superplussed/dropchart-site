define(['underscore'], function(_) {
  var utils = {
    blank: function(str) {
      return !str || str === '';
    },
    pixelsToInt: function(px) {
      return (typeof(px) === 'string' ? parseInt(px.substr(0, px.length - 1), 10) : px);
    },
    percToFloatOfContainer: function(val, axis, bound) {
      var pixels = (axis === 'y' ? bound.fullHeight : bound.fullWidth);
      return utils.roundNumber((utils.pixelsToInt(val) / 100) * pixels, 5);
    },
    floatToPercOfContainer: function(val, axis, bound) {
      var pixels = (axis === 'y' ? bound.fullHeight : bound.fullWidth);
      return utils.roundNumber((val / pixels) * 100, 5) + '%';
    },
    roundNumber: function(num, dec) {
      var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
      return result;
    },
    cloneObj: function(obj) {
      return jQuery.extend(true, {}, obj);
    },
    isNumber: function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    intToPx: function(val) {
      return (typeof(val) === 'number' ? val + 'px' : val);
    },
    sortByName: function(a, b) {
      var aName = a.name.toLowerCase();
      var bName = b.name.toLowerCase();
      return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
    },
    getBoundingRect: function(element) {
      if (element) {
        var svg;
        if (typeof(element) === 'string') {
          svg = $(element).is('g, svg, rect, text');
          element = (svg ? d3.select(element) : $(element));
        } else {
          svg = element[0] instanceof Array;
        }
        if (svg) {
          return element.node().getBoundingClientRect();
        } else {
          return {width: $(element).width(), height: $(element).height(), x: $(element).offset().left, y: $(element).offset().top};
        }
      }
    }
  };
  return utils;
});
