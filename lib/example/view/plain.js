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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var PlainView = /*#__PURE__*/ function(View) {
    _inherits(PlainView, View);
    function PlainView() {
        _classCallCheck(this, PlainView);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(PlainView).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "Lexer", _index.PlainLexer);
        _defineProperty(_assertThisInitialized(_this), "Parser", _index.PlainParser);
        _defineProperty(_assertThisInitialized(_this), "heading", "Plain example");
        _defineProperty(_assertThisInitialized(_this), "readOnly", false);
        _defineProperty(_assertThisInitialized(_this), "initialContent", "");
        return _this;
    }
    return PlainView;
}(_view.default);
_defineProperty(PlainView, "defaultProperties", {
    className: "plain"
});
exports.default = PlainView;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvcGxhaW4uanMiXSwibmFtZXMiOlsiUGxhaW5MZXhlciIsIlBsYWluUGFyc2VyIiwiVmlldyIsIlBsYWluVmlldyIsIkxleGVyIiwiUGFyc2VyIiwiaGVhZGluZyIsInJlYWRPbmx5IiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFZSxHQUFhLENBQWIsTUFBYTtBQUd2QixHQUFTLENBQVQsS0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTCxTQUFTLGlCQUFmLFFBQVE7Y0FBRixTQUFTO2FBQVQsU0FBUzs4QkFBVCxTQUFTOztpRUFBVCxTQUFTO3dEQUM1QixLQUFLLEdBTm9CLE1BQWE7d0RBUXRDLE1BQU0sR0FSbUIsTUFBYTt3REFVdEMsT0FBTyxJQUFHLGFBQWU7d0RBRXpCLFFBQVEsR0FBRyxLQUFLO3dEQUVoQixjQUFjOzs7V0FUSyxTQUFTO0VBRmIsS0FBUztnQkFFTCxTQUFTLEdBV3JCLGlCQUFpQixHQUFHLENBQUM7SUFDMUIsU0FBUyxHQUFFLEtBQU87QUFDcEIsQ0FBQztrQkFia0IsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQbGFpbkxleGVyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cbmltcG9ydCB7IFBsYWluUGFyc2VyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhaW5WaWV3IGV4dGVuZHMgVmlldyB7XG4gIExleGVyID0gUGxhaW5MZXhlcjtcblxuICBQYXJzZXIgPSBQbGFpblBhcnNlcjtcblxuICBoZWFkaW5nID0gXCJQbGFpbiBleGFtcGxlXCI7XG5cbiAgcmVhZE9ubHkgPSBmYWxzZTtcblxuICBpbml0aWFsQ29udGVudCA9IFwiXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwbGFpblwiXG4gIH07XG59XG4iXX0=