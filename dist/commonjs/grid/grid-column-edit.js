"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _grid = require("./grid");

var _gridColumnUtility = require("./grid-column-utility");

var _aureliaFramework = require("aurelia-framework");

var GridColumnEdit = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(GridColumnEdit, [{
        key: "butttonGroupClass",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "cancelButtonClass",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "cancelClick",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "editButtonClass",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "editClick",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "heading",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "orDivClass",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "saveButtonClass",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "saveCancelButtonGroupClass",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "saveClick",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }], null, _instanceInitializers);

    function GridColumnEdit(grid, utility) {
        _classCallCheck(this, _GridColumnEdit);

        _defineDecoratedPropertyDescriptor(this, "butttonGroupClass", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "cancelButtonClass", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "cancelClick", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "editButtonClass", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "editClick", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "heading", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "orDivClass", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "saveButtonClass", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "saveCancelButtonGroupClass", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "saveClick", _instanceInitializers);

        this.showCancel = true;

        this.grid = grid;
        this.utility = utility;
    }

    _createDecoratedClass(GridColumnEdit, [{
        key: "bind",
        value: function bind(bindingContext) {
            if (bindingContext === this.grid) {
                this.utility.registerWithGrid(this.grid, this);
            } else {
                this.utility.bindToRow(bindingContext, this);
            }

            this.loadCssFrameworkSettings();
        }
    }, {
        key: "cancelButtonClick",
        value: function cancelButtonClick() {
            if (this.cancelClick) {
                this.cancelClick(this.bindingContext.row);
            }

            Object.assign(this.bindingContext.row, this.originalValue);
            this.bindingContext.editing = false;
        }
    }, {
        key: "editButtonClick",
        value: function editButtonClick() {

            this.originalValue = Object.assign({}, this.bindingContext.row);

            if (this.editClick) {
                this.editClick(this.bindingContext.row);
            }

            this.bindingContext.editing = true;
        }
    }, {
        key: "loadCssFrameworkSettings",
        value: function loadCssFrameworkSettings() {
            if (this.grid.cssFramework) {
                var config = this.grid.cssFramework.editClasses;

                this.butttonGroupClass = config.buttonGroup;
                this.cancelButtonClass = config.cancelButton;
                this.editButtonClass = config.editButton;
                this.orDivClass = config.orDiv;
                this.saveButtonClass = config.saveButton;
                this.saveCancelButtonGroupClass = config.saveCancelButtonGroup;
            }
        }
    }, {
        key: "saveButtonClick",
        value: function saveButtonClick() {
            if (this.saveClick) {
                this.saveClick(this.bindingContext.row);
            }

            this.bindingContext.editing = false;
        }
    }], null, _instanceInitializers);

    var _GridColumnEdit = GridColumnEdit;
    GridColumnEdit = (0, _aureliaFramework.inject)(_grid.Grid, _gridColumnUtility.ColumnUtility)(GridColumnEdit) || GridColumnEdit;
    GridColumnEdit = (0, _aureliaFramework.containerless)(GridColumnEdit) || GridColumnEdit;
    return GridColumnEdit;
})();

exports.GridColumnEdit = GridColumnEdit;