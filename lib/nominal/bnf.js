"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const bnf = `document                             ::=  ( variableDeclaration 
                                           
                                          | combinatorDeclaration 
                                                          
                                          | constructorDeclaration 
                                                          
                                          | metavariableDeclaration 
                                                          
                                          | typePrefixDeclaration  
                                                                                                     
                                          | simpleTypeDeclaration 
                                                          
                                          | complexTypeDeclaration 
                                                      
                                          | rule 
               
                                          | axiom 
               
                                          | lemma 
               
                                          | theorem 
               
                                          | conjecture 
               
                                          | metaLemma 
               
                                          | metatheorem  
                                                      
                                          | section 
                                                      
                                          | verticalSpace 
                                                      
                                          | error )+ ;



section                              ::=  "Given" <END_OF_LINE>

                                          hypothesis+
                                          
                                          <END_OF_LINE>
                                          
                                          ( axiom 
                                          
                                          | lemma 
                                          
                                          | theorem 
                                          
                                          | conjecture ) ; 



verticalSpace                        ::=  <END_OF_LINE>+ ;



error.                               ::=  . ;



variableDeclaration                  ::=  "Variable" variable ( ":" type "provisionally"? )? <END_OF_LINE> ;
 
combinatorDeclaration                ::=  "Combinator" combinator... <END_OF_LINE> ;
 
constructorDeclaration               ::=  "Constructor" constructor... ( ":" type "provisionally"? )? <END_OF_LINE> ;
 
metavariableDeclaration              ::=  "Metavariable" metavariable... ":" metaType <END_OF_LINE> ;
 
typePrefixDeclaration                ::=  "TypePrefix" typePrefix <END_OF_LINE> ;

simpleTypeDeclaration                ::=  "Provisional"? "Type" type ( ":" types )? <END_OF_LINE> ;
 
complexTypeDeclaration               ::=  "Provisional"? "Type" <END_OF_LINE> 

                                          type ( ":" types )? <END_OF_LINE>
                                          
                                          (
                                          
                                            ( "Properties" <END_OF_LINE> propertyDeclaration propertyDeclaration+ ) 
                                             
                                            | 
                                             
                                            ( "Property" <END_OF_LINE> propertyDeclaration ) 
                                             
                                          );
  

  
rule                                 ::=  ruleHeader ruleBody ;                                         

metaLemma                            ::=  metaLemmaHeader metaLemmaBody ;

metatheorem                          ::=  metatheoremHeader metatheoremBody ;

axiom                                ::=  axiomHeader axiomBody ;

lemma                                ::=  lemmaHeader lemmaBody ;

theorem                              ::=  theoremHeader theoremBody ;

conjecture                           ::=  conjectureHeader conjectureBody ;



ruleHeader                          ::=  "Rule" parenthesisedLabels... <END_OF_LINE> ; 

metaLemmaHeader                     ::=  "MetaLemma" parenthesisedLabel... <END_OF_LINE> | "MetaLemma" <END_OF_LINE> ;

metatheoremHeader                   ::=  "Metatheorem" parenthesisedLabel... <END_OF_LINE> ; 

axiomHeader                         ::=  "Axiom" signature? parenthesisedLabels... <END_OF_LINE> ; 

lemmaHeader                         ::=  "Lemma" parenthesisedLabels... <END_OF_LINE> | "Lemma" <END_OF_LINE> ; 

theoremHeader                       ::=  "Theorem" parenthesisedLabels... <END_OF_LINE> ; 

conjectureHeader                    ::=  "Conjecture" parenthesisedLabels... <END_OF_LINE> ;



ruleBody                             ::=  ( 

                                            ( "Premises" <END_OF_LINE> premise premise+ ) 
                                             
                                            | 
                                             
                                            ( "Premise" <END_OF_LINE> premise ) 
                                             
                                          )?
                                             
                                          "Conclusion" <END_OF_LINE> conclusion 
                                           
                                          proof? ;                                         

