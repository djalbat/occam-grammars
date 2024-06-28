"use strict";

const bnf = `


    document     ::=  json error* 
    
                   |  error+ 
                                 
                   ;
  
  
    json         ::=  array 
    
                   |  object 
    
                   |  [string-literal] 
    
                   |  [number] 
    
                   |  "true" 
    
                   |  "false" 
    
                   |  "null" 
                   
                   ;
  
  
    object       ::=  "{" 
    
                        ( 
                        
                          [string-literal] ":" json ( "," [string-literal] ":" json )* 
                        
                        )? 
                      
                      "}" ;
  
    
    array        ::=  "[" 
    
                        ( 
                        
                          json ( "," json )* 
                        
                        )? 
                      
                      "]" ;
  
  
    error.       ::=  . ;
    

`;

export default bnf;
