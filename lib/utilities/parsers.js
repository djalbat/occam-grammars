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
    furtleParserFromBNF: function() {
        return furtleParserFromBNF;
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
function furtleParserFromBNF(bnf) {
    var rules;
    rules = rulesFromBNF(bnf);
    rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
    var furtleParser = parserFromRules(_parser.default, rules);
    return furtleParser;
}
function furtleParserFromNothing() {
    var bnf = _parser.default.bnf;
    var rules;
    rules = rulesFromBNF(bnf);
    rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
    var furtleParser = parserFromRules(_parser.default, rules);
    return furtleParser;
}
var _default = {
    furtleParserFromBNF: furtleParserFromBNF,
    furtleParserFromNothing: furtleParserFromNothing
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcblxuaW1wb3J0IEZ1cnRsZVBhcnNlciBmcm9tIFwiLi4vZnVydGxlL3BhcnNlclwiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVQYXJzZXJGcm9tQk5GKGJuZikge1xuICBsZXQgcnVsZXM7XG5cbiAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgY29uc3QgZnVydGxlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKEZ1cnRsZVBhcnNlciwgcnVsZXMpO1xuXG4gIHJldHVybiBmdXJ0bGVQYXJzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZygpIHtcbiAgY29uc3QgeyBibmYgfSA9IEZ1cnRsZVBhcnNlcjtcblxuICBsZXQgcnVsZXM7XG5cbiAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgY29uc3QgZnVydGxlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKEZ1cnRsZVBhcnNlciwgcnVsZXMpO1xuXG4gIHJldHVybiBmdXJ0bGVQYXJzZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZnVydGxlUGFyc2VyRnJvbUJORixcbiAgZnVydGxlUGFyc2VyRnJvbU5vdGhpbmdcbn07XG4iXSwibmFtZXMiOlsiZnVydGxlUGFyc2VyRnJvbUJORiIsImZ1cnRsZVBhcnNlckZyb21Ob3RoaW5nIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicGFyc2VyRnJvbVJ1bGVzIiwiYm5mIiwicnVsZXMiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwiZnVydGxlUGFyc2VyIiwiRnVydGxlUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFtQ0EsT0FHRTtlQUhGOztJQTFCZ0JBLG1CQUFtQjtlQUFuQkE7O0lBWUFDLHVCQUF1QjtlQUF2QkE7Ozs0QkFuQmdCO3FDQUNPOzZEQUVkOzs7Ozs7QUFFekIsSUFBUUMsZUFBa0NDLDZCQUFlLENBQWpERCxjQUFjRSxrQkFBb0JELDZCQUFlLENBQW5DQztBQUVmLFNBQVNKLG9CQUFvQkssR0FBRztJQUNyQyxJQUFJQztJQUVKQSxRQUFRSixhQUFhRztJQUVyQkMsUUFBUUMsSUFBQUEsNkNBQXNCLEVBQUNELFFBQVMsR0FBRztJQUUzQyxJQUFNRSxlQUFlSixnQkFBZ0JLLGVBQVksRUFBRUg7SUFFbkQsT0FBT0U7QUFDVDtBQUVPLFNBQVNQO0lBQ2QsSUFBTSxBQUFFSSxNQUFRSSxlQUFZLENBQXBCSjtJQUVSLElBQUlDO0lBRUpBLFFBQVFKLGFBQWFHO0lBRXJCQyxRQUFRQyxJQUFBQSw2Q0FBc0IsRUFBQ0QsUUFBUyxHQUFHO0lBRTNDLElBQU1FLGVBQWVKLGdCQUFnQkssZUFBWSxFQUFFSDtJQUVuRCxPQUFPRTtBQUNUO0lBRUEsV0FBZTtJQUNiUixxQkFBQUE7SUFDQUMseUJBQUFBO0FBQ0YifQ==