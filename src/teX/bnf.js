"use strict";

const bnf = `

    document                        ::=   ( delimitedTeX | plainMarkup )+ ;
    
    
    
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
    
    
    
    plainMarkup                     ::=   . ;


`;

export default bnf;
