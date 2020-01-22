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
        this._threshold = {
          min: 10,
          max: 100
        };
        this.getView().setModel(
          new JSONModel({
            currency: 'CAD',
            threshold: this._threshold
          }), 'view');
      },
      getState: function(amount) {
        if (amount < this._threshold.min) {
          return 'Error';
        }
        else if (amount >= this._threshold.min && amount < this._threshold.max) {
          return 'Information';
        }
        else {
          return 'Warning';
        }
      }
    });
  }
);
