"use strict";

export const typePattern = "";

export const symbolPattern = "";

export const operatorPattern = "";

export const termBNF = `term!                                ::=   variable ;`;

    export const statementBNF = `statement!                           ::=   "(" statement ")" 
                                                  
                                       |   typeAssertion 
                                                  
                                       |   equality 

                                       ;

typeAssertion                        ::=   term ":" type ;

equality                             ::=   term "=" term ;`;

export const metastatementBNF = `metastatement!                       ::=   "(" metastatement ")" 
           
                                       |   contextDefinition 
           
                                       |   proofAssertion
       
                                       |   metavariable 

                                       |   subproof 
                                        
                                       ;

contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

proofAssertion                       ::=   context "|-" judgement ;
 
judgement                            ::=   reference "::" metastatement ;

subproof                             ::=   "[" metastatement "]" "..." metastatement ;`;

export default {
  termBNF,
  statementBNF,
  metastatementBNF,
  typePattern,
  symbolPattern,
  operatorPattern
};
