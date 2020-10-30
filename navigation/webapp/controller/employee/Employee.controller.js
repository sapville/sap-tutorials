/*globals sap*/
sap.ui.define([
  'sap/ui/demo/nav/controller/BaseController'
], function(BaseController) {
  'use strict';
  return BaseController.extend('sap.ui.demo.nav.controller.employee.Employee', {
    onInit: function() {
      this.getRouter().getRoute('employee').attachMatched(this._onRouteMatched, this);
    },
    _onRouteMatched: function(oEvent) {
      const oView = this.getView();
      oView.bindElement({
        path: '/Employees(' + oEvent.getParameter('arguments').employeeId + ')',
        events: {
          change: this._onBindingChange.bind(this),
          dataRequested: function() { oView.setBusy(true) },
          dataReceived: function() { oView.setBusy(false) }
        }
      });
    },
    _onBindingChange: function() {
      if (!this.getView().getBindingContext()) {
        this.getRouter().getTargets().display('notFound');
      }
    }
  });
});
