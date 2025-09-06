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
        return _lexer4.default;
    },
    get CustomGrammarBNFParser () {
        return _parser4.default;
    },
    get CustomGrammarVocabularyLexer () {
        return _lexer5.default;
    },
    get CustomGrammarVocabularyParser () {
        return _parser5.default;
    },
    get JSONLexer () {
        return _lexer1.default;
    },
    get JSONParser () {
        return _parser1.default;
    },
    get NominalLexer () {
        return _lexer2.default;
    },
    get NominalParser () {
        return _parser2.default;
    },
    get PlainTextLexer () {
        return _lexer3.default;
    },
    get PlainTextParser () {
        return _parser3.default;
    },
    get TeXLexer () {
        return _lexer.default;
    },
    get TeXParser () {
        return _parser.default;
    },
    get lexersUtilities () {
        return _lexers.default;
    },
    get parsersUtilities () {
        return _parsers.default;
    }
});
var _lexers = /*#__PURE__*/ _interop_require_default(require("./utilities/lexers"));
var _parsers = /*#__PURE__*/ _interop_require_default(require("./utilities/parsers"));
var _lexer = /*#__PURE__*/ _interop_require_default(require("./teX/lexer"));
var _lexer1 = /*#__PURE__*/ _interop_require_default(require("./json/lexer"));
var _lexer2 = /*#__PURE__*/ _interop_require_default(require("./nominal/lexer"));
var _lexer3 = /*#__PURE__*/ _interop_require_default(require("./plainText/lexer"));
var _lexer4 = /*#__PURE__*/ _interop_require_default(require("./customGrammarBNF/lexer"));
var _lexer5 = /*#__PURE__*/ _interop_require_default(require("./customGrammarVocabulary/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("./teX/parser"));
var _parser1 = /*#__PURE__*/ _interop_require_default(require("./json/parser"));
var _parser2 = /*#__PURE__*/ _interop_require_default(require("./nominal/parser"));
var _parser3 = /*#__PURE__*/ _interop_require_default(require("./plainText/parser"));
var _parser4 = /*#__PURE__*/ _interop_require_default(require("./customGrammarBNF/parser"));
var _parser5 = /*#__PURE__*/ _interop_require_default(require("./customGrammarVocabulary/parser"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsZXhlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvbGV4ZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGFyc2Vyc1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlWExleGVyIH0gZnJvbSBcIi4vdGVYL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEpTT05MZXhlciB9IGZyb20gXCIuL2pzb24vbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm9taW5hbExleGVyIH0gZnJvbSBcIi4vbm9taW5hbC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbGFpblRleHRMZXhlciB9IGZyb20gXCIuL3BsYWluVGV4dC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyQk5GTGV4ZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJWb2NhYnVsYXJ5TGV4ZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyVm9jYWJ1bGFyeS9sZXhlclwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlWFBhcnNlciB9IGZyb20gXCIuL3RlWC9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSlNPTlBhcnNlciB9IGZyb20gXCIuL2pzb24vcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vbWluYWxQYXJzZXIgfSBmcm9tIFwiLi9ub21pbmFsL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbGFpblRleHRQYXJzZXIgfSBmcm9tIFwiLi9wbGFpblRleHQvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyVm9jYWJ1bGFyeVBhcnNlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJWb2NhYnVsYXJ5L3BhcnNlclwiO1xuIl0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXJCTkZMZXhlciIsIkN1c3RvbUdyYW1tYXJCTkZQYXJzZXIiLCJDdXN0b21HcmFtbWFyVm9jYWJ1bGFyeUxleGVyIiwiQ3VzdG9tR3JhbW1hclZvY2FidWxhcnlQYXJzZXIiLCJKU09OTGV4ZXIiLCJKU09OUGFyc2VyIiwiTm9taW5hbExleGVyIiwiTm9taW5hbFBhcnNlciIsIlBsYWluVGV4dExleGVyIiwiUGxhaW5UZXh0UGFyc2VyIiwiVGVYTGV4ZXIiLCJUZVhQYXJzZXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJwYXJzZXJzVXRpbGl0aWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFTb0JBO2VBQUFBLGVBQXFCOztRQU9yQkM7ZUFBQUEsZ0JBQXNCOztRQU50QkM7ZUFBQUEsZUFBNEI7O1FBTzVCQztlQUFBQSxnQkFBNkI7O1FBWDdCQztlQUFBQSxlQUFTOztRQU9UQztlQUFBQSxnQkFBVTs7UUFOVkM7ZUFBQUEsZUFBWTs7UUFPWkM7ZUFBQUEsZ0JBQWE7O1FBTmJDO2VBQUFBLGVBQWM7O1FBT2RDO2VBQUFBLGdCQUFlOztRQVZmQztlQUFBQSxjQUFROztRQU9SQztlQUFBQSxlQUFTOztRQVZUQztlQUFBQSxlQUFlOztRQUNmQztlQUFBQSxnQkFBZ0I7Ozs2REFETzs4REFDQzs0REFFUjs2REFDQzs2REFDRzs2REFDRTs2REFDTzs2REFDTzs2REFFbkI7OERBQ0M7OERBQ0c7OERBQ0U7OERBQ087OERBQ08ifQ==