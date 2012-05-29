define(['knockout'], function(ko) {
  var appState = {
    currentTab: ko.observable(),
    initialize: function() {
      console.log('init appState');
    }
  };
  var self = appState;
  return self;
});
