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

                                       |  metaLemma 

                                       |  metatheorem 

                                       ;



verticalSpace                        ::=  <END_OF_LINE>+ ;



error.                               ::=  . ;



typeDeclaration                      ::=  "Type" type ( ":" type )? <END_OF_LINE> ;
 
variableDeclaration                  ::=  "Variable" variable ( ":" type )? <END_OF_LINE> ;
 
combinatorDeclaration                ::=  "Combinator" statement... <END_OF_LINE> ;
 
constructorDeclaration               ::=  "Constructor" term... ( ":" type )? <END_OF_LINE> ;
 
metavariableDeclaration              ::=  "Metavariable" metavariable ":" metaType <END_OF_LINE> ;
 

  
rule                                 ::=  "Rule" "(" label ( "," label )* ")" <END_OF_LINE> 

                                          ( 

                                            ( "Premises" <END_OF_LINE> premise premise+ ) 
                                             
                                            | 
                                             
                                            ( "Premise" <END_OF_LINE> premise ) 
                                             
                                          )?
                                             
                                          "Conclusion" <END_OF_LINE> conclusion 
                                           
                                          ruleProof? ;                                         

metaLemma                            ::=  "MetaLemma" ( "(" label ( "," label )* ")" )? <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> metaSupposition+ 

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          metaConsequent
                                                                                         
                                          metaproof ;

metatheorem                          ::=  "Metatheorem" "(" label ( "," label )* ")" <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> metaSupposition+ 

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          metaConsequent
                                           
                                          metaproof ;

axiom                                ::=  "Axiom" "(" label ( "," label )* ")" <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                             
                                          consequent ;

lemma                                ::=  "Lemma" ( "(" label ( "," label )* ")" )? <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          consequent
                                           
                                          proof ;

theorem                              ::=  "Theorem" "(" label ( "," label )* ")" <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                             
                                          consequent
                                           
                                          proof ;

conjecture                           ::=  "Conjecture" "(" label ( "," label )* ")" <END_OF_LINE>

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                             
                                          consequent
                                           
                                          proof? ;



ruleProof                            ::=  "Proof" <END_OF_LINE> ruleDerivation ;
                                          
metaproof                            ::=  "Proof" <END_OF_LINE> metaDerivation ;
                                                                                         
proof                                ::=  "Proof" <END_OF_LINE> derivation ;
                                                                                         


ruleSubproof                         ::=  ( 

                                            ( "Premises" <END_OF_LINE> premise premise+ ) 
                                             
                                            | 
                                             
                                            ( "Premise" <END_OF_LINE> premise ) 
                                             
                                          )
                                            
                                          ruleSubDerivation ; 

metaSubproof                         ::=  "Suppose" <END_OF_LINE> metaSupposition+ metaSubDerivation ;

subproof                             ::=  "Suppose" <END_OF_LINE> supposition+ subDerivation ;



ruleDerivation                       ::=  ( 

                                            ruleProofStep+ 
                                            
                                            "Therefore" <END_OF_LINE> 
                                            
                                          )? 
                                          
                                          lastRuleProofStep ;                                        

metaDerivation                       ::=  ( 

                                            metaproofStep+ 
                                            
                                            "Therefore" <END_OF_LINE> 
                                            
                                          )? 
                                          
                                          lastMetaproofStep ;                                        

derivation                           ::=  ( 

                                            proofStep+ 
                                            
                                            "Therefore" <END_OF_LINE> 
                                            
                                          )? 
                                          
                                          lastProofStep ;                                        



ruleSubDerivation                    ::=  (

                                            "Hence" <END_OF_LINE>

                                            ruleProofStep+ 
                                             
                                          )? 
                                           
                                          "Then" <END_OF_LINE> 
                                           
                                          lastRuleProofStep ;                                        

metaSubDerivation                    ::=  (

                                            "Hence" <END_OF_LINE>

                                            metaproofStep+ 
                                             
                                          )? 
                                           
                                          "Then" <END_OF_LINE> 
                                           
                                          lastMetaproofStep ;                                        

subDerivation                        ::=  (

                                            "Hence" <END_OF_LINE>

                                            proofStep+ 
                                             
                                          )? 
                                           
                                          "Then" <END_OF_LINE> 
                                           
                                          lastProofStep ;                                        



premise..                            ::=  unqualifiedMetastatement 

                                       |  unqualifiedStatement
                                       
                                       |  nonsense
                                       
                                       ;

conclusion..                         ::=  unqualifiedMetastatement 

                                       |  unqualifiedStatement
                                       
                                       |  nonsense
                                       
                                       ;

metaSupposition..                    ::=  unqualifiedMetastatement 

                                       |  unqualifiedStatement 

                                       |  nonsense
                                       
                                       ;

metaConsequent..                     ::=  unqualifiedMetastatement 

                                       |  unqualifiedStatement 

                                       |  nonsense
                                       
                                       ;

supposition..                        ::=  unqualifiedStatement 

                                       |  nonsense ;

consequent..                         ::=  unqualifiedStatement 

                                       |  nonsense ;



ruleProofStep..                      ::=  unqualifiedMetastatement 

                                       |  qualifiedMetastatement 
                                      
                                       |  unqualifiedStatement 
                                      
                                       |  qualifiedStatement 
                                      
                                       |  ruleSubproof 

                                       |  nonsense 

                                       ;  

metaproofStep..                      ::=  unqualifiedMetastatement 

                                       |  qualifiedMetastatement 
                                      
                                       |  unqualifiedStatement 
                                      
                                       |  qualifiedStatement 
                                      
                                       |  metaSubproof 

                                       |  nonsense 

                                       ;  

proofStep..                          ::=  unqualifiedStatement 
                                      
                                       |  qualifiedStatement 
                                      
                                       |  subproof 

                                       |  nonsense 

                                       ;  



lastRuleProofStep..                  ::=  unqualifiedMetastatement 

                                       |  qualifiedMetastatement 
                                      
                                       |  unqualifiedStatement 
                                      
                                       |  qualifiedStatement 
                                      
                                       |  nonsense 

                                       ;

lastMetaproofStep..                  ::=  unqualifiedMetastatement 

                                       |  qualifiedMetastatement 
                                      
                                       |  unqualifiedStatement 
                                      
                                       |  qualifiedStatement 
                                      
                                       |  nonsense 

                                       ;

lastProofStep..                      ::=  unqualifiedStatement 
                                       
                                       |  qualifiedStatement 

                                       |  nonsense 

                                       ;



unqualifiedMetastatement             ::=  metastatement... <END_OF_LINE>;

qualifiedMetastatement               ::=  metastatement... ( "by" | "from" ) reference <END_OF_LINE> ;                                     

unqualifiedStatement                 ::=  statement... <END_OF_LINE> ;

qualifiedStatement                   ::=  statement... ( "by" | "from" ) reference <END_OF_LINE> ;

nonsense                             ::=  ( [type] | [symbol] | [operator] | [special] | [secondary-keyword] | [meta-type] | [name] | [unassigned] )+ <END_OF_LINE> ;



reference.                           ::=  metavariable ;

label.                               ::=  metavariable ;



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
