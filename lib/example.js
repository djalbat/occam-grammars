"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBUZVhWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy90ZXhcIjtcbmltcG9ydCBQbGFpblZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L3BsYWluXCI7XG5pbXBvcnQgTWV0YUpTT05WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9tZXRhSlNPTlwiO1xuaW1wb3J0IEN1c3RvbUdyYW1tYXJCTkZWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9jdXN0b21HcmFtbWFyQk5GXCI7XG5pbXBvcnQgQ3VzdG9tR3JhbW1hclBhdHRlcm5WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9jdXN0b21HcmFtbWFyUGF0dGVyblwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5sZXQgVmlldztcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJ0ZXhcIiA6IFZpZXcgPSBUZVhWaWV3OyBicmVhaztcbiAgY2FzZSBcInBsYWluXCIgOiBWaWV3ID0gUGxhaW5WaWV3OyBicmVhaztcbiAgY2FzZSBcIm1ldGFKU09OXCIgOiBWaWV3ID0gTWV0YUpTT05WaWV3OyBicmVhaztcbiAgY2FzZSBcImN1c3RvbUdyYW1tYXJCTkZcIiA6IFZpZXcgPSBDdXN0b21HcmFtbWFyQk5GVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJjdXN0b21HcmFtbWFyUGF0dGVyblwiIDogVmlldyA9IEN1c3RvbUdyYW1tYXJQYXR0ZXJuVmlldzsgYnJlYWs7XG59XG5cbnJlbmRlclN0eWxlcygpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3Lz5cblxuKTtcbiJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZXMiLCJ3aXRoU3R5bGUiLCJWaWV3IiwiYm9keSIsIkJvZHkiLCJleGFtcGxlIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHJpbmciLCJUZVhWaWV3IiwiUGxhaW5WaWV3IiwiTWV0YUpTT05WaWV3IiwiQ3VzdG9tR3JhbW1hckJORlZpZXciLCJDdXN0b21HcmFtbWFyUGF0dGVyblZpZXciLCJtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7UUFFTztrRUFFZTtvQkFFRDt3REFFRDswREFDRTs2REFDRztxRUFDUTt5RUFDSTs7Ozs7O0FBRXJDLElBQU0sQUFBRUEsZUFBaUJDLHNCQUFTLENBQTFCRDtBQUVSLElBQUlFO0FBRUosSUFBTUMsT0FBTyxJQUFJQyxVQUFJLElBQ2ZDLFVBQVVDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUMsSUFBSyxHQUFHO0FBRXpELE9BQVFKO0lBQ04sS0FBSztRQUFRSCxPQUFPUSxZQUFPO1FBQUUsS0FBTTtJQUNuQyxLQUFLO1FBQVVSLE9BQU9TLGNBQVM7UUFBRSxLQUFNO0lBQ3ZDLEtBQUs7UUFBYVQsT0FBT1UsaUJBQVk7UUFBRSxLQUFNO0lBQzdDLEtBQUs7UUFBcUJWLE9BQU9XLHlCQUFvQjtRQUFFLEtBQU07SUFDN0QsS0FBSztRQUF5QlgsT0FBT1ksNkJBQXdCO1FBQUUsS0FBTTtBQUN2RTtBQUVBZDtBQUVBRyxLQUFLWSxLQUFLLGVBRVIsb0JBQUNiIn0=