/*globals sap*/
sap.ui.define([
  'sap/ui/core/mvc/Controller'
], function(Controller) {
  return Controller.extend('tutorial.dataBinding.controller.App', {
    onInit: function() {
      console.log('onInit');
    }
  });
});
