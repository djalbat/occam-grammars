"use strict";

const bnf = `

    document                ::=  ( procedureDeclaration | error )+ ;
    
    
    
    procedureDeclaration    ::=  [type] label<NO_WHITESPACE>"(" parameters? ")" returnBlock ;
    
    
    
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
    
    returnStatement         ::=  "return" expression ";" ; 
    
    returnBlock..           ::=  "{" ( step | nonsense )* returnStatement "}" ;
                                     
    
    
    procedureCall           ::=  reference<NO_WHITESPACE>"(" expressions? ")" ;
    
    bracketedExpression     ::=  "(" expression ")" ; 
    
    negatedExpression       ::=  "!"<NO_WHITESPACE>expression ; 
    
    logicalExpression       ::=  expression ( "||" | "&&" ) expression ; 
    
    nodeQuery               ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
    
    nodesQuery              ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
    
    comparison              ::=  expression ( "==" | "!=" ) expression ; 
    
    ternary                 ::=  "if" "(" expression ")" expression "else" expression ;
    
    reduce                  ::=  "reduce"<NO_WHITESPACE>"(" variable "," anonymousProcedure "," expression ")" ;
    
    every                   ::=  "every"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;
    
    some                    ::=  "some"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;
    
    
    
    expressions             ::=  expression ( "," expression )* ;
    
    expression              ::=  bracketedExpression 
    
                              |  logicalExpression 
    
                              |  negatedExpression 
    
                              |  procedureCall
     
                              |  returnBlock
    
                              |  nodeQuery
                              
                              |  nodesQuery
                              
                              |  comparison 
    
                              |  ternary
                              
                              |  reduce
    
                              |  every
    
                              |  some
                             
                              |  variable
                              
                              |  primitive
                              
                              ;
    
    
    
    namedParameters         ::=  namedParameter ( "," namedParameter )* ;
    
    namedParameter          ::=  [type] [name] ( "as" [name] )? ;
    
    
    
    parameters              ::=  parameter ( "," parameter )* ;
    
    parameter               ::=  [type] [name]
    
                              |  "_" 
    
                              ;
    
    
    
    primitive               ::=  [null]
                              
                              |  [number]
                              
                              |  [boolean]
                              
                              |  [string-literal] 
                             
                              ;



    reference.              ::=  [name] ;
    
    variable                ::=  [name] ;
    
    label.                  ::=  [name] ;
    
    
    
    nonsense.               ::=  [secondary-keyword] | [type] | [null] | [boolean] | [string-literal] | [query] | [special] | [name] | [number] | [unassigned] ;


    
    error.                  ::=  . ;
    
`;

export default bnf;
