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
                                           
                                       |   operatorDeclaration 
                                           
                                       |   constructorDeclaration 
                                           
                                       |   disjointTypeDeclaration 
                                           
                                       |   metavariableDeclaration 
                                           
                                       |   dependentTypeDeclaration 
                                           
                                       |   abbreviationDeclaration 
                                           
                                       |   typesDeclaration 
                                           
                                       |   variablesDeclaration 
                                           
                                       |   operatorsDeclaration 
                                           
                                       |   constructorsDeclaration 
                                           
                                       |   disjointTypesDeclaration 
                                           
                                       |   metavariablesDeclaration 
                                           
                                       |   dependentTypesDeclaration 
                                           
                                       |   abbreviationsDeclaration
                                       
                                       ;



verticalSpace                        ::=   <END_OF_LINE>+ ;



error                                ::=   . ;



rule                                 ::=   "Rule" "(" labels ")" <END_OF_LINE> ( premise | premises )? conclusion metaproof? ;

axiom                                ::=   "Axiom" "(" labels ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement | unqualifiedNonsense ) ; 

lemma                                ::=   "Lemma" "(" labels ")"? <END_OF_LINE> ( indicativeConditional | unqualifiedStatement | unqualifiedNonsense ) proof ;

theorem                              ::=   "Theorem" "(" labels ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement | unqualifiedNonsense ) proof ;

conjecture                           ::=   "Conjecture" "(" labels ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement | unqualifiedNonsense ) proof? ;

metalemma                            ::=   "Metalemma" "(" labels ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement | unqualifiedNonsense ) metaproof ;

metatheorem                          ::=   "Metatheorem" "(" labels ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement | unqualifiedNonsense ) metaproof ;

metaconjecture                       ::=   "Metaconjecture" "(" labels ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement | unqualifiedNonsense ) ;

typeDeclaration                      ::=   "Type" typeName ( ":" typeName )? <END_OF_LINE> ;
 
variableDeclaration                  ::=   "Variable" variableName ":" typeName <END_OF_LINE> ;
 
operatorDeclaration                  ::=   "Operator" expression ( ":" typeName )? <END_OF_LINE> ;
 
constructorDeclaration               ::=   "Constructor" term ( ":" typeName )? <END_OF_LINE> ;
 
disjointTypeDeclaration              ::=   "DisjointType" typeName ":" typeNames <END_OF_LINE> ;
                                       
metavariableDeclaration              ::=   "Metavariable" metavariableName typeParameter? ":" ( "Statement" | "Context" ) <END_OF_LINE> ;
 
dependentTypeDeclaration             ::=   "DependentType" typeName typeParameter ":" typeName <END_OF_LINE> ;
                                       
abbreviationDeclaration              ::=   "Abbreviation" abbreviation <END_OF_LINE> ;

typesDeclaration                     ::=   "Types" typeNames ( ":" typeName )? <END_OF_LINE> ;

variablesDeclaration                 ::=   "Variables" variableName ( "," variableName )+ ":" typeName <END_OF_LINE> ;
 
operatorsDeclaration                 ::=   "Operators" expression ( "," expression )+ ( ":" typeName )? <END_OF_LINE> ;
 
constructorsDeclaration              ::=   "Constructors" term ( "," term )+ ( ":" typeName )? <END_OF_LINE> ;
 
disjointTypesDeclaration             ::=   "DisjointTypes" typeNames ":" typeNames <END_OF_LINE> ;
 
metavariablesDeclaration             ::=   "Metavariables" metavariableName typeParameter? ( "," metavariableName typeParameter? )+ ":" ( "Statement" | "Context" ) <END_OF_LINE> ;
 
dependentTypesDeclaration            ::=   "DependentTypes" typeName typeParameter ( "," typeName typeParameter )+ ":" typeName <END_OF_LINE> ;
 
