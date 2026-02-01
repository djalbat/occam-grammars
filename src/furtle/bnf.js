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
    
    returnStatement         ::=  "return" primitive ";" ; 
    
    
    
    bracketedExpression     ::=  "(" expression ")" ; 
    
    negatedExpression       ::=  "!"<NO_WHITESPACE>expression ; 
    
    logicalExpression       ::=  expression ( "||" | "&&" ) expression ; 
    
    procedureCall           ::=  reference<NO_WHITESPACE>"(" primitives? ")" ;
    
    returnBlock..           ::=  "{" ( step | nonsense )* returnStatement "}" ;
                                     
    nodeQuery               ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
    
    nodesQuery              ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
    
    comparison              ::=  expression ( "==" | "!=" ) expression ; 
    
    ternary                 ::=  "if" "(" expression ")" expression "else" expression ;
    
    reduce                  ::=  "reduce"<NO_WHITESPACE>"(" variable "," anonymousProcedure "," expression ")" ;
    
    every                   ::=  "every"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;
    
    some                    ::=  "some"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;
    
    
    
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
    
    
    
    primitives              ::=  primitive ( "," primitive )* ;
    
    primitive               ::=  [string-literal]
                              
                              |  [boolean]
                              
                              |  [number]
                              
                              |  [null] 
                             
                              ;



    parameters              ::=  parameter ( "," parameter )* ;
    
    parameter               ::=  [type] [name]
    
                              |  "_" 
    
                              ;
    
    
    
    reference.              ::=  [name] ;
    
    variable                ::=  [name] ;
    
    label.                  ::=  [name] ;
    
    
    
    nonsense.               ::=  [secondary-keyword] | [type] | [null] | [boolean] | [string-literal] | [query] | [special] | [name] | [number] | [unassigned] ;


    
    error.                  ::=  . ;
    
`;

export default bnf;
