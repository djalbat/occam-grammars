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
    lexicalPattern: function() {
        return lexicalPattern;
    },
    typeBNF: function() {
        return typeBNF;
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
var lexicalPattern = "";
var typeBNF = "type                                 ::=   _ ;";
var termBNF = "term!                                ::=   _ ;";
var expressionBNF = "expression!                          ::=   _ ;";
var statementBNF = 'statement!                           ::=   typeAssertion \n                                                  \n                                       |   equality \n\n                                       ;\n\ntypeAssertion                        ::=   ( expression | [name] ) ":" [name] ;\n\nequality                             ::=   expression "=" expression ;';
var metastatementBNF = 'metastatement!                       ::=   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   metavariable \n\n                                       |   subproof \n                                        \n                                       ;\n\ncontextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context "|-" judgement ;\n \njudgement                            ::=   reference "::" metastatement ;\n\nsubproof                             ::=   "[" metastatement "]" "..." metastatement ;';
var _default = {
    lexicalPattern: lexicalPattern,
    typeBNF: typeBNF,
    termBNF: termBNF,
    expressionBNF: expressionBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsZXhpY2FsUGF0dGVybiA9IFwiXCI7XHJcblxyXG4gICAgICAgICBleHBvcnQgY29uc3QgdHlwZUJORiA9IGB0eXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXyA7YDtcclxuXHJcbiAgICAgICAgIGV4cG9ydCBjb25zdCB0ZXJtQk5GID0gYHRlcm0hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBfIDtgO1xyXG5cclxuICAgZXhwb3J0IGNvbnN0IGV4cHJlc3Npb25CTkYgPSBgZXhwcmVzc2lvbiEgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIF8gO2A7XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IHN0YXRlbWVudEJORiA9IGBzdGF0ZW1lbnQhICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdHlwZUFzc2VydGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGVxdWFsaXR5IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG5cclxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgICggZXhwcmVzc2lvbiB8IFtuYW1lXSApIFwiOlwiIFtuYW1lXSA7XHJcblxyXG5lcXVhbGl0eSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgZXhwcmVzc2lvbiBcIj1cIiBleHByZXNzaW9uIDtgO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGFzdGF0ZW1lbnRCTkYgPSBgbWV0YXN0YXRlbWVudCEgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnRleHREZWZpbml0aW9uIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgcHJvb2ZBc3NlcnRpb25cclxuICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbWV0YXZhcmlhYmxlIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHN1YnByb29mIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuXHJcbmNvbnRleHREZWZpbml0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0IFwiPVwiICgganVkZ2VtZW50IHwgY29udGV4dCApICggXCIsXCIgKCBqdWRnZW1lbnQgfCBjb250ZXh0ICkgKSogO1xyXG5cclxucHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnRleHQgXCJ8LVwiIGp1ZGdlbWVudCA7XHJcbiBcclxuanVkZ2VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHJlZmVyZW5jZSBcIjo6XCIgbWV0YXN0YXRlbWVudCA7XHJcblxyXG5zdWJwcm9vZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJbXCIgbWV0YXN0YXRlbWVudCBcIl1cIiBcIi4uLlwiIG1ldGFzdGF0ZW1lbnQgO2A7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbGV4aWNhbFBhdHRlcm4sXHJcbiAgdHlwZUJORixcclxuICB0ZXJtQk5GLFxyXG4gIGV4cHJlc3Npb25CTkYsXHJcbiAgc3RhdGVtZW50Qk5GLFxyXG4gIG1ldGFzdGF0ZW1lbnRCTkZcclxufTtcclxuIl0sIm5hbWVzIjpbImxleGljYWxQYXR0ZXJuIiwidHlwZUJORiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUVBQSxjQUFjO2VBQWRBLGNBQWM7O0lBRUxDLE9BQU87ZUFBUEEsT0FBTzs7SUFFUEMsT0FBTztlQUFQQSxPQUFPOztJQUViQyxhQUFhO2VBQWJBLGFBQWE7O0lBRVpDLFlBQVk7ZUFBWkEsWUFBWTs7SUFVaEJDLGdCQUFnQjtlQUFoQkEsZ0JBQWdCOztJQWtCN0IsT0FPRTtlQVBGLFFBT0U7OztBQTNDSyxJQUFNTCxjQUFjLEdBQUcsRUFBRSxBQUFDO0FBRWpCLElBQU1DLE9BQU8sR0FBSSxnREFBOEMsQUFBQyxBQUFDO0FBRWpFLElBQU1DLE9BQU8sR0FBSSxnREFBOEMsQUFBQyxBQUFDO0FBRXZFLElBQU1DLGFBQWEsR0FBSSxnREFBOEMsQUFBQyxBQUFDO0FBRXRFLElBQU1DLFlBQVksR0FBSSw4V0FRcUMsQUFBQyxBQUFDO0FBRWpFLElBQU1DLGdCQUFnQixHQUFJLDByQkFnQnFELEFBQUMsQUFBQztJQUV4RixRQU9FLEdBUGE7SUFDYkwsY0FBYyxFQUFkQSxjQUFjO0lBQ2RDLE9BQU8sRUFBUEEsT0FBTztJQUNQQyxPQUFPLEVBQVBBLE9BQU87SUFDUEMsYUFBYSxFQUFiQSxhQUFhO0lBQ2JDLFlBQVksRUFBWkEsWUFBWTtJQUNaQyxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtDQUNqQiJ9