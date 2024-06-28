"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _tex = /*#__PURE__*/ _interop_require_default(require("./example/view/tex"));
var _json = /*#__PURE__*/ _interop_require_default(require("./example/view/json"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./example/view/plainText"));
var _customGrammarBNF = /*#__PURE__*/ _interop_require_default(require("./example/view/customGrammarBNF"));
var _customGrammarPattern = /*#__PURE__*/ _interop_require_default(require("./example/view/customGrammarPattern"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _easywithstyle.default.renderStyles;
var View;
var body = new _easy.Body(), example = window.location.search.substring(1); ///
switch(example){
    case "tex":
        View = _tex.default;
        break;
    case "json":
        View = _json.default;
        break;
    case "plain-text":
        View = _plainText.default;
        break;
    case "custom-grammar-bnf":
        View = _customGrammarBNF.default;
        break;
    case "custom-grammar-pattern":
        View = _customGrammarPattern.default;
        break;
}
renderStyles();
body.mount(/*#__PURE__*/ React.createElement(View, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBUZVhWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy90ZXhcIjtcbmltcG9ydCBKU09OVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvanNvblwiO1xuaW1wb3J0IFBsYWluVGV4dFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L3BsYWluVGV4dFwiO1xuaW1wb3J0IEN1c3RvbUdyYW1tYXJCTkZWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9jdXN0b21HcmFtbWFyQk5GXCI7XG5pbXBvcnQgQ3VzdG9tR3JhbW1hclBhdHRlcm5WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9jdXN0b21HcmFtbWFyUGF0dGVyblwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5sZXQgVmlldztcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJ0ZXhcIiA6IFZpZXcgPSBUZVhWaWV3OyBicmVhaztcbiAgY2FzZSBcImpzb25cIiA6IFZpZXcgPSBKU09OVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJwbGFpbi10ZXh0XCIgOiBWaWV3ID0gUGxhaW5UZXh0VmlldzsgYnJlYWs7XG4gIGNhc2UgXCJjdXN0b20tZ3JhbW1hci1ibmZcIiA6IFZpZXcgPSBDdXN0b21HcmFtbWFyQk5GVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJjdXN0b20tZ3JhbW1hci1wYXR0ZXJuXCIgOiBWaWV3ID0gQ3VzdG9tR3JhbW1hclBhdHRlcm5WaWV3OyBicmVhaztcbn1cblxucmVuZGVyU3R5bGVzKCk7XG5cbmJvZHkubW91bnQoXG5cbiAgPFZpZXcvPlxuXG4pO1xuIl0sIm5hbWVzIjpbInJlbmRlclN0eWxlcyIsIndpdGhTdHlsZSIsIlZpZXciLCJib2R5IiwiQm9keSIsImV4YW1wbGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsIlRlWFZpZXciLCJKU09OVmlldyIsIlBsYWluVGV4dFZpZXciLCJDdXN0b21HcmFtbWFyQk5GVmlldyIsIkN1c3RvbUdyYW1tYXJQYXR0ZXJuVmlldyIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OztRQUVPO29FQUVlO29CQUVEOzBEQUVEOzJEQUNDO2dFQUNLO3VFQUNPOzJFQUNJOzs7Ozs7QUFFckMsSUFBTSxBQUFFQSxlQUFpQkMsc0JBQVMsQ0FBMUJEO0FBRVIsSUFBSUU7QUFFSixJQUFNQyxPQUFPLElBQUlDLFVBQUksSUFDZkMsVUFBVUMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQyxJQUFLLEdBQUc7QUFFekQsT0FBUUo7SUFDTixLQUFLO1FBQVFILE9BQU9RLFlBQU87UUFBRTtJQUM3QixLQUFLO1FBQVNSLE9BQU9TLGFBQVE7UUFBRTtJQUMvQixLQUFLO1FBQWVULE9BQU9VLGtCQUFhO1FBQUU7SUFDMUMsS0FBSztRQUF1QlYsT0FBT1cseUJBQW9CO1FBQUU7SUFDekQsS0FBSztRQUEyQlgsT0FBT1ksNkJBQXdCO1FBQUU7QUFDbkU7QUFFQWQ7QUFFQUcsS0FBS1ksS0FBSyxlQUVSLG9CQUFDYiJ9