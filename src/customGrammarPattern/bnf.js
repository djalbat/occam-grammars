"use strict";

const bnf = `


    document       ::=  <NO_WHITESPACE> pattern ( verticalSpace | error )* 
    
                     |  ( verticalSpace | error )+ 
                     
                     ;


    pattern        ::=  [unassigned]+ ;


    verticalSpace  ::=  <END_OF_LINE>+ ;


    error.         ::=  . ;


`;

export default bnf;
