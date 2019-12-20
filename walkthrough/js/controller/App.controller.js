/*globals sap*/
sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel'
  ],
  function(Controller, MessageToast, JSONModel) {
    'use strict';
    return Controller.extend('sapui.demo.walkthrough.js.controller.App', {
      onInit: function() {
        const oData = {
          recipient: {
            name: 'World'
          }
        };
        this.getView().setModel(
          new JSONModel(oData)
        );
      },
      onShowHello: function() {
        MessageToast.show(
          `Hello ${this.getView().getModel().getProperty('/recipient/name')}`
        );

      }
    });
  }
);
