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
    var rules = rulesFromEntries(entries), furtleLexer = lexerFromRules(_lexer.default, rules);
    return furtleLexer;
}
function furtleLexerFromNothing() {
    var entries = _lexer.default.entries, rules = rulesFromEntries(entries), furtleLexer = lexerFromRules(_lexer.default, rules);
    return furtleLexer;
}
var _default = {
    furtleLexerFromEntries: furtleLexerFromEntries,
    furtleLexerFromNothing: furtleLexerFromNothing
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IEZ1cnRsZUxleGVyIGZyb20gXCIuLi9mdXJ0bGUvbGV4ZXJcIjtcblxuY29uc3QgeyBsZXhlckZyb21SdWxlcywgcnVsZXNGcm9tRW50cmllcyB9ID0gbGV4ZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVMZXhlckZyb21FbnRyaWVzKGVudHJpZXMpIHtcbiAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICBmdXJ0bGVMZXhlciA9IGxleGVyRnJvbVJ1bGVzKEZ1cnRsZUxleGVyLCBydWxlcyk7XG5cbiAgcmV0dXJuIGZ1cnRsZUxleGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnVydGxlTGV4ZXJGcm9tTm90aGluZygpIHtcbiAgY29uc3QgeyBlbnRyaWVzIH0gPSBGdXJ0bGVMZXhlcixcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICBmdXJ0bGVMZXhlciA9IGxleGVyRnJvbVJ1bGVzKEZ1cnRsZUxleGVyLCBydWxlcyk7XG5cbiAgcmV0dXJuIGZ1cnRsZUxleGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZ1cnRsZUxleGVyRnJvbUVudHJpZXMsXG4gIGZ1cnRsZUxleGVyRnJvbU5vdGhpbmdcbn07XG4iXSwibmFtZXMiOlsiZnVydGxlTGV4ZXJGcm9tRW50cmllcyIsImZ1cnRsZUxleGVyRnJvbU5vdGhpbmciLCJsZXhlckZyb21SdWxlcyIsImxleGVyVXRpbGl0aWVzIiwicnVsZXNGcm9tRW50cmllcyIsImVudHJpZXMiLCJydWxlcyIsImZ1cnRsZUxleGVyIiwiRnVydGxlTGV4ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXVCQSxPQUdFO2VBSEY7O0lBZmdCQSxzQkFBc0I7ZUFBdEJBOztJQU9BQyxzQkFBc0I7ZUFBdEJBOzs7MkJBYmU7NERBRVA7Ozs7OztBQUV4QixJQUFRQyxpQkFBcUNDLDJCQUFjLENBQW5ERCxnQkFBZ0JFLG1CQUFxQkQsMkJBQWMsQ0FBbkNDO0FBRWpCLFNBQVNKLHVCQUF1QkssT0FBTztJQUM1QyxJQUFNQyxRQUFRRixpQkFBaUJDLFVBQ3pCRSxjQUFjTCxlQUFlTSxjQUFXLEVBQUVGO0lBRWhELE9BQU9DO0FBQ1Q7QUFFTyxTQUFTTjtJQUNkLElBQU0sQUFBRUksVUFBWUcsY0FBVyxDQUF2QkgsU0FDRkMsUUFBUUYsaUJBQWlCQyxVQUN6QkUsY0FBY0wsZUFBZU0sY0FBVyxFQUFFRjtJQUVoRCxPQUFPQztBQUNUO0lBRUEsV0FBZTtJQUNiUCx3QkFBQUE7SUFDQUMsd0JBQUFBO0FBQ0YifQ==