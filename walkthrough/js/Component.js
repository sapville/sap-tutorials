/*globals sap*/
sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
  ],
  function(UIComponent, JSONModel, ResourceModel) {
    'use strict';
    return UIComponent.extend('sapui.demo.walkthrough.js.Component', {
      metadata: {
        rootView: {
          viewName: 'sapui.demo.walkthrough.view.App',
          type: 'XML',
          async: true,
          id: 'app'
        }
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
        this.setModel(
          new ResourceModel({ bundleName: 'sapui.demo.walkthrough.i18n.i18n' }),
          'i18n'
        );
      }
    });
  }
);
