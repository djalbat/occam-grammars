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
var bnf = "\n\n\n    document       ::=  pattern ( verticalSpace | error )* | ( verticalSpace | error )+ ;\n\n\n    pattern        ::=  [unassigned]+ ;\n\n\n    verticalSpace  ::=  <END_OF_LINE>+ ;\n\n\n    error          ::=  . ;\n\n\n";
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyUGF0dGVybi9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuXG4gICAgZG9jdW1lbnQgICAgICAgOjo9ICBwYXR0ZXJuICggdmVydGljYWxTcGFjZSB8IGVycm9yICkqIHwgKCB2ZXJ0aWNhbFNwYWNlIHwgZXJyb3IgKSsgO1xuXG5cbiAgICBwYXR0ZXJuICAgICAgICA6Oj0gIFt1bmFzc2lnbmVkXSsgO1xuXG5cbiAgICB2ZXJ0aWNhbFNwYWNlICA6Oj0gIDxFTkRfT0ZfTElORT4rIDtcblxuXG4gICAgZXJyb3IgICAgICAgICAgOjo9ICAuIDtcblxuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG4iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQkE7OztlQUFBOzs7QUFqQkEsSUFBTUEsTUFBTztJQWlCYixXQUFlQSJ9