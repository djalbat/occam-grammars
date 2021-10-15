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
var FlorenceView = /*#__PURE__*/ function(View) {
    _inherits(FlorenceView, View);
    function FlorenceView() {
        _classCallCheck(this, FlorenceView);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(FlorenceView).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "Lexer", _index.FlorenceLexer);
        _defineProperty(_assertThisInitialized(_this), "Parser", _index.FlorenceParser);
        _defineProperty(_assertThisInitialized(_this), "heading", "Florence example");
        _defineProperty(_assertThisInitialized(_this), "readOnly", false);
        _defineProperty(_assertThisInitialized(_this), "initialContent", "\n  \nRule (Explosion)\n  Conclusion\n    A\n\n  ");
        return _this;
    }
    return FlorenceView;
}(_view.default);
_defineProperty(FlorenceView, "defaultProperties", {
    className: "florence"
});
exports.default = FlorenceView;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZmxvcmVuY2UuanMiXSwibmFtZXMiOlsiRmxvcmVuY2VMZXhlciIsIkZsb3JlbmNlUGFyc2VyIiwiVmlldyIsIkZsb3JlbmNlVmlldyIsIkxleGVyIiwiUGFyc2VyIiwiaGVhZGluZyIsInJlYWRPbmx5IiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFa0IsR0FBYSxDQUFiLE1BQWE7QUFHMUIsR0FBUyxDQUFULEtBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUwsWUFBWSxpQkFBbEIsUUFBUTtjQUFGLFlBQVk7YUFBWixZQUFZOzhCQUFaLFlBQVk7O2lFQUFaLFlBQVk7dURBQy9CLENBQUssUUFOdUIsTUFBYTt1REFRekMsQ0FBTSxTQVJzQixNQUFhO3VEQVV6QyxDQUFPLFVBQUcsQ0FBa0I7dURBRTVCLENBQVEsV0FBRyxLQUFLO3VEQUVoQixDQUFjLGlCQUFJLENBTWxCOzs7V0FmbUIsWUFBWTtFQUZoQixLQUFTO2dCQUVMLFlBQVksRUFpQnhCLENBQWlCLG9CQUFHLENBQUM7SUFDMUIsU0FBUyxFQUFFLENBQVU7QUFDdkIsQ0FBQztrQkFuQmtCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmxvcmVuY2VMZXhlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBGbG9yZW5jZVBhcnNlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb3JlbmNlVmlldyBleHRlbmRzIFZpZXcge1xuICBMZXhlciA9IEZsb3JlbmNlTGV4ZXI7XG5cbiAgUGFyc2VyID0gRmxvcmVuY2VQYXJzZXI7XG5cbiAgaGVhZGluZyA9IFwiRmxvcmVuY2UgZXhhbXBsZVwiO1xuXG4gIHJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgaW5pdGlhbENvbnRlbnQgPSBgXG4gIFxuUnVsZSAoRXhwbG9zaW9uKVxuICBDb25jbHVzaW9uXG4gICAgQVxuXG4gIGA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmbG9yZW5jZVwiXG4gIH07XG59XG4iXX0=