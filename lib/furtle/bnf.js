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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdXJ0bGUvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICBkb2N1bWVudCAgICAgICAgICAgICAgICA6Oj0gICggcHJvY2VkdXJlRGVjbGFyYXRpb24gfCBlcnJvciApKyA7XG4gICAgXG4gICAgXG4gICAgXG4gICAgcHJvY2VkdXJlRGVjbGFyYXRpb24gICAgOjo9ICBbdHlwZV0gbGFiZWw8Tk9fV0hJVEVTUEFDRT5cIihcIiBwYXJhbWV0ZXJzPyBcIilcIiByZXR1cm5CbG9jayA7XG4gICAgXG4gICAgYW5vbnltb3VzUHJvY2VkdXJlICAgICAgOjo9ICBbdHlwZV0gXCIoXCIgcGFyYW1ldGVycz8gXCIpXCIgcmV0dXJuQmxvY2sgO1xuICAgIFxuICAgIHJldHVyblN0YXRlbWVudCAgICAgICAgIDo6PSAgXCJyZXR1cm5cIiB0ZXJtIFwiO1wiIDsgXG4gICAgXG4gICAgXG4gICAgXG4gICAgc3RlcCAgICAgICAgICAgICAgICAgICAgOjo9ICBhcnJheUFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgb2JqZWN0QXNzaWdubWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB2YXJpYWJsZUFzc2lnbm1lbnRzXG4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOyAgXG4gICAgICBcbiAgICAgIFxuICAgIFxuICAgIGFycmF5QXNzaWdubWVudCAgICAgICAgIDo6PSAgXCJbXCIgcGFyYW1ldGVycyBcIl1cIiBcIj1cIiB2YXJpYWJsZSBcIjtcIiA7XG4gICAgXG4gICAgb2JqZWN0QXNzaWdubWVudCAgICAgICAgOjo9ICBcIntcIiBuYW1lZFBhcmFtZXRlcnMgXCJ9XCIgXCI9XCIgdmFyaWFibGUgXCI7XCIgO1xuICAgIFxuICAgIHZhcmlhYmxlQXNzaWdubWVudHMgICAgIDo6PSAgW3R5cGVdIHZhcmlhYmxlQXNzaWdubWVudCAoIFwiLFwiIHZhcmlhYmxlQXNzaWdubWVudCApKiBcIjtcIiA7XG4gICAgXG4gICAgdmFyaWFibGVBc3NpZ25tZW50ICAgICAgOjo9ICB2YXJpYWJsZSBcIj1cIiBleHByZXNzaW9uIDtcbiAgICBcblxuXG4gICAgbmFtZWRQYXJhbWV0ZXJzICAgICAgICAgOjo9ICBuYW1lZFBhcmFtZXRlciAoIFwiLFwiIG5hbWVkUGFyYW1ldGVyICkqIDtcbiAgICBcbiAgICBwYXJhbWV0ZXJzICAgICAgICAgICAgICA6Oj0gIHBhcmFtZXRlciAoIFwiLFwiIHBhcmFtZXRlciApKiA7XG4gICAgXG4gICAgdGVybXMgICAgICAgICAgICAgICAgICAgOjo9ICB0ZXJtICggXCIsXCIgdGVybSApKiA7XG4gICAgXG5cblxuICAgIG5hbWVkUGFyYW1ldGVyICAgICAgICAgIDo6PSAgW3R5cGVdIFtuYW1lXSAoIFwiYXNcIiBbbmFtZV0gKT8gOyAgIFxuICAgIFxuICAgIHBhcmFtZXRlciAgICAgICAgICAgICAgIDo6PSAgW3R5cGVdIFtuYW1lXVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJfXCIgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgIFxuICAgIHByb2NlZHVyZUNhbGwgICAgICAgICAgIDo6PSAgcmVmZXJlbmNlPE5PX1dISVRFU1BBQ0U+XCIoXCIgdGVybXM/IFwiKVwiIDtcbiAgICBcbiAgICByZXR1cm5CbG9jay4uICAgICAgICAgICA6Oj0gIFwie1wiICggc3RlcCB8IG5vbnNlbnNlICkqIHJldHVyblN0YXRlbWVudCBcIn1cIiA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgbm9kZXNRdWVyeSAgICAgICAgICAgICAgOjo9ICBcIm5vZGVzUXVlcnlcIjxOT19XSElURVNQQUNFPlwiKFwiIHZhcmlhYmxlIFwiLFwiIFtzdHJpbmctbGl0ZXJhbF0gXCIpXCIgO1xuICAgIFxuICAgIG5vZGVRdWVyeSAgICAgICAgICAgICAgIDo6PSAgXCJub2RlUXVlcnlcIjxOT19XSElURVNQQUNFPlwiKFwiIHZhcmlhYmxlIFwiLFwiIFtzdHJpbmctbGl0ZXJhbF0gXCIpXCIgO1xuICAgIFxuICAgIHRlcm5hcnkgICAgICAgICAgICAgICAgIDo6PSAgXCJpZlwiIFwiKFwiIHRlcm0gXCIpXCIgZXhwcmVzc2lvbiBcImVsc2VcIiBleHByZXNzaW9uIDtcbiAgICBcbiAgICByZWR1Y2UgICAgICAgICAgICAgICAgICA6Oj0gIFwicmVkdWNlXCI8Tk9fV0hJVEVTUEFDRT5cIihcIiB2YXJpYWJsZSBcIixcIiBhbm9ueW1vdXNQcm9jZWR1cmUgXCIsXCIgZXhwcmVzc2lvbiBcIilcIiA7XG4gICAgXG4gICAgZXZlcnkgICAgICAgICAgICAgICAgICAgOjo9ICBcImV2ZXJ5XCI8Tk9fV0hJVEVTUEFDRT5cIihcIiB2YXJpYWJsZSBcIixcIiBhbm9ueW1vdXNQcm9jZWR1cmUgXCIpXCIgO1xuICAgIFxuICAgIHNvbWUgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJzb21lXCI8Tk9fV0hJVEVTUEFDRT5cIihcIiB2YXJpYWJsZSBcIixcIiBhbm9ueW1vdXNQcm9jZWR1cmUgXCIpXCIgO1xuICAgIFxuICAgIFxuICAgIFxuICAgIGNvbXBhcmlzb25UZXJtICAgICAgICAgIDo6PSAgdGVybSAoIFwiPT1cIiB8IFwiIT1cIiApIHRlcm0gOyBcbiAgICBcbiAgICBicmFja2V0ZWRUZXJtICAgICAgICAgICA6Oj0gIFwiKFwiIHRlcm0gXCIpXCIgOyBcbiAgICBcbiAgICBuZWdhdGVkVGVybSAgICAgICAgICAgICA6Oj0gIFwiIVwiPE5PX1dISVRFU1BBQ0U+dGVybSA7IFxuICAgIFxuICAgIGxvZ2ljYWxUZXJtICAgICAgICAgICAgIDo6PSAgdGVybSAoIFwifHxcIiB8IFwiJiZcIiApIHRlcm0gOyBcblxuXG4gICAgXG4gICAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgOjo9ICBwcm9jZWR1cmVDYWxsXG4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcmV0dXJuQmxvY2tcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG5vZGVzUXVlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbm9kZVF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm5hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcmVkdWNlXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBldmVyeVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc29tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgIFxuICAgIFxuICAgIFxuICAgIHRlcm0gICAgICAgICAgICAgICAgICAgIDo6PSAgY29tcGFyaXNvblRlcm0gXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBicmFja2V0ZWRUZXJtIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbG9naWNhbFRlcm0gXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBuZWdhdGVkVGVybSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHByaW1pdGl2ZSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHZhcmlhYmxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgIFxuICAgIHByaW1pdGl2ZSAgICAgICAgICAgICAgIDo6PSAgW3N0cmluZy1saXRlcmFsXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbYm9vbGVhbl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW251bWJlcl0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFtudWxsXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG5cbiAgICByZWZlcmVuY2UuICAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG4gICAgXG4gICAgdmFyaWFibGUgICAgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuICAgIFxuICAgIGxhYmVsLiAgICAgICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcbiAgICBcbiAgICBcbiAgICBcbiAgICBub25zZW5zZS4gICAgICAgICAgICAgICA6Oj0gIFtzZWNvbmRhcnkta2V5d29yZF0gfCBbdHlwZV0gfCBbbnVsbF0gfCBbYm9vbGVhbl0gfCBbc3RyaW5nLWxpdGVyYWxdIHwgW3F1ZXJ5XSB8IFtzcGVjaWFsXSB8IFtuYW1lXSB8IFtudW1iZXJdIHwgW3VuYXNzaWduZWRdIDtcblxuXG4gICAgXG4gICAgZXJyb3IuICAgICAgICAgICAgICAgICAgOjo9ICAuIDtcbiAgICBcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcbiJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9KQTs7O2VBQUE7OztBQWxKQSxNQUFNQSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdKYixDQUFDO01BRUQsV0FBZUEifQ==