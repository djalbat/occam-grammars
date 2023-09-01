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
var _occamlexers = require("occam-lexers");
var _entries = /*#__PURE__*/ _interop_require_default(require("./entries"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var FlorenceLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(FlorenceLexer, CommonLexer);
    var _super = _create_super(FlorenceLexer);
    function FlorenceLexer() {
        _class_call_check(this, FlorenceLexer);
        return _super.apply(this, arguments);
    }
    return FlorenceLexer;
}(_occamlexers.CommonLexer);
_define_property(FlorenceLexer, "entries", _entries.default);
_define_property(FlorenceLexer, "EndOfLineToken", _occamlexers.EndOfLineSignificantToken) ///
;
_define_property(FlorenceLexer, "WhitespaceToken", _occamlexers.WhitespaceToken);
_define_property(FlorenceLexer, "RegularExpressionToken", null);
_define_property(FlorenceLexer, "EndOfLineCommentToken", _occamlexers.EndOfLineCommentSignificantToken);
_define_property(FlorenceLexer, "SingleLineCommentToken", _occamlexers.PythonStyleSingleLineCommentToken);
_define_property(FlorenceLexer, "EndOfMultiLineCommentToken", _occamlexers.PythonStyleEndOfMultiLineCommentToken) ///
;
_define_property(FlorenceLexer, "StartOfMultiLineCommentToken", _occamlexers.PythonStyleStartOfMultiLineCommentToken) ///
;
_define_property(FlorenceLexer, "MiddleOfMultiLineCommentToken", _occamlexers.PythonStyleMiddleOfMultiLineCommentToken) ///
;
_define_property(FlorenceLexer, "SinglyQuotedStringLiteralToken", null);
_define_property(FlorenceLexer, "DoublyQuotedStringLiteralToken", _occamlexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9sZXhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbW1vbkxleGVyLFxyXG4gICAgICAgICBXaGl0ZXNwYWNlVG9rZW4sXHJcbiAgICAgICAgIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4sXHJcbiAgICAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbixcclxuICAgICAgICAgRW5kT2ZMaW5lQ29tbWVudFNpZ25pZmljYW50VG9rZW4sXHJcbiAgICAgICAgIFB5dGhvblN0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgUHl0aG9uU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgUHl0aG9uU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBQeXRob25TdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBFbmRPZkxpbmVDb21tZW50U2lnbmlmaWNhbnRUb2tlbjtcclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBQeXRob25TdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW47XHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IFB5dGhvblN0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47ICAvLy9cclxuXHJcbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBQeXRob25TdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW47ICAvLy9cclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gUHl0aG9uU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbjsgIC8vL1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcclxufVxyXG4iXSwibmFtZXMiOlsiRmxvcmVuY2VMZXhlciIsIkNvbW1vbkxleGVyIiwiZW50cmllcyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJFbmRPZkxpbmVDb21tZW50U2lnbmlmaWNhbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJQeXRob25TdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlB5dGhvblN0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJQeXRob25TdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7OzsyQkFKb0M7OERBRXJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTCxJQUFBLEFBQU1BLDhCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztXQUFBQTtFQUFzQkMsd0JBQVc7QUFDcEQsaUJBRG1CRCxlQUNaRSxXQUFVQSxnQkFBTztBQUV4QixpQkFIbUJGLGVBR1pHLGtCQUFpQkMsc0NBQXlCLEVBQUUsR0FBRzs7QUFFdEQsaUJBTG1CSixlQUtaSyxtQkFBa0JBLDRCQUFlO0FBRXhDLGlCQVBtQkwsZUFPWk0sMEJBQXlCO0FBRWhDLGlCQVRtQk4sZUFTWk8seUJBQXdCQyw2Q0FBZ0M7QUFFL0QsaUJBWG1CUixlQVdaUywwQkFBeUJDLDhDQUFpQztBQUVqRSxpQkFibUJWLGVBYVpXLDhCQUE2QkMsa0RBQXFDLEVBQUcsR0FBRzs7QUFFL0UsaUJBZm1CWixlQWVaYSxnQ0FBK0JDLG9EQUF1QyxFQUFHLEdBQUc7O0FBRW5GLGlCQWpCbUJkLGVBaUJaZSxpQ0FBZ0NDLHFEQUF3QyxFQUFHLEdBQUc7O0FBRXJGLGlCQW5CbUJoQixlQW1CWmlCLGtDQUFpQztBQUV4QyxpQkFyQm1CakIsZUFxQlprQixrQ0FBaUNBLDJDQUE4QiJ9