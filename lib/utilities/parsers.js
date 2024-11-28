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
    furtleParserFromNothing: function() {
        return furtleParserFromNothing;
    }
});
var _occamparsers = require("occam-parsers");
var _occamgrammarutilities = require("occam-grammar-utilities");
var _parser = /*#__PURE__*/ _interop_require_default(require("../furtle/parser"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF, parserFromRules = _occamparsers.parserUtilities.parserFromRules;
function furtleParserFromNothing() {
    var bnf = _parser.default.bnf;
    var rules;
    rules = rulesFromBNF(bnf);
    rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
    var furtleParser = parserFromRules(_parser.default, rules);
    return furtleParser;
}
var _default = {
    furtleParserFromNothing: furtleParserFromNothing
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcblxuaW1wb3J0IEZ1cnRsZVBhcnNlciBmcm9tIFwiLi4vZnVydGxlL3BhcnNlclwiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZygpIHtcbiAgY29uc3QgeyBibmYgfSA9IEZ1cnRsZVBhcnNlcjtcblxuICBsZXQgcnVsZXM7XG5cbiAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgY29uc3QgZnVydGxlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKEZ1cnRsZVBhcnNlciwgcnVsZXMpO1xuXG4gIHJldHVybiBmdXJ0bGVQYXJzZXI7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZ1xufTtcbiJdLCJuYW1lcyI6WyJmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyIsInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInBhcnNlckZyb21SdWxlcyIsImJuZiIsIkZ1cnRsZVBhcnNlciIsInJ1bGVzIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsImZ1cnRsZVBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBd0JBLE9BRUU7ZUFGRjs7SUFmZ0JBLHVCQUF1QjtlQUF2QkE7Ozs0QkFQZ0I7cUNBQ087NkRBRWQ7Ozs7OztBQUV6QixJQUFRQyxlQUFrQ0MsNkJBQWUsQ0FBakRELGNBQWNFLGtCQUFvQkQsNkJBQWUsQ0FBbkNDO0FBRWYsU0FBU0g7SUFDZCxJQUFNLEFBQUVJLE1BQVFDLGVBQVksQ0FBcEJEO0lBRVIsSUFBSUU7SUFFSkEsUUFBUUwsYUFBYUc7SUFFckJFLFFBQVFDLElBQUFBLDZDQUFzQixFQUFDRCxRQUFTLEdBQUc7SUFFM0MsSUFBTUUsZUFBZUwsZ0JBQWdCRSxlQUFZLEVBQUVDO0lBRW5ELE9BQU9FO0FBQ1Q7SUFHQSxXQUFlO0lBQ2JSLHlCQUFBQTtBQUNGIn0=