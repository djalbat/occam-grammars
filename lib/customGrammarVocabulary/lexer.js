"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CustomGrammarVocabularyLexer;
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
var CustomGrammarVocabularyLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(CustomGrammarVocabularyLexer, CommonLexer);
    function CustomGrammarVocabularyLexer() {
        _class_call_check(this, CustomGrammarVocabularyLexer);
        return _call_super(this, CustomGrammarVocabularyLexer, arguments);
    }
    _create_class(CustomGrammarVocabularyLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamlexers.CommonLexer.fromNothing(CustomGrammarVocabularyLexer);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamlexers.CommonLexer.fromRules(CustomGrammarVocabularyLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamlexers.CommonLexer.fromEntries(CustomGrammarVocabularyLexer, entries);
            }
        }
    ]);
    return CustomGrammarVocabularyLexer;
}(_occamlexers.CommonLexer);
_define_property(CustomGrammarVocabularyLexer, "entries", _entries.default);
_define_property(CustomGrammarVocabularyLexer, "EndOfLineToken", _occamlexers.EndOfLineSignificantToken);
_define_property(CustomGrammarVocabularyLexer, "WhitespaceToken", _occamlexers.WhitespaceToken);
_define_property(CustomGrammarVocabularyLexer, "EndOfLineCommentToken", null);
_define_property(CustomGrammarVocabularyLexer, "SingleLineCommentToken", null);
_define_property(CustomGrammarVocabularyLexer, "RegularExpressionToken", null);
_define_property(CustomGrammarVocabularyLexer, "EndOfMultiLineCommentToken", null);
_define_property(CustomGrammarVocabularyLexer, "StartOfMultiLineCommentToken", null);
_define_property(CustomGrammarVocabularyLexer, "MiddleOfMultiLineCommentToken", null);
_define_property(CustomGrammarVocabularyLexer, "SinglyQuotedStringLiteralToken", null);
_define_property(CustomGrammarVocabularyLexer, "DoublyQuotedStringLiteralToken", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyVm9jYWJ1bGFyeS9sZXhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uTGV4ZXIsIFdoaXRlc3BhY2VUb2tlbiwgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyVm9jYWJ1bGFyeUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XG5cbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbjtcblxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xuXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xuXG4gIHN0YXRpYyBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhDdXN0b21HcmFtbWFyVm9jYWJ1bGFyeUxleGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21SdWxlcyhDdXN0b21HcmFtbWFyVm9jYWJ1bGFyeUxleGVyLCBydWxlcyk7IH1cblxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQ3VzdG9tR3JhbW1hclZvY2FidWxhcnlMZXhlciwgZW50cmllcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyVm9jYWJ1bGFyeUxleGVyIiwiZnJvbU5vdGhpbmciLCJDb21tb25MZXhlciIsImZyb21SdWxlcyIsInJ1bGVzIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkJBSm1EOzhEQUVwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTCxJQUFBLEFBQU1BLDZDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBdUJaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0Msd0JBQVcsQ0FBQ0QsV0FBVyxDQXZCbENEO1lBdUJrRTs7O1lBRTlFRyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLO2dCQUFJLE9BQU9GLHdCQUFXLENBQUNDLFNBQVMsQ0F6Qm5DSCw4QkF5QmtFSTtZQUFROzs7WUFFdEZDLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLE9BQU87Z0JBQUksT0FBT0osd0JBQVcsQ0FBQ0csV0FBVyxDQTNCekNMLDhCQTJCd0VNO1lBQVU7OztXQTNCbEZOO0VBQXFDRSx3QkFBVztBQUNuRSxpQkFEbUJGLDhCQUNaTSxXQUFVQSxnQkFBTztBQUV4QixpQkFIbUJOLDhCQUdaTyxrQkFBaUJDLHNDQUF5QjtBQUVqRCxpQkFMbUJSLDhCQUtaUyxtQkFBa0JBLDRCQUFlO0FBRXhDLGlCQVBtQlQsOEJBT1pVLHlCQUF3QjtBQUUvQixpQkFUbUJWLDhCQVNaVywwQkFBeUI7QUFFaEMsaUJBWG1CWCw4QkFXWlksMEJBQXlCO0FBRWhDLGlCQWJtQlosOEJBYVphLDhCQUE2QjtBQUVwQyxpQkFmbUJiLDhCQWVaYyxnQ0FBK0I7QUFFdEMsaUJBakJtQmQsOEJBaUJaZSxpQ0FBZ0M7QUFFdkMsaUJBbkJtQmYsOEJBbUJaZ0Isa0NBQWlDO0FBRXhDLGlCQXJCbUJoQiw4QkFxQlppQixrQ0FBaUMifQ==