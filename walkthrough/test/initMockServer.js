/*globals sap*/
sap.ui.define([
  '../localService/mockserver'
], function(mockserver) {
  mockserver.init();
  sap.ui.require(['sap/ui/core/ComponentSupport']);
});
