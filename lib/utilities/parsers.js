"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get furtleParserFromBNF () {
        return furtleParserFromBNF;
    },
    get furtleParserFromBNFAndStartRuleName () {
        return furtleParserFromBNFAndStartRuleName;
    },
    get furtleParserFromNothing () {
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
var rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF, parserFromRules = _occamparsers.parserUtilities.parserFromRules, parserFromRulesAndStartRuleName = _occamparsers.parserUtilities.parserFromRulesAndStartRuleName;
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
function furtleParserFromBNFAndStartRuleName(bnf, startRuleName) {
    var rules;
    rules = rulesFromBNF(bnf);
    rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
    var furtleParser = parserFromRulesAndStartRuleName(_parser.default, rules, startRuleName);
    return furtleParser;
}
var _default = {
    furtleParserFromBNF: furtleParserFromBNF,
    furtleParserFromNothing: furtleParserFromNothing,
    furtleParserFromBNFAndStartRuleName: furtleParserFromBNFAndStartRuleName
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcblxuaW1wb3J0IEZ1cnRsZVBhcnNlciBmcm9tIFwiLi4vZnVydGxlL3BhcnNlclwiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzLCBwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVQYXJzZXJGcm9tQk5GKGJuZikge1xuICBsZXQgcnVsZXM7XG5cbiAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgY29uc3QgZnVydGxlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKEZ1cnRsZVBhcnNlciwgcnVsZXMpO1xuXG4gIHJldHVybiBmdXJ0bGVQYXJzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZygpIHtcbiAgY29uc3QgeyBibmYgfSA9IEZ1cnRsZVBhcnNlcjtcblxuICBsZXQgcnVsZXM7XG5cbiAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgY29uc3QgZnVydGxlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKEZ1cnRsZVBhcnNlciwgcnVsZXMpO1xuXG4gIHJldHVybiBmdXJ0bGVQYXJzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVQYXJzZXJGcm9tQk5GQW5kU3RhcnRSdWxlTmFtZShibmYsIHN0YXJ0UnVsZU5hbWUpIHtcbiAgbGV0IHJ1bGVzO1xuXG4gIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgcnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG4gIGNvbnN0IGZ1cnRsZVBhcnNlciA9IHBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUoRnVydGxlUGFyc2VyLCBydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIGZ1cnRsZVBhcnNlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmdXJ0bGVQYXJzZXJGcm9tQk5GLFxuICBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyxcbiAgZnVydGxlUGFyc2VyRnJvbUJORkFuZFN0YXJ0UnVsZU5hbWVcbn07XG4iXSwibmFtZXMiOlsiZnVydGxlUGFyc2VyRnJvbUJORiIsImZ1cnRsZVBhcnNlckZyb21CTkZBbmRTdGFydFJ1bGVOYW1lIiwiZnVydGxlUGFyc2VyRnJvbU5vdGhpbmciLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJwYXJzZXJGcm9tUnVsZXMiLCJwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiYm5mIiwicnVsZXMiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwiZnVydGxlUGFyc2VyIiwiRnVydGxlUGFyc2VyIiwic3RhcnRSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBK0NBO2VBQUE7O1FBdENnQkE7ZUFBQUE7O1FBMEJBQztlQUFBQTs7UUFkQUM7ZUFBQUE7Ozs0QkFuQmdCO3FDQUNPOzZEQUVkOzs7Ozs7QUFFekIsSUFBUUMsZUFBbUVDLDZCQUFlLENBQWxGRCxjQUFjRSxrQkFBcURELDZCQUFlLENBQXBFQyxpQkFBaUJDLGtDQUFvQ0YsNkJBQWUsQ0FBbkRFO0FBRWhDLFNBQVNOLG9CQUFvQk8sR0FBRztJQUNyQyxJQUFJQztJQUVKQSxRQUFRTCxhQUFhSTtJQUVyQkMsUUFBUUMsSUFBQUEsNkNBQXNCLEVBQUNELFFBQVMsR0FBRztJQUUzQyxJQUFNRSxlQUFlTCxnQkFBZ0JNLGVBQVksRUFBRUg7SUFFbkQsT0FBT0U7QUFDVDtBQUVPLFNBQVNSO0lBQ2QsSUFBTSxBQUFFSyxNQUFRSSxlQUFZLENBQXBCSjtJQUVSLElBQUlDO0lBRUpBLFFBQVFMLGFBQWFJO0lBRXJCQyxRQUFRQyxJQUFBQSw2Q0FBc0IsRUFBQ0QsUUFBUyxHQUFHO0lBRTNDLElBQU1FLGVBQWVMLGdCQUFnQk0sZUFBWSxFQUFFSDtJQUVuRCxPQUFPRTtBQUNUO0FBRU8sU0FBU1Qsb0NBQW9DTSxHQUFHLEVBQUVLLGFBQWE7SUFDcEUsSUFBSUo7SUFFSkEsUUFBUUwsYUFBYUk7SUFFckJDLFFBQVFDLElBQUFBLDZDQUFzQixFQUFDRCxRQUFTLEdBQUc7SUFFM0MsSUFBTUUsZUFBZUosZ0NBQWdDSyxlQUFZLEVBQUVILE9BQU9JO0lBRTFFLE9BQU9GO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JWLHFCQUFBQTtJQUNBRSx5QkFBQUE7SUFDQUQscUNBQUFBO0FBQ0YifQ==