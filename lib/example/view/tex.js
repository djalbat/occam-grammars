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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var TeXView = /*#__PURE__*/ function(View) {
    _inherits(TeXView, View);
    var _super = _createSuper(TeXView);
    function TeXView() {
        _classCallCheck(this, TeXView);
        return _super.apply(this, arguments);
    }
    return TeXView;
}(_view.default);
_defineProperty(TeXView, "Lexer", _index.TeXLexer);
_defineProperty(TeXView, "Parser", _index.TeXParser);
_defineProperty(TeXView, "readOnly", false);
_defineProperty(TeXView, "initialContent", "\\[\r\n\\int \\frac{x}{y} dx\r\n\\]");
_defineProperty(TeXView, "defaultProperties", {
    className: "tex"
});
exports.default = TeXView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZVhMZXhlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBUZVhQYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZVhWaWV3IGV4dGVuZHMgVmlldyB7XG4gIHN0YXRpYyBMZXhlciA9IFRlWExleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBUZVhQYXJzZXI7XG5cbiAgc3RhdGljIHJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gXCJcXFxcW1xcclxcblxcXFxpbnQgXFxcXGZyYWN7eH17eX0gZHhcXHJcXG5cXFxcXVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidGV4XCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVGVYVmlldyIsIlZpZXciLCJMZXhlciIsIlRlWExleGVyIiwiUGFyc2VyIiwiVGVYUGFyc2VyIiwicmVhZE9ubHkiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVksSUFBQSxNQUFhLFdBQWIsYUFBYSxDQUFBO0FBR3JCLElBQUEsS0FBUyxrQ0FBVCxTQUFTLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEsT0FBTyxpQkFBYjs7O2FBQU1BLE9BQU87Ozs7O0NBWTNCLENBWm9DQyxLQUFJLFFBQUEsQ0FZeEM7QUFYQyxnQkFEbUJELE9BQU8sRUFDbkJFLE9BQUssRUFBR0MsTUFBUSxTQUFBLENBQUM7QUFFeEIsZ0JBSG1CSCxPQUFPLEVBR25CSSxRQUFNLEVBQUdDLE1BQVMsVUFBQSxDQUFDO0FBRTFCLGdCQUxtQkwsT0FBTyxFQUtuQk0sVUFBUSxFQUFHLEtBQUssQ0FBQztBQUV4QixnQkFQbUJOLE9BQU8sRUFPbkJPLGdCQUFjLEVBQUcscUNBQXFDLENBQUM7QUFFOUQsZ0JBVG1CUCxPQUFPLEVBU25CUSxtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLEtBQUs7Q0FDakIsQ0FBQztrQkFYaUJULE9BQU8ifQ==