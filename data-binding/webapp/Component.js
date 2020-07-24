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

        // oModel.setDefaultBindingMode(BindingMode.OneWay);

      }
    });
  }
);
