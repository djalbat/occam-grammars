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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkJvZHkiLCJGbG9yZW5jZVZpZXciLCJQbGFpblZpZXciLCJNZXRhSlNPTlZpZXciLCJDdXN0b21HcmFtbWFyQk5GVmlldyIsIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblZpZXciLCJyZW5kZXJTdHlsZXMiLCJWaWV3IiwiYm9keSIsImV4YW1wbGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOztBQUlVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWxCLEdBQU0sQ0FBTixLQUFNO0FBRUYsR0FBeUIsQ0FBekIsU0FBeUI7QUFDNUIsR0FBc0IsQ0FBdEIsTUFBc0I7QUFDbkIsR0FBeUIsQ0FBekIsU0FBeUI7QUFDakIsR0FBaUMsQ0FBakMsaUJBQWlDO0FBQ3RCLEdBQTRDLENBQTVDLDRCQUE0Qzs7Ozs7O0FBRXhGLEdBQUssQ0FBRyxZQUFZLEdBVkUsY0FBaUIsU0FVL0IsWUFBWTtBQUVwQixHQUFHLENBQUMsSUFBSTtBQUVSLEdBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQVpLLEtBQU0sU0FhckIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0FBRXpELE1BQU0sQ0FBRSxPQUFPO0lBQ2IsSUFBSSxFQUFDLFFBQVU7UUFBRyxJQUFJLEdBZEMsU0FBeUI7UUFjVCxLQUFLO0lBQzVDLElBQUksRUFBQyxLQUFPO1FBQUcsSUFBSSxHQWRDLE1BQXNCO1FBY1QsS0FBSztJQUN0QyxJQUFJLEVBQUMsUUFBVTtRQUFHLElBQUksR0FkQyxTQUF5QjtRQWNULEtBQUs7SUFDNUMsSUFBSSxFQUFDLGdCQUFrQjtRQUFHLElBQUksR0FkQyxpQkFBaUM7UUFjVCxLQUFLO0lBQzVELElBQUksRUFBQywyQkFBNkI7UUFBRyxJQUFJLEdBZEMsNEJBQTRDO1FBY1QsS0FBSzs7QUFHcEYsWUFBWTtBQUVaLElBQUksQ0FBQyxLQUFLLG1DQUVQLElBQUkifQ==