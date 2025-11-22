"use strict";

const bnf = `

    document       ::=  ( block | verticalSpace )+ ;

    block          ::=  endedLine* lastLine 
                          
                     |  endedLine+
                          
                     ;

    lastLine       ::=  ( [alpha-numeric] | [punctuation] | [unassigned] )+ ;

    endedLine      ::=  ( [alpha-numeric] | [punctuation] | [unassigned] )+ <END_OF_LINE> ;

    verticalSpace  ::=  <END_OF_LINE>+ ;

`;

export default bnf;
