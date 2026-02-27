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
const bnf = `

    document                        ::=   ( delimitedTeX | plainMarkup )+ ;
    
    
    
    delimitedTeX                    ::=   dollarDelimiter inlineTeX dollarDelimiter 
    
                                      |   doubleDollarDelimiter displayTeX doubleDollarDelimiter 
    
                                      |   openingBracketDelimiter inlineTeX closingBracketDelimiter 
    
                                      |   openingSquareBracketDelimiter displayTeX closingSquareBracketDelimiter 
                                      
                                      ;
    

    
    inlineTeX                       ::=   [unassigned]* ;

    displayTeX                      ::=   [unassigned]* ;



    dollarDelimiter                 ::=   "$" ;
 
    doubleDollarDelimiter           ::=   "$$" ;
    

    
    openingBracketDelimiter         ::=   "\\(" ;

    closingBracketDelimiter         ::=   "\\)" ;

    openingSquareBracketDelimiter   ::=   "\\[" ;
    
    closingSquareBracketDelimiter   ::=   "\\]" ;
    
    
    
    plainMarkup                     ::=   . ;


`;
const _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZVgvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICBkb2N1bWVudCAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgICggZGVsaW1pdGVkVGVYIHwgcGxhaW5NYXJrdXAgKSsgO1xuICAgIFxuICAgIFxuICAgIFxuICAgIGRlbGltaXRlZFRlWCAgICAgICAgICAgICAgICAgICAgOjo9ICAgZG9sbGFyRGVsaW1pdGVyIGlubGluZVRlWCBkb2xsYXJEZWxpbWl0ZXIgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBkb3VibGVEb2xsYXJEZWxpbWl0ZXIgZGlzcGxheVRlWCBkb3VibGVEb2xsYXJEZWxpbWl0ZXIgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBvcGVuaW5nQnJhY2tldERlbGltaXRlciBpbmxpbmVUZVggY2xvc2luZ0JyYWNrZXREZWxpbWl0ZXIgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBvcGVuaW5nU3F1YXJlQnJhY2tldERlbGltaXRlciBkaXNwbGF5VGVYIGNsb3NpbmdTcXVhcmVCcmFja2V0RGVsaW1pdGVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgIFxuXG4gICAgXG4gICAgaW5saW5lVGVYICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBbdW5hc3NpZ25lZF0qIDtcblxuICAgIGRpc3BsYXlUZVggICAgICAgICAgICAgICAgICAgICAgOjo9ICAgW3VuYXNzaWduZWRdKiA7XG5cblxuXG4gICAgZG9sbGFyRGVsaW1pdGVyICAgICAgICAgICAgICAgICA6Oj0gICBcIiRcIiA7XG4gXG4gICAgZG91YmxlRG9sbGFyRGVsaW1pdGVyICAgICAgICAgICA6Oj0gICBcIiQkXCIgO1xuICAgIFxuXG4gICAgXG4gICAgb3BlbmluZ0JyYWNrZXREZWxpbWl0ZXIgICAgICAgICA6Oj0gICBcIlxcXFwoXCIgO1xuXG4gICAgY2xvc2luZ0JyYWNrZXREZWxpbWl0ZXIgICAgICAgICA6Oj0gICBcIlxcXFwpXCIgO1xuXG4gICAgb3BlbmluZ1NxdWFyZUJyYWNrZXREZWxpbWl0ZXIgICA6Oj0gICBcIlxcXFxbXCIgO1xuICAgIFxuICAgIGNsb3NpbmdTcXVhcmVCcmFja2V0RGVsaW1pdGVyICAgOjo9ICAgXCJcXFxcXVwiIDtcbiAgICBcbiAgICBcbiAgICBcbiAgICBwbGFpbk1hcmt1cCAgICAgICAgICAgICAgICAgICAgIDo6PSAgIC4gO1xuXG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcbiJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStDQTs7O2VBQUE7OztBQTdDQSxNQUFNQSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ2IsQ0FBQztNQUVELFdBQWVBIn0=