"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _entries = _interopRequireDefault(require("./entries"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var CustomGrammarLexicalPatternLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(CustomGrammarLexicalPatternLexer, CommonLexer);
    var _super = _createSuper(CustomGrammarLexicalPatternLexer);
    function CustomGrammarLexicalPatternLexer() {
        _classCallCheck(this, CustomGrammarLexicalPatternLexer);
        return _super.apply(this, arguments);
    }
    _createClass(CustomGrammarLexicalPatternLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamLexers.CommonLexer.fromEntries(CustomGrammarLexicalPatternLexer, _entries.default);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamLexers.CommonLexer.fromRules(CustomGrammarLexicalPatternLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamLexers.CommonLexer.fromEntries(CustomGrammarLexicalPatternLexer, entries);
            }
        }
    ]);
    return CustomGrammarLexicalPatternLexer;
}(_occamLexers.CommonLexer);
_defineProperty(CustomGrammarLexicalPatternLexer, "entries", _entries.default);
_defineProperty(CustomGrammarLexicalPatternLexer, "EndOfLineToken", _occamLexers.EndOfLineSignificantToken);
_defineProperty(CustomGrammarLexicalPatternLexer, "SingleLineCommentToken", null);
_defineProperty(CustomGrammarLexicalPatternLexer, "RegularExpressionToken", null);
_defineProperty(CustomGrammarLexicalPatternLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(CustomGrammarLexicalPatternLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(CustomGrammarLexicalPatternLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(CustomGrammarLexicalPatternLexer, "SinglyQuotedStringLiteralToken", null);
_defineProperty(CustomGrammarLexicalPatternLexer, "DoublyQuotedStringLiteralToken", null);
exports.default = CustomGrammarLexicalPatternLexer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbW1vbkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xuXG4gIHN0YXRpYyBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gIHN0YXRpYyBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciwgZW50cmllcyk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tUnVsZXMoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciwgZW50cmllcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciIsImZyb21Ob3RoaW5nIiwiZnJvbUVudHJpZXMiLCJmcm9tUnVsZXMiLCJydWxlcyIsImVudHJpZXMiLCJFbmRPZkxpbmVUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWdCLEdBQWMsQ0FBZCxZQUFjO0FBR3RCLEdBQVcsQ0FBWCxRQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVZBLGdDQUFnQyxpQkFBdEMsUUFBUTtjQUFGQSxnQ0FBZ0M7OEJBQWhDQSxnQ0FBZ0M7YUFBaENBLGdDQUFnQzs4QkFBaENBLGdDQUFnQzs7O2lCQUFoQ0EsZ0NBQWdDOztZQW1CNUNDLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBeEJILFlBQWMsYUF3QkVDLFdBQVcsQ0FBQ0YsZ0NBQWdDLEVBckJwRSxRQUFXO1lBcUJxRSxDQUFDOzs7WUFFNUZHLEdBQVMsRUFBVEEsQ0FBUzttQkFBaEIsUUFBUSxDQUFEQSxTQUFTLENBQUNDLEtBQUssRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0ExQk4sWUFBYyxhQTBCS0QsU0FBUyxDQUFDSCxnQ0FBZ0MsRUFBRUksS0FBSztZQUFHLENBQUM7OztZQUUzRkYsR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsQ0FBQ0csT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQTVCVixZQUFjLGFBNEJTSCxXQUFXLENBQUNGLGdDQUFnQyxFQUFFSyxPQUFPO1lBQUcsQ0FBQzs7O1dBdkJ2RkwsZ0NBQWdDO0VBTHpCLFlBQWM7Z0JBS3JCQSxnQ0FBZ0MsRUFDNUNLLENBQU8sVUFISSxRQUFXO2dCQUVWTCxnQ0FBZ0MsRUFHNUNNLENBQWMsaUJBUkssWUFBYztnQkFLckJOLGdDQUFnQyxFQUs1Q08sQ0FBc0IseUJBQUcsSUFBSTtnQkFMakJQLGdDQUFnQyxFQU81Q1EsQ0FBc0IseUJBQUcsSUFBSTtnQkFQakJSLGdDQUFnQyxFQVM1Q1MsQ0FBMEIsNkJBQUcsSUFBSTtnQkFUckJULGdDQUFnQyxFQVc1Q1UsQ0FBNEIsK0JBQUcsSUFBSTtnQkFYdkJWLGdDQUFnQyxFQWE1Q1csQ0FBNkIsZ0NBQUcsSUFBSTtnQkFieEJYLGdDQUFnQyxFQWU1Q1ksQ0FBOEIsaUNBQUcsSUFBSTtnQkFmekJaLGdDQUFnQyxFQWlCNUNhLENBQThCLGlDQUFHLElBQUk7a0JBakJ6QmIsZ0NBQWdDIn0=