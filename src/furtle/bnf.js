"use strict";

const bnf = `document               ::=  ( procedureDeclaration | error )+ ;



procedureDeclaration   ::=  [type] label<NO_WHITESPACE>"(" parameters? ")" returnBlock ;



error.                 ::=  . ;



variablesDeclaration   ::=  [type] variable assignment? ( "," variable assignment? )* ";" ;

variableAssignment     ::=  variable assignment ";" ;

objectAssignment       ::=  "(" 

                            [type] variable ( "," [type] variable )* 
                           
                            ")" "=" variable ";" ;

arrayAssignment        ::=  "[" 

                            ( 

                              ( dummyVariable ( "," dummyVariable )* ( "," [type] variable )+ ) 
                           
                              | 
                           
                              ( [type] variable ( "," [type] variable )* ) 
                               
                            ) 
                           
                            "]" "=" variable ";" ;
                           
                           

anonymousProcedure     ::=  "(" parameters? ")" block ;

conditionalBlock       ::=  "If" "(" condition ")" block ( "Else" block )? ;                                            

forEachLoop            ::=  "ForEach"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ";" ;



condition              ::=  bracketedCondition 

                         |  bitwiseCondition 

                         |  comparison 

                         |  value 
                        
                         ;
                        
bracketedCondition     ::=  "(" condition ")" ; 

bitwiseCondition       ::=  condition ( "||" | "&&" ) condition ; 

comparison             ::=  value ( "!=" | "==" ) value ; 



returnBlock..          ::=  "{" ( step | nonsense )* returnStatement? "}" ;
                                 
block..                ::=  "{" ( step | nonsense )* "}" ;



step                   ::=  variablesDeclaration
 
                         |  variableAssignment
                          
                         |  objectAssignment
                          
                         |  arrayAssignment
                          
                         |  conditionalBlock
                          
                         |  forEachLoop
                          
                         ;  
  
nonsense.              ::=  [type] | [keyword] | [primitive] | [query] | [special] | [name] | [number] | [unassigned] ;
    

    
returnStatement        ::=  [return] value ";" ; 



procedureCall          ::=  reference<NO_WHITESPACE>"(" values? ")" ;

nodesQuery             ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;

nodeQuery              ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;



parameters             ::=  parameter ( "," parameter )* ;

values                 ::=  value ( "," value )* ;



value                  ::=  variable | [number] | [primitive] | [string-literal] ;

variable               ::=  [name] ;

parameter              ::=  [type] [name] ;

assignment             ::=  "=" ( procedureCall | nodesQuery | nodeQuery | value ) ;

dummyVariable          ::=  "_" ;



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
