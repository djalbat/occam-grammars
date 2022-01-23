"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../../index");
var _view = _interopRequireDefault(require("../view"));
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
var FlorenceView = /*#__PURE__*/ function(View) {
    _inherits(FlorenceView, View);
    var _super = _createSuper(FlorenceView);
    function FlorenceView() {
        _classCallCheck(this, FlorenceView);
        return _super.apply(this, arguments);
    }
    return FlorenceView;
}(_view.default);
_defineProperty(FlorenceView, "Lexer", _index.FlorenceLexer);
_defineProperty(FlorenceView, "Parser", _index.FlorenceParser);
_defineProperty(FlorenceView, "readOnly", false);
_defineProperty(FlorenceView, "initialContent", "\n  \nRule (Explosion)\n  Conclusion\n    A\n\n  ");
_defineProperty(FlorenceView, "defaultProperties", {
    className: "florence"
});
exports.default = FlorenceView;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZmxvcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEZsb3JlbmNlTGV4ZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuaW1wb3J0IHsgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9yZW5jZVZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIExleGVyID0gRmxvcmVuY2VMZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gRmxvcmVuY2VQYXJzZXI7XG5cbiAgc3RhdGljIHJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYFxuICBcblJ1bGUgKEV4cGxvc2lvbilcbiAgQ29uY2x1c2lvblxuICAgIEFcblxuICBgO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmxvcmVuY2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkZsb3JlbmNlVmlldyIsIkxleGVyIiwiUGFyc2VyIiwicmVhZE9ubHkiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVrQixHQUFhLENBQWIsTUFBYTtBQUcxQixHQUFTLENBQVQsS0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUxBLFlBQVksaUJBQWxCLFFBQVE7OzthQUFGQSxZQUFZOzs7OztFQUZoQixLQUFTO2dCQUVMQSxZQUFZLEVBQ3hCQyxDQUFLLFFBTmdCLE1BQWE7Z0JBS3RCRCxZQUFZLEVBR3hCRSxDQUFNLFNBUmUsTUFBYTtnQkFLdEJGLFlBQVksRUFLeEJHLENBQVEsV0FBRyxLQUFLO2dCQUxKSCxZQUFZLEVBT3hCSSxDQUFjLGlCQUFJLENBTXpCO2dCQWJtQkosWUFBWSxFQWV4QkssQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQVU7QUFDdkIsQ0FBQztrQkFqQmtCTixZQUFZIn0=