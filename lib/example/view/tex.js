"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TeXView;
    }
});
const _index = require("../../index");
const _view = /*#__PURE__*/ _interop_require_default(require("../view"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TeXView extends _view.default {
    static Lexer = _index.TeXLexer;
    static Parser = _index.TeXParser;
    static readOnly = false;
    static initialContent = "\\[\r\n\\int \\frac{x}{y} dx\r\n\\]";
    static defaultProperties = {
        className: "tex"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZVhMZXhlciwgVGVYUGFyc2VyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVYVmlldyBleHRlbmRzIFZpZXcge1xuICBzdGF0aWMgTGV4ZXIgPSBUZVhMZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gVGVYUGFyc2VyO1xuXG4gIHN0YXRpYyByZWFkT25seSA9IGZhbHNlO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IFwiXFxcXFtcXHJcXG5cXFxcaW50IFxcXFxmcmFje3h9e3l9IGR4XFxyXFxuXFxcXF1cIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInRleFwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiVGVYVmlldyIsIlZpZXciLCJMZXhlciIsIlRlWExleGVyIiwiUGFyc2VyIiwiVGVYUGFyc2VyIiwicmVhZE9ubHkiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O3VCQUplOzZEQUVuQjs7Ozs7O0FBRUYsTUFBTUEsZ0JBQWdCQyxhQUFJO0lBQ3ZDLE9BQU9DLFFBQVFDLGVBQVEsQ0FBQztJQUV4QixPQUFPQyxTQUFTQyxnQkFBUyxDQUFDO0lBRTFCLE9BQU9DLFdBQVcsTUFBTTtJQUV4QixPQUFPQyxpQkFBaUIsc0NBQXNDO0lBRTlELE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSiJ9