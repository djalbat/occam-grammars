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
    default: function() {
        return _default;
    },
    furtleLexerFromEntries: function() {
        return furtleLexerFromEntries;
    },
    furtleLexerFromNothing: function() {
        return furtleLexerFromNothing;
    }
});
var _occamlexers = require("occam-lexers");
var _lexer = /*#__PURE__*/ _interop_require_default(require("../furtle/lexer"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var lexerFromRules = _occamlexers.lexerUtilities.lexerFromRules, rulesFromEntries = _occamlexers.lexerUtilities.rulesFromEntries;
function furtleLexerFromEntries(entries) {
    var rules;
    rules = rulesFromEntries(entries);
    var furtleLexer = lexerFromRules(_lexer.default, rules);
    return furtleLexer;
}
function furtleLexerFromNothing() {
    var entries = _lexer.default.entries;
    var rules;
    rules = rulesFromEntries(entries);
    var furtleLexer = lexerFromRules(_lexer.default, rules);
    return furtleLexer;
}
var _default = {
    furtleLexerFromEntries: furtleLexerFromEntries,
    furtleLexerFromNothing: furtleLexerFromNothing
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IEZ1cnRsZUxleGVyIGZyb20gXCIuLi9mdXJ0bGUvbGV4ZXJcIjtcblxuY29uc3QgeyBsZXhlckZyb21SdWxlcywgcnVsZXNGcm9tRW50cmllcyB9ID0gbGV4ZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVMZXhlckZyb21FbnRyaWVzKGVudHJpZXMpIHtcbiAgbGV0IHJ1bGVzO1xuXG4gIHJ1bGVzID0gcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICBjb25zdCBmdXJ0bGVMZXhlciA9IGxleGVyRnJvbVJ1bGVzKEZ1cnRsZUxleGVyLCBydWxlcyk7XG5cbiAgcmV0dXJuIGZ1cnRsZUxleGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnVydGxlTGV4ZXJGcm9tTm90aGluZygpIHtcbiAgY29uc3QgeyBlbnRyaWVzIH0gPSBGdXJ0bGVMZXhlcjtcblxuICBsZXQgcnVsZXM7XG5cbiAgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpO1xuXG4gIGNvbnN0IGZ1cnRsZUxleGVyID0gbGV4ZXJGcm9tUnVsZXMoRnVydGxlTGV4ZXIsIHJ1bGVzKTtcblxuICByZXR1cm4gZnVydGxlTGV4ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZnVydGxlTGV4ZXJGcm9tRW50cmllcyxcbiAgZnVydGxlTGV4ZXJGcm9tTm90aGluZ1xufTtcbiJdLCJuYW1lcyI6WyJmdXJ0bGVMZXhlckZyb21FbnRyaWVzIiwiZnVydGxlTGV4ZXJGcm9tTm90aGluZyIsImxleGVyRnJvbVJ1bGVzIiwibGV4ZXJVdGlsaXRpZXMiLCJydWxlc0Zyb21FbnRyaWVzIiwiZW50cmllcyIsInJ1bGVzIiwiZnVydGxlTGV4ZXIiLCJGdXJ0bGVMZXhlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBOEJBLE9BR0U7ZUFIRjs7SUF0QmdCQSxzQkFBc0I7ZUFBdEJBOztJQVVBQyxzQkFBc0I7ZUFBdEJBOzs7MkJBaEJlOzREQUVQOzs7Ozs7QUFFeEIsSUFBUUMsaUJBQXFDQywyQkFBYyxDQUFuREQsZ0JBQWdCRSxtQkFBcUJELDJCQUFjLENBQW5DQztBQUVqQixTQUFTSix1QkFBdUJLLE9BQU87SUFDNUMsSUFBSUM7SUFFSkEsUUFBUUYsaUJBQWlCQztJQUV6QixJQUFNRSxjQUFjTCxlQUFlTSxjQUFXLEVBQUVGO0lBRWhELE9BQU9DO0FBQ1Q7QUFFTyxTQUFTTjtJQUNkLElBQU0sQUFBRUksVUFBWUcsY0FBVyxDQUF2Qkg7SUFFUixJQUFJQztJQUVKQSxRQUFRRixpQkFBaUJDO0lBRXpCLElBQU1FLGNBQWNMLGVBQWVNLGNBQVcsRUFBRUY7SUFFaEQsT0FBT0M7QUFDVDtJQUVBLFdBQWU7SUFDYlAsd0JBQUFBO0lBQ0FDLHdCQUFBQTtBQUNGIn0=