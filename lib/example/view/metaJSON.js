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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvbWV0YUpTT04uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1ldGFKU09OTGV4ZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuaW1wb3J0IHsgTWV0YUpTT05QYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhSlNPTlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIExleGVyID0gTWV0YUpTT05MZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gTWV0YUpTT05QYXJzZXI7XG5cbiAgc3RhdGljIHJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYHtcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjFcIixcbiAgXCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvc3RyaW5nc1wiLFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJuYXR1cmFsLW51bWJlcnNcIjogXCIwLjFcIixcbiAgICBcImFyaXRobWV0aWNcIjogXCIyLjNcIlxuICB9XG59XG5gO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWV0YS1qc29uXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJNZXRhSlNPTlZpZXciLCJWaWV3IiwiTGV4ZXIiLCJNZXRhSlNPTkxleGVyIiwiUGFyc2VyIiwiTWV0YUpTT05QYXJzZXIiLCJyZWFkT25seSIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3FCQUxTOzJEQUdiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRixJQUFBLEFBQU1BLDZCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztXQUFBQTtFQUFxQkMsYUFBSTtBQUM1QyxpQkFEbUJELGNBQ1pFLFNBQVFDLG9CQUFhO0FBRTVCLGlCQUhtQkgsY0FHWkksVUFBU0MscUJBQWM7QUFFOUIsaUJBTG1CTCxjQUtaTSxZQUFXO0FBRWxCLGlCQVBtQk4sY0FPWk8sa0JBQWtCO0FBVXpCLGlCQWpCbUJQLGNBaUJaUSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9