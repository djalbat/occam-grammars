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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "Lexer", _index.CustomGrammarLexicalPatternLexer);
        _defineProperty(_assertThisInitialized(_this), "Parser", _index.CustomGrammarLexicalPatternParser);
        _defineProperty(_assertThisInitialized(_this), "heading", "Custom Grammar Lexical Pattern Example");
        _defineProperty(_assertThisInitialized(_this), "readOnly", false);
        _defineProperty(_assertThisInitialized(_this), "initialContent", "<=|>=|<|>|\\+|\\-|\xd7|\xf7");
        return _this;
    }
    return CustomGrammarLexicalPatternView;
}(_view.default);
_defineProperty(CustomGrammarLexicalPatternView, "defaultProperties", {
    className: "custom-grammar-lexical-pattern"
});
exports.default = CustomGrammarLexicalPatternView;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5WaWV3IGV4dGVuZHMgVmlldyB7XG4gIExleGVyID0gQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXI7XG5cbiAgUGFyc2VyID0gQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyO1xuXG4gIGhlYWRpbmcgPSBcIkN1c3RvbSBHcmFtbWFyIExleGljYWwgUGF0dGVybiBFeGFtcGxlXCI7XG5cbiAgcmVhZE9ubHkgPSBmYWxzZTtcblxuICBpbml0aWFsQ29udGVudCA9IFwiPD18Pj18PHw+fFxcXFwrfFxcXFwtfMOXfMO3XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjdXN0b20tZ3JhbW1hci1sZXhpY2FsLXBhdHRlcm5cIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblZpZXciLCJMZXhlciIsIlBhcnNlciIsImhlYWRpbmciLCJyZWFkT25seSIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRXFDLEdBQWEsQ0FBYixNQUFhO0FBRzdDLEdBQVMsQ0FBVCxLQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTEEsK0JBQStCLGlCQUFyQyxRQUFRO2NBQUZBLCtCQUErQjs4QkFBL0JBLCtCQUErQjthQUEvQkEsK0JBQStCOzhCQUEvQkEsK0JBQStCOzs7dURBQ2xEQyxDQUFLLFFBTjBDLE1BQWE7dURBUTVEQyxDQUFNLFNBUnlDLE1BQWE7dURBVTVEQyxDQUFPLFVBQUcsQ0FBd0M7dURBRWxEQyxDQUFRLFdBQUcsS0FBSzt1REFFaEJDLENBQWMsaUJBQUcsQ0FBdUI7OztXQVRyQkwsK0JBQStCO0VBRm5DLEtBQVM7Z0JBRUxBLCtCQUErQixFQVczQ00sQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQWdDO0FBQzdDLENBQUM7a0JBYmtCUCwrQkFBK0IifQ==