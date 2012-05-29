define(function() {
  var utils = {
    isBlank: function(el) {
      return (!el && el !== 0) || el === '';
    },

    minFromArrayOfObj: function(ary, field) {
      var min = Infinity;
      for (var i = 0; i <= ary.length - 1; i ++) {
        if (ary[i][field] < min) {
          min = ary[i][field];
        }
      }
      return min;
    },

    maxFromArrayOfObj: function(ary, field) {
      var max = Number.NEGATIVE_INFINITY;
      for (var i = 0; i <= ary.length - 1; i ++) {
        if (ary[i][field] > max) {
          max = ary[i][field];
        }
      }
      return max;
    },

    percToFloat: function(val, pixels) {
      val = parseFloat(val.substr(0, val.length - 1));
      return utils.roundNumber((val / 100) * pixels, 5);
    },

    floatToPerc: function(val, pixels) {
      return utils.roundNumber((val / pixels) * 100, 5) + '%';
    },

    pxToInt: function(px) {
      return (typeof(px) === 'string' ? parseInt(px.substr(0, px.length - 1), 10) : px);
    },

    intToPx: function(val) {
      return (typeof(val) === 'number' ? val + 'px' : val);
    },

    cloneObj: function(obj) {
      if (null === obj || "object" !== typeof obj) return obj;
      var copy = obj.constructor();
      for (var attr in obj) {
          if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
      }
      return copy;
    },

    extendObj: function(rootObj, extendThis) {
      for (var attrname in extendThis) {
        rootObj[attrname] = extendThis[attrname];
      }
    },

    roundNumber: function(num, dec) {
      return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
    },

    isValidNumber: function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },

    sortByName: function(a, b) {
      var aName = a.name.toLowerCase();
      var bName = b.name.toLowerCase();
      return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
    },

    getDimensions: function(element) {
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