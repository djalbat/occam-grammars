"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CustomGrammarPatternView;
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
var CustomGrammarPatternView = /*#__PURE__*/ function(View) {
    _inherits(CustomGrammarPatternView, View);
    var _super = _create_super(CustomGrammarPatternView);
    function CustomGrammarPatternView() {
        _class_call_check(this, CustomGrammarPatternView);
        return _super.apply(this, arguments);
    }
    return CustomGrammarPatternView;
}(_view.default);
_define_property(CustomGrammarPatternView, "Lexer", _index.CustomGrammarPatternLexer);
_define_property(CustomGrammarPatternView, "Parser", _index.CustomGrammarPatternParser);
_define_property(CustomGrammarPatternView, "readOnly", false);
_define_property(CustomGrammarPatternView, "initialContent", "<=|>=|<|>|\\+|\\-|\xd7|\xf7");
_define_property(CustomGrammarPatternView, "defaultProperties", {
    className: "custom-grammar-pattern"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hclBhdHRlcm4uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXJQYXR0ZXJuTGV4ZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuaW1wb3J0IHsgQ3VzdG9tR3JhbW1hclBhdHRlcm5QYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyUGF0dGVyblZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIExleGVyID0gQ3VzdG9tR3JhbW1hclBhdHRlcm5MZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gQ3VzdG9tR3JhbW1hclBhdHRlcm5QYXJzZXI7XG5cbiAgc3RhdGljIHJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gXCI8PXw+PXw8fD58XFxcXCt8XFxcXC18w5d8w7dcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImN1c3RvbS1ncmFtbWFyLXBhdHRlcm5cIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyUGF0dGVyblZpZXciLCJWaWV3IiwiTGV4ZXIiLCJDdXN0b21HcmFtbWFyUGF0dGVybkxleGVyIiwiUGFyc2VyIiwiQ3VzdG9tR3JhbW1hclBhdHRlcm5QYXJzZXIiLCJyZWFkT25seSIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3FCQUxxQjsyREFHekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVGLElBQUEsQUFBTUEseUNBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1dBQUFBO0VBQWlDQztBQUNwRCxpQkFEbUJELDBCQUNaRSxTQUFRQztBQUVmLGlCQUhtQkgsMEJBR1pJLFVBQVNDO0FBRWhCLGlCQUxtQkwsMEJBS1pNLFlBQVc7QUFFbEIsaUJBUG1CTiwwQkFPWk8sa0JBQWlCO0FBRXhCLGlCQVRtQlAsMEJBU1pRLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=