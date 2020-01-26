/*globals sap*/
sap.ui.define([],
  function() {
    const that = this;
    this._threshold = {
      min: 10,
      max: 100
    };
    return {
      statusText: function(sStatus) {
        const resourceBundle = this.getView().getModel('i18n').getResourceBundle();
        switch (sStatus) {
          case 'A':
            return resourceBundle.getText('invoiceStatusA');
          case 'B':
            return resourceBundle.getText('invoiceStatusB');
          case 'C':
            return resourceBundle.getText('invoiceStatusC');
          default:
            return sStatus;
        }
      },
      getState: function(amount) {
        if (amount < that._threshold.min) {
          return 'Error';
        }
        else if (amount >= that._threshold.min && amount < that._threshold.max) {
          return 'Information';
        }
        else {
          return 'Warning';
        }
      },
      threshold: that._threshold,
    };
  }
);
