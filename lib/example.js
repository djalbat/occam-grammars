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
var _customGrammarPattern = /*#__PURE__*/ _interopRequireDefault(require("./example/view/customGrammarPattern"));
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
    case "customGrammarPattern":
        View = _customGrammarPattern.default;
        break;
}
renderStyles();
body.mount(/*#__PURE__*/ React.createElement(View, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBGbG9yZW5jZVZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2Zsb3JlbmNlXCI7XG5pbXBvcnQgVGVYVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvdGV4XCI7XG5pbXBvcnQgUGxhaW5WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9wbGFpblwiO1xuaW1wb3J0IE1ldGFKU09OVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvbWV0YUpTT05cIjtcbmltcG9ydCBDdXN0b21HcmFtbWFyQk5GVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckJORlwiO1xuaW1wb3J0IEN1c3RvbUdyYW1tYXJQYXR0ZXJuVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hclBhdHRlcm5cIjtcblxuY29uc3QgeyByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxubGV0IFZpZXc7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwiZmxvcmVuY2VcIiA6IFZpZXcgPSBGbG9yZW5jZVZpZXc7IGJyZWFrO1xuICBjYXNlIFwidGV4XCIgOiBWaWV3ID0gVGVYVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJwbGFpblwiIDogVmlldyA9IFBsYWluVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJtZXRhSlNPTlwiIDogVmlldyA9IE1ldGFKU09OVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJjdXN0b21HcmFtbWFyQk5GXCIgOiBWaWV3ID0gQ3VzdG9tR3JhbW1hckJORlZpZXc7IGJyZWFrO1xuICBjYXNlIFwiY3VzdG9tR3JhbW1hclBhdHRlcm5cIiA6IFZpZXcgPSBDdXN0b21HcmFtbWFyUGF0dGVyblZpZXc7IGJyZWFrO1xufVxuXG5yZW5kZXJTdHlsZXMoKTtcblxuYm9keS5tb3VudChcblxuICA8Vmlldy8+XG5cbik7XG4iXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwiVmlldyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiRmxvcmVuY2VWaWV3IiwiVGVYVmlldyIsIlBsYWluVmlldyIsIk1ldGFKU09OVmlldyIsIkN1c3RvbUdyYW1tYXJCTkZWaWV3IiwiQ3VzdG9tR3JhbW1hclBhdHRlcm5WaWV3IiwibW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OztRQUVOLFdBQVc7a0VBRUksaUJBQWlCO29CQUVsQixNQUFNOzZEQUVGLHlCQUF5Qjt3REFDOUIsb0JBQW9COzBEQUNsQixzQkFBc0I7NkRBQ25CLHlCQUF5QjtxRUFDakIsaUNBQWlDO3lFQUM3QixxQ0FBcUM7Ozs7OztBQUUxRSxJQUFNLEFBQUVBLFlBQVksR0FBS0MsY0FBUyxRQUFBLENBQTFCRCxZQUFZLEFBQWMsQUFBQztBQUVuQyxJQUFJRSxJQUFJLEFBQUM7QUFFVCxJQUFNQyxJQUFJLEdBQUcsSUFBSUMsS0FBSSxLQUFBLEVBQUUsRUFDakJDLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxBQUFDLEVBQUUsR0FBRztBQUV6RCxPQUFRSixPQUFPO0lBQ2IsS0FBSyxVQUFVO1FBQUdILElBQUksR0FBR1EsU0FBWSxRQUFBLENBQUM7UUFBQyxNQUFNO0lBQzdDLEtBQUssS0FBSztRQUFHUixJQUFJLEdBQUdTLElBQU8sUUFBQSxDQUFDO1FBQUMsTUFBTTtJQUNuQyxLQUFLLE9BQU87UUFBR1QsSUFBSSxHQUFHVSxNQUFTLFFBQUEsQ0FBQztRQUFDLE1BQU07SUFDdkMsS0FBSyxVQUFVO1FBQUdWLElBQUksR0FBR1csU0FBWSxRQUFBLENBQUM7UUFBQyxNQUFNO0lBQzdDLEtBQUssa0JBQWtCO1FBQUdYLElBQUksR0FBR1ksaUJBQW9CLFFBQUEsQ0FBQztRQUFDLE1BQU07SUFDN0QsS0FBSyxzQkFBc0I7UUFBR1osSUFBSSxHQUFHYSxxQkFBd0IsUUFBQSxDQUFDO1FBQUMsTUFBTTtDQUN0RTtBQUVEZixZQUFZLEVBQUUsQ0FBQztBQUVmRyxJQUFJLENBQUNhLEtBQUssZUFFUixvQkFBQ2QsSUFBSSxPQUFFLENBRVIsQ0FBQyJ9