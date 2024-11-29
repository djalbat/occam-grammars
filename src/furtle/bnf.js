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

variablesDeclaration  ::=  [type] [name] assignment? ( "," [name] assignment? )* ";" ;

variableAssignment    ::=  [name] assignment ";" ;

objectAssignment      ::=  "{" 

                           [type]? [name] ( "," [type]? [name] )* 
                           
                           "}" "=" [name] ";" ;

arrayAssignment       ::=  "[" 

                           ( 

                             ( "_" ( "," "_" )* ( "," [type]? [name] )+ ) 
                           
                             | 
                           
                             ( [type]? [name] ( "," [type]? [name] )* ) 
                               
                           ) 
                           
                           "]" "=" [name] ";" ;

conditionalBlock      ::=  "If" "(" condition ")" block ( "Else" block )? ;                                            

forEachLoop           ::=  "ForEach"<NO_WHITESPACE>"(" [name] "," anonymousFunction ")" ";" ;


             
assignment            ::=  "=" ( functionCall | isTerminalNode | nodesQuery | nodeQuery | value ) ;
                                          
                                          
                                          
block                 ::=  "{" ( variablesDeclaration |

                                 variableAssignment | 
                        
                                 objectAssignment | 
                        
                                 arrayAssignment |
                        
                                 conditionalBlock |

                                 forEachLoop )* "}" ;




functionCall          ::=  [name]<NO_WHITESPACE>"(" ( [name] ( "," [name] )* )? ")" ;

function              ::=  [name]<NO_WHITESPACE>"(" ( argument ( "," argument )* )? ")" body ;

anonymousFunction     ::=  "(" ( argument ( "," argument )* )? ")" body ;



isTerminalNode        ::=  "isTerminalNode"<NO_WHITESPACE>"(" [name] ")" ;

nodesQuery            ::=  "nodesQuery"<NO_WHITESPACE>"(" [name] "," expression ")" ;

nodeQuery             ::=  "nodeQuery"<NO_WHITESPACE>"(" [name] "," expression ")" ;




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



value                 ::=  [name] | [number] | [primitive] | [string-literal] ;



argument              ::=  [type] [name] ;



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
