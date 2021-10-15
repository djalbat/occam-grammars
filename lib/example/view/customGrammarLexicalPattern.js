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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuLmpzIl0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyIiwiQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyIiwiVmlldyIsIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblZpZXciLCJMZXhlciIsIlBhcnNlciIsImhlYWRpbmciLCJyZWFkT25seSIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRXFDLEdBQWEsQ0FBYixNQUFhO0FBRzdDLEdBQVMsQ0FBVCxLQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVMLCtCQUErQixpQkFBckMsUUFBUTtjQUFGLCtCQUErQjthQUEvQiwrQkFBK0I7OEJBQS9CLCtCQUErQjs7aUVBQS9CLCtCQUErQjt1REFDbEQsQ0FBSyxRQU4wQyxNQUFhO3VEQVE1RCxDQUFNLFNBUnlDLE1BQWE7dURBVTVELENBQU8sVUFBRyxDQUF3Qzt1REFFbEQsQ0FBUSxXQUFHLEtBQUs7dURBRWhCLENBQWMsaUJBQUcsQ0FBdUI7OztXQVRyQiwrQkFBK0I7RUFGbkMsS0FBUztnQkFFTCwrQkFBK0IsRUFXM0MsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQixTQUFTLEVBQUUsQ0FBZ0M7QUFDN0MsQ0FBQztrQkFia0IsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgTGV4ZXIgPSBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlcjtcblxuICBQYXJzZXIgPSBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXI7XG5cbiAgaGVhZGluZyA9IFwiQ3VzdG9tIEdyYW1tYXIgTGV4aWNhbCBQYXR0ZXJuIGV4YW1wbGVcIjtcblxuICByZWFkT25seSA9IGZhbHNlO1xuXG4gIGluaXRpYWxDb250ZW50ID0gXCI8PXw+PXw8fD58XFxcXCt8XFxcXC18w5d8w7dcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImN1c3RvbS1ncmFtbWFyLWxleGljYWwtcGF0dGVyblwiXG4gIH07XG59XG4iXX0=