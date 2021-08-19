"use strict";

const bnf = `


    document                        ::=   ( delimitedTeX | everythingElse )+ ;
    
    
    
    delimitedTeX                    ::=   dollarDelimiter inlineTeX dollarDelimiter 
    
                                      |   doubleDollarDelimiter displayTeX doubleDollarDelimiter 
    
                                      |   openingBracketDelimiter inlineTeX closingBracketDelimiter 
    
                                      |   openingSquareBracketDelimiter displayTeX closingSquareBracketDelimiter 
                                      
                                      ;
    

    
    inlineTeX                       ::=   [unassigned]* ;

    displayTeX                      ::=   [unassigned]* ;



    dollarDelimiter                 ::=   "$" ;
 
    doubleDollarDelimiter           ::=   "$$" ;
    

    
    openingBracketDelimiter         ::=   "\\(" ;

    closingBracketDelimiter         ::=   "\\)" ;

    openingSquareBracketDelimiter   ::=   "\\[" ;
    
    closingSquareBracketDelimiter   ::=   "\\]" ;
    
    
    
    everythingElse                  ::=   . ;


`;

export default bnf;
