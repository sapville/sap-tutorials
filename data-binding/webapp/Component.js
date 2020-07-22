/*globals sap*/
sap.ui.define(
  ['sap/ui/core/UIComponent'],
  function(UIComponent) {
    'use strict';
    return UIComponent.extend('tutorial.dataBinding.Component', {
      metadata: {
        manifest: 'json'
      },
      init: function() {
        UIComponent.prototype.init.apply(this, arguments);
        console.log('Component');
      }
    });
  }
);
