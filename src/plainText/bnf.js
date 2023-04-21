"use strict";

const bnf = `


    document       ::=  ( block | verticalSpace )+ ;


    block          ::=  endedLine* lastLine 
                          
                     |  endedLine+
                          
                     ;


    lastLine       ::=  [unassigned]+ ;


    endedLine      ::=  [unassigned]+ <END_OF_LINE> ;


    verticalSpace  ::=  <END_OF_LINE>+ ;


`;

export default bnf;
