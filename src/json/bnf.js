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
  
  
  
    array..      ::=  "[" ( element ( "," element )* )? nonsense? "]" ;
  
  
     
    object..     ::=  "{" ( property ( "," property )* )? nonsense? "}" ;
  
  
    
    property     ::=  [string-literal] ":" json ;
  
    

    element      ::=  json ;
  
    

    nonsense.    ::=  ( ":" | "," | [string-literal] | [number] | [boolean] | [null] | [unassigned] )+ ;
    


    error.       ::=  . ;
    

`;

export default bnf;
