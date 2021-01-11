"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamParsers = require("occam-parsers");

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

var CustomGrammarBNFParser = /*#__PURE__*/function (_BNFParser) {
  _inherits(CustomGrammarBNFParser, _BNFParser);

  var _super = _createSuper(CustomGrammarBNFParser);

  function CustomGrammarBNFParser() {
    _classCallCheck(this, CustomGrammarBNFParser);

    return _super.apply(this, arguments);
  }

  _createClass(CustomGrammarBNFParser, null, [{
    key: "fromNothing",
    value: function fromNothing() {
      var bnfParser = _occamParsers.BNFParser.fromNothing(),
          startRule = bnfParser.getStartRule(),
          ruleMap = bnfParser.getRuleMap(),
          customGrammarBNFParser = new CustomGrammarBNFParser(startRule, ruleMap); ///


      return customGrammarBNFParser;
    }
  }]);

  return CustomGrammarBNFParser;
}(_occamParsers.BNFParser);

exports["default"] = CustomGrammarBNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyQk5GUGFyc2VyIiwiYm5mUGFyc2VyIiwiQk5GUGFyc2VyIiwiZnJvbU5vdGhpbmciLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsImN1c3RvbUdyYW1tYXJCTkZQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsc0I7Ozs7Ozs7Ozs7Ozs7a0NBQ0U7QUFDbkIsVUFBTUMsU0FBUyxHQUFHQyx3QkFBVUMsV0FBVixFQUFsQjtBQUFBLFVBQ01DLFNBQVMsR0FBR0gsU0FBUyxDQUFDSSxZQUFWLEVBRGxCO0FBQUEsVUFFTUMsT0FBTyxHQUFHTCxTQUFTLENBQUNNLFVBQVYsRUFGaEI7QUFBQSxVQUdNQyxzQkFBc0IsR0FBRyxJQUFJUixzQkFBSixDQUEyQkksU0FBM0IsRUFBc0NFLE9BQXRDLENBSC9CLENBRG1CLENBSTZEOzs7QUFFaEYsYUFBT0Usc0JBQVA7QUFDRDs7OztFQVJpRE4sdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk5GUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hckJORlBhcnNlciBleHRlbmRzIEJORlBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBibmZQYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgICAgcnVsZU1hcCA9IGJuZlBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckJORlBhcnNlciA9IG5ldyBDdXN0b21HcmFtbWFyQk5GUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7ICAvLy9cblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyQk5GUGFyc2VyO1xuICB9XG59XG4iXX0=