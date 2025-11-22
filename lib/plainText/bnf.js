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
var bnf = "\n\n    document       ::=  ( block | verticalSpace )+ ;\n\n    block          ::=  endedLine* lastLine \n                          \n                     |  endedLine+\n                          \n                     ;\n\n    lastLine       ::=  ( [alpha-numeric] | [punctuation] | [unassigned] )+ ;\n\n    endedLine      ::=  ( [alpha-numeric] | [punctuation] | [unassigned] )+ <END_OF_LINE> ;\n\n    verticalSpace  ::=  <END_OF_LINE>+ ;\n\n";
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbGFpblRleHQvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICBkb2N1bWVudCAgICAgICA6Oj0gICggYmxvY2sgfCB2ZXJ0aWNhbFNwYWNlICkrIDtcblxuICAgIGJsb2NrICAgICAgICAgIDo6PSAgZW5kZWRMaW5lKiBsYXN0TGluZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICB8ICBlbmRlZExpbmUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgO1xuXG4gICAgbGFzdExpbmUgICAgICAgOjo9ICAoIFthbHBoYS1udW1lcmljXSB8IFtwdW5jdHVhdGlvbl0gfCBbdW5hc3NpZ25lZF0gKSsgO1xuXG4gICAgZW5kZWRMaW5lICAgICAgOjo9ICAoIFthbHBoYS1udW1lcmljXSB8IFtwdW5jdHVhdGlvbl0gfCBbdW5hc3NpZ25lZF0gKSsgPEVORF9PRl9MSU5FPiA7XG5cbiAgICB2ZXJ0aWNhbFNwYWNlICA6Oj0gIDxFTkRfT0ZfTElORT4rIDtcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0JBOzs7ZUFBQTs7O0FBbEJBLElBQU1BLE1BQU07SUFrQlosV0FBZUEifQ==