"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _occamParsers = require("occam-parsers");
var _bnf = _interopRequireDefault(require("./bnf"));
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
var bnfLexer = _occamLexers.BNFLexer.fromNothing(), bnfParser = _occamParsers.BNFParser.fromNothing();
var CustomGrammarLexicalPatternParser = function(CommonParser) {
    _inherits(CustomGrammarLexicalPatternParser, _occamParsers.CommonParser);
    function CustomGrammarLexicalPatternParser() {
        _classCallCheck(this, CustomGrammarLexicalPatternParser);
        return _possibleConstructorReturn(this, _getPrototypeOf(CustomGrammarLexicalPatternParser).apply(this, arguments));
    }
    _createClass(CustomGrammarLexicalPatternParser, null, [
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), customGrammarLexicalPatternParser = CustomGrammarLexicalPatternParser.fromRules(rules);
                return customGrammarLexicalPatternParser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamParsers.CommonParser.fromRules(CustomGrammarLexicalPatternParser, rules);
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                return CustomGrammarLexicalPatternParser.fromBNF(_bnf.default);
            }
        }
    ]);
    return CustomGrammarLexicalPatternParser;
}(_occamParsers.CommonParser);
_defineProperty(CustomGrammarLexicalPatternParser, "bnf", _bnf.default);
exports.default = CustomGrammarLexicalPatternParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbUJORihibmYpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyID0gQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyLmZyb21SdWxlcyhydWxlcyk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlci5mcm9tQk5GKGJuZik7IH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLFlBQUE7SUFDQSxhQUFBO0lBR0EsSUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLFFBQUEsR0FOQSxZQUFBLFVBTUEsV0FBQSxJQUNBLFNBQUEsR0FOQSxhQUFBLFdBTUEsV0FBQTtJQUVBLGlDQUFBLFlBQUEsWUFBQTtjQUFBLGlDQUFBLEVBUkEsYUFBQTthQVFBLGlDQUFBOzhCQUFBLGlDQUFBO2dFQUFBLGlDQUFBOztpQkFBQSxpQ0FBQTs7QUFHQSxlQUFBLEdBQUEsT0FBQTs0QkFBQSxPQUFBLENBQUEsR0FBQTtvQkFDQSxNQUFBLEdBQUEsUUFBQSxDQUFBLGFBQUEsQ0FBQSxHQUFBLEdBQ0EsS0FBQSxHQUFBLFNBQUEsQ0FBQSxlQUFBLENBQUEsTUFBQSxHQUNBLGlDQUFBLEdBQUEsaUNBQUEsQ0FBQSxTQUFBLENBQUEsS0FBQTt1QkFFQSxpQ0FBQTs7OztBQUdBLGVBQUEsR0FBQSxTQUFBOzRCQUFBLFNBQUEsQ0FBQSxLQUFBO3VCQW5CQSxhQUFBLGNBbUJBLFNBQUEsQ0FBQSxpQ0FBQSxFQUFBLEtBQUE7Ozs7QUFFQSxlQUFBLEdBQUEsV0FBQTs0QkFBQSxXQUFBO3VCQUFBLGlDQUFBLENBQUEsT0FBQSxDQWxCQSxJQUFBOzs7O1dBS0EsaUNBQUE7RUFSQSxhQUFBO2dCQVFBLGlDQUFBLEdBQ0EsR0FBQSxHQU5BLElBQUE7a0JBS0EsaUNBQUEifQ==