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
var MetaJSONView = function(View) {
    _inherits(MetaJSONView, _view.default);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvbWV0YUpTT04uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1ldGFKU09OTGV4ZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuaW1wb3J0IHsgTWV0YUpTT05QYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhSlNPTlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgTGV4ZXIgPSBNZXRhSlNPTkxleGVyO1xuXG4gIFBhcnNlciA9IE1ldGFKU09OUGFyc2VyO1xuXG4gIGhlYWRpbmcgPSBcIk1ldGEgSlNPTiBleGFtcGxlXCI7XG5cbiAgcmVhZE9ubHkgPSBmYWxzZTtcblxuICBpbml0aWFsQ29udGVudCA9IGB7XG4gIFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kamFsYmF0L3N0cmluZ3NcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjogW1xuICAgIFwibmF0dXJhbC1udW1iZXJzXCIsXG4gICAgXCJhcml0aG1ldGljXCJcbiAgXVxufVxuYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1ldGEtanNvblwiXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxNQUFBO0lBR0EsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxZQUFBLFlBQUEsSUFBQTtjQUFBLFlBQUEsRUFGQSxLQUFBO2FBRUEsWUFBQTs4QkFBQSxZQUFBOztpRUFBQSxZQUFBO3dEQUNBLEtBQUEsR0FOQSxNQUFBO3dEQVFBLE1BQUEsR0FSQSxNQUFBO3dEQVVBLE9BQUEsSUFBQSxpQkFBQTt3REFFQSxRQUFBLEdBQUEsS0FBQTt3REFFQSxjQUFBLElBQUEsMklBT0E7OztXQWhCQSxZQUFBO0VBRkEsS0FBQTtnQkFFQSxZQUFBLEdBa0JBLGlCQUFBO0FBQ0EsYUFBQSxHQUFBLFNBQUE7O2tCQW5CQSxZQUFBIn0=