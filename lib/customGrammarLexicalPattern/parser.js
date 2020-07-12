"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _occamParsers = require("occam-parsers");

var _bnf = _interopRequireDefault(require("./bnf"));

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

var bnfLexer = _occamLexers.BNFLexer.fromNothing(),
    bnfParser = _occamParsers.BNFParser.fromNothing();

var CustomGrammarLexicalPatternParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(CustomGrammarLexicalPatternParser, _CommonParser);

  var _super = _createSuper(CustomGrammarLexicalPatternParser);

  function CustomGrammarLexicalPatternParser() {
    _classCallCheck(this, CustomGrammarLexicalPatternParser);

    return _super.apply(this, arguments);
  }

  _createClass(CustomGrammarLexicalPatternParser, null, [{
    key: "fromBNF",
    value: function fromBNF(bnf) {
      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          customGrammarLexicalPatternParser = CustomGrammarLexicalPatternParser.fromRules(rules);
      return customGrammarLexicalPatternParser;
    }
  }, {
    key: "fromRules",
    value: function fromRules(rules) {
      return _occamParsers.CommonParser.fromRules(CustomGrammarLexicalPatternParser, rules);
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      return CustomGrammarLexicalPatternParser.fromBNF(_bnf["default"]);
    }
  }]);

  return CustomGrammarLexicalPatternParser;
}(_occamParsers.CommonParser);

exports["default"] = CustomGrammarLexicalPatternParser;

_defineProperty(CustomGrammarLexicalPatternParser, "bnf", _bnf["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIiLCJibmYiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIiLCJmcm9tUnVsZXMiLCJDb21tb25QYXJzZXIiLCJmcm9tQk5GIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxzQkFBU0MsV0FBVCxFQUFqQjtBQUFBLElBQ01DLFNBQVMsR0FBR0Msd0JBQVVGLFdBQVYsRUFEbEI7O0lBR3FCRyxpQzs7Ozs7Ozs7Ozs7Ozs0QkFHSkMsRyxFQUFLO0FBQ2xCLFVBQU1DLE1BQU0sR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCRixHQUF2QixDQUFmO0FBQUEsVUFDTUcsS0FBSyxHQUFHTixTQUFTLENBQUNPLGVBQVYsQ0FBMEJILE1BQTFCLENBRGQ7QUFBQSxVQUVNSSxpQ0FBaUMsR0FBR04saUNBQWlDLENBQUNPLFNBQWxDLENBQTRDSCxLQUE1QyxDQUYxQztBQUlBLGFBQU9FLGlDQUFQO0FBQ0Q7Ozs4QkFFZ0JGLEssRUFBTztBQUFFLGFBQU9JLDJCQUFhRCxTQUFiLENBQXVCUCxpQ0FBdkIsRUFBMERJLEtBQTFELENBQVA7QUFBMEU7OztrQ0FFL0U7QUFBRSxhQUFPSixpQ0FBaUMsQ0FBQ1MsT0FBbEMsQ0FBMENSLGVBQTFDLENBQVA7QUFBd0Q7Ozs7RUFibEJPLDBCOzs7O2dCQUExQ1IsaUMsU0FDTkMsZSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbUJORihibmYpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyID0gQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyLmZyb21SdWxlcyhydWxlcyk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlci5mcm9tQk5GKGJuZik7IH1cbn1cbiJdfQ==