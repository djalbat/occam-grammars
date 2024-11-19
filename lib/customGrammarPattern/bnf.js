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
var bnf = "\n\n\n    document       ::=  <NO_WHITESPACE> pattern ( verticalSpace | error )* \n    \n                     |  ( verticalSpace | error )+ \n                     \n                     ;\n\n\n    pattern        ::=  [unassigned]+ ;\n\n\n    verticalSpace  ::=  <END_OF_LINE>+ ;\n\n\n    error.         ::=  . ;\n\n\n";
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyUGF0dGVybi9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuXG4gICAgZG9jdW1lbnQgICAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT4gcGF0dGVybiAoIHZlcnRpY2FsU3BhY2UgfCBlcnJvciApKiBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgIHwgICggdmVydGljYWxTcGFjZSB8IGVycm9yICkrIFxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgIHBhdHRlcm4gICAgICAgIDo6PSAgW3VuYXNzaWduZWRdKyA7XG5cblxuICAgIHZlcnRpY2FsU3BhY2UgIDo6PSAgPEVORF9PRl9MSU5FPisgO1xuXG5cbiAgICBlcnJvci4gICAgICAgICA6Oj0gIC4gO1xuXG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcbiJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVCQTs7O2VBQUE7OztBQXJCQSxJQUFNQSxNQUFPO0lBcUJiLFdBQWVBIn0=