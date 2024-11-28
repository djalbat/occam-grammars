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
    FurtleLexer: function() {
        return _lexer2.default;
    },
    FurtleParser: function() {
        return _parser2.default;
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
    },
    lexersUtilities: function() {
        return _lexers.default;
    },
    parsersUtilities: function() {
        return _parsers.default;
    }
});
var _lexers = /*#__PURE__*/ _interop_require_default(require("./utilities/lexers"));
var _parsers = /*#__PURE__*/ _interop_require_default(require("./utilities/parsers"));
var _lexer = /*#__PURE__*/ _interop_require_default(require("./teX/lexer"));
var _lexer1 = /*#__PURE__*/ _interop_require_default(require("./json/lexer"));
var _lexer2 = /*#__PURE__*/ _interop_require_default(require("./furtle/lexer"));
var _lexer3 = /*#__PURE__*/ _interop_require_default(require("./nominal/lexer"));
var _lexer4 = /*#__PURE__*/ _interop_require_default(require("./plainText/lexer"));
var _lexer5 = /*#__PURE__*/ _interop_require_default(require("./customGrammarBNF/lexer"));
var _lexer6 = /*#__PURE__*/ _interop_require_default(require("./customGrammarPattern/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("./teX/parser"));
var _parser1 = /*#__PURE__*/ _interop_require_default(require("./json/parser"));
var _parser2 = /*#__PURE__*/ _interop_require_default(require("./furtle/parser"));
var _parser3 = /*#__PURE__*/ _interop_require_default(require("./nominal/parser"));
var _parser4 = /*#__PURE__*/ _interop_require_default(require("./plainText/parser"));
var _parser5 = /*#__PURE__*/ _interop_require_default(require("./customGrammarBNF/parser"));
var _parser6 = /*#__PURE__*/ _interop_require_default(require("./customGrammarPattern/parser"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsZXhlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvbGV4ZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGFyc2Vyc1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlWExleGVyIH0gZnJvbSBcIi4vdGVYL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEpTT05MZXhlciB9IGZyb20gXCIuL2pzb24vbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRnVydGxlTGV4ZXIgfSBmcm9tIFwiLi9mdXJ0bGUvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm9taW5hbExleGVyIH0gZnJvbSBcIi4vbm9taW5hbC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbGFpblRleHRMZXhlciB9IGZyb20gXCIuL3BsYWluVGV4dC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyQk5GTGV4ZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJQYXR0ZXJuTGV4ZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyUGF0dGVybi9sZXhlclwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlWFBhcnNlciB9IGZyb20gXCIuL3RlWC9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSlNPTlBhcnNlciB9IGZyb20gXCIuL2pzb24vcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZ1cnRsZVBhcnNlciB9IGZyb20gXCIuL2Z1cnRsZS9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm9taW5hbFBhcnNlciB9IGZyb20gXCIuL25vbWluYWwvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluVGV4dFBhcnNlciB9IGZyb20gXCIuL3BsYWluVGV4dC9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hckJORlBhcnNlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJCTkYvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJQYXR0ZXJuUGFyc2VyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hclBhdHRlcm4vcGFyc2VyXCI7XG4iXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hckJORkxleGVyIiwiQ3VzdG9tR3JhbW1hckJORlBhcnNlciIsIkN1c3RvbUdyYW1tYXJQYXR0ZXJuTGV4ZXIiLCJDdXN0b21HcmFtbWFyUGF0dGVyblBhcnNlciIsIkZ1cnRsZUxleGVyIiwiRnVydGxlUGFyc2VyIiwiSlNPTkxleGVyIiwiSlNPTlBhcnNlciIsIk5vbWluYWxMZXhlciIsIk5vbWluYWxQYXJzZXIiLCJQbGFpblRleHRMZXhlciIsIlBsYWluVGV4dFBhcnNlciIsIlRlWExleGVyIiwiVGVYUGFyc2VyIiwibGV4ZXJzVXRpbGl0aWVzIiwicGFyc2Vyc1V0aWxpdGllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBVW9CQSxxQkFBcUI7ZUFBckJBLGVBQXFCOztJQVFyQkMsc0JBQXNCO2VBQXRCQSxnQkFBc0I7O0lBUHRCQyx5QkFBeUI7ZUFBekJBLGVBQXlCOztJQVF6QkMsMEJBQTBCO2VBQTFCQSxnQkFBMEI7O0lBWjFCQyxXQUFXO2VBQVhBLGVBQVc7O0lBUVhDLFlBQVk7ZUFBWkEsZ0JBQVk7O0lBVFpDLFNBQVM7ZUFBVEEsZUFBUzs7SUFRVEMsVUFBVTtlQUFWQSxnQkFBVTs7SUFOVkMsWUFBWTtlQUFaQSxlQUFZOztJQVFaQyxhQUFhO2VBQWJBLGdCQUFhOztJQVBiQyxjQUFjO2VBQWRBLGVBQWM7O0lBUWRDLGVBQWU7ZUFBZkEsZ0JBQWU7O0lBWmZDLFFBQVE7ZUFBUkEsY0FBUTs7SUFRUkMsU0FBUztlQUFUQSxlQUFTOztJQVhUQyxlQUFlO2VBQWZBLGVBQWU7O0lBQ2ZDLGdCQUFnQjtlQUFoQkEsZ0JBQWdCOzs7NkRBRE87OERBQ0M7NERBRVI7NkRBQ0M7NkRBQ0U7NkRBQ0M7NkRBQ0U7NkRBQ087NkRBQ0k7NkRBRWhCOzhEQUNDOzhEQUNFOzhEQUNDOzhEQUNFOzhEQUNPOzhEQUNJIn0=