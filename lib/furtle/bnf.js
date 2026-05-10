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

    document                ::=  ( procedureDeclaration | error )+ ;
    
    
    
    procedureDeclaration    ::=  [type] label<NO_WHITESPACE>"(" parameters? ")" returnBlock ;
    
    anonymousProcedure      ::=  [type] "(" parameters? ")" returnBlock ;
    
    returnStatement         ::=  "return" term ";" ; 
    
    
    
    step                    ::=  arrayAssignment
                              §
                              |  objectAssignment
                              
                              |  variableAssignments
     
                              ;  
      
      
    
    arrayAssignment         ::=  "[" parameters "]" "=" variable ";" ;
    
    objectAssignment        ::=  "{" namedParameters "}" "=" variable ";" ;
    
    variableAssignments     ::=  [type] variableAssignment ( "," variableAssignment )* ";" ;
    
    variableAssignment      ::=  variable "=" expression ;
    


    namedParameters         ::=  namedParameter ( "," namedParameter )* ;
    
    parameters              ::=  parameter ( "," parameter )* ;
    
    terms                   ::=  term ( "," term )* ;
    


    namedParameter          ::=  [type] [name] ( "as" [name] )? ;   
    
    parameter               ::=  [type] [name]
    
                              |  "_" 
    
                              ;


    
    procedureCall           ::=  reference<NO_WHITESPACE>"(" terms? ")" ;
    
    returnBlock..           ::=  "{" ( step | nonsense )* returnStatement "}" ;
                                     
    nodesQuery              ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
    
    nodeQuery               ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
    
    ternary                 ::=  "if" "(" term ")" expression "else" expression ;
    
    reduce                  ::=  "reduce"<NO_WHITESPACE>"(" variable "," anonymousProcedure "," expression ")" ;
    
    every                   ::=  "every"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;
    
    some                    ::=  "some"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;
    
    
    
    comparisonTerm          ::=  term ( "==" | "!=" ) term ; 
    
    bracketedTerm           ::=  "(" term ")" ; 
    
    negatedTerm             ::=  "!"<NO_WHITESPACE>term ; 
    
    logicalTerm             ::=  term ( "||" | "&&" ) term ; 


    
    expression              ::=  procedureCall
     
                              |  returnBlock
    
                              |  nodesQuery
                              
                              |  nodeQuery
                              
                              |  ternary
                              
                              |  reduce
    
                              |  every
    
                              |  some
                             
                              |  term
                              
                              ;
    
    
    
    term                    ::=  comparisonTerm 
    
                              |  bracketedTerm 
    
                              |  logicalTerm 
    
                              |  negatedTerm 
    
                              |  primitive 
    
                              |  variable 
                              
                              ;


    
    primitive               ::=  [string-literal]
                              
                              |  [boolean]
                              
                              |  [number] 
                              
                              |  [null]
                             
                              ;



    reference.              ::=  [name] ;
    
    variable                ::=  [name] ;
    
    label.                  ::=  [name] ;
    
    
    
    nonsense.               ::=  [secondary-keyword] | [type] | [null] | [boolean] | [string-literal] | [query] | [special] | [name] | [number] | [unassigned] ;


    
    error.                  ::=  . ;
    
