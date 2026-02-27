"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CustomGrammarVocabularyParser;
    }
});
const _occamparsers = require("occam-parsers");
const _bnf = /*#__PURE__*/ _interop_require_default(require("./bnf"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class CustomGrammarVocabularyParser extends _occamparsers.CommonParser {
    static bnf = _bnf.default;
    static fromNothing() {
        return _occamparsers.CommonParser.fromNothing(CustomGrammarVocabularyParser);
    }
    static fromBNF(bnf) {
        return _occamparsers.CommonParser.fromBNF(CustomGrammarVocabularyParser, bnf);
    }
    static fromRules(rules) {
        return _occamparsers.CommonParser.fromRules(CustomGrammarVocabularyParser, rules);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyVm9jYWJ1bGFyeS9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUdyYW1tYXJWb2NhYnVsYXJ5UGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbU5vdGhpbmcoQ3VzdG9tR3JhbW1hclZvY2FidWxhcnlQYXJzZXIpOyB9XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbUJORihDdXN0b21HcmFtbWFyVm9jYWJ1bGFyeVBhcnNlciwgYm5mKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tUnVsZXMoQ3VzdG9tR3JhbW1hclZvY2FidWxhcnlQYXJzZXIsIHJ1bGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXJWb2NhYnVsYXJ5UGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiYm5mIiwiZnJvbU5vdGhpbmciLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIiwicnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7OEJBSlE7NERBRWI7Ozs7OztBQUVELE1BQU1BLHNDQUFzQ0MsMEJBQVk7SUFDckUsT0FBT0MsTUFBTUEsWUFBRyxDQUFDO0lBRWpCLE9BQU9DLGNBQWM7UUFBRSxPQUFPRiwwQkFBWSxDQUFDRSxXQUFXLENBQUNIO0lBQWdDO0lBRXZGLE9BQU9JLFFBQVFGLEdBQUcsRUFBRTtRQUFFLE9BQU9ELDBCQUFZLENBQUNHLE9BQU8sQ0FBQ0osK0JBQStCRTtJQUFNO0lBRXZGLE9BQU9HLFVBQVVDLEtBQUssRUFBRTtRQUFFLE9BQU9MLDBCQUFZLENBQUNJLFNBQVMsQ0FBQ0wsK0JBQStCTTtJQUFRO0FBQ2pHIn0=