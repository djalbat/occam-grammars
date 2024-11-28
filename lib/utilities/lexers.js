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
function furtleLexerFromNothing() {
    var entries = _lexer.default.entries, rules = rulesFromEntries(entries), furtleLexer = lexerFromRules(_lexer.default, rules);
    return furtleLexer;
}
var _default = {
    furtleLexerFromNothing: furtleLexerFromNothing
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IEZ1cnRsZUxleGVyIGZyb20gXCIuLi9mdXJ0bGUvbGV4ZXJcIjtcblxuY29uc3QgeyBsZXhlckZyb21SdWxlcywgcnVsZXNGcm9tRW50cmllcyB9ID0gbGV4ZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nKCkge1xuICBjb25zdCB7IGVudHJpZXMgfSA9IEZ1cnRsZUxleGVyLFxuICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgIGZ1cnRsZUxleGVyID0gbGV4ZXJGcm9tUnVsZXMoRnVydGxlTGV4ZXIsIHJ1bGVzKTtcblxuICByZXR1cm4gZnVydGxlTGV4ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZnVydGxlTGV4ZXJGcm9tTm90aGluZ1xufTtcbiJdLCJuYW1lcyI6WyJmdXJ0bGVMZXhlckZyb21Ob3RoaW5nIiwibGV4ZXJGcm9tUnVsZXMiLCJsZXhlclV0aWxpdGllcyIsInJ1bGVzRnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiRnVydGxlTGV4ZXIiLCJydWxlcyIsImZ1cnRsZUxleGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFnQkEsT0FFRTtlQUZGOztJQVJnQkEsc0JBQXNCO2VBQXRCQTs7OzJCQU5lOzREQUVQOzs7Ozs7QUFFeEIsSUFBUUMsaUJBQXFDQywyQkFBYyxDQUFuREQsZ0JBQWdCRSxtQkFBcUJELDJCQUFjLENBQW5DQztBQUVqQixTQUFTSDtJQUNkLElBQU0sQUFBRUksVUFBWUMsY0FBVyxDQUF2QkQsU0FDRkUsUUFBUUgsaUJBQWlCQyxVQUN6QkcsY0FBY04sZUFBZUksY0FBVyxFQUFFQztJQUVoRCxPQUFPQztBQUNUO0lBRUEsV0FBZTtJQUNiUCx3QkFBQUE7QUFDRiJ9