`;
const _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdXJ0bGUvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICBkb2N1bWVudCAgICAgICAgICAgICAgICA6Oj0gICggcHJvY2VkdXJlRGVjbGFyYXRpb24gfCBlcnJvciApKyA7XG4gICAgXG4gICAgXG4gICAgXG4gICAgcHJvY2VkdXJlRGVjbGFyYXRpb24gICAgOjo9ICBbdHlwZV0gbGFiZWw8Tk9fV0hJVEVTUEFDRT5cIihcIiBwYXJhbWV0ZXJzPyBcIilcIiByZXR1cm5CbG9jayA7XG4gICAgXG4gICAgYW5vbnltb3VzUHJvY2VkdXJlICAgICAgOjo9ICBbdHlwZV0gXCIoXCIgcGFyYW1ldGVycz8gXCIpXCIgcmV0dXJuQmxvY2sgO1xuICAgIFxuICAgIHJldHVyblN0YXRlbWVudCAgICAgICAgIDo6PSAgXCJyZXR1cm5cIiB0ZXJtIFwiO1wiIDsgXG4gICAgXG4gICAgXG4gICAgXG4gICAgc3RlcCAgICAgICAgICAgICAgICAgICAgOjo9ICBhcnJheUFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMKnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBvYmplY3RBc3NpZ25tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHZhcmlhYmxlQXNzaWdubWVudHNcbiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7ICBcbiAgICAgIFxuICAgICAgXG4gICAgXG4gICAgYXJyYXlBc3NpZ25tZW50ICAgICAgICAgOjo9ICBcIltcIiBwYXJhbWV0ZXJzIFwiXVwiIFwiPVwiIHZhcmlhYmxlIFwiO1wiIDtcbiAgICBcbiAgICBvYmplY3RBc3NpZ25tZW50ICAgICAgICA6Oj0gIFwie1wiIG5hbWVkUGFyYW1ldGVycyBcIn1cIiBcIj1cIiB2YXJpYWJsZSBcIjtcIiA7XG4gICAgXG4gICAgdmFyaWFibGVBc3NpZ25tZW50cyAgICAgOjo9ICBbdHlwZV0gdmFyaWFibGVBc3NpZ25tZW50ICggXCIsXCIgdmFyaWFibGVBc3NpZ25tZW50ICkqIFwiO1wiIDtcbiAgICBcbiAgICB2YXJpYWJsZUFzc2lnbm1lbnQgICAgICA6Oj0gIHZhcmlhYmxlIFwiPVwiIGV4cHJlc3Npb24gO1xuICAgIFxuXG5cbiAgICBuYW1lZFBhcmFtZXRlcnMgICAgICAgICA6Oj0gIG5hbWVkUGFyYW1ldGVyICggXCIsXCIgbmFtZWRQYXJhbWV0ZXIgKSogO1xuICAgIFxuICAgIHBhcmFtZXRlcnMgICAgICAgICAgICAgIDo6PSAgcGFyYW1ldGVyICggXCIsXCIgcGFyYW1ldGVyICkqIDtcbiAgICBcbiAgICB0ZXJtcyAgICAgICAgICAgICAgICAgICA6Oj0gIHRlcm0gKCBcIixcIiB0ZXJtICkqIDtcbiAgICBcblxuXG4gICAgbmFtZWRQYXJhbWV0ZXIgICAgICAgICAgOjo9ICBbdHlwZV0gW25hbWVdICggXCJhc1wiIFtuYW1lXSApPyA7ICAgXG4gICAgXG4gICAgcGFyYW1ldGVyICAgICAgICAgICAgICAgOjo9ICBbdHlwZV0gW25hbWVdXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcIl9cIiBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgXG4gICAgcHJvY2VkdXJlQ2FsbCAgICAgICAgICAgOjo9ICByZWZlcmVuY2U8Tk9fV0hJVEVTUEFDRT5cIihcIiB0ZXJtcz8gXCIpXCIgO1xuICAgIFxuICAgIHJldHVybkJsb2NrLi4gICAgICAgICAgIDo6PSAgXCJ7XCIgKCBzdGVwIHwgbm9uc2Vuc2UgKSogcmV0dXJuU3RhdGVtZW50IFwifVwiIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBub2Rlc1F1ZXJ5ICAgICAgICAgICAgICA6Oj0gIFwibm9kZXNRdWVyeVwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgdmFyaWFibGUgXCIsXCIgW3N0cmluZy1saXRlcmFsXSBcIilcIiA7XG4gICAgXG4gICAgbm9kZVF1ZXJ5ICAgICAgICAgICAgICAgOjo9ICBcIm5vZGVRdWVyeVwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgdmFyaWFibGUgXCIsXCIgW3N0cmluZy1saXRlcmFsXSBcIilcIiA7XG4gICAgXG4gICAgdGVybmFyeSAgICAgICAgICAgICAgICAgOjo9ICBcImlmXCIgXCIoXCIgdGVybSBcIilcIiBleHByZXNzaW9uIFwiZWxzZVwiIGV4cHJlc3Npb24gO1xuICAgIFxuICAgIHJlZHVjZSAgICAgICAgICAgICAgICAgIDo6PSAgXCJyZWR1Y2VcIjxOT19XSElURVNQQUNFPlwiKFwiIHZhcmlhYmxlIFwiLFwiIGFub255bW91c1Byb2NlZHVyZSBcIixcIiBleHByZXNzaW9uIFwiKVwiIDtcbiAgICBcbiAgICBldmVyeSAgICAgICAgICAgICAgICAgICA6Oj0gIFwiZXZlcnlcIjxOT19XSElURVNQQUNFPlwiKFwiIHZhcmlhYmxlIFwiLFwiIGFub255bW91c1Byb2NlZHVyZSBcIilcIiA7XG4gICAgXG4gICAgc29tZSAgICAgICAgICAgICAgICAgICAgOjo9ICBcInNvbWVcIjxOT19XSElURVNQQUNFPlwiKFwiIHZhcmlhYmxlIFwiLFwiIGFub255bW91c1Byb2NlZHVyZSBcIilcIiA7XG4gICAgXG4gICAgXG4gICAgXG4gICAgY29tcGFyaXNvblRlcm0gICAgICAgICAgOjo9ICB0ZXJtICggXCI9PVwiIHwgXCIhPVwiICkgdGVybSA7IFxuICAgIFxuICAgIGJyYWNrZXRlZFRlcm0gICAgICAgICAgIDo6PSAgXCIoXCIgdGVybSBcIilcIiA7IFxuICAgIFxuICAgIG5lZ2F0ZWRUZXJtICAgICAgICAgICAgIDo6PSAgXCIhXCI8Tk9fV0hJVEVTUEFDRT50ZXJtIDsgXG4gICAgXG4gICAgbG9naWNhbFRlcm0gICAgICAgICAgICAgOjo9ICB0ZXJtICggXCJ8fFwiIHwgXCImJlwiICkgdGVybSA7IFxuXG5cbiAgICBcbiAgICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gIHByb2NlZHVyZUNhbGxcbiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICByZXR1cm5CbG9ja1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbm9kZXNRdWVyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBub2RlUXVlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybmFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICByZWR1Y2VcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGV2ZXJ5XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzb21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgXG4gICAgXG4gICAgXG4gICAgdGVybSAgICAgICAgICAgICAgICAgICAgOjo9ICBjb21wYXJpc29uVGVybSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGJyYWNrZXRlZFRlcm0gXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBsb2dpY2FsVGVybSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG5lZ2F0ZWRUZXJtIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcHJpbWl0aXZlIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgXG4gICAgcHJpbWl0aXZlICAgICAgICAgICAgICAgOjo9ICBbc3RyaW5nLWxpdGVyYWxdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFtib29sZWFuXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbbnVtYmVyXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW251bGxdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cblxuICAgIHJlZmVyZW5jZS4gICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcbiAgICBcbiAgICB2YXJpYWJsZSAgICAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG4gICAgXG4gICAgbGFiZWwuICAgICAgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuICAgIFxuICAgIFxuICAgIFxuICAgIG5vbnNlbnNlLiAgICAgICAgICAgICAgIDo6PSAgW3NlY29uZGFyeS1rZXl3b3JkXSB8IFt0eXBlXSB8IFtudWxsXSB8IFtib29sZWFuXSB8IFtzdHJpbmctbGl0ZXJhbF0gfCBbcXVlcnldIHwgW3NwZWNpYWxdIHwgW25hbWVdIHwgW251bWJlcl0gfCBbdW5hc3NpZ25lZF0gO1xuXG5cbiAgICBcbiAgICBlcnJvci4gICAgICAgICAgICAgICAgICA6Oj0gIC4gO1xuICAgIFxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0pBOzs7ZUFBQTs7O0FBbEpBLE1BQU1BLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0piLENBQUM7TUFFRCxXQUFlQSJ9