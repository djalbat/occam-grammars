"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../../index");

var _view = _interopRequireDefault(require("../view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CustomGrammarLexicalPatternView = /*#__PURE__*/function (_View) {
  _inherits(CustomGrammarLexicalPatternView, _View);

  var _super = _createSuper(CustomGrammarLexicalPatternView);

  function CustomGrammarLexicalPatternView() {
    var _this;

    _classCallCheck(this, CustomGrammarLexicalPatternView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "Lexer", _index.CustomGrammarLexicalPatternLexer);

    _defineProperty(_assertThisInitialized(_this), "Parser", _index.CustomGrammarLexicalPatternParser);

    _defineProperty(_assertThisInitialized(_this), "heading", "Custom Grammar Lexical Pattern example");

    _defineProperty(_assertThisInitialized(_this), "readOnly", false);

    _defineProperty(_assertThisInitialized(_this), "initialContent", "<=|>=|<|>|\\+|\\-|×|÷");

    return _this;
  }

  return CustomGrammarLexicalPatternView;
}(_view["default"]);

exports["default"] = CustomGrammarLexicalPatternView;

_defineProperty(CustomGrammarLexicalPatternView, "defaultProperties", {
  className: "custom-grammar-lexical-pattern"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybi5qcyJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5WaWV3IiwiQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIiLCJDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIiLCJWaWV3IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBRUE7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLCtCOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNYQyx1Qzs7NkRBRUNDLHdDOzs4REFFQyx3Qzs7K0RBRUMsSzs7cUVBRU0sdUI7Ozs7OztFQVQwQ0MsZ0I7Ozs7Z0JBQXhDSCwrQix1QkFXUTtBQUN6QkksRUFBQUEsU0FBUyxFQUFFO0FBRGMsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5WaWV3IGV4dGVuZHMgVmlldyB7XG4gIExleGVyID0gQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXI7XG5cbiAgUGFyc2VyID0gQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyO1xuXG4gIGhlYWRpbmcgPSBcIkN1c3RvbSBHcmFtbWFyIExleGljYWwgUGF0dGVybiBleGFtcGxlXCI7XG5cbiAgcmVhZE9ubHkgPSBmYWxzZTtcblxuICBpbml0aWFsQ29udGVudCA9IFwiPD18Pj18PHw+fFxcXFwrfFxcXFwtfMOXfMO3XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjdXN0b20tZ3JhbW1hci1sZXhpY2FsLXBhdHRlcm5cIlxuICB9O1xufVxuIl19