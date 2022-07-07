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
    default: function() {
        return _default;
    },
    lexicalPattern: function() {
        return lexicalPattern;
    },
    termBNF: function() {
        return termBNF;
    },
    expressionBNF: function() {
        return expressionBNF;
    },
    statementBNF: function() {
        return statementBNF;
    },
    metastatementBNF: function() {
        return metastatementBNF;
    }
});
var lexicalPattern = "";
var termBNF = "term!                                ::=   _ ;";
var expressionBNF = "expression!                          ::=   _ ;";
var statementBNF = 'statement!                           ::=   typeAssertion \n                                                  \n                                       |   equality \n\n                                       ;\n\ntypeAssertion                        ::=   ( expression | [name] ) ":" [name] ;\n\nequality                             ::=   expression "=" expression ;';
var metastatementBNF = 'metastatement!                       ::=   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   metavariable \n\n                                       |   subproof \n                                        \n                                       ;\n\ncontextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context "|-" judgement ;\n \njudgement                            ::=   reference "::" metastatement ;\n\nsubproof                             ::=   "[" metastatement "]" "..." metastatement ;';
var _default = {
    lexicalPattern: lexicalPattern,
    termBNF: termBNF,
    expressionBNF: expressionBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsZXhpY2FsUGF0dGVybiA9IFwiXCI7XHJcblxyXG4gICAgICAgICBleHBvcnQgY29uc3QgdGVybUJORiA9IGB0ZXJtISAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXyA7YDtcclxuXHJcbiAgIGV4cG9ydCBjb25zdCBleHByZXNzaW9uQk5GID0gYGV4cHJlc3Npb24hICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBfIDtgO1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCBzdGF0ZW1lbnRCTkYgPSBgc3RhdGVtZW50ISAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHR5cGVBc3NlcnRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBlcXVhbGl0eSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuXHJcbnR5cGVBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAoIGV4cHJlc3Npb24gfCBbbmFtZV0gKSBcIjpcIiBbbmFtZV0gO1xyXG5cclxuZXF1YWxpdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGV4cHJlc3Npb24gXCI9XCIgZXhwcmVzc2lvbiA7YDtcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhc3RhdGVtZW50Qk5GID0gYG1ldGFzdGF0ZW1lbnQhICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0RGVmaW5pdGlvbiBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHByb29mQXNzZXJ0aW9uXHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG1ldGF2YXJpYWJsZSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBzdWJwcm9vZiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcblxyXG5jb250ZXh0RGVmaW5pdGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICAgY29udGV4dCBcIj1cIiAoIGp1ZGdlbWVudCB8IGNvbnRleHQgKSAoIFwiLFwiICgganVkZ2VtZW50IHwgY29udGV4dCApICkqIDtcclxuXHJcbnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0IFwifC1cIiBqdWRnZW1lbnQgO1xyXG4gXHJcbmp1ZGdlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICByZWZlcmVuY2UgXCI6OlwiIG1ldGFzdGF0ZW1lbnQgO1xyXG5cclxuc3VicHJvb2YgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiW1wiIG1ldGFzdGF0ZW1lbnQgXCJdXCIgXCIuLi5cIiBtZXRhc3RhdGVtZW50IDtgO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGxleGljYWxQYXR0ZXJuLFxyXG4gIHRlcm1CTkYsXHJcbiAgZXhwcmVzc2lvbkJORixcclxuICBzdGF0ZW1lbnRCTkYsXHJcbiAgbWV0YXN0YXRlbWVudEJORlxyXG59O1xyXG4iXSwibmFtZXMiOlsibGV4aWNhbFBhdHRlcm4iLCJ0ZXJtQk5GIiwiZXhwcmVzc2lvbkJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUFFQUEsY0FBYztlQUFkQSxjQUFjOztJQUVMQyxPQUFPO2VBQVBBLE9BQU87O0lBRWJDLGFBQWE7ZUFBYkEsYUFBYTs7SUFFWkMsWUFBWTtlQUFaQSxZQUFZOztJQVVoQkMsZ0JBQWdCO2VBQWhCQSxnQkFBZ0I7OztBQWhCdEIsSUFBTUosY0FBYyxHQUFHLEVBQUUsQUFBQztBQUVqQixJQUFNQyxPQUFPLEdBQUksZ0RBQThDLEFBQUMsQUFBQztBQUV2RSxJQUFNQyxhQUFhLEdBQUksZ0RBQThDLEFBQUMsQUFBQztBQUV0RSxJQUFNQyxZQUFZLEdBQUksOFdBUXFDLEFBQUMsQUFBQztBQUVqRSxJQUFNQyxnQkFBZ0IsR0FBSSwwckJBZ0JxRCxBQUFDLEFBQUM7ZUFFekU7SUFDYkosY0FBYyxFQUFkQSxjQUFjO0lBQ2RDLE9BQU8sRUFBUEEsT0FBTztJQUNQQyxhQUFhLEVBQWJBLGFBQWE7SUFDYkMsWUFBWSxFQUFaQSxZQUFZO0lBQ1pDLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0NBQ2pCIn0=