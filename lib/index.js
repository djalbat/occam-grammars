"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get CustomGrammarBNFLexer () {
        return _lexer5.default;
    },
    get CustomGrammarBNFParser () {
        return _parser5.default;
    },
    get CustomGrammarVocabularyLexer () {
        return _lexer6.default;
    },
    get CustomGrammarVocabularyParser () {
        return _parser6.default;
    },
    get FurtleLexer () {
        return _lexer2.default;
    },
    get FurtleParser () {
        return _parser2.default;
    },
    get JSONLexer () {
        return _lexer1.default;
    },
    get JSONParser () {
        return _parser1.default;
    },
    get NominalLexer () {
        return _lexer3.default;
    },
    get NominalParser () {
        return _parser3.default;
    },
    get PlainTextLexer () {
        return _lexer4.default;
    },
    get PlainTextParser () {
        return _parser4.default;
    },
    get TeXLexer () {
        return _lexer.default;
    },
    get TeXParser () {
        return _parser.default;
    }
});
var _lexer = /*#__PURE__*/ _interop_require_default(require("./teX/lexer"));
var _lexer1 = /*#__PURE__*/ _interop_require_default(require("./json/lexer"));
var _lexer2 = /*#__PURE__*/ _interop_require_default(require("./furtle/lexer"));
var _lexer3 = /*#__PURE__*/ _interop_require_default(require("./nominal/lexer"));
var _lexer4 = /*#__PURE__*/ _interop_require_default(require("./plainText/lexer"));
var _lexer5 = /*#__PURE__*/ _interop_require_default(require("./customGrammarBNF/lexer"));
var _lexer6 = /*#__PURE__*/ _interop_require_default(require("./customGrammarVocabulary/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("./teX/parser"));
var _parser1 = /*#__PURE__*/ _interop_require_default(require("./json/parser"));
var _parser2 = /*#__PURE__*/ _interop_require_default(require("./furtle/parser"));
var _parser3 = /*#__PURE__*/ _interop_require_default(require("./nominal/parser"));
var _parser4 = /*#__PURE__*/ _interop_require_default(require("./plainText/parser"));
var _parser5 = /*#__PURE__*/ _interop_require_default(require("./customGrammarBNF/parser"));
var _parser6 = /*#__PURE__*/ _interop_require_default(require("./customGrammarVocabulary/parser"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhMZXhlciB9IGZyb20gXCIuL3RlWC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBKU09OTGV4ZXIgfSBmcm9tIFwiLi9qc29uL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZ1cnRsZUxleGVyIH0gZnJvbSBcIi4vZnVydGxlL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vbWluYWxMZXhlciB9IGZyb20gXCIuL25vbWluYWwvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGxhaW5UZXh0TGV4ZXIgfSBmcm9tIFwiLi9wbGFpblRleHQvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hckJORkxleGVyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hckJORi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyVm9jYWJ1bGFyeUxleGVyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hclZvY2FidWxhcnkvbGV4ZXJcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhQYXJzZXIgfSBmcm9tIFwiLi90ZVgvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEpTT05QYXJzZXIgfSBmcm9tIFwiLi9qc29uL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGdXJ0bGVQYXJzZXIgfSBmcm9tIFwiLi9mdXJ0bGUvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vbWluYWxQYXJzZXIgfSBmcm9tIFwiLi9ub21pbmFsL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbGFpblRleHRQYXJzZXIgfSBmcm9tIFwiLi9wbGFpblRleHQvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyVm9jYWJ1bGFyeVBhcnNlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJWb2NhYnVsYXJ5L3BhcnNlclwiO1xuIl0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXJCTkZMZXhlciIsIkN1c3RvbUdyYW1tYXJCTkZQYXJzZXIiLCJDdXN0b21HcmFtbWFyVm9jYWJ1bGFyeUxleGVyIiwiQ3VzdG9tR3JhbW1hclZvY2FidWxhcnlQYXJzZXIiLCJGdXJ0bGVMZXhlciIsIkZ1cnRsZVBhcnNlciIsIkpTT05MZXhlciIsIkpTT05QYXJzZXIiLCJOb21pbmFsTGV4ZXIiLCJOb21pbmFsUGFyc2VyIiwiUGxhaW5UZXh0TGV4ZXIiLCJQbGFpblRleHRQYXJzZXIiLCJUZVhMZXhlciIsIlRlWFBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBT29CQTtlQUFBQSxlQUFxQjs7UUFRckJDO2VBQUFBLGdCQUFzQjs7UUFQdEJDO2VBQUFBLGVBQTRCOztRQVE1QkM7ZUFBQUEsZ0JBQTZCOztRQVo3QkM7ZUFBQUEsZUFBVzs7UUFRWEM7ZUFBQUEsZ0JBQVk7O1FBVFpDO2VBQUFBLGVBQVM7O1FBUVRDO2VBQUFBLGdCQUFVOztRQU5WQztlQUFBQSxlQUFZOztRQVFaQztlQUFBQSxnQkFBYTs7UUFQYkM7ZUFBQUEsZUFBYzs7UUFRZEM7ZUFBQUEsZ0JBQWU7O1FBWmZDO2VBQUFBLGNBQVE7O1FBUVJDO2VBQUFBLGVBQVM7Ozs0REFSTzs2REFDQzs2REFDRTs2REFDQzs2REFDRTs2REFDTzs2REFDTzs2REFFbkI7OERBQ0M7OERBQ0U7OERBQ0M7OERBQ0U7OERBQ087OERBQ08ifQ==