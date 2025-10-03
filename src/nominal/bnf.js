"use strict";

const bnf = `document                             ::=  ( topLevelDeclaration | topLevelAssertion | section | verticalSpace | error )+ ;



topLevelDeclaration                  ::=  variableDeclaration 
                                           
                                       |  combinatorDeclaration 
                                           
                                       |  constructorDeclaration 
                                           
                                       |  metavariableDeclaration 
                                                                                      
                                       |  simpleTypeDeclaration 
                                           
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



section                              ::=  "Given" <END_OF_LINE>

                                          hypothesis+
                                          
                                          <END_OF_LINE>
                                          
                                          ( axiom 
                                          
                                          | lemma 
                                          
                                          | theorem 
                                          
                                          | conjecture ) ; 



verticalSpace                        ::=  <END_OF_LINE>+ ;



error.                               ::=  . ;



variableDeclaration                  ::=  "Variable" variable ( ":" type "provisionally"? )? <END_OF_LINE> ;
 
combinatorDeclaration                ::=  "Combinator" statement... <END_OF_LINE> ;
 
constructorDeclaration               ::=  "Constructor" term... ( ":" type "provisionally"? )? <END_OF_LINE> ;
 
metavariableDeclaration              ::=  "Metavariable" metavariable... ":" metaType <END_OF_LINE> ;
 
simpleTypeDeclaration                ::=  "Provisional"? "Type" type ( ":" types )? <END_OF_LINE> ;
 
complexTypeDeclaration               ::=  "Provisional"? "Type" <END_OF_LINE> 

                                          type ( ":" types )? <END_OF_LINE>
                                          
                                          (
                                          
                                            ( "Properties" <END_OF_LINE> propertyDeclaration propertyDeclaration+ ) 
                                             
                                            | 
                                             
                                            ( "Property" <END_OF_LINE> propertyDeclaration ) 
                                             
                                          );
 

  
rule                                 ::=  ruleHeader ruleBody ;                                         

metaLemma                            ::=  metaLemmaHeader metaLemmaBody ;

metatheorem                          ::=  metatheoremHeader metatheoremBody ;

axiom                                ::=  axiomHeader axiomBody ;

lemma                                ::=  lemmaHeader lemmaBody ;

theorem                              ::=  theoremHeader theoremBody ;

conjecture                           ::=  conjectureHeader conjectureBody ;



ruleHeader                          ::=  "Rule" parenthesisedLabels... <END_OF_LINE> ; 

metaLemmaHeader                     ::=  "MetaLemma" parenthesisedLabel... <END_OF_LINE> | "MetaLemma" <END_OF_LINE> ;

metatheoremHeader                   ::=  "Metatheorem" parenthesisedLabel... <END_OF_LINE> ; 

axiomHeader                         ::=  "Axiom" signature? parenthesisedLabels... <END_OF_LINE> ; 

lemmaHeader                         ::=  "Lemma" parenthesisedLabels... <END_OF_LINE> | "Lemma" <END_OF_LINE> ; 

theoremHeader                       ::=  "Theorem" parenthesisedLabels... <END_OF_LINE> ; 

conjectureHeader                    ::=  "Conjecture" parenthesisedLabels... <END_OF_LINE>



ruleBody                             ::=  ( 

                                            ( "Premises" <END_OF_LINE> premise premise+ ) 
                                             
                                            | 
                                             
                                            ( "Premise" <END_OF_LINE> premise ) 
                                             
                                          )?
                                             
                                          "Conclusion" <END_OF_LINE> conclusion 
                                           
                                          proof? ;                                         

metaLemmaBody                        ::=  (
                                           
                                            "Suppose" <END_OF_LINE> supposition+ 

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          deduction
                                                                                         
                                          proof ;

metatheoremBody                      ::=  (
                                           
                                            "Suppose" <END_OF_LINE> supposition+ 

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          deduction
                                           
                                          proof ;

axiomBody                            ::=  (
                                           
                                            "Suppose" <END_OF_LINE> supposition+
    
                                            "Then" <END_OF_LINE> 
                                                 
                                          )?
                                                 
                                          deduction ;

lemmaBody                            ::=  (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          deduction
                                           
                                          proof ;

theoremBody                          ::=  (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                             
                                          deduction
                                           
                                          proof ;

conjectureBody                       ::=  (
                                           
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

hypothesis.                          ::=  statement... <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;



step.                                ::=  statement... qualification? <END_OF_LINE>  

                                       |  nonsense... qualification? <END_OF_LINE>
                                       
                                       ;



qualification                        ::=  "because" satisfiesAssertion

                                       |  "by" reference
                                       
                                       ; 



parenthesisedLabels                  ::=  "(" labels ")" ; 

parenthesisedLabel                   ::=  "(" label ")" ; 



procedureCall                        ::=  "@"<NO_WHITESPACE>reference<NO_WHITESPACE>"(" parameter ( "," parameter )* ")" ;



signature                            ::=  "[" term ( "," term )* "]" ;



arguments                            ::=  argument ( "," argument )* ;

labels                               ::=  label ( "," label )* ;

types                                ::=  type ( "," type )* ;



argument                             ::=  term ( ) 

                                       |  type ( )
                                       
                                       ;

metaArgument                         ::=  statement ( ) 

                                       |  metaType ( ) 
                                       
                                       ;

frameArgument                        ::=  frame ( ) 

                                       |  metaType ( ) 
                                       
                                       ;



reference.                           ::=  metavariable ;

label.                               ::=  metavariable ;



metavariable.                        ::=  [name] ( <NO_WHITESPACE> "(" ( term | type | stuff ) ")" )? ;

parameter.                           ::=  [name] | [identifier] ;

variable.                            ::=  [identifier] ;

metaType.                            ::=  [meta-type] ;

property.                            ::=  [name]+ ;

type.                                ::=  [type] ;



stuff.                               ::=  ( [string-literal] | [symbol] | [type] | [name] | [identifier] | [comma] | [bracket] | [unassigned] )+ ;

nonsense.                            ::=  ( [secondary--keyword] | [meta-type] | [special] | [symbol] | [type] | [name] | [identifier] | [comma] | [bracket] | [unassigned] )+ ;`;

export default bnf;
