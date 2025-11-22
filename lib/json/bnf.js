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
var bnf = '\n\n    document     ::=  json error* \n    \n                   |  error+ \n                                 \n                   ;\n  \n  \n  \n    json         ::=  array \n    \n                   |  object \n    \n                   |  [string-literal] \n    \n                   |  [boolean] \n    \n                   |  [number] \n    \n                   |  [null] \n    \n                   ;\n  \n  \n  \n    array..      ::=  "[" ( element ( "," element )* )? nonsense? "]" ;\n  \n  \n     \n    object..     ::=  "{" ( property ( "," property )* )? nonsense? "}" ;\n  \n  \n    \n    property     ::=  [string-literal] ":" json ;\n  \n    \n\n    element      ::=  json ;\n  \n    \n\n    nonsense.    ::=  ( ":" | "," | [string-literal] | [number] | [boolean] | [null] | [unassigned] )+ ;\n    \n\n\n    error.       ::=  . ;\n    \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qc29uL2JuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYm5mID0gYFxuXG4gICAgZG9jdW1lbnQgICAgIDo6PSAganNvbiBlcnJvciogXG4gICAgXG4gICAgICAgICAgICAgICAgICAgfCAgZXJyb3IrIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgO1xuICBcbiAgXG4gIFxuICAgIGpzb24gICAgICAgICA6Oj0gIGFycmF5IFxuICAgIFxuICAgICAgICAgICAgICAgICAgIHwgIG9iamVjdCBcbiAgICBcbiAgICAgICAgICAgICAgICAgICB8ICBbc3RyaW5nLWxpdGVyYWxdIFxuICAgIFxuICAgICAgICAgICAgICAgICAgIHwgIFtib29sZWFuXSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICB8ICBbbnVtYmVyXSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICB8ICBbbnVsbF0gXG4gICAgXG4gICAgICAgICAgICAgICAgICAgO1xuICBcbiAgXG4gIFxuICAgIGFycmF5Li4gICAgICA6Oj0gIFwiW1wiICggZWxlbWVudCAoIFwiLFwiIGVsZW1lbnQgKSogKT8gbm9uc2Vuc2U/IFwiXVwiIDtcbiAgXG4gIFxuICAgICBcbiAgICBvYmplY3QuLiAgICAgOjo9ICBcIntcIiAoIHByb3BlcnR5ICggXCIsXCIgcHJvcGVydHkgKSogKT8gbm9uc2Vuc2U/IFwifVwiIDtcbiAgXG4gIFxuICAgIFxuICAgIHByb3BlcnR5ICAgICA6Oj0gIFtzdHJpbmctbGl0ZXJhbF0gXCI6XCIganNvbiA7XG4gIFxuICAgIFxuXG4gICAgZWxlbWVudCAgICAgIDo6PSAganNvbiA7XG4gIFxuICAgIFxuXG4gICAgbm9uc2Vuc2UuICAgIDo6PSAgKCBcIjpcIiB8IFwiLFwiIHwgW3N0cmluZy1saXRlcmFsXSB8IFtudW1iZXJdIHwgW2Jvb2xlYW5dIHwgW251bGxdIHwgW3VuYXNzaWduZWRdICkrIDtcbiAgICBcblxuXG4gICAgZXJyb3IuICAgICAgIDo6PSAgLiA7XG4gICAgXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG4iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvREE7OztlQUFBOzs7QUFsREEsSUFBTUEsTUFBTTtJQWtEWixXQUFlQSJ9