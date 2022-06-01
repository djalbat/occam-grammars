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
_defineProperty(TeXLexer, "entries", _entries.default);
_defineProperty(TeXLexer, "EndOfLineToken", _occamLexers.EndOfLineNonSignificantToken);
_defineProperty(TeXLexer, "WhitespaceToken", _occamLexers.WhitespaceToken);
_defineProperty(TeXLexer, "EndOfLineCommentToken", null);
_defineProperty(TeXLexer, "SingleLineCommentToken", null);
_defineProperty(TeXLexer, "RegularExpressionToken", null);
_defineProperty(TeXLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(TeXLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(TeXLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(TeXLexer, "SinglyQuotedStringLiteralToken", null);
_defineProperty(TeXLexer, "DoublyQuotedStringLiteralToken", null);
exports.default = TeXLexer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZVgvbGV4ZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb21tb25MZXhlciwgV2hpdGVzcGFjZVRva2VuLCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVYTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuO1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhUZVhMZXhlcik7IH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbVJ1bGVzKFRlWExleGVyLCBydWxlcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKFRlWExleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVGVYTGV4ZXIiLCJmcm9tTm90aGluZyIsIkNvbW1vbkxleGVyIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRThELElBQUEsWUFBYyxXQUFkLGNBQWMsQ0FBQTtBQUVyRSxJQUFBLFFBQVcsa0NBQVgsV0FBVyxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLFFBQVEsaUJBQWQ7OzthQUFNQSxRQUFROzs7Ozs7WUF1QnBCQyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsR0FBRztnQkFBRSxPQUFPQyxZQUFXLFlBQUEsQ0FBQ0QsV0FBVyxDQUFDRCxRQUFRLENBQUMsQ0FBQzthQUFFOzs7WUFFM0RHLEdBQVMsRUFBVEEsV0FBUzttQkFBaEIsU0FBT0EsU0FBUyxDQUFDQyxLQUFLLEVBQUU7Z0JBQUUsT0FBT0YsWUFBVyxZQUFBLENBQUNDLFNBQVMsQ0FBQ0gsUUFBUSxFQUFFSSxLQUFLLENBQUMsQ0FBQzthQUFFOzs7WUFFbkVDLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxDQUFDQyxPQUFPLEVBQUU7Z0JBQUUsT0FBT0osWUFBVyxZQUFBLENBQUNHLFdBQVcsQ0FBQ0wsUUFBUSxFQUFFTSxPQUFPLENBQUMsQ0FBQzthQUFFOzs7O0NBQ25GLENBNUJxQ0osWUFBVyxZQUFBLENBNEJoRDtBQTNCQyxnQkFEbUJGLFFBQVEsRUFDcEJNLFNBQU8sRUFBR0EsUUFBTyxRQUFBLENBQUM7QUFFekIsZ0JBSG1CTixRQUFRLEVBR3BCTyxnQkFBYyxFQUFHQyxZQUE0Qiw2QkFBQSxDQUFDO0FBRXJELGdCQUxtQlIsUUFBUSxFQUtwQlMsaUJBQWUsRUFBR0EsWUFBZSxnQkFBQSxDQUFDO0FBRXpDLGdCQVBtQlQsUUFBUSxFQU9wQlUsdUJBQXFCLEVBQUcsSUFBSSxDQUFDO0FBRXBDLGdCQVRtQlYsUUFBUSxFQVNwQlcsd0JBQXNCLEVBQUcsSUFBSSxDQUFDO0FBRXJDLGdCQVhtQlgsUUFBUSxFQVdwQlksd0JBQXNCLEVBQUcsSUFBSSxDQUFDO0FBRXJDLGdCQWJtQlosUUFBUSxFQWFwQmEsNEJBQTBCLEVBQUcsSUFBSSxDQUFDO0FBRXpDLGdCQWZtQmIsUUFBUSxFQWVwQmMsOEJBQTRCLEVBQUcsSUFBSSxDQUFDO0FBRTNDLGdCQWpCbUJkLFFBQVEsRUFpQnBCZSwrQkFBNkIsRUFBRyxJQUFJLENBQUM7QUFFNUMsZ0JBbkJtQmYsUUFBUSxFQW1CcEJnQixnQ0FBOEIsRUFBRyxJQUFJLENBQUM7QUFFN0MsZ0JBckJtQmhCLFFBQVEsRUFxQnBCaUIsZ0NBQThCLEVBQUcsSUFBSSxDQUFDO2tCQXJCMUJqQixRQUFRIn0=