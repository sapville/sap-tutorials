/*globals sap*/
sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel'
  ],
  function(UIComponent, JSONModel) {
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
      }
    });
  }
);
