"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JSONView;
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
var JSONView = /*#__PURE__*/ function(View) {
    _inherits(JSONView, View);
    var _super = _create_super(JSONView);
    function JSONView() {
        _class_call_check(this, JSONView);
        return _super.apply(this, arguments);
    }
    return JSONView;
}(_view.default);
_define_property(JSONView, "Lexer", _index.JSONLexer);
_define_property(JSONView, "Parser", _index.JSONParser);
_define_property(JSONView, "readOnly", false);
_define_property(JSONView, "initialContent", '{\n  "version": "0.0.1",\n  "repository": "https://github.com/djalbat/strings",\n  "dependencies": {\n    "natural-numbers": "0.1",\n    "arithmetic": "2.3"\n  }\n}\n');
_define_property(JSONView, "defaultProperties", {
    className: "json"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgSlNPTkxleGVyLCBKU09OUGFyc2VyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNPTlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIExleGVyID0gSlNPTkxleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBKU09OUGFyc2VyO1xuXG4gIHN0YXRpYyByZWFkT25seSA9IGZhbHNlO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGB7XG4gIFwidmVyc2lvblwiOiBcIjAuMC4xXCIsXG4gIFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kamFsYmF0L3N0cmluZ3NcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwibmF0dXJhbC1udW1iZXJzXCI6IFwiMC4xXCIsXG4gICAgXCJhcml0aG1ldGljXCI6IFwiMi4zXCJcbiAgfVxufVxuYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImpzb25cIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkpTT05WaWV3IiwiVmlldyIsIkxleGVyIiwiSlNPTkxleGVyIiwiUGFyc2VyIiwiSlNPTlBhcnNlciIsInJlYWRPbmx5IiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7cUJBSmlCOzJEQUVyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUYsSUFBQSxBQUFNQSx5QkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztXQUFBQTtFQUFpQkMsYUFBSTtBQUN4QyxpQkFEbUJELFVBQ1pFLFNBQVFDLGdCQUFTO0FBRXhCLGlCQUhtQkgsVUFHWkksVUFBU0MsaUJBQVU7QUFFMUIsaUJBTG1CTCxVQUtaTSxZQUFXO0FBRWxCLGlCQVBtQk4sVUFPWk8sa0JBQWtCO0FBVXpCLGlCQWpCbUJQLFVBaUJaUSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9