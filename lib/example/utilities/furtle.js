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
    get bnfFromNothing () {
        return bnfFromNothing;
    },
    get entriesFromNothing () {
        return entriesFromNothing;
    }
});
var _index = require("../../index");
var _occamlexers = require("occam-lexers");
var _occamparsers = require("occam-parsers");
var rulesAsEntries = _occamlexers.rulesUtilities.rulesAsEntries, rulesAsString = _occamparsers.rulesUtilities.rulesAsString, rulesFromStartRuleAndRuleMap = _occamparsers.rulesUtilities.rulesFromStartRuleAndRuleMap;
var furtleLexerFromNothing = _index.lexersUtilities.furtleLexerFromNothing, furtleParserFromNothing = _index.parsersUtilities.furtleParserFromNothing;
function bnfFromNothing() {
    var furtleParser = furtleParserFromNothing(), startRule = furtleParser.getStartRule(), ruleMap = furtleParser.getRuleMap(), rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap), multiline = true, string = rulesAsString(rules, multiline), bnf = string; ///
    return bnf;
}
function entriesFromNothing() {
    var furtleLexer = furtleLexerFromNothing(), rules = furtleLexer.getRules(), entries = rulesAsEntries(rules);
    return entries;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3V0aWxpdGllcy9mdXJ0bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCIuLi8uLi9pbmRleFwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMgYXMgbGV4ZXJzUnVsZXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBydWxlc1V0aWxpdGllcyBhcyBwYXJzZXJzUnVsZXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCB7IHJ1bGVzQXNFbnRyaWVzIH0gPSBsZXhlcnNSdWxlc1V0aWxpdGllcyxcbiAgICAgIHsgcnVsZXNBc1N0cmluZywgcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCB9ID0gcGFyc2Vyc1J1bGVzVXRpbGl0aWVzO1xuXG5jb25zdCB7IGZ1cnRsZUxleGVyRnJvbU5vdGhpbmcgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgZnVydGxlUGFyc2VyRnJvbU5vdGhpbmcgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBibmZGcm9tTm90aGluZygpIHtcbiAgY29uc3QgZnVydGxlUGFyc2VyID0gZnVydGxlUGFyc2VyRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgc3RhcnRSdWxlID0gZnVydGxlUGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICBydWxlTWFwID0gZnVydGxlUGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCksXG4gICAgICAgIG11bHRpbGluZSA9IHRydWUsXG4gICAgICAgIHN0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpbGluZSksXG4gICAgICAgIGJuZiA9IHN0cmluZzsgLy8vXG5cbiAgcmV0dXJuIGJuZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudHJpZXNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgZnVydGxlTGV4ZXIgPSBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJ1bGVzID0gZnVydGxlTGV4ZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgZW50cmllcyA9IHJ1bGVzQXNFbnRyaWVzKHJ1bGVzKTtcblxuICByZXR1cm4gZW50cmllcztcbn1cbiJdLCJuYW1lcyI6WyJibmZGcm9tTm90aGluZyIsImVudHJpZXNGcm9tTm90aGluZyIsInJ1bGVzQXNFbnRyaWVzIiwibGV4ZXJzUnVsZXNVdGlsaXRpZXMiLCJydWxlc0FzU3RyaW5nIiwicGFyc2Vyc1J1bGVzVXRpbGl0aWVzIiwicnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCIsImZ1cnRsZUxleGVyRnJvbU5vdGhpbmciLCJsZXhlcnNVdGlsaXRpZXMiLCJmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyIsInBhcnNlcnNVdGlsaXRpZXMiLCJmdXJ0bGVQYXJzZXIiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGVzIiwibXVsdGlsaW5lIiwic3RyaW5nIiwiYm5mIiwiZnVydGxlTGV4ZXIiLCJnZXRSdWxlcyIsImVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVlnQkE7ZUFBQUE7O1FBWUFDO2VBQUFBOzs7cUJBdEJrQzsyQkFDSzs0QkFDQztBQUV4RCxJQUFNLEFBQUVDLGlCQUFtQkMsMkJBQW9CLENBQXZDRCxnQkFDQUUsZ0JBQWdEQyw0QkFBcUIsQ0FBckVELGVBQWVFLCtCQUFpQ0QsNEJBQXFCLENBQXREQztBQUV2QixJQUFNLEFBQUVDLHlCQUEyQkMsc0JBQWUsQ0FBMUNELHdCQUNGLEFBQUVFLDBCQUE0QkMsdUJBQWdCLENBQTVDRDtBQUVELFNBQVNUO0lBQ2QsSUFBTVcsZUFBZUYsMkJBQ2ZHLFlBQVlELGFBQWFFLFlBQVksSUFDckNDLFVBQVVILGFBQWFJLFVBQVUsSUFDakNDLFFBQVFWLDZCQUE2Qk0sV0FBV0UsVUFDaERHLFlBQVksTUFDWkMsU0FBU2QsY0FBY1ksT0FBT0MsWUFDOUJFLE1BQU1ELFFBQVEsR0FBRztJQUV2QixPQUFPQztBQUNUO0FBRU8sU0FBU2xCO0lBQ2QsSUFBTW1CLGNBQWNiLDBCQUNkUyxRQUFRSSxZQUFZQyxRQUFRLElBQzVCQyxVQUFVcEIsZUFBZWM7SUFFL0IsT0FBT007QUFDVCJ9