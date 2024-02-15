"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CustomGrammarPatternLexer;
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
var CustomGrammarPatternLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(CustomGrammarPatternLexer, CommonLexer);
    var _super = _create_super(CustomGrammarPatternLexer);
    function CustomGrammarPatternLexer() {
        _class_call_check(this, CustomGrammarPatternLexer);
        return _super.apply(this, arguments);
    }
    _create_class(CustomGrammarPatternLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamlexers.CommonLexer.fromNothing(CustomGrammarPatternLexer);
            }
        }
    ]);
    return CustomGrammarPatternLexer;
}(_occamlexers.CommonLexer);
_define_property(CustomGrammarPatternLexer, "entries", _entries.default);
_define_property(CustomGrammarPatternLexer, "EndOfLineToken", _occamlexers.EndOfLineSignificantToken) ///
;
_define_property(CustomGrammarPatternLexer, "WhitespaceToken", _occamlexers.WhitespaceToken);
_define_property(CustomGrammarPatternLexer, "EndOfLineCommentToken", null);
_define_property(CustomGrammarPatternLexer, "SingleLineCommentToken", null);
_define_property(CustomGrammarPatternLexer, "RegularExpressionToken", null);
_define_property(CustomGrammarPatternLexer, "EndOfMultiLineCommentToken", null);
_define_property(CustomGrammarPatternLexer, "StartOfMultiLineCommentToken", null);
_define_property(CustomGrammarPatternLexer, "MiddleOfMultiLineCommentToken", null);
_define_property(CustomGrammarPatternLexer, "SinglyQuotedStringLiteralToken", null);
_define_property(CustomGrammarPatternLexer, "DoublyQuotedStringLiteralToken", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyUGF0dGVybi9sZXhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uTGV4ZXIsIFdoaXRlc3BhY2VUb2tlbiwgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyUGF0dGVybkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XG5cbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcblxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSBudWxsO1xuXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xuXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoQ3VzdG9tR3JhbW1hclBhdHRlcm5MZXhlcik7IH1cbn1cbiJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyUGF0dGVybkxleGVyIiwiZnJvbU5vdGhpbmciLCJDb21tb25MZXhlciIsImVudHJpZXMiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyQkFKbUQ7OERBRXBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsMENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQXVCWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLHdCQUFXLENBQUNELFdBQVcsQ0F2QmxDRDtZQXVCK0Q7OztXQXZCL0RBO0VBQWtDRSx3QkFBVztBQUNoRSxpQkFEbUJGLDJCQUNaRyxXQUFVQSxnQkFBTztBQUV4QixpQkFIbUJILDJCQUdaSSxrQkFBaUJDLHNDQUF5QixFQUFFLEdBQUc7O0FBRXRELGlCQUxtQkwsMkJBS1pNLG1CQUFrQkEsNEJBQWU7QUFFeEMsaUJBUG1CTiwyQkFPWk8seUJBQXdCO0FBRS9CLGlCQVRtQlAsMkJBU1pRLDBCQUF5QjtBQUVoQyxpQkFYbUJSLDJCQVdaUywwQkFBeUI7QUFFaEMsaUJBYm1CVCwyQkFhWlUsOEJBQTZCO0FBRXBDLGlCQWZtQlYsMkJBZVpXLGdDQUErQjtBQUV0QyxpQkFqQm1CWCwyQkFpQlpZLGlDQUFnQztBQUV2QyxpQkFuQm1CWiwyQkFtQlphLGtDQUFpQztBQUV4QyxpQkFyQm1CYiwyQkFxQlpjLGtDQUFpQyJ9