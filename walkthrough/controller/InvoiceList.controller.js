/* globals sap */
sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sapui/demo/walkthrough/model/formatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
  ],
  function(Controller, formatter, Filter, FilterOperator) {
    'use strict';
    return Controller.extend('sapui.demo.walkthrough.controller.InvoiceList', {
      formatter: formatter,
      onFilterInvoices: function(oEvent) {
        const aFilter = [];
        const sQuery = oEvent.getSource().getValue();
        // const sQuery = oEvent.getParameter('query'); - for search method. No list live update, search when Enter is hit
        if (sQuery && sQuery.length > 0) {
          aFilter.push(new Filter('ProductName', FilterOperator.Contains, sQuery));
        }
        this.byId('invoiceList').getBinding('items').filter(aFilter);
      },
      onPress: function(oEvent) {
        sap.ui.core.UIComponent.getRouterFor(this).navTo('detail', {
          invoicePath: oEvent.getSource().getBindingContext('invoice').getPath().substr(1)
        });
      }
    });
  }
);
