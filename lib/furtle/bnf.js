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
    
    step                    ::=  arrayAssignment
                              
                              |  objectAssignment
                              
                              |  variableAssignments
     
                              ;  
      
      
    
    arrayAssignment         ::=  "[" bindings "]" "=" variable ";" ;
    
    objectAssignment        ::=  "{" namedBindings "}" "=" variable ";" ;
    
    variableAssignments     ::=  [type] variableAssignment ( "," variableAssignment )* ";" ;
    
    variableAssignment      ::=  variable "=" expression ;
    


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
    
    reduce                  ::=  "reduce"<NO_WHITESPACE>"(" variable "," anonymousProcedure "," expression ")" ;
    
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdXJ0bGUvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICBkb2N1bWVudCAgICAgICAgICAgICAgICA6Oj0gICggcHJvY2VkdXJlRGVjbGFyYXRpb24gfCBlcnJvciApKyA7XG4gICAgXG4gICAgXG4gICAgXG4gICAgcHJvY2VkdXJlRGVjbGFyYXRpb24gICAgOjo9ICBbdHlwZV0gbGFiZWw8Tk9fV0hJVEVTUEFDRT5cIihcIiBwYXJhbWV0ZXJzPyBcIilcIiByZXR1cm5CbG9jayA7XG4gICAgXG4gICAgYW5vbnltb3VzUHJvY2VkdXJlICAgICAgOjo9ICBbdHlwZV0gXCIoXCIgcGFyYW1ldGVycz8gXCIpXCIgcmV0dXJuQmxvY2sgO1xuICAgIFxuICAgIHN0ZXAgICAgICAgICAgICAgICAgICAgIDo6PSAgYXJyYXlBc3NpZ25tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG9iamVjdEFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGVBc3NpZ25tZW50c1xuICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDsgIFxuICAgICAgXG4gICAgICBcbiAgICBcbiAgICBhcnJheUFzc2lnbm1lbnQgICAgICAgICA6Oj0gIFwiW1wiIGJpbmRpbmdzIFwiXVwiIFwiPVwiIHZhcmlhYmxlIFwiO1wiIDtcbiAgICBcbiAgICBvYmplY3RBc3NpZ25tZW50ICAgICAgICA6Oj0gIFwie1wiIG5hbWVkQmluZGluZ3MgXCJ9XCIgXCI9XCIgdmFyaWFibGUgXCI7XCIgO1xuICAgIFxuICAgIHZhcmlhYmxlQXNzaWdubWVudHMgICAgIDo6PSAgW3R5cGVdIHZhcmlhYmxlQXNzaWdubWVudCAoIFwiLFwiIHZhcmlhYmxlQXNzaWdubWVudCApKiBcIjtcIiA7XG4gICAgXG4gICAgdmFyaWFibGVBc3NpZ25tZW50ICAgICAgOjo9ICB2YXJpYWJsZSBcIj1cIiBleHByZXNzaW9uIDtcbiAgICBcblxuXG4gICAgbmFtZWRCaW5kaW5ncyAgICAgICAgICAgOjo9ICBuYW1lZEJpbmRpbmcgKCBcIixcIiBuYW1lZEJpbmRpbmcgKSogO1xuICAgIFxuICAgIHBhcmFtZXRlcnMgICAgICAgICAgICAgIDo6PSAgcGFyYW1ldGVyICggXCIsXCIgcGFyYW1ldGVyICkqIDtcbiAgICBcbiAgICBiaW5kaW5ncyAgICAgICAgICAgICAgICA6Oj0gIGJpbmRpbmcgKCBcIixcIiBiaW5kaW5nICkqIDtcbiAgICBcbiAgICB2YWx1ZXMgICAgICAgICAgICAgICAgICA6Oj0gIHZhbHVlICggXCIsXCIgdmFsdWUgKSogO1xuICAgIFxuICAgIHRlcm1zICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSAoIFwiLFwiIHRlcm0gKSogO1xuICAgIFxuXG5cbiAgICBuYW1lZEJpbmRpbmcgICAgICAgICAgOjo9ICBbdHlwZV0gW25hbWVdICggXCJhc1wiIFtuYW1lXSApPyA7ICAgXG4gICAgXG4gICAgcGFyYW1ldGVyICAgICAgICAgICAgIDo6PSAgW3R5cGVdIFtuYW1lXSA7XG5cbiAgICBiaW5kaW5nICAgICAgICAgICAgICAgOjo9ICBbdHlwZV0gW25hbWVdXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgzrUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICBcbiAgICBwcm9jZWR1cmVDYWxsICAgICAgICAgICA6Oj0gIHJlZmVyZW5jZTxOT19XSElURVNQQUNFPlwiKFwiIHZhbHVlcz8gXCIpXCIgO1xuICAgIFxuICAgIHJldHVybkJsb2NrLi4gICAgICAgICAgIDo6PSAgXCJ7XCIgKCBzdGVwIHwgbm9uc2Vuc2UgKSogcmV0dXJuU3RhdGVtZW50IFwifVwiIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBub2Rlc1F1ZXJ5ICAgICAgICAgICAgICA6Oj0gIFwibm9kZXNRdWVyeVwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgdmFyaWFibGUgXCIsXCIgW3N0cmluZy1saXRlcmFsXSBcIilcIiA7XG4gICAgXG4gICAgbm9kZVF1ZXJ5ICAgICAgICAgICAgICAgOjo9ICBcIm5vZGVRdWVyeVwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgdmFyaWFibGUgXCIsXCIgW3N0cmluZy1saXRlcmFsXSBcIilcIiA7XG4gICAgXG4gICAgdGVybmFyeSAgICAgICAgICAgICAgICAgOjo9ICBcImlmXCIgXCIoXCIgdGVybSBcIilcIiBleHByZXNzaW9uIFwiZWxzZVwiIGV4cHJlc3Npb24gO1xuICAgIFxuICAgIHJlZHVjZSAgICAgICAgICAgICAgICAgIDo6PSAgXCJyZWR1Y2VcIjxOT19XSElURVNQQUNFPlwiKFwiIHZhcmlhYmxlIFwiLFwiIGFub255bW91c1Byb2NlZHVyZSBcIixcIiBleHByZXNzaW9uIFwiKVwiIDtcbiAgICBcbiAgICBldmVyeSAgICAgICAgICAgICAgICAgICA6Oj0gIFwiZXZlcnlcIjxOT19XSElURVNQQUNFPlwiKFwiIHZhcmlhYmxlIFwiLFwiIGFub255bW91c1Byb2NlZHVyZSBcIilcIiA7XG4gICAgXG4gICAgc29tZSAgICAgICAgICAgICAgICAgICAgOjo9ICBcInNvbWVcIjxOT19XSElURVNQQUNFPlwiKFwiIHZhcmlhYmxlIFwiLFwiIGFub255bW91c1Byb2NlZHVyZSBcIilcIiA7XG4gICAgXG4gICAgXG4gICAgXG4gICAgcmV0dXJuU3RhdGVtZW50ICAgICAgICAgOjo9ICBcInJldHVyblwiIHZhbHVlIFwiO1wiIDsgXG4gICAgXG4gICAgXG4gICAgXG4gICAgY29tcGFyaXNvblRlcm0gICAgICAgICAgOjo9ICB0ZXJtICggXCI9PVwiIHwgXCIhPVwiICkgdGVybSA7IFxuICAgIFxuICAgIGJyYWNrZXRlZFRlcm0gICAgICAgICAgIDo6PSAgXCIoXCIgdGVybSBcIilcIiA7IFxuICAgIFxuICAgIG5lZ2F0ZWRUZXJtICAgICAgICAgICAgIDo6PSAgXCIhXCI8Tk9fV0hJVEVTUEFDRT50ZXJtIDsgXG4gICAgXG4gICAgbG9naWNhbFRlcm0gICAgICAgICAgICAgOjo9ICB0ZXJtICggXCJ8fFwiIHwgXCImJlwiICkgdGVybSA7IFxuXG5cbiAgICBcbiAgICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gIHByb2NlZHVyZUNhbGxcbiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICByZXR1cm5CbG9ja1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbm9kZXNRdWVyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBub2RlUXVlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybmFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICByZWR1Y2VcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGV2ZXJ5XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzb21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgXG4gICAgXG4gICAgXG4gICAgdGVybSAgICAgICAgICAgICAgICAgICAgOjo9ICBjb21wYXJpc29uVGVybSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGJyYWNrZXRlZFRlcm0gXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBsb2dpY2FsVGVybSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG5lZ2F0ZWRUZXJtIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcHJpbWl0aXZlIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgXG4gICAgdmFsdWUgICAgICAgICAgICAgICAgICAgOjo9ICBwcmltaXRpdmUgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB2YXJpYWJsZSBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICBcbiAgICBwcmltaXRpdmUgICAgICAgICAgICAgICA6Oj0gIFtzdHJpbmctbGl0ZXJhbF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW2Jvb2xlYW5dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFtudW1iZXJdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbbnVsbF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuXG4gICAgcmVmZXJlbmNlLiAgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuICAgIFxuICAgIHZhcmlhYmxlICAgICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcbiAgICBcbiAgICBsYWJlbC4gICAgICAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG4gICAgXG4gICAgXG4gICAgXG4gICAgbm9uc2Vuc2UuICAgICAgICAgICAgICAgOjo9ICBbc2Vjb25kYXJ5LWtleXdvcmRdIHwgW3R5cGVdIHwgW251bGxdIHwgW2Jvb2xlYW5dIHwgW3N0cmluZy1saXRlcmFsXSB8IFtxdWVyeV0gfCBbc3BlY2lhbF0gfCBbbmFtZV0gfCBbbnVtYmVyXSB8IFt1bmFzc2lnbmVkXSA7XG5cblxuICAgIFxuICAgIGVycm9yLiAgICAgICAgICAgICAgICAgIDo6PSAgLiA7XG4gICAgXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG4iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrS0E7OztlQUFBOzs7QUFoS0EsTUFBTUEsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThKYixDQUFDO01BRUQsV0FBZUEifQ==