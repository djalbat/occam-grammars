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
var PlainParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(PlainParser, CommonParser);
    function PlainParser() {
        _classCallCheck(this, PlainParser);
        return _possibleConstructorReturn(this, _getPrototypeOf(PlainParser).apply(this, arguments));
    }
    _createClass(PlainParser, null, [
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), readmeParser = PlainParser.fromRules(rules);
                return readmeParser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamParsers.CommonParser.fromRules(PlainParser, rules);
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                return PlainParser.fromBNF(_bnf.default);
            }
        }
    ]);
    return PlainParser;
}(_occamParsers.CommonParser);
_defineProperty(PlainParser, "bnf", _bnf.default);
exports.default = PlainParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWFkbWUvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhaW5QYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICByZWFkbWVQYXJzZXIgPSBQbGFpblBhcnNlci5mcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgcmV0dXJuIHJlYWRtZVBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tUnVsZXMoUGxhaW5QYXJzZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFBsYWluUGFyc2VyLmZyb21CTkYoYm5mKTsgfVxufVxuIl0sIm5hbWVzIjpbImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJQbGFpblBhcnNlciIsImZyb21CTkYiLCJibmYiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJyZWFkbWVQYXJzZXIiLCJmcm9tUnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWEsR0FBYyxDQUFkLFlBQWM7QUFDYixHQUFlLENBQWYsYUFBZTtBQUd6QixHQUFPLENBQVAsSUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixHQUFLLENBQUNBLFFBQVEsR0FOVyxZQUFjLFVBTWJDLFdBQVcsSUFDL0JDLFNBQVMsR0FOVyxhQUFlLFdBTWJELFdBQVc7SUFFbEJFLFdBQVcsaUJBQWpCLFFBQVE7Y0FBRkEsV0FBVzthQUFYQSxXQUFXOzhCQUFYQSxXQUFXO2dFQUFYQSxXQUFXOztpQkFBWEEsV0FBVzs7WUFHdkJDLEdBQU8sRUFBUEEsQ0FBTzttQkFBZCxRQUFRLENBQURBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLENBQUM7Z0JBQ25CLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTixRQUFRLENBQUNPLGFBQWEsQ0FBQ0YsR0FBRyxHQUNuQ0csS0FBSyxHQUFHTixTQUFTLENBQUNPLGVBQWUsQ0FBQ0gsTUFBTSxHQUN4Q0ksWUFBWSxHQUFHUCxXQUFXLENBQUNRLFNBQVMsQ0FBQ0gsS0FBSztnQkFFaEQsTUFBTSxDQUFDRSxZQUFZO1lBQ3JCLENBQUM7OztZQUVNQyxHQUFTLEVBQVRBLENBQVM7bUJBQWhCLFFBQVEsQ0FBREEsU0FBUyxDQUFDSCxLQUFLLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBbkJSLGFBQWUsY0FtQk9HLFNBQVMsQ0FBQ1IsV0FBVyxFQUFFSyxLQUFLO1lBQUcsQ0FBQzs7O1lBRXZFUCxHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxHQUFHLENBQUM7Z0JBQUMsTUFBTSxDQUFDRSxXQUFXLENBQUNDLE9BQU8sQ0FsQm5DLElBQU87WUFrQm1DLENBQUM7OztXQWJ0Q0QsV0FBVztFQVJOLGFBQWU7Z0JBUXBCQSxXQUFXLEVBQ3ZCRSxDQUFHLE1BTkksSUFBTztrQkFLRkYsV0FBVyJ9