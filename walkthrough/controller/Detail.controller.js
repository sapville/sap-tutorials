/*global sap*/
sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/UIComponent'
  ],
  function(Controller, UIComponent) {
    'use strict';
    return Controller.extend('sapui.demo.walkthrough.controller.Detail', {
      onInit: function() {
        const oRouter = UIComponent.getRouterFor(this);
        oRouter.getRoute('detail').attachPatternMatched(this._onObjectMatched, this);
      },
      _onObjectMatched: function(oEvent) {
        const sPath = '/Invoices(\'' + oEvent.getParameter('arguments').id + '\')';
        console.log(sPath);
        this.getView().bindElement({
          path: sPath,
          model: 'invoice'
        });
      }
    });
  }
);
