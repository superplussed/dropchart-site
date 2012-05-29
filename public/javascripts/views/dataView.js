define(['utils', 'underscore', 'knockout', 'jquery', 'chartData', 'chartOptions', 'appState'],
    function(utils, _, ko, $, chartData, chartOptions, appState) {
  var dataView = {
    initialize: function() {
      console.log('init dataView');
      self.appState = appState;
    },
    removeData: function(entry) {
      chartData.data.remove(entry);
    },
    insertValues: function() {
      chartData.data.push({x: ko.observable(''), y: ko.observable(0)});
    }
  };
  var self = dataView;

  return self;
});
