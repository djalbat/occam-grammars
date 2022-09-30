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
var _defaultCustomGrammar = /*#__PURE__*/ _interopRequireDefault(require("./florence/defaultCustomGrammar"));
var _lexer5 = /*#__PURE__*/ _interopRequireDefault(require("./customGrammarBNF/lexer"));
var _parser5 = /*#__PURE__*/ _interopRequireDefault(require("./customGrammarBNF/parser"));
var _lexer6 = /*#__PURE__*/ _interopRequireDefault(require("./customGrammarPattern/lexer"));
var _parser6 = /*#__PURE__*/ _interopRequireDefault(require("./customGrammarPattern/parser"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhMZXhlciB9IGZyb20gXCIuL3RlWC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhQYXJzZXIgfSBmcm9tIFwiLi90ZVgvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluTGV4ZXIgfSBmcm9tIFwiLi9wbGFpbi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbGFpblBhcnNlciB9IGZyb20gXCIuL3BsYWluL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkbWVMZXhlciB9IGZyb20gXCIuL3JlYWRtZS9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkbWVQYXJzZXIgfSBmcm9tIFwiLi9yZWFkbWUvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1ldGFKU09OTGV4ZXIgfSBmcm9tIFwiLi9tZXRhSlNPTi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXRhSlNPTlBhcnNlciB9IGZyb20gXCIuL21ldGFKU09OL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGbG9yZW5jZUxleGVyIH0gZnJvbSBcIi4vZmxvcmVuY2UvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwiLi9mbG9yZW5jZS9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyQk5GTGV4ZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyUGF0dGVybkxleGVyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hclBhdHRlcm4vbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hclBhdHRlcm5QYXJzZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyUGF0dGVybi9wYXJzZXJcIjtcbiJdLCJuYW1lcyI6WyJUZVhMZXhlciIsIlRlWFBhcnNlciIsIlBsYWluTGV4ZXIiLCJQbGFpblBhcnNlciIsIlJlYWRtZUxleGVyIiwiUmVhZG1lUGFyc2VyIiwiTWV0YUpTT05MZXhlciIsIk1ldGFKU09OUGFyc2VyIiwiRmxvcmVuY2VMZXhlciIsIkZsb3JlbmNlUGFyc2VyIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJDdXN0b21HcmFtbWFyQk5GTGV4ZXIiLCJDdXN0b21HcmFtbWFyQk5GUGFyc2VyIiwiQ3VzdG9tR3JhbW1hclBhdHRlcm5MZXhlciIsIkN1c3RvbUdyYW1tYXJQYXR0ZXJuUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFb0JBLFFBQVE7ZUFBUkEsY0FBUTs7SUFDUkMsU0FBUztlQUFUQSxlQUFTOztJQUNUQyxVQUFVO2VBQVZBLGVBQVU7O0lBQ1ZDLFdBQVc7ZUFBWEEsZ0JBQVc7O0lBQ1hDLFdBQVc7ZUFBWEEsZUFBVzs7SUFDWEMsWUFBWTtlQUFaQSxnQkFBWTs7SUFDWkMsYUFBYTtlQUFiQSxlQUFhOztJQUNiQyxjQUFjO2VBQWRBLGdCQUFjOztJQUNkQyxhQUFhO2VBQWJBLGVBQWE7O0lBQ2JDLGNBQWM7ZUFBZEEsZ0JBQWM7O0lBQ2RDLG9CQUFvQjtlQUFwQkEsNkJBQW9COztJQUNwQkMscUJBQXFCO2VBQXJCQSxlQUFxQjs7SUFDckJDLHNCQUFzQjtlQUF0QkEsZ0JBQXNCOztJQUN0QkMseUJBQXlCO2VBQXpCQSxlQUF5Qjs7SUFDekJDLDBCQUEwQjtlQUExQkEsZ0JBQTBCOzs7MERBZFY7MkRBQ0M7MkRBQ0M7NERBQ0M7MkRBQ0E7NERBQ0M7MkRBQ0M7NERBQ0M7MkRBQ0Q7NERBQ0M7eUVBQ007MkRBQ0M7NERBQ0M7MkRBQ0c7NERBQ0MifQ==