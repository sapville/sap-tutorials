/*globals sap*/
sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    './js/controller/HelloDialog'
  ],
  function(UIComponent, JSONModel, HelloDialog) {
    'use strict';
    return UIComponent.extend('sapui.demo.walkthrough.Component', {
      metadata: {
        manifest: 'json'
      },
      init: function() {
        UIComponent.prototype.init.apply(this, arguments);
        const oData = {
          recipient: {
            name: 'World'
          }
        };
        this.setModel(
          new JSONModel(oData)
        );
        this._helloDialog = new HelloDialog(this.getRootControl());
        this.getRouter().initialize();
      },
      exit: function() {
        this._helloDialog.destroy();
        delete this._helloDialog;
      },
      openHelloDialog: function() {
        this._helloDialog.open();
      }
    });
  }
);
