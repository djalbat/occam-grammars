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
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamlexers.CommonLexer.fromRules(CustomGrammarPatternLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamlexers.CommonLexer.fromEntries(CustomGrammarPatternLexer, entries);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyUGF0dGVybi9sZXhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uTGV4ZXIsIFdoaXRlc3BhY2VUb2tlbiwgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyUGF0dGVybkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XG5cbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcblxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSBudWxsO1xuXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xuXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoQ3VzdG9tR3JhbW1hclBhdHRlcm5MZXhlcik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tUnVsZXMoQ3VzdG9tR3JhbW1hclBhdHRlcm5MZXhlciwgcnVsZXMpOyB9XG5cbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKEN1c3RvbUdyYW1tYXJQYXR0ZXJuTGV4ZXIsIGVudHJpZXMpOyB9XG59XG4iXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hclBhdHRlcm5MZXhlciIsImZyb21Ob3RoaW5nIiwiQ29tbW9uTGV4ZXIiLCJmcm9tUnVsZXMiLCJydWxlcyIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJCQUptRDs4REFFcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSwwQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBdUJaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0Msd0JBQVcsQ0FBQ0QsV0FBVyxDQXZCbENEO1lBdUIrRDs7O1lBRTNFRyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLO2dCQUFJLE9BQU9GLHdCQUFXLENBQUNDLFNBQVMsQ0F6Qm5DSCwyQkF5QitESTtZQUFROzs7WUFFbkZDLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLE9BQU87Z0JBQUksT0FBT0osd0JBQVcsQ0FBQ0csV0FBVyxDQTNCekNMLDJCQTJCcUVNO1lBQVU7OztXQTNCL0VOO0VBQWtDRSx3QkFBVztBQUNoRSxpQkFEbUJGLDJCQUNaTSxXQUFVQSxnQkFBTztBQUV4QixpQkFIbUJOLDJCQUdaTyxrQkFBaUJDLHNDQUF5QixFQUFFLEdBQUc7O0FBRXRELGlCQUxtQlIsMkJBS1pTLG1CQUFrQkEsNEJBQWU7QUFFeEMsaUJBUG1CVCwyQkFPWlUseUJBQXdCO0FBRS9CLGlCQVRtQlYsMkJBU1pXLDBCQUF5QjtBQUVoQyxpQkFYbUJYLDJCQVdaWSwwQkFBeUI7QUFFaEMsaUJBYm1CWiwyQkFhWmEsOEJBQTZCO0FBRXBDLGlCQWZtQmIsMkJBZVpjLGdDQUErQjtBQUV0QyxpQkFqQm1CZCwyQkFpQlplLGlDQUFnQztBQUV2QyxpQkFuQm1CZiwyQkFtQlpnQixrQ0FBaUM7QUFFeEMsaUJBckJtQmhCLDJCQXFCWmlCLGtDQUFpQyJ9