/*global sap*/
sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/UIComponent',
    'sap/ui/core/routing/History'
  ],
  function(Controller, UIComponent, History) {
    'use strict';
    return Controller.extend('sapui.demo.walkthrough.controller.Detail', {
      onInit: function() {
        const oRouter = UIComponent.getRouterFor(this);
        oRouter.getRoute('detail').attachPatternMatched(this._onObjectMatched, this);
      },
      onNavBack: function() {
        if (History.getInstance().getPreviousHash() !== undefined) {
          window.history.go(-1);
        }
        else {
          UIComponent.getRouterFor(this).navTo('overview', {}, true);
        }
      },
      _onObjectMatched: function(oEvent) {
        this.getView().bindElement({
          path: '/' + oEvent.getParameter('arguments').invoicePath,
          model: 'invoice'
        });
      }
    });
  }
);
