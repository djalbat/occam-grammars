"use strict";

const bnf = `document                             ::=  ( topLevelDeclaration | verticalSpace | error )+ ;



topLevelDeclaration                  ::=  typeDeclaration 
                                           
                                       |  variableDeclaration 
                                           
                                       |  combinatorDeclaration 
                                           
                                       |  constructorDeclaration 
                                           
                                       |  disjointTypeDeclaration 
                                           
                                       |  metavariableDeclaration 
                                           
                                       |  dependentTypeDeclaration 
                                           
                                       |  rule 

                                       |  axiom 

                                       |  lemma 

                                       |  theorem 

                                       |  conjecture 

                                       |  metalemma 

                                       |  metatheorem 

                                       ;



verticalSpace                        ::=  <END_OF_LINE>+ ;



error.                               ::=  . ;



typeDeclaration                      ::=  "Type" type ( ":" type )? <END_OF_LINE> ;
 
variableDeclaration                  ::=  "Variable" variable ( ":" type )? <END_OF_LINE> ;
 
combinatorDeclaration                ::=  "Combinator" statement... <END_OF_LINE> ;
 
constructorDeclaration               ::=  "Constructor" term... ( ":" type )? <END_OF_LINE> ;
 
disjointTypeDeclaration              ::=  "DisjointType" disjointType ":" type ( "," type )+ <END_OF_LINE> ;
                                       
metavariableDeclaration              ::=  "Metavariable" metavariable ":" metaType <END_OF_LINE> ;
 
dependentTypeDeclaration             ::=  "DependentType" dependentType ":" type <END_OF_LINE> ;
                                         

  
rule                                 ::=  "Rule" parenthesisedLabels <END_OF_LINE> 

                                          ( 

                                            ( "Premises" <END_OF_LINE> premise premise+ ) 
                                             
                                            | 
                                             
                                            ( "Premise" <END_OF_LINE> premise ) 
                                             
                                          )?
                                             
                                          "Conclusion" <END_OF_LINE> conclusion 
                                           
                                          ruleProof?  ;                                         

axiom                                ::=  "Axiom" parenthesisedLabels <END_OF_LINE> 

                                          (
                                           
                                            (
                                           
                                              "Suppose" <END_OF_LINE> supposition+

                                              "Then" <END_OF_LINE> consequent 
                                             
                                            )
                                             
                                            |
                                             
                                            consequent
                                             
                                          ) ;

lemma                                ::=  "Lemma" parenthesisedLabels? <END_OF_LINE> 

                                          (
                                           
                                            (
                                           
                                              "Suppose" <END_OF_LINE> supposition+

                                              "Then" <END_OF_LINE> consequent 
                                             
                                            )
                                             
                                            |
                                            
                                            consequent
                                             
                                          )
                                           
                                          proof ;

theorem                              ::=  "Theorem" parenthesisedLabels <END_OF_LINE> 

                                          (
                                           
                                            (
                                           
                                              "Suppose" <END_OF_LINE> supposition+

                                              "Then" <END_OF_LINE> consequent 
                                             
                                            )
                                             
                                            |
                                             
                                            consequent
                                             
                                          )
                                           
                                          proof ;

conjecture                           ::=  "Conjecture" parenthesisedLabels <END_OF_LINE>

                                          (
                                           
                                            (
                                           
                                              "Suppose" <END_OF_LINE> supposition+

                                              "Then" <END_OF_LINE> consequent 
                                             
                                            )
                                             
                                            |
                                             
                                            consequent
                                             
                                          )
                                           
                                          proof? ;

metalemma                            ::=  "Metalemma" parenthesisedLabels? <END_OF_LINE> 

                                          ( 
                                           
                                            (
                                             
                                              "Suppose" <END_OF_LINE> metaSupposition+ 

                                              "Then" <END_OF_LINE> metaConsequent
                                               
                                            )
                                            
                                            | 
                                             
                                            metaConsequent
                                              
                                          ) 
                                           
                                          metaproof ;

metatheorem                          ::=  "Metatheorem" parenthesisedLabels <END_OF_LINE> 

                                          ( 
                                           
                                            (
                                             
                                              "Suppose" <END_OF_LINE> metaSupposition+ 

                                              "Then" <END_OF_LINE> metaConsequent
                                               
                                            )
                                            
                                            | 
                                             
                                            metaConsequent
                                              
                                          ) 
                                           
                                          metaproof ;



ruleProof                            ::=  "Proof" <END_OF_LINE> ruleDerivation ;
                                          
proof                                ::=  "Proof" <END_OF_LINE> derivation ;
                                                                                         
metaproof                            ::=  "Proof" <END_OF_LINE> metaDerivation ;                                 



ruleSubproof                         ::=  ( 

                                            ( "Premises" <END_OF_LINE> premise premise+ ) 
                                             
                                            | 
                                             
                                            ( "Premise" <END_OF_LINE> premise ) 
                                             
                                          )
                                            
                                          ruleSubDerivation ; 

subproof                             ::=  "Suppose" <END_OF_LINE> supposition+ subDerivation ;

metaSubproof                         ::=  "Suppose" <END_OF_LINE> metaSupposition+ metaSubDerivation ;



ruleDerivation                       ::=  (

                                            ( ruleSubproof | qualifiedMetastatement | unqualifiedMetastatement )+  

                                            "Therefore" <END_OF_LINE> 
                                           
                                          )? 
                                           
                                          ( qualifiedMetastatement | unqualifiedMetastatement ) ;                                        

derivation                           ::=  (

                                            ( subproof | qualifiedStatement | unqualifiedStatement )+ 

                                            "Therefore" <END_OF_LINE>
                                             
                                          )? 
                                           
                                          ( qualifiedStatement | unqualifiedStatement ) ;

metaDerivation                       ::=  (

                                            ( metaSubproof | qualifiedMetastatement | unqualifiedMetastatement )+  

                                            "Therefore" <END_OF_LINE> 
                                           
                                          )? 
                                           
                                          ( qualifiedMetastatement | unqualifiedMetastatement ) ;                                        



ruleSubDerivation                    ::=  (

                                            "Hence" <END_OF_LINE>

                                            ( ruleSubproof | qualifiedMetastatement | unqualifiedMetastatement )+ 
                                             
                                          )? 
                                           
                                          "Then" <END_OF_LINE> 
                                           
                                          ( qualifiedMetastatement | unqualifiedMetastatement ) ;                                        

subDerivation                        ::=  (

                                            "Hence" <END_OF_LINE>

                                            ( subproof | qualifiedStatement | unqualifiedStatement )+ 
                                             
                                          )? 
                                           
                                          "Then" <END_OF_LINE> 
                                           
                                          ( qualifiedStatement | unqualifiedStatement ) ;                                           

metaSubDerivation                    ::=  (

                                            "Hence" <END_OF_LINE>

                                            ( metaSubproof | qualifiedMetastatement | unqualifiedMetastatement )+ 
                                             
                                          )? 
                                           
                                          "Then" <END_OF_LINE> 
                                           
                                          ( qualifiedMetastatement | unqualifiedMetastatement ) ;                                           



premise                              ::=  unqualifiedMetastatement ;

conclusion                           ::=  unqualifiedMetastatement ;

supposition                          ::=  unqualifiedStatement ;

consequent                           ::=  unqualifiedStatement ;

metaSupposition                      ::=  unqualifiedMetastatement ;

metaConsequent                       ::=  unqualifiedMetastatement ;



unqualifiedMetastatement..           ::=  metastatement... <END_OF_LINE> 

                                       |  nonsense... <END_OF_LINE> 
                                       
                                       ;

qualifiedMetastatement..             ::=  metastatement... qualification <END_OF_LINE> 

                                       |  nonsense... qualification <END_OF_LINE> 
                                        
                                       ;                                     

unqualifiedStatement..               ::=  statement... <END_OF_LINE>

                                       |  nonsense... <END_OF_LINE> 
                                       
                                       ;

qualifiedStatement..                 ::=  statement... qualification <END_OF_LINE> 

                                       |  nonsense... qualification <END_OF_LINE> 
                                       
                                       ;



qualification                        ::=  ( "by" | "from" ) reference ;



dependentType                        ::=  [type]<NO_WHITESPACE>"(" argument... ")" ;

disjointType                         ::=  [type] ( "|" [type] )+ ;

metaType                             ::=  [meta-type] ;

type                                 ::=  [type] ;



parenthesisedLabels                  ::=  "(" labels... ")" ; 

labels                               ::=  label ( "," label )* ;



reference.                           ::=  [name] ( <NO_WHITESPACE>"(" term... ")" )? ;

label.                               ::=  [name] ( <NO_WHITESPACE>"(" term... ")" )? ;



nonsense.                            ::=  ( [type] | [symbol] | [operator] | [special] | [secondary-keyword] | [meta-type] | [name] | [unassigned] )+ ;



metavariable                         ::=  [name] ( <NO_WHITESPACE>"(" argument... ")" )? ;

variable                             ::=  [name] ;



metaArgument                         ::=  statement ( ) 

                                       |  metaType ( ) 
                                       
                                       ;

argument                             ::=  term ( ) 

                                       |  type ( )
                                       
                                       ;`;

export default bnf;
