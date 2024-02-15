"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaJSONLexer;
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
var MetaJSONLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(MetaJSONLexer, CommonLexer);
    var _super = _create_super(MetaJSONLexer);
    function MetaJSONLexer() {
        _class_call_check(this, MetaJSONLexer);
        return _super.apply(this, arguments);
    }
    _create_class(MetaJSONLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamlexers.CommonLexer.fromNothing(MetaJSONLexer);
            }
        }
    ]);
    return MetaJSONLexer;
}(_occamlexers.CommonLexer);
_define_property(MetaJSONLexer, "entries", _entries.default);
_define_property(MetaJSONLexer, "EndOfLineToken", _occamlexers.EndOfLineNonSignificantToken) ///
;
_define_property(MetaJSONLexer, "WhitespaceToken", _occamlexers.WhitespaceToken);
_define_property(MetaJSONLexer, "EndOfLineCommentToken", null);
_define_property(MetaJSONLexer, "RegularExpressionToken", null);
_define_property(MetaJSONLexer, "SingleLineCommentToken", null);
_define_property(MetaJSONLexer, "EndOfMultiLineCommentToken", null);
_define_property(MetaJSONLexer, "StartOfMultiLineCommentToken", null);
_define_property(MetaJSONLexer, "MiddleOfMultiLineCommentToken", null);
_define_property(MetaJSONLexer, "SinglyQuotedStringLiteralToken", null);
_define_property(MetaJSONLexer, "DoublyQuotedStringLiteralToken", _occamlexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXRhSlNPTi9sZXhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbW1vbkxleGVyLFxyXG4gICAgICAgICBXaGl0ZXNwYWNlVG9rZW4sXHJcbiAgICAgICAgIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4sXHJcbiAgICAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcclxuXHJcbmltcG9ydCBlbnRyaWVzIGZyb20gXCIuL2VudHJpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFKU09OTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhNZXRhSlNPTkxleGVyKTsgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJNZXRhSlNPTkxleGVyIiwiZnJvbU5vdGhpbmciLCJDb21tb25MZXhlciIsImVudHJpZXMiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyQkFKMEI7OERBRTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsOEJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQXVCWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLHdCQUFXLENBQUNELFdBQVcsQ0F2QmxDRDtZQXVCbUQ7OztXQXZCbkRBO0VBQXNCRSx3QkFBVztBQUNwRCxpQkFEbUJGLGVBQ1pHLFdBQVVBLGdCQUFPO0FBRXhCLGlCQUhtQkgsZUFHWkksa0JBQWlCQyx5Q0FBNEIsRUFBRSxHQUFHOztBQUV6RCxpQkFMbUJMLGVBS1pNLG1CQUFrQkEsNEJBQWU7QUFFeEMsaUJBUG1CTixlQU9aTyx5QkFBd0I7QUFFL0IsaUJBVG1CUCxlQVNaUSwwQkFBeUI7QUFFaEMsaUJBWG1CUixlQVdaUywwQkFBeUI7QUFFaEMsaUJBYm1CVCxlQWFaVSw4QkFBNkI7QUFFcEMsaUJBZm1CVixlQWVaVyxnQ0FBK0I7QUFFdEMsaUJBakJtQlgsZUFpQlpZLGlDQUFnQztBQUV2QyxpQkFuQm1CWixlQW1CWmEsa0NBQWlDO0FBRXhDLGlCQXJCbUJiLGVBcUJaYyxrQ0FBaUNBLDJDQUE4QiJ9