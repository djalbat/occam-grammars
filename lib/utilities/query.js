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
    augmentBNFRules: function() {
        return augmentBNFRules;
    },
    augmentLexicalRules: function() {
        return augmentLexicalRules;
    }
});
var _occamparsers = require("occam-parsers");
var _necessary = require("necessary");
var _occamquery = require("occam-query");
var _constants = require("../constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var first = _necessary.arrayUtilities.first, extract = _necessary.arrayUtilities.extract;
var expressionBNFRules = expressionBNFRulesFromNothing(), expressionLexicalRules = expressionLexicalRulesFromNothing();
function augmentLexicalRules(lexicalRules) {
    lexicalRules = _to_consumable_array(lexicalRules);
    var unassignedLexicalRule = lexicalRules.pop(); ///
    lexicalRules = _to_consumable_array(lexicalRules).concat(_to_consumable_array(expressionLexicalRules));
    return lexicalRules;
}
function augmentBNFRules(bnrRules) {
    bnrRules = _to_consumable_array(bnrRules).concat(_to_consumable_array(expressionBNFRules));
    return bnrRules;
}
function expressionLexicalRulesFromNothing() {
    var expressionLexer = _occamquery.ExpressionLexer.fromNothing(), rules = expressionLexer.getRules(), expressionLexicalRules = _to_consumable_array(rules);
    return expressionLexicalRules;
}
function expressionBNFRulesFromNothing() {
    var expressionParser = _occamquery.ExpressionParser.fromNothing(), ruleMap = expressionParser.getRuleMap(), rules = Object.values(ruleMap);
    extract(rules, function(rule) {
        var ruleName = rule.getName();
        if (ruleName === _constants.ERROR_RULE_NAME) {
            return true;
        }
    });
    var expressionRule = extract(rules, function(rule) {
        var ruleName = rule.getName();
        if (ruleName === _constants.EXPRESSION_RULE_NAME) {
            return true;
        }
    });
    var rule = expressionRule, definitions = rule.getDefinitions();
    var name = rule.getName(), opacity = rule.getOpacity(), NonTerminalNode = rule.getNonTerminalNode(), firstDefinition = first(definitions), definition = firstDefinition; ///
    definitions = [
        definition
    ];
    rule = _occamparsers.Rule.fromNameOpacityDefinitionsAndNonTerminalNode(name, opacity, definitions, NonTerminalNode);
    rules.unshift(rule);
    var expressionBNFRules = rules; ///
    return expressionBNFRules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBFeHByZXNzaW9uTGV4ZXIsIEV4cHJlc3Npb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IHsgRVJST1JfUlVMRV9OQU1FLCBFWFBSRVNTSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCwgZXh0cmFjdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGV4cHJlc3Npb25CTkZSdWxlcyA9IGV4cHJlc3Npb25CTkZSdWxlc0Zyb21Ob3RoaW5nKCksXG4gICAgICBleHByZXNzaW9uTGV4aWNhbFJ1bGVzID0gZXhwcmVzc2lvbkxleGljYWxSdWxlc0Zyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50TGV4aWNhbFJ1bGVzKGxleGljYWxSdWxlcykge1xuICBsZXhpY2FsUnVsZXMgPSBbICAvLy9cbiAgICAuLi5sZXhpY2FsUnVsZXNcbiAgXTtcblxuICBjb25zdCB1bmFzc2lnbmVkTGV4aWNhbFJ1bGUgPSBsZXhpY2FsUnVsZXMucG9wKCk7IC8vL1xuXG4gIGxleGljYWxSdWxlcyA9IFsgIC8vL1xuICAgIC4uLmxleGljYWxSdWxlcyxcbiAgICAuLi5leHByZXNzaW9uTGV4aWNhbFJ1bGVzXG4gIF07XG5cbiAgcmV0dXJuIGxleGljYWxSdWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnRCTkZSdWxlcyhibnJSdWxlcykge1xuICBibnJSdWxlcyA9IFsgLy8vXG4gICAgLi4uYm5yUnVsZXMsXG4gICAgLi4uZXhwcmVzc2lvbkJORlJ1bGVzXG4gIF07XG5cbiAgcmV0dXJuIGJuclJ1bGVzO1xufVxuXG5mdW5jdGlvbiBleHByZXNzaW9uTGV4aWNhbFJ1bGVzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IGV4cHJlc3Npb25MZXhlciA9IEV4cHJlc3Npb25MZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgICBydWxlcyA9IGV4cHJlc3Npb25MZXhlci5nZXRSdWxlcygpLFxuICAgICAgICBleHByZXNzaW9uTGV4aWNhbFJ1bGVzID0gWyAgLy8vXG4gICAgICAgICAgLi4ucnVsZXNcbiAgICAgICAgXTtcblxuICByZXR1cm4gZXhwcmVzc2lvbkxleGljYWxSdWxlcztcbn1cblxuZnVuY3Rpb24gZXhwcmVzc2lvbkJORlJ1bGVzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IGV4cHJlc3Npb25QYXJzZXIgPSBFeHByZXNzaW9uUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJ1bGVNYXAgPSBleHByZXNzaW9uUGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgcnVsZXMgPSBPYmplY3QudmFsdWVzKHJ1bGVNYXApO1xuXG4gIGV4dHJhY3QocnVsZXMsIChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgIGlmIChydWxlTmFtZSA9PT0gRVJST1JfUlVMRV9OQU1FKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGV4cHJlc3Npb25SdWxlID0gZXh0cmFjdChydWxlcywgKHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBFWFBSRVNTSU9OX1JVTEVfTkFNRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBsZXQgcnVsZSA9IGV4cHJlc3Npb25SdWxlLCAgLy8vXG4gICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgIG9wYWNpdHkgPSBydWxlLmdldE9wYWNpdHkoKSxcbiAgICAgICAgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgZmlyc3REZWZpbml0aW9uID0gZmlyc3QoZGVmaW5pdGlvbnMpLFxuICAgICAgICBkZWZpbml0aW9uID0gZmlyc3REZWZpbml0aW9uOyAvLy9cblxuICBkZWZpbml0aW9ucyA9IFtcbiAgICBkZWZpbml0aW9uXG4gIF07XG5cbiAgcnVsZSA9IFJ1bGUuZnJvbU5hbWVPcGFjaXR5RGVmaW5pdGlvbnNBbmROb25UZXJtaW5hbE5vZGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgcnVsZXMudW5zaGlmdChydWxlKTtcblxuICBjb25zdCBleHByZXNzaW9uQk5GUnVsZXMgPSBydWxlczsgIC8vL1xuXG4gIHJldHVybiBleHByZXNzaW9uQk5GUnVsZXM7XG59XG4iXSwibmFtZXMiOlsiYXVnbWVudEJORlJ1bGVzIiwiYXVnbWVudExleGljYWxSdWxlcyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJleHRyYWN0IiwiZXhwcmVzc2lvbkJORlJ1bGVzIiwiZXhwcmVzc2lvbkJORlJ1bGVzRnJvbU5vdGhpbmciLCJleHByZXNzaW9uTGV4aWNhbFJ1bGVzIiwiZXhwcmVzc2lvbkxleGljYWxSdWxlc0Zyb21Ob3RoaW5nIiwibGV4aWNhbFJ1bGVzIiwidW5hc3NpZ25lZExleGljYWxSdWxlIiwicG9wIiwiYm5yUnVsZXMiLCJleHByZXNzaW9uTGV4ZXIiLCJFeHByZXNzaW9uTGV4ZXIiLCJmcm9tTm90aGluZyIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJleHByZXNzaW9uUGFyc2VyIiwiRXhwcmVzc2lvblBhcnNlciIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwiT2JqZWN0IiwidmFsdWVzIiwicnVsZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsIkVSUk9SX1JVTEVfTkFNRSIsImV4cHJlc3Npb25SdWxlIiwiRVhQUkVTU0lPTl9SVUxFX05BTUUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwibmFtZSIsIm9wYWNpdHkiLCJnZXRPcGFjaXR5IiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwiZmlyc3REZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsIlJ1bGUiLCJmcm9tTmFtZU9wYWNpdHlEZWZpbml0aW9uc0FuZE5vblRlcm1pbmFsTm9kZSIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTRCZ0JBLGVBQWU7ZUFBZkE7O0lBZkFDLG1CQUFtQjtlQUFuQkE7Ozs0QkFYSzt5QkFDVTswQkFDbUI7eUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRELElBQVFDLFFBQW1CQyx5QkFBYyxDQUFqQ0QsT0FBT0UsVUFBWUQseUJBQWMsQ0FBMUJDO0FBRWYsSUFBTUMscUJBQXFCQyxpQ0FDckJDLHlCQUF5QkM7QUFFeEIsU0FBU1Asb0JBQW9CUSxZQUFZO0lBQzlDQSxlQUNFLHFCQUFHQTtJQUdMLElBQU1DLHdCQUF3QkQsYUFBYUUsR0FBRyxJQUFJLEdBQUc7SUFFckRGLGVBQWUsQUFDYixxQkFBR0EscUJBQ0gscUJBQUdGO0lBR0wsT0FBT0U7QUFDVDtBQUVPLFNBQVNULGdCQUFnQlksUUFBUTtJQUN0Q0EsV0FBVyxBQUNULHFCQUFHQSxpQkFDSCxxQkFBR1A7SUFHTCxPQUFPTztBQUNUO0FBRUEsU0FBU0o7SUFDUCxJQUFNSyxrQkFBa0JDLDJCQUFlLENBQUNDLFdBQVcsSUFDN0NDLFFBQVFILGdCQUFnQkksUUFBUSxJQUNoQ1YseUJBQ0UscUJBQUdTO0lBR1gsT0FBT1Q7QUFDVDtBQUVBLFNBQVNEO0lBQ1AsSUFBTVksbUJBQW1CQyw0QkFBZ0IsQ0FBQ0osV0FBVyxJQUMvQ0ssVUFBVUYsaUJBQWlCRyxVQUFVLElBQ3JDTCxRQUFRTSxPQUFPQyxNQUFNLENBQUNIO0lBRTVCaEIsUUFBUVksT0FBTyxTQUFDUTtRQUNkLElBQU1DLFdBQVdELEtBQUtFLE9BQU87UUFFN0IsSUFBSUQsYUFBYUUsMEJBQWUsRUFBRTtZQUNoQyxPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQU1DLGlCQUFpQnhCLFFBQVFZLE9BQU8sU0FBQ1E7UUFDckMsSUFBTUMsV0FBV0QsS0FBS0UsT0FBTztRQUU3QixJQUFJRCxhQUFhSSwrQkFBb0IsRUFBRTtZQUNyQyxPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlMLE9BQU9JLGdCQUNQRSxjQUFjTixLQUFLTyxjQUFjO0lBRXJDLElBQU1DLE9BQU9SLEtBQUtFLE9BQU8sSUFDbkJPLFVBQVVULEtBQUtVLFVBQVUsSUFDekJDLGtCQUFrQlgsS0FBS1ksa0JBQWtCLElBQ3pDQyxrQkFBa0JuQyxNQUFNNEIsY0FDeEJRLGFBQWFELGlCQUFpQixHQUFHO0lBRXZDUCxjQUFjO1FBQ1pRO0tBQ0Q7SUFFRGQsT0FBT2Usa0JBQUksQ0FBQ0MsNENBQTRDLENBQUNSLE1BQU1DLFNBQVNILGFBQWFLO0lBRXJGbkIsTUFBTXlCLE9BQU8sQ0FBQ2pCO0lBRWQsSUFBTW5CLHFCQUFxQlcsT0FBUSxHQUFHO0lBRXRDLE9BQU9YO0FBQ1QifQ==