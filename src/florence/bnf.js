"use strict";

const bnf = `document                             ::=   ( topLevelDeclaration | verticalSpace | error )+ ;



topLevelDeclaration                  ::=   axiom 

                                       |   lemma 

                                       |   theorem 

                                       |   conjecture 

                                       |   rule 

                                       |   metalemma 

                                       |   typeDeclaration 
                                           
                                       |   variableDeclaration 
                                           
                                       |   combinatorDeclaration 
                                           
                                       |   constructorDeclaration 
                                           
                                       |   disjointTypeDeclaration 
                                           
                                       |   metavariableDeclaration 
                                           
                                       |   dependentTypeDeclaration 
                                           
                                       ;



verticalSpace                        ::=   <END_OF_LINE>+ ;



error                                ::=   . ;



axiom                                ::=   "Axiom" "(" label ( "," label )* ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) ; 

lemma                                ::=   "Lemma" ( "(" label ( "," label )* ")" )? <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof ;

theorem                              ::=   "Theorem" "(" label ( "," label )* ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof ;

conjecture                           ::=   "Conjecture" "(" label ( "," label )* ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof? ;

rule                                 ::=   "Rule" "(" label ( "," label )* ")" <END_OF_LINE> ( conditionalInference | unconditionalInference ) metaproof? ;

metalemma                            ::=   "Metalemma" ( "(" label ( "," label )* ")" )? <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) metaproof ;

metatheorem                          ::=   "Metatheorem" "(" label ( "," label )* ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) metaproof ;

typeDeclaration                      ::=   "Type" type ( ":" type )? <END_OF_LINE> ;
 
variableDeclaration                  ::=   "Variable" variable ( ":" type )? <END_OF_LINE> ;
 
combinatorDeclaration                ::=   "Combinator" statement... <END_OF_LINE> ;
 
constructorDeclaration               ::=   "Constructor" term... ( ":" type )? <END_OF_LINE> ;
 
disjointTypeDeclaration              ::=   "DisjointType" disjointType ":" type ( "," type )+ <END_OF_LINE> ;
                                       
metavariableDeclaration              ::=   "Metavariable" metavariable ":" ( "Statement" | "Context" ) <END_OF_LINE> ;
 
dependentTypeDeclaration             ::=   "DependentType" dependentType ":" type <END_OF_LINE> ;
                                         

  
unconditionalInference               ::=   "Conclusion" <END_OF_LINE> conclusion ;  

conditionalInference                 ::=   ( 

                                             ( "Premises" <END_OF_LINE> premises ) 
                                             
                                             | 
                                             
                                             ( "Premise" <END_OF_LINE> premise ) 
                                             
                                           )  

                                           "Conclusion" <END_OF_LINE> conclusion ;



premise                              ::=   unqualifiedMetastatement ;

premises                             ::=   unqualifiedMetastatement unqualifiedMetastatement+ ;

conclusion                           ::=   unqualifiedMetastatement ;



metaIndicativeConditional            ::=   "Suppose" <END_OF_LINE> unqualifiedMetastatement+ 

                                           "Then" <END_OF_LINE> unqualifiedMetastatement ;

indicativeConditional                ::=   "Suppose" <END_OF_LINE> unqualifiedStatement+

                                           "Then" <END_OF_LINE> unqualifiedStatement ;
                                           


metaproof                            ::=   "Proof" <END_OF_LINE> 

                                           metaDeclaration*
                                           
                                           ( metaDerivation "Therefore" <END_OF_LINE> )?
                                             
                                           qualifiedMetastatement ;

                                          
proof                                ::=   "Proof" <END_OF_LINE> 

                                           declaration*
                                           
                                           ( derivation "Therefore" <END_OF_LINE> )?
                                             
                                           qualifiedStatement ;
                                                                                         


metaSubproof                         ::=   "Suppose" <END_OF_LINE> unqualifiedMetastatement+ 

                                           ( "Hence" <END_OF_LINE> metaDerivation )?

                                           "Therefore" <END_OF_LINE> ( qualifiedMetastatement | unqualifiedMetastatement ) ;

subproof                             ::=   "Suppose" <END_OF_LINE> unqualifiedStatement+ 

                                           ( "Hence" <END_OF_LINE> derivation )?
                                                                                         
                                           "Therefore" <END_OF_LINE> ( qualifiedStatement | unqualifiedStatement ) ;
                                           
                                           

metaDeclaration                      ::=   "Let" unqualifiedMetastatement ;                                           
                                          
metaDerivation                       ::=   ( metaSubproof | qualifiedMetastatement | unqualifiedMetastatement )+  ;                                           



declaration                          ::=   "Let" unqualifiedStatement ;                                           

derivation                           ::=   ( subproof | qualifiedStatement | unqualifiedStatement )+  ;



unqualifiedMetastatement!            ::=   metastatement... <END_OF_LINE> 

                                       |   nonsense... <END_OF_LINE> 
                                       
                                       ;

qualifiedMetastatement!              ::=   metastatement... qualification <END_OF_LINE> 

                                       |   nonsense... qualification <END_OF_LINE> 
                                        
                                       ;
                                       
                                       

unqualifiedStatement!                ::=   statement... <END_OF_LINE>

                                       |   nonsense... <END_OF_LINE> 
                                       
                                       ;

qualifiedStatement!                  ::=   statement... qualification <END_OF_LINE> 

                                       |   nonsense... qualification <END_OF_LINE> 
                                       
                                       ;



qualification                        ::=   "by" ( reference | "construction" )

                                       |   "from" reference 
                                       
                                       ;



nonsense                             ::=   ( "by" | "from" | [type] | [operator] | [special] | [reserved] | [name] | [unassigned] )+ ;



argument                             ::=   term | type  ;



dependentType                        ::=   [type]<NO_WHITESPACE>"(" argument ")" ;

disjointType                         ::=   [type] ;

type                                 ::=   [type] ;



metavariable                         ::=   [name] ( <NO_WHITESPACE>"(" argument ")" )? ;

reference                            ::=   [name] ( <NO_WHITESPACE>"(" term... ")" )? ;

context                              ::=   [name] ( <NO_WHITESPACE>"(" term... ")" )? ;

label                                ::=   [name] ( <NO_WHITESPACE>"(" term... ")" )? ;

variable                             ::=   [name] ;`;

export default bnf;
