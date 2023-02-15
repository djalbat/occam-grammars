"use strict";

const bnf = `


    document       ::=  ( singleLine | verticalSpace )+ ;


    singleLine     ::=  [unassigned]+ ;


    verticalSpace  ::=  <END_OF_LINE>+ ;


`;

export default bnf;
