/*globals sap*/
sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/core/Fragment'
  ],
  function(Controller, MessageToast, Fragment) {
    'use strict';
    return Controller.extend('sapui.demo.walkthrough.controller.HelloPanel', {
      onShowHello: function() {
        const sRecipient = this.getView().getModel().getProperty('/recipient/name');
        const sText = this.getView().getModel('i18n').getResourceBundle().getText('helloMsg', [sRecipient]);
        MessageToast.show(sText);
      },
      onOpenDialog: function() {
        this.getOwnerComponent().openHelloDialog();
      }
    });
  }
);
