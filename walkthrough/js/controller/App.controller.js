/*globals sap*/
sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
  ],
  function(Controller, MessageToast, JSONModel, ResourceModel) {
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
        this.getView().setModel(
          new ResourceModel({ bundleName: 'sapui.demo.walkthrough.i18n.i18n' }),
          'i18n'
        );
      },
      onShowHello: function() {
        const sRecipient = this.getView().getModel().getProperty('/recipient/name');
        const sText = this.getView().getModel('i18n').getResourceBundle().getText('helloMsg', [sRecipient]);
        MessageToast.show(sText);
      }
    });
  }
);
