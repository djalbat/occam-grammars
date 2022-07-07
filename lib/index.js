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
    defaultCustomGrammar: function() {
        return _defaultCustomGrammar.default;
    },
    CustomGrammarBNFLexer: function() {
        return _lexer5.default;
    },
    CustomGrammarBNFParser: function() {
        return _parser5.default;
    },
    CustomGrammarLexicalPatternLexer: function() {
        return _lexer6.default;
    },
    CustomGrammarLexicalPatternParser: function() {
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
var _defaultCustomGrammar = /*#__PURE__*/ _interopRequireDefault(require("./florence/defaultCustomGrammar"));
var _lexer5 = /*#__PURE__*/ _interopRequireDefault(require("./customGrammarBNF/lexer"));
var _parser5 = /*#__PURE__*/ _interopRequireDefault(require("./customGrammarBNF/parser"));
var _lexer6 = /*#__PURE__*/ _interopRequireDefault(require("./customGrammarLexicalPattern/lexer"));
var _parser6 = /*#__PURE__*/ _interopRequireDefault(require("./customGrammarLexicalPattern/parser"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhMZXhlciB9IGZyb20gXCIuL3RlWC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhQYXJzZXIgfSBmcm9tIFwiLi90ZVgvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluTGV4ZXIgfSBmcm9tIFwiLi9wbGFpbi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbGFpblBhcnNlciB9IGZyb20gXCIuL3BsYWluL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkbWVMZXhlciB9IGZyb20gXCIuL3JlYWRtZS9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkbWVQYXJzZXIgfSBmcm9tIFwiLi9yZWFkbWUvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1ldGFKU09OTGV4ZXIgfSBmcm9tIFwiLi9tZXRhSlNPTi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXRhSlNPTlBhcnNlciB9IGZyb20gXCIuL21ldGFKU09OL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGbG9yZW5jZUxleGVyIH0gZnJvbSBcIi4vZmxvcmVuY2UvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwiLi9mbG9yZW5jZS9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyQk5GTGV4ZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vcGFyc2VyXCI7XG4iXSwibmFtZXMiOlsiVGVYTGV4ZXIiLCJUZVhQYXJzZXIiLCJQbGFpbkxleGVyIiwiUGxhaW5QYXJzZXIiLCJSZWFkbWVMZXhlciIsIlJlYWRtZVBhcnNlciIsIk1ldGFKU09OTGV4ZXIiLCJNZXRhSlNPTlBhcnNlciIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwiQ3VzdG9tR3JhbW1hckJORkxleGVyIiwiQ3VzdG9tR3JhbW1hckJORlBhcnNlciIsIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyIiwiQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBRU9BLFFBQVE7ZUFBUkEsTUFBUSxRQUFBOztJQUNSQyxTQUFTO2VBQVRBLE9BQVMsUUFBQTs7SUFDVEMsVUFBVTtlQUFWQSxPQUFVLFFBQUE7O0lBQ1ZDLFdBQVc7ZUFBWEEsUUFBVyxRQUFBOztJQUNYQyxXQUFXO2VBQVhBLE9BQVcsUUFBQTs7SUFDWEMsWUFBWTtlQUFaQSxRQUFZLFFBQUE7O0lBQ1pDLGFBQWE7ZUFBYkEsT0FBYSxRQUFBOztJQUNiQyxjQUFjO2VBQWRBLFFBQWMsUUFBQTs7SUFDZEMsYUFBYTtlQUFiQSxPQUFhLFFBQUE7O0lBQ2JDLGNBQWM7ZUFBZEEsUUFBYyxRQUFBOztJQUNkQyxvQkFBb0I7ZUFBcEJBLHFCQUFvQixRQUFBOztJQUNwQkMscUJBQXFCO2VBQXJCQSxPQUFxQixRQUFBOztJQUNyQkMsc0JBQXNCO2VBQXRCQSxRQUFzQixRQUFBOztJQUN0QkMsZ0NBQWdDO2VBQWhDQSxPQUFnQyxRQUFBOztJQUNoQ0MsaUNBQWlDO2VBQWpDQSxRQUFpQyxRQUFBOzs7MERBZGpCLGFBQWE7MkRBQ1osY0FBYzsyREFDYixlQUFlOzREQUNkLGdCQUFnQjsyREFDaEIsZ0JBQWdCOzREQUNmLGlCQUFpQjsyREFDaEIsa0JBQWtCOzREQUNqQixtQkFBbUI7MkRBQ3BCLGtCQUFrQjs0REFDakIsbUJBQW1CO3lFQUNiLGlDQUFpQzsyREFDaEMsMEJBQTBCOzREQUN6QiwyQkFBMkI7MkRBQ2pCLHFDQUFxQzs0REFDcEMsc0NBQXNDIn0=