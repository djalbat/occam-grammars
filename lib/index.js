"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TeXLexer", {
    enumerable: true,
    get: function() {
        return _lexer.default;
    }
});
Object.defineProperty(exports, "TeXParser", {
    enumerable: true,
    get: function() {
        return _parser.default;
    }
});
Object.defineProperty(exports, "PlainLexer", {
    enumerable: true,
    get: function() {
        return _lexer1.default;
    }
});
Object.defineProperty(exports, "PlainParser", {
    enumerable: true,
    get: function() {
        return _parser1.default;
    }
});
Object.defineProperty(exports, "ReadmeLexer", {
    enumerable: true,
    get: function() {
        return _lexer2.default;
    }
});
Object.defineProperty(exports, "ReadmeParser", {
    enumerable: true,
    get: function() {
        return _parser2.default;
    }
});
Object.defineProperty(exports, "MetaJSONLexer", {
    enumerable: true,
    get: function() {
        return _lexer3.default;
    }
});
Object.defineProperty(exports, "MetaJSONParser", {
    enumerable: true,
    get: function() {
        return _parser3.default;
    }
});
Object.defineProperty(exports, "FlorenceLexer", {
    enumerable: true,
    get: function() {
        return _lexer4.default;
    }
});
Object.defineProperty(exports, "FlorenceParser", {
    enumerable: true,
    get: function() {
        return _parser4.default;
    }
});
Object.defineProperty(exports, "defaultCustomGrammar", {
    enumerable: true,
    get: function() {
        return _defaultCustomGrammar.default;
    }
});
Object.defineProperty(exports, "CustomGrammarBNFLexer", {
    enumerable: true,
    get: function() {
        return _lexer5.default;
    }
});
Object.defineProperty(exports, "CustomGrammarBNFParser", {
    enumerable: true,
    get: function() {
        return _parser5.default;
    }
});
Object.defineProperty(exports, "CustomGrammarLexicalPatternLexer", {
    enumerable: true,
    get: function() {
        return _lexer6.default;
    }
});
Object.defineProperty(exports, "CustomGrammarLexicalPatternParser", {
    enumerable: true,
    get: function() {
        return _parser6.default;
    }
});
var _lexer = _interopRequireDefault(require("./teX/lexer"));
var _parser = _interopRequireDefault(require("./teX/parser"));
var _lexer1 = _interopRequireDefault(require("./plain/lexer"));
var _parser1 = _interopRequireDefault(require("./plain/parser"));
var _lexer2 = _interopRequireDefault(require("./readme/lexer"));
var _parser2 = _interopRequireDefault(require("./readme/parser"));
var _lexer3 = _interopRequireDefault(require("./metaJSON/lexer"));
var _parser3 = _interopRequireDefault(require("./metaJSON/parser"));
var _lexer4 = _interopRequireDefault(require("./florence/lexer"));
var _parser4 = _interopRequireDefault(require("./florence/parser"));
var _defaultCustomGrammar = _interopRequireDefault(require("./florence/defaultCustomGrammar"));
var _lexer5 = _interopRequireDefault(require("./customGrammarBNF/lexer"));
var _parser5 = _interopRequireDefault(require("./customGrammarBNF/parser"));
var _lexer6 = _interopRequireDefault(require("./customGrammarLexicalPattern/lexer"));
var _parser6 = _interopRequireDefault(require("./customGrammarLexicalPattern/parser"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhMZXhlciB9IGZyb20gXCIuL3RlWC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhQYXJzZXIgfSBmcm9tIFwiLi90ZVgvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluTGV4ZXIgfSBmcm9tIFwiLi9wbGFpbi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbGFpblBhcnNlciB9IGZyb20gXCIuL3BsYWluL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkbWVMZXhlciB9IGZyb20gXCIuL3JlYWRtZS9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkbWVQYXJzZXIgfSBmcm9tIFwiLi9yZWFkbWUvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1ldGFKU09OTGV4ZXIgfSBmcm9tIFwiLi9tZXRhSlNPTi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXRhSlNPTlBhcnNlciB9IGZyb20gXCIuL21ldGFKU09OL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGbG9yZW5jZUxleGVyIH0gZnJvbSBcIi4vZmxvcmVuY2UvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwiLi9mbG9yZW5jZS9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyQk5GTGV4ZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vcGFyc2VyXCI7XG4iXSwibmFtZXMiOlsiVGVYTGV4ZXIiLCJkZWZhdWx0IiwiVGVYUGFyc2VyIiwiUGxhaW5MZXhlciIsIlBsYWluUGFyc2VyIiwiUmVhZG1lTGV4ZXIiLCJSZWFkbWVQYXJzZXIiLCJNZXRhSlNPTkxleGVyIiwiTWV0YUpTT05QYXJzZXIiLCJGbG9yZW5jZUxleGVyIiwiRmxvcmVuY2VQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXJCTkZMZXhlciIsIkN1c3RvbUdyYW1tYXJCTkZQYXJzZXIiLCJDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciIsIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjsrQkFFb0JBLFVBQVE7OztzQkFBbkJDLE9BQU87O0VBRmhCOytCQUdvQkMsV0FBUzs7O3VCQUFwQkQsT0FBTzs7RUFIaEI7K0JBSW9CRSxZQUFVOzs7dUJBQXJCRixPQUFPOztFQUpoQjsrQkFLb0JHLGFBQVc7Ozt3QkFBdEJILE9BQU87O0VBTGhCOytCQU1vQkksYUFBVzs7O3VCQUF0QkosT0FBTzs7RUFOaEI7K0JBT29CSyxjQUFZOzs7d0JBQXZCTCxPQUFPOztFQVBoQjsrQkFRb0JNLGVBQWE7Ozt1QkFBeEJOLE9BQU87O0VBUmhCOytCQVNvQk8sZ0JBQWM7Ozt3QkFBekJQLE9BQU87O0VBVGhCOytCQVVvQlEsZUFBYTs7O3VCQUF4QlIsT0FBTzs7RUFWaEI7K0JBV29CUyxnQkFBYzs7O3dCQUF6QlQsT0FBTzs7RUFYaEI7K0JBWW9CVSxzQkFBb0I7OztxQ0FBL0JWLE9BQU87O0VBWmhCOytCQWFvQlcsdUJBQXFCOzs7dUJBQWhDWCxPQUFPOztFQWJoQjsrQkFjb0JZLHdCQUFzQjs7O3dCQUFqQ1osT0FBTzs7RUFkaEI7K0JBZW9CYSxrQ0FBZ0M7Ozt1QkFBM0NiLE9BQU87O0VBZmhCOytCQWdCb0JjLG1DQUFpQzs7O3dCQUE1Q2QsT0FBTzs7RUFoQmhCOzRDQUVvQyxhQUFhOzZDQUNaLGNBQWM7NkNBQ2IsZUFBZTs4Q0FDZCxnQkFBZ0I7NkNBQ2hCLGdCQUFnQjs4Q0FDZixpQkFBaUI7NkNBQ2hCLGtCQUFrQjs4Q0FDakIsbUJBQW1COzZDQUNwQixrQkFBa0I7OENBQ2pCLG1CQUFtQjsyREFDYixpQ0FBaUM7NkNBQ2hDLDBCQUEwQjs4Q0FDekIsMkJBQTJCOzZDQUNqQixxQ0FBcUM7OENBQ3BDLHNDQUFzQyJ9