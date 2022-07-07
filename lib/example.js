"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _florence = /*#__PURE__*/ _interopRequireDefault(require("./example/view/florence"));
var _tex = /*#__PURE__*/ _interopRequireDefault(require("./example/view/tex"));
var _plain = /*#__PURE__*/ _interopRequireDefault(require("./example/view/plain"));
var _metaJSON = /*#__PURE__*/ _interopRequireDefault(require("./example/view/metaJSON"));
var _customGrammarBNF = /*#__PURE__*/ _interopRequireDefault(require("./example/view/customGrammarBNF"));
var _customGrammarLexicalPattern = /*#__PURE__*/ _interopRequireDefault(require("./example/view/customGrammarLexicalPattern"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _easyWithStyle.default.renderStyles;
var View;
var body = new _easy.Body(), example = window.location.search.substring(1); ///
switch(example){
    case "florence":
        View = _florence.default;
        break;
    case "tex":
        View = _tex.default;
        break;
    case "plain":
        View = _plain.default;
        break;
    case "metaJSON":
        View = _metaJSON.default;
        break;
    case "customGrammarBNF":
        View = _customGrammarBNF.default;
        break;
    case "customGrammarLexicalPattern":
        View = _customGrammarLexicalPattern.default;
        break;
}
renderStyles();
body.mount(/*#__PURE__*/ React.createElement(View, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBGbG9yZW5jZVZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2Zsb3JlbmNlXCI7XG5pbXBvcnQgVGVYVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvdGV4XCI7XG5pbXBvcnQgUGxhaW5WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9wbGFpblwiO1xuaW1wb3J0IE1ldGFKU09OVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvbWV0YUpTT05cIjtcbmltcG9ydCBDdXN0b21HcmFtbWFyQk5GVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckJORlwiO1xuaW1wb3J0IEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2N1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5sZXQgVmlldztcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJmbG9yZW5jZVwiIDogVmlldyA9IEZsb3JlbmNlVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJ0ZXhcIiA6IFZpZXcgPSBUZVhWaWV3OyBicmVhaztcbiAgY2FzZSBcInBsYWluXCIgOiBWaWV3ID0gUGxhaW5WaWV3OyBicmVhaztcbiAgY2FzZSBcIm1ldGFKU09OXCIgOiBWaWV3ID0gTWV0YUpTT05WaWV3OyBicmVhaztcbiAgY2FzZSBcImN1c3RvbUdyYW1tYXJCTkZcIiA6IFZpZXcgPSBDdXN0b21HcmFtbWFyQk5GVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5cIiA6IFZpZXcgPSBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5WaWV3OyBicmVhaztcbn1cblxucmVuZGVyU3R5bGVzKCk7XG5cbmJvZHkubW91bnQoXG5cbiAgPFZpZXcvPlxuXG4pO1xuIl0sIm5hbWVzIjpbInJlbmRlclN0eWxlcyIsIndpdGhTdHlsZSIsIlZpZXciLCJib2R5IiwiQm9keSIsImV4YW1wbGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsIkZsb3JlbmNlVmlldyIsIlRlWFZpZXciLCJQbGFpblZpZXciLCJNZXRhSlNPTlZpZXciLCJDdXN0b21HcmFtbWFyQk5GVmlldyIsIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblZpZXciLCJtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7O1FBRU4sV0FBVztrRUFFSSxpQkFBaUI7b0JBRWxCLE1BQU07NkRBRUYseUJBQXlCO3dEQUM5QixvQkFBb0I7MERBQ2xCLHNCQUFzQjs2REFDbkIseUJBQXlCO3FFQUNqQixpQ0FBaUM7Z0ZBQ3RCLDRDQUE0Qzs7Ozs7O0FBRXhGLElBQU0sQUFBRUEsWUFBWSxHQUFLQyxjQUFTLFFBQUEsQ0FBMUJELFlBQVksQUFBYyxBQUFDO0FBRW5DLElBQUlFLElBQUksQUFBQztBQUVULElBQU1DLElBQUksR0FBRyxJQUFJQyxLQUFJLEtBQUEsRUFBRSxFQUNqQkMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEFBQUMsRUFBRSxHQUFHO0FBRXpELE9BQVFKLE9BQU87SUFDYixLQUFLLFVBQVU7UUFBR0gsSUFBSSxHQUFHUSxTQUFZLFFBQUEsQ0FBQztRQUFDLE1BQU07SUFDN0MsS0FBSyxLQUFLO1FBQUdSLElBQUksR0FBR1MsSUFBTyxRQUFBLENBQUM7UUFBQyxNQUFNO0lBQ25DLEtBQUssT0FBTztRQUFHVCxJQUFJLEdBQUdVLE1BQVMsUUFBQSxDQUFDO1FBQUMsTUFBTTtJQUN2QyxLQUFLLFVBQVU7UUFBR1YsSUFBSSxHQUFHVyxTQUFZLFFBQUEsQ0FBQztRQUFDLE1BQU07SUFDN0MsS0FBSyxrQkFBa0I7UUFBR1gsSUFBSSxHQUFHWSxpQkFBb0IsUUFBQSxDQUFDO1FBQUMsTUFBTTtJQUM3RCxLQUFLLDZCQUE2QjtRQUFHWixJQUFJLEdBQUdhLDRCQUErQixRQUFBLENBQUM7UUFBQyxNQUFNO0NBQ3BGO0FBRURmLFlBQVksRUFBRSxDQUFDO0FBRWZHLElBQUksQ0FBQ2EsS0FBSyxlQUVSLG9CQUFDZCxJQUFJLE9BQUUsQ0FFUixDQUFDIn0=