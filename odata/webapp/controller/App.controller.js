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
      const oJSONData = {
        busy: false,
        hasUIChanges: false,
        usernameEmpty: true,
        order: 0
      };
      const oView = this.getView();
      const oMessageModel = sap.ui.getCore().getMessageManager().getMessageModel();
      const oMessageModelBiding = oMessageModel.bindList(
        '/', undefined, [], new Filter('technical', FilterOperator.EQ, true)
      );

      oMessageModelBiding.attachChange(this.onMessageBindingChange, this);

      oView.setModel(new JSONModel(oJSONData), 'appView');
      oView.setModel(oMessageModel, 'message');

      this._bTechnicalErrors = false;

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
    onCreate: function() {
      const oList = this.byId('peopleList');
      const oContext = oList.getBinding('items').create({
        UserName: '',
        FirstName: '',
        LastName: '',
        Age: '18'
      });

      this._setUIChanges();
      this.getView().getModel('appView').setProperty('/usernameEmpty', true);

      oList.getItems().some(oItem => {
        if (oItem.getBindingContext() === oContext) {
          oItem.focus();
          oItem.setSelected(true);
          oItem.getCells()[0].focus();
          return true;
        }
      });
    },
    onResetChanges: function() {
      this.byId('peopleList').getBinding('items').resetChanges();
      this._bTechnicalErrors = false;
      this._setUIChanges();
    },
    onInputChange: function(oEvent) {
      if (oEvent.getParameter('escPressed')) {
        this._setUIChanges();
      }
      else {
        this._setUIChanges(true);
        if (oEvent.getSource().getParent().getBindingContext().getProperty('UserName')) {
          this.getView().getModel('appView').setProperty('/usernameEmpty', false);
        }
      }
    },
    onSave: function() {
      this._setBusy(true);
      this._bTechnicalErrors = false;
      this.getView().getModel().submitBatch('peopleGroup')
        .then(
          () => {
            this._setBusy(false);
            if (!this._bTechnicalErrors) {
              MessageToast.show(this._getText('changesSentMessage'));
            }
            this._setUIChanges(false);
          },
          oError => {
            this._setBusy(false);
            this._setUIChanges(false);
            MessageBox.error(oError.message);
          }
        );
    },
    onMessageBindingChange: function(oEvent) {
      let bMessageOpen = false;
      const aContexts = oEvent.getSource().getContexts();

      if (bMessageOpen || !aContexts.length) {
        return;
      }

      this._setUIChanges(true);
      this._bTechnicalErrors = true;

      const aMessages = aContexts.map(oContext => oContext.getObject());
      sap.ui.getCore().getMessageManager().removeMessages(aMessages);

      MessageBox.error(aMessages[0].message, {
        id: 'serviceErrorMessageBox',
        onClose: function() { bMessageOpen = false; }
      });

      bMessageOpen = true;

    },
    _setBusy: function(bIsBusy) {
      this.getView().getModel('appView').setProperty('/busy', bIsBusy);
    },
    _getText: function(sTextId, aArgs) {
      return this.getOwnerComponent().getModel('i18n').getResourceBundle().getText(sTextId, aArgs);
    },
    _setUIChanges: function(bHasUIChanges) {
      const oView = this.getView();

      if (this._bTechnicalErrors) {
        bHasUIChanges = true;
      }
      else if (bHasUIChanges === undefined) {
        bHasUIChanges = oView.getModel().hasPendingChanges();
      }

      oView.getModel('appView').setProperty('/hasUIChanges', bHasUIChanges);
    }
  });
});
