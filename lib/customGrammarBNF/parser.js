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
var CustomGrammarBNFParser = function(BNFParser) {
    _inherits(CustomGrammarBNFParser, _occamParsers.BNFParser);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyQk5GL3BhcnNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk5GUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hckJORlBhcnNlciBleHRlbmRzIEJORlBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBibmZQYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgICAgcnVsZU1hcCA9IGJuZlBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckJORlBhcnNlciA9IG5ldyBDdXN0b21HcmFtbWFyQk5GUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7ICAvLy9cblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyQk5GUGFyc2VyO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFYyxhQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBCLHNCQUFzQixZQUFTLFNBQVM7Y0FBeEMsc0JBQXNCLEVBRmpCLGFBQWU7YUFFcEIsc0JBQXNCOzhCQUF0QixzQkFBc0I7Z0VBQXRCLHNCQUFzQjs7aUJBQXRCLHNCQUFzQjs7QUFDbEMsZUFBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztvQkFDVixTQUFTLEdBSk8sYUFBZSxXQUlULFdBQVcsSUFDakMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxZQUFZLElBQ2xDLE9BQU8sR0FBRyxTQUFTLENBQUMsVUFBVSxJQUM5QixzQkFBc0IsT0FBTyxzQkFBc0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFNUUsc0JBQXNCOzs7O1dBUFosc0JBQXNCO0VBRmpCLGFBQWU7a0JBRXBCLHNCQUFzQiJ9