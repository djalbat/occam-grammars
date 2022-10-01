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
var statementBNF = 'statement!                           ::=   "("" statement )" \n                                                  \n                                       |   typeAssertion \n                                                  \n                                       |   equality \n\n                                       ;\n\ntypeAssertion                        ::=   term ":" type ;\n\nequality                             ::=   term "=" term ;';
var metastatementBNF = 'metastatement!                       ::=   "("" metastatement )" \n           \n                                       |   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   metavariable \n\n                                       |   subproof \n                                        \n                                       ;\n\ncontextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context "|-" judgement ;\n \njudgement                            ::=   reference "::" metastatement ;\n\nsubproof                             ::=   "[" metastatement "]" "..." metastatement ;';
var _default = {
    termBNF: termBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF,
    typePattern: typePattern,
    symbolPattern: symbolPattern,
    operatorPattern: operatorPattern
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlUGF0dGVybiA9IFwiXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3ltYm9sUGF0dGVybiA9IFwiXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0ZXJtQk5GID0gYHRlcm0hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB2YXJpYWJsZSA7YDtcclxuXHJcbiAgICBleHBvcnQgY29uc3Qgc3RhdGVtZW50Qk5GID0gYHN0YXRlbWVudCEgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIihcIlwiIHN0YXRlbWVudCApXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICB0eXBlQXNzZXJ0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgZXF1YWxpdHkgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcblxyXG50eXBlQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdGVybSBcIjpcIiB0eXBlIDtcclxuXHJcbmVxdWFsaXR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB0ZXJtIFwiPVwiIHRlcm0gO2A7XHJcblxyXG5leHBvcnQgY29uc3QgbWV0YXN0YXRlbWVudEJORiA9IGBtZXRhc3RhdGVtZW50ISAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIoXCJcIiBtZXRhc3RhdGVtZW50IClcIiBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGNvbnRleHREZWZpbml0aW9uIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgcHJvb2ZBc3NlcnRpb25cclxuICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbWV0YXZhcmlhYmxlIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHN1YnByb29mIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuXHJcbmNvbnRleHREZWZpbml0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0IFwiPVwiICgganVkZ2VtZW50IHwgY29udGV4dCApICggXCIsXCIgKCBqdWRnZW1lbnQgfCBjb250ZXh0ICkgKSogO1xyXG5cclxucHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnRleHQgXCJ8LVwiIGp1ZGdlbWVudCA7XHJcbiBcclxuanVkZ2VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHJlZmVyZW5jZSBcIjo6XCIgbWV0YXN0YXRlbWVudCA7XHJcblxyXG5zdWJwcm9vZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJbXCIgbWV0YXN0YXRlbWVudCBcIl1cIiBcIi4uLlwiIG1ldGFzdGF0ZW1lbnQgO2A7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgdGVybUJORixcclxuICBzdGF0ZW1lbnRCTkYsXHJcbiAgbWV0YXN0YXRlbWVudEJORixcclxuICB0eXBlUGF0dGVybixcclxuICBzeW1ib2xQYXR0ZXJuLFxyXG4gIG9wZXJhdG9yUGF0dGVyblxyXG59O1xyXG4iXSwibmFtZXMiOlsidHlwZVBhdHRlcm4iLCJzeW1ib2xQYXR0ZXJuIiwib3BlcmF0b3JQYXR0ZXJuIiwidGVybUJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVhQSxXQUFXO2VBQVhBOztJQUVBQyxhQUFhO2VBQWJBOztJQUVBQyxlQUFlO2VBQWZBOztJQUVBQyxPQUFPO2VBQVBBOztJQUVJQyxZQUFZO2VBQVpBOztJQVlKQyxnQkFBZ0I7ZUFBaEJBOztJQW9CYixPQU9FO2VBUEY7OztBQXhDTyxJQUFNTCxjQUFjO0FBRXBCLElBQU1DLGdCQUFnQjtBQUV0QixJQUFNQyxrQkFBa0I7QUFFeEIsSUFBTUMsVUFBVztBQUViLElBQU1DLGVBQWdCO0FBWTFCLElBQU1DLG1CQUFvQjtJQW9CakMsV0FBZTtJQUNiRixTQUFBQTtJQUNBQyxjQUFBQTtJQUNBQyxrQkFBQUE7SUFDQUwsYUFBQUE7SUFDQUMsZUFBQUE7SUFDQUMsaUJBQUFBO0FBQ0YifQ==