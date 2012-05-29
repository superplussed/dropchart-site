require.config({
  paths: {
    jquery: 'vendor/jquery/jquery.1.7.min',
    d3: 'vendor/d3/d3.v2',
    utils: 'src/lib/utils',
    Axis: 'src/models/Axis',
    Chart: 'src/models/Chart',
    Canvas: 'src/models/Canvas',
    Event: 'src/models/Event',
    d4: 'src/models/d4',
    Histogram: 'src/models/Histogram',
    DefaultOptions: 'src/models/DefaultOptions',
    Linechart: 'src/models/Linechart',
    Popover: 'src/models/Popover'
  },
  baseUrl: '../',
  urlArgs: 'uncache='
});

require([
  'require',
  'order!jquery',
  'order!d3',
  'order!d4'
  ], function(require, $, d3, d4) {
   return d4;
});
