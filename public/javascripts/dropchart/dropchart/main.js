require.config({
  paths: {
    jquery: './vendor/jquery.1.7.2.min',
    jquerySVG: './vendor/jquery.svg',
    jqueryUI: './vendor/jquery.ui.1.8.20.custom',
    utils: './dropchart/lib/utils',
    fetch: './dropchart/lib/fetch',
    Axis: './dropchart/models/Axis',
    Builder: './dropchart/models/Builder',
    Rect: './dropchart/models/Rect',
    Text: './dropchart/models/Text',
    XAxis: './dropchart/models/XAxis',
    YAxis: './dropchart/models/YAxis',
    Chart: './dropchart/models/Chart',
    Coord: './dropchart/models/Coord',
    Canvas: './dropchart/models/Canvas',
    Event: './dropchart/models/Event',
    Line: './dropchart/models/Line',
    Histogram: './dropchart/models/Histogram',
    Linechart: './dropchart/models/Linechart',
    Popover: './dropchart/models/Popover',
    require: '../vendor/require'
  }
  //,urlArgs: 'uncache=' + (+new Date())
});

define('dropchart', ['order!jquery', 'order!jquerySVG', 'Canvas', 'Coord', 'XAxis', 'YAxis', 'Histogram', 'Builder'],
  function($, jsSVG, Canvas, Coord, XAxis, YAxis, Histogram, Builder) {
  return {
    name: 'dropchart',
    Canvas: Canvas,
    Coord: Coord,
    XAxis: XAxis,
    YAxis: YAxis,
    Histogram: Histogram,
    Builder: Builder
  };
});