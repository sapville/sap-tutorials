/*globals sap*/
sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast',
  'sap/m/MessageBox',
  'sap/ui/model/Sorter',
  'sap/ui/model/Filter',
  'sap/ui/model/FilterOperator',
  'sap/ui/model/FilterType',
  'sap/ui/model/json/JSONModel'
], function(Controller, MessageToast, MessageBox, Sorter, Filter, FilterOperator, FilterType, JSONModel) {
  'use strict';

  return Controller.extend('sap.ui.core.tutorial.odatav4.controller.App', {

    /**
     *  Hook for initializing the controller
     */
    onInit: function() {
      var oJSONData = {
        busy: false,
        order: 0
      };
      var oModel = new JSONModel(oJSONData);
      this.getView().setModel(oModel, 'appView');
    },
    onRefresh: function() {
      const oBinding = this.byId('peopleList').getBinding('items');
      if (oBinding.hasPendingChanges()) {
        MessageBox.error(this._getText('refreshNotPossibleMessage'));
      }
      else {
        oBinding.refresh();
        MessageToast.show(this._getText('refreshSuccessMessage'));
      }
    },
    onSort: function() {
      const oView = this.getView();
      const aStates = [undefined, 'asc', 'desc'];
      const aStateTextIds = ['sortNone', 'sortAscending', 'sortDescending'];

      const oModel = oView.getModel('appView');
      let iOrder = oModel.getProperty('/order');

      iOrder = (iOrder + 1) % aStates.length;
      oModel.setProperty('/order', iOrder);

      const sOrder = aStates[iOrder];
      oView.byId('peopleList').getBinding('items').sort(sOrder && new Sorter('LastName', sOrder === 'desc'));

      MessageToast.show(this._getText('sortMessage', [this._getText(aStateTextIds[iOrder])]));
    },
    onSearch: function() {
      const oView = this.getView();
      oView.byId('peopleList').getBinding('items').filter(
        new Filter('LastName', FilterOperator.Contains, oView.byId('searchField').getValue()),
        FilterType.Application
      );
    },
    _getText: function(sTextId, aArgs) {
      return this.getOwnerComponent().getModel('i18n').getResourceBundle().getText(sTextId, aArgs);
    }
  });
});