metaLemmaBody                        ::=  (
                                           
                                            "Suppose" <END_OF_LINE> supposition+ 

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          deduction
                                                                                         
                                          proof ;

metatheoremBody                      ::=  (
                                           
                                            "Suppose" <END_OF_LINE> supposition+ 

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          deduction
                                           
                                          proof ;

axiomBody                            ::=  (
                                           
                                            "Suppose" <END_OF_LINE> supposition+
    
                                            "Then" <END_OF_LINE> 
                                                 
                                          )?
                                                 
                                          deduction ;

lemmaBody                            ::=  (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                            
                                          deduction
                                           
                                          proof ;

theoremBody                          ::=  (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                             
                                          deduction
                                           
                                          proof ;

conjectureBody                       ::=  (
                                           
                                            "Suppose" <END_OF_LINE> supposition+

                                            "Then" <END_OF_LINE> 
                                             
                                          )?
                                             
                                          deduction
                                           
                                          proof? ;



proof                                ::=  "Proof" <END_OF_LINE> derivation ;

subproof                             ::=  "Suppose" <END_OF_LINE> supposition+ subDerivation ;

derivation                           ::=  ( 

                                            ( step | subproof )+ 
                                            
                                            "Therefore" <END_OF_LINE> 
                                            
                                          )? 
                                          
                                          step ;                                        

subDerivation                        ::=  (

                                            "Hence" <END_OF_LINE>
    
                                            ( step | subproof )+ 
                                                                                         
                                          )? 
                                           
                                          "Then" <END_OF_LINE> 
                                           
                                          step ;                                        



propertyDeclaration.                 ::=  property ( ":" type )? <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;



combinator                           ::=  statement ;

constructor                          ::=  term ; 

 

premise.                             ::=  procedureCall <END_OF_LINE>  

                                       |  statement... <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;

supposition.                         ::=  procedureCall <END_OF_LINE>  

                                       |  statement... <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;

conclusion.                          ::=  statement... <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;

deduction.                           ::=  statement... <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;

hypothesis.                          ::=  statement... <END_OF_LINE>  

                                       |  nonsense... <END_OF_LINE>
                                       
                                       ;



step.                                ::=  statement... qualification? <END_OF_LINE>  

                                       |  nonsense... qualification? <END_OF_LINE>
                                       
                                       ;



qualification                        ::=  "because" satisfiesAssertion

                                       |  ( "by" | "from" ) reference
                                       
                                       ; 



parenthesisedLabels                  ::=  "(" labels ")" ; 

parenthesisedLabel                   ::=  "(" label ")" ; 



procedureCall                        ::=  "@"<NO_WHITESPACE>procedureReference<NO_WHITESPACE>"(" parameter ( "," parameter )* ")" ;



signature                            ::=  "[" term ( "," term )* "]" ;



arguments                            ::=  argument ( "," argument )* ;

labels                               ::=  label ( "," label )* ;

types                                ::=  type ( "," type )* ;



argument                             ::=  term ( ) 

                                       |  type ( )
                                       
                                       ;

metaArgument                         ::=  statement ( ) 

                                       |  metaType ( ) 
                                       
                                       ;

frameArgument                        ::=  frame ( ) 

                                       |  metaType ( ) 
                                       
                                       ;


procedureReference.                  ::=  [name] ;

reference.                           ::=  metavariable ;

label.                               ::=  metavariable ;



equivalences                         ::=  equivalence ( "," equivalence )* ;

equivalence                          ::=  "[" term ( "," term )+ "]" ;



metavariable.                        ::=  [name] ( <NO_WHITESPACE>"(" ( term | type | stuff ) ")" )? ;

parameter.                           ::=  [name] | [identifier] ;

variable.                            ::=  [identifier] ;

metaType.                            ::=  [meta-type] ;

property.                            ::=  [name]+ ;

typePrefix.                          ::=  [type] ;

type.                                ::=  [type] ( <NO_WHITESPACE>[type] )? 

                                       |  "<"<NO_WHITESPACE>">"

                                       ;



stuff.                               ::=  ( [string-literal] | [symbol] | [type] | [name] | [identifier] | [primitive] | [unassigned] )+ ;

nonsense.                            ::=  ( [secondary-keyword] | [meta-type] | [special] | [symbol] | [type] | [name] | [identifier] | [primitive] | [unassigned] )+ ;`;
const _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL2JuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYm5mID0gYGRvY3VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICggdmFyaWFibGVEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY29tYmluYXRvckRlY2xhcmF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHlwZVByZWZpeERlY2xhcmF0aW9uICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNpbXBsZVR5cGVEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY29tcGxleFR5cGVEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBydWxlIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGF4aW9tIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGxlbW1hIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRoZW9yZW0gXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY29uamVjdHVyZSBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtZXRhTGVtbWEgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbWV0YXRoZW9yZW0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNlY3Rpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdmVydGljYWxTcGFjZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlcnJvciApKyA7XG5cblxuXG5zZWN0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIkdpdmVuXCIgPEVORF9PRl9MSU5FPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoeXBvdGhlc2lzK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RU5EX09GX0xJTkU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggYXhpb20gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVtbWEgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGhlb3JlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjb25qZWN0dXJlICkgOyBcblxuXG5cbnZlcnRpY2FsU3BhY2UgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIDxFTkRfT0ZfTElORT4rIDtcblxuXG5cbmVycm9yLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIC4gO1xuXG5cblxudmFyaWFibGVEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgIDo6PSAgXCJWYXJpYWJsZVwiIHZhcmlhYmxlICggXCI6XCIgdHlwZSBcInByb3Zpc2lvbmFsbHlcIj8gKT8gPEVORF9PRl9MSU5FPiA7XG4gXG5jb21iaW5hdG9yRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgOjo9ICBcIkNvbWJpbmF0b3JcIiBjb21iaW5hdG9yLi4uIDxFTkRfT0ZfTElORT4gO1xuIFxuY29uc3RydWN0b3JEZWNsYXJhdGlvbiAgICAgICAgICAgICAgIDo6PSAgXCJDb25zdHJ1Y3RvclwiIGNvbnN0cnVjdG9yLi4uICggXCI6XCIgdHlwZSBcInByb3Zpc2lvbmFsbHlcIj8gKT8gPEVORF9PRl9MSU5FPiA7XG4gXG5tZXRhdmFyaWFibGVEZWNsYXJhdGlvbiAgICAgICAgICAgICAgOjo9ICBcIk1ldGF2YXJpYWJsZVwiIG1ldGF2YXJpYWJsZS4uLiBcIjpcIiBtZXRhVHlwZSA8RU5EX09GX0xJTkU+IDtcbiBcbnR5cGVQcmVmaXhEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICA6Oj0gIFwiVHlwZVByZWZpeFwiIHR5cGVQcmVmaXggPEVORF9PRl9MSU5FPiA7XG5cbnNpbXBsZVR5cGVEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICA6Oj0gIFwiUHJvdmlzaW9uYWxcIj8gXCJUeXBlXCIgdHlwZSAoIFwiOlwiIHR5cGVzICk/IDxFTkRfT0ZfTElORT4gO1xuIFxuY29tcGxleFR5cGVEZWNsYXJhdGlvbiAgICAgICAgICAgICAgIDo6PSAgXCJQcm92aXNpb25hbFwiPyBcIlR5cGVcIiA8RU5EX09GX0xJTkU+IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlICggXCI6XCIgdHlwZXMgKT8gPEVORF9PRl9MSU5FPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBcIlByb3BlcnRpZXNcIiA8RU5EX09GX0xJTkU+IHByb3BlcnR5RGVjbGFyYXRpb24gcHJvcGVydHlEZWNsYXJhdGlvbisgKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggXCJQcm9wZXJ0eVwiIDxFTkRfT0ZfTElORT4gcHJvcGVydHlEZWNsYXJhdGlvbiApIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICBcblxuICBcbnJ1bGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHJ1bGVIZWFkZXIgcnVsZUJvZHkgOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbm1ldGFMZW1tYSAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIG1ldGFMZW1tYUhlYWRlciBtZXRhTGVtbWFCb2R5IDtcblxubWV0YXRoZW9yZW0gICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgbWV0YXRoZW9yZW1IZWFkZXIgbWV0YXRoZW9yZW1Cb2R5IDtcblxuYXhpb20gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgYXhpb21IZWFkZXIgYXhpb21Cb2R5IDtcblxubGVtbWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgbGVtbWFIZWFkZXIgbGVtbWFCb2R5IDtcblxudGhlb3JlbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGhlb3JlbUhlYWRlciB0aGVvcmVtQm9keSA7XG5cbmNvbmplY3R1cmUgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIGNvbmplY3R1cmVIZWFkZXIgY29uamVjdHVyZUJvZHkgO1xuXG5cblxucnVsZUhlYWRlciAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIlJ1bGVcIiBwYXJlbnRoZXNpc2VkTGFiZWxzLi4uIDxFTkRfT0ZfTElORT4gOyBcblxubWV0YUxlbW1hSGVhZGVyICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIk1ldGFMZW1tYVwiIHBhcmVudGhlc2lzZWRMYWJlbC4uLiA8RU5EX09GX0xJTkU+IHwgXCJNZXRhTGVtbWFcIiA8RU5EX09GX0xJTkU+IDtcblxubWV0YXRoZW9yZW1IZWFkZXIgICAgICAgICAgICAgICAgICAgOjo9ICBcIk1ldGF0aGVvcmVtXCIgcGFyZW50aGVzaXNlZExhYmVsLi4uIDxFTkRfT0ZfTElORT4gOyBcblxuYXhpb21IZWFkZXIgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIkF4aW9tXCIgc2lnbmF0dXJlPyBwYXJlbnRoZXNpc2VkTGFiZWxzLi4uIDxFTkRfT0ZfTElORT4gOyBcblxubGVtbWFIZWFkZXIgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIkxlbW1hXCIgcGFyZW50aGVzaXNlZExhYmVscy4uLiA8RU5EX09GX0xJTkU+IHwgXCJMZW1tYVwiIDxFTkRfT0ZfTElORT4gOyBcblxudGhlb3JlbUhlYWRlciAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIlRoZW9yZW1cIiBwYXJlbnRoZXNpc2VkTGFiZWxzLi4uIDxFTkRfT0ZfTElORT4gOyBcblxuY29uamVjdHVyZUhlYWRlciAgICAgICAgICAgICAgICAgICAgOjo9ICBcIkNvbmplY3R1cmVcIiBwYXJlbnRoZXNpc2VkTGFiZWxzLi4uIDxFTkRfT0ZfTElORT4gO1xuXG5cblxucnVsZUJvZHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIFwiUHJlbWlzZXNcIiA8RU5EX09GX0xJTkU+IHByZW1pc2UgcHJlbWlzZSsgKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggXCJQcmVtaXNlXCIgPEVORF9PRl9MSU5FPiBwcmVtaXNlICkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29uY2x1c2lvblwiIDxFTkRfT0ZfTElORT4gY29uY2x1c2lvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb29mPyA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxubWV0YUxlbW1hQm9keSAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1cHBvc2VcIiA8RU5EX09GX0xJTkU+IHN1cHBvc2l0aW9uKyBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZW5cIiA8RU5EX09GX0xJTkU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZHVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb29mIDtcblxubWV0YXRoZW9yZW1Cb2R5ICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1cHBvc2VcIiA8RU5EX09GX0xJTkU+IHN1cHBvc2l0aW9uKyBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZW5cIiA8RU5EX09GX0xJTkU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZHVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvb2YgO1xuXG5heGlvbUJvZHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VwcG9zZVwiIDxFTkRfT0ZfTElORT4gc3VwcG9zaXRpb24rXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhlblwiIDxFTkRfT0ZfTElORT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVkdWN0aW9uIDtcblxubGVtbWFCb2R5ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1cHBvc2VcIiA8RU5EX09GX0xJTkU+IHN1cHBvc2l0aW9uK1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhlblwiIDxFTkRfT0ZfTElORT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVkdWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9vZiA7XG5cbnRoZW9yZW1Cb2R5ICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdXBwb3NlXCIgPEVORF9PRl9MSU5FPiBzdXBwb3NpdGlvbitcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZW5cIiA8RU5EX09GX0xJTkU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWR1Y3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb29mIDtcblxuY29uamVjdHVyZUJvZHkgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1cHBvc2VcIiA8RU5EX09GX0xJTkU+IHN1cHBvc2l0aW9uK1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhlblwiIDxFTkRfT0ZfTElORT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZHVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvb2Y/IDtcblxuXG5cbnByb29mICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiUHJvb2ZcIiA8RU5EX09GX0xJTkU+IGRlcml2YXRpb24gO1xuXG5zdWJwcm9vZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIlN1cHBvc2VcIiA8RU5EX09GX0xJTkU+IHN1cHBvc2l0aW9uKyBzdWJEZXJpdmF0aW9uIDtcblxuZGVyaXZhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHN0ZXAgfCBzdWJwcm9vZiApKyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhlcmVmb3JlXCIgPEVORF9PRl9MSU5FPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcCA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5zdWJEZXJpdmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJIZW5jZVwiIDxFTkRfT0ZfTElORT5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBzdGVwIHwgc3VicHJvb2YgKSsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKT8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZW5cIiA8RU5EX09GX0xJTkU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcCA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cblxucHJvcGVydHlEZWNsYXJhdGlvbi4gICAgICAgICAgICAgICAgIDo6PSAgcHJvcGVydHkgKCBcIjpcIiB0eXBlICk/IDxFTkRfT0ZfTElORT4gIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBub25zZW5zZS4uLiA8RU5EX09GX0xJTkU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG5cbmNvbWJpbmF0b3IgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHN0YXRlbWVudCA7XG5cbmNvbnN0cnVjdG9yICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHRlcm0gOyBcblxuIFxuXG5wcmVtaXNlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBwcm9jZWR1cmVDYWxsIDxFTkRfT0ZfTElORT4gIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzdGF0ZW1lbnQuLi4gPEVORF9PRl9MSU5FPiAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG5vbnNlbnNlLi4uIDxFTkRfT0ZfTElORT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5zdXBwb3NpdGlvbi4gICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBwcm9jZWR1cmVDYWxsIDxFTkRfT0ZfTElORT4gIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzdGF0ZW1lbnQuLi4gPEVORF9PRl9MSU5FPiAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG5vbnNlbnNlLi4uIDxFTkRfT0ZfTElORT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5jb25jbHVzaW9uLiAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBzdGF0ZW1lbnQuLi4gPEVORF9PRl9MSU5FPiAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG5vbnNlbnNlLi4uIDxFTkRfT0ZfTElORT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5kZWR1Y3Rpb24uICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBzdGF0ZW1lbnQuLi4gPEVORF9PRl9MSU5FPiAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG5vbnNlbnNlLi4uIDxFTkRfT0ZfTElORT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5oeXBvdGhlc2lzLiAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBzdGF0ZW1lbnQuLi4gPEVORF9PRl9MSU5FPiAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG5vbnNlbnNlLi4uIDxFTkRfT0ZfTElORT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cblxuc3RlcC4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgc3RhdGVtZW50Li4uIHF1YWxpZmljYXRpb24/IDxFTkRfT0ZfTElORT4gIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBub25zZW5zZS4uLiBxdWFsaWZpY2F0aW9uPyA8RU5EX09GX0xJTkU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG5cbnF1YWxpZmljYXRpb24gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiYmVjYXVzZVwiIHNhdGlzZmllc0Fzc2VydGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAoIFwiYnlcIiB8IFwiZnJvbVwiICkgcmVmZXJlbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDsgXG5cblxuXG5wYXJlbnRoZXNpc2VkTGFiZWxzICAgICAgICAgICAgICAgICAgOjo9ICBcIihcIiBsYWJlbHMgXCIpXCIgOyBcblxucGFyZW50aGVzaXNlZExhYmVsICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgbGFiZWwgXCIpXCIgOyBcblxuXG5cbnByb2NlZHVyZUNhbGwgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiQFwiPE5PX1dISVRFU1BBQ0U+cHJvY2VkdXJlUmVmZXJlbmNlPE5PX1dISVRFU1BBQ0U+XCIoXCIgcGFyYW1ldGVyICggXCIsXCIgcGFyYW1ldGVyICkqIFwiKVwiIDtcblxuXG5cbnNpZ25hdHVyZSAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHRlcm0gKCBcIixcIiB0ZXJtICkqIFwiXVwiIDtcblxuXG5cbmFyZ3VtZW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIGFyZ3VtZW50ICggXCIsXCIgYXJndW1lbnQgKSogO1xuXG5sYWJlbHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBsYWJlbCAoIFwiLFwiIGxhYmVsICkqIDtcblxudHlwZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdHlwZSAoIFwiLFwiIHR5cGUgKSogO1xuXG5cblxuYXJndW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSAoICkgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHR5cGUgKCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxubWV0YUFyZ3VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgc3RhdGVtZW50ICggKSBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbWV0YVR5cGUgKCApIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbmZyYW1lQXJndW1lbnQgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIGZyYW1lICggKSBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbWV0YVR5cGUgKCApIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxucHJvY2VkdXJlUmVmZXJlbmNlLiAgICAgICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcblxucmVmZXJlbmNlLiAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgbWV0YXZhcmlhYmxlIDtcblxubGFiZWwuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgbWV0YXZhcmlhYmxlIDtcblxuXG5cbmVxdWl2YWxlbmNlcyAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIGVxdWl2YWxlbmNlICggXCIsXCIgZXF1aXZhbGVuY2UgKSogO1xuXG5lcXVpdmFsZW5jZSAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiB0ZXJtICggXCIsXCIgdGVybSApKyBcIl1cIiA7XG5cblxuXG5tZXRhdmFyaWFibGUuICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBbbmFtZV0gKCA8Tk9fV0hJVEVTUEFDRT5cIihcIiAoIHRlcm0gfCB0eXBlIHwgc3R1ZmYgKSBcIilcIiApPyA7XG5cbnBhcmFtZXRlci4gICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFtuYW1lXSB8IFtpZGVudGlmaWVyXSA7XG5cbnZhcmlhYmxlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFtpZGVudGlmaWVyXSA7XG5cbm1ldGFUeXBlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFttZXRhLXR5cGVdIDtcblxucHJvcGVydHkuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgW25hbWVdKyA7XG5cbnR5cGVQcmVmaXguICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFt0eXBlXSA7XG5cbnR5cGUuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFt0eXBlXSAoIDxOT19XSElURVNQQUNFPlt0eXBlXSApPyBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCI8XCI8Tk9fV0hJVEVTUEFDRT5cIj5cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuXG5zdHVmZi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAoIFtzdHJpbmctbGl0ZXJhbF0gfCBbc3ltYm9sXSB8IFt0eXBlXSB8IFtuYW1lXSB8IFtpZGVudGlmaWVyXSB8IFtwcmltaXRpdmVdIHwgW3VuYXNzaWduZWRdICkrIDtcblxubm9uc2Vuc2UuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBbc2Vjb25kYXJ5LWtleXdvcmRdIHwgW21ldGEtdHlwZV0gfCBbc3BlY2lhbF0gfCBbc3ltYm9sXSB8IFt0eXBlXSB8IFtuYW1lXSB8IFtpZGVudGlmaWVyXSB8IFtwcmltaXRpdmVdIHwgW3VuYXNzaWduZWRdICkrIDtgO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG4iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2WEE7OztlQUFBOzs7QUEzWEEsTUFBTUEsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1S0F5WDBKLENBQUM7TUFFeEssV0FBZUEifQ==