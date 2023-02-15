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
var bnf = "\n\n\n    document       ::=  pattern ( verticalSpace | error )* \n    \n                     |  ( verticalSpace | error )+ \n                     \n                     ;\n\n\n    pattern        ::=  [unassigned]+ ;\n\n\n    verticalSpace  ::=  <END_OF_LINE>+ ;\n\n\n    error          ::=  . ;\n\n\n";
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyUGF0dGVybi9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuXG4gICAgZG9jdW1lbnQgICAgICAgOjo9ICBwYXR0ZXJuICggdmVydGljYWxTcGFjZSB8IGVycm9yICkqIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgfCAgKCB2ZXJ0aWNhbFNwYWNlIHwgZXJyb3IgKSsgXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgcGF0dGVybiAgICAgICAgOjo9ICBbdW5hc3NpZ25lZF0rIDtcblxuXG4gICAgdmVydGljYWxTcGFjZSAgOjo9ICA8RU5EX09GX0xJTkU+KyA7XG5cblxuICAgIGVycm9yICAgICAgICAgIDo6PSAgLiA7XG5cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUJBOzs7ZUFBQTs7O0FBckJBLElBQU1BLE1BQU87SUFxQmIsV0FBZUEifQ==