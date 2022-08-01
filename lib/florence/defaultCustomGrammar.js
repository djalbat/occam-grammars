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
    operatorPattern: function() {
        return operatorPattern;
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
    },
    default: function() {
        return _default;
    }
});
var typePattern = "";
var operatorPattern = "";
var termBNF = "term!                                ::=   _ ;";
var expressionBNF = "expression!                          ::=   _ ;";
var statementBNF = 'statement!                           ::=   typeAssertion \n                                                  \n                                       |   equality \n\n                                       ;\n\ntypeAssertion                        ::=   expression ":" type ;\n\nequality                             ::=   expression "=" expression ;';
var metastatementBNF = 'metastatement!                       ::=   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   metavariable \n\n                                       |   subproof \n                                        \n                                       ;\n\ncontextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context "|-" judgement ;\n \njudgement                            ::=   reference "::" metastatement ;\n\nsubproof                             ::=   "[" metastatement "]" "..." metastatement ;';
var _default = {
    typePattern: typePattern,
    operatorPattern: operatorPattern,
    termBNF: termBNF,
    expressionBNF: expressionBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlUGF0dGVybiA9IFwiXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0ZXJtQk5GID0gYHRlcm0hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBfIDtgO1xyXG5cclxuICAgZXhwb3J0IGNvbnN0IGV4cHJlc3Npb25CTkYgPSBgZXhwcmVzc2lvbiEgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIF8gO2A7XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IHN0YXRlbWVudEJORiA9IGBzdGF0ZW1lbnQhICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdHlwZUFzc2VydGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGVxdWFsaXR5IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG5cclxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGV4cHJlc3Npb24gXCI6XCIgdHlwZSA7XHJcblxyXG5lcXVhbGl0eSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgZXhwcmVzc2lvbiBcIj1cIiBleHByZXNzaW9uIDtgO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGFzdGF0ZW1lbnRCTkYgPSBgbWV0YXN0YXRlbWVudCEgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnRleHREZWZpbml0aW9uIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgcHJvb2ZBc3NlcnRpb25cclxuICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbWV0YXZhcmlhYmxlIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHN1YnByb29mIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuXHJcbmNvbnRleHREZWZpbml0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0IFwiPVwiICgganVkZ2VtZW50IHwgY29udGV4dCApICggXCIsXCIgKCBqdWRnZW1lbnQgfCBjb250ZXh0ICkgKSogO1xyXG5cclxucHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnRleHQgXCJ8LVwiIGp1ZGdlbWVudCA7XHJcbiBcclxuanVkZ2VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHJlZmVyZW5jZSBcIjo6XCIgbWV0YXN0YXRlbWVudCA7XHJcblxyXG5zdWJwcm9vZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJbXCIgbWV0YXN0YXRlbWVudCBcIl1cIiBcIi4uLlwiIG1ldGFzdGF0ZW1lbnQgO2A7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgdHlwZVBhdHRlcm4sXHJcbiAgb3BlcmF0b3JQYXR0ZXJuLFxyXG4gIHRlcm1CTkYsXHJcbiAgZXhwcmVzc2lvbkJORixcclxuICBzdGF0ZW1lbnRCTkYsXHJcbiAgbWV0YXN0YXRlbWVudEJORlxyXG59O1xyXG4iXSwibmFtZXMiOlsidHlwZVBhdHRlcm4iLCJvcGVyYXRvclBhdHRlcm4iLCJ0ZXJtQk5GIiwiZXhwcmVzc2lvbkJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFFQUEsV0FBVztlQUFYQSxXQUFXOztJQUVYQyxlQUFlO2VBQWZBLGVBQWU7O0lBRWZDLE9BQU87ZUFBUEEsT0FBTzs7SUFFSkMsYUFBYTtlQUFiQSxhQUFhOztJQUVaQyxZQUFZO2VBQVpBLFlBQVk7O0lBVWhCQyxnQkFBZ0I7ZUFBaEJBLGdCQUFnQjs7SUFrQjdCLE9BT0U7ZUFQRixRQU9FOzs7QUEzQ0ssSUFBTUwsV0FBVyxHQUFHLEVBQUUsQUFBQztBQUV2QixJQUFNQyxlQUFlLEdBQUcsRUFBRSxBQUFDO0FBRTNCLElBQU1DLE9BQU8sR0FBSSxnREFBOEMsQUFBQyxBQUFDO0FBRTlELElBQU1DLGFBQWEsR0FBSSxnREFBOEMsQUFBQyxBQUFDO0FBRXRFLElBQU1DLFlBQVksR0FBSSwrVkFRcUMsQUFBQyxBQUFDO0FBRWpFLElBQU1DLGdCQUFnQixHQUFJLDByQkFnQnFELEFBQUMsQUFBQztJQUV4RixRQU9FLEdBUGE7SUFDYkwsV0FBVyxFQUFYQSxXQUFXO0lBQ1hDLGVBQWUsRUFBZkEsZUFBZTtJQUNmQyxPQUFPLEVBQVBBLE9BQU87SUFDUEMsYUFBYSxFQUFiQSxhQUFhO0lBQ2JDLFlBQVksRUFBWkEsWUFBWTtJQUNaQyxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtDQUNqQiJ9