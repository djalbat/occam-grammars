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
var CustomGrammarBNFLexer = function(BNFLexer) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyQk5GL2xleGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hckJORkxleGVyIGV4dGVuZHMgQk5GTGV4ZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mTGV4ZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GTGV4ZXIgPSBuZXcgQ3VzdG9tR3JhbW1hckJORkxleGVyKHJ1bGVzKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyQk5GTGV4ZXI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVhLFlBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbEIscUJBQXFCO2NBQXJCLHFCQUFxQjthQUFyQixxQkFBcUI7OEJBQXJCLHFCQUFxQjtnRUFBckIscUJBQXFCOztpQkFBckIscUJBQXFCOztZQUNqQyxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO29CQUNWLFFBQVEsR0FKTyxZQUFjLFVBSVQsV0FBVyxJQUMvQixLQUFLLEdBQUcsUUFBUSxDQUFDLFFBQVEsSUFDekIscUJBQXFCLE9BQU8scUJBQXFCLENBQUMsS0FBSzt1QkFFdEQscUJBQXFCOzs7O1dBTlgscUJBQXFCO0VBRmpCLFlBQWM7a0JBRWxCLHFCQUFxQiJ9