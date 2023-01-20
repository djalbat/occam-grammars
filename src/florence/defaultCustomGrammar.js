"use strict";

export const typePattern = "";

export const symbolPattern = "";

export const operatorPattern = "";

export const termBNF = `term!                                ::=   variable ;`;

    export const statementBNF = `statement!                           ::=   "(" metaArgument ")" 
                                                  
                                       |   argument "=" argument

                                       |   typeAssertion 
                                                  
                                       ;

typeAssertion                        ::=   term ":" type ;`;

export const metastatementBNF = `metastatement!                       ::=   "(" metastatement ")" 
           
                                       |   ruleSubproofAssertion         
                                        
                                       |   contextDefinition 
           
                                       |   proofAssertion
       
                                       |   metavariable 

                                       ;

ruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;

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
