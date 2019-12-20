/*globals sap*/
sap.ui.define(
  [
    'sap/ui/core/ComponentContainer'
  ],
  function(ComponentContainer) {
    'use strict';
    new ComponentContainer({
      name: 'sapui.demo.walkthrough.js',
      settings: {
        id: 'walkthrough'
      },
      async: true
    }).placeAt('content');
  }

);
