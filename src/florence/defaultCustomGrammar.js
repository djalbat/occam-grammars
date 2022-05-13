"use strict";

export const lexicalPattern = "";

         export const termBNF = `term!                                ::=   _ ;`;

   export const expressionBNF = `expression!                          ::=   _ ;`;

    export const statementBNF = `statement!                           ::=   typeAssertion 
                                                  
                                       |   equality 

                                       ;

typeAssertion                        ::=   ( expression | [name] ) ":" [name] ;

equality                             ::=   expression "=" expression ;`;

export const metastatementBNF = `metastatement!                       ::=   contextDefinition 
           
                                       |   proofAssertion
       
                                       |   metavariable 

                                       |   subproof 
                                        
                                       ;

contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

proofAssertion                       ::=   context "|-" judgement ;
 
judgement                            ::=   reference "::" metastatement ;

subproof                             ::=   "[" metastatement "]" "..." metastatement ;`;

export default {
  lexicalPattern,
  termBNF,
  expressionBNF,
  statementBNF,
  metastatementBNF
};
