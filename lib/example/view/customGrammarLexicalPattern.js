"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../../index");
var _view = _interopRequireDefault(require("../view"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperty(obj, key, value) {
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var CustomGrammarLexicalPatternView = /*#__PURE__*/ function(View) {
    _inherits(CustomGrammarLexicalPatternView, View);
    var _super = _createSuper(CustomGrammarLexicalPatternView);
    function CustomGrammarLexicalPatternView() {
        _classCallCheck(this, CustomGrammarLexicalPatternView);
        return _super.apply(this, arguments);
    }
    return CustomGrammarLexicalPatternView;
}(_view.default);
exports.default = CustomGrammarLexicalPatternView;
_defineProperty(CustomGrammarLexicalPatternView, "Lexer", _index.CustomGrammarLexicalPatternLexer);
_defineProperty(CustomGrammarLexicalPatternView, "Parser", _index.CustomGrammarLexicalPatternParser);
_defineProperty(CustomGrammarLexicalPatternView, "readOnly", false);
_defineProperty(CustomGrammarLexicalPatternView, "initialContent", "<=|>=|<|>|\\+|\\-|\xd7|\xf7");
_defineProperty(CustomGrammarLexicalPatternView, "defaultProperties", {
    className: "custom-grammar-lexical-pattern"
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5WaWV3IGV4dGVuZHMgVmlldyB7XG4gIHN0YXRpYyBMZXhlciA9IEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXI7XG5cbiAgc3RhdGljIHJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gXCI8PXw+PXw8fD58XFxcXCt8XFxcXC18w5d8w7dcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImN1c3RvbS1ncmFtbWFyLWxleGljYWwtcGF0dGVyblwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuVmlldyIsIlZpZXciLCJDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciIsIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVpRCxJQUFBLE1BQWEseUJBQUE7QUFHN0MsSUFBQSxLQUFTLDZDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBTDFCOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBT2UsSUFBQSxBQUFNQSwrQkFBK0IsaUJDUGpELEFET1k7b0RBUGY7O2FBT3FCQSwrQkFBK0I7OERBUHBEOzs7O0NBbUJDLENBWjREQyxLQUFJLFNBWWhFO2tCQVpvQkQsK0JBQStCLEFBUHBEO0FBUUUsZ0JBRG1CQSwrQkFBK0IsV0FDbkNFLE1BQWdDLGtDQUFDLEFBUmxEO0FBVUUsZ0JBSG1CRiwrQkFBK0IsWUFHbENHLE1BQWlDLG1DQUFDLEFBVnBEO0FBWUUsZ0JBTG1CSCwrQkFBK0IsY0FLaEMsS0FBSyxDQUFDLEFBWjFCO0FBY0UsZ0JBUG1CQSwrQkFBK0Isb0JBTzFCLDZCQUF1QixDQUFDLEFBZGxEO0FBZ0JFLGdCQVRtQkEsK0JBQStCLHVCQVN2QjtJQUN6QkksU0FBUyxFQUFFLGdDQUFnQztDQUM1QyxDQUFDLEFBbEJKIn0=