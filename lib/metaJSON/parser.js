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
var MetaJSONParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(MetaJSONParser, CommonParser);
    var _super = _createSuper(MetaJSONParser);
    function MetaJSONParser() {
        _classCallCheck(this, MetaJSONParser);
        return _super.apply(this, arguments);
    }
    _createClass(MetaJSONParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamParsers.CommonParser.fromNothing(MetaJSONParser);
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                return _occamParsers.CommonParser.fromBNF(MetaJSONParser, bnf);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamParsers.CommonParser.fromRules(MetaJSONParser, rules);
            }
        }
    ]);
    return MetaJSONParser;
}(_occamParsers.CommonParser);
exports.default = MetaJSONParser;
_defineProperty(MetaJSONParser, "bnf", _bnf.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXRhSlNPTi9wYXJzZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhSlNPTlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21Ob3RoaW5nKE1ldGFKU09OUGFyc2VyKTsgfVxuXG4gIHN0YXRpYyBmcm9tQk5GKGJuZikgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21CTkYoTWV0YUpTT05QYXJzZXIsIGJuZik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKE1ldGFKU09OUGFyc2VyLCBydWxlcyk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsiTWV0YUpTT05QYXJzZXIiLCJmcm9tTm90aGluZyIsIkNvbW1vblBhcnNlciIsImZyb21CTkYiLCJibmYiLCJmcm9tUnVsZXMiLCJydWxlcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUU2QixJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFFNUIsSUFBQSxJQUFPLGtDQUFQLE9BQU8sRUFBQTs7Ozs7Ozs7Ozs7Ozs7OzhEQUp2QjtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBTWUsSUFBQSxBQUFNQSxjQUFjLGlCQ05oQyxBRE1ZOzJDQU5mOzthQU1xQkEsY0FBYzs2Q0FObkM7Ozs7O1lBU1NDLEdBQVcsRUFBWEEsYUFBVztZRVRwQixPRlNFLFNBQU9BLFdBQVcsR0FBRztnQkFBRSxPQUFPQyxhQUFZLGNBQUNELFdBQVcsQ0FBQ0QsY0FBYyxDQUFDLENBQUM7YUFBRTs7O1lBRWxFRyxHQUFPLEVBQVBBLFNBQU87WUVYaEIsT0ZXRSxTQUFPQSxPQUFPLENBQUNDLEdBQUcsRUFBRTtnQkFBRSxPQUFPRixhQUFZLGNBQUNDLE9BQU8sQ0FBQ0gsY0FBYyxFQUFFSSxHQUFHLENBQUMsQ0FBQzthQUFFOzs7WUFFbEVDLEdBQVMsRUFBVEEsV0FBUztZRWJsQixPRmFFLFNBQU9BLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFO2dCQUFFLE9BQU9KLGFBQVksY0FBQ0csU0FBUyxDQUFDTCxjQUFjLEVBQUVNLEtBQUssQ0FBQyxDQUFDO2FBQUU7O01BYm5GOztDQWNDLENBUjJDSixhQUFZLGNBUXZEO2tCQVJvQkYsY0FBYyxBQU5uQztBQU9FLGdCQURtQkEsY0FBYyxFQUMxQkksS0FBRyxFQUFHQSxJQUFHLFNBQUMsQUFQbkIifQ==