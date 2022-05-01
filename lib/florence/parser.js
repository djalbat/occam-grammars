"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultCustomGrammarBNF = exports.default = void 0;
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
exports.defaultCustomGrammarBNF = defaultCustomGrammarBNF;
exports.default = FlorenceParser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5cbmltcG9ydCB7IHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORiB9IGZyb20gXCIuL2RlZmF1bHRDdXN0b21HcmFtbWFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgbGV0IHsgYm5mIH0gPSBGbG9yZW5jZVBhcnNlcjtcblxuICAgIGJuZiA9IGAke2JuZn0gJHtkZWZhdWx0Q3VzdG9tR3JhbW1hckJORn1gOyAvLy9cblxuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gQ29tbW9uUGFyc2VyLmZyb21CTkYoRmxvcmVuY2VQYXJzZXIsIGJuZik7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJORihibmYpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tQk5GKEZsb3JlbmNlUGFyc2VyLCBibmYpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhGbG9yZW5jZVBhcnNlciwgcnVsZXMpOyB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORiA9IGBcbiAgICBcbiAgJHt0ZXJtQk5GfVxuICBcbiAgJHtleHByZXNzaW9uQk5GfVxuICBcbiAgJHtzdGF0ZW1lbnRCTkZ9XG4gIFxuICAke21ldGFzdGF0ZW1lbnRCTkZ9XG4gICAgXG5gO1xuXG4iXSwibmFtZXMiOlsiRmxvcmVuY2VQYXJzZXIiLCJmcm9tTm90aGluZyIsImJuZiIsImRlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwiZmxvcmVuY2VQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJleHByZXNzaW9uQk5GIiwidGVybUJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFZ0IsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBRTVCLElBQUEsSUFBTyxrQ0FBUCxPQUFPLEVBQUE7QUFFZ0QsSUFBQSxxQkFBd0IsV0FBeEIsd0JBQXdCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsQUFBTUEsY0FBYyxpQkFrQmhDLEFBbEJZOzs7YUFBTUEsY0FBYzs7Ozs7O1lBRzFCQyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsR0FBRztnQkFDbkIsSUFBSSxBQUFFQyxLQUFHLEdBQUtGLGNBQWMsQ0FBdEJFLEdBQUcsQUFBbUIsQUFBQztnQkFFN0JBLEtBQUcsR0FBRyxBQUFDLEVBQUEsQ0FBU0MsTUFBdUIsQ0FBOUJELEtBQUcsRUFBQyxHQUFDLENBQTBCLENBQUEsTUFBQSxDQUF4QkMsdUJBQXVCLENBQUUsQ0FBQyxDQUFDLEdBQUc7Z0JBRTlDLElBQU1DLGNBQWMsR0FBR0MsYUFBWSxhQUFBLENBQUNDLE9BQU8sQ0FBQ04sY0FBYyxFQUFFRSxLQUFHLENBQUMsQUFBQztnQkFFakUsT0FBT0UsY0FBYyxDQUFDO2FBQ3ZCOzs7WUFFTUUsR0FBTyxFQUFQQSxTQUFPO21CQUFkLFNBQU9BLE9BQU8sQ0FBQ0osR0FBRyxFQUFFO2dCQUFFLE9BQU9HLGFBQVksYUFBQSxDQUFDQyxPQUFPLENBQUNOLGNBQWMsRUFBRUUsR0FBRyxDQUFDLENBQUM7YUFBRTs7O1lBRWxFSyxHQUFTLEVBQVRBLFdBQVM7bUJBQWhCLFNBQU9BLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFO2dCQUFFLE9BQU9ILGFBQVksYUFBQSxDQUFDRSxTQUFTLENBQUNQLGNBQWMsRUFBRVEsS0FBSyxDQUFDLENBQUM7YUFBRTs7OztDQUNsRixDQWhCMkNILGFBQVksYUFBQSxDQWdCdkQ7QUFmQyxnQkFEbUJMLGNBQWMsRUFDMUJFLEtBQUcsRUFBR0EsSUFBRyxRQUFBLENBQUM7QUFpQlosSUFBTUMsdUJBQXVCLEdBQUcsQUFBQyxZQUV0QyxDQUVFTSxNQUFhLENBRmJDLHFCQUFPLFFBQUEsRUFBQyxVQUVWLENBQWdCLENBRWRDLE1BQVksQ0FGWkYscUJBQWEsY0FBQSxFQUFDLFVBRWhCLENBQWUsQ0FFYkcsTUFBZ0IsQ0FGaEJELHFCQUFZLGFBQUEsRUFBQyxVQUVmLENBQW1CLENBQUEsTUFFckIsQ0FGSUMscUJBQWdCLGlCQUFBLEVBQUMsVUFFckIsQ0FBQyxBQUFDO1FBVldULHVCQUF1QixHQUF2QkEsdUJBQXVCO2tCQWxCZkgsY0FBYyJ9