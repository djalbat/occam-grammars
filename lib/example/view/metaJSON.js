"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaJSONView;
    }
});
var _index = require("../../index");
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var MetaJSONView = /*#__PURE__*/ function(View) {
    _inherits(MetaJSONView, View);
    var _super = _create_super(MetaJSONView);
    function MetaJSONView() {
        _class_call_check(this, MetaJSONView);
        return _super.apply(this, arguments);
    }
    return MetaJSONView;
}(_view.default);
_define_property(MetaJSONView, "Lexer", _index.MetaJSONLexer);
_define_property(MetaJSONView, "Parser", _index.MetaJSONParser);
_define_property(MetaJSONView, "readOnly", false);
_define_property(MetaJSONView, "initialContent", '{\n  "version": "0.0.1",\n  "repository": "https://github.com/djalbat/strings",\n  "dependencies": {\n    "natural-numbers": "0.1",\n    "arithmetic": "2.3"\n  }\n}\n');
_define_property(MetaJSONView, "defaultProperties", {
    className: "meta-json"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvbWV0YUpTT04uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1ldGFKU09OTGV4ZXIsIE1ldGFKU09OUGFyc2VyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUpTT05WaWV3IGV4dGVuZHMgVmlldyB7XG4gIHN0YXRpYyBMZXhlciA9IE1ldGFKU09OTGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IE1ldGFKU09OUGFyc2VyO1xuXG4gIHN0YXRpYyByZWFkT25seSA9IGZhbHNlO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGB7XG4gIFwidmVyc2lvblwiOiBcIjAuMC4xXCIsXG4gIFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kamFsYmF0L3N0cmluZ3NcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwibmF0dXJhbC1udW1iZXJzXCI6IFwiMC4xXCIsXG4gICAgXCJhcml0aG1ldGljXCI6IFwiMi4zXCJcbiAgfVxufVxuYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1ldGEtanNvblwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTWV0YUpTT05WaWV3IiwiVmlldyIsIkxleGVyIiwiTWV0YUpTT05MZXhlciIsIlBhcnNlciIsIk1ldGFKU09OUGFyc2VyIiwicmVhZE9ubHkiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztxQkFKeUI7MkRBRTdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRixJQUFBLEFBQU1BLDZCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1dBQUFBO0VBQXFCQyxhQUFJO0FBQzVDLGlCQURtQkQsY0FDWkUsU0FBUUMsb0JBQWE7QUFFNUIsaUJBSG1CSCxjQUdaSSxVQUFTQyxxQkFBYztBQUU5QixpQkFMbUJMLGNBS1pNLFlBQVc7QUFFbEIsaUJBUG1CTixjQU9aTyxrQkFBa0I7QUFVekIsaUJBakJtQlAsY0FpQlpRLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=