"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
                return _occamParsers.CommonParser.fromNothing(FlorenceParser);
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                bnf = "\n    \n      ".concat(bnf, "\n      \n      ").concat(_defaultCustomGrammar.termBNF, "\n      \n      ").concat(_defaultCustomGrammar.expressionBNF, "\n      \n      ").concat(_defaultCustomGrammar.statementBNF, "\n      \n      ").concat(_defaultCustomGrammar.metastatementBNF, "\n      \n    "); ///
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
exports.default = FlorenceParser;
_defineProperty(FlorenceParser, "bnf", _bnf.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9wYXJzZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuXG5pbXBvcnQgeyB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYgfSBmcm9tIFwiLi9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21Ob3RoaW5nKEZsb3JlbmNlUGFyc2VyKTsgfVxuXG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGJuZiA9IGBcbiAgICBcbiAgICAgICR7Ym5mfVxuICAgICAgXG4gICAgICAke3Rlcm1CTkZ9XG4gICAgICBcbiAgICAgICR7ZXhwcmVzc2lvbkJORn1cbiAgICAgIFxuICAgICAgJHtzdGF0ZW1lbnRCTkZ9XG4gICAgICBcbiAgICAgICR7bWV0YXN0YXRlbWVudEJORn1cbiAgICAgIFxuICAgIGA7IC8vL1xuXG4gICAgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tQk5GKEZsb3JlbmNlUGFyc2VyLCBibmYpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhGbG9yZW5jZVBhcnNlciwgcnVsZXMpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIl0sIm5hbWVzIjpbIkZsb3JlbmNlUGFyc2VyIiwiZnJvbU5vdGhpbmciLCJDb21tb25QYXJzZXIiLCJmcm9tQk5GIiwiYm5mIiwidGVybUJORiIsImV4cHJlc3Npb25CTkYiLCJzdGF0ZW1lbnRCTkYiLCJtZXRhc3RhdGVtZW50Qk5GIiwiZnJvbVJ1bGVzIiwicnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFNkIsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBRTVCLElBQUEsSUFBTyxrQ0FBUCxPQUFPLEVBQUE7QUFFZ0QsSUFBQSxxQkFBd0IsV0FBeEIsd0JBQXdCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs4REFOL0Y7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQVFlLElBQUEsQUFBTUEsY0FBYyxpQkNSaEMsQURRWTsyQ0FSZjs7YUFRcUJBLGNBQWM7NkNBUm5DOzs7OztZQVdTQyxHQUFXLEVBQVhBLGFBQVc7WUVYcEIsT0ZXRSxTQUFPQSxXQUFXLEdBQUc7Z0JBQUUsT0FBT0MsYUFBWSxjQUFDRCxXQUFXLENBQUNELGNBQWMsQ0FBQyxDQUFDO2FBQUU7OztZQUVsRUcsR0FBTyxFQUFQQSxTQUFPO1lFYmhCLE9GYUUsU0FBT0EsT0FBTyxDQUFDQyxHQUFHLEVBQUU7Z0JBQ2xCQSxHQUFHLEdBQUcsQUFBQyxnQkFFTCxDQUVFQyxNQUFPLENBRlBELEdBQUcsRUFBQyxrQkFFTixDQUFVLENBRVJFLE1BQWEsQ0FGYkQscUJBQU8sVUFBQyxrQkFFVixDQUFnQixDQUVkRSxNQUFZLENBRlpELHFCQUFhLGdCQUFDLGtCQUVoQixDQUFlLENBRWJFLE1BQWdCLENBRmhCRCxxQkFBWSxlQUFDLGtCQUVmLENBQW1CLENBQUEsTUFFckIsQ0FGSUMscUJBQWdCLG1CQUFDLGdCQUVyQixDQUFDLENBQUMsQ0FBQyxHQUFHO2dCQUVOLE9BQU9OLGFBQVksY0FBQ0MsT0FBTyxDQUFDSCxjQUFjLEVBQUVJLEdBQUcsQ0FBQyxDQUFDO2FBQ2xEOzs7WUFFTUssR0FBUyxFQUFUQSxXQUFTO1lFL0JsQixPRitCRSxTQUFPQSxTQUFTLENBQUNDLEtBQUssRUFBRTtnQkFBRSxPQUFPUixhQUFZLGNBQUNPLFNBQVMsQ0FBQ1QsY0FBYyxFQUFFVSxLQUFLLENBQUMsQ0FBQzthQUFFOztNQS9CbkY7O0NBZ0NDLENBeEIyQ1IsYUFBWSxjQXdCdkQ7a0JBeEJvQkYsY0FBYyxBQVJuQztBQVNFLGdCQURtQkEsY0FBYyxFQUMxQkksS0FBRyxFQUFHQSxJQUFHLFNBQUMsQUFUbkIifQ==