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
var statementBNF = 'statement!                           ::=   "(" metaargument ")" \n                                                  \n                                       |   typeAssertion \n                                                  \n                                       ;\n\ntypeAssertion                        ::=   term ":" type ;';
var metastatementBNF = 'metastatement!                       ::=   "(" metastatement ")" \n           \n                                       |   ruleSubproofAssertion         \n                                        \n                                       |   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   metavariable \n\n                                       ;\n\nruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;\n\ncontextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context "|-" judgement ;\n \njudgement                            ::=   reference "::" metastatement ;';
var _default = {
    termBNF: termBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF,
    typePattern: typePattern,
    symbolPattern: symbolPattern,
    operatorPattern: operatorPattern
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlUGF0dGVybiA9IFwiXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3ltYm9sUGF0dGVybiA9IFwiXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0ZXJtQk5GID0gYHRlcm0hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB2YXJpYWJsZSA7YDtcclxuXHJcbiAgICBleHBvcnQgY29uc3Qgc3RhdGVtZW50Qk5GID0gYHN0YXRlbWVudCEgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIihcIiBtZXRhYXJndW1lbnQgXCIpXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICB0eXBlQXNzZXJ0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcblxyXG50eXBlQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdGVybSBcIjpcIiB0eXBlIDtgO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGFzdGF0ZW1lbnRCTkYgPSBgbWV0YXN0YXRlbWVudCEgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiKFwiIG1ldGFzdGF0ZW1lbnQgXCIpXCIgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBydWxlU3VicHJvb2ZBc3NlcnRpb24gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgY29udGV4dERlZmluaXRpb24gXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBwcm9vZkFzc2VydGlvblxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBtZXRhdmFyaWFibGUgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcblxyXG5ydWxlU3VicHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgOjo9ICAgXCJbXCIgbWV0YXN0YXRlbWVudCAoIFwiLFwiIG1ldGFzdGF0ZW1lbnQgKSogXCJdXCIgXCIuLi5cIiBtZXRhc3RhdGVtZW50IDtcclxuXHJcbmNvbnRleHREZWZpbml0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0IFwiPVwiICgganVkZ2VtZW50IHwgY29udGV4dCApICggXCIsXCIgKCBqdWRnZW1lbnQgfCBjb250ZXh0ICkgKSogO1xyXG5cclxucHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnRleHQgXCJ8LVwiIGp1ZGdlbWVudCA7XHJcbiBcclxuanVkZ2VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHJlZmVyZW5jZSBcIjo6XCIgbWV0YXN0YXRlbWVudCA7YDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB0ZXJtQk5GLFxyXG4gIHN0YXRlbWVudEJORixcclxuICBtZXRhc3RhdGVtZW50Qk5GLFxyXG4gIHR5cGVQYXR0ZXJuLFxyXG4gIHN5bWJvbFBhdHRlcm4sXHJcbiAgb3BlcmF0b3JQYXR0ZXJuXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ0eXBlUGF0dGVybiIsInN5bWJvbFBhdHRlcm4iLCJvcGVyYXRvclBhdHRlcm4iLCJ0ZXJtQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWFBLFdBQVc7ZUFBWEE7O0lBRUFDLGFBQWE7ZUFBYkE7O0lBRUFDLGVBQWU7ZUFBZkE7O0lBRUFDLE9BQU87ZUFBUEE7O0lBRUlDLFlBQVk7ZUFBWkE7O0lBUUpDLGdCQUFnQjtlQUFoQkE7O0lBb0JiLE9BT0U7ZUFQRjs7O0FBcENPLElBQU1MLGNBQWM7QUFFcEIsSUFBTUMsZ0JBQWdCO0FBRXRCLElBQU1DLGtCQUFrQjtBQUV4QixJQUFNQyxVQUFXO0FBRWIsSUFBTUMsZUFBZ0I7QUFRMUIsSUFBTUMsbUJBQW9CO0lBb0JqQyxXQUFlO0lBQ2JGLFNBQUFBO0lBQ0FDLGNBQUFBO0lBQ0FDLGtCQUFBQTtJQUNBTCxhQUFBQTtJQUNBQyxlQUFBQTtJQUNBQyxpQkFBQUE7QUFDRiJ9