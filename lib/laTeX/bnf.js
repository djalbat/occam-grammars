"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var bnf = "\n\n\n    document                        ::=   ( delimitedLaTeX | everythingElse )+ ;\n    \n    \n    \n    delimitedLaTeX                  ::=   dollarDelimiter inlineLaTeX dollarDelimiter \n    \n                                      |   doubleDollarDelimiter displayLaTeX doubleDollarDelimiter \n    \n                                      |   openingBracketDelimiter inlineLaTeX closingBracketDelimiter \n    \n                                      |   openingSquareBracketDelimiter displayLaTeX closingSquareBracketDelimiter \n                                      \n                                      ;\n    \n\n    \n    inlineLaTeX                     ::=   [unassigned]* ;\n\n    displayLaTeX                    ::=   [unassigned]* ;\n\n\n\n    dollarDelimiter                 ::=   \"$\" ;\n \n    doubleDollarDelimiter           ::=   \"$$\" ;\n    \n\n    \n    openingBracketDelimiter         ::=   \"\\(\" ;\n\n    closingBracketDelimiter         ::=   \"\\)\" ;\n\n    openingSquareBracketDelimiter   ::=   \"\\[\" ;\n    \n    closingSquareBracketDelimiter   ::=   \"\\]\" ;\n    \n    \n    \n    everythingElse                  ::=   . ;\n\n\n";
var _default = bnf;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJuZi5qcyJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxHQUFHLG1wQ0FBVDtlQThDZUEsRyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBibmYgPSBgXG5cblxuICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgKCBkZWxpbWl0ZWRMYVRlWCB8IGV2ZXJ5dGhpbmdFbHNlICkrIDtcbiAgICBcbiAgICBcbiAgICBcbiAgICBkZWxpbWl0ZWRMYVRlWCAgICAgICAgICAgICAgICAgIDo6PSAgIGRvbGxhckRlbGltaXRlciBpbmxpbmVMYVRlWCBkb2xsYXJEZWxpbWl0ZXIgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBkb3VibGVEb2xsYXJEZWxpbWl0ZXIgZGlzcGxheUxhVGVYIGRvdWJsZURvbGxhckRlbGltaXRlciBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG9wZW5pbmdCcmFja2V0RGVsaW1pdGVyIGlubGluZUxhVGVYIGNsb3NpbmdCcmFja2V0RGVsaW1pdGVyIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgb3BlbmluZ1NxdWFyZUJyYWNrZXREZWxpbWl0ZXIgZGlzcGxheUxhVGVYIGNsb3NpbmdTcXVhcmVCcmFja2V0RGVsaW1pdGVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgIFxuXG4gICAgXG4gICAgaW5saW5lTGFUZVggICAgICAgICAgICAgICAgICAgICA6Oj0gICBbdW5hc3NpZ25lZF0qIDtcblxuICAgIGRpc3BsYXlMYVRlWCAgICAgICAgICAgICAgICAgICAgOjo9ICAgW3VuYXNzaWduZWRdKiA7XG5cblxuXG4gICAgZG9sbGFyRGVsaW1pdGVyICAgICAgICAgICAgICAgICA6Oj0gICBcIiRcIiA7XG4gXG4gICAgZG91YmxlRG9sbGFyRGVsaW1pdGVyICAgICAgICAgICA6Oj0gICBcIiQkXCIgO1xuICAgIFxuXG4gICAgXG4gICAgb3BlbmluZ0JyYWNrZXREZWxpbWl0ZXIgICAgICAgICA6Oj0gICBcIlxcXFwoXCIgO1xuXG4gICAgY2xvc2luZ0JyYWNrZXREZWxpbWl0ZXIgICAgICAgICA6Oj0gICBcIlxcXFwpXCIgO1xuXG4gICAgb3BlbmluZ1NxdWFyZUJyYWNrZXREZWxpbWl0ZXIgICA6Oj0gICBcIlxcXFxbXCIgO1xuICAgIFxuICAgIGNsb3NpbmdTcXVhcmVCcmFja2V0RGVsaW1pdGVyICAgOjo9ICAgXCJcXFxcXVwiIDtcbiAgICBcbiAgICBcbiAgICBcbiAgICBldmVyeXRoaW5nRWxzZSAgICAgICAgICAgICAgICAgIDo6PSAgIC4gO1xuXG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcbiJdfQ==