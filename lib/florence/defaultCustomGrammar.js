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
var statementBNF = 'statement!                           ::=   typeAssertion \n                                                  \n                                       |   equality \n\n                                       ;\n\ntypeAssertion                        ::=   term ":" type ;\n\nequality                             ::=   term "=" term ;';
var metastatementBNF = 'metastatement!                       ::=   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   metavariable \n\n                                       |   subproof \n                                        \n                                       ;\n\ncontextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context "|-" judgement ;\n \njudgement                            ::=   reference "::" metastatement ;\n\nsubproof                             ::=   "[" metastatement "]" "..." metastatement ;';
var _default = {
    typePattern: typePattern,
    operatorPattern: operatorPattern,
    termBNF: termBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlUGF0dGVybiA9IFwiXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0ZXJtQk5GID0gYHRlcm0hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBfIDtgO1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCBzdGF0ZW1lbnRCTkYgPSBgc3RhdGVtZW50ISAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHR5cGVBc3NlcnRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBlcXVhbGl0eSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuXHJcbnR5cGVBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB0ZXJtIFwiOlwiIHR5cGUgO1xyXG5cclxuZXF1YWxpdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHRlcm0gXCI9XCIgdGVybSA7YDtcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhc3RhdGVtZW50Qk5GID0gYG1ldGFzdGF0ZW1lbnQhICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0RGVmaW5pdGlvbiBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHByb29mQXNzZXJ0aW9uXHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG1ldGF2YXJpYWJsZSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBzdWJwcm9vZiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcblxyXG5jb250ZXh0RGVmaW5pdGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICAgY29udGV4dCBcIj1cIiAoIGp1ZGdlbWVudCB8IGNvbnRleHQgKSAoIFwiLFwiICgganVkZ2VtZW50IHwgY29udGV4dCApICkqIDtcclxuXHJcbnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0IFwifC1cIiBqdWRnZW1lbnQgO1xyXG4gXHJcbmp1ZGdlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICByZWZlcmVuY2UgXCI6OlwiIG1ldGFzdGF0ZW1lbnQgO1xyXG5cclxuc3VicHJvb2YgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiW1wiIG1ldGFzdGF0ZW1lbnQgXCJdXCIgXCIuLi5cIiBtZXRhc3RhdGVtZW50IDtgO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHR5cGVQYXR0ZXJuLFxyXG4gIG9wZXJhdG9yUGF0dGVybixcclxuICB0ZXJtQk5GLFxyXG4gIHN0YXRlbWVudEJORixcclxuICBtZXRhc3RhdGVtZW50Qk5GXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ0eXBlUGF0dGVybiIsIm9wZXJhdG9yUGF0dGVybiIsInRlcm1CTkYiLCJzdGF0ZW1lbnRCTkYiLCJtZXRhc3RhdGVtZW50Qk5GIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBRUFBLFdBQVc7ZUFBWEEsV0FBVzs7SUFFWEMsZUFBZTtlQUFmQSxlQUFlOztJQUVmQyxPQUFPO2VBQVBBLE9BQU87O0lBRUhDLFlBQVk7ZUFBWkEsWUFBWTs7SUFVaEJDLGdCQUFnQjtlQUFoQkEsZ0JBQWdCOztJQWtCN0IsT0FNRTtlQU5GLFFBTUU7OztBQXhDSyxJQUFNSixXQUFXLEdBQUcsRUFBRSxBQUFDO0FBRXZCLElBQU1DLGVBQWUsR0FBRyxFQUFFLEFBQUM7QUFFM0IsSUFBTUMsT0FBTyxHQUFJLGdEQUE4QyxBQUFDLEFBQUM7QUFFN0QsSUFBTUMsWUFBWSxHQUFJLDZVQVF5QixBQUFDLEFBQUM7QUFFckQsSUFBTUMsZ0JBQWdCLEdBQUksMHJCQWdCcUQsQUFBQyxBQUFDO0lBRXhGLFFBTUUsR0FOYTtJQUNiSixXQUFXLEVBQVhBLFdBQVc7SUFDWEMsZUFBZSxFQUFmQSxlQUFlO0lBQ2ZDLE9BQU8sRUFBUEEsT0FBTztJQUNQQyxZQUFZLEVBQVpBLFlBQVk7SUFDWkMsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7Q0FDakIifQ==