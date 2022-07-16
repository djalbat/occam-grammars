"use strict";

const bnf = `document                             ::=   ( topLevelInstruction | verticalSpace | error )+ ;



topLevelInstruction                  ::=   rule 

                                       |   axiom 

                                       |   lemma 

                                       |   theorem 

                                       |   conjecture 

                                       |   metalemma 

                                       |   metatheorem 

                                       |   metaconjecture

                                       |   typeDeclaration 
                                           
                                       |   variableDeclaration 
                                           
                                       |   comparatorDeclaration 
                                           
                                       |   combinatorDeclaration 
                                           
                                       |   constructorDeclaration 
                                           
                                       |   disjointTypeDeclaration 
                                           
                                       |   metavariableDeclaration 
                                           
                                       |   dependentTypeDeclaration 
                                           
                                       |   typesDeclaration 
                                           
                                       |   variablesDeclaration 
                                           
                                       |   comparatorsDeclaration 
                                           
                                       |   combinatorsDeclaration 
                                           
                                       |   constructorsDeclaration 
                                           
                                       |   disjointTypesDeclaration 
                                           
                                       |   metavariablesDeclaration 
                                           
                                       |   dependentTypesDeclaration 
                                           
                                       ;



verticalSpace                        ::=   <END_OF_LINE>+ ;



error                                ::=   . ;



rule                                 ::=   "Rule" "(" label ( "," label )* ")" <END_OF_LINE> ( premise | premises )? conclusion metaproof? ;

axiom                                ::=   "Axiom" "(" label ( "," label )* ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) ; 

lemma                                ::=   "Lemma" "(" label ( "," label )* ")"? <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof ;

theorem                              ::=   "Theorem" "(" label ( "," label )* ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof ;

conjecture                           ::=   "Conjecture" "(" label ( "," label )* ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof? ;

metalemma                            ::=   "Metalemma" "(" label ( "," label )* ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) metaproof ;

metatheorem                          ::=   "Metatheorem" "(" label ( "," label )* ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) metaproof ;

metaconjecture                       ::=   "Metaconjecture" "(" label ( "," label )* ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) ;

typeDeclaration                      ::=   "Type" type ( ":" type )? <END_OF_LINE> ;
 
variableDeclaration                  ::=   "Variable" variable ":" type <END_OF_LINE> ;
 
comparatorDeclaration                ::=   "Comparator" statement <END_OF_LINE> ;
 
combinatorDeclaration                ::=   "Combinator" expression ( ":" type )? <END_OF_LINE> ;
 
constructorDeclaration               ::=   "Constructor" term ( ":" type )? <END_OF_LINE> ;
 
disjointTypeDeclaration              ::=   "DisjointType" disjointType ":" type ( "," type )+ <END_OF_LINE> ;
                                       
metavariableDeclaration              ::=   "Metavariable" metavariable ":" ( "Statement" | "Context" ) <END_OF_LINE> ;
 
dependentTypeDeclaration             ::=   "DependentType" dependentType ":" type <END_OF_LINE> ;
                                       
typesDeclaration                     ::=   "Types" type ( ":"  type )? <END_OF_LINE> ;

variablesDeclaration                 ::=   "Variables" variable ( "," variable )+ ":" type <END_OF_LINE> ;
 
comparatorsDeclaration               ::=   "Comparators" statement ( "," statement )+ <END_OF_LINE> ;
 
combinatorsDeclaration               ::=   "Combinators" expression ( "," expression )+ ( ":" type )? <END_OF_LINE> ;
 
constructorsDeclaration              ::=   "Constructors" term ( "," term )+ ( ":" type )? <END_OF_LINE> ;
 
disjointTypesDeclaration             ::=   "DisjointTypes" disjointType ( "," disjointType )+ ":" type ( "," type )+ <END_OF_LINE> ;
 
metavariablesDeclaration             ::=   "Metavariables" metavariable ( "," metavariable )+ ":" ( "Statement" | "Context" ) <END_OF_LINE> ;
 
dependentTypesDeclaration            ::=   "DependentTypes" dependentType ( "," dependentType )+ ":" type <END_OF_LINE> ;
  

  
premise                              ::=   "Premise" <END_OF_LINE> unqualifiedMetastatement ;

premises                             ::=   "Premises" <END_OF_LINE> unqualifiedMetastatement unqualifiedMetastatement+ ;

conclusion                           ::=   "Conclusion" <END_OF_LINE> unqualifiedMetastatement ;



metaproof                            ::=   "Proof" <END_OF_LINE> 

                                           metastatementDefinition*

                                           metaProofDerivation? 
                                          
                                           qualifiedMetastatement ;
                                          
                                          

metaProofDerivation                  ::=   ( metaSublemma | qualifiedMetastatement | qualifiedStatement )+  

                                           "Therefore" <END_OF_LINE> ;                                           

metaIndicativeConditional            ::=   "Suppose" <END_OF_LINE> unqualifiedMetastatement+ 

                                           "Hence" <END_OF_LINE> qualifiedMetastatement ;

metaSublemma                         ::=   "Suppose" <END_OF_LINE> 

                                           ( metaSublemma | qualifiedMetastatement | qualifiedStatement )+ 

                                           ( 
                                          
                                             "Then" <END_OF_LINE> 
                                            
                                             ( metaSublemma | qualifiedMetastatement | qualifiedStatement )+ 
                                          
                                           )? 
                                          
                                           "Hence" <END_OF_LINE> qualifiedMetastatement ;



proof                                ::=   "Proof" <END_OF_LINE> 

                                           statementDefinition*

                                           proofDerivation? 
                                          
                                           qualifiedStatement ;
                                                                                         
                                                                                         
                                                                                         
proofDerivation                      ::=   ( sublemma | qualifiedStatement )+ 

                                           "Therefore" <END_OF_LINE> ;

indicativeConditional                ::=   "Suppose" <END_OF_LINE> unqualifiedStatement+ 

                                           "Hence" <END_OF_LINE> qualifiedStatement ;

sublemma                             ::=   "Suppose" <END_OF_LINE> 

                                           ( subLemma | qualifiedStatement )+ 

                                           ( 
                                          
                                             "Then" <END_OF_LINE> 
                                            
                                             ( subLemma | qualifiedStatement )+ 
                                          
                                           )? 
                                          
                                           "Hence" <END_OF_LINE> qualifiedStatement ;



metastatementDefinition              ::=   "Let" unqualifiedMetastatement ;                                           
                                          
statementDefinition                  ::=   "Let" unqualifiedStatement ;                                           



unqualifiedMetastatement!            ::=   metastatement <END_OF_LINE> 

                                       |   nonsense... <END_OF_LINE> 
                                       
                                       ;

qualifiedMetastatement!              ::=   metastatement qualification? <END_OF_LINE> 

                                       |   nonsense... qualification? <END_OF_LINE> 
                                        
                                       ;

unqualifiedStatement!                ::=   statement <END_OF_LINE>

                                       |   nonsense... <END_OF_LINE> 
                                       
                                       ;

qualifiedStatement!                  ::=   statement qualification? <END_OF_LINE> 

                                       |   nonsense... qualification? <END_OF_LINE> 
                                       
                                       ;



nonsense                             ::=   ( "by" | "from" | [name] | [custom] | [special] | [reserved] | [unassigned] )+ ;



qualification                        ::=   ( "by" | "from" ) reference ;



dependentType                        ::=   [name]<NO_WHITESPACE>"(" term ")" ;



metavariable                         ::=   [name] ( <NO_WHITESPACE>"(" term ")" )? ;

reference                            ::=   [name] ( <NO_WHITESPACE>"(" term ")" )? ;

context                              ::=   [name] ( <NO_WHITESPACE>"(" term ")" )? ;

label                                ::=   [name] ( <NO_WHITESPACE>"(" term ")" )? ;



disjointType                         ::=   [name] ;

variable                             ::=   [name] ;`;

export default bnf;
