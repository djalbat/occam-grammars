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
var MetaJSONLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(MetaJSONLexer, CommonLexer);
    var _super = _createSuper(MetaJSONLexer);
    function MetaJSONLexer() {
        _classCallCheck(this, MetaJSONLexer);
        return _super.apply(this, arguments);
    }
    _createClass(MetaJSONLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamLexers.CommonLexer.fromNothing(MetaJSONLexer);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamLexers.CommonLexer.fromRules(MetaJSONLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamLexers.CommonLexer.fromEntries(MetaJSONLexer, entries);
            }
        }
    ]);
    return MetaJSONLexer;
}(_occamLexers.CommonLexer);
exports.default = MetaJSONLexer;
_defineProperty(MetaJSONLexer, "entries", _entries.default);
_defineProperty(MetaJSONLexer, "EndOfLineToken", _occamLexers.EndOfLineNonSignificantToken) ///
;
_defineProperty(MetaJSONLexer, "WhitespaceToken", _occamLexers.WhitespaceToken);
_defineProperty(MetaJSONLexer, "EndOfLineCommentToken", null);
_defineProperty(MetaJSONLexer, "RegularExpressionToken", null);
_defineProperty(MetaJSONLexer, "SingleLineCommentToken", null);
_defineProperty(MetaJSONLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(MetaJSONLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(MetaJSONLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(MetaJSONLexer, "SinglyQuotedStringLiteralToken", null);
_defineProperty(MetaJSONLexer, "DoublyQuotedStringLiteralToken", _occamLexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXRhSlNPTi9sZXhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbW1vbkxleGVyLFxyXG4gICAgICAgICBXaGl0ZXNwYWNlVG9rZW4sXHJcbiAgICAgICAgIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4sXHJcbiAgICAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcclxuXHJcbmltcG9ydCBlbnRyaWVzIGZyb20gXCIuL2VudHJpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFKU09OTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhNZXRhSlNPTkxleGVyKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tUnVsZXMoTWV0YUpTT05MZXhlciwgcnVsZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhNZXRhSlNPTkxleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJNZXRhSlNPTkxleGVyIiwiZnJvbU5vdGhpbmciLCJDb21tb25MZXhlciIsImZyb21SdWxlcyIsInJ1bGVzIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUsrQyxJQUFBLFlBQWMsMEJBQUE7QUFFekMsSUFBQSxRQUFXLCtDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OERBUC9CO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7Ozs7O1VBQUE7O3dCQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFTZSxJQUFBLEFBQU1BLGFBQWEsaUJDVGhDLEFEU2E7eUNBVGY7O2FBU3FCQSxhQUFhOzRDQVRsQzs7Ozs7WUFnQ1NDLEdBQVcsZUFBQTtZRWhDcEIsT0ZnQ0UsU0FBT0EsV0FBVyxHQUFHO2dCQUFFLE9BQU9DLFlBQVcsYUFBQ0QsV0FBVyxDQUFDRCxhQUFhLENBQUMsQ0FBQzthQUFFOzs7WUFFaEVHLEdBQVMsYUFBQTtZRWxDbEIsT0ZrQ0UsU0FBT0EsU0FBUyxDQUFDQyxLQUFLLEVBQUU7Z0JBQUUsT0FBT0YsWUFBVyxhQUFDQyxTQUFTLENBQUNILGFBQWEsRUFBRUksS0FBSyxDQUFDLENBQUM7YUFBRTs7O1lBRXhFQyxHQUFXLGVBQUE7WUVwQ3BCLE9Gb0NFLFNBQU9BLFdBQVcsQ0FBQ0MsT0FBTyxFQUFFO2dCQUFFLE9BQU9KLFlBQVcsYUFBQ0csV0FBVyxDQUFDTCxhQUFhLEVBQUVNLE9BQU8sQ0FBQyxDQUFDO2FBQUU7O01BcEN6Rjs7Q0FxQ0MsQ0E1QjBDSixZQUFXLGFBNEJyRDtrQkE1Qm9CRixhQUFhLEFBVGxDO0FBVUUsZ0JBRG1CQSxhQUFhLGFBQ2ZNLFFBQU8sU0FBQyxBQVYzQjtBQVlFLGdCQUhtQk4sYUFBYSxvQkFHUk8sWUFBNEIsOEJBQUMsQ0FBQyxHQUFHO0FBWjNEO0FBY0UsZ0JBTG1CUCxhQUFhLHFCQUtQUSxZQUFlLGlCQUFDLEFBZDNDO0FBZ0JFLGdCQVBtQlIsYUFBYSwyQkFPRCxJQUFJLENBQUMsQUFoQnRDO0FBa0JFLGdCQVRtQkEsYUFBYSw0QkFTQSxJQUFJLENBQUMsQUFsQnZDO0FBb0JFLGdCQVhtQkEsYUFBYSw0QkFXQSxJQUFJLENBQUMsQUFwQnZDO0FBc0JFLGdCQWJtQkEsYUFBYSxnQ0FhSSxJQUFJLENBQUMsQUF0QjNDO0FBd0JFLGdCQWZtQkEsYUFBYSxrQ0FlTSxJQUFJLENBQUMsQUF4QjdDO0FBMEJFLGdCQWpCbUJBLGFBQWEsbUNBaUJPLElBQUksQ0FBQyxBQTFCOUM7QUE0QkUsZ0JBbkJtQkEsYUFBYSxvQ0FtQlEsSUFBSSxDQUFDLEFBNUIvQztBQThCRSxnQkFyQm1CQSxhQUFhLG9DQXFCUVMsWUFBOEIsZ0NBQUMsQUE5QnpFIn0=