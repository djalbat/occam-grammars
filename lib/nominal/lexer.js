"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NominalLexer;
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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var NominalLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(NominalLexer, CommonLexer);
    function NominalLexer() {
        _class_call_check(this, NominalLexer);
        return _call_super(this, NominalLexer, arguments);
    }
    return NominalLexer;
}(_occamlexers.CommonLexer);
_define_property(NominalLexer, "entries", _entries.default);
_define_property(NominalLexer, "EndOfLineToken", _occamlexers.EndOfLineSignificantToken) ///
;
_define_property(NominalLexer, "WhitespaceToken", _occamlexers.WhitespaceToken);
_define_property(NominalLexer, "RegularExpressionToken", null);
_define_property(NominalLexer, "EndOfLineCommentToken", _occamlexers.EndOfLineCommentSignificantToken);
_define_property(NominalLexer, "SingleLineCommentToken", _occamlexers.PythonStyleSingleLineCommentToken);
_define_property(NominalLexer, "EndOfMultiLineCommentToken", _occamlexers.PythonStyleEndOfMultiLineCommentToken) ///
;
_define_property(NominalLexer, "StartOfMultiLineCommentToken", _occamlexers.PythonStyleStartOfMultiLineCommentToken) ///
;
_define_property(NominalLexer, "MiddleOfMultiLineCommentToken", _occamlexers.PythonStyleMiddleOfMultiLineCommentToken) ///
;
_define_property(NominalLexer, "SinglyQuotedStringLiteralToken", null);
_define_property(NominalLexer, "DoublyQuotedStringLiteralToken", _occamlexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL2xleGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTGV4ZXIsXHJcbiAgICAgICAgIFdoaXRlc3BhY2VUb2tlbixcclxuICAgICAgICAgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbixcclxuICAgICAgICAgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLFxyXG4gICAgICAgICBFbmRPZkxpbmVDb21tZW50U2lnbmlmaWNhbnRUb2tlbixcclxuICAgICAgICAgUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBQeXRob25TdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBQeXRob25TdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgIFB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XHJcblxyXG5pbXBvcnQgZW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb21pbmFsTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcclxuXHJcbiAgc3RhdGljIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gRW5kT2ZMaW5lQ29tbWVudFNpZ25pZmljYW50VG9rZW47XHJcblxyXG4gIHN0YXRpYyBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gUHl0aG9uU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBQeXRob25TdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAgLy8vXHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gUHl0aG9uU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAgLy8vXHJcblxyXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IFB5dGhvblN0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47ICAvLy9cclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW47XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5vbWluYWxMZXhlciIsIkNvbW1vbkxleGVyIiwiZW50cmllcyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJFbmRPZkxpbmVDb21tZW50U2lnbmlmaWNhbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJQeXRob25TdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlB5dGhvblN0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiUHl0aG9uU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJQeXRob25TdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7OzsyQkFKb0M7OERBRXJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTCxJQUFBLEFBQU1BLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O1dBQUFBO0VBQXFCQyx3QkFBVztBQUNuRCxpQkFEbUJELGNBQ1pFLFdBQVVBLGdCQUFPO0FBRXhCLGlCQUhtQkYsY0FHWkcsa0JBQWlCQyxzQ0FBeUIsRUFBRSxHQUFHOztBQUV0RCxpQkFMbUJKLGNBS1pLLG1CQUFrQkEsNEJBQWU7QUFFeEMsaUJBUG1CTCxjQU9aTSwwQkFBeUI7QUFFaEMsaUJBVG1CTixjQVNaTyx5QkFBd0JDLDZDQUFnQztBQUUvRCxpQkFYbUJSLGNBV1pTLDBCQUF5QkMsOENBQWlDO0FBRWpFLGlCQWJtQlYsY0FhWlcsOEJBQTZCQyxrREFBcUMsRUFBRyxHQUFHOztBQUUvRSxpQkFmbUJaLGNBZVphLGdDQUErQkMsb0RBQXVDLEVBQUcsR0FBRzs7QUFFbkYsaUJBakJtQmQsY0FpQlplLGlDQUFnQ0MscURBQXdDLEVBQUcsR0FBRzs7QUFFckYsaUJBbkJtQmhCLGNBbUJaaUIsa0NBQWlDO0FBRXhDLGlCQXJCbUJqQixjQXFCWmtCLGtDQUFpQ0EsMkNBQThCIn0=