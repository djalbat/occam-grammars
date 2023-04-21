"use strict";

const bnf = `


    document       ::=  ( block | verticalSpace )+ ;


    block          ::=  singleLine+ ;


    singleLine     ::=  [unassigned]+ <END_OF_LINE> ;


    verticalSpace  ::=  <END_OF_LINE>+ ;


`;

export default bnf;
