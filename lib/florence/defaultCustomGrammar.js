"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.metastatementBNF = exports.statementBNF = exports.expressionBNF = exports.termBNF = exports.lexicalPattern = void 0;
var lexicalPattern = "";
exports.lexicalPattern = lexicalPattern;
var termBNF = "term!                                ::=   _ ;";
exports.termBNF = termBNF;
var expressionBNF = "expression!                          ::=   _ ;";
exports.expressionBNF = expressionBNF;
var statementBNF = 'statement!                           ::=   expression "=" expression ;';
exports.statementBNF = statementBNF;
var metastatementBNF = 'metastatement!                       ::=   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   typeAssertion \n                                                  \n                                       |   metavariable \n\n                                       |   subproof \n                                        \n                                       ;\n\ncontextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context "|-" judgement ;\n \ntypeAssertion                        ::=   ( type | expression ) ":" typeName \n\njudgement                            ::=   reference "::" metastatement ;\n\nsubproof                             ::=   "[" metastatement "]" "..." metastatement ;\n\n                                       ';
exports.metastatementBNF = metastatementBNF;
var _default = {
    lexicalPattern: lexicalPattern,
    termBNF: termBNF,
    expressionBNF: expressionBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF
};
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsZXhpY2FsUGF0dGVybiA9IFwiXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdGVybUJORiA9IGB0ZXJtISAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXyA7YDtcclxuXHJcbmV4cG9ydCBjb25zdCBleHByZXNzaW9uQk5GID0gYGV4cHJlc3Npb24hICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBfIDtgO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXRlbWVudEJORiA9IGBzdGF0ZW1lbnQhICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgZXhwcmVzc2lvbiBcIj1cIiBleHByZXNzaW9uIDtgO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGFzdGF0ZW1lbnRCTkYgPSBgbWV0YXN0YXRlbWVudCEgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnRleHREZWZpbml0aW9uIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgcHJvb2ZBc3NlcnRpb25cclxuICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgdHlwZUFzc2VydGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG1ldGF2YXJpYWJsZSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBzdWJwcm9vZiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcblxyXG5jb250ZXh0RGVmaW5pdGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICAgY29udGV4dCBcIj1cIiAoIGp1ZGdlbWVudCB8IGNvbnRleHQgKSAoIFwiLFwiICgganVkZ2VtZW50IHwgY29udGV4dCApICkqIDtcclxuXHJcbnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0IFwifC1cIiBqdWRnZW1lbnQgO1xyXG4gXHJcbnR5cGVBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAoIHR5cGUgfCBleHByZXNzaW9uICkgXCI6XCIgdHlwZU5hbWUgXHJcblxyXG5qdWRnZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgcmVmZXJlbmNlIFwiOjpcIiBtZXRhc3RhdGVtZW50IDtcclxuXHJcbnN1YnByb29mICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIltcIiBtZXRhc3RhdGVtZW50IFwiXVwiIFwiLi4uXCIgbWV0YXN0YXRlbWVudCA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGxleGljYWxQYXR0ZXJuLFxyXG4gIHRlcm1CTkYsXHJcbiAgZXhwcmVzc2lvbkJORixcclxuICBzdGF0ZW1lbnRCTkYsXHJcbiAgbWV0YXN0YXRlbWVudEJORlxyXG59O1xyXG4iXSwibmFtZXMiOlsibGV4aWNhbFBhdHRlcm4iLCJ0ZXJtQk5GIiwiZXhwcmVzc2lvbkJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFTixJQUFNQSxjQUFjLEdBQUcsRUFBRSxBQUFDO1FBQXBCQSxjQUFjLEdBQWRBLGNBQWM7QUFFcEIsSUFBTUMsT0FBTyxHQUFJLGdEQUE4QyxBQUFDLEFBQUM7UUFBM0RBLE9BQU8sR0FBUEEsT0FBTztBQUViLElBQU1DLGFBQWEsR0FBSSxnREFBOEMsQUFBQyxBQUFDO1FBQWpFQSxhQUFhLEdBQWJBLGFBQWE7QUFFbkIsSUFBTUMsWUFBWSxHQUFJLHdFQUFzRSxBQUFDLEFBQUM7UUFBeEZBLFlBQVksR0FBWkEsWUFBWTtBQUVsQixJQUFNQyxnQkFBZ0IsR0FBSSxzNkJBc0JNLEFBQUMsQUFBQztRQXRCNUJBLGdCQUFnQixHQUFoQkEsZ0JBQWdCO2VBd0JkO0lBQ2JKLGNBQWMsRUFBZEEsY0FBYztJQUNkQyxPQUFPLEVBQVBBLE9BQU87SUFDUEMsYUFBYSxFQUFiQSxhQUFhO0lBQ2JDLFlBQVksRUFBWkEsWUFBWTtJQUNaQyxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtDQUNqQiJ9