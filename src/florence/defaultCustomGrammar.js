"use strict";

export const lexicalPattern = "";

export const termBNF = `term!                                ::=   _ ;`;

export const expressionBNF = `expression!                          ::=   _ ;`;

export const statementBNF = `statement!                           ::=   expression "=" expression ;`;

export const metastatementBNF = `metastatement!                       ::=   contextDefinition 
           
                                       |   proofAssertion
       
                                       |   typeAssertion 
                                                  
                                       |   metavariable 

                                       |   subproof 
                                        
                                       ;

contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

proofAssertion                       ::=   context "|-" judgement ;
 
typeAssertion                        ::=   ( type | expression ) ":" typeName 

judgement                            ::=   reference "::" metastatement ;

subproof                             ::=   "[" metastatement "]" "..." metastatement ;

                                       `;

export default {
  lexicalPattern,
  termBNF,
  expressionBNF,
  statementBNF,
  metastatementBNF
};
