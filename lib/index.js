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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhMZXhlciB9IGZyb20gXCIuL3RlWC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhQYXJzZXIgfSBmcm9tIFwiLi90ZVgvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluTGV4ZXIgfSBmcm9tIFwiLi9wbGFpbi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbGFpblBhcnNlciB9IGZyb20gXCIuL3BsYWluL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXRhSlNPTkxleGVyIH0gZnJvbSBcIi4vbWV0YUpTT04vbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWV0YUpTT05QYXJzZXIgfSBmcm9tIFwiLi9tZXRhSlNPTi9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmxvcmVuY2VMZXhlciB9IGZyb20gXCIuL2Zsb3JlbmNlL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZsb3JlbmNlUGFyc2VyIH0gZnJvbSBcIi4vZmxvcmVuY2UvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlZmF1bHRDdXN0b21HcmFtbWFyIH0gZnJvbSBcIi4vZmxvcmVuY2UvZGVmYXVsdEN1c3RvbUdyYW1tYXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hckJORkxleGVyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hckJORi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyQk5GUGFyc2VyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hckJORi9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuTGV4ZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyIH0gZnJvbSBcIi4vY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuL3BhcnNlclwiO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7Z0NBRVEsUUFBUTs7O3NCQUFuQixPQUFPOzs7Z0NBQ0ksU0FBUzs7O3VCQUFwQixPQUFPOzs7Z0NBQ0ksVUFBVTs7O3VCQUFyQixPQUFPOzs7Z0NBQ0ksV0FBVzs7O3dCQUF0QixPQUFPOzs7Z0NBQ0ksYUFBYTs7O3VCQUF4QixPQUFPOzs7Z0NBQ0ksY0FBYzs7O3dCQUF6QixPQUFPOzs7Z0NBQ0ksYUFBYTs7O3VCQUF4QixPQUFPOzs7Z0NBQ0ksY0FBYzs7O3dCQUF6QixPQUFPOzs7Z0NBQ0ksb0JBQW9COzs7cUNBQS9CLE9BQU87OztnQ0FDSSxxQkFBcUI7Ozt1QkFBaEMsT0FBTzs7O2dDQUNJLHNCQUFzQjs7O3dCQUFqQyxPQUFPOzs7Z0NBQ0ksZ0NBQWdDOzs7dUJBQTNDLE9BQU87OztnQ0FDSSxpQ0FBaUM7Ozt3QkFBNUMsT0FBTyJ9