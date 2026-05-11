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
    
    step                    ::=  variableAssignments
                              
                              |  objectAssignment
     
                              |  arrayAssignment
                              
                              ;  
      
      
    
    variableAssignments     ::=  [type] variableAssignment ( "," variableAssignment )* ";" ;
    
    variableAssignment      ::=  variable "=" expression ;
    
    objectAssignment        ::=  "{" namedBindings "}" "=" variable ";" ;
    
    arrayAssignment         ::=  "[" bindings "]" "=" variable ";" ;
    


    namedBindings           ::=  namedBinding ( "," namedBinding )* ;
    
    parameters              ::=  parameter ( "," parameter )* ;
    
    bindings                ::=  binding ( "," binding )* ;
    
    values                  ::=  value ( "," value )* ;
    
    terms                   ::=  term ( "," term )* ;
    


    namedBinding          ::=  [type] [name] ( "as" [name] )? ;   
    
    parameter             ::=  [type] [name] ;

    binding               ::=  [type] [name]
    
                            |  ε 
                                  
                            ;


    
    procedureCall           ::=  reference<NO_WHITESPACE>"(" values? ")" ;
    
    returnBlock..           ::=  "{" ( step | nonsense )* returnStatement "}" ;
                                     
    nodesQuery              ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
    
    nodeQuery               ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
    
    ternary                 ::=  "if" "(" term ")" expression "else" expression ;
    
    reduce                  ::=  "reduce"<NO_WHITESPACE>"(" variable "," anonymousProcedure "," value ")" ;
    
    every                   ::=  "every"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;
    
    some                    ::=  "some"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;
    
    
    
    returnStatement         ::=  "return" value ";" ; 
    
    
    
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


    
    value                   ::=  primitive 
    
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdXJ0bGUvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICBkb2N1bWVudCAgICAgICAgICAgICAgICA6Oj0gICggcHJvY2VkdXJlRGVjbGFyYXRpb24gfCBlcnJvciApKyA7XG4gICAgXG4gICAgXG4gICAgXG4gICAgcHJvY2VkdXJlRGVjbGFyYXRpb24gICAgOjo9ICBbdHlwZV0gbGFiZWw8Tk9fV0hJVEVTUEFDRT5cIihcIiBwYXJhbWV0ZXJzPyBcIilcIiByZXR1cm5CbG9jayA7XG4gICAgXG4gICAgYW5vbnltb3VzUHJvY2VkdXJlICAgICAgOjo9ICBbdHlwZV0gXCIoXCIgcGFyYW1ldGVycz8gXCIpXCIgcmV0dXJuQmxvY2sgO1xuICAgIFxuICAgIHN0ZXAgICAgICAgICAgICAgICAgICAgIDo6PSAgdmFyaWFibGVBc3NpZ25tZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBvYmplY3RBc3NpZ25tZW50XG4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgYXJyYXlBc3NpZ25tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDsgIFxuICAgICAgXG4gICAgICBcbiAgICBcbiAgICB2YXJpYWJsZUFzc2lnbm1lbnRzICAgICA6Oj0gIFt0eXBlXSB2YXJpYWJsZUFzc2lnbm1lbnQgKCBcIixcIiB2YXJpYWJsZUFzc2lnbm1lbnQgKSogXCI7XCIgO1xuICAgIFxuICAgIHZhcmlhYmxlQXNzaWdubWVudCAgICAgIDo6PSAgdmFyaWFibGUgXCI9XCIgZXhwcmVzc2lvbiA7XG4gICAgXG4gICAgb2JqZWN0QXNzaWdubWVudCAgICAgICAgOjo9ICBcIntcIiBuYW1lZEJpbmRpbmdzIFwifVwiIFwiPVwiIHZhcmlhYmxlIFwiO1wiIDtcbiAgICBcbiAgICBhcnJheUFzc2lnbm1lbnQgICAgICAgICA6Oj0gIFwiW1wiIGJpbmRpbmdzIFwiXVwiIFwiPVwiIHZhcmlhYmxlIFwiO1wiIDtcbiAgICBcblxuXG4gICAgbmFtZWRCaW5kaW5ncyAgICAgICAgICAgOjo9ICBuYW1lZEJpbmRpbmcgKCBcIixcIiBuYW1lZEJpbmRpbmcgKSogO1xuICAgIFxuICAgIHBhcmFtZXRlcnMgICAgICAgICAgICAgIDo6PSAgcGFyYW1ldGVyICggXCIsXCIgcGFyYW1ldGVyICkqIDtcbiAgICBcbiAgICBiaW5kaW5ncyAgICAgICAgICAgICAgICA6Oj0gIGJpbmRpbmcgKCBcIixcIiBiaW5kaW5nICkqIDtcbiAgICBcbiAgICB2YWx1ZXMgICAgICAgICAgICAgICAgICA6Oj0gIHZhbHVlICggXCIsXCIgdmFsdWUgKSogO1xuICAgIFxuICAgIHRlcm1zICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSAoIFwiLFwiIHRlcm0gKSogO1xuICAgIFxuXG5cbiAgICBuYW1lZEJpbmRpbmcgICAgICAgICAgOjo9ICBbdHlwZV0gW25hbWVdICggXCJhc1wiIFtuYW1lXSApPyA7ICAgXG4gICAgXG4gICAgcGFyYW1ldGVyICAgICAgICAgICAgIDo6PSAgW3R5cGVdIFtuYW1lXSA7XG5cbiAgICBiaW5kaW5nICAgICAgICAgICAgICAgOjo9ICBbdHlwZV0gW25hbWVdXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgzrUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICBcbiAgICBwcm9jZWR1cmVDYWxsICAgICAgICAgICA6Oj0gIHJlZmVyZW5jZTxOT19XSElURVNQQUNFPlwiKFwiIHZhbHVlcz8gXCIpXCIgO1xuICAgIFxuICAgIHJldHVybkJsb2NrLi4gICAgICAgICAgIDo6PSAgXCJ7XCIgKCBzdGVwIHwgbm9uc2Vuc2UgKSogcmV0dXJuU3RhdGVtZW50IFwifVwiIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBub2Rlc1F1ZXJ5ICAgICAgICAgICAgICA6Oj0gIFwibm9kZXNRdWVyeVwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgdmFyaWFibGUgXCIsXCIgW3N0cmluZy1saXRlcmFsXSBcIilcIiA7XG4gICAgXG4gICAgbm9kZVF1ZXJ5ICAgICAgICAgICAgICAgOjo9ICBcIm5vZGVRdWVyeVwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgdmFyaWFibGUgXCIsXCIgW3N0cmluZy1saXRlcmFsXSBcIilcIiA7XG4gICAgXG4gICAgdGVybmFyeSAgICAgICAgICAgICAgICAgOjo9ICBcImlmXCIgXCIoXCIgdGVybSBcIilcIiBleHByZXNzaW9uIFwiZWxzZVwiIGV4cHJlc3Npb24gO1xuICAgIFxuICAgIHJlZHVjZSAgICAgICAgICAgICAgICAgIDo6PSAgXCJyZWR1Y2VcIjxOT19XSElURVNQQUNFPlwiKFwiIHZhcmlhYmxlIFwiLFwiIGFub255bW91c1Byb2NlZHVyZSBcIixcIiB2YWx1ZSBcIilcIiA7XG4gICAgXG4gICAgZXZlcnkgICAgICAgICAgICAgICAgICAgOjo9ICBcImV2ZXJ5XCI8Tk9fV0hJVEVTUEFDRT5cIihcIiB2YXJpYWJsZSBcIixcIiBhbm9ueW1vdXNQcm9jZWR1cmUgXCIpXCIgO1xuICAgIFxuICAgIHNvbWUgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJzb21lXCI8Tk9fV0hJVEVTUEFDRT5cIihcIiB2YXJpYWJsZSBcIixcIiBhbm9ueW1vdXNQcm9jZWR1cmUgXCIpXCIgO1xuICAgIFxuICAgIFxuICAgIFxuICAgIHJldHVyblN0YXRlbWVudCAgICAgICAgIDo6PSAgXCJyZXR1cm5cIiB2YWx1ZSBcIjtcIiA7IFxuICAgIFxuICAgIFxuICAgIFxuICAgIGNvbXBhcmlzb25UZXJtICAgICAgICAgIDo6PSAgdGVybSAoIFwiPT1cIiB8IFwiIT1cIiApIHRlcm0gOyBcbiAgICBcbiAgICBicmFja2V0ZWRUZXJtICAgICAgICAgICA6Oj0gIFwiKFwiIHRlcm0gXCIpXCIgOyBcbiAgICBcbiAgICBuZWdhdGVkVGVybSAgICAgICAgICAgICA6Oj0gIFwiIVwiPE5PX1dISVRFU1BBQ0U+dGVybSA7IFxuICAgIFxuICAgIGxvZ2ljYWxUZXJtICAgICAgICAgICAgIDo6PSAgdGVybSAoIFwifHxcIiB8IFwiJiZcIiApIHRlcm0gOyBcblxuXG4gICAgXG4gICAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgOjo9ICBwcm9jZWR1cmVDYWxsXG4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcmV0dXJuQmxvY2tcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG5vZGVzUXVlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbm9kZVF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm5hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcmVkdWNlXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBldmVyeVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc29tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgIFxuICAgIFxuICAgIFxuICAgIHRlcm0gICAgICAgICAgICAgICAgICAgIDo6PSAgY29tcGFyaXNvblRlcm0gXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBicmFja2V0ZWRUZXJtIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbG9naWNhbFRlcm0gXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBuZWdhdGVkVGVybSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHByaW1pdGl2ZSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHZhcmlhYmxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgIFxuICAgIHZhbHVlICAgICAgICAgICAgICAgICAgIDo6PSAgcHJpbWl0aXZlIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGUgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgXG4gICAgcHJpbWl0aXZlICAgICAgICAgICAgICAgOjo9ICBbc3RyaW5nLWxpdGVyYWxdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFtib29sZWFuXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbbnVtYmVyXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW251bGxdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cblxuICAgIHJlZmVyZW5jZS4gICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcbiAgICBcbiAgICB2YXJpYWJsZSAgICAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG4gICAgXG4gICAgbGFiZWwuICAgICAgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuICAgIFxuICAgIFxuICAgIFxuICAgIG5vbnNlbnNlLiAgICAgICAgICAgICAgIDo6PSAgW3NlY29uZGFyeS1rZXl3b3JkXSB8IFt0eXBlXSB8IFtudWxsXSB8IFtib29sZWFuXSB8IFtzdHJpbmctbGl0ZXJhbF0gfCBbcXVlcnldIHwgW3NwZWNpYWxdIHwgW25hbWVdIHwgW251bWJlcl0gfCBbdW5hc3NpZ25lZF0gO1xuXG5cbiAgICBcbiAgICBlcnJvci4gICAgICAgICAgICAgICAgICA6Oj0gIC4gO1xuICAgIFxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0tBOzs7ZUFBQTs7O0FBaEtBLE1BQU1BLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4SmIsQ0FBQztNQUVELFdBQWVBIn0=