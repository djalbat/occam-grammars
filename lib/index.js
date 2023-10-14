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
    ReadmeLexer: function() {
        return _lexer1.default;
    },
    ReadmeParser: function() {
        return _parser1.default;
    },
    TeXLexer: function() {
        return _lexer.default;
    },
    TeXParser: function() {
        return _parser.default;
    }
});
var _lexer = /*#__PURE__*/ _interop_require_default(require("./teX/lexer"));
var _lexer1 = /*#__PURE__*/ _interop_require_default(require("./readme/lexer"));
var _lexer2 = /*#__PURE__*/ _interop_require_default(require("./metaJSON/lexer"));
var _lexer3 = /*#__PURE__*/ _interop_require_default(require("./florence/lexer"));
var _lexer4 = /*#__PURE__*/ _interop_require_default(require("./plainText/lexer"));
var _lexer5 = /*#__PURE__*/ _interop_require_default(require("./customGrammarBNF/lexer"));
var _lexer6 = /*#__PURE__*/ _interop_require_default(require("./customGrammarPattern/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("./teX/parser"));
var _parser1 = /*#__PURE__*/ _interop_require_default(require("./readme/parser"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhMZXhlciB9IGZyb20gXCIuL3RlWC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkbWVMZXhlciB9IGZyb20gXCIuL3JlYWRtZS9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXRhSlNPTkxleGVyIH0gZnJvbSBcIi4vbWV0YUpTT04vbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmxvcmVuY2VMZXhlciB9IGZyb20gXCIuL2Zsb3JlbmNlL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluVGV4dExleGVyIH0gZnJvbSBcIi4vcGxhaW5UZXh0L2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJCTkZMZXhlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJCTkYvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hclBhdHRlcm5MZXhlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJQYXR0ZXJuL2xleGVyXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGVYUGFyc2VyIH0gZnJvbSBcIi4vdGVYL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkbWVQYXJzZXIgfSBmcm9tIFwiLi9yZWFkbWUvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1ldGFKU09OUGFyc2VyIH0gZnJvbSBcIi4vbWV0YUpTT04vcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZsb3JlbmNlUGFyc2VyIH0gZnJvbSBcIi4vZmxvcmVuY2UvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluVGV4dFBhcnNlciB9IGZyb20gXCIuL3BsYWluVGV4dC9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hckJORlBhcnNlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJCTkYvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJQYXR0ZXJuUGFyc2VyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hclBhdHRlcm4vcGFyc2VyXCI7XG4iXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hckJORkxleGVyIiwiQ3VzdG9tR3JhbW1hckJORlBhcnNlciIsIkN1c3RvbUdyYW1tYXJQYXR0ZXJuTGV4ZXIiLCJDdXN0b21HcmFtbWFyUGF0dGVyblBhcnNlciIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsIk1ldGFKU09OTGV4ZXIiLCJNZXRhSlNPTlBhcnNlciIsIlBsYWluVGV4dExleGVyIiwiUGxhaW5UZXh0UGFyc2VyIiwiUmVhZG1lTGV4ZXIiLCJSZWFkbWVQYXJzZXIiLCJUZVhMZXhlciIsIlRlWFBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBT29CQSxxQkFBcUI7ZUFBckJBLGVBQXFCOztJQVFyQkMsc0JBQXNCO2VBQXRCQSxnQkFBc0I7O0lBUHRCQyx5QkFBeUI7ZUFBekJBLGVBQXlCOztJQVF6QkMsMEJBQTBCO2VBQTFCQSxnQkFBMEI7O0lBWDFCQyxhQUFhO2VBQWJBLGVBQWE7O0lBUWJDLGNBQWM7ZUFBZEEsZ0JBQWM7O0lBVGRDLGFBQWE7ZUFBYkEsZUFBYTs7SUFRYkMsY0FBYztlQUFkQSxnQkFBYzs7SUFOZEMsY0FBYztlQUFkQSxlQUFjOztJQVFkQyxlQUFlO2VBQWZBLGdCQUFlOztJQVhmQyxXQUFXO2VBQVhBLGVBQVc7O0lBUVhDLFlBQVk7ZUFBWkEsZ0JBQVk7O0lBVFpDLFFBQVE7ZUFBUkEsY0FBUTs7SUFRUkMsU0FBUztlQUFUQSxlQUFTOzs7NERBUk87NkRBQ0c7NkRBQ0U7NkRBQ0E7NkRBQ0M7NkRBQ087NkRBQ0k7NkRBRWhCOzhEQUNHOzhEQUNFOzhEQUNBOzhEQUNDOzhEQUNPOzhEQUNJIn0=