"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CustomGrammarBNFnLexer;
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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
var CustomGrammarBNFnLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(CustomGrammarBNFnLexer, CommonLexer);
    function CustomGrammarBNFnLexer() {
        _class_call_check(this, CustomGrammarBNFnLexer);
        return _call_super(this, CustomGrammarBNFnLexer, arguments);
    }
    _create_class(CustomGrammarBNFnLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamlexers.CommonLexer.fromNothing(CustomGrammarBNFnLexer);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamlexers.CommonLexer.fromRules(CustomGrammarBNFnLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamlexers.CommonLexer.fromEntries(CustomGrammarBNFnLexer, entries);
            }
        }
    ]);
    return CustomGrammarBNFnLexer;
}(_occamlexers.CommonLexer);
_define_property(CustomGrammarBNFnLexer, "entries", _entries.default);
_define_property(CustomGrammarBNFnLexer, "EndOfLineToken", _occamlexers.EndOfLineNonSignificantToken); ///
_define_property(CustomGrammarBNFnLexer, "WhitespaceToken", _occamlexers.WhitespaceToken);
_define_property(CustomGrammarBNFnLexer, "EndOfLineCommentToken", null);
_define_property(CustomGrammarBNFnLexer, "RegularExpressionToken", null);
_define_property(CustomGrammarBNFnLexer, "SingleLineCommentToken", null);
_define_property(CustomGrammarBNFnLexer, "EndOfMultiLineCommentToken", null);
_define_property(CustomGrammarBNFnLexer, "StartOfMultiLineCommentToken", null);
_define_property(CustomGrammarBNFnLexer, "MiddleOfMultiLineCommentToken", null);
_define_property(CustomGrammarBNFnLexer, "SinglyQuotedStringLiteralToken", null);
_define_property(CustomGrammarBNFnLexer, "DoublyQuotedStringLiteralToken", _occamlexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyQk5GL2xleGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25MZXhlciwgV2hpdGVzcGFjZVRva2VuLCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuLCBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBlbnRyaWVzIGZyb20gXCIuL2VudHJpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hckJORm5MZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xuXG4gIHN0YXRpYyBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gIHN0YXRpYyBXaGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW47XG5cbiAgc3RhdGljIEVuZE9mTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSBudWxsO1xuXG4gIHN0YXRpYyBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xuXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xuXG4gIHN0YXRpYyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xuXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW47XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoQ3VzdG9tR3JhbW1hckJORm5MZXhlcik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tUnVsZXMoQ3VzdG9tR3JhbW1hckJORm5MZXhlciwgcnVsZXMpOyB9XG5cbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKEN1c3RvbUdyYW1tYXJCTkZuTGV4ZXIsIGVudHJpZXMpOyB9XG59XG4iXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hckJORm5MZXhlciIsImZyb21Ob3RoaW5nIiwiQ29tbW9uTGV4ZXIiLCJmcm9tUnVsZXMiLCJydWxlcyIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJCQUpzRjs4REFFdkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQXVCWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLHdCQUFXLENBQUNELFdBQVcsQ0F2QmxDRDtZQXVCNEQ7OztZQUV4RUcsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUMsS0FBSztnQkFBSSxPQUFPRix3QkFBVyxDQUFDQyxTQUFTLENBekJuQ0gsd0JBeUI0REk7WUFBUTs7O1lBRWhGQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxPQUFPO2dCQUFJLE9BQU9KLHdCQUFXLENBQUNHLFdBQVcsQ0EzQnpDTCx3QkEyQmtFTTtZQUFVOzs7V0EzQjVFTjtFQUErQkUsd0JBQVc7QUFDN0QsaUJBRG1CRix3QkFDWk0sV0FBVUEsZ0JBQU87QUFFeEIsaUJBSG1CTix3QkFHWk8sa0JBQWlCQyx5Q0FBNEIsR0FBRSxHQUFHO0FBRXpELGlCQUxtQlIsd0JBS1pTLG1CQUFrQkEsNEJBQWU7QUFFeEMsaUJBUG1CVCx3QkFPWlUseUJBQXdCO0FBRS9CLGlCQVRtQlYsd0JBU1pXLDBCQUF5QjtBQUVoQyxpQkFYbUJYLHdCQVdaWSwwQkFBeUI7QUFFaEMsaUJBYm1CWix3QkFhWmEsOEJBQTZCO0FBRXBDLGlCQWZtQmIsd0JBZVpjLGdDQUErQjtBQUV0QyxpQkFqQm1CZCx3QkFpQlplLGlDQUFnQztBQUV2QyxpQkFuQm1CZix3QkFtQlpnQixrQ0FBaUM7QUFFeEMsaUJBckJtQmhCLHdCQXFCWmlCLGtDQUFpQ0EsMkNBQThCIn0=