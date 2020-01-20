/* globals sap */
sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
  ],
  function(Controller, JSONModel) {
    'use strict';
    return Controller.extend('sapui.demo.walkthrough.js.controller.InvoiceList', {
      onInit: function() {
        this.getView().setModel(
          new JSONModel({ currency: 'CAD' }),
          'view');
      }
    });
  }
);
