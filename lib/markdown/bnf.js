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
var bnf = "\n\n\n    document       ::=  ( block | verticalSpace )+ ;\n\n\n    block          ::=  endedLine* lastLine \n                          \n                     |  endedLine+\n                          \n                     ;\n\n\n    lastLine       ::=  [unassigned]+ ;\n\n\n    endedLine      ::=  [unassigned]+ <END_OF_LINE> ;\n\n\n    verticalSpace  ::=  <END_OF_LINE>+ ;\n\n\n";
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuXG4gICAgZG9jdW1lbnQgICAgICAgOjo9ICAoIGJsb2NrIHwgdmVydGljYWxTcGFjZSApKyA7XG5cblxuICAgIGJsb2NrICAgICAgICAgIDo6PSAgZW5kZWRMaW5lKiBsYXN0TGluZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICB8ICBlbmRlZExpbmUrXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICBsYXN0TGluZSAgICAgICA6Oj0gIFt1bmFzc2lnbmVkXSsgO1xuXG5cbiAgICBlbmRlZExpbmUgICAgICA6Oj0gIFt1bmFzc2lnbmVkXSsgPEVORF9PRl9MSU5FPiA7XG5cblxuICAgIHZlcnRpY2FsU3BhY2UgIDo6PSAgPEVORF9PRl9MSU5FPisgO1xuXG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcbiJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBCQTs7O2VBQUE7OztBQXhCQSxJQUFNQSxNQUFPO0lBd0JiLFdBQWVBIn0=