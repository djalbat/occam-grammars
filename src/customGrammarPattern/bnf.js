"use strict";

const bnf = `


    document    ::=  ( expression | error )+ ;


    expression  ::=  <NO_WHITESPACE>[unassigned]<NO_WHITESPACE><END_OF_LINE> ;


    error.      ::=  . ;

`;

export default bnf;
