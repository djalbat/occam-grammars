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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZVgvcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkJORkxleGVyIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiYm5mIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIlRlWFBhcnNlciIsImZyb21CTkYiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJ0ZVhQYXJzZXIiLCJmcm9tUnVsZXMiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWEsR0FBYyxDQUFkLFlBQWM7QUFDYixHQUFlLENBQWYsYUFBZTtBQUd6QixHQUFPLENBQVAsSUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixHQUFLLENBQUMsUUFBUSxHQU5XLFlBQWMsVUFNYixXQUFXLElBQy9CLFNBQVMsR0FOVyxhQUFlLFdBTWIsV0FBVztJQUVsQixTQUFTLGlCQUFmLFFBQVE7Y0FBRixTQUFTO2FBQVQsU0FBUzs4QkFBVCxTQUFTO2dFQUFULFNBQVM7O2lCQUFULFNBQVM7O1lBR3JCLEdBQU8sR0FBUCxPQUFPO21CQUFkLFFBQVEsQ0FBRCxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ25CLEdBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQ25DLEtBQUssR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FDeEMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSztnQkFFM0MsTUFBTSxDQUFDLFNBQVM7WUFDbEIsQ0FBQzs7O1lBRU0sR0FBUyxHQUFULFNBQVM7bUJBQWhCLFFBQVEsQ0FBRCxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQW5CUixhQUFlLGNBbUJPLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSztZQUFHLENBQUM7OztZQUVyRSxHQUFXLEdBQVgsV0FBVzttQkFBbEIsUUFBUSxDQUFELFdBQVcsR0FBRyxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQWxCakMsSUFBTztZQWtCaUMsQ0FBQzs7O1dBYnBDLFNBQVM7RUFSSixhQUFlO2dCQVFwQixTQUFTLEdBQ3JCLEdBQUcsR0FOSSxJQUFPO2tCQUtGLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlWFBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIHRlWFBhcnNlciA9IFRlWFBhcnNlci5mcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgcmV0dXJuIHRlWFBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tUnVsZXMoVGVYUGFyc2VyLCBydWxlcyk7IH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBUZVhQYXJzZXIuZnJvbUJORihibmYpOyB9XG59XG4iXX0=