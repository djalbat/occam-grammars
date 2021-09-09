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
var CustomGrammarLexicalPatternView = /*#__PURE__*/ function(View) {
    _inherits(CustomGrammarLexicalPatternView, View);
    function CustomGrammarLexicalPatternView() {
        _classCallCheck(this, CustomGrammarLexicalPatternView);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomGrammarLexicalPatternView).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "Lexer", _index.CustomGrammarLexicalPatternLexer);
        _defineProperty(_assertThisInitialized(_this), "Parser", _index.CustomGrammarLexicalPatternParser);
        _defineProperty(_assertThisInitialized(_this), "heading", "Custom Grammar Lexical Pattern example");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuLmpzIl0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyIiwiQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyIiwiVmlldyIsIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblZpZXciLCJMZXhlciIsIlBhcnNlciIsImhlYWRpbmciLCJyZWFkT25seSIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRXFDLEdBQWEsQ0FBYixNQUFhO0FBRzdDLEdBQVMsQ0FBVCxLQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVMLCtCQUErQixpQkFBckMsUUFBUTtjQUFGLCtCQUErQjthQUEvQiwrQkFBK0I7OEJBQS9CLCtCQUErQjs7aUVBQS9CLCtCQUErQjt3REFDbEQsS0FBSyxHQU4wQyxNQUFhO3dEQVE1RCxNQUFNLEdBUnlDLE1BQWE7d0RBVTVELE9BQU8sSUFBRyxzQ0FBd0M7d0RBRWxELFFBQVEsR0FBRyxLQUFLO3dEQUVoQixjQUFjLElBQUcsMkJBQXVCOzs7V0FUckIsK0JBQStCO0VBRm5DLEtBQVM7Z0JBRUwsK0JBQStCLEdBVzNDLGlCQUFpQixHQUFHLENBQUM7SUFDMUIsU0FBUyxHQUFFLDhCQUFnQztBQUM3QyxDQUFDO2tCQWJrQiwrQkFBK0IifQ==