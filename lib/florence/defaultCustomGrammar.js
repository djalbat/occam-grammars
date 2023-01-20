"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    typePattern: function() {
        return typePattern;
    },
    symbolPattern: function() {
        return symbolPattern;
    },
    operatorPattern: function() {
        return operatorPattern;
    },
    termBNF: function() {
        return termBNF;
    },
    statementBNF: function() {
        return statementBNF;
    },
    metastatementBNF: function() {
        return metastatementBNF;
    },
    default: function() {
        return _default;
    }
});
var typePattern = "";
var symbolPattern = "";
var operatorPattern = "";
var termBNF = "term!                                ::=   variable ;";
var statementBNF = 'statement!                           ::=   "(" metaArgument ")" \n                                                  \n                                       |   argument "=" argument\n\n                                       |   typeAssertion \n                                                  \n                                       ;\n\ntypeAssertion                        ::=   term ":" type ;';
var metastatementBNF = 'metastatement!                       ::=   "(" metastatement ")" \n           \n                                       |   ruleSubproofAssertion         \n                                        \n                                       |   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   metavariable \n\n                                       ;\n\nruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;\n\ncontextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context "|-" judgement ;\n \njudgement                            ::=   reference "::" metastatement ;';
var _default = {
    termBNF: termBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF,
    typePattern: typePattern,
    symbolPattern: symbolPattern,
    operatorPattern: operatorPattern
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlUGF0dGVybiA9IFwiXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3ltYm9sUGF0dGVybiA9IFwiXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0ZXJtQk5GID0gYHRlcm0hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB2YXJpYWJsZSA7YDtcclxuXHJcbiAgICBleHBvcnQgY29uc3Qgc3RhdGVtZW50Qk5GID0gYHN0YXRlbWVudCEgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIihcIiBtZXRhQXJndW1lbnQgXCIpXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBhcmd1bWVudCBcIj1cIiBhcmd1bWVudFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHR5cGVBc3NlcnRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuXHJcbnR5cGVBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB0ZXJtIFwiOlwiIHR5cGUgO2A7XHJcblxyXG5leHBvcnQgY29uc3QgbWV0YXN0YXRlbWVudEJORiA9IGBtZXRhc3RhdGVtZW50ISAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIoXCIgbWV0YXN0YXRlbWVudCBcIilcIiBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBjb250ZXh0RGVmaW5pdGlvbiBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHByb29mQXNzZXJ0aW9uXHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG1ldGF2YXJpYWJsZSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuXHJcbnJ1bGVTdWJwcm9vZkFzc2VydGlvbiAgICAgICAgICAgICAgICA6Oj0gICBcIltcIiBtZXRhc3RhdGVtZW50ICggXCIsXCIgbWV0YXN0YXRlbWVudCApKiBcIl1cIiBcIi4uLlwiIG1ldGFzdGF0ZW1lbnQgO1xyXG5cclxuY29udGV4dERlZmluaXRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnRleHQgXCI9XCIgKCBqdWRnZW1lbnQgfCBjb250ZXh0ICkgKCBcIixcIiAoIGp1ZGdlbWVudCB8IGNvbnRleHQgKSApKiA7XHJcblxyXG5wcm9vZkFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgY29udGV4dCBcInwtXCIganVkZ2VtZW50IDtcclxuIFxyXG5qdWRnZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgcmVmZXJlbmNlIFwiOjpcIiBtZXRhc3RhdGVtZW50IDtgO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHRlcm1CTkYsXHJcbiAgc3RhdGVtZW50Qk5GLFxyXG4gIG1ldGFzdGF0ZW1lbnRCTkYsXHJcbiAgdHlwZVBhdHRlcm4sXHJcbiAgc3ltYm9sUGF0dGVybixcclxuICBvcGVyYXRvclBhdHRlcm5cclxufTtcclxuIl0sIm5hbWVzIjpbInR5cGVQYXR0ZXJuIiwic3ltYm9sUGF0dGVybiIsIm9wZXJhdG9yUGF0dGVybiIsInRlcm1CTkYiLCJzdGF0ZW1lbnRCTkYiLCJtZXRhc3RhdGVtZW50Qk5GIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFYUEsV0FBVztlQUFYQTs7SUFFQUMsYUFBYTtlQUFiQTs7SUFFQUMsZUFBZTtlQUFmQTs7SUFFQUMsT0FBTztlQUFQQTs7SUFFSUMsWUFBWTtlQUFaQTs7SUFVSkMsZ0JBQWdCO2VBQWhCQTs7SUFvQmIsT0FPRTtlQVBGOzs7QUF0Q08sSUFBTUwsY0FBYztBQUVwQixJQUFNQyxnQkFBZ0I7QUFFdEIsSUFBTUMsa0JBQWtCO0FBRXhCLElBQU1DLFVBQVc7QUFFYixJQUFNQyxlQUFnQjtBQVUxQixJQUFNQyxtQkFBb0I7SUFvQmpDLFdBQWU7SUFDYkYsU0FBQUE7SUFDQUMsY0FBQUE7SUFDQUMsa0JBQUFBO0lBQ0FMLGFBQUFBO0lBQ0FDLGVBQUFBO0lBQ0FDLGlCQUFBQTtBQUNGIn0=