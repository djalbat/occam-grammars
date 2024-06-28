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
var bnf = '\n\n\n    document     ::=  json error* \n    \n                   |  error+ \n                                 \n                   ;\n  \n  \n    json         ::=  array \n    \n                   |  object \n    \n                   |  [string-literal] \n    \n                   |  [boolean] \n    \n                   |  [number] \n    \n                   |  [null] \n    \n                   ;\n  \n  \n    object       ::=  "{" ( property ( "," property )* )? "}" ;\n  \n    \n    array        ::=  "[" ( element ( "," element )* )? "]" ;\n  \n  \n    property     ::=  [string-literal] ":" json ;\n    \n\n    element      ::=  json ;\n    \n\n    error.       ::=  . ;\n    \n\n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qc29uL2JuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYm5mID0gYFxuXG5cbiAgICBkb2N1bWVudCAgICAgOjo9ICBqc29uIGVycm9yKiBcbiAgICBcbiAgICAgICAgICAgICAgICAgICB8ICBlcnJvcisgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA7XG4gIFxuICBcbiAgICBqc29uICAgICAgICAgOjo9ICBhcnJheSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICB8ICBvYmplY3QgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgfCAgW3N0cmluZy1saXRlcmFsXSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICB8ICBbYm9vbGVhbl0gXG4gICAgXG4gICAgICAgICAgICAgICAgICAgfCAgW251bWJlcl0gXG4gICAgXG4gICAgICAgICAgICAgICAgICAgfCAgW251bGxdIFxuICAgIFxuICAgICAgICAgICAgICAgICAgIDtcbiAgXG4gIFxuICAgIG9iamVjdCAgICAgICA6Oj0gIFwie1wiICggcHJvcGVydHkgKCBcIixcIiBwcm9wZXJ0eSApKiApPyBcIn1cIiA7XG4gIFxuICAgIFxuICAgIGFycmF5ICAgICAgICA6Oj0gIFwiW1wiICggZWxlbWVudCAoIFwiLFwiIGVsZW1lbnQgKSogKT8gXCJdXCIgO1xuICBcbiAgXG4gICAgcHJvcGVydHkgICAgIDo6PSAgW3N0cmluZy1saXRlcmFsXSBcIjpcIiBqc29uIDtcbiAgICBcblxuICAgIGVsZW1lbnQgICAgICA6Oj0gIGpzb24gO1xuICAgIFxuXG4gICAgZXJyb3IuICAgICAgIDo6PSAgLiA7XG4gICAgXG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcbiJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRDQTs7O2VBQUE7OztBQTFDQSxJQUFNQSxNQUFPO0lBMENiLFdBQWVBIn0=