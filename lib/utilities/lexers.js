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
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var lexerFromRules = _occamlexers.lexerUtilities.lexerFromRules, rulesFromEntries = _occamlexers.lexerUtilities.rulesFromEntries;
function furtleLexerFromEntries(entries) {
    var augmented = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    var rules;
    rules = rulesFromEntries(entries);
    if (augmented) {
        rules = augmentRules(rules);
    }
    var furtleLexer = lexerFromRules(_lexer.default, rules);
    return furtleLexer;
}
function furtleLexerFromNothing() {
    var augmented = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    var entries = _lexer.default.entries;
    var rules;
    rules = rulesFromEntries(entries);
    if (augmented) {
        rules = augmentRules(rules);
    }
    var furtleLexer = lexerFromRules(_lexer.default, rules);
    return furtleLexer;
}
var _default = {
    furtleLexerFromEntries: furtleLexerFromEntries,
    furtleLexerFromNothing: furtleLexerFromNothing
};
function augmentRules(rules) {
    var lexicalRules = rules; ///
    lexicalRules = (0, _query.augmentLexicalRules)(lexicalRules);
    rules = lexicalRules; ///
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IEZ1cnRsZUxleGVyIGZyb20gXCIuLi9mdXJ0bGUvbGV4ZXJcIjtcblxuaW1wb3J0IHsgYXVnbWVudExleGljYWxSdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBsZXhlckZyb21SdWxlcywgcnVsZXNGcm9tRW50cmllcyB9ID0gbGV4ZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVMZXhlckZyb21FbnRyaWVzKGVudHJpZXMsIGF1Z21lbnRlZCA9IHRydWUpIHtcbiAgbGV0IHJ1bGVzO1xuXG4gIHJ1bGVzID0gcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICBpZiAoYXVnbWVudGVkKSB7XG4gICAgcnVsZXMgPSBhdWdtZW50UnVsZXMocnVsZXMpO1xuICB9XG5cbiAgY29uc3QgZnVydGxlTGV4ZXIgPSBsZXhlckZyb21SdWxlcyhGdXJ0bGVMZXhlciwgcnVsZXMpO1xuXG4gIHJldHVybiBmdXJ0bGVMZXhlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZ1cnRsZUxleGVyRnJvbU5vdGhpbmcoYXVnbWVudGVkID0gdHJ1ZSkge1xuICBjb25zdCB7IGVudHJpZXMgfSA9IEZ1cnRsZUxleGVyO1xuXG4gIGxldCBydWxlcztcblxuICBydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyk7XG5cbiAgaWYgKGF1Z21lbnRlZCkge1xuICAgIHJ1bGVzID0gYXVnbWVudFJ1bGVzKHJ1bGVzKTtcbiAgfVxuXG4gIGNvbnN0IGZ1cnRsZUxleGVyID0gbGV4ZXJGcm9tUnVsZXMoRnVydGxlTGV4ZXIsIHJ1bGVzKTtcblxuICByZXR1cm4gZnVydGxlTGV4ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZnVydGxlTGV4ZXJGcm9tRW50cmllcyxcbiAgZnVydGxlTGV4ZXJGcm9tTm90aGluZ1xufTtcblxuZnVuY3Rpb24gYXVnbWVudFJ1bGVzKHJ1bGVzKSB7XG4gIGxldCBsZXhpY2FsUnVsZXMgPSBydWxlczsgLy8vXG5cbiAgbGV4aWNhbFJ1bGVzID0gYXVnbWVudExleGljYWxSdWxlcyhsZXhpY2FsUnVsZXMpO1xuXG4gIHJ1bGVzID0gbGV4aWNhbFJ1bGVzOyAvLy9cblxuICByZXR1cm4gcnVsZXM7XG59XG4iXSwibmFtZXMiOlsiZnVydGxlTGV4ZXJGcm9tRW50cmllcyIsImZ1cnRsZUxleGVyRnJvbU5vdGhpbmciLCJsZXhlckZyb21SdWxlcyIsImxleGVyVXRpbGl0aWVzIiwicnVsZXNGcm9tRW50cmllcyIsImVudHJpZXMiLCJhdWdtZW50ZWQiLCJydWxlcyIsImF1Z21lbnRSdWxlcyIsImZ1cnRsZUxleGVyIiwiRnVydGxlTGV4ZXIiLCJsZXhpY2FsUnVsZXMiLCJhdWdtZW50TGV4aWNhbFJ1bGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF3Q0EsT0FHRTtlQUhGOztJQTlCZ0JBLHNCQUFzQjtlQUF0QkE7O0lBY0FDLHNCQUFzQjtlQUF0QkE7OzsyQkF0QmU7NERBRVA7cUJBRVk7Ozs7OztBQUVwQyxJQUFRQyxpQkFBcUNDLDJCQUFjLENBQW5ERCxnQkFBZ0JFLG1CQUFxQkQsMkJBQWMsQ0FBbkNDO0FBRWpCLFNBQVNKLHVCQUF1QkssT0FBTztRQUFFQyxZQUFBQSxpRUFBWTtJQUMxRCxJQUFJQztJQUVKQSxRQUFRSCxpQkFBaUJDO0lBRXpCLElBQUlDLFdBQVc7UUFDYkMsUUFBUUMsYUFBYUQ7SUFDdkI7SUFFQSxJQUFNRSxjQUFjUCxlQUFlUSxjQUFXLEVBQUVIO0lBRWhELE9BQU9FO0FBQ1Q7QUFFTyxTQUFTUjtRQUF1QkssWUFBQUEsaUVBQVk7SUFDakQsSUFBTSxBQUFFRCxVQUFZSyxjQUFXLENBQXZCTDtJQUVSLElBQUlFO0lBRUpBLFFBQVFILGlCQUFpQkM7SUFFekIsSUFBSUMsV0FBVztRQUNiQyxRQUFRQyxhQUFhRDtJQUN2QjtJQUVBLElBQU1FLGNBQWNQLGVBQWVRLGNBQVcsRUFBRUg7SUFFaEQsT0FBT0U7QUFDVDtJQUVBLFdBQWU7SUFDYlQsd0JBQUFBO0lBQ0FDLHdCQUFBQTtBQUNGO0FBRUEsU0FBU08sYUFBYUQsS0FBSztJQUN6QixJQUFJSSxlQUFlSixPQUFPLEdBQUc7SUFFN0JJLGVBQWVDLElBQUFBLDBCQUFtQixFQUFDRDtJQUVuQ0osUUFBUUksY0FBYyxHQUFHO0lBRXpCLE9BQU9KO0FBQ1QifQ==