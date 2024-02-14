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
    CustomGrammarBNFLexer: function() {
        return _lexer4.default;
    },
    CustomGrammarBNFParser: function() {
        return _parser4.default;
    },
    CustomGrammarPatternLexer: function() {
        return _lexer5.default;
    },
    CustomGrammarPatternParser: function() {
        return _parser5.default;
    },
    FlorenceLexer: function() {
        return _lexer2.default;
    },
    FlorenceParser: function() {
        return _parser2.default;
    },
    MarkdownLexer: function() {
        return _highmarkgrammar.MarkdownLexer;
    },
    MarkdownParser: function() {
        return _highmarkgrammar.MarkdownParser;
    },
    MetaJSONLexer: function() {
        return _lexer1.default;
    },
    MetaJSONParser: function() {
        return _parser1.default;
    },
    PlainTextLexer: function() {
        return _lexer3.default;
    },
    PlainTextParser: function() {
        return _parser3.default;
    },
    TeXLexer: function() {
        return _lexer.default;
    },
    TeXParser: function() {
        return _parser.default;
    }
});
var _highmarkgrammar = require("highmark-grammar");
var _lexer = /*#__PURE__*/ _interop_require_default(require("./teX/lexer"));
var _lexer1 = /*#__PURE__*/ _interop_require_default(require("./metaJSON/lexer"));
var _lexer2 = /*#__PURE__*/ _interop_require_default(require("./florence/lexer"));
var _lexer3 = /*#__PURE__*/ _interop_require_default(require("./plainText/lexer"));
var _lexer4 = /*#__PURE__*/ _interop_require_default(require("./customGrammarBNF/lexer"));
var _lexer5 = /*#__PURE__*/ _interop_require_default(require("./customGrammarPattern/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("./teX/parser"));
var _parser1 = /*#__PURE__*/ _interop_require_default(require("./metaJSON/parser"));
var _parser2 = /*#__PURE__*/ _interop_require_default(require("./florence/parser"));
var _parser3 = /*#__PURE__*/ _interop_require_default(require("./plainText/parser"));
var _parser4 = /*#__PURE__*/ _interop_require_default(require("./customGrammarBNF/parser"));
var _parser5 = /*#__PURE__*/ _interop_require_default(require("./customGrammarPattern/parser"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIgfSBmcm9tIFwiaGlnaG1hcmstZ3JhbW1hclwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlWExleGVyIH0gZnJvbSBcIi4vdGVYL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1ldGFKU09OTGV4ZXIgfSBmcm9tIFwiLi9tZXRhSlNPTi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGbG9yZW5jZUxleGVyIH0gZnJvbSBcIi4vZmxvcmVuY2UvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGxhaW5UZXh0TGV4ZXIgfSBmcm9tIFwiLi9wbGFpblRleHQvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hckJORkxleGVyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hckJORi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyUGF0dGVybkxleGVyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hclBhdHRlcm4vbGV4ZXJcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhQYXJzZXIgfSBmcm9tIFwiLi90ZVgvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1ldGFKU09OUGFyc2VyIH0gZnJvbSBcIi4vbWV0YUpTT04vcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZsb3JlbmNlUGFyc2VyIH0gZnJvbSBcIi4vZmxvcmVuY2UvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluVGV4dFBhcnNlciB9IGZyb20gXCIuL3BsYWluVGV4dC9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hckJORlBhcnNlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJCTkYvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJQYXR0ZXJuUGFyc2VyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hclBhdHRlcm4vcGFyc2VyXCI7XG4iXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hckJORkxleGVyIiwiQ3VzdG9tR3JhbW1hckJORlBhcnNlciIsIkN1c3RvbUdyYW1tYXJQYXR0ZXJuTGV4ZXIiLCJDdXN0b21HcmFtbWFyUGF0dGVyblBhcnNlciIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsIk1hcmtkb3duTGV4ZXIiLCJNYXJrZG93blBhcnNlciIsIk1ldGFKU09OTGV4ZXIiLCJNZXRhSlNPTlBhcnNlciIsIlBsYWluVGV4dExleGVyIiwiUGxhaW5UZXh0UGFyc2VyIiwiVGVYTGV4ZXIiLCJUZVhQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVFvQkEscUJBQXFCO2VBQXJCQSxlQUFxQjs7SUFPckJDLHNCQUFzQjtlQUF0QkEsZ0JBQXNCOztJQU50QkMseUJBQXlCO2VBQXpCQSxlQUF5Qjs7SUFPekJDLDBCQUEwQjtlQUExQkEsZ0JBQTBCOztJQVYxQkMsYUFBYTtlQUFiQSxlQUFhOztJQU9iQyxjQUFjO2VBQWRBLGdCQUFjOztJQVh6QkMsYUFBYTtlQUFiQSw4QkFBYTs7SUFBRUMsY0FBYztlQUFkQSwrQkFBYzs7SUFHbEJDLGFBQWE7ZUFBYkEsZUFBYTs7SUFPYkMsY0FBYztlQUFkQSxnQkFBYzs7SUFMZEMsY0FBYztlQUFkQSxlQUFjOztJQU9kQyxlQUFlO2VBQWZBLGdCQUFlOztJQVZmQyxRQUFRO2VBQVJBLGNBQVE7O0lBT1JDLFNBQVM7ZUFBVEEsZUFBUzs7OytCQVRpQjs0REFFVjs2REFDSzs2REFDQTs2REFDQzs2REFDTzs2REFDSTs2REFFaEI7OERBQ0s7OERBQ0E7OERBQ0M7OERBQ087OERBQ0kifQ==