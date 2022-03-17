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
    "@swc/helpers - typeof";
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
                return _occamLexers.CommonLexer.fromNothing(CustomGrammarLexicalPatternLexer);
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
exports.default = CustomGrammarLexicalPatternLexer;
_defineProperty(CustomGrammarLexicalPatternLexer, "entries", _entries.default);
_defineProperty(CustomGrammarLexicalPatternLexer, "EndOfLineToken", _occamLexers.EndOfLineSignificantToken) ///
;
_defineProperty(CustomGrammarLexicalPatternLexer, "WhitespaceToken", _occamLexers.WhitespaceToken);
_defineProperty(CustomGrammarLexicalPatternLexer, "EndOfLineCommentToken", null);
_defineProperty(CustomGrammarLexicalPatternLexer, "SingleLineCommentToken", null);
_defineProperty(CustomGrammarLexicalPatternLexer, "RegularExpressionToken", null);
_defineProperty(CustomGrammarLexicalPatternLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(CustomGrammarLexicalPatternLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(CustomGrammarLexicalPatternLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(CustomGrammarLexicalPatternLexer, "SinglyQuotedStringLiteralToken", null);
_defineProperty(CustomGrammarLexicalPatternLexer, "DoublyQuotedStringLiteralToken", null);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbW1vbkxleGVyLCBXaGl0ZXNwYWNlVG9rZW4sIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBlbnRyaWVzIGZyb20gXCIuL2VudHJpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcblxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xuXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xuXG4gIHN0YXRpYyBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlcik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tUnVsZXMoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciwgZW50cmllcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciIsImZyb21Ob3RoaW5nIiwiQ29tbW9uTGV4ZXIiLCJmcm9tUnVsZXMiLCJydWxlcyIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFd0UsSUFBQSxZQUFjLDBCQUFBO0FBRWxFLElBQUEsUUFBVywrQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUovQjtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBTWUsSUFBQSxBQUFNQSxnQ0FBZ0MsaUJDTmxELEFETVk7NERBTmY7O2FBTXFCQSxnQ0FBZ0M7K0RBTnJEOzs7OztZQTZCU0MsR0FBVyxlQUFBO1lFN0JwQixPRjZCRSxTQUFPQSxXQUFXLEdBQUc7Z0JBQUUsT0FBT0MsWUFBVyxhQUFDRCxXQUFXLENBQUNELGdDQUFnQyxDQUFDLENBQUM7YUFBRTs7O1lBRW5GRyxHQUFTLGFBQUE7WUUvQmxCLE9GK0JFLFNBQU9BLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFO2dCQUFFLE9BQU9GLFlBQVcsYUFBQ0MsU0FBUyxDQUFDSCxnQ0FBZ0MsRUFBRUksS0FBSyxDQUFDLENBQUM7YUFBRTs7O1lBRTNGQyxHQUFXLGVBQUE7WUVqQ3BCLE9GaUNFLFNBQU9BLFdBQVcsQ0FBQ0MsT0FBTyxFQUFFO2dCQUFFLE9BQU9KLFlBQVcsYUFBQ0csV0FBVyxDQUFDTCxnQ0FBZ0MsRUFBRU0sT0FBTyxDQUFDLENBQUM7YUFBRTs7TUFqQzVHOztDQWtDQyxDQTVCNkRKLFlBQVcsYUE0QnhFO2tCQTVCb0JGLGdDQUFnQyxBQU5yRDtBQU9FLGdCQURtQkEsZ0NBQWdDLGFBQ2xDTSxRQUFPLFNBQUMsQUFQM0I7QUFTRSxnQkFIbUJOLGdDQUFnQyxvQkFHM0JPLFlBQXlCLDJCQUFDLENBQUMsR0FBRztBQVR4RDtBQVdFLGdCQUxtQlAsZ0NBQWdDLHFCQUsxQlEsWUFBZSxpQkFBQyxBQVgzQztBQWFFLGdCQVBtQlIsZ0NBQWdDLDJCQU9wQixJQUFJLENBQUMsQUFidEM7QUFlRSxnQkFUbUJBLGdDQUFnQyw0QkFTbkIsSUFBSSxDQUFDLEFBZnZDO0FBaUJFLGdCQVhtQkEsZ0NBQWdDLDRCQVduQixJQUFJLENBQUMsQUFqQnZDO0FBbUJFLGdCQWJtQkEsZ0NBQWdDLGdDQWFmLElBQUksQ0FBQyxBQW5CM0M7QUFxQkUsZ0JBZm1CQSxnQ0FBZ0Msa0NBZWIsSUFBSSxDQUFDLEFBckI3QztBQXVCRSxnQkFqQm1CQSxnQ0FBZ0MsbUNBaUJaLElBQUksQ0FBQyxBQXZCOUM7QUF5QkUsZ0JBbkJtQkEsZ0NBQWdDLG9DQW1CWCxJQUFJLENBQUMsQUF6Qi9DO0FBMkJFLGdCQXJCbUJBLGdDQUFnQyxvQ0FxQlgsSUFBSSxDQUFDLEFBM0IvQyJ9