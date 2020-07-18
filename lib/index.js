"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PlainLexer", {
  enumerable: true,
  get: function get() {
    return _lexer["default"];
  }
});
Object.defineProperty(exports, "PlainParser", {
  enumerable: true,
  get: function get() {
    return _parser["default"];
  }
});
Object.defineProperty(exports, "LaTeXLexer", {
  enumerable: true,
  get: function get() {
    return _lexer2["default"];
  }
});
Object.defineProperty(exports, "LaTeXParser", {
  enumerable: true,
  get: function get() {
    return _parser2["default"];
  }
});
Object.defineProperty(exports, "MetaJSONLexer", {
  enumerable: true,
  get: function get() {
    return _lexer3["default"];
  }
});
Object.defineProperty(exports, "MetaJSONParser", {
  enumerable: true,
  get: function get() {
    return _parser3["default"];
  }
});
Object.defineProperty(exports, "FlorenceLexer", {
  enumerable: true,
  get: function get() {
    return _lexer4["default"];
  }
});
Object.defineProperty(exports, "FlorenceParser", {
  enumerable: true,
  get: function get() {
    return _parser4["default"];
  }
});
Object.defineProperty(exports, "defaultCustomGrammar", {
  enumerable: true,
  get: function get() {
    return _defaultCustomGrammar["default"];
  }
});
Object.defineProperty(exports, "CustomGrammarBNFLexer", {
  enumerable: true,
  get: function get() {
    return _lexer5["default"];
  }
});
Object.defineProperty(exports, "CustomGrammarBNFParser", {
  enumerable: true,
  get: function get() {
    return _parser5["default"];
  }
});
Object.defineProperty(exports, "CustomGrammarLexicalPatternLexer", {
  enumerable: true,
  get: function get() {
    return _lexer6["default"];
  }
});
Object.defineProperty(exports, "CustomGrammarLexicalPatternParser", {
  enumerable: true,
  get: function get() {
    return _parser6["default"];
  }
});

var _lexer = _interopRequireDefault(require("./plain/lexer"));

var _parser = _interopRequireDefault(require("./plain/parser"));

var _lexer2 = _interopRequireDefault(require("./laTeX/lexer"));

var _parser2 = _interopRequireDefault(require("./laTeX/parser"));

var _lexer3 = _interopRequireDefault(require("./metaJSON/lexer"));

var _parser3 = _interopRequireDefault(require("./metaJSON/parser"));

var _lexer4 = _interopRequireDefault(require("./florence/lexer"));

var _parser4 = _interopRequireDefault(require("./florence/parser"));

var _defaultCustomGrammar = _interopRequireDefault(require("./florence/defaultCustomGrammar"));

var _lexer5 = _interopRequireDefault(require("./customGrammarBNF/lexer"));

var _parser5 = _interopRequireDefault(require("./customGrammarBNF/parser"));

var _lexer6 = _interopRequireDefault(require("./customGrammarLexicalPattern/lexer"));

var _parser6 = _interopRequireDefault(require("./customGrammarLexicalPattern/parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluTGV4ZXIgfSBmcm9tIFwiLi9wbGFpbi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbGFpblBhcnNlciB9IGZyb20gXCIuL3BsYWluL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYVRlWExleGVyIH0gZnJvbSBcIi4vbGFUZVgvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGFUZVhQYXJzZXIgfSBmcm9tIFwiLi9sYVRlWC9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWV0YUpTT05MZXhlciB9IGZyb20gXCIuL21ldGFKU09OL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1ldGFKU09OUGFyc2VyIH0gZnJvbSBcIi4vbWV0YUpTT04vcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZsb3JlbmNlTGV4ZXIgfSBmcm9tIFwiLi9mbG9yZW5jZS9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGbG9yZW5jZVBhcnNlciB9IGZyb20gXCIuL2Zsb3JlbmNlL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWZhdWx0Q3VzdG9tR3JhbW1hciB9IGZyb20gXCIuL2Zsb3JlbmNlL2RlZmF1bHRDdXN0b21HcmFtbWFyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJCTkZMZXhlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJCTkYvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hckJORlBhcnNlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJCTkYvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybi9wYXJzZXJcIjtcbiJdfQ==