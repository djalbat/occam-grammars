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



typeDeclaration                      ::=  "Provisional"? "Type" type ( ":" types )? <END_OF_LINE> ;
 
variableDeclaration                  ::=  "Variable" variable ( ":" type "provisionally"? )? <END_OF_LINE> ;
 
combinatorDeclaration                ::=  "Combinator" statement... <END_OF_LINE> ;
 
constructorDeclaration               ::=  "Constructor" term... ( ":" type "provisionally"? )? <END_OF_LINE> ;
 
metavariableDeclaration              ::=  "Metavariable" metavariable ":" metaType <END_OF_LINE> ;
 
complexTypeDeclaration               ::=  "Provisional"? "Type" <END_OF_LINE> 

                                          type ( ":" types )? <END_OF_LINE> 

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
                                            
                                          deduction
                                                                                         
                                          proof ;

metatheorem                          ::=  "Metatheorem" "(" label... ")" <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+ 

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          deduction
                                           
                                          proof ;

axiom                                ::=  "Satisfying"? "Axiom" "(" labels... ")" <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                             
                                          deduction ;

lemma                                ::=  "Lemma" ( "(" labels... ")" )? <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          deduction
                                           
                                          proof ;

theorem                              ::=  "Theorem" "(" labels... ")" <END_OF_LINE> 

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                             
                                          deduction
                                           
                                          proof ;

conjecture                           ::=  "Conjecture" "(" labels... ")" <END_OF_LINE>

                                          (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                             
                                          deduction
                                           
                                          proof? ;



proof                                ::=  "Proof" <END_OF_LINE> derivation ;

subproof                             ::=  "Suppose" <END_OF_LINE> supposition+ subDerivation ;

derivation                           ::=  ( 

                                            ( step | subproof )+ 
                                            
                                            "Therefore" <END_OF_LINE> 
                                            
                                          )? 
                                          
                                          step ;                                        

subDerivation                        ::=  (

                                            "Hence" <END_OF_LINE>
    
                                            ( step | subproof )+ 
                                                                                         
                                          )? 
                                           
                                          "Then" <END_OF_LINE> 
                                           
                                          step ;                                        



propertyDeclaration.                 ::=  property ( ":" type )? <END_OF_LINE>  

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

deduction.                           ::=  statement... <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;



step.                                ::=  statement... ( ( "by" | "from" ) reference )? <END_OF_LINE>  

                                       |  nonsense... ( ( "by" | "from" ) reference )? <END_OF_LINE>
                                       
                                       ;



procedureCall                        ::=  "@"<NO_WHITESPACE>reference<NO_WHITESPACE>"(" parameter ( "," parameter )* ")" ;



frameArgument                        ::=  frame ( ) 

                                       |  metaType ( ) 
                                       
                                       ;

metaArgument                         ::=  statement ( ) 

                                       |  metaType ( ) 
                                       
                                       ;

argument                             ::=  term ( ) 

                                       |  type ( )
                                       
                                       ;



labels                               ::=  label ( "," label )* ;

types                                ::=  type ( "," type )* ;



reference.                           ::=  metavariable ;

label.                               ::=  metavariable ;



metavariable.                        ::=  [name] ( <NO_WHITESPACE> "(" ( term | type | stuff ) ")" )? ;

parameter.                           ::=  [name] ;

variable.                            ::=  [name] ;

property.                            ::=  [name]+ ;

metaType.                            ::=  [meta-type] ;



stuff.                               ::=  ( [name] | [symbol] | [bracket] | [unassigned] )+ ;

nonsense.                            ::=  ( [type] | [meta-type] | [special] | [secondary-keyword] | [name] | [symbol] | [bracket] | [unassigned] )+ ;`;

export default bnf;
