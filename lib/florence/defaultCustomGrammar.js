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
var statementBNF = 'statement!                           ::=   "(" statement )" \n                                                  \n                                       |   typeAssertion \n                                                  \n                                       |   equality \n\n                                       ;\n\ntypeAssertion                        ::=   term ":" type ;\n\nequality                             ::=   term "=" term ;';
var metastatementBNF = 'metastatement!                       ::=   "(" metastatement )" \n           \n                                       |   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   metavariable \n\n                                       |   subproof \n                                        \n                                       ;\n\ncontextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context "|-" judgement ;\n \njudgement                            ::=   reference "::" metastatement ;\n\nsubproof                             ::=   "[" metastatement "]" "..." metastatement ;';
var _default = {
    termBNF: termBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF,
    typePattern: typePattern,
    symbolPattern: symbolPattern,
    operatorPattern: operatorPattern
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlUGF0dGVybiA9IFwiXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3ltYm9sUGF0dGVybiA9IFwiXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0ZXJtQk5GID0gYHRlcm0hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB2YXJpYWJsZSA7YDtcclxuXHJcbiAgICBleHBvcnQgY29uc3Qgc3RhdGVtZW50Qk5GID0gYHN0YXRlbWVudCEgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIihcIiBzdGF0ZW1lbnQgKVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgdHlwZUFzc2VydGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGVxdWFsaXR5IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG5cclxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHRlcm0gXCI6XCIgdHlwZSA7XHJcblxyXG5lcXVhbGl0eSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdGVybSBcIj1cIiB0ZXJtIDtgO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGFzdGF0ZW1lbnRCTkYgPSBgbWV0YXN0YXRlbWVudCEgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiKFwiIG1ldGFzdGF0ZW1lbnQgKVwiIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgY29udGV4dERlZmluaXRpb24gXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBwcm9vZkFzc2VydGlvblxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBtZXRhdmFyaWFibGUgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgc3VicHJvb2YgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG5cclxuY29udGV4dERlZmluaXRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnRleHQgXCI9XCIgKCBqdWRnZW1lbnQgfCBjb250ZXh0ICkgKCBcIixcIiAoIGp1ZGdlbWVudCB8IGNvbnRleHQgKSApKiA7XHJcblxyXG5wcm9vZkFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgY29udGV4dCBcInwtXCIganVkZ2VtZW50IDtcclxuIFxyXG5qdWRnZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgcmVmZXJlbmNlIFwiOjpcIiBtZXRhc3RhdGVtZW50IDtcclxuXHJcbnN1YnByb29mICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIltcIiBtZXRhc3RhdGVtZW50IFwiXVwiIFwiLi4uXCIgbWV0YXN0YXRlbWVudCA7YDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB0ZXJtQk5GLFxyXG4gIHN0YXRlbWVudEJORixcclxuICBtZXRhc3RhdGVtZW50Qk5GLFxyXG4gIHR5cGVQYXR0ZXJuLFxyXG4gIHN5bWJvbFBhdHRlcm4sXHJcbiAgb3BlcmF0b3JQYXR0ZXJuXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ0eXBlUGF0dGVybiIsInN5bWJvbFBhdHRlcm4iLCJvcGVyYXRvclBhdHRlcm4iLCJ0ZXJtQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWFBLFdBQVc7ZUFBWEE7O0lBRUFDLGFBQWE7ZUFBYkE7O0lBRUFDLGVBQWU7ZUFBZkE7O0lBRUFDLE9BQU87ZUFBUEE7O0lBRUlDLFlBQVk7ZUFBWkE7O0lBWUpDLGdCQUFnQjtlQUFoQkE7O0lBb0JiLE9BT0U7ZUFQRjs7O0FBeENPLElBQU1MLGNBQWM7QUFFcEIsSUFBTUMsZ0JBQWdCO0FBRXRCLElBQU1DLGtCQUFrQjtBQUV4QixJQUFNQyxVQUFXO0FBRWIsSUFBTUMsZUFBZ0I7QUFZMUIsSUFBTUMsbUJBQW9CO0lBb0JqQyxXQUFlO0lBQ2JGLFNBQUFBO0lBQ0FDLGNBQUFBO0lBQ0FDLGtCQUFBQTtJQUNBTCxhQUFBQTtJQUNBQyxlQUFBQTtJQUNBQyxpQkFBQUE7QUFDRiJ9