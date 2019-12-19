/*globals sap*/
sap.ui.define(
  [
    'sap/m/Text'
  ], (Text) => {
    'use strict';
    new Text({
      text: 'Hello world!'
    }).placeAt('content');
  }

);
