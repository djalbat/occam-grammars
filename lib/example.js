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
body.mount(React.createElement(View, null));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBGbG9yZW5jZVZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2Zsb3JlbmNlXCI7XG5pbXBvcnQgUGxhaW5WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9wbGFpblwiO1xuaW1wb3J0IE1ldGFKU09OVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvbWV0YUpTT05cIjtcbmltcG9ydCBDdXN0b21HcmFtbWFyQk5GVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckJORlwiO1xuaW1wb3J0IEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2N1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5sZXQgVmlldztcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJmbG9yZW5jZVwiIDogVmlldyA9IEZsb3JlbmNlVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJwbGFpblwiIDogVmlldyA9IFBsYWluVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJtZXRhSlNPTlwiIDogVmlldyA9IE1ldGFKU09OVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJjdXN0b21HcmFtbWFyQk5GXCIgOiBWaWV3ID0gQ3VzdG9tR3JhbW1hckJORlZpZXc7IGJyZWFrO1xuICBjYXNlIFwiY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuXCIgOiBWaWV3ID0gQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuVmlldzsgYnJlYWs7XG59XG5cbnJlbmRlclN0eWxlcygpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3IC8+XG5cbik7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7SUFJVSxjQUFpQjtJQUVsQixLQUFNO0lBRUYsU0FBeUI7SUFDNUIsTUFBc0I7SUFDbkIsU0FBeUI7SUFDakIsaUJBQWlDO0lBQ3RCLDRCQUE0Qzs7Ozs7O0lBRWhGLFlBQVksR0FWRSxjQUFpQixTQVUvQixZQUFZO0lBRWhCLElBQUk7SUFFRixJQUFJLE9BWlcsS0FBTSxTQWFyQixPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7T0FFakQsT0FBTztVQUNSLFFBQVU7QUFBRyxZQUFJLEdBZEMsU0FBeUI7O1VBZTNDLEtBQU87QUFBRyxZQUFJLEdBZEMsTUFBc0I7O1VBZXJDLFFBQVU7QUFBRyxZQUFJLEdBZEMsU0FBeUI7O1VBZTNDLGdCQUFrQjtBQUFHLFlBQUksR0FkQyxpQkFBaUM7O1VBZTNELDJCQUE2QjtBQUFHLFlBQUksR0FkQyw0QkFBNEM7OztBQWlCeEYsWUFBWTtBQUVaLElBQUksQ0FBQyxLQUFLLHFCQUVQLElBQUkifQ==