"use strict";

const bnf = `document                             ::=   ( topLevelDeclaration | verticalSpace | error )+ ;



topLevelDeclaration                  ::=   rule 

                                       |   axiom 

                                       |   lemma 

                                       |   theorem 

                                       |   conjecture 

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



rule                                 ::=   "Rule" "(" label ( "," label )* ")" <END_OF_LINE> ( conditionalInference | unconditionalInference ) metaproof? ;

axiom                                ::=   "Axiom" "(" label ( "," label )* ")" <END_OF_LINE> ( unconditionalIndicative | conditionalIndicative ) ; 

lemma                                ::=   "Lemma" ( "(" label ( "," label )* ")" )? <END_OF_LINE> ( unconditionalIndicative | conditionalIndicative ) proof ;

theorem                              ::=   "Theorem" "(" label ( "," label )* ")" <END_OF_LINE> ( unconditionalIndicative | conditionalIndicative ) proof ;

conjecture                           ::=   "Conjecture" "(" label ( "," label )* ")" <END_OF_LINE> ( unconditionalIndicative | conditionalIndicative ) proof? ;

metalemma                            ::=   "Metalemma" ( "(" label ( "," label )* ")" )? <END_OF_LINE> ( metaUnconditionalIndicative | metaConditionalIndicative ) metaproof ;

metatheorem                          ::=   "Metatheorem" "(" label ( "," label )* ")" <END_OF_LINE> ( metaUnconditionalIndicative | metaConditionalIndicative ) metaproof ;

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



metaUnconditionalIndicative          ::=   metaConsequent ;

unconditionalIndicative              ::=   consequent ;



metaConditionalIndicative            ::=   "Suppose" <END_OF_LINE> metaAntecedent+ 

                                           "Then" <END_OF_LINE> metaConsequent ;

conditionalIndicative                ::=   "Suppose" <END_OF_LINE> antecedent+

                                           "Then" <END_OF_LINE> consequent ;
                                           


metaAntecedent                       ::=   unqualifiedMetastatement ;

antecedent                           ::=   unqualifiedStatement ;



metaConsequent                       ::=   unqualifiedMetastatement ;

consequent                           ::=   unqualifiedStatement ;



metaproof                            ::=   "Proof" <END_OF_LINE> metaDerivation ;
                                          
proof                                ::=   "Proof" <END_OF_LINE> derivation ;
                                                                                         


metaSubproof                         ::=   "Suppose" <END_OF_LINE> unqualifiedMetastatement+ metaSubDerivation ; 

subproof                             ::=   "Suppose" <END_OF_LINE> unqualifiedStatement+ subDerivation ;
                                           


metaDerivation                       ::=   (

                                             ( metaSubproof | qualifiedMetastatement | unqualifiedMetastatement )+  

                                             "Therefore" <END_OF_LINE> 
                                           
                                           )? 
                                           
                                           ( qualifiedMetastatement | unqualifiedMetastatement ) ;                                        

derivation                           ::=   (

                                             ( subproof | qualifiedStatement | unqualifiedStatement )+ 

                                             "Therefore" <END_OF_LINE>
                                             
                                           )? 
                                           
                                           ( qualifiedStatement | unqualifiedStatement ) ;                                           



metaSubDerivation                    ::=   (

                                             "Hence" <END_OF_LINE>

                                             ( metaSubproof | qualifiedMetastatement | unqualifiedMetastatement )+ 
                                             
                                           )? 
                                           
                                           "Then" <END_OF_LINE> 
                                           
                                           ( qualifiedMetastatement | unqualifiedMetastatement ) ;                                        

subDerivation                        ::=   (

                                             "Hence" <END_OF_LINE>

                                             ( subproof | qualifiedStatement | unqualifiedStatement )+ 
                                             
                                           )? 
                                           
                                           "Then" <END_OF_LINE> 
                                           
                                           ( qualifiedStatement | unqualifiedStatement ) ;                                           



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



argument                             ::=   term | type ;



dependentType                        ::=   [type]<NO_WHITESPACE>"(" argument ")" ;

disjointType                         ::=   [type] ;

type                                 ::=   [type] ;



metavariable                         ::=   [name] ( <NO_WHITESPACE>"(" argument ")" )? ;

reference                            ::=   [name] ( <NO_WHITESPACE>"(" term... ")" )? ;

context                              ::=   [name] ( <NO_WHITESPACE>"(" term... ")" )? ;

label                                ::=   [name] ( <NO_WHITESPACE>"(" term... ")" )? ;

variable                             ::=   [name] ;`;

export default bnf;
