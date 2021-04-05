"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _lexer = _interopRequireDefault(require("./plain/lexer"));
var _parser = _interopRequireDefault(require("./plain/parser"));
var _lexer1 = _interopRequireDefault(require("./laTeX/lexer"));
var _parser1 = _interopRequireDefault(require("./laTeX/parser"));
var _lexer2 = _interopRequireDefault(require("./metaJSON/lexer"));
var _parser2 = _interopRequireDefault(require("./metaJSON/parser"));
var _lexer3 = _interopRequireDefault(require("./florence/lexer"));
var _parser3 = _interopRequireDefault(require("./florence/parser"));
var _defaultCustomGrammar = _interopRequireDefault(require("./florence/defaultCustomGrammar"));
var _lexer4 = _interopRequireDefault(require("./customGrammarBNF/lexer"));
var _parser4 = _interopRequireDefault(require("./customGrammarBNF/parser"));
var _lexer5 = _interopRequireDefault(require("./customGrammarLexicalPattern/lexer"));
var _parser5 = _interopRequireDefault(require("./customGrammarLexicalPattern/parser"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
Object.defineProperty(exports, "PlainLexer", {
    enumerable: true,
    get: function() {
        return _lexer.default;
    }
});
Object.defineProperty(exports, "PlainParser", {
    enumerable: true,
    get: function() {
        return _parser.default;
    }
});
Object.defineProperty(exports, "LaTeXLexer", {
    enumerable: true,
    get: function() {
        return _lexer1.default;
    }
});
Object.defineProperty(exports, "LaTeXParser", {
    enumerable: true,
    get: function() {
        return _parser1.default;
    }
});
Object.defineProperty(exports, "MetaJSONLexer", {
    enumerable: true,
    get: function() {
        return _lexer2.default;
    }
});
Object.defineProperty(exports, "MetaJSONParser", {
    enumerable: true,
    get: function() {
        return _parser2.default;
    }
});
Object.defineProperty(exports, "FlorenceLexer", {
    enumerable: true,
    get: function() {
        return _lexer3.default;
    }
});
Object.defineProperty(exports, "FlorenceParser", {
    enumerable: true,
    get: function() {
        return _parser3.default;
    }
});
Object.defineProperty(exports, "defaultCustomGrammar", {
    enumerable: true,
    get: function() {
        return _defaultCustomGrammar.default;
    }
});
Object.defineProperty(exports, "CustomGrammarBNFLexer", {
    enumerable: true,
    get: function() {
        return _lexer4.default;
    }
});
Object.defineProperty(exports, "CustomGrammarBNFParser", {
    enumerable: true,
    get: function() {
        return _parser4.default;
    }
});
Object.defineProperty(exports, "CustomGrammarLexicalPatternLexer", {
    enumerable: true,
    get: function() {
        return _lexer5.default;
    }
});
Object.defineProperty(exports, "CustomGrammarLexicalPatternParser", {
    enumerable: true,
    get: function() {
        return _parser5.default;
    }
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbGFpbkxleGVyIH0gZnJvbSBcIi4vcGxhaW4vbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGxhaW5QYXJzZXIgfSBmcm9tIFwiLi9wbGFpbi9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGFUZVhMZXhlciB9IGZyb20gXCIuL2xhVGVYL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExhVGVYUGFyc2VyIH0gZnJvbSBcIi4vbGFUZVgvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1ldGFKU09OTGV4ZXIgfSBmcm9tIFwiLi9tZXRhSlNPTi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXRhSlNPTlBhcnNlciB9IGZyb20gXCIuL21ldGFKU09OL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGbG9yZW5jZUxleGVyIH0gZnJvbSBcIi4vZmxvcmVuY2UvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwiLi9mbG9yZW5jZS9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyQk5GTGV4ZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vcGFyc2VyXCI7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FFUSxVQUFVOzs7c0JBQXJCLE9BQU87OztnQ0FDSSxXQUFXOzs7dUJBQXRCLE9BQU87OztnQ0FDSSxVQUFVOzs7dUJBQXJCLE9BQU87OztnQ0FDSSxXQUFXOzs7d0JBQXRCLE9BQU87OztnQ0FDSSxhQUFhOzs7dUJBQXhCLE9BQU87OztnQ0FDSSxjQUFjOzs7d0JBQXpCLE9BQU87OztnQ0FDSSxhQUFhOzs7dUJBQXhCLE9BQU87OztnQ0FDSSxjQUFjOzs7d0JBQXpCLE9BQU87OztnQ0FDSSxvQkFBb0I7OztxQ0FBL0IsT0FBTzs7O2dDQUNJLHFCQUFxQjs7O3VCQUFoQyxPQUFPOzs7Z0NBQ0ksc0JBQXNCOzs7d0JBQWpDLE9BQU87OztnQ0FDSSxnQ0FBZ0M7Ozt1QkFBM0MsT0FBTzs7O2dDQUNJLGlDQUFpQzs7O3dCQUE1QyxPQUFPIn0=