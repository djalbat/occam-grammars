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
    furtleParserFromBNFAndStartRuleName: function() {
        return furtleParserFromBNFAndStartRuleName;
    },
    furtleParserFromNothing: function() {
        return furtleParserFromNothing;
    }
});
var _occamparsers = require("occam-parsers");
var _occamgrammarutilities = require("occam-grammar-utilities");
var _parser = /*#__PURE__*/ _interop_require_default(require("../furtle/parser"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF, parserFromRules = _occamparsers.parserUtilities.parserFromRules, parserFromRulesAndStartRuleName = _occamparsers.parserUtilities.parserFromRulesAndStartRuleName;
function furtleParserFromBNF(bnf) {
    var augmented = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    var rules;
    rules = rulesFromBNF(bnf);
    rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
    if (augmented) {
        rules = augmentRules(rules);
    }
    var furtleParser = parserFromRules(_parser.default, rules);
    return furtleParser;
}
function furtleParserFromNothing() {
    var augmented = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    var bnf = _parser.default.bnf;
    var rules;
    rules = rulesFromBNF(bnf);
    rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
    if (augmented) {
        rules = augmentRules(rules);
    }
    var furtleParser = parserFromRules(_parser.default, rules);
    return furtleParser;
}
function furtleParserFromBNFAndStartRuleName(bnf, startRuleName) {
    var augmented = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    var rules;
    rules = rulesFromBNF(bnf);
    rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
    if (augmented) {
        rules = augmentRules(rules);
    }
    var furtleParser = parserFromRulesAndStartRuleName(_parser.default, rules, startRuleName);
    return furtleParser;
}
var _default = {
    furtleParserFromBNF: furtleParserFromBNF,
    furtleParserFromNothing: furtleParserFromNothing,
    furtleParserFromBNFAndStartRuleName: furtleParserFromBNFAndStartRuleName
};
function augmentRules(rules) {
    var bnfRules = rules; ///
    bnfRules = (0, _query.augmentBNFRules)(bnfRules);
    rules = bnfRules; ///
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcblxuaW1wb3J0IEZ1cnRsZVBhcnNlciBmcm9tIFwiLi4vZnVydGxlL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBhdWdtZW50Qk5GUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GLCBwYXJzZXJGcm9tUnVsZXMsIHBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUgfSA9IHBhcnNlclV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGZ1cnRsZVBhcnNlckZyb21CTkYoYm5mLCBhdWdtZW50ZWQgPSB0cnVlKSB7XG4gIGxldCBydWxlcztcblxuICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7ICAvLy9cblxuICBpZiAoYXVnbWVudGVkKSB7XG4gICAgcnVsZXMgPSBhdWdtZW50UnVsZXMocnVsZXMpO1xuICB9XG5cbiAgY29uc3QgZnVydGxlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKEZ1cnRsZVBhcnNlciwgcnVsZXMpO1xuXG4gIHJldHVybiBmdXJ0bGVQYXJzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyhhdWdtZW50ZWQgPSB0cnVlKSB7XG4gIGNvbnN0IHsgYm5mIH0gPSBGdXJ0bGVQYXJzZXI7XG5cbiAgbGV0IHJ1bGVzO1xuXG4gIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgcnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG4gIGlmIChhdWdtZW50ZWQpIHtcbiAgICBydWxlcyA9IGF1Z21lbnRSdWxlcyhydWxlcyk7XG4gIH1cblxuICBjb25zdCBmdXJ0bGVQYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoRnVydGxlUGFyc2VyLCBydWxlcyk7XG5cbiAgcmV0dXJuIGZ1cnRsZVBhcnNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZ1cnRsZVBhcnNlckZyb21CTkZBbmRTdGFydFJ1bGVOYW1lKGJuZiwgc3RhcnRSdWxlTmFtZSwgYXVnbWVudGVkID0gdHJ1ZSkge1xuICBsZXQgcnVsZXM7XG5cbiAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgaWYgKGF1Z21lbnRlZCkge1xuICAgIHJ1bGVzID0gYXVnbWVudFJ1bGVzKHJ1bGVzKTtcbiAgfVxuXG4gIGNvbnN0IGZ1cnRsZVBhcnNlciA9IHBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUoRnVydGxlUGFyc2VyLCBydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIGZ1cnRsZVBhcnNlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmdXJ0bGVQYXJzZXJGcm9tQk5GLFxuICBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyxcbiAgZnVydGxlUGFyc2VyRnJvbUJORkFuZFN0YXJ0UnVsZU5hbWVcbn07XG5cbmZ1bmN0aW9uIGF1Z21lbnRSdWxlcyhydWxlcykge1xuICBsZXQgYm5mUnVsZXMgPSBydWxlczsgLy8vXG5cbiAgYm5mUnVsZXMgPSBhdWdtZW50Qk5GUnVsZXMoYm5mUnVsZXMpO1xuXG4gIHJ1bGVzID0gYm5mUnVsZXM7IC8vL1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdLCJuYW1lcyI6WyJmdXJ0bGVQYXJzZXJGcm9tQk5GIiwiZnVydGxlUGFyc2VyRnJvbUJORkFuZFN0YXJ0UnVsZU5hbWUiLCJmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyIsInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInBhcnNlckZyb21SdWxlcyIsInBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJibmYiLCJhdWdtZW50ZWQiLCJydWxlcyIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJhdWdtZW50UnVsZXMiLCJmdXJ0bGVQYXJzZXIiLCJGdXJ0bGVQYXJzZXIiLCJzdGFydFJ1bGVOYW1lIiwiYm5mUnVsZXMiLCJhdWdtZW50Qk5GUnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTZEQSxPQUlFO2VBSkY7O0lBbERnQkEsbUJBQW1CO2VBQW5CQTs7SUFrQ0FDLG1DQUFtQztlQUFuQ0E7O0lBbEJBQyx1QkFBdUI7ZUFBdkJBOzs7NEJBekJnQjtxQ0FDTzs2REFFZDtxQkFFTzs7Ozs7O0FBRWhDLElBQVFDLGVBQW1FQyw2QkFBZSxDQUFsRkQsY0FBY0Usa0JBQXFERCw2QkFBZSxDQUFwRUMsaUJBQWlCQyxrQ0FBb0NGLDZCQUFlLENBQW5ERTtBQUVoQyxTQUFTTixvQkFBb0JPLEdBQUc7UUFBRUMsWUFBQUEsaUVBQVk7SUFDbkQsSUFBSUM7SUFFSkEsUUFBUU4sYUFBYUk7SUFFckJFLFFBQVFDLElBQUFBLDZDQUFzQixFQUFDRCxRQUFTLEdBQUc7SUFFM0MsSUFBSUQsV0FBVztRQUNiQyxRQUFRRSxhQUFhRjtJQUN2QjtJQUVBLElBQU1HLGVBQWVQLGdCQUFnQlEsZUFBWSxFQUFFSjtJQUVuRCxPQUFPRztBQUNUO0FBRU8sU0FBU1Y7UUFBd0JNLFlBQUFBLGlFQUFZO0lBQ2xELElBQU0sQUFBRUQsTUFBUU0sZUFBWSxDQUFwQk47SUFFUixJQUFJRTtJQUVKQSxRQUFRTixhQUFhSTtJQUVyQkUsUUFBUUMsSUFBQUEsNkNBQXNCLEVBQUNELFFBQVMsR0FBRztJQUUzQyxJQUFJRCxXQUFXO1FBQ2JDLFFBQVFFLGFBQWFGO0lBQ3ZCO0lBRUEsSUFBTUcsZUFBZVAsZ0JBQWdCUSxlQUFZLEVBQUVKO0lBRW5ELE9BQU9HO0FBQ1Q7QUFFTyxTQUFTWCxvQ0FBb0NNLEdBQUcsRUFBRU8sYUFBYTtRQUFFTixZQUFBQSxpRUFBWTtJQUNsRixJQUFJQztJQUVKQSxRQUFRTixhQUFhSTtJQUVyQkUsUUFBUUMsSUFBQUEsNkNBQXNCLEVBQUNELFFBQVMsR0FBRztJQUUzQyxJQUFJRCxXQUFXO1FBQ2JDLFFBQVFFLGFBQWFGO0lBQ3ZCO0lBRUEsSUFBTUcsZUFBZU4sZ0NBQWdDTyxlQUFZLEVBQUVKLE9BQU9LO0lBRTFFLE9BQU9GO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JaLHFCQUFBQTtJQUNBRSx5QkFBQUE7SUFDQUQscUNBQUFBO0FBQ0Y7QUFFQSxTQUFTVSxhQUFhRixLQUFLO0lBQ3pCLElBQUlNLFdBQVdOLE9BQU8sR0FBRztJQUV6Qk0sV0FBV0MsSUFBQUEsc0JBQWUsRUFBQ0Q7SUFFM0JOLFFBQVFNLFVBQVUsR0FBRztJQUVyQixPQUFPTjtBQUNUIn0=