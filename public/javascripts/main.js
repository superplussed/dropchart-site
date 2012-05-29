require.config({
  paths: {
    jquery: 'vendor/jquery/jquery.1.7.min',
    jqueryNumeric: 'vendor/jquery/jquery.numeric',
    colorpicker: 'vendor/bootstrap-colorpicker',
    alert: 'vendor/bootstrap-alert',
    tab: 'vendor/bootstrap-tab',
    underscore: 'vendor/lodash.0.1.min',
    knockout: 'vendor/knockout-2.1.0',
    rainbow: 'vendor/rainbow/rainbow.min',
    rainbowGen: 'vendor/rainbow/generic',
    rainbowJs: 'vendor/rainbow/javascript',
    d3: 'vendor/d3/d3.v2',
    appView: 'views/appView',
    dataView: 'views/dataView',
    testDriveView: 'views/testDriveView',
    chartData: 'models/chartData',
    appState: 'models/appState',
    chartOptions: 'models/chartOptions',
    bindings: 'lib/bindings',
    utils: 'd4/lib/utils',
    Axis: 'd4/models/Axis',
    Canvas: 'd4/models/Canvas',
    DefaultOptions: 'd4/models/DefaultOptions',
    Chart: 'd4/models/Chart',
    Event: 'd4/models/Event',
    d4: 'd4/models/d4',
    Histogram: 'd4/models/Histogram',
    Linechart: 'd4/models/Linechart',
    Popover: 'd4/models/Popover'
  },
  baseUrl: 'javascripts'
});

require([
  'order!jquery', 'order!jqueryNumeric', 'order!colorpicker', 'order!alert', 'order!tab', 'order!rainbow', 'order!rainbowGen', 'order!rainbowJs', 'underscore', 'd3', 'knockout', 'appView'
  ], function($, jNum, colorpicker, alert, tab, rainbow, rainbowGen, rainbowJs, _, d3, ko, appView) {
    window.appView = appView;
    appView.initialize();
});
