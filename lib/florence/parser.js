"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return FlorenceParser;
    },
    defaultCustomGrammarBNF: function() {
        return defaultCustomGrammarBNF;
    }
});
var _occamParsers = require("occam-parsers");
var _bnf = /*#__PURE__*/ _interopRequireDefault(require("./bnf"));
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var FlorenceParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(FlorenceParser, CommonParser);
    var _super = _createSuper(FlorenceParser);
    function FlorenceParser() {
        _classCallCheck(this, FlorenceParser);
        return _super.apply(this, arguments);
    }
    _createClass(FlorenceParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var _$bnf = FlorenceParser.bnf;
                _$bnf = "".concat(_$bnf, " ").concat(defaultCustomGrammarBNF); ///
                var florenceParser = _occamParsers.CommonParser.fromBNF(FlorenceParser, _$bnf);
                return florenceParser;
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                return _occamParsers.CommonParser.fromBNF(FlorenceParser, bnf);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamParsers.CommonParser.fromRules(FlorenceParser, rules);
            }
        }
    ]);
    return FlorenceParser;
}(_occamParsers.CommonParser);
_defineProperty(FlorenceParser, "bnf", _bnf.default);
var defaultCustomGrammarBNF = "\n    \n  ".concat(_defaultCustomGrammar.termBNF, "\n  \n  ").concat(_defaultCustomGrammar.expressionBNF, "\n  \n  ").concat(_defaultCustomGrammar.statementBNF, "\n  \n  ").concat(_defaultCustomGrammar.metastatementBNF, "\n    \n");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5cbmltcG9ydCB7IHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORiB9IGZyb20gXCIuL2RlZmF1bHRDdXN0b21HcmFtbWFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgbGV0IHsgYm5mIH0gPSBGbG9yZW5jZVBhcnNlcjtcblxuICAgIGJuZiA9IGAke2JuZn0gJHtkZWZhdWx0Q3VzdG9tR3JhbW1hckJORn1gOyAvLy9cblxuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gQ29tbW9uUGFyc2VyLmZyb21CTkYoRmxvcmVuY2VQYXJzZXIsIGJuZik7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJORihibmYpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tQk5GKEZsb3JlbmNlUGFyc2VyLCBibmYpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhGbG9yZW5jZVBhcnNlciwgcnVsZXMpOyB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORiA9IGBcbiAgICBcbiAgJHt0ZXJtQk5GfVxuICBcbiAgJHtleHByZXNzaW9uQk5GfVxuICBcbiAgJHtzdGF0ZW1lbnRCTkZ9XG4gIFxuICAke21ldGFzdGF0ZW1lbnRCTkZ9XG4gICAgXG5gO1xuXG4iXSwibmFtZXMiOlsiRmxvcmVuY2VQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsImZyb21Ob3RoaW5nIiwiYm5mIiwiZmxvcmVuY2VQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJleHByZXNzaW9uQk5GIiwidGVybUJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7O2VBUVFBLGNBQWM7O0lBa0J0QkMsdUJBQXVCO2VBQXZCQSx1QkFBdUI7Ozs0QkF4QlAsZUFBZTt3REFFNUIsT0FBTztvQ0FFZ0Qsd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEFBQU1ELGNBQWMsaUJBa0JoQyxBQWxCWTs7O2FBQU1BLGNBQWM7Ozs7OztZQUcxQkUsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLEdBQUc7Z0JBQ25CLElBQUksQUFBRUMsS0FBRyxHQUFLSCxjQUFjLENBQXRCRyxHQUFHLEFBQW1CLEFBQUM7Z0JBRTdCQSxLQUFHLEdBQUcsQUFBQyxFQUFBLENBQVNGLE1BQXVCLENBQTlCRSxLQUFHLEVBQUMsR0FBQyxDQUEwQixDQUFBLE1BQUEsQ0FBeEJGLHVCQUF1QixDQUFFLENBQUMsQ0FBQyxHQUFHO2dCQUU5QyxJQUFNRyxjQUFjLEdBQUdDLGFBQVksYUFBQSxDQUFDQyxPQUFPLENBQUNOLGNBQWMsRUFBRUcsS0FBRyxDQUFDLEFBQUM7Z0JBRWpFLE9BQU9DLGNBQWMsQ0FBQzthQUN2Qjs7O1lBRU1FLEdBQU8sRUFBUEEsU0FBTzttQkFBZCxTQUFPQSxPQUFPLENBQUNILEdBQUcsRUFBRTtnQkFBRSxPQUFPRSxhQUFZLGFBQUEsQ0FBQ0MsT0FBTyxDQUFDTixjQUFjLEVBQUVHLEdBQUcsQ0FBQyxDQUFDO2FBQUU7OztZQUVsRUksR0FBUyxFQUFUQSxXQUFTO21CQUFoQixTQUFPQSxTQUFTLENBQUNDLEtBQUssRUFBRTtnQkFBRSxPQUFPSCxhQUFZLGFBQUEsQ0FBQ0UsU0FBUyxDQUFDUCxjQUFjLEVBQUVRLEtBQUssQ0FBQyxDQUFDO2FBQUU7Ozs7Q0FDbEYsQ0FoQjJDSCxhQUFZLGFBQUEsQ0FnQnZEO0FBZkMsZ0JBRG1CTCxjQUFjLEVBQzFCRyxLQUFHLEVBQUdBLElBQUcsUUFBQSxDQUFDO0FBaUJaLElBQU1GLHVCQUF1QixHQUFHLEFBQUMsWUFFdEMsQ0FFRVEsTUFBYSxDQUZiQyxxQkFBTyxRQUFBLEVBQUMsVUFFVixDQUFnQixDQUVkQyxNQUFZLENBRlpGLHFCQUFhLGNBQUEsRUFBQyxVQUVoQixDQUFlLENBRWJHLE1BQWdCLENBRmhCRCxxQkFBWSxhQUFBLEVBQUMsVUFFZixDQUFtQixDQUFBLE1BRXJCLENBRklDLHFCQUFnQixpQkFBQSxFQUFDLFVBRXJCLENBQUMsQUFBQyJ9