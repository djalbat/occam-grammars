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
var bnf = "\n\n\n    document       ::=  ( block | verticalSpace )* ;\n\n\n    block          ::=  endedLine* lastLine \n                          \n                     |  endedLine+\n                          \n                     ;\n\n\n    lastLine       ::=  [unassigned]+ ;\n\n\n    endedLine      ::=  [unassigned]+ <END_OF_LINE> ;\n\n\n    verticalSpace  ::=  <END_OF_LINE>+ ;\n\n\n";
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbGFpblRleHQvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBibmYgPSBgXG5cblxuICAgIGRvY3VtZW50ICAgICAgIDo6PSAgKCBibG9jayB8IHZlcnRpY2FsU3BhY2UgKSogO1xuXG5cbiAgICBibG9jayAgICAgICAgICA6Oj0gIGVuZGVkTGluZSogbGFzdExpbmUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgfCAgZW5kZWRMaW5lK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgbGFzdExpbmUgICAgICAgOjo9ICBbdW5hc3NpZ25lZF0rIDtcblxuXG4gICAgZW5kZWRMaW5lICAgICAgOjo9ICBbdW5hc3NpZ25lZF0rIDxFTkRfT0ZfTElORT4gO1xuXG5cbiAgICB2ZXJ0aWNhbFNwYWNlICA6Oj0gIDxFTkRfT0ZfTElORT4rIDtcblxuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG4iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwQkE7OztlQUFBOzs7QUF4QkEsSUFBTUEsTUFBTztJQXdCYixXQUFlQSJ9