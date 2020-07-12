"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../../index");

var _view = _interopRequireDefault(require("../view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CustomGrammarBNFView = /*#__PURE__*/function (_View) {
  _inherits(CustomGrammarBNFView, _View);

  var _super = _createSuper(CustomGrammarBNFView);

  function CustomGrammarBNFView() {
    var _this;

    _classCallCheck(this, CustomGrammarBNFView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "Lexer", _index.CustomGrammarBNFLexer);

    _defineProperty(_assertThisInitialized(_this), "Parser", _index.CustomGrammarBNFParser);

    _defineProperty(_assertThisInitialized(_this), "heading", "Custom Grammar BNF example");

    _defineProperty(_assertThisInitialized(_this), "readOnly", true);

    _defineProperty(_assertThisInitialized(_this), "initialContent", "\n\n                       term  ::=  operation ( <NO_WHITESPACE>\"(\" expression \")\" )?\n\n                               ;\n\n\n                  operation  ::=  \"insert\"<NO_WHITESPACE>\"(\" expression \",\" expression \")\"\n\n                               |  \"delete\"<NO_WHITESPACE>\"(\" expression \",\" expression \")\" \n\n                               |  \"empty\"<NO_WHITESPACE>\"(\"<NO_WHITESPACE>\")\"\n\n                               ;\n");

    return _this;
  }

  _createClass(CustomGrammarBNFView, [{
    key: "getParseTree",
    value: function getParseTree(tokens) {
      var parseTree = null;
      var parser = this.Parser.fromNothing(),
          ruleName = this.getRuleName(),
          ruleMap = parser.getRuleMap(),
          rule = ruleMap[ruleName],
          node = parser.parse(tokens, rule);

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }]);

  return CustomGrammarBNFView;
}(_view["default"]);

exports["default"] = CustomGrammarBNFView;

_defineProperty(CustomGrammarBNFView, "defaultProperties", {
  className: "custom-grammar-bnf"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbUdyYW1tYXJCTkYuanMiXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hckJORlZpZXciLCJDdXN0b21HcmFtbWFyQk5GTGV4ZXIiLCJDdXN0b21HcmFtbWFyQk5GUGFyc2VyIiwidG9rZW5zIiwicGFyc2VUcmVlIiwicGFyc2VyIiwiUGFyc2VyIiwiZnJvbU5vdGhpbmciLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJydWxlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJWaWV3IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxvQjs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDWEMsNEI7OzZEQUVDQyw2Qjs7OERBRUMsNEI7OytEQUVDLEk7Ozs7Ozs7OztpQ0FrQkVDLE0sRUFBUTtBQUNuQixVQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFFQSxVQUFNQyxNQUFNLEdBQUcsS0FBS0MsTUFBTCxDQUFZQyxXQUFaLEVBQWY7QUFBQSxVQUNNQyxRQUFRLEdBQUcsS0FBS0MsV0FBTCxFQURqQjtBQUFBLFVBRU1DLE9BQU8sR0FBR0wsTUFBTSxDQUFDTSxVQUFQLEVBRmhCO0FBQUEsVUFHTUMsSUFBSSxHQUFHRixPQUFPLENBQUNGLFFBQUQsQ0FIcEI7QUFBQSxVQUlNSyxJQUFJLEdBQUdSLE1BQU0sQ0FBQ1MsS0FBUCxDQUFhWCxNQUFiLEVBQXFCUyxJQUFyQixDQUpiOztBQU1BLFVBQUlDLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCVCxRQUFBQSxTQUFTLEdBQUdTLElBQUksQ0FBQ0UsV0FBTCxDQUFpQlosTUFBakIsQ0FBWjtBQUNEOztBQUVELGFBQU9DLFNBQVA7QUFDRDs7OztFQXZDK0NZLGdCOzs7O2dCQUE3QmhCLG9CLHVCQXlDUTtBQUN6QmlCLEVBQUFBLFNBQVMsRUFBRTtBQURjLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ3VzdG9tR3JhbW1hckJORkxleGVyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyQk5GVmlldyBleHRlbmRzIFZpZXcge1xuICBMZXhlciA9IEN1c3RvbUdyYW1tYXJCTkZMZXhlcjtcblxuICBQYXJzZXIgPSBDdXN0b21HcmFtbWFyQk5GUGFyc2VyO1xuXG4gIGhlYWRpbmcgPSBcIkN1c3RvbSBHcmFtbWFyIEJORiBleGFtcGxlXCI7XG5cbiAgcmVhZE9ubHkgPSB0cnVlO1xuXG4gIGluaXRpYWxDb250ZW50ID0gYFxuXG4gICAgICAgICAgICAgICAgICAgICAgIHRlcm0gIDo6PSAgb3BlcmF0aW9uICggPE5PX1dISVRFU1BBQ0U+XCIoXCIgZXhwcmVzc2lvbiBcIilcIiApP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbiAgOjo9ICBcImluc2VydFwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgZXhwcmVzc2lvbiBcIixcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcImRlbGV0ZVwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgZXhwcmVzc2lvbiBcIixcIiBleHByZXNzaW9uIFwiKVwiIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJlbXB0eVwiPE5PX1dISVRFU1BBQ0U+XCIoXCI8Tk9fV0hJVEVTUEFDRT5cIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuYDtcblxuICBnZXRQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJzZXIgPSB0aGlzLlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGVNYXAgPSBwYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2VucywgcnVsZSk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImN1c3RvbS1ncmFtbWFyLWJuZlwiXG4gIH07XG59XG4iXX0=