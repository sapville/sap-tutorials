/*globals sap*/
sap.ui.define([
  'sap/ui/demo/nav/controller/BaseController'
], function(BaseController) {
  'use strict';

  return BaseController.extend('sap.ui.demo.nav.controller.NotFound', {
    onInit: function() {
      this.getRouter().getTarget('notFound').attachDisplay(
        oEvent => this._oData = oEvent.getParameter('data')
      );
    },

    onNavBack: function() {
      if (this._oData && this._oData.fromTarget) {
        this.getRouter().getTargets().display(this._oData.fromTarget);
        delete this._oData.fromTarget;
      }
      else {
        BaseController.prototype.onNavBack.apply(this, arguments);
      }
    }

  });

});
