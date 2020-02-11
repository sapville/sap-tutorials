/*globals sap*/
sap.ui.define([
  'sap/ui/base/ManagedObject',
  'sap/ui/core/Fragment',
  'sap/ui/core/syncStyleClass'
], function(ManagedObject, Fragment, syncStyleClass) {
  'use strict';
  return ManagedObject.extend('sapui.demo.walkthrough.controller.HelloDialog', {
    constructor: function(oView) {
      this._oView = oView;
    },
    exit: function() {
      delete this._oView;
    },
    open: function() {
      const oView = this._oView;
      const oLoadedDialog = oView.byId('helloDialog');
      if (!oLoadedDialog) {
        Fragment.load({
          id: oView.getId(),
          name: 'sapui.demo.walkthrough.view.HelloDialog',
          controller: {
            onCloseDialog: function() {
              oView.byId('helloDialog').close();
            }
          }
        }).then(oDialog => {
          oView.addDependent(oDialog);
          syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
          oDialog.open();
        });
      }
      else {
        oLoadedDialog.open();
      }
    }
  });
});
