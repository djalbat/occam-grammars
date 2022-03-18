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
                                           
                                       |   combinatorDeclaration 
                                           
                                       |   constructorDeclaration 
                                           
                                       |   disjointTypeDeclaration 
                                           
                                       |   metavariableDeclaration 
                                           
                                       |   dependentTypeDeclaration 
                                           
                                       |   abbreviationDeclaration 
                                           
                                       |   typesDeclaration 
                                           
                                       |   variablesDeclaration 
                                           
                                       |   combinatorsDeclaration 
                                           
                                       |   constructorsDeclaration 
                                           
                                       |   disjointTypesDeclaration 
                                           
                                       |   metavariablesDeclaration 
                                           
                                       |   dependentTypesDeclaration 
                                           
                                       |   abbreviationsDeclaration
                                       
                                       ;



verticalSpace                        ::=   <END_OF_LINE>+ ;



error                                ::=   . ;



rule                                 ::=   "Rule" "(" labels ")" <END_OF_LINE> ( premise | premises )? conclusion metaproof? ;

axiom                                ::=   "Axiom" "(" labels ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) ; 

lemma                                ::=   "Lemma" "(" labels ")"? <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof ;

theorem                              ::=   "Theorem" "(" labels ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof ;

conjecture                           ::=   "Conjecture" "(" labels ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof? ;

metalemma                            ::=   "Metalemma" "(" labels ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) metaproof ;

metatheorem                          ::=   "Metatheorem" "(" labels ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) metaproof ;

metaconjecture                       ::=   "Metaconjecture" "(" labels ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) ;

typeDeclaration                      ::=   "Type" typeName ( ":" typeName )? <END_OF_LINE> ;
 
variableDeclaration                  ::=   "Variable" variableName ":" typeName <END_OF_LINE> ;
 
combinatorDeclaration                ::=   "Combinator" expression ( ":" typeName )? <END_OF_LINE> ;
 
constructorDeclaration               ::=   "Constructor" term ( ":" typeName )? <END_OF_LINE> ;
 
disjointTypeDeclaration              ::=   "DisjointType" typeName ":" typeNames <END_OF_LINE> ;
                                       
metavariableDeclaration              ::=   "Metavariable" metavariableName typeParameter? ":" ( "Statement" | "Context" ) <END_OF_LINE> ;
 
dependentTypeDeclaration             ::=   "DependentType" typeName typeParameter ":" typeName <END_OF_LINE> ;
                                       
abbreviationDeclaration              ::=   "Abbreviation" abbreviation <END_OF_LINE> ;

typesDeclaration                     ::=   "Types" typeNames ( ":" typeName )? <END_OF_LINE> ;

variablesDeclaration                 ::=   "Variables" variableName ( "," variableName )+ ":" typeName <END_OF_LINE> ;
 
combinatorsDeclaration               ::=   "Combinators" expression ( "," expression )+ ( ":" typeName )? <END_OF_LINE> ;
 
constructorsDeclaration              ::=   "Constructors" term ( "," term )+ ( ":" typeName )? <END_OF_LINE> ;
 
disjointTypesDeclaration             ::=   "DisjointTypes" typeNames ":" typeNames <END_OF_LINE> ;
 
metavariablesDeclaration             ::=   "Metavariables" metavariableName typeParameter? ( "," metavariableName typeParameter? )+ ":" ( "Statement" | "Context" ) <END_OF_LINE> ;
 
dependentTypesDeclaration            ::=   "DependentTypes" typeName typeParameter ( "," typeName typeParameter )+ ":" typeName <END_OF_LINE> ;
 
abbreviationsDeclaration             ::=   "Abbreviations" abbreviation ( "," abbreviation )+ <END_OF_LINE> ;
 

  
premise                              ::=   "Premise" <END_OF_LINE> unqualifiedMetastatement ;

premises                             ::=   "Premises" <END_OF_LINE> unqualifiedMetastatement unqualifiedMetastatement+ ;

conclusion                           ::=   "Conclusion" <END_OF_LINE> qualifiedMetastatement ;



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



unqualifiedMetastatement             ::=   metastatement <END_OF_LINE> 

                                       |   nonsense! <END_OF_LINE> 
                                       
                                       ;

unqualifiedStatement                 ::=   statement <END_OF_LINE>

                                       |   nonsense! <END_OF_LINE> 
                                       
                                       ;



qualifiedMetastatement               ::=   metastatement qualification? <END_OF_LINE> 

                                       |   nonsense! qualification? <END_OF_LINE> 
                                        
                                       ;

qualifiedStatement                   ::=   statement qualification? <END_OF_LINE> 

                                       |   nonsense! qualification? <END_OF_LINE> 
                                       
                                       ;



nonsense                             ::=   ( "by" | "from" | [custom] | [special] | [reserved] | [name] | [unassigned] )+ ;



qualification                        ::=   ( "by" | "from" ) reference ;



typeParameter                        ::=   ( <NO_WHITESPACE>"(" typeName ")" ) ;



abbreviation                         ::=   [custom] "for" [custom] | name "for" name ;



metavariable                         ::=   metavariableName ( <NO_WHITESPACE>"(" term ")" )? ;

reference                            ::=   referenceName ( <NO_WHITESPACE>"(" term ")" )? ;

context                              ::=   contextName ( <NO_WHITESPACE>"(" term ")" )? ;

label                                ::=   labelName ( <NO_WHITESPACE>"(" term ")" )? ;



typeNames                            ::=   typeName ( "," typeName )* ;

labels                               ::=   label ( "," label )* ;



metavariableName                     ::=   [name] ;

referenceName                        ::=   [name] ;

variableName                         ::=   [name] ;

contextName                          ::=   [name] ;

labelName                            ::=   [name] ;

typeName                             ::=   [name] ;

name                                 ::=   [name] ;`;

export default bnf;
