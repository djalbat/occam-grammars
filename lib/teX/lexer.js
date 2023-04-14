"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TeXLexer;
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
var TeXLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(TeXLexer, CommonLexer);
    var _super = _create_super(TeXLexer);
    function TeXLexer() {
        _class_call_check(this, TeXLexer);
        return _super.apply(this, arguments);
    }
    _create_class(TeXLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamlexers.CommonLexer.fromNothing(TeXLexer);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamlexers.CommonLexer.fromRules(TeXLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamlexers.CommonLexer.fromEntries(TeXLexer, entries);
            }
        }
    ]);
    return TeXLexer;
}(_occamlexers.CommonLexer);
_define_property(TeXLexer, "entries", _entries.default);
_define_property(TeXLexer, "EndOfLineToken", _occamlexers.EndOfLineNonSignificantToken);
_define_property(TeXLexer, "WhitespaceToken", _occamlexers.WhitespaceToken);
_define_property(TeXLexer, "EndOfLineCommentToken", null);
_define_property(TeXLexer, "SingleLineCommentToken", null);
_define_property(TeXLexer, "RegularExpressionToken", null);
_define_property(TeXLexer, "EndOfMultiLineCommentToken", null);
_define_property(TeXLexer, "StartOfMultiLineCommentToken", null);
_define_property(TeXLexer, "MiddleOfMultiLineCommentToken", null);
_define_property(TeXLexer, "SinglyQuotedStringLiteralToken", null);
_define_property(TeXLexer, "DoublyQuotedStringLiteralToken", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZVgvbGV4ZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb21tb25MZXhlciwgV2hpdGVzcGFjZVRva2VuLCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVYTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuO1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhUZVhMZXhlcik7IH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbVJ1bGVzKFRlWExleGVyLCBydWxlcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKFRlWExleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVGVYTGV4ZXIiLCJmcm9tTm90aGluZyIsIkNvbW1vbkxleGVyIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyQkFKc0Q7OERBRXZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEseUJBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUF1QlpDLEtBQUFBO21CQUFQLFNBQU9BLGNBQWM7Z0JBQUUsT0FBT0Msd0JBQVcsQ0FBQ0QsV0FBVyxDQXZCbENEO1lBdUI4Qzs7O1lBRTFERyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLLEVBQUU7Z0JBQUUsT0FBT0Ysd0JBQVcsQ0FBQ0MsU0FBUyxDQXpCbkNILFVBeUI4Q0k7WUFBUTs7O1lBRWxFQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxPQUFPLEVBQUU7Z0JBQUUsT0FBT0osd0JBQVcsQ0FBQ0csV0FBVyxDQTNCekNMLFVBMkJvRE07WUFBVTs7O1dBM0I5RE47RUFBaUJFLHdCQUFXO0FBQy9DLGlCQURtQkYsVUFDWk0sV0FBVUEsZ0JBQU87QUFFeEIsaUJBSG1CTixVQUdaTyxrQkFBaUJDLHlDQUE0QjtBQUVwRCxpQkFMbUJSLFVBS1pTLG1CQUFrQkEsNEJBQWU7QUFFeEMsaUJBUG1CVCxVQU9aVSx5QkFBd0IsSUFBSTtBQUVuQyxpQkFUbUJWLFVBU1pXLDBCQUF5QixJQUFJO0FBRXBDLGlCQVhtQlgsVUFXWlksMEJBQXlCLElBQUk7QUFFcEMsaUJBYm1CWixVQWFaYSw4QkFBNkIsSUFBSTtBQUV4QyxpQkFmbUJiLFVBZVpjLGdDQUErQixJQUFJO0FBRTFDLGlCQWpCbUJkLFVBaUJaZSxpQ0FBZ0MsSUFBSTtBQUUzQyxpQkFuQm1CZixVQW1CWmdCLGtDQUFpQyxJQUFJO0FBRTVDLGlCQXJCbUJoQixVQXFCWmlCLGtDQUFpQyxJQUFJIn0=