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
var bnf = "\n\n\n    document       ::=  ( expression | verticalSpace | error )+ ;\n\n\n    expression     ::=  <NO_WHITESPACE>[unassigned]<NO_WHITESPACE><END_OF_LINE> ;\n\n\n    verticalSpace  ::=  <END_OF_LINE>+ ;\n   \n\n    error.         ::=  . ;\n\n";
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyVm9jYWJ1bGFyeS9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuXG4gICAgZG9jdW1lbnQgICAgICAgOjo9ICAoIGV4cHJlc3Npb24gfCB2ZXJ0aWNhbFNwYWNlIHwgZXJyb3IgKSsgO1xuXG5cbiAgICBleHByZXNzaW9uICAgICA6Oj0gIDxOT19XSElURVNQQUNFPlt1bmFzc2lnbmVkXTxOT19XSElURVNQQUNFPjxFTkRfT0ZfTElORT4gO1xuXG5cbiAgICB2ZXJ0aWNhbFNwYWNlICA6Oj0gIDxFTkRfT0ZfTElORT4rIDtcbiAgIFxuXG4gICAgZXJyb3IuICAgICAgICAgOjo9ICAuIDtcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBQTs7O0FBaEJBLElBQU1BLE1BQU87SUFnQmIsV0FBZUEifQ==