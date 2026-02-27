"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PlainTextView;
    }
});
const _index = require("../../index");
const _view = /*#__PURE__*/ _interop_require_default(require("../view"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PlainTextView extends _view.default {
    static Lexer = _index.PlainTextLexer;
    static Parser = _index.PlainTextParser;
    static readOnly = false;
    static initialContent = "";
    static defaultProperties = {
        className: "plain-text"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvcGxhaW5UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQbGFpblRleHRMZXhlciwgUGxhaW5UZXh0UGFyc2VyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhaW5UZXh0VmlldyBleHRlbmRzIFZpZXcge1xuICBzdGF0aWMgTGV4ZXIgPSBQbGFpblRleHRMZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gUGxhaW5UZXh0UGFyc2VyO1xuXG4gIHN0YXRpYyByZWFkT25seSA9IGZhbHNlO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IFwiXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwbGFpbi10ZXh0XCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJQbGFpblRleHRWaWV3IiwiVmlldyIsIkxleGVyIiwiUGxhaW5UZXh0TGV4ZXIiLCJQYXJzZXIiLCJQbGFpblRleHRQYXJzZXIiLCJyZWFkT25seSIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7dUJBSjJCOzZEQUUvQjs7Ozs7O0FBRUYsTUFBTUEsc0JBQXNCQyxhQUFJO0lBQzdDLE9BQU9DLFFBQVFDLHFCQUFjLENBQUM7SUFFOUIsT0FBT0MsU0FBU0Msc0JBQWUsQ0FBQztJQUVoQyxPQUFPQyxXQUFXLE1BQU07SUFFeEIsT0FBT0MsaUJBQWlCLEdBQUc7SUFFM0IsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKIn0=