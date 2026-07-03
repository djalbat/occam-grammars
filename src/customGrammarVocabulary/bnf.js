"use strict";

const bnf = `

    document       ::=  ( expression | verticalSpace | error )+ ;

    expression     ::=  <NO_WHITESPACE>( [regular-expression] | [unassigned] )<NO_WHITESPACE><END_OF_LINE> ;

    verticalSpace  ::=  <END_OF_LINE>+ ;
   
    error.         ::=  . ;

`;

export default bnf;
