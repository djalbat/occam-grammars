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
var TeXParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(TeXParser, CommonParser);
    var _super = _createSuper(TeXParser);
    function TeXParser() {
        _classCallCheck(this, TeXParser);
        return _super.apply(this, arguments);
    }
    _createClass(TeXParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamParsers.CommonParser.fromNothing(TeXParser);
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                return _occamParsers.CommonParser.fromBNF(TeXParser, bnf);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamParsers.CommonParser.fromRules(TeXParser, rules);
            }
        }
    ]);
    return TeXParser;
}(_occamParsers.CommonParser);
exports.default = TeXParser;
_defineProperty(TeXParser, "bnf", _bnf.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZVgvcGFyc2VyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwiLi4vc3JjL2NvbnN0YW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVYUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbU5vdGhpbmcoVGVYUGFyc2VyKTsgfVxuXG4gIHN0YXRpYyBmcm9tQk5GKGJuZikgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21CTkYoVGVYUGFyc2VyLCBibmYpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhUZVhQYXJzZXIsIHJ1bGVzKTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJUZVhQYXJzZXIiLCJmcm9tTm90aGluZyIsIkNvbW1vblBhcnNlciIsImZyb21CTkYiLCJibmYiLCJmcm9tUnVsZXMiLCJydWxlcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUU2QixJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFFNUIsSUFBQSxJQUFPLGtDQUFQLE9BQU8sRUFBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUp2QjtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBTWUsSUFBQSxBQUFNQSxTQUFTLGlCQ04zQixBRE1ZO3NDQU5mOzthQU1xQkEsU0FBUzt3Q0FOOUI7Ozs7O1lBU1NDLEdBQVcsRUFBWEEsYUFBVztZRVRwQixPRlNFLFNBQU9BLFdBQVcsR0FBRztnQkFBRSxPQUFPQyxhQUFZLGNBQUNELFdBQVcsQ0FBQ0QsU0FBUyxDQUFDLENBQUM7YUFBRTs7O1lBRTdERyxHQUFPLEVBQVBBLFNBQU87WUVYaEIsT0ZXRSxTQUFPQSxPQUFPLENBQUNDLEdBQUcsRUFBRTtnQkFBRSxPQUFPRixhQUFZLGNBQUNDLE9BQU8sQ0FBQ0gsU0FBUyxFQUFFSSxHQUFHLENBQUMsQ0FBQzthQUFFOzs7WUFFN0RDLEdBQVMsRUFBVEEsV0FBUztZRWJsQixPRmFFLFNBQU9BLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFO2dCQUFFLE9BQU9KLGFBQVksY0FBQ0csU0FBUyxDQUFDTCxTQUFTLEVBQUVNLEtBQUssQ0FBQyxDQUFDO2FBQUU7O01BYjlFOztDQWNDLENBUnNDSixhQUFZLGNBUWxEO2tCQVJvQkYsU0FBUyxBQU45QjtBQU9FLGdCQURtQkEsU0FBUyxFQUNyQkksS0FBRyxFQUFHQSxJQUFHLFNBQUMsQUFQbkIifQ==