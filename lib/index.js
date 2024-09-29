"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BasicLexer: function() {
        return _lexer2.default;
    },
    BasicParser: function() {
        return _parser2.default;
    },
    CustomGrammarBNFLexer: function() {
        return _lexer5.default;
    },
    CustomGrammarBNFParser: function() {
        return _parser5.default;
    },
    CustomGrammarPatternLexer: function() {
        return _lexer6.default;
    },
    CustomGrammarPatternParser: function() {
        return _parser6.default;
    },
    JSONLexer: function() {
        return _lexer1.default;
    },
    JSONParser: function() {
        return _parser1.default;
    },
    NominalLexer: function() {
        return _lexer3.default;
    },
    NominalParser: function() {
        return _parser3.default;
    },
    PlainTextLexer: function() {
        return _lexer4.default;
    },
    PlainTextParser: function() {
        return _parser4.default;
    },
    TeXLexer: function() {
        return _lexer.default;
    },
    TeXParser: function() {
        return _parser.default;
    }
});
var _lexer = /*#__PURE__*/ _interop_require_default(require("./teX/lexer"));
var _lexer1 = /*#__PURE__*/ _interop_require_default(require("./json/lexer"));
var _lexer2 = /*#__PURE__*/ _interop_require_default(require("./basic/lexer"));
var _lexer3 = /*#__PURE__*/ _interop_require_default(require("./nominal/lexer"));
var _lexer4 = /*#__PURE__*/ _interop_require_default(require("./plainText/lexer"));
var _lexer5 = /*#__PURE__*/ _interop_require_default(require("./customGrammarBNF/lexer"));
var _lexer6 = /*#__PURE__*/ _interop_require_default(require("./customGrammarPattern/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("./teX/parser"));
var _parser1 = /*#__PURE__*/ _interop_require_default(require("./json/parser"));
var _parser2 = /*#__PURE__*/ _interop_require_default(require("./basic/parser"));
var _parser3 = /*#__PURE__*/ _interop_require_default(require("./nominal/parser"));
var _parser4 = /*#__PURE__*/ _interop_require_default(require("./plainText/parser"));
var _parser5 = /*#__PURE__*/ _interop_require_default(require("./customGrammarBNF/parser"));
var _parser6 = /*#__PURE__*/ _interop_require_default(require("./customGrammarPattern/parser"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhMZXhlciB9IGZyb20gXCIuL3RlWC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBKU09OTGV4ZXIgfSBmcm9tIFwiLi9qc29uL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2ljTGV4ZXIgfSBmcm9tIFwiLi9iYXNpYy9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOb21pbmFsTGV4ZXIgfSBmcm9tIFwiLi9ub21pbmFsL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluVGV4dExleGVyIH0gZnJvbSBcIi4vcGxhaW5UZXh0L2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJCTkZMZXhlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJCTkYvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hclBhdHRlcm5MZXhlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJQYXR0ZXJuL2xleGVyXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGVYUGFyc2VyIH0gZnJvbSBcIi4vdGVYL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBKU09OUGFyc2VyIH0gZnJvbSBcIi4vanNvbi9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQmFzaWNQYXJzZXIgfSBmcm9tIFwiLi9iYXNpYy9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm9taW5hbFBhcnNlciB9IGZyb20gXCIuL25vbWluYWwvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluVGV4dFBhcnNlciB9IGZyb20gXCIuL3BsYWluVGV4dC9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hckJORlBhcnNlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJCTkYvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJQYXR0ZXJuUGFyc2VyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hclBhdHRlcm4vcGFyc2VyXCI7XG4iXSwibmFtZXMiOlsiQmFzaWNMZXhlciIsIkJhc2ljUGFyc2VyIiwiQ3VzdG9tR3JhbW1hckJORkxleGVyIiwiQ3VzdG9tR3JhbW1hckJORlBhcnNlciIsIkN1c3RvbUdyYW1tYXJQYXR0ZXJuTGV4ZXIiLCJDdXN0b21HcmFtbWFyUGF0dGVyblBhcnNlciIsIkpTT05MZXhlciIsIkpTT05QYXJzZXIiLCJOb21pbmFsTGV4ZXIiLCJOb21pbmFsUGFyc2VyIiwiUGxhaW5UZXh0TGV4ZXIiLCJQbGFpblRleHRQYXJzZXIiLCJUZVhMZXhlciIsIlRlWFBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSW9CQSxVQUFVO2VBQVZBLGVBQVU7O0lBUVZDLFdBQVc7ZUFBWEEsZ0JBQVc7O0lBTFhDLHFCQUFxQjtlQUFyQkEsZUFBcUI7O0lBUXJCQyxzQkFBc0I7ZUFBdEJBLGdCQUFzQjs7SUFQdEJDLHlCQUF5QjtlQUF6QkEsZUFBeUI7O0lBUXpCQywwQkFBMEI7ZUFBMUJBLGdCQUEwQjs7SUFiMUJDLFNBQVM7ZUFBVEEsZUFBUzs7SUFRVEMsVUFBVTtlQUFWQSxnQkFBVTs7SUFOVkMsWUFBWTtlQUFaQSxlQUFZOztJQVFaQyxhQUFhO2VBQWJBLGdCQUFhOztJQVBiQyxjQUFjO2VBQWRBLGVBQWM7O0lBUWRDLGVBQWU7ZUFBZkEsZ0JBQWU7O0lBWmZDLFFBQVE7ZUFBUkEsY0FBUTs7SUFRUkMsU0FBUztlQUFUQSxlQUFTOzs7NERBUk87NkRBQ0M7NkRBQ0M7NkRBQ0U7NkRBQ0U7NkRBQ087NkRBQ0k7NkRBRWhCOzhEQUNDOzhEQUNDOzhEQUNFOzhEQUNFOzhEQUNPOzhEQUNJIn0=