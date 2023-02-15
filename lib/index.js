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
    TeXLexer: function() {
        return _lexer.default;
    },
    ReadmeLexer: function() {
        return _lexer1.default;
    },
    MetaJSONLexer: function() {
        return _lexer2.default;
    },
    FlorenceLexer: function() {
        return _lexer3.default;
    },
    PlainTextLexer: function() {
        return _lexer4.default;
    },
    CustomGrammarBNFLexer: function() {
        return _lexer5.default;
    },
    CustomGrammarPatternLexer: function() {
        return _lexer6.default;
    },
    TeXParser: function() {
        return _parser.default;
    },
    ReadmeParser: function() {
        return _parser1.default;
    },
    MetaJSONParser: function() {
        return _parser2.default;
    },
    FlorenceParser: function() {
        return _parser3.default;
    },
    PlainTextParser: function() {
        return _parser4.default;
    },
    CustomGrammarBNFParser: function() {
        return _parser5.default;
    },
    CustomGrammarPatternParser: function() {
        return _parser6.default;
    }
});
var _lexer = /*#__PURE__*/ _interopRequireDefault(require("./teX/lexer"));
var _lexer1 = /*#__PURE__*/ _interopRequireDefault(require("./readme/lexer"));
var _lexer2 = /*#__PURE__*/ _interopRequireDefault(require("./metaJSON/lexer"));
var _lexer3 = /*#__PURE__*/ _interopRequireDefault(require("./florence/lexer"));
var _lexer4 = /*#__PURE__*/ _interopRequireDefault(require("./plainText/lexer"));
var _lexer5 = /*#__PURE__*/ _interopRequireDefault(require("./customGrammarBNF/lexer"));
var _lexer6 = /*#__PURE__*/ _interopRequireDefault(require("./customGrammarPattern/lexer"));
var _parser = /*#__PURE__*/ _interopRequireDefault(require("./teX/parser"));
var _parser1 = /*#__PURE__*/ _interopRequireDefault(require("./readme/parser"));
var _parser2 = /*#__PURE__*/ _interopRequireDefault(require("./metaJSON/parser"));
var _parser3 = /*#__PURE__*/ _interopRequireDefault(require("./florence/parser"));
var _parser4 = /*#__PURE__*/ _interopRequireDefault(require("./plainText/parser"));
var _parser5 = /*#__PURE__*/ _interopRequireDefault(require("./customGrammarBNF/parser"));
var _parser6 = /*#__PURE__*/ _interopRequireDefault(require("./customGrammarPattern/parser"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhMZXhlciB9IGZyb20gXCIuL3RlWC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkbWVMZXhlciB9IGZyb20gXCIuL3JlYWRtZS9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXRhSlNPTkxleGVyIH0gZnJvbSBcIi4vbWV0YUpTT04vbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmxvcmVuY2VMZXhlciB9IGZyb20gXCIuL2Zsb3JlbmNlL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluVGV4dExleGVyIH0gZnJvbSBcIi4vcGxhaW5UZXh0L2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJCTkZMZXhlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJCTkYvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hclBhdHRlcm5MZXhlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJQYXR0ZXJuL2xleGVyXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGVYUGFyc2VyIH0gZnJvbSBcIi4vdGVYL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkbWVQYXJzZXIgfSBmcm9tIFwiLi9yZWFkbWUvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1ldGFKU09OUGFyc2VyIH0gZnJvbSBcIi4vbWV0YUpTT04vcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZsb3JlbmNlUGFyc2VyIH0gZnJvbSBcIi4vZmxvcmVuY2UvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluVGV4dFBhcnNlciB9IGZyb20gXCIuL3BsYWluVGV4dC9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hckJORlBhcnNlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJCTkYvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJQYXR0ZXJuUGFyc2VyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hclBhdHRlcm4vcGFyc2VyXCI7XG4iXSwibmFtZXMiOlsiVGVYTGV4ZXIiLCJSZWFkbWVMZXhlciIsIk1ldGFKU09OTGV4ZXIiLCJGbG9yZW5jZUxleGVyIiwiUGxhaW5UZXh0TGV4ZXIiLCJDdXN0b21HcmFtbWFyQk5GTGV4ZXIiLCJDdXN0b21HcmFtbWFyUGF0dGVybkxleGVyIiwiVGVYUGFyc2VyIiwiUmVhZG1lUGFyc2VyIiwiTWV0YUpTT05QYXJzZXIiLCJGbG9yZW5jZVBhcnNlciIsIlBsYWluVGV4dFBhcnNlciIsIkN1c3RvbUdyYW1tYXJCTkZQYXJzZXIiLCJDdXN0b21HcmFtbWFyUGF0dGVyblBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRW9CQSxRQUFRO2VBQVJBLGNBQVE7O0lBQ1JDLFdBQVc7ZUFBWEEsZUFBVzs7SUFDWEMsYUFBYTtlQUFiQSxlQUFhOztJQUNiQyxhQUFhO2VBQWJBLGVBQWE7O0lBQ2JDLGNBQWM7ZUFBZEEsZUFBYzs7SUFDZEMscUJBQXFCO2VBQXJCQSxlQUFxQjs7SUFDckJDLHlCQUF5QjtlQUF6QkEsZUFBeUI7O0lBRXpCQyxTQUFTO2VBQVRBLGVBQVM7O0lBQ1RDLFlBQVk7ZUFBWkEsZ0JBQVk7O0lBQ1pDLGNBQWM7ZUFBZEEsZ0JBQWM7O0lBQ2RDLGNBQWM7ZUFBZEEsZ0JBQWM7O0lBQ2RDLGVBQWU7ZUFBZkEsZ0JBQWU7O0lBQ2ZDLHNCQUFzQjtlQUF0QkEsZ0JBQXNCOztJQUN0QkMsMEJBQTBCO2VBQTFCQSxnQkFBMEI7OzswREFkVjsyREFDRzsyREFDRTsyREFDQTsyREFDQzsyREFDTzsyREFDSTsyREFFaEI7NERBQ0c7NERBQ0U7NERBQ0E7NERBQ0M7NERBQ087NERBQ0kifQ==