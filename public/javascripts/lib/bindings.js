define(['knockout', 'jquery', 'utils'], function(ko, $, utils) {

 ko.bindingHandlers.show = {
    update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
      if (valueAccessor()) {
        $(element).show();
      } else {
        $(element).hide();
      }
    }
  };

  ko.bindingHandlers.dataColor = {
    update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
      $(element).attr('data-color', valueAccessor());
    }
  };

});
