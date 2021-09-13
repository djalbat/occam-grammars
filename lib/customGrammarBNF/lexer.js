"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
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
var CustomGrammarBNFLexer = /*#__PURE__*/ function(BNFLexer) {
    _inherits(CustomGrammarBNFLexer, BNFLexer);
    function CustomGrammarBNFLexer() {
        _classCallCheck(this, CustomGrammarBNFLexer);
        return _possibleConstructorReturn(this, _getPrototypeOf(CustomGrammarBNFLexer).apply(this, arguments));
    }
    _createClass(CustomGrammarBNFLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var bnfLexer = _occamLexers.BNFLexer.fromNothing(), rules = bnfLexer.getRules(), customGrammarBNFLexer = new CustomGrammarBNFLexer(rules);
                return customGrammarBNFLexer;
            }
        }
    ]);
    return CustomGrammarBNFLexer;
}(_occamLexers.BNFLexer);
exports.default = CustomGrammarBNFLexer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyQk5GL2xleGVyLmpzIl0sIm5hbWVzIjpbIkJORkxleGVyIiwiQ3VzdG9tR3JhbW1hckJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZMZXhlciIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJjdXN0b21HcmFtbWFyQk5GTGV4ZXIiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWEsR0FBYyxDQUFkLFlBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbEIscUJBQXFCLGlCQUEzQixRQUFRO2NBQUYscUJBQXFCO2FBQXJCLHFCQUFxQjs4QkFBckIscUJBQXFCO2dFQUFyQixxQkFBcUI7O2lCQUFyQixxQkFBcUI7O1lBQ2pDLEdBQVcsR0FBWCxXQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQyxRQUFRLEdBSk8sWUFBYyxVQUlULFdBQVcsSUFDL0IsS0FBSyxHQUFHLFFBQVEsQ0FBQyxRQUFRLElBQ3pCLHFCQUFxQixHQUFHLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLO2dCQUU3RCxNQUFNLENBQUMscUJBQXFCO1lBQzlCLENBQUM7OztXQVBrQixxQkFBcUI7RUFGakIsWUFBYztrQkFFbEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyQk5GTGV4ZXIgZXh0ZW5kcyBCTkZMZXhlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcnVsZXMgPSBibmZMZXhlci5nZXRSdWxlcygpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZMZXhlciA9IG5ldyBDdXN0b21HcmFtbWFyQk5GTGV4ZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZMZXhlcjtcbiAgfVxufVxuIl19