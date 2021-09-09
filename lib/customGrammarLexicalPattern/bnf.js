"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var bnf = "\n\n\n    document       ::=  lexicalPattern ( verticalSpace | error )* | ( verticalSpace | error )+ ;\n\n\n    lexicalPattern ::=  [unassigned]+ ;\n\n\n    verticalSpace  ::=  <END_OF_LINE>+ ;\n\n\n    error          ::=  . ;\n\n\n";
var _default = bnf;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vYm5mLmpzIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFWixHQUFLLENBQUMsR0FBRyxJQUFJLHdPQWViO2VBRWUsR0FBRyJ9