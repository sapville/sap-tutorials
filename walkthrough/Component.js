/*globals sap*/
sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    './controller/HelloDialog',
    'sap/ui/Device'
  ],
  function(UIComponent, JSONModel, HelloDialog, Device) {
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

        const oDeviceModel = new JSONModel(Device);
        oDeviceModel.setDefaultBindingMode('OneWay');
        this.setModel(oDeviceModel, 'device');

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
