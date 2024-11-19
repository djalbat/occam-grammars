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
 

  
rule                                 ::=  "Rule" "(" labels... ")" <END_OF_LINE> 

                                          ( 

                                            ( "Premises" <END_OF_LINE> premise premise+ ) 
                                             
                                            | 
                                             
                                            ( "Premise" <END_OF_LINE> premise ) 
                                             
                                          )?
                                             
                                          "Conclusion" <END_OF_LINE> conclusion 
                                           
                                          proof? ;                                         

metaLemma                            ::=  "MetaLemma" ( "(" labels... ")" )? <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+ 

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          consequent
                                                                                         
                                          proof ;

metatheorem                          ::=  "Metatheorem" "(" labels... ")" <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+ 

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          consequent
                                           
                                          proof ;

axiom                                ::=  "Axiom" "(" labels... ")" <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                             
                                          consequent ;

lemma                                ::=  "Lemma" ( "(" labels... ")" )? <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          consequent
                                           
                                          proof ;

theorem                              ::=  "Theorem" "(" labels... ")" <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                             
                                          consequent
                                           
                                          proof ;

conjecture                           ::=  "Conjecture" "(" labels... ")" <END_OF_LINE>

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                             
                                          consequent
                                           
                                          proof? ;



proof                                ::=  "Proof" <END_OF_LINE> derivation ;

subproof                             ::=  "Suppose" <END_OF_LINE> supposition+ subDerivation ;

derivation                           ::=  ( 

                                            ( proofStep | subproof )+ 
                                            
                                            "Therefore" <END_OF_LINE> 
                                            
                                          )? 
                                          
                                          proofStep ;                                        

subDerivation                        ::=  (

                                            "Hence" <END_OF_LINE>
    
                                            ( proofStep | subproof )+ 
                                                                                         
                                          )? 
                                           
                                          "Then" <END_OF_LINE> 
                                           
                                          proofStep ;                                        



premise.                             ::=  statement... <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;

conclusion.                          ::=  statement... <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;

supposition.                         ::=  statement... <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;

consequent.                          ::=  statement... <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;

proofStep.                           ::=  statement... ( ( "by" | "from" ) reference )? <END_OF_LINE>  

                                       |  nonsense... ( ( "by" | "from" ) reference )? <END_OF_LINE>
                                       
                                       ;



labels                               ::=  label ( "," label )* ;



label.                               ::=  metavariable ;

reference.                           ::=  metavariable ;



metavariable.                        ::=  [name] ( <NO_WHITESPACE> "(" ( term | type | stuff ) ")" )? ;

variable.                            ::=  [name] ;



frameArgument                        ::=  frame ( ) 

                                       |  metaType ( ) 
                                       
                                       ;

metaArgument                         ::=  statement ( ) 

                                       |  metaType ( ) 
                                       
                                       ;

argument                             ::=  term ( ) 

                                       |  type ( )
                                       
                                       ;



metaType.                            ::=  [meta-type] ;

type.                                ::=  [type] ;



stuff.                               ::=  ( [name] | [symbol] | [operator] | [brackets] | [unassigned] )+ ;

nonsense.                            ::=  ( [type] | [name] | [symbol] | [operator] | [brackets] | [special] | [meta-type] | [secondary-keyword] | [unassigned] )+ ;`;

export default bnf;
