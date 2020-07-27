/*globals sap*/
sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/library',
  'sap/ui/core/Locale',
  'sap/ui/core/LocaleData',
  'sap/ui/model/type/Currency',
  'sap/m/ObjectAttribute'
], function(Controller, mobileLib, Locale, LocaleData, Currency, ObjectAttribute) {
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

    },

    productListFactory: function(sId, oContext) {

      let oUIControl;

      if (oContext.getProperty('UnitsInStock') === 0 && oContext.getProperty('Discontinued')) {
        oUIControl = this.byId('productSimple').clone(sId);
      }
      else {
        oUIControl = this.byId('productExtended').clone(sId);
        if (oContext.getProperty('UnitsInStock') < 1) {
          oUIControl.addAttribute(
            new ObjectAttribute({ text: { path: 'i18n>outOfStock' } })
          );
        }
      }

      return oUIControl;

    }
  });
});
