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
var FlorenceLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(FlorenceLexer, CommonLexer);
    var _super = _createSuper(FlorenceLexer);
    function FlorenceLexer() {
        _classCallCheck(this, FlorenceLexer);
        return _super.apply(this, arguments);
    }
    _createClass(FlorenceLexer, [
        {
            key: "matchRegularExpression",
            value: function matchRegularExpression(content) {
                return null;
            }
        },
        {
            key: "matchSinglyQuotedStringLiteral",
            value: function matchSinglyQuotedStringLiteral(content) {
                return null;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamLexers.CommonLexer.fromNothing(FlorenceLexer);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamLexers.CommonLexer.fromRules(FlorenceLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamLexers.CommonLexer.fromEntries(FlorenceLexer, entries);
            }
        }
    ]);
    return FlorenceLexer;
}(_occamLexers.CommonLexer);
exports.default = FlorenceLexer;
_defineProperty(FlorenceLexer, "entries", _entries.default);
_defineProperty(FlorenceLexer, "EndOfLineToken", _occamLexers.EndOfLineSignificantToken) ///
;
_defineProperty(FlorenceLexer, "WhitespaceToken", _occamLexers.WhitespaceToken);
_defineProperty(FlorenceLexer, "RegularExpressionToken", null);
_defineProperty(FlorenceLexer, "EndOfLineCommentToken", _occamLexers.EndOfLineCommentSignificantToken);
_defineProperty(FlorenceLexer, "SingleLineCommentToken", _occamLexers.PythonStyleSingleLineCommentToken);
_defineProperty(FlorenceLexer, "EndOfMultiLineCommentToken", _occamLexers.PythonStyleEndOfMultiLineCommentToken) ///
;
_defineProperty(FlorenceLexer, "StartOfMultiLineCommentToken", _occamLexers.PythonStyleStartOfMultiLineCommentToken) ///
;
_defineProperty(FlorenceLexer, "MiddleOfMultiLineCommentToken", _occamLexers.PythonStyleMiddleOfMultiLineCommentToken) ///
;
_defineProperty(FlorenceLexer, "SinglyQuotedStringLiteralToken", null) ///
;
_defineProperty(FlorenceLexer, "DoublyQuotedStringLiteralToken", _occamLexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9sZXhlci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbW1vbkxleGVyLFxyXG4gICAgICAgICBXaGl0ZXNwYWNlVG9rZW4sXHJcbiAgICAgICAgIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4sXHJcbiAgICAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbixcclxuICAgICAgICAgRW5kT2ZMaW5lQ29tbWVudFNpZ25pZmljYW50VG9rZW4sXHJcbiAgICAgICAgIFB5dGhvblN0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgUHl0aG9uU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgUHl0aG9uU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBQeXRob25TdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBtYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcclxuXHJcbiAgc3RhdGljIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gRW5kT2ZMaW5lQ29tbWVudFNpZ25pZmljYW50VG9rZW47XHJcblxyXG4gIHN0YXRpYyBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBQeXRob25TdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAgLy8vXHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gUHl0aG9uU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAgLy8vXHJcblxyXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IFB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47ICAvLy9cclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7ICAvLy9cclxuXHJcbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoRmxvcmVuY2VMZXhlcik7IH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbVJ1bGVzKEZsb3JlbmNlTGV4ZXIsIHJ1bGVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoRmxvcmVuY2VMZXhlciwgZW50cmllcyk7IH1cclxufVxyXG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkZsb3JlbmNlTGV4ZXIiLCJtYXRjaFJlZ3VsYXJFeHByZXNzaW9uIiwiY29udGVudCIsIm1hdGNoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbCIsImZyb21Ob3RoaW5nIiwiQ29tbW9uTGV4ZXIiLCJmcm9tUnVsZXMiLCJydWxlcyIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJFbmRPZkxpbmVDb21tZW50U2lnbmlmaWNhbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJQeXRob25TdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlB5dGhvblN0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJQeXRob25TdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBVTRDLElBQUEsWUFBYyxXQUFkLGNBQWMsQ0FBQTtBQUVuRCxJQUFBLFFBQVcsa0NBQVgsV0FBVyxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLGFBQWEsaUJDZGhDLEFEY2E7OzthQUFNQSxhQUFhOzs7Ozs7WUFDaENDLEdBQXNCLEVBQXRCQSx3QkFBc0I7bUJBQXRCQSxTQUFBQSxzQkFBc0IsQ0FBQ0MsT0FBTyxFQUFFO2dCQUFFLE9BQU8sSUFBSSxDQUFDO2FBQUU7OztZQUVoREMsR0FBOEIsRUFBOUJBLGdDQUE4QjttQkFBOUJBLFNBQUFBLDhCQUE4QixDQUFDRCxPQUFPLEVBQUU7Z0JBQUUsT0FBTyxJQUFJLENBQUM7YUFBRTs7OztZQXdCakRFLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxHQUFHO2dCQUFFLE9BQU9DLFlBQVcsWUFBQSxDQUFDRCxXQUFXLENBQUNKLGFBQWEsQ0FBQyxDQUFDO2FBQUU7OztZQUVoRU0sR0FBUyxFQUFUQSxXQUFTO21CQUFoQixTQUFPQSxTQUFTLENBQUNDLEtBQUssRUFBRTtnQkFBRSxPQUFPRixZQUFXLFlBQUEsQ0FBQ0MsU0FBUyxDQUFDTixhQUFhLEVBQUVPLEtBQUssQ0FBQyxDQUFDO2FBQUU7OztZQUV4RUMsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLENBQUNDLE9BQU8sRUFBRTtnQkFBRSxPQUFPSixZQUFXLFlBQUEsQ0FBQ0csV0FBVyxDQUFDUixhQUFhLEVBQUVTLE9BQU8sQ0FBQyxDQUFDO2FBQUU7Ozs7Q0FDeEYsQ0FoQzBDSixZQUFXLFlBQUEsQ0FnQ3JEO2tCQWhDb0JMLGFBQWE7QUFLaEMsZ0JBTG1CQSxhQUFhLEVBS3pCUyxTQUFPLEVBQUdBLFFBQU8sUUFBQSxDQUFDO0FBRXpCLGdCQVBtQlQsYUFBYSxFQU96QlUsZ0JBQWMsRUFBR0MsWUFBeUIsMEJBQUEsQ0FBQyxDQUFDLEdBQUc7O0FBRXRELGdCQVRtQlgsYUFBYSxFQVN6QlksaUJBQWUsRUFBR0EsWUFBZSxnQkFBQSxDQUFDO0FBRXpDLGdCQVhtQlosYUFBYSxFQVd6QmEsd0JBQXNCLEVBQUcsSUFBSSxDQUFDO0FBRXJDLGdCQWJtQmIsYUFBYSxFQWF6QmMsdUJBQXFCLEVBQUdDLFlBQWdDLGlDQUFBLENBQUM7QUFFaEUsZ0JBZm1CZixhQUFhLEVBZXpCZ0Isd0JBQXNCLEVBQUdDLFlBQWlDLGtDQUFBLENBQUM7QUFFbEUsZ0JBakJtQmpCLGFBQWEsRUFpQnpCa0IsNEJBQTBCLEVBQUdDLFlBQXFDLHNDQUFBLENBQUMsQ0FBRSxHQUFHOztBQUUvRSxnQkFuQm1CbkIsYUFBYSxFQW1CekJvQiw4QkFBNEIsRUFBR0MsWUFBdUMsd0NBQUEsQ0FBQyxDQUFFLEdBQUc7O0FBRW5GLGdCQXJCbUJyQixhQUFhLEVBcUJ6QnNCLCtCQUE2QixFQUFHQyxZQUF3Qyx5Q0FBQSxDQUFDLENBQUUsR0FBRzs7QUFFckYsZ0JBdkJtQnZCLGFBQWEsRUF1QnpCd0IsZ0NBQThCLEVBQUcsSUFBSSxDQUFDLENBQUUsR0FBRzs7QUFFbEQsZ0JBekJtQnhCLGFBQWEsRUF5QnpCeUIsZ0NBQThCLEVBQUdBLFlBQThCLCtCQUFBLENBQUMifQ==