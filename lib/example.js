"use strict";
require("juxtapose");
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _florence = _interopRequireDefault(require("./example/view/florence"));
var _plain = _interopRequireDefault(require("./example/view/plain"));
var _metaJSON = _interopRequireDefault(require("./example/view/metaJSON"));
var _customGrammarBNF = _interopRequireDefault(require("./example/view/customGrammarBNF"));
var _customGrammarLexicalPattern = _interopRequireDefault(require("./example/view/customGrammarLexicalPattern"));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBGbG9yZW5jZVZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2Zsb3JlbmNlXCI7XG5pbXBvcnQgUGxhaW5WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9wbGFpblwiO1xuaW1wb3J0IE1ldGFKU09OVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvbWV0YUpTT05cIjtcbmltcG9ydCBDdXN0b21HcmFtbWFyQk5GVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckJORlwiO1xuaW1wb3J0IEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2N1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5sZXQgVmlldztcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJmbG9yZW5jZVwiIDogVmlldyA9IEZsb3JlbmNlVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJwbGFpblwiIDogVmlldyA9IFBsYWluVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJtZXRhSlNPTlwiIDogVmlldyA9IE1ldGFKU09OVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJjdXN0b21HcmFtbWFyQk5GXCIgOiBWaWV3ID0gQ3VzdG9tR3JhbW1hckJORlZpZXc7IGJyZWFrO1xuICBjYXNlIFwiY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuXCIgOiBWaWV3ID0gQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuVmlldzsgYnJlYWs7XG59XG5cbnJlbmRlclN0eWxlcygpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3IC8+XG5cbik7XG4iXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwiVmlldyIsImJvZHkiLCJleGFtcGxlIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHJpbmciLCJtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7QUFJVSxHQUFpQixDQUFqQixjQUFpQjtBQUVsQixHQUFNLENBQU4sS0FBTTtBQUVGLEdBQXlCLENBQXpCLFNBQXlCO0FBQzVCLEdBQXNCLENBQXRCLE1BQXNCO0FBQ25CLEdBQXlCLENBQXpCLFNBQXlCO0FBQ2pCLEdBQWlDLENBQWpDLGlCQUFpQztBQUN0QixHQUE0QyxDQUE1Qyw0QkFBNEM7Ozs7OztBQUV4RixHQUFLLENBQUdBLFlBQVksR0FWRSxjQUFpQixTQVUvQkEsWUFBWTtBQUVwQixHQUFHLENBQUNDLElBQUk7QUFFUixHQUFLLENBQUNDLElBQUksR0FBRyxHQUFHLENBWkssS0FBTSxTQWFyQkMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUMsQ0FBQyxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztBQUV6RCxNQUFNLENBQUVKLE9BQU87SUFDYixJQUFJLENBQUMsQ0FBVTtRQUFHRixJQUFJLEdBZEMsU0FBeUI7UUFjVCxLQUFLO0lBQzVDLElBQUksQ0FBQyxDQUFPO1FBQUdBLElBQUksR0FkQyxNQUFzQjtRQWNULEtBQUs7SUFDdEMsSUFBSSxDQUFDLENBQVU7UUFBR0EsSUFBSSxHQWRDLFNBQXlCO1FBY1QsS0FBSztJQUM1QyxJQUFJLENBQUMsQ0FBa0I7UUFBR0EsSUFBSSxHQWRDLGlCQUFpQztRQWNULEtBQUs7SUFDNUQsSUFBSSxDQUFDLENBQTZCO1FBQUdBLElBQUksR0FkQyw0QkFBNEM7UUFjVCxLQUFLOztBQUdwRkQsWUFBWTtBQUVaRSxJQUFJLENBQUNNLEtBQUssbUNBRVBQLElBQUkifQ==