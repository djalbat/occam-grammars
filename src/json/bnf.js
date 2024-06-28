"use strict";

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
  
  
    object       ::=  "{" ( property ( "," property )* )? "}" ;
  
    
    array        ::=  "[" ( element ( "," element )* )? "]" ;
  
  
    property     ::=  [string-literal] ":" json ;
    

    element      ::=  json ;
    

    error.       ::=  . ;
    

`;

export default bnf;
