"use strict";

const bnf = `document              ::=  ( instruction | error )+ ;



instruction           ::=  functionDeclaration
                        
                        |  variablesDeclaration
                        
                        |  variableAssignment 
                        
                        |  objectAssignment 
                        
                        |  arrayAssignment
                        
                        |  conditionalBlock

                        |  forEachLoop 
                       
                        ;



functionDeclaration   ::=  [type] function ;

variablesDeclaration  ::=  [type] variable assignment? ( "," variable assignment? )* ";" ;

variableAssignment    ::=  variable assignment ";" ;

objectAssignment      ::=  "{" 

                           [type]? variable ( "," [type]? variable )* 
                           
                           "}" "=" variable ";" ;

arrayAssignment       ::=  "[" 

                           ( 

                             ( "_" ( "," "_" )* ( "," [type]? variable )+ ) 
                           
                             | 
                           
                             ( [type]? variable ( "," [type]? variable )* ) 
                               
                           ) 
                           
                           "]" "=" variable ";" ;

conditionalBlock      ::=  "If" "(" condition ")" block ( "Else" block )? ;                                            

forEachLoop           ::=  "ForEach"<NO_WHITESPACE>"(" [name] "," anonymousFunction ")" ";" ;


             
assignment            ::=  "=" ( functionCall | nodesQuery | nodeQuery | value ) ;
                                          
                                          
                                          
block                 ::=  "{" ( variablesDeclaration |

                                 variableAssignment | 
                        
                                 objectAssignment | 
                        
                                 arrayAssignment |
                        
                                 conditionalBlock |

                                 forEachLoop )* "}" ;




functionCall          ::=  [name]<NO_WHITESPACE>"(" ( value ( "," value )* )? ")" ;

function              ::=  [name]<NO_WHITESPACE>"(" ( argument ( "," argument )* )? ")" body ;

anonymousFunction     ::=  "(" ( argument ( "," argument )* )? ")" body ;



nodesQuery            ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;

nodeQuery             ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;




condition             ::=  "(" condition ")" 

                        |  condition ( "||" | "&&" ) condition 

                        |  value ( ( "!=" | "==" ) value )? 
                        
                        ;



body                  ::=  "{" ( variablesDeclaration | 
                        
                                 variableAssignment | 
                        
                                 objectAssignment | 
                        
                                 arrayAssignment |
                        
                                 conditionalBlock |

                                 forEachLoop )* return? "}" ;
                                 
                                 

return                ::=  "Return" value ";" ; 



value                 ::=  variable | [number] | [primitive] | [string-literal] ;



argument              ::=  [type] variable ;



variable              ::=  [name] ;



expression            ::=  path spread? subExpression? ;

path                  ::=  "/" infiniteDescent? selectors ;

subExpression         ::=  path spread? subExpression?;

infiniteDescent       ::=  "/" ;

selectors             ::=  selector ( "|" selector )* ;

spread                ::=  unique

                        |  "[" 
      
                           ( 
                              
                             ( startIndex "..." endIndex ) 
                              
                             | 
                              
                             ( startIndex "..." ) 
                              
                             | 
                              
                             ( "..." endIndex )
                               
                             | 
                              
                             index 
                              
                           )  
                            
                           "]" ;

selector              ::=  ruleName | tokenType ;
                   
ruleName              ::=  [name] | "*" ;
                   
tokenType             ::=  "@"<NO_WHITESPACE>( [name] | "*" ) ;
                   
startIndex            ::=  [number] ;
                   
endIndex              ::=  [number] ;
                   
index                 ::=  [number] ;
                   
unique                ::=  "!" ;
                   


error.                ::=  . ;`;

export default bnf;
