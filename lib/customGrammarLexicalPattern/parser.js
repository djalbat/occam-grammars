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
var CustomGrammarLexicalPatternParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(CustomGrammarLexicalPatternParser, CommonParser);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbUJORihibmYpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyID0gQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyLmZyb21SdWxlcyhydWxlcyk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlci5mcm9tQk5GKGJuZik7IH1cbn1cbiJdLCJuYW1lcyI6WyJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyIiwiZnJvbUJORiIsImJuZiIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsImN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciIsImZyb21SdWxlcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFYSxHQUFjLENBQWQsWUFBYztBQUNiLEdBQWUsQ0FBZixhQUFlO0FBR3pCLEdBQU8sQ0FBUCxJQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLEdBQUssQ0FBQ0EsUUFBUSxHQU5XLFlBQWMsVUFNYkMsV0FBVyxJQUMvQkMsU0FBUyxHQU5XLGFBQWUsV0FNYkQsV0FBVztJQUVsQkUsaUNBQWlDLGlCQUF2QyxRQUFRO2NBQUZBLGlDQUFpQzthQUFqQ0EsaUNBQWlDOzhCQUFqQ0EsaUNBQWlDO2dFQUFqQ0EsaUNBQWlDOztpQkFBakNBLGlDQUFpQzs7WUFHN0NDLEdBQU8sRUFBUEEsQ0FBTzttQkFBZCxRQUFRLENBQURBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLENBQUM7Z0JBQ25CLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTixRQUFRLENBQUNPLGFBQWEsQ0FBQ0YsR0FBRyxHQUNuQ0csS0FBSyxHQUFHTixTQUFTLENBQUNPLGVBQWUsQ0FBQ0gsTUFBTSxHQUN4Q0ksaUNBQWlDLEdBQUdQLGlDQUFpQyxDQUFDUSxTQUFTLENBQUNILEtBQUs7Z0JBRTNGLE1BQU0sQ0FBQ0UsaUNBQWlDO1lBQzFDLENBQUM7OztZQUVNQyxHQUFTLEVBQVRBLENBQVM7bUJBQWhCLFFBQVEsQ0FBREEsU0FBUyxDQUFDSCxLQUFLLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBbkJSLGFBQWUsY0FtQk9HLFNBQVMsQ0FBQ1IsaUNBQWlDLEVBQUVLLEtBQUs7WUFBRyxDQUFDOzs7WUFFN0ZQLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUNFLGlDQUFpQyxDQUFDQyxPQUFPLENBbEJ6RCxJQUFPO1lBa0J5RCxDQUFDOzs7V0FiNURELGlDQUFpQztFQVI1QixhQUFlO2dCQVFwQkEsaUNBQWlDLEVBQzdDRSxDQUFHLE1BTkksSUFBTztrQkFLRkYsaUNBQWlDIn0=