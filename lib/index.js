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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhMZXhlciB9IGZyb20gXCIuL3RlWC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXRhSlNPTkxleGVyIH0gZnJvbSBcIi4vbWV0YUpTT04vbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmxvcmVuY2VMZXhlciB9IGZyb20gXCIuL2Zsb3JlbmNlL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluVGV4dExleGVyIH0gZnJvbSBcIi4vcGxhaW5UZXh0L2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJCTkZMZXhlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJCTkYvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hclBhdHRlcm5MZXhlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJQYXR0ZXJuL2xleGVyXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGVYUGFyc2VyIH0gZnJvbSBcIi4vdGVYL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXRhSlNPTlBhcnNlciB9IGZyb20gXCIuL21ldGFKU09OL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGbG9yZW5jZVBhcnNlciB9IGZyb20gXCIuL2Zsb3JlbmNlL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbGFpblRleHRQYXJzZXIgfSBmcm9tIFwiLi9wbGFpblRleHQvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyUGF0dGVyblBhcnNlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJQYXR0ZXJuL3BhcnNlclwiO1xuIl0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXJCTkZMZXhlciIsIkN1c3RvbUdyYW1tYXJCTkZQYXJzZXIiLCJDdXN0b21HcmFtbWFyUGF0dGVybkxleGVyIiwiQ3VzdG9tR3JhbW1hclBhdHRlcm5QYXJzZXIiLCJGbG9yZW5jZUxleGVyIiwiRmxvcmVuY2VQYXJzZXIiLCJNZXRhSlNPTkxleGVyIiwiTWV0YUpTT05QYXJzZXIiLCJQbGFpblRleHRMZXhlciIsIlBsYWluVGV4dFBhcnNlciIsIlRlWExleGVyIiwiVGVYUGFyc2VyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNb0JBLHFCQUFxQjtlQUFyQkEsZUFBcUI7O0lBT3JCQyxzQkFBc0I7ZUFBdEJBLGdCQUFzQjs7SUFOdEJDLHlCQUF5QjtlQUF6QkEsZUFBeUI7O0lBT3pCQywwQkFBMEI7ZUFBMUJBLGdCQUEwQjs7SUFWMUJDLGFBQWE7ZUFBYkEsZUFBYTs7SUFPYkMsY0FBYztlQUFkQSxnQkFBYzs7SUFSZEMsYUFBYTtlQUFiQSxlQUFhOztJQU9iQyxjQUFjO2VBQWRBLGdCQUFjOztJQUxkQyxjQUFjO2VBQWRBLGVBQWM7O0lBT2RDLGVBQWU7ZUFBZkEsZ0JBQWU7O0lBVmZDLFFBQVE7ZUFBUkEsY0FBUTs7SUFPUkMsU0FBUztlQUFUQSxlQUFTOzs7NERBUE87NkRBQ0s7NkRBQ0E7NkRBQ0M7NkRBQ087NkRBQ0k7NkRBRWhCOzhEQUNLOzhEQUNBOzhEQUNDOzhEQUNPOzhEQUNJIn0=