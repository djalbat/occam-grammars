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
var _view = /*#__PURE__*/ _interopRequireDefault(require("../view"));
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
var CustomGrammarPatternView = /*#__PURE__*/ function(View) {
    _inherits(CustomGrammarPatternView, View);
    var _super = _createSuper(CustomGrammarPatternView);
    function CustomGrammarPatternView() {
        _classCallCheck(this, CustomGrammarPatternView);
        return _super.apply(this, arguments);
    }
    return CustomGrammarPatternView;
}(_view.default);
_defineProperty(CustomGrammarPatternView, "Lexer", _index.CustomGrammarPatternLexer);
_defineProperty(CustomGrammarPatternView, "Parser", _index.CustomGrammarPatternParser);
_defineProperty(CustomGrammarPatternView, "readOnly", false);
_defineProperty(CustomGrammarPatternView, "initialContent", "<=|>=|<|>|\\+|\\-|\xd7|\xf7");
_defineProperty(CustomGrammarPatternView, "defaultProperties", {
    className: "custom-grammar-pattern"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hclBhdHRlcm4uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXJQYXR0ZXJuTGV4ZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuaW1wb3J0IHsgQ3VzdG9tR3JhbW1hclBhdHRlcm5QYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyUGF0dGVyblZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIExleGVyID0gQ3VzdG9tR3JhbW1hclBhdHRlcm5MZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gQ3VzdG9tR3JhbW1hclBhdHRlcm5QYXJzZXI7XG5cbiAgc3RhdGljIHJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gXCI8PXw+PXw8fD58XFxcXCt8XFxcXC18w5d8w7dcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImN1c3RvbS1ncmFtbWFyLXBhdHRlcm5cIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyUGF0dGVyblZpZXciLCJWaWV3IiwiTGV4ZXIiLCJDdXN0b21HcmFtbWFyUGF0dGVybkxleGVyIiwiUGFyc2VyIiwiQ3VzdG9tR3JhbW1hclBhdHRlcm5QYXJzZXIiLCJyZWFkT25seSIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQU9RQSx3QkFBd0I7OztxQkFMSCxhQUFhO3lEQUd0QyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLHdCQUF3QixpQkFBOUI7OzthQUFNQSx3QkFBd0I7Ozs7O0NBWTVDLENBWnFEQyxLQUFJLFFBQUEsQ0FZekQ7QUFYQyxnQkFEbUJELHdCQUF3QixFQUNwQ0UsT0FBSyxFQUFHQyxNQUF5QiwwQkFBQSxDQUFDO0FBRXpDLGdCQUhtQkgsd0JBQXdCLEVBR3BDSSxRQUFNLEVBQUdDLE1BQTBCLDJCQUFBLENBQUM7QUFFM0MsZ0JBTG1CTCx3QkFBd0IsRUFLcENNLFVBQVEsRUFBRyxLQUFLLENBQUM7QUFFeEIsZ0JBUG1CTix3QkFBd0IsRUFPcENPLGdCQUFjLEVBQUcsNkJBQXVCLENBQUM7QUFFaEQsZ0JBVG1CUCx3QkFBd0IsRUFTcENRLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsd0JBQXdCO0NBQ3BDLENBQUMifQ==