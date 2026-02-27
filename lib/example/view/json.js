"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JSONView;
    }
});
const _index = require("../../index");
const _view = /*#__PURE__*/ _interop_require_default(require("../view"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class JSONView extends _view.default {
    static Lexer = _index.JSONLexer;
    static Parser = _index.JSONParser;
    static readOnly = false;
    static initialContent = `{
  "version": "1.2.3"
}
`;
    static defaultProperties = {
        className: "json"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgSlNPTkxleGVyLCBKU09OUGFyc2VyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNPTlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIExleGVyID0gSlNPTkxleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBKU09OUGFyc2VyO1xuXG4gIHN0YXRpYyByZWFkT25seSA9IGZhbHNlO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGB7XG4gIFwidmVyc2lvblwiOiBcIjEuMi4zXCJcbn1cbmA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJqc29uXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJKU09OVmlldyIsIlZpZXciLCJMZXhlciIsIkpTT05MZXhlciIsIlBhcnNlciIsIkpTT05QYXJzZXIiLCJyZWFkT25seSIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7dUJBSmlCOzZEQUVyQjs7Ozs7O0FBRUYsTUFBTUEsaUJBQWlCQyxhQUFJO0lBQ3hDLE9BQU9DLFFBQVFDLGdCQUFTLENBQUM7SUFFekIsT0FBT0MsU0FBU0MsaUJBQVUsQ0FBQztJQUUzQixPQUFPQyxXQUFXLE1BQU07SUFFeEIsT0FBT0MsaUJBQWlCLENBQUM7OztBQUczQixDQUFDLENBQUM7SUFFQSxPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0oifQ==