abbreviationsDeclaration             ::=   "Abbreviations" abbreviation ( "," abbreviation )+ <END_OF_LINE> ;
 

  
premise                              ::=   "Premise" <END_OF_LINE> ( unqualifiedMetastatement | unqualifiedNonsense ) ;

premises                             ::=   "Premises" <END_OF_LINE> ( unqualifiedMetastatement | unqualifiedNonsense ) ( unqualifiedMetastatement | unqualifiedNonsense )+ ;

conclusion                           ::=   "Conclusion" <END_OF_LINE> ( qualifiedMetastatement | qualifiedNonsense ) ;



metaproof                            ::=   "Proof" <END_OF_LINE> 

                                           metastatementDefinition*

                                           nonsenseDefinition*

                                           metaProofDerivation? 
                                          
                                           ( qualifiedMetastatement | qualifiedNonsense ) ;
                                          
                                          

metaProofDerivation                  ::=   ( metaSublemma | qualifiedMetastatement | qualifiedStatement | qualifiedNonsense )+  

                                           "Therefore" <END_OF_LINE> ;                                           

metaIndicativeConditional            ::=   "Suppose" <END_OF_LINE> ( unqualifiedMetastatement | unqualifiedNonsense )+ 

                                           "Hence" <END_OF_LINE> ( qualifiedMetastatement | qualifiedNonsense ) ;

metaSublemma                         ::=   "Suppose" <END_OF_LINE> 

                                           ( metaSublemma | qualifiedMetastatement | qualifiedStatement | qualifiedNonsense )+ 

                                           ( 
                                          
                                             "Then" <END_OF_LINE> 
                                            
                                             ( metaSublemma | qualifiedMetastatement | qualifiedStatement | qualifiedNonsense )+ 
                                          
                                           )? 
                                          
                                           "Hence" <END_OF_LINE> ( qualifiedMetastatement | qualifiedNonsense ) ;



proof                                ::=   "Proof" <END_OF_LINE> 

                                           statementDefinition*

                                           nonsenseDefinition*

                                           proofDerivation? 
                                          
                                           ( qualifiedStatement | qualifiedNonsense ) ;
                                                                                         
                                                                                         
                                                                                         
proofDerivation                      ::=   ( sublemma | qualifiedStatement | qualifiedNonsense )+ 

                                           "Therefore" <END_OF_LINE> ;

indicativeConditional                ::=   "Suppose" <END_OF_LINE> ( unqualifiedStatement | unqualifiedNonsense )+ 

                                           "Hence" <END_OF_LINE> ( qualifiedStatement | qualifiedNonsense ) ;

sublemma                             ::=   "Suppose" <END_OF_LINE> 

                                           ( subLemma | qualifiedStatement | qualifiedNonsense )+ 

                                           ( 
                                          
                                             "Then" <END_OF_LINE> 
                                            
                                             ( subLemma | qualifiedStatement | qualifiedNonsense )+ 
                                          
                                           )? 
                                          
                                           "Hence" <END_OF_LINE> ( qualifiedStatement | qualifiedNonsense ) ;



metastatementDefinition              ::=   "Let" unqualifiedMetastatement ;                                           
                                          
statementDefinition                  ::=   "Let" unqualifiedStatement ;                                           

nonsenseDefinition                   ::=   "Let" unqualifiedNonsense ;                                           



unqualifiedMetastatement             ::=   metastatement! <END_OF_LINE> ;

unqualifiedStatement                 ::=   statement! <END_OF_LINE> ;

unqualifiedNonsense                  ::=   nonsense! <END_OF_LINE> ;



qualifiedMetastatement               ::=   metastatement! qualification? <END_OF_LINE> ;

qualifiedStatement                   ::=   statement! qualification? <END_OF_LINE> ;

qualifiedNonsense                    ::=   nonsense! qualification? <END_OF_LINE> ;



nonsense                             ::=   ( [name] | [custom] | [special] | [reserved] | [unassigned] )+ ;



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
