"use strict";

const bnf = `

    document                ::=  ( procedureDeclaration | error )+ ;
    
    
    
    procedureDeclaration    ::=  [type] label<NO_WHITESPACE>"(" parameters? ")" returnBlock ;
    
    anonymousProcedure      ::=  [type] "(" parameters? ")" returnBlock ;
    
    returnStatement         ::=  "return" term ";" ; 
    
    
    
    step                    ::=  arrayAssignment
                              
                              |  objectAssignment
                              
                              |  variableAssignments
     
                              ;  
      
      
    
    arrayAssignment         ::=  "[" parameters "]" "=" variable ";" ;
    
    objectAssignment        ::=  "{" namedParameters "}" "=" variable ";" ;
    
    variableAssignments     ::=  [type] variableAssignment ( "," variableAssignment )* ";" ;
    
    variableAssignment      ::=  variable "=" expression ;
    


    namedParameters         ::=  namedParameter ( "," namedParameter )* ;
    
    parameters              ::=  parameter ( "," parameter )* ;
    
    terms                   ::=  term ( "," term )* ;
    


    namedParameter          ::=  [type] [name] ( "as" [name] )? ;   
    
    parameter               ::=  [type] [name]
    
                              |  "_" 
    
                              ;


    
    procedureCall           ::=  reference<NO_WHITESPACE>"(" terms? ")" ;
    
    returnBlock..           ::=  "{" ( step | nonsense )* returnStatement "}" ;
                                     
    nodeQuery               ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
    
    nodesQuery              ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
    
    ternary                 ::=  "if" "(" term ")" expression "else" expression ;
    
    reduce                  ::=  "reduce"<NO_WHITESPACE>"(" variable "," anonymousProcedure "," expression ")" ;
    
    every                   ::=  "every"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;
    
    some                    ::=  "some"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;
    
    
    
    comparisonExpression    ::=  expression ( "==" | "!=" ) expression ; 
    
    bracketedExpression     ::=  "(" expression ")" ; 
    
    negatedExpression       ::=  "!"<NO_WHITESPACE>expression ; 
    
    logicalExpression       ::=  expression ( "||" | "&&" ) expression ; 
    


    comparisonTerm          ::=  term ( "==" | "!=" ) term ; 
    
    bracketedTerm           ::=  "(" term ")" ; 
    
    negatedTerm             ::=  "!"<NO_WHITESPACE>term ; 
    
    logicalTerm             ::=  term ( "||" | "&&" ) term ; 


    
    expression              ::=  comparisonExpression 
    
                              |  bracketedExpression 
    
                              |  logicalExpression 
    
                              |  negatedExpression 
    
                              |  procedureCall
     
                              |  returnBlock
    
                              |  nodeQuery
                              
                              |  nodesQuery
                              
                              |  ternary
                              
                              |  reduce
    
                              |  every
    
                              |  some
                             
                              |  variable
                              
                              |  primitive
                              
                              ;
    
    
    
    term                    ::=  comparisonTerm 
    
                              |  bracketedTerm 
    
                              |  logicalTerm 
    
                              |  negatedTerm 
    
                              |  primitive 
    
                              |  variable 
                              
                              ;


    
    primitive               ::=  [string-literal]
                              
                              |  [boolean]
                              
                              |  [number] 
                              
                              |  [null]
                             
                              ;



    reference.              ::=  [name] ;
    
    variable                ::=  [name] ;
    
    label.                  ::=  [name] ;
    
    
    
    nonsense.               ::=  [secondary-keyword] | [type] | [null] | [boolean] | [string-literal] | [query] | [special] | [name] | [number] | [unassigned] ;


    
    error.                  ::=  . ;
    
`;

export default bnf;
