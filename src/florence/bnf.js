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
 
metavariableDeclaration              ::=  "Metavariable" metavariable ":" metaType <END_OF_LINE> ;
 

  
rule                                 ::=  "Rule" labels <END_OF_LINE> 

                                          ( 

                                            ( "Premises" <END_OF_LINE> premise premise+ ) 
                                             
                                            | 
                                             
                                            ( "Premise" <END_OF_LINE> premise ) 
                                             
                                          )?
                                             
                                          "Conclusion" <END_OF_LINE> conclusion 
                                           
                                          ruleProof?  ;                                         

axiom                                ::=  "Axiom" labels <END_OF_LINE> 

                                          (
                                           
                                            (
                                           
                                              "Suppose" <END_OF_LINE> supposition+

                                              "Then" <END_OF_LINE> consequent 
                                             
                                            )
                                             
                                            |
                                             
                                            consequent
                                             
                                          ) ;

lemma                                ::=  "Lemma" labels? <END_OF_LINE> 

                                          (
                                           
                                            (
                                           
                                              "Suppose" <END_OF_LINE> supposition+

                                              "Then" <END_OF_LINE> consequent 
                                             
                                            )
                                             
                                            |
                                            
                                            consequent
                                             
                                          )
                                           
                                          proof ;

theorem                              ::=  "Theorem" labels <END_OF_LINE> 

                                          (
                                           
                                            (
                                           
                                              "Suppose" <END_OF_LINE> supposition+

                                              "Then" <END_OF_LINE> consequent 
                                             
                                            )
                                             
                                            |
                                             
                                            consequent
                                             
                                          )
                                           
                                          proof ;

conjecture                           ::=  "Conjecture" labels <END_OF_LINE>

                                          (
                                           
                                            (
                                           
                                              "Suppose" <END_OF_LINE> supposition+

                                              "Then" <END_OF_LINE> consequent 
                                             
                                            )
                                             
                                            |
                                             
                                            consequent
                                             
                                          )
                                           
                                          proof? ;

metalemma                            ::=  "Metalemma" labels? <END_OF_LINE> 

                                          ( 
                                           
                                            (
                                             
                                              "Suppose" <END_OF_LINE> metaSupposition+ 

                                              "Then" <END_OF_LINE> metaConsequent
                                               
                                            )
                                            
                                            | 
                                             
                                            metaConsequent
                                              
                                          ) 
                                           
                                          metaproof ;

metatheorem                          ::=  "Metatheorem" labels <END_OF_LINE> 

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

qualifiedMetastatement..             ::=  metastatement... reference <END_OF_LINE> 

                                       |  nonsense... reference <END_OF_LINE> 
                                        
                                       ;                                     

unqualifiedStatement..               ::=  statement... <END_OF_LINE>

                                       |  nonsense... <END_OF_LINE> 
                                       
                                       ;

qualifiedStatement..                 ::=  statement... reference <END_OF_LINE> 

                                       |  nonsense... reference <END_OF_LINE> 
                                       
                                       ;



nonsense.                            ::=  ( [type] | [symbol] | [operator] | [special] | [secondary-keyword] | [meta-type] | [name] | [unassigned] )+ ;



reference.                           ::=  ( "by" | "from" ) metavariable ;

labels.                              ::=  "(" metavariable ( "," metavariable )* ")" ; 



metaArgument                         ::=  statement ( ) 

                                       |  metaType ( ) 
                                       
                                       ;

argument                             ::=  term ( ) 

                                       |  type ( )
                                       
                                       ;



metavariable                         ::=  [name] ( <NO_WHITESPACE>"(" argument... ")" )? ;

variable                             ::=  [name] ;



metaType                             ::=  [meta-type] ;

type                                 ::=  [type] ;`;

export default bnf;
