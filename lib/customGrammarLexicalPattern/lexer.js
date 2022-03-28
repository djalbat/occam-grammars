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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vbGV4ZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25MZXhlciwgV2hpdGVzcGFjZVRva2VuLCBFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgZW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XG5cbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcblxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcblxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSBudWxsO1xuXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xuXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbVJ1bGVzKEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyLCBydWxlcyk7IH1cblxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIsIGVudHJpZXMpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIl0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyIiwiZnJvbU5vdGhpbmciLCJDb21tb25MZXhlciIsImZyb21SdWxlcyIsInJ1bGVzIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVTaWduaWZpY2FudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUV3RSxJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFFbEUsSUFBQSxRQUFXLGtDQUFYLFdBQVcsRUFBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUovQjtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBTWUsSUFBQSxBQUFNQSxnQ0FBZ0MsaUJDTmxELEFETVk7NERBTmY7O2FBTXFCQSxnQ0FBZ0M7K0RBTnJEOzs7OztZQTZCU0MsR0FBVyxFQUFYQSxhQUFXO1lFN0JwQixPRjZCRSxTQUFPQSxXQUFXLEdBQUc7Z0JBQUUsT0FBT0MsWUFBVyxhQUFDRCxXQUFXLENBQUNELGdDQUFnQyxDQUFDLENBQUM7YUFBRTs7O1lBRW5GRyxHQUFTLEVBQVRBLFdBQVM7WUUvQmxCLE9GK0JFLFNBQU9BLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFO2dCQUFFLE9BQU9GLFlBQVcsYUFBQ0MsU0FBUyxDQUFDSCxnQ0FBZ0MsRUFBRUksS0FBSyxDQUFDLENBQUM7YUFBRTs7O1lBRTNGQyxHQUFXLEVBQVhBLGFBQVc7WUVqQ3BCLE9GaUNFLFNBQU9BLFdBQVcsQ0FBQ0MsT0FBTyxFQUFFO2dCQUFFLE9BQU9KLFlBQVcsYUFBQ0csV0FBVyxDQUFDTCxnQ0FBZ0MsRUFBRU0sT0FBTyxDQUFDLENBQUM7YUFBRTs7TUFqQzVHOztDQWtDQyxDQTVCNkRKLFlBQVcsYUE0QnhFO2tCQTVCb0JGLGdDQUFnQyxBQU5yRDtBQU9FLGdCQURtQkEsZ0NBQWdDLEVBQzVDTSxTQUFPLEVBQUdBLFFBQU8sU0FBQyxBQVAzQjtBQVNFLGdCQUhtQk4sZ0NBQWdDLEVBRzVDTyxnQkFBYyxFQUFHQyxZQUF5QiwyQkFBQyxDQUFDLEdBQUc7QUFUeEQ7QUFXRSxnQkFMbUJSLGdDQUFnQyxFQUs1Q1MsaUJBQWUsRUFBR0EsWUFBZSxpQkFBQyxBQVgzQztBQWFFLGdCQVBtQlQsZ0NBQWdDLEVBTzVDVSx1QkFBcUIsRUFBRyxJQUFJLENBQUMsQUFidEM7QUFlRSxnQkFUbUJWLGdDQUFnQyxFQVM1Q1csd0JBQXNCLEVBQUcsSUFBSSxDQUFDLEFBZnZDO0FBaUJFLGdCQVhtQlgsZ0NBQWdDLEVBVzVDWSx3QkFBc0IsRUFBRyxJQUFJLENBQUMsQUFqQnZDO0FBbUJFLGdCQWJtQlosZ0NBQWdDLEVBYTVDYSw0QkFBMEIsRUFBRyxJQUFJLENBQUMsQUFuQjNDO0FBcUJFLGdCQWZtQmIsZ0NBQWdDLEVBZTVDYyw4QkFBNEIsRUFBRyxJQUFJLENBQUMsQUFyQjdDO0FBdUJFLGdCQWpCbUJkLGdDQUFnQyxFQWlCNUNlLCtCQUE2QixFQUFHLElBQUksQ0FBQyxBQXZCOUM7QUF5QkUsZ0JBbkJtQmYsZ0NBQWdDLEVBbUI1Q2dCLGdDQUE4QixFQUFHLElBQUksQ0FBQyxBQXpCL0M7QUEyQkUsZ0JBckJtQmhCLGdDQUFnQyxFQXFCNUNpQixnQ0FBOEIsRUFBRyxJQUFJLENBQUMsQUEzQi9DIn0=