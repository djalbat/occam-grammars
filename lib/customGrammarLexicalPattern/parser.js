"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _bnf = _interopRequireDefault(require("./bnf"));
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
var CustomGrammarLexicalPatternParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(CustomGrammarLexicalPatternParser, CommonParser);
    var _super = _createSuper(CustomGrammarLexicalPatternParser);
    function CustomGrammarLexicalPatternParser() {
        _classCallCheck(this, CustomGrammarLexicalPatternParser);
        return _super.apply(this, arguments);
    }
    _createClass(CustomGrammarLexicalPatternParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamParsers.CommonParser.fromNothing(CustomGrammarLexicalPatternParser);
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                return _occamParsers.CommonParser.fromBNF(CustomGrammarLexicalPatternParser, bnf);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamParsers.CommonParser.fromRules(CustomGrammarLexicalPatternParser, rules);
            }
        }
    ]);
    return CustomGrammarLexicalPatternParser;
}(_occamParsers.CommonParser);
exports.default = CustomGrammarLexicalPatternParser;
_defineProperty(CustomGrammarLexicalPatternParser, "bnf", _bnf.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vcGFyc2VyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tTm90aGluZyhDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIpOyB9XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbUJORihDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIsIGJuZik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciwgcnVsZXMpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciIsImZyb21Ob3RoaW5nIiwiQ29tbW9uUGFyc2VyIiwiZnJvbUJORiIsImJuZiIsImZyb21SdWxlcyIsInJ1bGVzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWdCLElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtBQUU1QixJQUFBLElBQU8sa0NBQVAsT0FBTyxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEsaUNBQWlDLGlCQ05uRCxBRE1ZOzs7YUFBTUEsaUNBQWlDOzs7Ozs7WUFHN0NDLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxHQUFHO2dCQUFFLE9BQU9DLGFBQVksYUFBQSxDQUFDRCxXQUFXLENBQUNELGlDQUFpQyxDQUFDLENBQUM7YUFBRTs7O1lBRXJGRyxHQUFPLEVBQVBBLFNBQU87bUJBQWQsU0FBT0EsT0FBTyxDQUFDQyxHQUFHLEVBQUU7Z0JBQUUsT0FBT0YsYUFBWSxhQUFBLENBQUNDLE9BQU8sQ0FBQ0gsaUNBQWlDLEVBQUVJLEdBQUcsQ0FBQyxDQUFDO2FBQUU7OztZQUVyRkMsR0FBUyxFQUFUQSxXQUFTO21CQUFoQixTQUFPQSxTQUFTLENBQUNDLEtBQUssRUFBRTtnQkFBRSxPQUFPSixhQUFZLGFBQUEsQ0FBQ0csU0FBUyxDQUFDTCxpQ0FBaUMsRUFBRU0sS0FBSyxDQUFDLENBQUM7YUFBRTs7OztDQUNyRyxDQVI4REosYUFBWSxhQUFBLENBUTFFO2tCQVJvQkYsaUNBQWlDO0FBQ3BELGdCQURtQkEsaUNBQWlDLEVBQzdDSSxLQUFHLEVBQUdBLElBQUcsUUFBQSxDQUFDIn0=