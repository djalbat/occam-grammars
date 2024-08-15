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
var entries = _occamlexers.BNFLexer.entries;
var CustomGrammarBNFnLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(CustomGrammarBNFnLexer, CommonLexer);
    var _super = _create_super(CustomGrammarBNFnLexer);
    function CustomGrammarBNFnLexer() {
        _class_call_check(this, CustomGrammarBNFnLexer);
        return _super.apply(this, arguments);
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
_define_property(CustomGrammarBNFnLexer, "entries", entries);
_define_property(CustomGrammarBNFnLexer, "EndOfLineToken", _occamlexers.EndOfLineNonSignificantToken) ///
;
_define_property(CustomGrammarBNFnLexer, "WhitespaceToken", _occamlexers.WhitespaceToken);
_define_property(CustomGrammarBNFnLexer, "EndOfLineCommentToken", null);
_define_property(CustomGrammarBNFnLexer, "RegularExpressionToken", _occamlexers.RegularExpressionToken);
_define_property(CustomGrammarBNFnLexer, "SingleLineCommentToken", null);
_define_property(CustomGrammarBNFnLexer, "EndOfMultiLineCommentToken", null);
_define_property(CustomGrammarBNFnLexer, "StartOfMultiLineCommentToken", null);
_define_property(CustomGrammarBNFnLexer, "MiddleOfMultiLineCommentToken", null);
_define_property(CustomGrammarBNFnLexer, "SinglyQuotedStringLiteralToken", null);
_define_property(CustomGrammarBNFnLexer, "DoublyQuotedStringLiteralToken", _occamlexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyQk5GL2xleGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciwgQ29tbW9uTGV4ZXIsIFdoaXRlc3BhY2VUb2tlbiwgUmVndWxhckV4cHJlc3Npb25Ub2tlbiwgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiwgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5jb25zdCB7IGVudHJpZXMgfSA9IEJORkxleGVyO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyQk5GbkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XG5cbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcblxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IFJlZ3VsYXJFeHByZXNzaW9uVG9rZW47XG5cbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xuXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xuXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhDdXN0b21HcmFtbWFyQk5GbkxleGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21SdWxlcyhDdXN0b21HcmFtbWFyQk5GbkxleGVyLCBydWxlcyk7IH1cblxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQ3VzdG9tR3JhbW1hckJORm5MZXhlciwgZW50cmllcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyQk5GbkxleGVyIiwiZW50cmllcyIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJDb21tb25MZXhlciIsImZyb21SdWxlcyIsInJ1bGVzIiwiZnJvbUVudHJpZXMiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyQkFKd0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3SSxJQUFNLEFBQUVDLFVBQVlDLHFCQUFRLENBQXBCRDtBQUVPLElBQUEsQUFBTUQsdUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQXVCWkcsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLHdCQUFXLENBQUNELFdBQVcsQ0F2QmxDSDtZQXVCNEQ7OztZQUV4RUssS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUMsS0FBSztnQkFBSSxPQUFPRix3QkFBVyxDQUFDQyxTQUFTLENBekJuQ0wsd0JBeUI0RE07WUFBUTs7O1lBRWhGQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZTixPQUFPO2dCQUFJLE9BQU9HLHdCQUFXLENBQUNHLFdBQVcsQ0EzQnpDUCx3QkEyQmtFQztZQUFVOzs7V0EzQjVFRDtFQUErQkksd0JBQVc7QUFDN0QsaUJBRG1CSix3QkFDWkMsV0FBVUE7QUFFakIsaUJBSG1CRCx3QkFHWlEsa0JBQWlCQyx5Q0FBNEIsRUFBRSxHQUFHOztBQUV6RCxpQkFMbUJULHdCQUtaVSxtQkFBa0JBLDRCQUFlO0FBRXhDLGlCQVBtQlYsd0JBT1pXLHlCQUF3QjtBQUUvQixpQkFUbUJYLHdCQVNaWSwwQkFBeUJBLG1DQUFzQjtBQUV0RCxpQkFYbUJaLHdCQVdaYSwwQkFBeUI7QUFFaEMsaUJBYm1CYix3QkFhWmMsOEJBQTZCO0FBRXBDLGlCQWZtQmQsd0JBZVplLGdDQUErQjtBQUV0QyxpQkFqQm1CZix3QkFpQlpnQixpQ0FBZ0M7QUFFdkMsaUJBbkJtQmhCLHdCQW1CWmlCLGtDQUFpQztBQUV4QyxpQkFyQm1CakIsd0JBcUJaa0Isa0NBQWlDQSwyQ0FBOEIifQ==