"use strict";

const bnf = `document                ::=  ( procedureDeclaration | error )+ ;



procedureDeclaration    ::=  [type] label<NO_WHITESPACE>"(" parameters? ")" returnBlock ;



error.                  ::=  . ;



variableAssignments     ::=  [type] variableAssignment ( "," variableAssignment )* ";" ;

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
                                 


procedureCall           ::=  reference<NO_WHITESPACE>"(" values? ")" ;

bracketedValue          ::=  "(" value ")" ; 

bitwiseValue            ::=  value ( "||" | "&&" ) value ; 

negatedValue            ::=  "!"<NO_WHITESPACE>value ; 

comparison              ::=  value ( "!=" | "==" ) value ; 

nodesQuery              ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;

nodeQuery               ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;

variable                ::=  [name] ;

ternary                 ::=  "If" "(" value ")" value "Else" value ;

reduce                  ::=  "Reduce"<NO_WHITESPACE>"(" variable "," anonymousProcedure "," value ")" ;

every                   ::=  "Every"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;

some                    ::=  "Some"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;



values                  ::=  value ( "," value )* ;

value                   ::=  bracketedValue 

                          |  bitwiseValue 

                          |  negatedValue 

                          |  procedureCall
 
                          |  returnBlock

                          |  comparison 

                          |  nodesQuery
                          
                          |  nodeQuery
                          
                          |  variable
                          
                          |  ternary
                          
                          |  reduce

                          |  every

                          |  some

                          |  [null]

                          |  [number]
                          
                          |  [primitive]
                          
                          |  [string-literal] 
                         
                          ;



namedParameters         ::=  namedParameter ( "," namedParameter )* ;

namedParameter          ::=  [type] [name] ( "As" [name] )? ;



parameters              ::=  parameter ( "," parameter )* ;

parameter               ::=  [type] [name]

                          |  "_" 

                          ;



label.                  ::=  [name] ;

reference.              ::=  [name] ;



nonsense.               ::=  [type] | [keyword] | [primitive] | [query] | [special] | [name] | [number] | [unassigned] ;`;

export default bnf;
