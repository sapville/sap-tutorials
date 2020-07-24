/*globals sap*/
sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/library'
], function(Controller, mobileLib) {
  return Controller.extend('tutorial.dataBinding.controller.App', {
    onInit: function() {
      sap.ui.getCore().getMessageManager().registerObject(this.getView(), true);
    },
    formatMail: function(sFName, sLName) {
      const oResourceModel = this.getView().getModel('i18n').getResourceBundle();
      return mobileLib.URLHelper.normalizeEmail(
        sFName + '.' + sLName + '@example.com',
        oResourceModel.getText('mailSubject', [sFName]),
        oResourceModel.getText('mailBody')
      );
    }
  });
});
