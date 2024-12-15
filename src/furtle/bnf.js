"use strict";

const bnf = `document               ::=  ( procedureDeclaration | error )+ ;



procedureDeclaration   ::=  [type] label<NO_WHITESPACE>"(" parameters? ")" returnBlock ;



error.                 ::=  . ;



variablesDeclaration   ::=  [type] variable assignment? ( "," variable assignment? )* ";" ;

variableAssignment     ::=  variable assignment ";" ;

conditionalBlocks      ::=  "If" "(" condition ")" block ( "Else" block )? ;                                            

objectAssignment       ::=  "(" parameters ")" "=" variable ";" ;

arrayAssignment        ::=  "[" parameters "]" "=" variable ";" ;
                                                      
forEachLoop            ::=  "ForEach"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ";" ;



anonymousProcedure     ::=  "(" parameters? ")" block ;

bracketedCondition     ::=  "(" condition ")" ; 

bitwiseCondition       ::=  condition ( "||" | "&&" ) condition ; 

comparison             ::=  value ( "!=" | "==" ) value ; 

condition              ::=  bracketedCondition 

                         |  bitwiseCondition 

                         |  comparison 

                         |  value 
                        
                         ;
                        


block..                ::=  "{" ( step | nonsense )* "}" ;

returnBlock..          ::=  "{" ( step | nonsense )* returnStatement "}" ;
                                 
returnStatement        ::=  [return] value ";" ; 



step                   ::=  variablesDeclaration
 
                         |  variableAssignment
                          
                         |  conditionalBlocks
                          
                         |  objectAssignment
                          
                         |  arrayAssignment
                          
                         |  forEachLoop
                          
                         ;  
  
nonsense.              ::=  [type] | [keyword] | [primitive] | [query] | [special] | [name] | [number] | [unassigned] ;
    

    
assignment             ::=  "=" ( procedureCall | nodesQuery | nodeQuery | value ) ;



procedureCall          ::=  reference<NO_WHITESPACE>"(" values? ")" ;

nodesQuery             ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;

nodeQuery              ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;



parameters             ::=  parameter ( "," parameter )* ;

values                 ::=  value ( "," value )* ;



value                  ::=  variable | [number] | [primitive] | [string-literal] ;

variable               ::=  [name] ;

parameter              ::=  [type] [name]

                         |  "_" 

                         ;



label.                 ::=  [name] ;

reference.             ::=  [name] ;



expression             ::=  path spread? subExpression? ;

path                   ::=  "/" infiniteDescent? selectors ;

subExpression          ::=  path spread? subExpression?;

infiniteDescent        ::=  "/" ;

selectors              ::=  selector ( "|" selector )* ;

spread                 ::=  unique

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

selector               ::=  ruleName | tokenType ;
                   
ruleName               ::=  [name] | "*" ;
                   
tokenType              ::=  "@"<NO_WHITESPACE>( [name] | "*" ) ;
                   
startIndex             ::=  [number] ;
                   
endIndex               ::=  [number] ;
                   
index                  ::=  [number] ;
                   
unique                 ::=  "!" ;`;

export default bnf;
