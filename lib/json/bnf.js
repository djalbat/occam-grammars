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
const bnf = `

    document     ::=  json error* 
    
                   |  error+ 
                                 
                   ;
  
  
  
    json         ::=  array 
    
                   |  object 
    
                   |  [string-literal] 
    
                   |  [boolean] 
    
                   |  [number] 
    
                   |  [null] 
    
                   ;
  
  
  
    array..      ::=  "[" ( element ( "," element )* )? nonsense? "]" ;
  
  
     
    object..     ::=  "{" ( property ( "," property )* )? nonsense? "}" ;
  
  
    
    property     ::=  [string-literal] ":" json ;
  
    

    element      ::=  json ;
  
    

    nonsense.    ::=  ( ":" | "," | [string-literal] | [number] | [boolean] | [null] | [unassigned] )+ ;
    


    error.       ::=  . ;
    
`;
const _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qc29uL2JuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYm5mID0gYFxuXG4gICAgZG9jdW1lbnQgICAgIDo6PSAganNvbiBlcnJvciogXG4gICAgXG4gICAgICAgICAgICAgICAgICAgfCAgZXJyb3IrIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgO1xuICBcbiAgXG4gIFxuICAgIGpzb24gICAgICAgICA6Oj0gIGFycmF5IFxuICAgIFxuICAgICAgICAgICAgICAgICAgIHwgIG9iamVjdCBcbiAgICBcbiAgICAgICAgICAgICAgICAgICB8ICBbc3RyaW5nLWxpdGVyYWxdIFxuICAgIFxuICAgICAgICAgICAgICAgICAgIHwgIFtib29sZWFuXSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICB8ICBbbnVtYmVyXSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICB8ICBbbnVsbF0gXG4gICAgXG4gICAgICAgICAgICAgICAgICAgO1xuICBcbiAgXG4gIFxuICAgIGFycmF5Li4gICAgICA6Oj0gIFwiW1wiICggZWxlbWVudCAoIFwiLFwiIGVsZW1lbnQgKSogKT8gbm9uc2Vuc2U/IFwiXVwiIDtcbiAgXG4gIFxuICAgICBcbiAgICBvYmplY3QuLiAgICAgOjo9ICBcIntcIiAoIHByb3BlcnR5ICggXCIsXCIgcHJvcGVydHkgKSogKT8gbm9uc2Vuc2U/IFwifVwiIDtcbiAgXG4gIFxuICAgIFxuICAgIHByb3BlcnR5ICAgICA6Oj0gIFtzdHJpbmctbGl0ZXJhbF0gXCI6XCIganNvbiA7XG4gIFxuICAgIFxuXG4gICAgZWxlbWVudCAgICAgIDo6PSAganNvbiA7XG4gIFxuICAgIFxuXG4gICAgbm9uc2Vuc2UuICAgIDo6PSAgKCBcIjpcIiB8IFwiLFwiIHwgW3N0cmluZy1saXRlcmFsXSB8IFtudW1iZXJdIHwgW2Jvb2xlYW5dIHwgW251bGxdIHwgW3VuYXNzaWduZWRdICkrIDtcbiAgICBcblxuXG4gICAgZXJyb3IuICAgICAgIDo6PSAgLiA7XG4gICAgXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG4iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvREE7OztlQUFBOzs7QUFsREEsTUFBTUEsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRGIsQ0FBQztNQUVELFdBQWVBIn0=