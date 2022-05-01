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
var PlainView = /*#__PURE__*/ function(View) {
    _inherits(PlainView, View);
    var _super = _createSuper(PlainView);
    function PlainView() {
        _classCallCheck(this, PlainView);
        return _super.apply(this, arguments);
    }
    return PlainView;
}(_view.default);
_defineProperty(PlainView, "Lexer", _index.PlainLexer);
_defineProperty(PlainView, "Parser", _index.PlainParser);
_defineProperty(PlainView, "readOnly", false);
_defineProperty(PlainView, "initialContent", "");
_defineProperty(PlainView, "defaultProperties", {
    className: "plain"
});
exports.default = PlainView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvcGxhaW4uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBsYWluTGV4ZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuaW1wb3J0IHsgUGxhaW5QYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFpblZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIExleGVyID0gUGxhaW5MZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gUGxhaW5QYXJzZXI7XG5cbiAgc3RhdGljIHJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gXCJcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBsYWluXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUGxhaW5WaWV3IiwiVmlldyIsIkxleGVyIiwiUGxhaW5MZXhlciIsIlBhcnNlciIsIlBsYWluUGFyc2VyIiwicmVhZE9ubHkiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWMsSUFBQSxNQUFhLFdBQWIsYUFBYSxDQUFBO0FBR3ZCLElBQUEsS0FBUyxrQ0FBVCxTQUFTLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEsU0FBUyxpQkNQM0IsQURPWTs7O2FBQU1BLFNBQVM7Ozs7O0NBWTdCLENBWnNDQyxLQUFJLFFBQUEsQ0FZMUM7QUFYQyxnQkFEbUJELFNBQVMsRUFDckJFLE9BQUssRUFBR0MsTUFBVSxXQUFBLENBQUM7QUFFMUIsZ0JBSG1CSCxTQUFTLEVBR3JCSSxRQUFNLEVBQUdDLE1BQVcsWUFBQSxDQUFDO0FBRTVCLGdCQUxtQkwsU0FBUyxFQUtyQk0sVUFBUSxFQUFHLEtBQUssQ0FBQztBQUV4QixnQkFQbUJOLFNBQVMsRUFPckJPLGdCQUFjLEVBQUcsRUFBRSxDQUFDO0FBRTNCLGdCQVRtQlAsU0FBUyxFQVNyQlEsbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxPQUFPO0NBQ25CLENBQUM7a0JBWGlCVCxTQUFTIn0=