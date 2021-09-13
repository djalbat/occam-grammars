"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _occamParsers = require("occam-parsers");
var _bnf = _interopRequireDefault(require("./bnf"));
var _defaultCustomGrammar = require("./defaultCustomGrammar");
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
var FlorenceParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(FlorenceParser, CommonParser);
    function FlorenceParser() {
        _classCallCheck(this, FlorenceParser);
        return _possibleConstructorReturn(this, _getPrototypeOf(FlorenceParser).apply(this, arguments));
    }
    _createClass(FlorenceParser, null, [
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                bnf = "\n    \n      ".concat(bnf, "\n      \n      ").concat(_defaultCustomGrammar.termBNF, "\n      \n      ").concat(_defaultCustomGrammar.expressionBNF, "\n      \n      ").concat(_defaultCustomGrammar.statementBNF, "\n      \n      ").concat(_defaultCustomGrammar.metastatementBNF, "\n      \n    "); ///
                var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), florenceParser = FlorenceParser.fromRules(rules);
                return florenceParser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamParsers.CommonParser.fromRules(FlorenceParser, rules);
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                return FlorenceParser.fromBNF(_bnf.default);
            }
        }
    ]);
    return FlorenceParser;
}(_occamParsers.CommonParser);
_defineProperty(FlorenceParser, "bnf", _bnf.default);
exports.default = FlorenceParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsiQk5GTGV4ZXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJibmYiLCJ0ZXJtQk5GIiwiZXhwcmVzc2lvbkJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiRmxvcmVuY2VQYXJzZXIiLCJmcm9tQk5GIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tUnVsZXMiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWEsR0FBYyxDQUFkLFlBQWM7QUFDYixHQUFlLENBQWYsYUFBZTtBQUd6QixHQUFPLENBQVAsSUFBTztBQUVnRCxHQUF3QixDQUF4QixxQkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0YsR0FBSyxDQUFDLFFBQVEsR0FSVyxZQUFjLFVBUWIsV0FBVyxJQUMvQixTQUFTLEdBUlcsYUFBZSxXQVFiLFdBQVc7SUFFbEIsY0FBYyxpQkFBcEIsUUFBUTtjQUFGLGNBQWM7YUFBZCxjQUFjOzhCQUFkLGNBQWM7Z0VBQWQsY0FBYzs7aUJBQWQsY0FBYzs7WUFHMUIsR0FBTyxHQUFQLE9BQU87bUJBQWQsUUFBUSxDQUFELE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsR0FBRyxJQUFJLGNBRUwsRUFFRSxNQUFPLENBRlAsR0FBRyxHQUFDLGdCQUVOLEdBRUUsTUFBYSxDQWZrRCxxQkFBd0IsV0FhL0UsZ0JBRVYsR0FFRSxNQUFZLENBakJtRCxxQkFBd0IsaUJBZXpFLGdCQUVoQixHQUVFLE1BQWdCLENBbkIrQyxxQkFBd0IsZ0JBaUIxRSxnQkFFZixHQUFtQixNQUVyQixDQXJCbUUscUJBQXdCLG9CQW1CdEUsY0FFckIsR0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRU4sR0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FDbkMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUN4QyxjQUFjLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLO2dCQUVyRCxNQUFNLENBQUMsY0FBYztZQUN2QixDQUFDOzs7WUFFTSxHQUFTLEdBQVQsU0FBUzttQkFBaEIsUUFBUSxDQUFELFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBbkNSLGFBQWUsY0FtQ08sU0FBUyxDQUFDLGNBQWMsRUFBRSxLQUFLO1lBQUcsQ0FBQzs7O1lBRTFFLEdBQVcsR0FBWCxXQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxHQUFHLENBQUM7Z0JBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBbEN0QyxJQUFPO1lBa0NzQyxDQUFDOzs7V0EzQnpDLGNBQWM7RUFWVCxhQUFlO2dCQVVwQixjQUFjLEdBQzFCLEdBQUcsR0FSSSxJQUFPO2tCQU9GLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcblxuaW1wb3J0IHsgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GIH0gZnJvbSBcIi4vZGVmYXVsdEN1c3RvbUdyYW1tYXJcIjtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbUJORihibmYpIHtcbiAgICBibmYgPSBgXG4gICAgXG4gICAgICAke2JuZn1cbiAgICAgIFxuICAgICAgJHt0ZXJtQk5GfVxuICAgICAgXG4gICAgICAke2V4cHJlc3Npb25CTkZ9XG4gICAgICBcbiAgICAgICR7c3RhdGVtZW50Qk5GfVxuICAgICAgXG4gICAgICAke21ldGFzdGF0ZW1lbnRCTkZ9XG4gICAgICBcbiAgICBgOyAvLy9cblxuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21SdWxlcyhydWxlcyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKEZsb3JlbmNlUGFyc2VyLCBydWxlcyk7IH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBGbG9yZW5jZVBhcnNlci5mcm9tQk5GKGJuZik7IH1cbn1cbiJdfQ==