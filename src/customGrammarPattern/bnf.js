"use strict";

const bnf = `


    document       ::=  pattern ( verticalSpace | error )* 
    
                     |  ( verticalSpace | error )+ 
                     
                     ;


    pattern        ::=  [unassigned]+ ;


    verticalSpace  ::=  <END_OF_LINE>+ ;


    error          ::=  . ;


`;

export default bnf;
