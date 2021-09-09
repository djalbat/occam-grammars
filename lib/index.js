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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiVGVYTGV4ZXIiLCJUZVhQYXJzZXIiLCJQbGFpbkxleGVyIiwiUGxhaW5QYXJzZXIiLCJNZXRhSlNPTkxleGVyIiwiTWV0YUpTT05QYXJzZXIiLCJGbG9yZW5jZUxleGVyIiwiRmxvcmVuY2VQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXJCTkZMZXhlciIsIkN1c3RvbUdyYW1tYXJCTkZQYXJzZXIiLCJDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciIsIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztnQ0FFUSxRQUFROzs7c0JBQW5CLE9BQU87OztnQ0FDSSxTQUFTOzs7dUJBQXBCLE9BQU87OztnQ0FDSSxVQUFVOzs7dUJBQXJCLE9BQU87OztnQ0FDSSxXQUFXOzs7d0JBQXRCLE9BQU87OztnQ0FDSSxhQUFhOzs7dUJBQXhCLE9BQU87OztnQ0FDSSxjQUFjOzs7d0JBQXpCLE9BQU87OztnQ0FDSSxhQUFhOzs7dUJBQXhCLE9BQU87OztnQ0FDSSxjQUFjOzs7d0JBQXpCLE9BQU87OztnQ0FDSSxvQkFBb0I7OztxQ0FBL0IsT0FBTzs7O2dDQUNJLHFCQUFxQjs7O3VCQUFoQyxPQUFPOzs7Z0NBQ0ksc0JBQXNCOzs7d0JBQWpDLE9BQU87OztnQ0FDSSxnQ0FBZ0M7Ozt1QkFBM0MsT0FBTzs7O2dDQUNJLGlDQUFpQzs7O3dCQUE1QyxPQUFPIn0=