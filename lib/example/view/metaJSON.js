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
var MetaJSONView = /*#__PURE__*/ function(View) {
    _inherits(MetaJSONView, View);
    function MetaJSONView() {
        _classCallCheck(this, MetaJSONView);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(MetaJSONView).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "Lexer", _index.MetaJSONLexer);
        _defineProperty(_assertThisInitialized(_this), "Parser", _index.MetaJSONParser);
        _defineProperty(_assertThisInitialized(_this), "heading", "Meta JSON example");
        _defineProperty(_assertThisInitialized(_this), "readOnly", false);
        _defineProperty(_assertThisInitialized(_this), "initialContent", "{\n  \"repository\": \"https://github.com/djalbat/strings\",\n  \"dependencies\": [\n    \"natural-numbers\",\n    \"arithmetic\"\n  ]\n}\n");
        return _this;
    }
    return MetaJSONView;
}(_view.default);
_defineProperty(MetaJSONView, "defaultProperties", {
    className: "meta-json"
});
exports.default = MetaJSONView;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvbWV0YUpTT04uanMiXSwibmFtZXMiOlsiTWV0YUpTT05MZXhlciIsIk1ldGFKU09OUGFyc2VyIiwiVmlldyIsIk1ldGFKU09OVmlldyIsIkxleGVyIiwiUGFyc2VyIiwiaGVhZGluZyIsInJlYWRPbmx5IiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFa0IsR0FBYSxDQUFiLE1BQWE7QUFHMUIsR0FBUyxDQUFULEtBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUwsWUFBWSxpQkFBbEIsUUFBUTtjQUFGLFlBQVk7YUFBWixZQUFZOzhCQUFaLFlBQVk7O2lFQUFaLFlBQVk7d0RBQy9CLEtBQUssR0FOdUIsTUFBYTt3REFRekMsTUFBTSxHQVJzQixNQUFhO3dEQVV6QyxPQUFPLElBQUcsaUJBQW1CO3dEQUU3QixRQUFRLEdBQUcsS0FBSzt3REFFaEIsY0FBYyxJQUFJLDJJQU9wQjs7O1dBaEJxQixZQUFZO0VBRmhCLEtBQVM7Z0JBRUwsWUFBWSxHQWtCeEIsaUJBQWlCLEdBQUcsQ0FBQztJQUMxQixTQUFTLEdBQUUsU0FBVztBQUN4QixDQUFDO2tCQXBCa0IsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNZXRhSlNPTkxleGVyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cbmltcG9ydCB7IE1ldGFKU09OUGFyc2VyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUpTT05WaWV3IGV4dGVuZHMgVmlldyB7XG4gIExleGVyID0gTWV0YUpTT05MZXhlcjtcblxuICBQYXJzZXIgPSBNZXRhSlNPTlBhcnNlcjtcblxuICBoZWFkaW5nID0gXCJNZXRhIEpTT04gZXhhbXBsZVwiO1xuXG4gIHJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgaW5pdGlhbENvbnRlbnQgPSBge1xuICBcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGphbGJhdC9zdHJpbmdzXCIsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IFtcbiAgICBcIm5hdHVyYWwtbnVtYmVyc1wiLFxuICAgIFwiYXJpdGhtZXRpY1wiXG4gIF1cbn1cbmA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtZXRhLWpzb25cIlxuICB9O1xufVxuIl19