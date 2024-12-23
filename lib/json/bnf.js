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
var bnf = '\n\n\n    document     ::=  json error* \n    \n                   |  error+ \n                                 \n                   ;\n  \n  \n  \n    json         ::=  array \n    \n                   |  object \n    \n                   |  [string-literal] \n    \n                   |  [boolean] \n    \n                   |  [number] \n    \n                   |  [null] \n    \n                   ;\n  \n  \n  \n    array..      ::=  "[" ( element ( "," element )* )? nonsense? "]" ;\n  \n  \n     \n    object..     ::=  "{" ( property ( "," property )* )? nonsense? "}" ;\n  \n  \n    \n    property     ::=  [string-literal] ":" json ;\n  \n    \n\n    element      ::=  json ;\n  \n    \n\n    nonsense.    ::=  ( ":" | "," | [string-literal] | [number] | [boolean] | [null] | [unassigned] )+ ;\n    \n\n\n    error.       ::=  . ;\n    \n\n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qc29uL2JuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYm5mID0gYFxuXG5cbiAgICBkb2N1bWVudCAgICAgOjo9ICBqc29uIGVycm9yKiBcbiAgICBcbiAgICAgICAgICAgICAgICAgICB8ICBlcnJvcisgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA7XG4gIFxuICBcbiAgXG4gICAganNvbiAgICAgICAgIDo6PSAgYXJyYXkgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgfCAgb2JqZWN0IFxuICAgIFxuICAgICAgICAgICAgICAgICAgIHwgIFtzdHJpbmctbGl0ZXJhbF0gXG4gICAgXG4gICAgICAgICAgICAgICAgICAgfCAgW2Jvb2xlYW5dIFxuICAgIFxuICAgICAgICAgICAgICAgICAgIHwgIFtudW1iZXJdIFxuICAgIFxuICAgICAgICAgICAgICAgICAgIHwgIFtudWxsXSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICA7XG4gIFxuICBcbiAgXG4gICAgYXJyYXkuLiAgICAgIDo6PSAgXCJbXCIgKCBlbGVtZW50ICggXCIsXCIgZWxlbWVudCApKiApPyBub25zZW5zZT8gXCJdXCIgO1xuICBcbiAgXG4gICAgIFxuICAgIG9iamVjdC4uICAgICA6Oj0gIFwie1wiICggcHJvcGVydHkgKCBcIixcIiBwcm9wZXJ0eSApKiApPyBub25zZW5zZT8gXCJ9XCIgO1xuICBcbiAgXG4gICAgXG4gICAgcHJvcGVydHkgICAgIDo6PSAgW3N0cmluZy1saXRlcmFsXSBcIjpcIiBqc29uIDtcbiAgXG4gICAgXG5cbiAgICBlbGVtZW50ICAgICAgOjo9ICBqc29uIDtcbiAgXG4gICAgXG5cbiAgICBub25zZW5zZS4gICAgOjo9ICAoIFwiOlwiIHwgXCIsXCIgfCBbc3RyaW5nLWxpdGVyYWxdIHwgW251bWJlcl0gfCBbYm9vbGVhbl0gfCBbbnVsbF0gfCBbdW5hc3NpZ25lZF0gKSsgO1xuICAgIFxuXG5cbiAgICBlcnJvci4gICAgICAgOjo9ICAuIDtcbiAgICBcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0RBOzs7ZUFBQTs7O0FBcERBLElBQU1BLE1BQU87SUFvRGIsV0FBZUEifQ==