"use strict";

const bnf = `document                             ::=  ( topLevelDeclaration | topLevelAssertion | verticalSpace | error )+ ;



topLevelDeclaration                  ::=  typeDeclaration 
                                           
                                       |  variableDeclaration 
                                           
                                       |  combinatorDeclaration 
                                           
                                       |  constructorDeclaration 
                                           
                                       |  disjointTypeDeclaration 
                                           
                                       |  metavariableDeclaration 
                                           
                                       |  dependentTypeDeclaration 
                                           
                                       ;



topLevelAssertion                    ::=  rule 

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
                                           
                                          proof? ;                                         

metaLemma                            ::=  "MetaLemma" ( "(" label ( "," label )* ")" )? <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+ 

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          consequent
                                                                                         
                                          proof ;

metatheorem                          ::=  "Metatheorem" "(" label ( "," label )* ")" <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+ 

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          consequent
                                           
                                          proof ;

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



proof                                ::=  "Proof" <END_OF_LINE> derivation ;

subproof                             ::=  "Suppose" <END_OF_LINE> supposition+ subDerivation ;

derivation                           ::=  ( 

                                            proofStep+ 
                                            
                                            "Therefore" <END_OF_LINE> 
                                            
                                          )? 
                                          
                                          lastProofStep ;                                        

subDerivation                        ::=  (

                                            "Hence" <END_OF_LINE>
    
                                            proofStep+ 
                                             
                                          )? 
                                           
                                          "Then" <END_OF_LINE> 
                                           
                                          lastProofStep ;                                        

premise..                            ::=  unqualifiedStatement | nonsense ;

conclusion..                         ::=  unqualifiedStatement | nonsense ;

supposition..                        ::=  unqualifiedStatement | nonsense ;

consequent..                         ::=  unqualifiedStatement | nonsense ;

proofStep..                          ::=  unqualifiedStatement 
                                      
                                       |  qualifiedStatement 
                                      
                                       |  subproof 

                                       |  nonsense 

                                       ;  

lastProofStep..                      ::=  unqualifiedStatement 
                                       
                                       |  qualifiedStatement 

                                       |  nonsense 

                                       ;



unqualifiedStatement                 ::=  statement... <END_OF_LINE> ;

qualifiedStatement                   ::=  statement... ( 

                                                         "trivially" 
                                                         
                                                         | 
                                                         
                                                         ( ( "by" | "from" ) reference ) 
                                                         
                                                       ) <END_OF_LINE> ;

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
