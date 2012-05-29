define(['utils', 'underscore', 'knockout', 'jquery', 'chartData', 'chartOptions', 'appState'],
    function(utils, _, ko, $, chartData, chartOptions, appState) {
  var testDriveView = {
    initialize: function() {
      console.log('init testDriveView');
      self.appState = appState;
    }
  };
  var self = testDriveView;

  $(document).ready(function() {
    $('.colorpicker').colorpicker()
      .on('changeColor', function(ev) {
        var name = $(ev.target).children('input').attr('name');
        chartOptions.setOption(name, ev.color.toHex());
    });
  });

  return self;
});
