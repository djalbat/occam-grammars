"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FlorenceLexer;
    }
});
var _occamLexers = require("occam-lexers");
var _entries = /*#__PURE__*/ _interopRequireDefault(require("./entries"));
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
    return FlorenceLexer;
}(_occamLexers.CommonLexer);
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
_defineProperty(FlorenceLexer, "SinglyQuotedStringLiteralToken", null);
_defineProperty(FlorenceLexer, "DoublyQuotedStringLiteralToken", _occamLexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9sZXhlci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbW1vbkxleGVyLFxyXG4gICAgICAgICBXaGl0ZXNwYWNlVG9rZW4sXHJcbiAgICAgICAgIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4sXHJcbiAgICAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbixcclxuICAgICAgICAgRW5kT2ZMaW5lQ29tbWVudFNpZ25pZmljYW50VG9rZW4sXHJcbiAgICAgICAgIFB5dGhvblN0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgUHl0aG9uU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgUHl0aG9uU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBQeXRob25TdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBFbmRPZkxpbmVDb21tZW50U2lnbmlmaWNhbnRUb2tlbjtcclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBQeXRob25TdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW47XHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IFB5dGhvblN0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47ICAvLy9cclxuXHJcbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBQeXRob25TdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW47ICAvLy9cclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gUHl0aG9uU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbjsgIC8vL1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcclxufVxyXG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkZsb3JlbmNlTGV4ZXIiLCJDb21tb25MZXhlciIsImVudHJpZXMiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFNpZ25pZmljYW50VG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJQeXRob25TdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlB5dGhvblN0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFjcUJBOzs7MkJBSm9DOzREQUVyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7V0FBQUE7RUFBc0JDLHdCQUFXO0FBQ3BELGdCQURtQkQsZUFDWkUsV0FBVUEsZ0JBQU87QUFFeEIsZ0JBSG1CRixlQUdaRyxrQkFBaUJDLHNDQUF5QixFQUFFLEdBQUc7O0FBRXRELGdCQUxtQkosZUFLWkssbUJBQWtCQSw0QkFBZTtBQUV4QyxnQkFQbUJMLGVBT1pNLDBCQUF5QixJQUFJO0FBRXBDLGdCQVRtQk4sZUFTWk8seUJBQXdCQyw2Q0FBZ0M7QUFFL0QsZ0JBWG1CUixlQVdaUywwQkFBeUJDLDhDQUFpQztBQUVqRSxnQkFibUJWLGVBYVpXLDhCQUE2QkMsa0RBQXFDLEVBQUcsR0FBRzs7QUFFL0UsZ0JBZm1CWixlQWVaYSxnQ0FBK0JDLG9EQUF1QyxFQUFHLEdBQUc7O0FBRW5GLGdCQWpCbUJkLGVBaUJaZSxpQ0FBZ0NDLHFEQUF3QyxFQUFHLEdBQUc7O0FBRXJGLGdCQW5CbUJoQixlQW1CWmlCLGtDQUFpQyxJQUFJO0FBRTVDLGdCQXJCbUJqQixlQXFCWmtCLGtDQUFpQ0EsMkNBQThCIn0=