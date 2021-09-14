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
var TeXParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(TeXParser, CommonParser);
    function TeXParser() {
        _classCallCheck(this, TeXParser);
        return _possibleConstructorReturn(this, _getPrototypeOf(TeXParser).apply(this, arguments));
    }
    _createClass(TeXParser, null, [
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), teXParser = TeXParser.fromRules(rules);
                return teXParser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamParsers.CommonParser.fromRules(TeXParser, rules);
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                return TeXParser.fromBNF(_bnf.default);
            }
        }
    ]);
    return TeXParser;
}(_occamParsers.CommonParser);
_defineProperty(TeXParser, "bnf", _bnf.default);
exports.default = TeXParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZVgvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVYUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbUJORihibmYpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgdGVYUGFyc2VyID0gVGVYUGFyc2VyLmZyb21SdWxlcyhydWxlcyk7XG5cbiAgICByZXR1cm4gdGVYUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhUZVhQYXJzZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFRlWFBhcnNlci5mcm9tQk5GKGJuZik7IH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVhLEdBQWMsQ0FBZCxZQUFjO0FBQ2IsR0FBZSxDQUFmLGFBQWU7QUFHekIsR0FBTyxDQUFQLElBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsR0FBSyxDQUFDLFFBQVEsR0FOVyxZQUFjLFVBTWIsV0FBVyxJQUMvQixTQUFTLEdBTlcsYUFBZSxXQU1iLFdBQVc7SUFFbEIsU0FBUztjQUFULFNBQVM7YUFBVCxTQUFTOzhCQUFULFNBQVM7Z0VBQVQsU0FBUzs7aUJBQVQsU0FBUzs7WUFHckIsR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNuQixHQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUNuQyxLQUFLLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQ3hDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUs7dUJBRXBDLFNBQVM7WUFDbEIsQ0FBQzs7O1lBRU0sR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO3VCQW5CRCxhQUFlLGNBbUJPLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSztZQUFHLENBQUM7OztZQUVyRSxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLEdBQUcsQ0FBQzt1QkFBUSxTQUFTLENBQUMsT0FBTyxDQWxCakMsSUFBTztZQWtCaUMsQ0FBQzs7O1dBYnBDLFNBQVM7RUFSSixhQUFlO2dCQVFwQixTQUFTLEdBQ3JCLEdBQUcsR0FOSSxJQUFPO2tCQUtGLFNBQVMifQ==