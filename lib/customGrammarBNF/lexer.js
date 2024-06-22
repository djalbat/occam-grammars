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
var _lexer = /*#__PURE__*/ _interop_require_default(require("../common/lexer"));
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
                return _lexer.default.fromNothing(CustomGrammarBNFnLexer);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _lexer.default.fromRules(CustomGrammarBNFnLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _lexer.default.fromEntries(CustomGrammarBNFnLexer, entries);
            }
        }
    ]);
    return CustomGrammarBNFnLexer;
}(_lexer.default);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyQk5GL2xleGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciwgV2hpdGVzcGFjZVRva2VuLCBSZWd1bGFyRXhwcmVzc2lvblRva2VuLCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuLCBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBDb21tb25MZXhlciBmcm9tIFwiLi4vY29tbW9uL2xleGVyXCI7XG5cbmNvbnN0IHsgZW50cmllcyB9ID0gQk5GTGV4ZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUdyYW1tYXJCTkZuTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcblxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuOyAvLy9cblxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xuXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xuXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gUmVndWxhckV4cHJlc3Npb25Ub2tlbjtcblxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21Ob3RoaW5nKEN1c3RvbUdyYW1tYXJCTkZuTGV4ZXIpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbVJ1bGVzKEN1c3RvbUdyYW1tYXJCTkZuTGV4ZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhDdXN0b21HcmFtbWFyQk5GbkxleGVyLCBlbnRyaWVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXJCTkZuTGV4ZXIiLCJlbnRyaWVzIiwiQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsIkNvbW1vbkxleGVyIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJmcm9tRW50cmllcyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJCQU4yRzs0REFFeEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQU0sQUFBRUMsVUFBWUMscUJBQVEsQ0FBcEJEO0FBRU8sSUFBQSxBQUFNRCx1Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBdUJaRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsY0FBVyxDQUFDRCxXQUFXLENBdkJsQ0g7WUF1QjREOzs7WUFFeEVLLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVDLEtBQUs7Z0JBQUksT0FBT0YsY0FBVyxDQUFDQyxTQUFTLENBekJuQ0wsd0JBeUI0RE07WUFBUTs7O1lBRWhGQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZTixPQUFPO2dCQUFJLE9BQU9HLGNBQVcsQ0FBQ0csV0FBVyxDQTNCekNQLHdCQTJCa0VDO1lBQVU7OztXQTNCNUVEO0VBQStCSSxjQUFXO0FBQzdELGlCQURtQkosd0JBQ1pDLFdBQVVBO0FBRWpCLGlCQUhtQkQsd0JBR1pRLGtCQUFpQkMseUNBQTRCLEVBQUUsR0FBRzs7QUFFekQsaUJBTG1CVCx3QkFLWlUsbUJBQWtCQSw0QkFBZTtBQUV4QyxpQkFQbUJWLHdCQU9aVyx5QkFBd0I7QUFFL0IsaUJBVG1CWCx3QkFTWlksMEJBQXlCQSxtQ0FBc0I7QUFFdEQsaUJBWG1CWix3QkFXWmEsMEJBQXlCO0FBRWhDLGlCQWJtQmIsd0JBYVpjLDhCQUE2QjtBQUVwQyxpQkFmbUJkLHdCQWVaZSxnQ0FBK0I7QUFFdEMsaUJBakJtQmYsd0JBaUJaZ0IsaUNBQWdDO0FBRXZDLGlCQW5CbUJoQix3QkFtQlppQixrQ0FBaUM7QUFFeEMsaUJBckJtQmpCLHdCQXFCWmtCLGtDQUFpQ0EsMkNBQThCIn0=