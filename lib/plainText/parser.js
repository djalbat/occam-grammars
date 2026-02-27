"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PlainTextParser;
    }
});
const _occamparsers = require("occam-parsers");
const _bnf = /*#__PURE__*/ _interop_require_default(require("./bnf"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PlainTextParser extends _occamparsers.CommonParser {
    static bnf = _bnf.default;
    static fromNothing() {
        return _occamparsers.CommonParser.fromNothing(PlainTextParser);
    }
    static fromBNF(bnf) {
        return _occamparsers.CommonParser.fromBNF(PlainTextParser, bnf);
    }
    static fromRules(rules) {
        return _occamparsers.CommonParser.fromRules(PlainTextParser, rules);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbGFpblRleHQvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFpblRleHRQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tTm90aGluZyhQbGFpblRleHRQYXJzZXIpOyB9XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbUJORihQbGFpblRleHRQYXJzZXIsIGJuZik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKFBsYWluVGV4dFBhcnNlciwgcnVsZXMpOyB9XG59XG4iXSwibmFtZXMiOlsiUGxhaW5UZXh0UGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiYm5mIiwiZnJvbU5vdGhpbmciLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIiwicnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7OEJBSlE7NERBRWI7Ozs7OztBQUVELE1BQU1BLHdCQUF3QkMsMEJBQVk7SUFDdkQsT0FBT0MsTUFBTUEsWUFBRyxDQUFDO0lBRWpCLE9BQU9DLGNBQWM7UUFBRSxPQUFPRiwwQkFBWSxDQUFDRSxXQUFXLENBQUNIO0lBQWtCO0lBRXpFLE9BQU9JLFFBQVFGLEdBQUcsRUFBRTtRQUFFLE9BQU9ELDBCQUFZLENBQUNHLE9BQU8sQ0FBQ0osaUJBQWlCRTtJQUFNO0lBRXpFLE9BQU9HLFVBQVVDLEtBQUssRUFBRTtRQUFFLE9BQU9MLDBCQUFZLENBQUNJLFNBQVMsQ0FBQ0wsaUJBQWlCTTtJQUFRO0FBQ25GIn0=