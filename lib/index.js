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
    FlorenceLexer: function() {
        return _lexer3.default;
    },
    FlorenceParser: function() {
        return _parser3.default;
    },
    MarkdownLexer: function() {
        return _lexer1.default;
    },
    MarkdownParser: function() {
        return _parser1.default;
    },
    MetaJSONLexer: function() {
        return _lexer2.default;
    },
    MetaJSONParser: function() {
        return _parser2.default;
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
var _lexer1 = /*#__PURE__*/ _interop_require_default(require("./markdown/lexer"));
var _lexer2 = /*#__PURE__*/ _interop_require_default(require("./metaJSON/lexer"));
var _lexer3 = /*#__PURE__*/ _interop_require_default(require("./florence/lexer"));
var _lexer4 = /*#__PURE__*/ _interop_require_default(require("./plainText/lexer"));
var _lexer5 = /*#__PURE__*/ _interop_require_default(require("./customGrammarBNF/lexer"));
var _lexer6 = /*#__PURE__*/ _interop_require_default(require("./customGrammarPattern/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("./teX/parser"));
var _parser1 = /*#__PURE__*/ _interop_require_default(require("./markdown/parser"));
var _parser2 = /*#__PURE__*/ _interop_require_default(require("./metaJSON/parser"));
var _parser3 = /*#__PURE__*/ _interop_require_default(require("./florence/parser"));
var _parser4 = /*#__PURE__*/ _interop_require_default(require("./plainText/parser"));
var _parser5 = /*#__PURE__*/ _interop_require_default(require("./customGrammarBNF/parser"));
var _parser6 = /*#__PURE__*/ _interop_require_default(require("./customGrammarPattern/parser"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhMZXhlciB9IGZyb20gXCIuL3RlWC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXJrZG93bkxleGVyIH0gZnJvbSBcIi4vbWFya2Rvd24vbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWV0YUpTT05MZXhlciB9IGZyb20gXCIuL21ldGFKU09OL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZsb3JlbmNlTGV4ZXIgfSBmcm9tIFwiLi9mbG9yZW5jZS9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbGFpblRleHRMZXhlciB9IGZyb20gXCIuL3BsYWluVGV4dC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyQk5GTGV4ZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJQYXR0ZXJuTGV4ZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyUGF0dGVybi9sZXhlclwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlWFBhcnNlciB9IGZyb20gXCIuL3RlWC9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFya2Rvd25QYXJzZXIgfSBmcm9tIFwiLi9tYXJrZG93bi9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWV0YUpTT05QYXJzZXIgfSBmcm9tIFwiLi9tZXRhSlNPTi9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwiLi9mbG9yZW5jZS9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGxhaW5UZXh0UGFyc2VyIH0gZnJvbSBcIi4vcGxhaW5UZXh0L3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyQk5GUGFyc2VyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hckJORi9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hclBhdHRlcm5QYXJzZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyUGF0dGVybi9wYXJzZXJcIjtcbiJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyQk5GTGV4ZXIiLCJDdXN0b21HcmFtbWFyQk5GUGFyc2VyIiwiQ3VzdG9tR3JhbW1hclBhdHRlcm5MZXhlciIsIkN1c3RvbUdyYW1tYXJQYXR0ZXJuUGFyc2VyIiwiRmxvcmVuY2VMZXhlciIsIkZsb3JlbmNlUGFyc2VyIiwiTWFya2Rvd25MZXhlciIsIk1hcmtkb3duUGFyc2VyIiwiTWV0YUpTT05MZXhlciIsIk1ldGFKU09OUGFyc2VyIiwiUGxhaW5UZXh0TGV4ZXIiLCJQbGFpblRleHRQYXJzZXIiLCJUZVhMZXhlciIsIlRlWFBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBT29CQSxxQkFBcUI7ZUFBckJBLGVBQXFCOztJQVFyQkMsc0JBQXNCO2VBQXRCQSxnQkFBc0I7O0lBUHRCQyx5QkFBeUI7ZUFBekJBLGVBQXlCOztJQVF6QkMsMEJBQTBCO2VBQTFCQSxnQkFBMEI7O0lBWDFCQyxhQUFhO2VBQWJBLGVBQWE7O0lBUWJDLGNBQWM7ZUFBZEEsZ0JBQWM7O0lBVmRDLGFBQWE7ZUFBYkEsZUFBYTs7SUFRYkMsY0FBYztlQUFkQSxnQkFBYzs7SUFQZEMsYUFBYTtlQUFiQSxlQUFhOztJQVFiQyxjQUFjO2VBQWRBLGdCQUFjOztJQU5kQyxjQUFjO2VBQWRBLGVBQWM7O0lBUWRDLGVBQWU7ZUFBZkEsZ0JBQWU7O0lBWmZDLFFBQVE7ZUFBUkEsY0FBUTs7SUFRUkMsU0FBUztlQUFUQSxlQUFTOzs7NERBUk87NkRBQ0s7NkRBQ0E7NkRBQ0E7NkRBQ0M7NkRBQ087NkRBQ0k7NkRBRWhCOzhEQUNLOzhEQUNBOzhEQUNBOzhEQUNDOzhEQUNPOzhEQUNJIn0=