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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vbGV4ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbW1vbkxleGVyLCBXaGl0ZXNwYWNlVG9rZW4sIEVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBlbnRyaWVzIGZyb20gXCIuL2VudHJpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcblxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xuXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xuXG4gIHN0YXRpYyBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlcik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tUnVsZXMoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciwgZW50cmllcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciIsImZyb21Ob3RoaW5nIiwiQ29tbW9uTGV4ZXIiLCJmcm9tUnVsZXMiLCJydWxlcyIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RTt3QjtBQUUyRCxHQUFjLENBQWQsWUFBYztBQUVsRSxHQUFXLENBQVgsUUFBVzs7Ozs7Ozs7Ozs7Ozs7OzhEO3NDOzZEO2lFOzs7O3dFO2dFOzs7Ozs7Ozs7O1U7O3dCOzs7Ozs7O0s7Ozs7Ozs7Ozs7Ozs7TTt5RDs7Ozs7Ozs7Ozs7Ozs7O3VCOztLOzs7OzJCOzs7Ozs7OztxRjs7Ozs7Ozs7Ozs7O21FOztpRDs7Ozs7QUFFaEIsR0FBSyxDQUFDQSxnQ0FBZ0MsaUJBQXRDLFFBQVE7NEQ7O2FBQUZBLGdDQUFnQzsrRDs7Ozs7WUF1QjVDQyxHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxHQUFHLENBQUM7Z0JBQUMsTUFBTSxDQUFDQyxZQUFXLGFBQUNELFdBQVcsQ0FBQ0QsZ0NBQWdDO1lBQUcsQ0FBQzs7O1lBRW5GRyxHQUFTLEVBQVRBLENBQVM7bUJBQWhCLFFBQVEsQ0FBREEsU0FBUyxDQUFDQyxLQUFLLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUNGLFlBQVcsYUFBQ0MsU0FBUyxDQUFDSCxnQ0FBZ0MsRUFBRUksS0FBSztZQUFHLENBQUM7OztZQUUzRkMsR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsQ0FBQ0MsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDSixZQUFXLGFBQUNHLFdBQVcsQ0FBQ0wsZ0NBQWdDLEVBQUVNLE9BQU87WUFBRyxDQUFDOztNOztFQTNCOUNKLFlBQVc7a0JBQXBERixnQ0FBZ0MsQTtnQkFBaENBLGdDQUFnQyxFQUM1Q00sQ0FBTyxVQUFHQSxRQUFPLFM7Z0JBRExOLGdDQUFnQyxFQUc1Q08sQ0FBYyxpQkFBR0MsWUFBeUIsNEJBQUUsRUFBRyxBQUFILENBQUc7QTtnQkFIbkNSLGdDQUFnQyxFQUs1Q1MsQ0FBZSxrQkFBR0EsWUFBZSxpQjtnQkFMckJULGdDQUFnQyxFQU81Q1UsQ0FBcUIsd0JBQUcsSUFBSSxDO2dCQVBoQlYsZ0NBQWdDLEVBUzVDVyxDQUFzQix5QkFBRyxJQUFJLEM7Z0JBVGpCWCxnQ0FBZ0MsRUFXNUNZLENBQXNCLHlCQUFHLElBQUksQztnQkFYakJaLGdDQUFnQyxFQWE1Q2EsQ0FBMEIsNkJBQUcsSUFBSSxDO2dCQWJyQmIsZ0NBQWdDLEVBZTVDYyxDQUE0QiwrQkFBRyxJQUFJLEM7Z0JBZnZCZCxnQ0FBZ0MsRUFpQjVDZSxDQUE2QixnQ0FBRyxJQUFJLEM7Z0JBakJ4QmYsZ0NBQWdDLEVBbUI1Q2dCLENBQThCLGlDQUFHLElBQUksQztnQkFuQnpCaEIsZ0NBQWdDLEVBcUI1Q2lCLENBQThCLGlDQUFHLElBQUksQyJ9