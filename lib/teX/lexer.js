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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZVgvbGV4ZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTGV4ZXIsIFdoaXRlc3BhY2VUb2tlbiwgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcclxuXHJcbmltcG9ydCBlbnRyaWVzIGZyb20gXCIuL2VudHJpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlWExleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbjtcclxuXHJcbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoVGVYTGV4ZXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21SdWxlcyhUZVhMZXhlciwgcnVsZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhUZVhMZXhlciwgZW50cmllcyk7IH1cclxufVxyXG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIl0sIm5hbWVzIjpbIlRlWExleGVyIiwiZnJvbU5vdGhpbmciLCJDb21tb25MZXhlciIsImZyb21SdWxlcyIsInJ1bGVzIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUV3RSxJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFFbEUsSUFBQSxRQUFXLGtDQUFYLFdBQVcsRUFBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUovQjtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBTWUsSUFBQSxBQUFNQSxRQUFRLGlCQ04zQixBRE1hO29DQU5mOzthQU1xQkEsUUFBUTt1Q0FON0I7Ozs7O1lBNkJTQyxHQUFXLEVBQVhBLGFBQVc7WUU3QnBCLE9GNkJFLFNBQU9BLFdBQVcsR0FBRztnQkFBRSxPQUFPQyxZQUFXLGFBQUNELFdBQVcsQ0FBQ0QsUUFBUSxDQUFDLENBQUM7YUFBRTs7O1lBRTNERyxHQUFTLEVBQVRBLFdBQVM7WUUvQmxCLE9GK0JFLFNBQU9BLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFO2dCQUFFLE9BQU9GLFlBQVcsYUFBQ0MsU0FBUyxDQUFDSCxRQUFRLEVBQUVJLEtBQUssQ0FBQyxDQUFDO2FBQUU7OztZQUVuRUMsR0FBVyxFQUFYQSxhQUFXO1lFakNwQixPRmlDRSxTQUFPQSxXQUFXLENBQUNDLE9BQU8sRUFBRTtnQkFBRSxPQUFPSixZQUFXLGFBQUNHLFdBQVcsQ0FBQ0wsUUFBUSxFQUFFTSxPQUFPLENBQUMsQ0FBQzthQUFFOztNQWpDcEY7O0NBa0NDLENBNUJxQ0osWUFBVyxhQTRCaEQ7a0JBNUJvQkYsUUFBUSxBQU43QjtBQU9FLGdCQURtQkEsUUFBUSxFQUNwQk0sU0FBTyxFQUFHQSxRQUFPLFNBQUMsQUFQM0I7QUFTRSxnQkFIbUJOLFFBQVEsRUFHcEJPLGdCQUFjLEVBQUdDLFlBQXlCLDJCQUFDLEFBVHBEO0FBV0UsZ0JBTG1CUixRQUFRLEVBS3BCUyxpQkFBZSxFQUFHQSxZQUFlLGlCQUFDLEFBWDNDO0FBYUUsZ0JBUG1CVCxRQUFRLEVBT3BCVSx1QkFBcUIsRUFBRyxJQUFJLENBQUMsQUFidEM7QUFlRSxnQkFUbUJWLFFBQVEsRUFTcEJXLHdCQUFzQixFQUFHLElBQUksQ0FBQyxBQWZ2QztBQWlCRSxnQkFYbUJYLFFBQVEsRUFXcEJZLHdCQUFzQixFQUFHLElBQUksQ0FBQyxBQWpCdkM7QUFtQkUsZ0JBYm1CWixRQUFRLEVBYXBCYSw0QkFBMEIsRUFBRyxJQUFJLENBQUMsQUFuQjNDO0FBcUJFLGdCQWZtQmIsUUFBUSxFQWVwQmMsOEJBQTRCLEVBQUcsSUFBSSxDQUFDLEFBckI3QztBQXVCRSxnQkFqQm1CZCxRQUFRLEVBaUJwQmUsK0JBQTZCLEVBQUcsSUFBSSxDQUFDLEFBdkI5QztBQXlCRSxnQkFuQm1CZixRQUFRLEVBbUJwQmdCLGdDQUE4QixFQUFHLElBQUksQ0FBQyxBQXpCL0M7QUEyQkUsZ0JBckJtQmhCLFFBQVEsRUFxQnBCaUIsZ0NBQThCLEVBQUcsSUFBSSxDQUFDLEFBM0IvQyJ9