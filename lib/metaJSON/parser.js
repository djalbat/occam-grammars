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
var MetaJSONParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(MetaJSONParser, CommonParser);
    function MetaJSONParser() {
        _classCallCheck(this, MetaJSONParser);
        return _possibleConstructorReturn(this, _getPrototypeOf(MetaJSONParser).apply(this, arguments));
    }
    _createClass(MetaJSONParser, null, [
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), metaJSONParser = MetaJSONParser.fromRules(rules);
                return metaJSONParser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamParsers.CommonParser.fromRules(MetaJSONParser, rules);
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                return MetaJSONParser.fromBNF(_bnf.default);
            }
        }
    ]);
    return MetaJSONParser;
}(_occamParsers.CommonParser);
_defineProperty(MetaJSONParser, "bnf", _bnf.default);
exports.default = MetaJSONParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXRhSlNPTi9wYXJzZXIuanMiXSwibmFtZXMiOlsiQk5GTGV4ZXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJibmYiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiTWV0YUpTT05QYXJzZXIiLCJmcm9tQk5GIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwibWV0YUpTT05QYXJzZXIiLCJmcm9tUnVsZXMiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWEsR0FBYyxDQUFkLFlBQWM7QUFDYixHQUFlLENBQWYsYUFBZTtBQUd6QixHQUFPLENBQVAsSUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixHQUFLLENBQUMsUUFBUSxHQU5XLFlBQWMsVUFNYixXQUFXLElBQy9CLFNBQVMsR0FOVyxhQUFlLFdBTWIsV0FBVztJQUVsQixjQUFjLGlCQUFwQixRQUFRO2NBQUYsY0FBYzthQUFkLGNBQWM7OEJBQWQsY0FBYztnRUFBZCxjQUFjOztpQkFBZCxjQUFjOztZQUcxQixHQUFPLEdBQVAsT0FBTzttQkFBZCxRQUFRLENBQUQsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNuQixHQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUNuQyxLQUFLLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQ3hDLGNBQWMsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUs7Z0JBRXJELE1BQU0sQ0FBQyxjQUFjO1lBQ3ZCLENBQUM7OztZQUVNLEdBQVMsR0FBVCxTQUFTO21CQUFoQixRQUFRLENBQUQsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FuQlIsYUFBZSxjQW1CTyxTQUFTLENBQUMsY0FBYyxFQUFFLEtBQUs7WUFBRyxDQUFDOzs7WUFFMUUsR0FBVyxHQUFYLFdBQVc7bUJBQWxCLFFBQVEsQ0FBRCxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FsQnRDLElBQU87WUFrQnNDLENBQUM7OztXQWJ6QyxjQUFjO0VBUlQsYUFBZTtnQkFRcEIsY0FBYyxHQUMxQixHQUFHLEdBTkksSUFBTztrQkFLRixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgQk5GUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhSlNPTlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIG1ldGFKU09OUGFyc2VyID0gTWV0YUpTT05QYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgIHJldHVybiBtZXRhSlNPTlBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tUnVsZXMoTWV0YUpTT05QYXJzZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIE1ldGFKU09OUGFyc2VyLmZyb21CTkYoYm5mKTsgfVxufVxuIl19