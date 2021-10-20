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
                var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), plainParser = PlainParser.fromRules(rules);
                return plainParser;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbGFpbi9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgQk5GUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFpblBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIHBsYWluUGFyc2VyID0gUGxhaW5QYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgIHJldHVybiBwbGFpblBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tUnVsZXMoUGxhaW5QYXJzZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFBsYWluUGFyc2VyLmZyb21CTkYoYm5mKTsgfVxufVxuIl0sIm5hbWVzIjpbImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJQbGFpblBhcnNlciIsImZyb21CTkYiLCJibmYiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJwbGFpblBhcnNlciIsImZyb21SdWxlcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFYSxHQUFjLENBQWQsWUFBYztBQUNiLEdBQWUsQ0FBZixhQUFlO0FBR3pCLEdBQU8sQ0FBUCxJQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLEdBQUssQ0FBQ0EsUUFBUSxHQU5XLFlBQWMsVUFNYkMsV0FBVyxJQUMvQkMsU0FBUyxHQU5XLGFBQWUsV0FNYkQsV0FBVztJQUVsQkUsV0FBVyxpQkFBakIsUUFBUTtjQUFGQSxXQUFXO2FBQVhBLFdBQVc7OEJBQVhBLFdBQVc7Z0VBQVhBLFdBQVc7O2lCQUFYQSxXQUFXOztZQUd2QkMsR0FBTyxFQUFQQSxDQUFPO21CQUFkLFFBQVEsQ0FBREEsT0FBTyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsR0FBSyxDQUFDQyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ08sYUFBYSxDQUFDRixHQUFHLEdBQ25DRyxLQUFLLEdBQUdOLFNBQVMsQ0FBQ08sZUFBZSxDQUFDSCxNQUFNLEdBQ3hDSSxXQUFXLEdBQUdQLFdBQVcsQ0FBQ1EsU0FBUyxDQUFDSCxLQUFLO2dCQUUvQyxNQUFNLENBQUNFLFdBQVc7WUFDcEIsQ0FBQzs7O1lBRU1DLEdBQVMsRUFBVEEsQ0FBUzttQkFBaEIsUUFBUSxDQUFEQSxTQUFTLENBQUNILEtBQUssRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FuQlIsYUFBZSxjQW1CT0csU0FBUyxDQUFDUixXQUFXLEVBQUVLLEtBQUs7WUFBRyxDQUFDOzs7WUFFdkVQLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUNFLFdBQVcsQ0FBQ0MsT0FBTyxDQWxCbkMsSUFBTztZQWtCbUMsQ0FBQzs7O1dBYnRDRCxXQUFXO0VBUk4sYUFBZTtnQkFRcEJBLFdBQVcsRUFDdkJFLENBQUcsTUFOSSxJQUFPO2tCQUtGRixXQUFXIn0=