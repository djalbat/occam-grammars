"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var bnf = "\n\n\n    document       ::=  ( block | verticalSpace )+ ;\n\n\n    block          ::=  endedLine* lastLine \n                          \n                     |  endedLine+\n                          \n                     ;\n\n\n    lastLine       ::=  ( [alpha-numeric] | [punctuation] | [unassigned] )+ ;\n\n\n    endedLine      ::=  ( [alpha-numeric] | [punctuation] | [unassigned] )+ <END_OF_LINE> ;\n\n\n    verticalSpace  ::=  <END_OF_LINE>+ ;\n\n\n";
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbGFpblRleHQvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBibmYgPSBgXG5cblxuICAgIGRvY3VtZW50ICAgICAgIDo6PSAgKCBibG9jayB8IHZlcnRpY2FsU3BhY2UgKSsgO1xuXG5cbiAgICBibG9jayAgICAgICAgICA6Oj0gIGVuZGVkTGluZSogbGFzdExpbmUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgfCAgZW5kZWRMaW5lK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgbGFzdExpbmUgICAgICAgOjo9ICAoIFthbHBoYS1udW1lcmljXSB8IFtwdW5jdHVhdGlvbl0gfCBbdW5hc3NpZ25lZF0gKSsgO1xuXG5cbiAgICBlbmRlZExpbmUgICAgICA6Oj0gICggW2FscGhhLW51bWVyaWNdIHwgW3B1bmN0dWF0aW9uXSB8IFt1bmFzc2lnbmVkXSApKyA8RU5EX09GX0xJTkU+IDtcblxuXG4gICAgdmVydGljYWxTcGFjZSAgOjo9ICA8RU5EX09GX0xJTkU+KyA7XG5cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMEJBOzs7ZUFBQTs7O0FBeEJBLElBQU1BLE1BQU07SUF3QlosV0FBZUEifQ==