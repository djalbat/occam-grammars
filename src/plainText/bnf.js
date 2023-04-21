"use strict";

const bnf = `


    document       ::=  ( block | verticalSpace )* ;


    block          ::=  ( 
    
                          endedLine+ 
                          
                          | 
                          
                          ( endedLine* lastLine ) 
                          
                        ) 
                        
                      ;


    lastLine       ::=  [unassigned]+ ;


    endedLine      ::=  [unassigned]+ <END_OF_LINE> ;


    verticalSpace  ::=  <END_OF_LINE>+ ;


`;

export default bnf;
