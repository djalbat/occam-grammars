"use strict";

const bnf = `document              ::=  ( topLevelDeclaration | error )+ ;



topLevelDeclaration   ::=  functionDeclaration
                        
                        |  variablesDeclaration
                        
                        ;



error.                ::=  . ;



instruction           ::=  variablesDeclaration
                        
                        |  variableAssignment 
                        
                        |  objectAssignment 
                        
                        |  arrayAssignment
                        
                        ;



functionDeclaration   ::=  [type] label<NO_WHITESPACE>"(" ( argument ( "," argument )* )? ")" returnBlock ;

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
                           
                           

anonymousFunction     ::=  "(" ( argument ( "," argument )* )? ")" returnBlock ;

conditionalBlock      ::=  "If" "(" condition ")" block ( "Else" block )? ;                                            

forEachLoop           ::=  "ForEach"<NO_WHITESPACE>"(" variable "," anonymousFunction ")" ";" ;

condition             ::=  "(" condition ")" 

                        |  condition ( "||" | "&&" ) condition 

                        |  value ( ( "!=" | "==" ) value )? 
                        
                        ;
                        


returnBlock..         ::=  "{" ( conditionalBlock | forEachLoop | instruction | nonsense )* return? "}" ;
                                 
block..               ::=  "{" ( conditionalBlock | forEachLoop | instruction | nonsense )* "}" ;



nonsense.             ::=  [type] | [keyword] | [primitive] | [instruction] | [special] | [name] | [number] | [unassigned] ;
    

    
return                ::=  [return] value ";" ; 

value                 ::=  variable | [number] | [primitive] | [string-literal] ;

argument              ::=  [type] variable ;

variable              ::=  [name] ;

assignment            ::=  "=" ( functionCall | nodesQuery | nodeQuery | value ) ;



functionCall          ::=  reference<NO_WHITESPACE>"(" ( value ( "," value )* )? ")" ;

nodesQuery            ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;

nodeQuery             ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;



label.                ::=  [name] ;

reference.            ::=  [name] ;



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
                   
unique                ::=  "!" ;`;

export default bnf;
