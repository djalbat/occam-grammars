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
exports.default = ReadmeLexer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWFkbWUvbGV4ZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb21tb25MZXhlciwgV2hpdGVzcGFjZVRva2VuLCBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZG1lTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuO1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhSZWFkbWVMZXhlcik7IH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbVJ1bGVzKFJlYWRtZUxleGVyLCBydWxlcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKFJlYWRtZUxleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmVhZG1lTGV4ZXIiLCJmcm9tTm90aGluZyIsIkNvbW1vbkxleGVyIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRTJELElBQUEsWUFBYyxXQUFkLGNBQWMsQ0FBQTtBQUVsRSxJQUFBLFFBQVcsa0NBQVgsV0FBVyxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLFdBQVcsaUJBQWpCOzs7YUFBTUEsV0FBVzs7Ozs7O1lBdUJ2QkMsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLEdBQUc7Z0JBQUUsT0FBT0MsWUFBVyxZQUFBLENBQUNELFdBQVcsQ0FBQ0QsV0FBVyxDQUFDLENBQUM7YUFBRTs7O1lBRTlERyxHQUFTLEVBQVRBLFdBQVM7bUJBQWhCLFNBQU9BLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFO2dCQUFFLE9BQU9GLFlBQVcsWUFBQSxDQUFDQyxTQUFTLENBQUNILFdBQVcsRUFBRUksS0FBSyxDQUFDLENBQUM7YUFBRTs7O1lBRXRFQyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsQ0FBQ0MsT0FBTyxFQUFFO2dCQUFFLE9BQU9KLFlBQVcsWUFBQSxDQUFDRyxXQUFXLENBQUNMLFdBQVcsRUFBRU0sT0FBTyxDQUFDLENBQUM7YUFBRTs7OztDQUN0RixDQTVCd0NKLFlBQVcsWUFBQSxDQTRCbkQ7QUEzQkMsZ0JBRG1CRixXQUFXLEVBQ3ZCTSxTQUFPLEVBQUdBLFFBQU8sUUFBQSxDQUFDO0FBRXpCLGdCQUhtQk4sV0FBVyxFQUd2Qk8sZ0JBQWMsRUFBR0MsWUFBeUIsMEJBQUEsQ0FBQztBQUVsRCxnQkFMbUJSLFdBQVcsRUFLdkJTLGlCQUFlLEVBQUdBLFlBQWUsZ0JBQUEsQ0FBQztBQUV6QyxnQkFQbUJULFdBQVcsRUFPdkJVLHVCQUFxQixFQUFHLElBQUksQ0FBQztBQUVwQyxnQkFUbUJWLFdBQVcsRUFTdkJXLHdCQUFzQixFQUFHLElBQUksQ0FBQztBQUVyQyxnQkFYbUJYLFdBQVcsRUFXdkJZLHdCQUFzQixFQUFHLElBQUksQ0FBQztBQUVyQyxnQkFibUJaLFdBQVcsRUFhdkJhLDRCQUEwQixFQUFHLElBQUksQ0FBQztBQUV6QyxnQkFmbUJiLFdBQVcsRUFldkJjLDhCQUE0QixFQUFHLElBQUksQ0FBQztBQUUzQyxnQkFqQm1CZCxXQUFXLEVBaUJ2QmUsK0JBQTZCLEVBQUcsSUFBSSxDQUFDO0FBRTVDLGdCQW5CbUJmLFdBQVcsRUFtQnZCZ0IsZ0NBQThCLEVBQUcsSUFBSSxDQUFDO0FBRTdDLGdCQXJCbUJoQixXQUFXLEVBcUJ2QmlCLGdDQUE4QixFQUFHLElBQUksQ0FBQztrQkFyQjFCakIsV0FBVyJ9