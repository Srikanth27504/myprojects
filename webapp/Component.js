sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel"
 ], (UIComponent, JSONModel) => {
   "use strict";
 
   return UIComponent.extend("ui5.walkthrough.Component", {
     metadata: {
       interfaces: ["sap.ui.core.IAsyncContentCreation"],
       manifest: "json"
     },
 
     /**
      * @override
      */
     init() {
       // Call base component
       UIComponent.prototype.init.apply(this, arguments);
 
       // Set sample JSON data model
       const oData = {
         recipient: { name: "World" }
       };
       this.setModel(new JSONModel(oData));
 
       // Initialize router once
       this.getRouter().initialize();
     }
   });
 });
 