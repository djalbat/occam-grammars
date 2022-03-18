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
var ReadmeLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(ReadmeLexer, CommonLexer);
    var _super = _createSuper(ReadmeLexer);
    function ReadmeLexer() {
        _classCallCheck(this, ReadmeLexer);
        return _super.apply(this, arguments);
    }
    _createClass(ReadmeLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamLexers.CommonLexer.fromNothing(ReadmeLexer);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamLexers.CommonLexer.fromRules(ReadmeLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamLexers.CommonLexer.fromEntries(ReadmeLexer, entries);
            }
        }
    ]);
    return ReadmeLexer;
}(_occamLexers.CommonLexer);
exports.default = ReadmeLexer;
_defineProperty(ReadmeLexer, "entries", _entries.default);
_defineProperty(ReadmeLexer, "EndOfLineToken", _occamLexers.EndOfLineSignificantToken);
_defineProperty(ReadmeLexer, "WhitespaceToken", _occamLexers.WhitespaceToken);
_defineProperty(ReadmeLexer, "EndOfLineCommentToken", null);
_defineProperty(ReadmeLexer, "SingleLineCommentToken", null);
_defineProperty(ReadmeLexer, "RegularExpressionToken", null);
_defineProperty(ReadmeLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(ReadmeLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(ReadmeLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(ReadmeLexer, "SinglyQuotedStringLiteralToken", null);
_defineProperty(ReadmeLexer, "DoublyQuotedStringLiteralToken", null);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWFkbWUvbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb21tb25MZXhlciwgV2hpdGVzcGFjZVRva2VuLCBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZG1lTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuO1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhSZWFkbWVMZXhlcik7IH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbVJ1bGVzKFJlYWRtZUxleGVyLCBydWxlcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKFJlYWRtZUxleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFkbWVMZXhlciIsImZyb21Ob3RoaW5nIiwiQ29tbW9uTGV4ZXIiLCJmcm9tUnVsZXMiLCJydWxlcyIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFd0UsSUFBQSxZQUFjLFdBQWQsY0FBYyxDQUFBO0FBRWxFLElBQUEsUUFBVyxrQ0FBWCxXQUFXLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs4REFKL0I7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQU1lLElBQUEsQUFBTUEsV0FBVyxpQkNOOUIsQURNYTt1Q0FOZjs7YUFNcUJBLFdBQVc7MENBTmhDOzs7OztZQTZCU0MsR0FBVyxFQUFYQSxhQUFXO1lFN0JwQixPRjZCRSxTQUFPQSxXQUFXLEdBQUc7Z0JBQUUsT0FBT0MsWUFBVyxhQUFDRCxXQUFXLENBQUNELFdBQVcsQ0FBQyxDQUFDO2FBQUU7OztZQUU5REcsR0FBUyxFQUFUQSxXQUFTO1lFL0JsQixPRitCRSxTQUFPQSxTQUFTLENBQUNDLEtBQUssRUFBRTtnQkFBRSxPQUFPRixZQUFXLGFBQUNDLFNBQVMsQ0FBQ0gsV0FBVyxFQUFFSSxLQUFLLENBQUMsQ0FBQzthQUFFOzs7WUFFdEVDLEdBQVcsRUFBWEEsYUFBVztZRWpDcEIsT0ZpQ0UsU0FBT0EsV0FBVyxDQUFDQyxPQUFPLEVBQUU7Z0JBQUUsT0FBT0osWUFBVyxhQUFDRyxXQUFXLENBQUNMLFdBQVcsRUFBRU0sT0FBTyxDQUFDLENBQUM7YUFBRTs7TUFqQ3ZGOztDQWtDQyxDQTVCd0NKLFlBQVcsYUE0Qm5EO2tCQTVCb0JGLFdBQVcsQUFOaEM7QUFPRSxnQkFEbUJBLFdBQVcsRUFDdkJNLFNBQU8sRUFBR0EsUUFBTyxTQUFDLEFBUDNCO0FBU0UsZ0JBSG1CTixXQUFXLEVBR3ZCTyxnQkFBYyxFQUFHQyxZQUF5QiwyQkFBQyxBQVRwRDtBQVdFLGdCQUxtQlIsV0FBVyxFQUt2QlMsaUJBQWUsRUFBR0EsWUFBZSxpQkFBQyxBQVgzQztBQWFFLGdCQVBtQlQsV0FBVyxFQU92QlUsdUJBQXFCLEVBQUcsSUFBSSxDQUFDLEFBYnRDO0FBZUUsZ0JBVG1CVixXQUFXLEVBU3ZCVyx3QkFBc0IsRUFBRyxJQUFJLENBQUMsQUFmdkM7QUFpQkUsZ0JBWG1CWCxXQUFXLEVBV3ZCWSx3QkFBc0IsRUFBRyxJQUFJLENBQUMsQUFqQnZDO0FBbUJFLGdCQWJtQlosV0FBVyxFQWF2QmEsNEJBQTBCLEVBQUcsSUFBSSxDQUFDLEFBbkIzQztBQXFCRSxnQkFmbUJiLFdBQVcsRUFldkJjLDhCQUE0QixFQUFHLElBQUksQ0FBQyxBQXJCN0M7QUF1QkUsZ0JBakJtQmQsV0FBVyxFQWlCdkJlLCtCQUE2QixFQUFHLElBQUksQ0FBQyxBQXZCOUM7QUF5QkUsZ0JBbkJtQmYsV0FBVyxFQW1CdkJnQixnQ0FBOEIsRUFBRyxJQUFJLENBQUMsQUF6Qi9DO0FBMkJFLGdCQXJCbUJoQixXQUFXLEVBcUJ2QmlCLGdDQUE4QixFQUFHLElBQUksQ0FBQyxBQTNCL0MifQ==