"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _entries = _interopRequireDefault(require("./entries"));
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
var TeXLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(TeXLexer, CommonLexer);
    var _super = _createSuper(TeXLexer);
    function TeXLexer() {
        _classCallCheck(this, TeXLexer);
        return _super.apply(this, arguments);
    }
    _createClass(TeXLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamLexers.CommonLexer.fromNothing(TeXLexer);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamLexers.CommonLexer.fromRules(TeXLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamLexers.CommonLexer.fromEntries(TeXLexer, entries);
            }
        }
    ]);
    return TeXLexer;
}(_occamLexers.CommonLexer);
exports.default = TeXLexer;
_defineProperty(TeXLexer, "entries", _entries.default);
_defineProperty(TeXLexer, "EndOfLineToken", _occamLexers.EndOfLineSignificantToken);
_defineProperty(TeXLexer, "WhitespaceToken", _occamLexers.WhitespaceToken);
_defineProperty(TeXLexer, "EndOfLineCommentToken", null);
_defineProperty(TeXLexer, "SingleLineCommentToken", null);
_defineProperty(TeXLexer, "RegularExpressionToken", null);
_defineProperty(TeXLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(TeXLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(TeXLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(TeXLexer, "SinglyQuotedStringLiteralToken", null);
_defineProperty(TeXLexer, "DoublyQuotedStringLiteralToken", null);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZVgvbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb21tb25MZXhlciwgV2hpdGVzcGFjZVRva2VuLCBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVYTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuO1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhUZVhMZXhlcik7IH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbVJ1bGVzKFRlWExleGVyLCBydWxlcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKFRlWExleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJUZVhMZXhlciIsImZyb21Ob3RoaW5nIiwiQ29tbW9uTGV4ZXIiLCJmcm9tUnVsZXMiLCJydWxlcyIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFd0UsSUFBQSxZQUFjLDBCQUFBO0FBRWxFLElBQUEsUUFBVywrQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUovQjtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBTWUsSUFBQSxBQUFNQSxRQUFRLGlCQ04zQixBRE1hO29DQU5mOzthQU1xQkEsUUFBUTt1Q0FON0I7Ozs7O1lBNkJTQyxHQUFXLGVBQUE7WUU3QnBCLE9GNkJFLFNBQU9BLFdBQVcsR0FBRztnQkFBRSxPQUFPQyxZQUFXLGFBQUNELFdBQVcsQ0FBQ0QsUUFBUSxDQUFDLENBQUM7YUFBRTs7O1lBRTNERyxHQUFTLGFBQUE7WUUvQmxCLE9GK0JFLFNBQU9BLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFO2dCQUFFLE9BQU9GLFlBQVcsYUFBQ0MsU0FBUyxDQUFDSCxRQUFRLEVBQUVJLEtBQUssQ0FBQyxDQUFDO2FBQUU7OztZQUVuRUMsR0FBVyxlQUFBO1lFakNwQixPRmlDRSxTQUFPQSxXQUFXLENBQUNDLE9BQU8sRUFBRTtnQkFBRSxPQUFPSixZQUFXLGFBQUNHLFdBQVcsQ0FBQ0wsUUFBUSxFQUFFTSxPQUFPLENBQUMsQ0FBQzthQUFFOztNQWpDcEY7O0NBa0NDLENBNUJxQ0osWUFBVyxhQTRCaEQ7a0JBNUJvQkYsUUFBUSxBQU43QjtBQU9FLGdCQURtQkEsUUFBUSxhQUNWTSxRQUFPLFNBQUMsQUFQM0I7QUFTRSxnQkFIbUJOLFFBQVEsb0JBR0hPLFlBQXlCLDJCQUFDLEFBVHBEO0FBV0UsZ0JBTG1CUCxRQUFRLHFCQUtGUSxZQUFlLGlCQUFDLEFBWDNDO0FBYUUsZ0JBUG1CUixRQUFRLDJCQU9JLElBQUksQ0FBQyxBQWJ0QztBQWVFLGdCQVRtQkEsUUFBUSw0QkFTSyxJQUFJLENBQUMsQUFmdkM7QUFpQkUsZ0JBWG1CQSxRQUFRLDRCQVdLLElBQUksQ0FBQyxBQWpCdkM7QUFtQkUsZ0JBYm1CQSxRQUFRLGdDQWFTLElBQUksQ0FBQyxBQW5CM0M7QUFxQkUsZ0JBZm1CQSxRQUFRLGtDQWVXLElBQUksQ0FBQyxBQXJCN0M7QUF1QkUsZ0JBakJtQkEsUUFBUSxtQ0FpQlksSUFBSSxDQUFDLEFBdkI5QztBQXlCRSxnQkFuQm1CQSxRQUFRLG9DQW1CYSxJQUFJLENBQUMsQUF6Qi9DO0FBMkJFLGdCQXJCbUJBLFFBQVEsb0NBcUJhLElBQUksQ0FBQyxBQTNCL0MifQ==