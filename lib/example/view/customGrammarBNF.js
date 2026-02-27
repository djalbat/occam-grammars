"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CustomGrammarBNFView;
    }
});
const _index = require("../../index");
const _view = /*#__PURE__*/ _interop_require_default(require("../view"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class CustomGrammarBNFView extends _view.default {
    static Lexer = _index.CustomGrammarBNFLexer;
    static Parser = _index.CustomGrammarBNFParser;
    static readOnly = true;
    static initialContent = `

       term  ::=  operation ( <NO_WHITESPACE>"(" term ")" )? ;


  operation  ::=  "insert"<NO_WHITESPACE>"(" term "," term ")"

               |  "delete"<NO_WHITESPACE>"(" term "," term ")" 

               |  "empty"<NO_WHITESPACE>"("<NO_WHITESPACE>")"

               ;
`;
    static defaultProperties = {
        className: "custom-grammar-bnf"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckJORi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ3VzdG9tR3JhbW1hckJORkxleGVyLCBDdXN0b21HcmFtbWFyQk5GUGFyc2VyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hckJORlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIExleGVyID0gQ3VzdG9tR3JhbW1hckJORkxleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBDdXN0b21HcmFtbWFyQk5GUGFyc2VyO1xuXG4gIHN0YXRpYyByZWFkT25seSA9IHRydWU7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYFxuXG4gICAgICAgdGVybSAgOjo9ICBvcGVyYXRpb24gKCA8Tk9fV0hJVEVTUEFDRT5cIihcIiB0ZXJtIFwiKVwiICk/IDtcblxuXG4gIG9wZXJhdGlvbiAgOjo9ICBcImluc2VydFwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgdGVybSBcIixcIiB0ZXJtIFwiKVwiXG5cbiAgICAgICAgICAgICAgIHwgIFwiZGVsZXRlXCI8Tk9fV0hJVEVTUEFDRT5cIihcIiB0ZXJtIFwiLFwiIHRlcm0gXCIpXCIgXG5cbiAgICAgICAgICAgICAgIHwgIFwiZW1wdHlcIjxOT19XSElURVNQQUNFPlwiKFwiPE5PX1dISVRFU1BBQ0U+XCIpXCJcblxuICAgICAgICAgICAgICAgO1xuYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImN1c3RvbS1ncmFtbWFyLWJuZlwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hckJORlZpZXciLCJWaWV3IiwiTGV4ZXIiLCJDdXN0b21HcmFtbWFyQk5GTGV4ZXIiLCJQYXJzZXIiLCJDdXN0b21HcmFtbWFyQk5GUGFyc2VyIiwicmVhZE9ubHkiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O3VCQUp5Qzs2REFFN0M7Ozs7OztBQUVGLE1BQU1BLDZCQUE2QkMsYUFBSTtJQUNwRCxPQUFPQyxRQUFRQyw0QkFBcUIsQ0FBQztJQUVyQyxPQUFPQyxTQUFTQyw2QkFBc0IsQ0FBQztJQUV2QyxPQUFPQyxXQUFXLEtBQUs7SUFFdkIsT0FBT0MsaUJBQWlCLENBQUM7Ozs7Ozs7Ozs7OztBQVkzQixDQUFDLENBQUM7SUFFQSxPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0oifQ==