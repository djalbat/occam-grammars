"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TeXLexer", {
    enumerable: true,
    get: function() {
        return _lexer.default;
    }
});
Object.defineProperty(exports, "TeXParser", {
    enumerable: true,
    get: function() {
        return _parser.default;
    }
});
Object.defineProperty(exports, "PlainLexer", {
    enumerable: true,
    get: function() {
        return _lexer1.default;
    }
});
Object.defineProperty(exports, "PlainParser", {
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
var _lexer = _interopRequireDefault(require("./teX/lexer"));
var _parser = _interopRequireDefault(require("./teX/parser"));
var _lexer1 = _interopRequireDefault(require("./plain/lexer"));
var _parser1 = _interopRequireDefault(require("./plain/parser"));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiVGVYTGV4ZXIiLCJUZVhQYXJzZXIiLCJQbGFpbkxleGVyIiwiUGxhaW5QYXJzZXIiLCJNZXRhSlNPTkxleGVyIiwiTWV0YUpTT05QYXJzZXIiLCJGbG9yZW5jZUxleGVyIiwiRmxvcmVuY2VQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXJCTkZMZXhlciIsIkN1c3RvbUdyYW1tYXJCTkZQYXJzZXIiLCJDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciIsIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztnQ0FFUSxRQUFROzs7c0JBQW5CLE9BQU87OztnQ0FDSSxTQUFTOzs7dUJBQXBCLE9BQU87OztnQ0FDSSxVQUFVOzs7dUJBQXJCLE9BQU87OztnQ0FDSSxXQUFXOzs7d0JBQXRCLE9BQU87OztnQ0FDSSxhQUFhOzs7dUJBQXhCLE9BQU87OztnQ0FDSSxjQUFjOzs7d0JBQXpCLE9BQU87OztnQ0FDSSxhQUFhOzs7dUJBQXhCLE9BQU87OztnQ0FDSSxjQUFjOzs7d0JBQXpCLE9BQU87OztnQ0FDSSxvQkFBb0I7OztxQ0FBL0IsT0FBTzs7O2dDQUNJLHFCQUFxQjs7O3VCQUFoQyxPQUFPOzs7Z0NBQ0ksc0JBQXNCOzs7d0JBQWpDLE9BQU87OztnQ0FDSSxnQ0FBZ0M7Ozt1QkFBM0MsT0FBTzs7O2dDQUNJLGlDQUFpQzs7O3dCQUE1QyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGVYTGV4ZXIgfSBmcm9tIFwiLi90ZVgvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGVYUGFyc2VyIH0gZnJvbSBcIi4vdGVYL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbGFpbkxleGVyIH0gZnJvbSBcIi4vcGxhaW4vbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGxhaW5QYXJzZXIgfSBmcm9tIFwiLi9wbGFpbi9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWV0YUpTT05MZXhlciB9IGZyb20gXCIuL21ldGFKU09OL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1ldGFKU09OUGFyc2VyIH0gZnJvbSBcIi4vbWV0YUpTT04vcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZsb3JlbmNlTGV4ZXIgfSBmcm9tIFwiLi9mbG9yZW5jZS9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGbG9yZW5jZVBhcnNlciB9IGZyb20gXCIuL2Zsb3JlbmNlL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWZhdWx0Q3VzdG9tR3JhbW1hciB9IGZyb20gXCIuL2Zsb3JlbmNlL2RlZmF1bHRDdXN0b21HcmFtbWFyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJCTkZMZXhlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJCTkYvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hckJORlBhcnNlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJCTkYvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybkxleGVyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybi9wYXJzZXJcIjtcbiJdfQ==