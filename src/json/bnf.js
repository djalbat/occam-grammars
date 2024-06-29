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
  
  
  
    object..     ::=  "{" 
    
                        ( 
                        
                          ( property ( "," property )* nonsense? ) 
                          
                          | 
                          
                          ( nonsense... property ( "," property )* nonsense? )
                        
                        )? 
    
                      "}" ;
  
  
    
    array..      ::=  "[" 
    
                        ( 
                        
                          ( element ( "," element )* nonsense? ) 
                          
                          | 
                          
                          ( nonsense... element ( "," element )* nonsense? )
                        
                        )? 
                      
                      "]" ;
  
  
     
    property     ::=  [string-literal] ":" json ;
  
    

    element      ::=  json ;
  
    

    nonsense     ::=  ( ":" | "," | [string-literal] | [number] | [boolean] | [null] | [unassigned] )+ ;
    


    error.       ::=  . ;
    

`;

export default bnf;
