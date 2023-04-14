"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReadmeLexer;
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
var ReadmeLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(ReadmeLexer, CommonLexer);
    var _super = _create_super(ReadmeLexer);
    function ReadmeLexer() {
        _class_call_check(this, ReadmeLexer);
        return _super.apply(this, arguments);
    }
    _create_class(ReadmeLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamlexers.CommonLexer.fromNothing(ReadmeLexer);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamlexers.CommonLexer.fromRules(ReadmeLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamlexers.CommonLexer.fromEntries(ReadmeLexer, entries);
            }
        }
    ]);
    return ReadmeLexer;
}(_occamlexers.CommonLexer);
_define_property(ReadmeLexer, "entries", _entries.default);
_define_property(ReadmeLexer, "EndOfLineToken", _occamlexers.EndOfLineSignificantToken);
_define_property(ReadmeLexer, "WhitespaceToken", _occamlexers.WhitespaceToken);
_define_property(ReadmeLexer, "EndOfLineCommentToken", null);
_define_property(ReadmeLexer, "SingleLineCommentToken", null);
_define_property(ReadmeLexer, "RegularExpressionToken", null);
_define_property(ReadmeLexer, "EndOfMultiLineCommentToken", null);
_define_property(ReadmeLexer, "StartOfMultiLineCommentToken", null);
_define_property(ReadmeLexer, "MiddleOfMultiLineCommentToken", null);
_define_property(ReadmeLexer, "SinglyQuotedStringLiteralToken", null);
_define_property(ReadmeLexer, "DoublyQuotedStringLiteralToken", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWFkbWUvbGV4ZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb21tb25MZXhlciwgV2hpdGVzcGFjZVRva2VuLCBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZG1lTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuO1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhSZWFkbWVMZXhlcik7IH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbVJ1bGVzKFJlYWRtZUxleGVyLCBydWxlcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKFJlYWRtZUxleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmVhZG1lTGV4ZXIiLCJmcm9tTm90aGluZyIsIkNvbW1vbkxleGVyIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyQkFKbUQ7OERBRXBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsNEJBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUF1QlpDLEtBQUFBO21CQUFQLFNBQU9BLGNBQWM7Z0JBQUUsT0FBT0Msd0JBQVcsQ0FBQ0QsV0FBVyxDQXZCbENEO1lBdUJpRDs7O1lBRTdERyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLLEVBQUU7Z0JBQUUsT0FBT0Ysd0JBQVcsQ0FBQ0MsU0FBUyxDQXpCbkNILGFBeUJpREk7WUFBUTs7O1lBRXJFQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxPQUFPLEVBQUU7Z0JBQUUsT0FBT0osd0JBQVcsQ0FBQ0csV0FBVyxDQTNCekNMLGFBMkJ1RE07WUFBVTs7O1dBM0JqRU47RUFBb0JFLHdCQUFXO0FBQ2xELGlCQURtQkYsYUFDWk0sV0FBVUEsZ0JBQU87QUFFeEIsaUJBSG1CTixhQUdaTyxrQkFBaUJDLHNDQUF5QjtBQUVqRCxpQkFMbUJSLGFBS1pTLG1CQUFrQkEsNEJBQWU7QUFFeEMsaUJBUG1CVCxhQU9aVSx5QkFBd0IsSUFBSTtBQUVuQyxpQkFUbUJWLGFBU1pXLDBCQUF5QixJQUFJO0FBRXBDLGlCQVhtQlgsYUFXWlksMEJBQXlCLElBQUk7QUFFcEMsaUJBYm1CWixhQWFaYSw4QkFBNkIsSUFBSTtBQUV4QyxpQkFmbUJiLGFBZVpjLGdDQUErQixJQUFJO0FBRTFDLGlCQWpCbUJkLGFBaUJaZSxpQ0FBZ0MsSUFBSTtBQUUzQyxpQkFuQm1CZixhQW1CWmdCLGtDQUFpQyxJQUFJO0FBRTVDLGlCQXJCbUJoQixhQXFCWmlCLGtDQUFpQyxJQUFJIn0=