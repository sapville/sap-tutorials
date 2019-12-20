/*globals sap*/
sap.ui.define(
  [
    'sap/ui/core/mvc/Controller'
  ],
  Controller => {
    'use strict';
    return Controller.extend('sapui.demo.walkthrough.js.controller.App', {
      onShowHello: () => { alert('Hello World!'); }
    });
  }
);
