/*globals sap*/
sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/ui/core/routing/History',
  'sap/ui/core/UIComponent'
], function(Controller, History, UIComponent) {
  'use strict';
  return Controller.extend('sap.ui.demo.nav.controller.BaseController', {

    getRouter: function() {
      return UIComponent.getRouterFor(this);
    },

    onNavBack: function() {
      if (History.getInstance().getPreviousHash() !== undefined) {
        window.history.go(-1);
      }
      else {
        this.getRouter().navTo('appHome', {}, true);
      }
    }

  });

});
