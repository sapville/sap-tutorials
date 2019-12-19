/*globals sap*/
sap.ui.define(
  [
    'sap/ui/core/mvc/XMLView'
  ], (XMLView) => {
    'use strict';
    XMLView.create({
      viewName: 'sapui.demo.walkthrough.view.App'
    }).then(oView => { oView.placeAt('content'); });
  }

);
