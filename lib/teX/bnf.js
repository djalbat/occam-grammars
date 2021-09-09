"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var bnf = "\n\n\n    document                        ::=   ( delimitedTeX | everythingElse )+ ;\n    \n    \n    \n    delimitedTeX                    ::=   dollarDelimiter inlineTeX dollarDelimiter \n    \n                                      |   doubleDollarDelimiter displayTeX doubleDollarDelimiter \n    \n                                      |   openingBracketDelimiter inlineTeX closingBracketDelimiter \n    \n                                      |   openingSquareBracketDelimiter displayTeX closingSquareBracketDelimiter \n                                      \n                                      ;\n    \n\n    \n    inlineTeX                       ::=   [unassigned]* ;\n\n    displayTeX                      ::=   [unassigned]* ;\n\n\n\n    dollarDelimiter                 ::=   \"$\" ;\n \n    doubleDollarDelimiter           ::=   \"$$\" ;\n    \n\n    \n    openingBracketDelimiter         ::=   \"\\(\" ;\n\n    closingBracketDelimiter         ::=   \"\\)\" ;\n\n    openingSquareBracketDelimiter   ::=   \"\\[\" ;\n    \n    closingSquareBracketDelimiter   ::=   \"\\]\" ;\n    \n    \n    \n    everythingElse                  ::=   . ;\n\n\n";
var _default = bnf;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZVgvYm5mLmpzIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFWixHQUFLLENBQUMsR0FBRyxJQUFJLG9vQ0E0Q2I7ZUFFZSxHQUFHIn0=