"use strict";

export const lexicalPattern = "";

         export const typeBNF = `type                                 ::=   _ ;`;

         export const termBNF = `term!                                ::=   _ ;`;

   export const expressionBNF = `expression!                          ::=   _ ;`;

    export const statementBNF = `statement!                           ::=   typeAssertion 
                                                  
                                       |   equality 

                                       ;

typeAssertion                        ::=   variable ":" type ;

equality                             ::=   ( variable | expression ) "=" ( variable | expression ) ;`;

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
  typeBNF,
  termBNF,
  expressionBNF,
  statementBNF,
  metastatementBNF
};
