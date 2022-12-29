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
           
                                       |   metaSubproofAssertion         
                                        
                                       |   contextDefinition 
           
                                       |   proofAssertion
       
                                       |   metavariable 

                                       ;

metaSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;

contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

proofAssertion                       ::=   context "|-" judgement ;
 
judgement                            ::=   reference "::" metastatement ;`;

export default {
  termBNF,
  statementBNF,
  metastatementBNF,
  typePattern,
  symbolPattern,
  operatorPattern
};
