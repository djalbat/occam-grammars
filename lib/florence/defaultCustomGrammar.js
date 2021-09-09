"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.statementBNF = exports.lexicalPattern = exports.termBNF = exports.expressionBNF = exports.metastatementBNF = void 0;
var lexicalPattern = "";
exports.lexicalPattern = lexicalPattern;
var termBNF = "term                                 ::=   name \n                                 \n                                       ;\n                                       \n                                       ";
exports.termBNF = termBNF;
var expressionBNF = "expression                           ::=   \"(\" expression \")\"\n\n                                       |   term \n                                       \n                                       ;\n                                       \n                                       ";
exports.expressionBNF = expressionBNF;
var statementBNF = "statement                            ::=   \"(\" statement \")\"\n\n                                       |   expression \n                                                  \n                                       ;\n\n                                       ";
exports.statementBNF = statementBNF;
var metastatementBNF = "metastatement                        ::=   \"(\" metastatement \")\"\n\n                                       |   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   typeAssertion \n                                                  \n                                       |   metavariable \n\n                                       |   subproof \n                                        \n                                       ;\n\ncontextDefinition                    ::=   context \"=\" ( judgement | context ) ( \",\" ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context \"|-\" judgement ;\n \ntypeAssertion                        ::=   ( type | expression ) \":\" typeName \n\njudgement                            ::=   reference \"::\" metastatement ;\n\nsubproof                             ::=   \"[\" metastatement \"]\" \"...\" metastatement ;\n\n                                       ";
exports.metastatementBNF = metastatementBNF;
var _default = {
    lexicalPattern: lexicalPattern,
    termBNF: termBNF,
    expressionBNF: expressionBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF
};
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hci5qcyJdLCJuYW1lcyI6WyJsZXhpY2FsUGF0dGVybiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFTCxHQUFLLENBQUMsY0FBYztRQUFkLGNBQWMsR0FBZCxjQUFjO0FBRXBCLEdBQUssQ0FBQyxPQUFPLElBQUksK01BSWU7UUFKMUIsT0FBTyxHQUFQLE9BQU87QUFNYixHQUFLLENBQUMsYUFBYSxJQUFJLDBSQU1TO1FBTjFCLGFBQWEsR0FBYixhQUFhO0FBUW5CLEdBQUssQ0FBQyxZQUFZLElBQUksbVFBTVU7UUFOMUIsWUFBWSxHQUFaLFlBQVk7QUFRbEIsR0FBSyxDQUFDLGdCQUFnQixJQUFJLDQvQkF3Qk07UUF4QjFCLGdCQUFnQixHQUFoQixnQkFBZ0I7ZUEwQmQsQ0FBQztJQUNkLGNBQWMsRUFBZCxjQUFjO0lBQ2QsT0FBTyxFQUFQLE9BQU87SUFDUCxhQUFhLEVBQWIsYUFBYTtJQUNiLFlBQVksRUFBWixZQUFZO0lBQ1osZ0JBQWdCLEVBQWhCLGdCQUFnQjtBQUNsQixDQUFDIn0=