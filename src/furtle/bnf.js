"use strict";

const bnf = `document                ::=  ( procedureDeclaration | error )+ ;



procedureDeclaration    ::=  [type] label<NO_WHITESPACE>"(" parameters? ")" returnBlock ;



error.                  ::=  . ;



variableAssignments     ::=  [type] variableAssignment ( "," variableAssignment )* ";" ;

conditionalBlocks       ::=  "If" "(" value ")" block ( "Else" block )? ;                                            

objectAssignment        ::=  "{" namedParameters "}" "=" variable ";" ;

arrayAssignment         ::=  "[" parameters "]" "=" variable ";" ;



step                    ::=  variableAssignments
 
                          |  conditionalBlocks
                          
                          |  objectAssignment
                          
                          |  arrayAssignment
                          
                          ;  
  
  

variableAssignment      ::=  variable "=" value ;

anonymousProcedure      ::=  [type] "(" parameters? ")" returnBlock ;

returnStatement         ::=  [return] value ";" ; 

returnBlock..           ::=  "{" ( step | nonsense )* returnStatement "}" ;
                                 
block..                 ::=  "{" ( step | nonsense )* "}" ;



namedParameter          ::=  [type] [name] ( "As" [name] )? ;

parameter               ::=  [type] [name]

                          |  "_" 

                          ;



value                   ::=  anonymousProcedureCall
 
                          |  procedureCall
 
                          |  bracketedValue 

                          |  bitwiseValue 

                          |  negatedValue 

                          |  comparison 

                          |  nodesQuery
                          
                          |  nodeQuery
                          
                          |  variable
                          
                          |  ternary
                          
                          |  some

                          |  [null]

                          |  [number]
                          
                          |  [primitive]
                          
                          |  [string-literal] 
                         
                          ;



anonymousProcedureCall  ::=  "(" anonymousProcedure ")"<NO_WHITESPACE>"(" values? ")" ;

procedureCall           ::=  reference<NO_WHITESPACE>"(" values? ")" ;

bracketedValue          ::=  "(" value ")" ; 

bitwiseValue            ::=  value ( "||" | "&&" ) value ; 

negatedValue            ::=  "!"<NO_WHITESPACE>value ; 

comparison              ::=  value ( "!=" | "==" ) value ; 

nodesQuery              ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;

nodeQuery               ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;

variable                ::=  [name] ;

ternary                 ::=  "If" "(" value ")" value "Else" value ;

some                    ::=  "Some"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;



namedParameters         ::=  namedParameter ( "," namedParameter )* ;

parameters              ::=  parameter ( "," parameter )* ;

values                  ::=  value ( "," value )* ;



label.                  ::=  [name] ;

reference.              ::=  [name] ;



nonsense.               ::=  [type] | [keyword] | [primitive] | [query] | [special] | [name] | [number] | [unassigned] ;
    

    
expression              ::=  path spread? subExpression? ;

path                    ::=  "/" infiniteDescent? selectors ;

subExpression           ::=  path spread? subExpression?;

infiniteDescent         ::=  "/" ;

selectors               ::=  selector ( "|" selector )* ;

spread                  ::=  unique

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
                            
                             "]" 
                             
                          ;

selector                ::=  ruleName | tokenType ;
                   
ruleName                ::=  [name] | "*" ;
                   
tokenType               ::=  "@"<NO_WHITESPACE>( [name] | "*" ) ;
                   
startIndex              ::=  [number] ;
                   
endIndex                ::=  [number] ;
                   
index                   ::=  [number] ;
                   
unique                  ::=  "!" ;`;

export default bnf;
