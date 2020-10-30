/*globals sap*/
sap.ui.define([
  'sap/ui/demo/nav/controller/BaseController'
], function(BaseController) {
  'use strict';
  return BaseController.extend('sap.ui.demo.nav.controller.employee.EmployeeList', {

    onListItemPressed: function(oEvent) {
      this.getRouter().navTo(
        'employee', { employeeId: oEvent.getSource().getBindingContext().getProperty('EmployeeID') }
      );
    }
  });
});
