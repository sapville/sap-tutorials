/*globals sap*/
sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/BindingMode'
  ],
  function(UIComponent, JSONModel, BindingMode) {
    'use strict';
    return UIComponent.extend('tutorial.dataBinding.Component', {
      metadata: {
        manifest: 'json'
      },
      init: function() {

        UIComponent.prototype.init.apply(this, arguments);

        const oModel = new JSONModel({
          firstName: 'Eugene',
          lastName: 'Fedoseev',
          enabled: true,
          panelHeaderText: 'Data Binding Basics'
        });

        // oModel.setDefaultBindingMode(BindingMode.OneWay);

        this.setModel(oModel);
      }
    });
  }
);
