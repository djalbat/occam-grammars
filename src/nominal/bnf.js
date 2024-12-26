"use strict";

const bnf = `document                             ::=  ( topLevelDeclaration | topLevelAssertion | verticalSpace | error )+ ;



topLevelDeclaration                  ::=  typeDeclaration 
                                           
                                       |  variableDeclaration 
                                           
                                       |  combinatorDeclaration 
                                           
                                       |  constructorDeclaration 
                                           
                                       |  metavariableDeclaration 
                                                                                      
                                       |  complexTypeDeclaration 
                                           
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
 
complexTypeDeclaration               ::=  "Type" <END_OF_LINE> type ( ":" type )? <END_OF_LINE> 

                                          ( 

                                            ( "Properties" <END_OF_LINE> propertyDeclaration propertyDeclaration+ ) 
                                             
                                            | 
                                             
                                            ( "Property" <END_OF_LINE> propertyDeclaration ) 
                                             
                                          ) ;
 

  
rule                                 ::=  "Rule" "(" labels... ")" <END_OF_LINE> 

                                          ( 

                                            ( "Premises" <END_OF_LINE> premise premise+ ) 
                                             
                                            | 
                                             
                                            ( "Premise" <END_OF_LINE> premise ) 
                                             
                                          )?
                                             
                                          "Conclusion" <END_OF_LINE> conclusion 
                                           
                                          proof? ;                                         

metaLemma                            ::=  "MetaLemma" ( "(" label... ")" )? <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+ 

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          consequent
                                                                                         
                                          proof ;

metatheorem                          ::=  "Metatheorem" "(" label... ")" <END_OF_LINE> 

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



propertyDeclaration.                 ::=  property ":" type <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;



premise.                             ::=  procedureCall... <END_OF_LINE>  

                                       |  statement... <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;

supposition.                         ::=  procedureCall... <END_OF_LINE>  

                                       |  statement... <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;

conclusion.                          ::=  statement... <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;

consequent.                          ::=  statement... <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;



proofStep.                           ::=  statement... ( ( "by" | "from" ) reference )? <END_OF_LINE>  

                                       |  nonsense... ( ( "by" | "from" ) reference )? <END_OF_LINE>
                                       
                                       ;



procedureCall                        ::=  "@"<NO_WHITESPACE>reference<NO_WHITESPACE>"(" parameter ( "," parameter )* ")" ;



labels                               ::=  label ( "," label )* ;



label.                               ::=  metavariable ;

reference.                           ::=  metavariable ;




frameArgument                        ::=  frame ( ) 

                                       |  metaType ( ) 
                                       
                                       ;

metaArgument                         ::=  statement ( ) 

                                       |  metaType ( ) 
                                       
                                       ;

argument                             ::=  term ( ) 

                                       |  type ( )
                                       
                                       ;



metavariable.                        ::=  [name] ( <NO_WHITESPACE> "(" ( term | type | stuff ) ")" )? ;

parameter.                           ::=  [name] ;

variable.                            ::=  [name] ;

property.                            ::=  [name] ;

type.                                ::=  [type] ;

metaType.                            ::=  [meta-type] ;



stuff.                               ::=  ( [name] | [symbol] | [operator] | [bracket] | [unassigned] )+ ;

nonsense.                            ::=  ( [type] | [name] | [symbol] | [operator] | [bracket] | [special] | [meta-type] | [secondary-keyword] | [unassigned] )+ ;`;

export default bnf;
