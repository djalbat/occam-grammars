"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _tex = /*#__PURE__*/ _interop_require_default(require("./example/view/tex"));
var _metaJSON = /*#__PURE__*/ _interop_require_default(require("./example/view/metaJSON"));
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
    case "meta-json":
        View = _metaJSON.default;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBUZVhWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy90ZXhcIjtcbmltcG9ydCBNZXRhSlNPTlZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L21ldGFKU09OXCI7XG5pbXBvcnQgUGxhaW5UZXh0VmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvcGxhaW5UZXh0XCI7XG5pbXBvcnQgQ3VzdG9tR3JhbW1hckJORlZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2N1c3RvbUdyYW1tYXJCTkZcIjtcbmltcG9ydCBDdXN0b21HcmFtbWFyUGF0dGVyblZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2N1c3RvbUdyYW1tYXJQYXR0ZXJuXCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmxldCBWaWV3O1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGV4YW1wbGUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTsgIC8vL1xuXG5zd2l0Y2ggKGV4YW1wbGUpIHtcbiAgY2FzZSBcInRleFwiIDogVmlldyA9IFRlWFZpZXc7IGJyZWFrO1xuICBjYXNlIFwibWV0YS1qc29uXCIgOiBWaWV3ID0gTWV0YUpTT05WaWV3OyBicmVhaztcbiAgY2FzZSBcInBsYWluLXRleHRcIiA6IFZpZXcgPSBQbGFpblRleHRWaWV3OyBicmVhaztcbiAgY2FzZSBcImN1c3RvbS1ncmFtbWFyLWJuZlwiIDogVmlldyA9IEN1c3RvbUdyYW1tYXJCTkZWaWV3OyBicmVhaztcbiAgY2FzZSBcImN1c3RvbS1ncmFtbWFyLXBhdHRlcm5cIiA6IFZpZXcgPSBDdXN0b21HcmFtbWFyUGF0dGVyblZpZXc7IGJyZWFrO1xufVxuXG5yZW5kZXJTdHlsZXMoKTtcblxuYm9keS5tb3VudChcblxuICA8Vmlldy8+XG5cbik7XG4iXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwiVmlldyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiVGVYVmlldyIsIk1ldGFKU09OVmlldyIsIlBsYWluVGV4dFZpZXciLCJDdXN0b21HcmFtbWFyQk5GVmlldyIsIkN1c3RvbUdyYW1tYXJQYXR0ZXJuVmlldyIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OztRQUVPO29FQUVlO29CQUVEOzBEQUVEOytEQUNLO2dFQUNDO3VFQUNPOzJFQUNJOzs7Ozs7QUFFckMsSUFBTSxBQUFFQSxlQUFpQkMsc0JBQVMsQ0FBMUJEO0FBRVIsSUFBSUU7QUFFSixJQUFNQyxPQUFPLElBQUlDLFVBQUksSUFDZkMsVUFBVUMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQyxJQUFLLEdBQUc7QUFFekQsT0FBUUo7SUFDTixLQUFLO1FBQVFILE9BQU9RLFlBQU87UUFBRTtJQUM3QixLQUFLO1FBQWNSLE9BQU9TLGlCQUFZO1FBQUU7SUFDeEMsS0FBSztRQUFlVCxPQUFPVSxrQkFBYTtRQUFFO0lBQzFDLEtBQUs7UUFBdUJWLE9BQU9XLHlCQUFvQjtRQUFFO0lBQ3pELEtBQUs7UUFBMkJYLE9BQU9ZLDZCQUF3QjtRQUFFO0FBQ25FO0FBRUFkO0FBRUFHLEtBQUtZLEtBQUssZUFFUixvQkFBQ2IifQ==