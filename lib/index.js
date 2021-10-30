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
Object.defineProperty(exports, "ReadmeLexer", {
    enumerable: true,
    get: function() {
        return _lexer2.default;
    }
});
Object.defineProperty(exports, "ReadmeParser", {
    enumerable: true,
    get: function() {
        return _parser2.default;
    }
});
Object.defineProperty(exports, "MetaJSONLexer", {
    enumerable: true,
    get: function() {
        return _lexer3.default;
    }
});
Object.defineProperty(exports, "MetaJSONParser", {
    enumerable: true,
    get: function() {
        return _parser3.default;
    }
});
Object.defineProperty(exports, "FlorenceLexer", {
    enumerable: true,
    get: function() {
        return _lexer4.default;
    }
});
Object.defineProperty(exports, "FlorenceParser", {
    enumerable: true,
    get: function() {
        return _parser4.default;
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
        return _lexer5.default;
    }
});
Object.defineProperty(exports, "CustomGrammarBNFParser", {
    enumerable: true,
    get: function() {
        return _parser5.default;
    }
});
Object.defineProperty(exports, "CustomGrammarLexicalPatternLexer", {
    enumerable: true,
    get: function() {
        return _lexer6.default;
    }
});
Object.defineProperty(exports, "CustomGrammarLexicalPatternParser", {
    enumerable: true,
    get: function() {
        return _parser6.default;
    }
});
var _lexer = _interopRequireDefault(require("./teX/lexer"));
var _parser = _interopRequireDefault(require("./teX/parser"));
var _lexer1 = _interopRequireDefault(require("./plain/lexer"));
var _parser1 = _interopRequireDefault(require("./plain/parser"));
var _lexer2 = _interopRequireDefault(require("./readme/lexer"));
var _parser2 = _interopRequireDefault(require("./readme/parser"));
var _lexer3 = _interopRequireDefault(require("./metaJSON/lexer"));
var _parser3 = _interopRequireDefault(require("./metaJSON/parser"));
var _lexer4 = _interopRequireDefault(require("./florence/lexer"));
var _parser4 = _interopRequireDefault(require("./florence/parser"));
var _defaultCustomGrammar = _interopRequireDefault(require("./florence/defaultCustomGrammar"));
var _lexer5 = _interopRequireDefault(require("./customGrammarBNF/lexer"));
var _parser5 = _interopRequireDefault(require("./customGrammarBNF/parser"));
var _lexer6 = _interopRequireDefault(require("./customGrammarLexicalPattern/lexer"));
var _parser6 = _interopRequireDefault(require("./customGrammarLexicalPattern/parser"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhMZXhlciB9IGZyb20gXCIuL3RlWC9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZVhQYXJzZXIgfSBmcm9tIFwiLi90ZVgvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsYWluTGV4ZXIgfSBmcm9tIFwiLi9wbGFpbi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbGFpblBhcnNlciB9IGZyb20gXCIuL3BsYWluL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkbWVMZXhlciB9IGZyb20gXCIuL3JlYWRtZS9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFkbWVQYXJzZXIgfSBmcm9tIFwiLi9yZWFkbWUvcGFyc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1ldGFKU09OTGV4ZXIgfSBmcm9tIFwiLi9tZXRhSlNPTi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXRhSlNPTlBhcnNlciB9IGZyb20gXCIuL21ldGFKU09OL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGbG9yZW5jZUxleGVyIH0gZnJvbSBcIi4vZmxvcmVuY2UvbGV4ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwiLi9mbG9yZW5jZS9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyQk5GTGV4ZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyQk5GL3BhcnNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciB9IGZyb20gXCIuL2N1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybi9sZXhlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIgfSBmcm9tIFwiLi9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vcGFyc2VyXCI7XG4iXSwibmFtZXMiOlsiVGVYTGV4ZXIiLCJkZWZhdWx0IiwiVGVYUGFyc2VyIiwiUGxhaW5MZXhlciIsIlBsYWluUGFyc2VyIiwiUmVhZG1lTGV4ZXIiLCJSZWFkbWVQYXJzZXIiLCJNZXRhSlNPTkxleGVyIiwiTWV0YUpTT05QYXJzZXIiLCJGbG9yZW5jZUxleGVyIiwiRmxvcmVuY2VQYXJzZXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXJCTkZMZXhlciIsIkN1c3RvbUdyYW1tYXJCTkZQYXJzZXIiLCJDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5MZXhlciIsIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OzsrQkFFUUEsQ0FBUTs7O3NCQUFuQkMsT0FBTzs7OytCQUNJQyxDQUFTOzs7dUJBQXBCRCxPQUFPOzs7K0JBQ0lFLENBQVU7Ozt1QkFBckJGLE9BQU87OzsrQkFDSUcsQ0FBVzs7O3dCQUF0QkgsT0FBTzs7OytCQUNJSSxDQUFXOzs7dUJBQXRCSixPQUFPOzs7K0JBQ0lLLENBQVk7Ozt3QkFBdkJMLE9BQU87OzsrQkFDSU0sQ0FBYTs7O3VCQUF4Qk4sT0FBTzs7OytCQUNJTyxDQUFjOzs7d0JBQXpCUCxPQUFPOzs7K0JBQ0lRLENBQWE7Ozt1QkFBeEJSLE9BQU87OzsrQkFDSVMsQ0FBYzs7O3dCQUF6QlQsT0FBTzs7OytCQUNJVSxDQUFvQjs7O3FDQUEvQlYsT0FBTzs7OytCQUNJVyxDQUFxQjs7O3VCQUFoQ1gsT0FBTzs7OytCQUNJWSxDQUFzQjs7O3dCQUFqQ1osT0FBTzs7OytCQUNJYSxDQUFnQzs7O3VCQUEzQ2IsT0FBTzs7OytCQUNJYyxDQUFpQzs7O3dCQUE1Q2QsT0FBTyJ9