"use strict";

const bnf = `

      document                 ::=  ( rule | error )+ ;

      rule                     ::=  name "::=" definitions ";" ;

      name                     ::=  [name] ;

      definitions              ::=  definition ( "|" definition )* ;

      definition               ::=  part+ precedence? ;
 
      part                     ::=  nonTerminalPart quantifier*

                                 |  terminalPart quantifier*

                                 ;

      nonTerminalPart          ::=  choiceOfParts

                                 |  sequenceOfParts

                                 |  ruleName 

                                 ;

      terminalPart             ::=  significantTokenType
  
                                 |  stringLiteral
  
                                 |  endOfLine
  
                                 |  noWhitespace
                              
                                 ;
                              
      sequenceOfParts          ::=  "(" part part+ ")" ;

      choiceOfParts            ::=  "(" partChoice ( "|" partChoice )+ ")" ;

      partChoice               ::=  part precedence? ;

      ruleName                 ::=  [name] ;

      significantTokenType     ::=  [type] ;

      stringLiteral            ::=  [string-literal] ;

      precedence               ::=  "(" [number]? ")" ;
      
      endOfLine                ::=  "<END_OF_LINE>" ;
      
      noWhitespace             ::=  "<NO_WHITESPACE>" ;                              

      quantifier               ::=  optionalQuantifier
 
                                 |  oneOrMoreQuantifier
  
                                 |  zeroOrMoreQuantifier
  
                                 ;

      optionalQuantifier       ::=  <NO_WHITESPACE>"?" ;

      oneOrMoreQuantifier      ::=  <NO_WHITESPACE>"+" ;

      zeroOrMoreQuantifier     ::=  <NO_WHITESPACE>"*" ;

      error.                   ::=  . ;

`;

export default bnf;
