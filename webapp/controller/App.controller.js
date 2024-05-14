sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.epiuse.dynamcsv.controller.App", {
        onInit: function() {
          sap.ui.getCore().applyTheme('sap_horizon_dark');
        }
      });
    }
  );
  