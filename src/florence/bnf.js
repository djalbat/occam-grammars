"use strict";

const bnf = `document                             ::=   ( topLevelDeclaration | verticalSpace | error )+ ;



topLevelDeclaration                  ::=   rule 

                                       |   axiom 

                                       |   lemma 

                                       |   theorem 

                                       |   conjecture 

                                       |   metalemma 

                                       |   typeDeclaration 
                                           
                                       |   variableDeclaration 
                                           
                                       |   combinatorDeclaration 
                                           
                                       |   constructorDeclaration 
                                           
                                       |   disjointTypeDeclaration 
                                           
                                       |   metavariableDeclaration 
                                           
                                       |   dependentTypeDeclaration 
                                           
                                       ;



verticalSpace                        ::=   <END_OF_LINE>+ ;



error                                ::=   . ;



rule                                 ::=   "Rule" "(" label ( "," label )* ")" <END_OF_LINE> 

                                           ( 

                                             ( "Premises" <END_OF_LINE> premise premise+ ) 
                                             
                                             | 
                                             
                                             ( "Premise" <END_OF_LINE> premise ) 
                                             
                                           )?
                                             
                                           "Conclusion" <END_OF_LINE> conclusion 
                                           
                                           metaproof? ;
                                           
                                           

axiom                                ::=   "Axiom" "(" label ( "," label )* ")" <END_OF_LINE> 

                                           (
                                           
                                             (
                                           
                                               "Suppose" <END_OF_LINE> antecedent+

                                               "Then" <END_OF_LINE> consequent 
                                             
                                             )
                                             
                                             |
                                             
                                             consequent
                                             
                                           ) ;

lemma                                ::=   "Lemma" ( "(" label ( "," label )* ")" )? <END_OF_LINE> 

                                           (
                                           
                                             (
                                           
                                               "Suppose" <END_OF_LINE> antecedent+

                                               "Then" <END_OF_LINE> consequent 
                                             
                                             )
                                             
                                             |
                                             
                                             consequent
                                             
                                           )
                                           
                                           proof ;

theorem                              ::=   "Theorem" "(" label ( "," label )* ")" <END_OF_LINE> 

                                           (
                                           
                                             (
                                           
                                               "Suppose" <END_OF_LINE> antecedent+

                                               "Then" <END_OF_LINE> consequent 
                                             
                                             )
                                             
                                             |
                                             
                                             consequent
                                             
                                           )
                                           
                                           proof ;

conjecture                           ::=   "Conjecture" "(" label ( "," label )* ")" <END_OF_LINE>

                                           (
                                           
                                             (
                                           
                                               "Suppose" <END_OF_LINE> antecedent+

                                               "Then" <END_OF_LINE> consequent 
                                             
                                             )
                                             
                                             |
                                             
                                             consequent
                                             
                                           )
                                           
                                           proof? ;



metalemma                            ::=   "Metalemma" ( "(" label ( "," label )* ")" )? <END_OF_LINE> 

                                           ( 
                                           
                                             (
                                             
                                               "Suppose" <END_OF_LINE> metaAntecedent+ 

                                               "Then" <END_OF_LINE> metaConsequent
                                               
                                             )
                                            
                                             | 
                                             
                                             metaConsequent
                                              
                                           ) 
                                           
                                           metaproof ;

metatheorem                          ::=   "Metatheorem" "(" label ( "," label )* ")" <END_OF_LINE> 

                                           ( 
                                           
                                             (
                                             
                                               "Suppose" <END_OF_LINE> metaAntecedent+ 

                                               "Then" <END_OF_LINE> metaConsequent
                                               
                                             )
                                            
                                             | 
                                             
                                             metaConsequent
                                              
                                           ) 
                                           
                                           metaproof ;



typeDeclaration                      ::=   "Type" type ( ":" type )? <END_OF_LINE> ;
 
variableDeclaration                  ::=   "Variable" variable ( ":" type )? <END_OF_LINE> ;
 
combinatorDeclaration                ::=   "Combinator" statement... <END_OF_LINE> ;
 
constructorDeclaration               ::=   "Constructor" term... ( ":" type )? <END_OF_LINE> ;
 
disjointTypeDeclaration              ::=   "DisjointType" disjointType ":" type ( "," type )+ <END_OF_LINE> ;
                                       
metavariableDeclaration              ::=   "Metavariable" metavariable ":" ( "Statement" | "Context" ) <END_OF_LINE> ;
 
dependentTypeDeclaration             ::=   "DependentType" dependentType ":" type <END_OF_LINE> ;
                                         

  
metaproof                            ::=   "Proof" <END_OF_LINE> metaDerivation ;
                                          
proof                                ::=   "Proof" <END_OF_LINE> derivation ;
                                                                                         


metaSubproof                         ::=   "Suppose" <END_OF_LINE> metaAntecedent+ metaSubDerivation ; 

subproof                             ::=   "Suppose" <END_OF_LINE> antecedent+ subDerivation ;
                                           


metaDerivation                       ::=   (

                                             ( metaSubproof | qualifiedMetastatement | unqualifiedMetastatement )+  

                                             "Therefore" <END_OF_LINE> 
                                           
                                           )? 
                                           
                                           ( qualifiedMetastatement | unqualifiedMetastatement ) ;                                        

derivation                           ::=   (

                                             ( subproof | qualifiedStatement | unqualifiedStatement )+ 

                                             "Therefore" <END_OF_LINE>
                                             
                                           )? 
                                           
                                           ( qualifiedStatement | unqualifiedStatement ) ;                                           



metaSubDerivation                    ::=   (

                                             "Hence" <END_OF_LINE>

                                             ( metaSubproof | qualifiedMetastatement | unqualifiedMetastatement )+ 
                                             
                                           )? 
                                           
                                           "Then" <END_OF_LINE> 
                                           
                                           ( qualifiedMetastatement | unqualifiedMetastatement ) ;                                        

subDerivation                        ::=   (

                                             "Hence" <END_OF_LINE>

                                             ( subproof | qualifiedStatement | unqualifiedStatement )+ 
                                             
                                           )? 
                                           
                                           "Then" <END_OF_LINE> 
                                           
                                           ( qualifiedStatement | unqualifiedStatement ) ;                                           



premise                              ::=   unqualifiedMetastatement ;

conclusion                           ::=   unqualifiedMetastatement ;



metaAntecedent                       ::=   unqualifiedMetastatement ;

antecedent                           ::=   unqualifiedStatement ;



metaConsequent                       ::=   unqualifiedMetastatement ;

consequent                           ::=   unqualifiedStatement ;



unqualifiedMetastatement!            ::=   metastatement... <END_OF_LINE> 

                                       |   nonsense... <END_OF_LINE> 
                                       
                                       ;

qualifiedMetastatement!              ::=   metastatement... qualification <END_OF_LINE> 

                                       |   nonsense... qualification <END_OF_LINE> 
                                        
                                       ;
                                       
                                       

unqualifiedStatement!                ::=   statement... <END_OF_LINE>

                                       |   nonsense... <END_OF_LINE> 
                                       
                                       ;

qualifiedStatement!                  ::=   statement... qualification <END_OF_LINE> 

                                       |   nonsense... qualification <END_OF_LINE> 
                                       
                                       ;



qualification                        ::=   "by" ( reference | "construction" )

                                       |   "from" reference 
                                       
                                       ;



nonsense                             ::=   ( "by" | "from" | [type] | [operator] | [special] | [reserved] | [name] | [unassigned] )+ ;



argument                             ::=   term | type ;



dependentType                        ::=   [type]<NO_WHITESPACE>"(" argument ")" ;

disjointType                         ::=   [type] ;

type                                 ::=   [type] ;



metavariable                         ::=   [name] ( <NO_WHITESPACE>"(" argument ")" )? ;

reference                            ::=   [name] ( <NO_WHITESPACE>"(" term... ")" )? ;

context                              ::=   [name] ( <NO_WHITESPACE>"(" term... ")" )? ;

label                                ::=   [name] ( <NO_WHITESPACE>"(" term... ")" )? ;

variable                             ::=   [name] ;`;

export default bnf;
