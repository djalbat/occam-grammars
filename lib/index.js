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
    BasicLexer: function() {
        return _lexer2.default;
    },
    BasicParser: function() {
        return _parser2.default;
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
    },
    FlorenceLexer: function() {
        return _lexer3.default;
    },
    FlorenceParser: function() {
        return _parser3.default;
    },
    JSONLexer: function() {
        return _lexer1.default;
    },
    JSONParser: function() {
        return _parser1.default;
    },
    PlainTextLexer: function() {
        return _lexer4.default;
    },
    PlainTextParser: function() {
        return _parser4.default;
    },
    State: function() {
        return _state.default;
    },
    TeXLexer: function() {
        return _lexer.default;
    },
    TeXParser: function() {
        return _parser.default;
    }
});
var _state = /*#__PURE__*/ _interop_require_default(require("./state"));
var _lexer = /*#__PURE__*/ _interop_require_default(require("./teX/lexer"));
var _lexer1 = /*#__PURE__*/ _interop_require_default(require("./json/lexer"));
var _lexer2 = /*#__PURE__*/ _interop_require_default(require("./basic/lexer"));
var _lexer3 = /*#__PURE__*/ _interop_require_default(require("./florence/lexer"));
var _lexer4 = /*#__PURE__*/ _interop_require_default(require("./plainText/lexer"));
var _lexer5 = /*#__PURE__*/ _interop_require_default(require("./customGrammarBNF/lexer"));
var _lexer6 = /*#__PURE__*/ _interop_require_default(require("./customGrammarPattern/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("./teX/parser"));
var _parser1 = /*#__PURE__*/ _interop_require_default(require("./json/parser"));
var _parser2 = /*#__PURE__*/ _interop_require_default(require("./basic/parser"));
var _parser3 = /*#__PURE__*/ _interop_require_default(require("./florence/parser"));
var _parser4 = /*#__PURE__*/ _interop_require_default(require("./plainText/parser"));
var _parser5 = /*#__PURE__*/ _interop_require_default(require("./customGrammarBNF/parser"));
var _parser6 = /*#__PURE__*/ _interop_require_default(require("./customGrammarPattern/parser"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlWExleGVyIH0gZnJvbSBcIi4vdGVYL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEpTT05MZXhlciB9IGZyb20gXCIuL2pzb24vbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQmFzaWNMZXhlciB9IGZyb20gXCIuL2Jhc2ljL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZsb3JlbmNlTGV4ZXIgfSBmcm9tIFwiLi9mbG9yZW5jZS9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbGFpblRleHRMZXhlciB9IGZyb20gXCIuL3BsYWluVGV4dC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyQk5GTGV4ZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJQYXR0ZXJuTGV4ZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyUGF0dGVybi9sZXhlclwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlWFBhcnNlciB9IGZyb20gXCIuL3RlWC9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSlNPTlBhcnNlciB9IGZyb20gXCIuL2pzb24vcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2ljUGFyc2VyIH0gZnJvbSBcIi4vYmFzaWMvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZsb3JlbmNlUGFyc2VyIH0gZnJvbSBcIi4vZmxvcmVuY2UvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluVGV4dFBhcnNlciB9IGZyb20gXCIuL3BsYWluVGV4dC9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hckJORlBhcnNlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJCTkYvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJQYXR0ZXJuUGFyc2VyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hclBhdHRlcm4vcGFyc2VyXCI7XG4iXSwibmFtZXMiOlsiQmFzaWNMZXhlciIsIkJhc2ljUGFyc2VyIiwiQ3VzdG9tR3JhbW1hckJORkxleGVyIiwiQ3VzdG9tR3JhbW1hckJORlBhcnNlciIsIkN1c3RvbUdyYW1tYXJQYXR0ZXJuTGV4ZXIiLCJDdXN0b21HcmFtbWFyUGF0dGVyblBhcnNlciIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsIkpTT05MZXhlciIsIkpTT05QYXJzZXIiLCJQbGFpblRleHRMZXhlciIsIlBsYWluVGV4dFBhcnNlciIsIlN0YXRlIiwiVGVYTGV4ZXIiLCJUZVhQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUtvQkEsVUFBVTtlQUFWQSxlQUFVOztJQVFWQyxXQUFXO2VBQVhBLGdCQUFXOztJQUxYQyxxQkFBcUI7ZUFBckJBLGVBQXFCOztJQVFyQkMsc0JBQXNCO2VBQXRCQSxnQkFBc0I7O0lBUHRCQyx5QkFBeUI7ZUFBekJBLGVBQXlCOztJQVF6QkMsMEJBQTBCO2VBQTFCQSxnQkFBMEI7O0lBWDFCQyxhQUFhO2VBQWJBLGVBQWE7O0lBUWJDLGNBQWM7ZUFBZEEsZ0JBQWM7O0lBVmRDLFNBQVM7ZUFBVEEsZUFBUzs7SUFRVEMsVUFBVTtlQUFWQSxnQkFBVTs7SUFMVkMsY0FBYztlQUFkQSxlQUFjOztJQVFkQyxlQUFlO2VBQWZBLGdCQUFlOztJQWJmQyxLQUFLO2VBQUxBLGNBQUs7O0lBQ0xDLFFBQVE7ZUFBUkEsY0FBUTs7SUFRUkMsU0FBUztlQUFUQSxlQUFTOzs7NERBVEk7NERBQ0c7NkRBQ0M7NkRBQ0M7NkRBQ0c7NkRBQ0M7NkRBQ087NkRBQ0k7NkRBRWhCOzhEQUNDOzhEQUNDOzhEQUNHOzhEQUNDOzhEQUNPOzhEQUNJIn0=