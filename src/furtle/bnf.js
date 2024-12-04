"use strict";

const bnf = `document               ::=  ( topLevelDeclaration | error )+ ;



topLevelDeclaration    ::=  procedureDeclaration
                        
                         |  variablesDeclaration
                        
                         ;



error.                 ::=  . ;



procedureDeclaration   ::=  [type] label<NO_WHITESPACE>"(" ( parameter ( "," parameter )* )? ")" returnBlock ;

variablesDeclaration   ::=  [type] variable assignment? ( "," variable assignment? )* ";" ;

variableAssignment     ::=  variable assignment ";" ;

objectAssignment       ::=  "{" 

                            [type]? variable ( "," [type]? variable )* 
                           
                            "}" "=" variable ";" ;

arrayAssignment        ::=  "[" 

                            ( 

                              ( "_" ( "," "_" )* ( "," [type]? variable )+ ) 
                           
                              | 
                           
                              ( [type]? variable ( "," [type]? variable )* ) 
                               
                            ) 
                           
                            "]" "=" variable ";" ;
                           
                           

anonymousFunction      ::=  "(" ( parameter ( "," parameter )* )? ")" returnBlock ;

conditionalBlock       ::=  "If" "(" condition ")" block ( "Else" block )? ;                                            

forEachLoop            ::=  "ForEach"<NO_WHITESPACE>"(" variable "," anonymousFunction ")" ";" ;



condition              ::=  bracketedCondition 

                         |  bitwiseCondition 

                         |  comparison 

                         |  value 
                        
                         ;
                        
bracketedCondition     ::=  "(" condition ")" ; 

bitwiseCondition       ::=  condition ( "||" | "&&" ) condition ; 

comparison             ::=  value ( "!=" | "==" ) value ; 



returnBlock..          ::=  "{" ( step | nonsense )* return? "}" ;
                                 
block..                ::=  "{" ( step | nonsense )* "}" ;



step                   ::=  variablesDeclaration
 
                         |  variableAssignment
                          
                         |  objectAssignment
                          
                         |  arrayAssignment
                          
                         |  conditionalBlock
                          
                         |  forEachLoop
                          
                         ;  
  
nonsense.              ::=  [type] | [keyword] | [primitive] | [query] | [special] | [name] | [number] | [unassigned] ;
    

    
return                 ::=  [return] value ";" ; 

value                  ::=  variable | [number] | [primitive] | [string-literal] ;

parameter              ::=  [type] variable ;

variable               ::=  [name] ;

assignment             ::=  "=" ( procedureCall | nodesQuery | nodeQuery | value ) ;



procedureCall          ::=  reference<NO_WHITESPACE>"(" ( value ( "," value )* )? ")" ;

nodesQuery             ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;

nodeQuery              ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;



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
