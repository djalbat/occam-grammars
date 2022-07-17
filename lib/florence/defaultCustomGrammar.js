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
var statementBNF = 'statement!                           ::=   typeAssertion \n                                                  \n                                       |   equality \n\n                                       ;\n\ntypeAssertion                        ::=   variable ":" type ;\n\nequality                             ::=   ( variable | expression ) "=" ( variable | expression ) ;';
var metastatementBNF = 'metastatement!                       ::=   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   metavariable \n\n                                       |   subproof \n                                        \n                                       ;\n\ncontextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context "|-" judgement ;\n \njudgement                            ::=   reference "::" metastatement ;\n\nsubproof                             ::=   "[" metastatement "]" "..." metastatement ;';
var _default = {
    lexicalPattern: lexicalPattern,
    typeBNF: typeBNF,
    termBNF: termBNF,
    expressionBNF: expressionBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsZXhpY2FsUGF0dGVybiA9IFwiXCI7XHJcblxyXG4gICAgICAgICBleHBvcnQgY29uc3QgdHlwZUJORiA9IGB0eXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXyA7YDtcclxuXHJcbiAgICAgICAgIGV4cG9ydCBjb25zdCB0ZXJtQk5GID0gYHRlcm0hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBfIDtgO1xyXG5cclxuICAgZXhwb3J0IGNvbnN0IGV4cHJlc3Npb25CTkYgPSBgZXhwcmVzc2lvbiEgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIF8gO2A7XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IHN0YXRlbWVudEJORiA9IGBzdGF0ZW1lbnQhICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdHlwZUFzc2VydGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGVxdWFsaXR5IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG5cclxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHZhcmlhYmxlIFwiOlwiIHR5cGUgO1xyXG5cclxuZXF1YWxpdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgICggdmFyaWFibGUgfCBleHByZXNzaW9uICkgXCI9XCIgKCB2YXJpYWJsZSB8IGV4cHJlc3Npb24gKSA7YDtcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhc3RhdGVtZW50Qk5GID0gYG1ldGFzdGF0ZW1lbnQhICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0RGVmaW5pdGlvbiBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHByb29mQXNzZXJ0aW9uXHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG1ldGF2YXJpYWJsZSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBzdWJwcm9vZiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcblxyXG5jb250ZXh0RGVmaW5pdGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICAgY29udGV4dCBcIj1cIiAoIGp1ZGdlbWVudCB8IGNvbnRleHQgKSAoIFwiLFwiICgganVkZ2VtZW50IHwgY29udGV4dCApICkqIDtcclxuXHJcbnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0IFwifC1cIiBqdWRnZW1lbnQgO1xyXG4gXHJcbmp1ZGdlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICByZWZlcmVuY2UgXCI6OlwiIG1ldGFzdGF0ZW1lbnQgO1xyXG5cclxuc3VicHJvb2YgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiW1wiIG1ldGFzdGF0ZW1lbnQgXCJdXCIgXCIuLi5cIiBtZXRhc3RhdGVtZW50IDtgO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGxleGljYWxQYXR0ZXJuLFxyXG4gIHR5cGVCTkYsXHJcbiAgdGVybUJORixcclxuICBleHByZXNzaW9uQk5GLFxyXG4gIHN0YXRlbWVudEJORixcclxuICBtZXRhc3RhdGVtZW50Qk5GXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJsZXhpY2FsUGF0dGVybiIsInR5cGVCTkYiLCJ0ZXJtQk5GIiwiZXhwcmVzc2lvbkJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFFQUEsY0FBYztlQUFkQSxjQUFjOztJQUVMQyxPQUFPO2VBQVBBLE9BQU87O0lBRVBDLE9BQU87ZUFBUEEsT0FBTzs7SUFFYkMsYUFBYTtlQUFiQSxhQUFhOztJQUVaQyxZQUFZO2VBQVpBLFlBQVk7O0lBVWhCQyxnQkFBZ0I7ZUFBaEJBLGdCQUFnQjs7SUFrQjdCLE9BT0U7ZUFQRixRQU9FOzs7QUEzQ0ssSUFBTUwsY0FBYyxHQUFHLEVBQUUsQUFBQztBQUVqQixJQUFNQyxPQUFPLEdBQUksZ0RBQThDLEFBQUMsQUFBQztBQUVqRSxJQUFNQyxPQUFPLEdBQUksZ0RBQThDLEFBQUMsQUFBQztBQUV2RSxJQUFNQyxhQUFhLEdBQUksZ0RBQThDLEFBQUMsQUFBQztBQUV0RSxJQUFNQyxZQUFZLEdBQUksMlhBUW1FLEFBQUMsQUFBQztBQUUvRixJQUFNQyxnQkFBZ0IsR0FBSSwwckJBZ0JxRCxBQUFDLEFBQUM7SUFFeEYsUUFPRSxHQVBhO0lBQ2JMLGNBQWMsRUFBZEEsY0FBYztJQUNkQyxPQUFPLEVBQVBBLE9BQU87SUFDUEMsT0FBTyxFQUFQQSxPQUFPO0lBQ1BDLGFBQWEsRUFBYkEsYUFBYTtJQUNiQyxZQUFZLEVBQVpBLFlBQVk7SUFDWkMsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7Q0FDakIifQ==