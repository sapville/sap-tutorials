/*globals sap*/
sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/library',
  'sap/ui/core/Locale',
  'sap/ui/core/LocaleData',
  'sap/ui/model/type/Currency'
], function(Controller, mobileLib, Locale, LocaleData, Currency) {
  return Controller.extend('tutorial.dataBinding.controller.App', {
    onInit: function() {

      const sDefaultPath = '/Products/0';

      this.getOwnerComponent().getModel('productModel').bindContext(sDefaultPath);
      this.getView().byId('productDetailPanel').bindElement({ path: sDefaultPath, model: 'productModel' });
      sap.ui.getCore().getMessageManager().registerObject(this.getView(), true);
    },
    formatMail: function(sFName, sLName) {

      const oResourceModel = this.getView().getModel('i18n').getResourceBundle();
      return mobileLib.URLHelper.normalizeEmail(
        sFName + '.' + sLName + '@example.com',
        oResourceModel.getText('mailSubject', [sFName]),
        oResourceModel.getText('mailBody')
      );

    },

    formatStockValue: function(fUnitPrice, iUnitsInStock, sCurrencyCode) {

      return new Currency(
        new LocaleData(
          new Locale(sap.ui.getCore().getConfiguration().getLanguage())
        ).mData.currencyFormat
      ).formatValue([fUnitPrice * iUnitsInStock, sCurrencyCode], 'string');

    },

    onItemSelected: function(oEvent) {

      const sPath = oEvent.getSource().getBindingContext('productModel').getPath();
      this.byId('productDetailPanel').bindElement({ path: sPath, model: 'productModel' });

    }
  });
});
