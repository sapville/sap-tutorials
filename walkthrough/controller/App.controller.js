/*globals sap*/
sap.ui.define(
  [
    'sap/ui/core/mvc/Controller'
  ],
  function(Controller) {
    'use strict';
    return Controller.extend('sapui.demo.walkthrough.controller.App', {
      onInit: function() {
        this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
      },
      onOpenDialog: function() {
        this.getOwnerComponent().openHelloDialog();
      }
    });
  }
);
