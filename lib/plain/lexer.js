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
var PlainLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(PlainLexer, CommonLexer);
    var _super = _createSuper(PlainLexer);
    function PlainLexer() {
        _classCallCheck(this, PlainLexer);
        return _super.apply(this, arguments);
    }
    _createClass(PlainLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamLexers.CommonLexer.fromNothing(PlainLexer);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamLexers.CommonLexer.fromRules(PlainLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamLexers.CommonLexer.fromEntries(PlainLexer, entries);
            }
        }
    ]);
    return PlainLexer;
}(_occamLexers.CommonLexer);
exports.default = PlainLexer;
_defineProperty(PlainLexer, "entries", _entries.default);
_defineProperty(PlainLexer, "EndOfLineToken", _occamLexers.EndOfLineSignificantToken);
_defineProperty(PlainLexer, "WhitespaceToken", _occamLexers.WhitespaceToken);
_defineProperty(PlainLexer, "EndOfLineCommentToken", null);
_defineProperty(PlainLexer, "SingleLineCommentToken", null);
_defineProperty(PlainLexer, "RegularExpressionToken", null);
_defineProperty(PlainLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(PlainLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(PlainLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(PlainLexer, "SinglyQuotedStringLiteralToken", null);
_defineProperty(PlainLexer, "DoublyQuotedStringLiteralToken", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbGFpbi9sZXhlci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb21tb25MZXhlciwgV2hpdGVzcGFjZVRva2VuLCBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhaW5MZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW47XHJcblxyXG4gIHN0YXRpYyBXaGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW47XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21Ob3RoaW5nKFBsYWluTGV4ZXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21SdWxlcyhQbGFpbkxleGVyLCBydWxlcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKFBsYWluTGV4ZXIsIGVudHJpZXMpOyB9XHJcbn1cclxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJQbGFpbkxleGVyIiwiZnJvbU5vdGhpbmciLCJDb21tb25MZXhlciIsImZyb21SdWxlcyIsInJ1bGVzIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUV3RSxJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFFbEUsSUFBQSxRQUFXLGtDQUFYLFdBQVcsRUFBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUovQjtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBTWUsSUFBQSxBQUFNQSxVQUFVLGlCQ043QixBRE1hO3NDQU5mOzthQU1xQkEsVUFBVTt5Q0FOL0I7Ozs7O1lBNkJTQyxHQUFXLEVBQVhBLGFBQVc7WUU3QnBCLE9GNkJFLFNBQU9BLFdBQVcsR0FBRztnQkFBRSxPQUFPQyxZQUFXLGFBQUNELFdBQVcsQ0FBQ0QsVUFBVSxDQUFDLENBQUM7YUFBRTs7O1lBRTdERyxHQUFTLEVBQVRBLFdBQVM7WUUvQmxCLE9GK0JFLFNBQU9BLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFO2dCQUFFLE9BQU9GLFlBQVcsYUFBQ0MsU0FBUyxDQUFDSCxVQUFVLEVBQUVJLEtBQUssQ0FBQyxDQUFDO2FBQUU7OztZQUVyRUMsR0FBVyxFQUFYQSxhQUFXO1lFakNwQixPRmlDRSxTQUFPQSxXQUFXLENBQUNDLE9BQU8sRUFBRTtnQkFBRSxPQUFPSixZQUFXLGFBQUNHLFdBQVcsQ0FBQ0wsVUFBVSxFQUFFTSxPQUFPLENBQUMsQ0FBQzthQUFFOztNQWpDdEY7O0NBa0NDLENBNUJ1Q0osWUFBVyxhQTRCbEQ7a0JBNUJvQkYsVUFBVSxBQU4vQjtBQU9FLGdCQURtQkEsVUFBVSxFQUN0Qk0sU0FBTyxFQUFHQSxRQUFPLFNBQUMsQUFQM0I7QUFTRSxnQkFIbUJOLFVBQVUsRUFHdEJPLGdCQUFjLEVBQUdDLFlBQXlCLDJCQUFDLEFBVHBEO0FBV0UsZ0JBTG1CUixVQUFVLEVBS3RCUyxpQkFBZSxFQUFHQSxZQUFlLGlCQUFDLEFBWDNDO0FBYUUsZ0JBUG1CVCxVQUFVLEVBT3RCVSx1QkFBcUIsRUFBRyxJQUFJLENBQUMsQUFidEM7QUFlRSxnQkFUbUJWLFVBQVUsRUFTdEJXLHdCQUFzQixFQUFHLElBQUksQ0FBQyxBQWZ2QztBQWlCRSxnQkFYbUJYLFVBQVUsRUFXdEJZLHdCQUFzQixFQUFHLElBQUksQ0FBQyxBQWpCdkM7QUFtQkUsZ0JBYm1CWixVQUFVLEVBYXRCYSw0QkFBMEIsRUFBRyxJQUFJLENBQUMsQUFuQjNDO0FBcUJFLGdCQWZtQmIsVUFBVSxFQWV0QmMsOEJBQTRCLEVBQUcsSUFBSSxDQUFDLEFBckI3QztBQXVCRSxnQkFqQm1CZCxVQUFVLEVBaUJ0QmUsK0JBQTZCLEVBQUcsSUFBSSxDQUFDLEFBdkI5QztBQXlCRSxnQkFuQm1CZixVQUFVLEVBbUJ0QmdCLGdDQUE4QixFQUFHLElBQUksQ0FBQyxBQXpCL0M7QUEyQkUsZ0JBckJtQmhCLFVBQVUsRUFxQnRCaUIsZ0NBQThCLEVBQUcsSUFBSSxDQUFDLEFBM0IvQyJ9