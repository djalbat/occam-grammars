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
    TeXParser: function() {
        return _parser.default;
    },
    PlainLexer: function() {
        return _lexer1.default;
    },
    PlainParser: function() {
        return _parser1.default;
    },
    ReadmeLexer: function() {
        return _lexer2.default;
    },
    ReadmeParser: function() {
        return _parser2.default;
    },
    MetaJSONLexer: function() {
        return _lexer3.default;
    },
    MetaJSONParser: function() {
        return _parser3.default;
    },
    FlorenceLexer: function() {
        return _lexer4.default;
    },
    FlorenceParser: function() {
        return _parser4.default;
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
    }
});
var _lexer = /*#__PURE__*/ _interopRequireDefault(require("./teX/lexer"));
var _parser = /*#__PURE__*/ _interopRequireDefault(require("./teX/parser"));
var _lexer1 = /*#__PURE__*/ _interopRequireDefault(require("./plain/lexer"));
var _parser1 = /*#__PURE__*/ _interopRequireDefault(require("./plain/parser"));
var _lexer2 = /*#__PURE__*/ _interopRequireDefault(require("./readme/lexer"));
var _parser2 = /*#__PURE__*/ _interopRequireDefault(require("./readme/parser"));
var _lexer3 = /*#__PURE__*/ _interopRequireDefault(require("./metaJSON/lexer"));
var _parser3 = /*#__PURE__*/ _interopRequireDefault(require("./metaJSON/parser"));
var _lexer4 = /*#__PURE__*/ _interopRequireDefault(require("./florence/lexer"));
var _parser4 = /*#__PURE__*/ _interopRequireDefault(require("./florence/parser"));
var _lexer5 = /*#__PURE__*/ _interopRequireDefault(require("./customGrammarBNF/lexer"));
var _parser5 = /*#__PURE__*/ _interopRequireDefault(require("./customGrammarBNF/parser"));
var _lexer6 = /*#__PURE__*/ _interopRequireDefault(require("./customGrammarPattern/lexer"));
var _parser6 = /*#__PURE__*/ _interopRequireDefault(require("./customGrammarPattern/parser"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhMZXhlciB9IGZyb20gXCIuL3RlWC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhQYXJzZXIgfSBmcm9tIFwiLi90ZVgvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluTGV4ZXIgfSBmcm9tIFwiLi9wbGFpbi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbGFpblBhcnNlciB9IGZyb20gXCIuL3BsYWluL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkbWVMZXhlciB9IGZyb20gXCIuL3JlYWRtZS9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkbWVQYXJzZXIgfSBmcm9tIFwiLi9yZWFkbWUvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1ldGFKU09OTGV4ZXIgfSBmcm9tIFwiLi9tZXRhSlNPTi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXRhSlNPTlBhcnNlciB9IGZyb20gXCIuL21ldGFKU09OL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGbG9yZW5jZUxleGVyIH0gZnJvbSBcIi4vZmxvcmVuY2UvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwiLi9mbG9yZW5jZS9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hckJORkxleGVyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hckJORi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyQk5GUGFyc2VyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hckJORi9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hclBhdHRlcm5MZXhlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJQYXR0ZXJuL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJQYXR0ZXJuUGFyc2VyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hclBhdHRlcm4vcGFyc2VyXCI7XG4iXSwibmFtZXMiOlsiVGVYTGV4ZXIiLCJUZVhQYXJzZXIiLCJQbGFpbkxleGVyIiwiUGxhaW5QYXJzZXIiLCJSZWFkbWVMZXhlciIsIlJlYWRtZVBhcnNlciIsIk1ldGFKU09OTGV4ZXIiLCJNZXRhSlNPTlBhcnNlciIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsIkN1c3RvbUdyYW1tYXJCTkZMZXhlciIsIkN1c3RvbUdyYW1tYXJCTkZQYXJzZXIiLCJDdXN0b21HcmFtbWFyUGF0dGVybkxleGVyIiwiQ3VzdG9tR3JhbW1hclBhdHRlcm5QYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVvQkEsUUFBUTtlQUFSQSxjQUFROztJQUNSQyxTQUFTO2VBQVRBLGVBQVM7O0lBQ1RDLFVBQVU7ZUFBVkEsZUFBVTs7SUFDVkMsV0FBVztlQUFYQSxnQkFBVzs7SUFDWEMsV0FBVztlQUFYQSxlQUFXOztJQUNYQyxZQUFZO2VBQVpBLGdCQUFZOztJQUNaQyxhQUFhO2VBQWJBLGVBQWE7O0lBQ2JDLGNBQWM7ZUFBZEEsZ0JBQWM7O0lBQ2RDLGFBQWE7ZUFBYkEsZUFBYTs7SUFDYkMsY0FBYztlQUFkQSxnQkFBYzs7SUFDZEMscUJBQXFCO2VBQXJCQSxlQUFxQjs7SUFDckJDLHNCQUFzQjtlQUF0QkEsZ0JBQXNCOztJQUN0QkMseUJBQXlCO2VBQXpCQSxlQUF5Qjs7SUFDekJDLDBCQUEwQjtlQUExQkEsZ0JBQTBCOzs7MERBYlY7MkRBQ0M7MkRBQ0M7NERBQ0M7MkRBQ0E7NERBQ0M7MkRBQ0M7NERBQ0M7MkRBQ0Q7NERBQ0M7MkRBQ087NERBQ0M7MkRBQ0c7NERBQ0MifQ==