/* globals sap */
sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sapui/demo/walkthrough/model/formatter'
  ],
  function(Controller, JSONModel, formatter) {
    'use strict';
    return Controller.extend('sapui.demo.walkthrough.js.controller.InvoiceList', {
      formatter: formatter,
      onInit: function() {
        this.getView().setModel(
          new JSONModel({
            currency: 'CAD'
          }), 'view');
      },
    });
  }
);
