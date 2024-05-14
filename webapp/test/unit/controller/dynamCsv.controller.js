/*global QUnit*/

sap.ui.define([
	"comepiuse/dynamcsv/controller/dynamCsv.controller"
], function (Controller) {
	"use strict";

	QUnit.module("dynamCsv Controller");

	QUnit.test("I should test the dynamCsv controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
