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
  
  

variableAssignment      ::=  variable "=" expression ;

anonymousProcedure      ::=  [type] "(" parameters? ")" returnBlock ;

returnStatement         ::=  "Return" expression ";" ; 

returnBlock..           ::=  "{" ( step | nonsense )* returnStatement "}" ;
                                 


procedureCall           ::=  reference<NO_WHITESPACE>"(" expressions? ")" ;

bracketedExpression     ::=  "(" expression ")" ; 

bitwiseExpression       ::=  expression ( "||" | "&&" ) expression ; 

negatedExpression       ::=  "!"<NO_WHITESPACE>expression ; 

comparison              ::=  expression ( "!=" | "==" ) expression ; 

nodesQuery              ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;

nodeQuery               ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;

variable                ::=  [name] ;

ternary                 ::=  "If" "(" expression ")" expression "Else" expression ;

reduce                  ::=  "Reduce"<NO_WHITESPACE>"(" variable "," anonymousProcedure "," expression ")" ;

every                   ::=  "Every"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;

some                    ::=  "Some"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;



expressions             ::=  expression ( "," expression )* ;

expression              ::=  bracketedExpression 

                          |  bitwiseExpression 

                          |  negatedExpression 

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



nonsense.               ::=  [type] | [keyword] | [primitive] | [string-literal] | [query] | [special] | [name] | [number] | [unassigned] ;`;

export default bnf;
