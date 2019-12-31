/*globals sap*/
sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/core/Fragment'
  ],
  function(Controller, MessageToast, Fragment) {
    'use strict';
    return Controller.extend('sapui.demo.walkthrough.js.controller.HelloPanel', {
      onShowHello: function() {
        const sRecipient = this.getView().getModel().getProperty('/recipient/name');
        const sText = this.getView().getModel('i18n').getResourceBundle().getText('helloMsg', [sRecipient]);
        MessageToast.show(sText);
      },
      onOpenDialog: function() {
        const oView = this.getView();
        const oLoadedDialog = this.byId('helloDialog');
        if (!oLoadedDialog) {
          Fragment.load({
            id: oView.getId(),
            name: 'sapui.demo.walkthrough.view.HelloDialog',
            controller: this
          }).then(oDialog => {
            oView.addDependent(oDialog);
            oDialog.open();
          });
        }
        else {
          oLoadedDialog.open();
        }
      },
      onCloseDialog: function() {
        this.byId('helloDialog').close();
      }
    });
  }
);
