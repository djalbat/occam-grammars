"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
var CustomGrammarBNFParser = /*#__PURE__*/ function(BNFParser) {
    _inherits(CustomGrammarBNFParser, BNFParser);
    function CustomGrammarBNFParser() {
        _classCallCheck(this, CustomGrammarBNFParser);
        return _possibleConstructorReturn(this, _getPrototypeOf(CustomGrammarBNFParser).apply(this, arguments));
    }
    _createClass(CustomGrammarBNFParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var bnfParser = _occamParsers.BNFParser.fromNothing(), startRule = bnfParser.getStartRule(), ruleMap = bnfParser.getRuleMap(), customGrammarBNFParser = new CustomGrammarBNFParser(startRule, ruleMap); ///
                return customGrammarBNFParser;
            }
        }
    ]);
    return CustomGrammarBNFParser;
}(_occamParsers.BNFParser);
exports.default = CustomGrammarBNFParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyQk5GL3BhcnNlci5qcyJdLCJuYW1lcyI6WyJCTkZQYXJzZXIiLCJDdXN0b21HcmFtbWFyQk5GUGFyc2VyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsImN1c3RvbUdyYW1tYXJCTkZQYXJzZXIiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWMsR0FBZSxDQUFmLGFBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcEIsc0JBQXNCLGlCQUE1QixRQUFRO2NBQUYsc0JBQXNCO2FBQXRCLHNCQUFzQjs4QkFBdEIsc0JBQXNCO2dFQUF0QixzQkFBc0I7O2lCQUF0QixzQkFBc0I7O1lBQ2xDLEdBQVcsR0FBWCxXQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQyxTQUFTLEdBSk8sYUFBZSxXQUlULFdBQVcsSUFDakMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxZQUFZLElBQ2xDLE9BQU8sR0FBRyxTQUFTLENBQUMsVUFBVSxJQUM5QixzQkFBc0IsR0FBRyxHQUFHLENBQUMsc0JBQXNCLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRW5GLE1BQU0sQ0FBQyxzQkFBc0I7WUFDL0IsQ0FBQzs7O1dBUmtCLHNCQUFzQjtFQUZqQixhQUFlO2tCQUVwQixzQkFBc0IifQ==