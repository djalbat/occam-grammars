"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FurtleView;
    }
});
var _occamlexers = require("occam-lexers");
var _occamparsers = require("occam-parsers");
var _occamgrammarutilities = require("occam-grammar-utilities");
var _index = require("../../index");
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var rulesFromEntries = _occamlexers.lexerUtilities.rulesFromEntries, lexerFromRules = _occamlexers.lexerUtilities.lexerFromRules, rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF, parserFromRulesAndStartRuleName = _occamparsers.parserUtilities.parserFromRulesAndStartRuleName;
var FurtleView = /*#__PURE__*/ function(View) {
    _inherits(FurtleView, View);
    function FurtleView() {
        _class_call_check(this, FurtleView);
        return _call_super(this, FurtleView, arguments);
    }
    _create_class(FurtleView, [
        {
            key: "getTokens",
            value: function getTokens() {
                var lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, rules = rulesFromEntries(entries), furtleLexer = lexerFromRules(_index.FurtleLexer, rules), lexer = furtleLexer, content = this.getContent(), tokens = lexer.tokenise(content);
                return tokens;
            }
        },
        {
            key: "getParseTree",
            value: function getParseTree(tokens) {
                var parseTree = null;
                var bnf = this.getBNF();
                var rules;
                rules = rulesFromBNF(bnf);
                rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
                var ruleName = this.getRuleName(), startRuleName = ruleName, furtleParser = parserFromRulesAndStartRuleName(_index.FurtleParser, rules, startRuleName), parser = furtleParser, node = parser.parse(tokens);
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                return parseTree;
            }
        }
    ]);
    return FurtleView;
}(_view.default);
_define_property(FurtleView, "Lexer", _index.FurtleLexer);
_define_property(FurtleView, "Parser", _index.FurtleParser);
_define_property(FurtleView, "readOnly", false);
_define_property(FurtleView, "initialContent", 'Node* termNode, statementNode; Boolean* bound = false;\n  \nString variableName = variableNameFromTermNode(termNode);\n\nIf (variableName == null) {\n  Break;\n}\n\nNodes statementNodes = nodesQuery(statementNode, //statement);\n\nForEach(statementNodes, (Node statementNode) {\n  String boundVariableName = boundVariableNameFromStatementNode(statementNode); \n  \n  If (boundVariableName == variableName) {\n    bound = true;\n    \n    Break;\n  }\n});\n  \n  \nString variableNameFromTermNode(Node termNode) {\n  String variableName = null;\n  \n  Node variableNameTerminalNode = nodeQuery(termNode, /term/variable/@name);\n  \n  If (variableNameTerminalNode != null) {\n    String content;\n    \n    { content } = variableNameTerminalNode;\n    \n    variableName = content;\n  }\n  \n  Return variableName;\n}\n\nString boundVariableNameFromStatementNode(Node statementNode) {\n  String boundVariableName = null;\n  \n  Nodes childNodes;\n  \n  { childNodes } = statementNode;\n  \n  Node firstChildNode;\n\n  [ firstChildNode ] = childNodes;\n  \n  Boolean firstChildNodeTerminalNode = isTerminalNode(firstChildNode);\n  \n  If (firstChildNodeTerminalNode) {\n    Node terminalNode = firstChildNode;\n    \n    String content;\n    \n    { content } = firstChildNode;\n    \n    If ((content == "∀") || (content == "∃")) {\n      Node secondChildNode;\n      \n      [ _, secondChildNode ] = childNodes;\n      \n      Node argumentNode = secondChildNode;\n      \n      Node boundVariableNameTerminalNode = nodeQuery(argumentNode, /argument/term/variable/@name);\n      \n      If (boundVariableNameTerminalNode != null) {\n        { content } = boundVariableNameTerminalNode;\n        \n        boundVariableName = content;\n      }\n    }\n  }\n    \n  Return boundVariableName;\n}\n');
_define_property(FurtleView, "defaultProperties", {
    className: "furtle"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBGdXJ0bGVMZXhlciwgRnVydGxlUGFyc2VyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuY29uc3QgeyBydWxlc0Zyb21FbnRyaWVzLCBsZXhlckZyb21SdWxlcyB9ID0gbGV4ZXJVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdXJ0bGVWaWV3IGV4dGVuZHMgVmlldyB7XG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBmdXJ0bGVMZXhlciA9IGxleGVyRnJvbVJ1bGVzKEZ1cnRsZUxleGVyLCBydWxlcyksXG4gICAgICAgICAgbGV4ZXIgPSBmdXJ0bGVMZXhlciwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXRQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpO1xuXG4gICAgbGV0IHJ1bGVzO1xuXG4gICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICAgIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7ICAvLy9cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBydWxlTmFtZSwgLy8vXG4gICAgICAgICAgZnVydGxlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShGdXJ0bGVQYXJzZXIsIHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJzZXIgPSBmdXJ0bGVQYXJzZXIsIC8vL1xuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBMZXhlciA9IEZ1cnRsZUxleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBGdXJ0bGVQYXJzZXI7XG5cbiAgc3RhdGljIHJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYE5vZGUqIHRlcm1Ob2RlLCBzdGF0ZW1lbnROb2RlOyBCb29sZWFuKiBib3VuZCA9IGZhbHNlO1xuICBcblN0cmluZyB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVGVybU5vZGUodGVybU5vZGUpO1xuXG5JZiAodmFyaWFibGVOYW1lID09IG51bGwpIHtcbiAgQnJlYWs7XG59XG5cbk5vZGVzIHN0YXRlbWVudE5vZGVzID0gbm9kZXNRdWVyeShzdGF0ZW1lbnROb2RlLCAvL3N0YXRlbWVudCk7XG5cbkZvckVhY2goc3RhdGVtZW50Tm9kZXMsIChOb2RlIHN0YXRlbWVudE5vZGUpIHtcbiAgU3RyaW5nIGJvdW5kVmFyaWFibGVOYW1lID0gYm91bmRWYXJpYWJsZU5hbWVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTsgXG4gIFxuICBJZiAoYm91bmRWYXJpYWJsZU5hbWUgPT0gdmFyaWFibGVOYW1lKSB7XG4gICAgYm91bmQgPSB0cnVlO1xuICAgIFxuICAgIEJyZWFrO1xuICB9XG59KTtcbiAgXG4gIFxuU3RyaW5nIHZhcmlhYmxlTmFtZUZyb21UZXJtTm9kZShOb2RlIHRlcm1Ob2RlKSB7XG4gIFN0cmluZyB2YXJpYWJsZU5hbWUgPSBudWxsO1xuICBcbiAgTm9kZSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUgPSBub2RlUXVlcnkodGVybU5vZGUsIC90ZXJtL3ZhcmlhYmxlL0BuYW1lKTtcbiAgXG4gIElmICh2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUgIT0gbnVsbCkge1xuICAgIFN0cmluZyBjb250ZW50O1xuICAgIFxuICAgIHsgY29udGVudCB9ID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHZhcmlhYmxlTmFtZSA9IGNvbnRlbnQ7XG4gIH1cbiAgXG4gIFJldHVybiB2YXJpYWJsZU5hbWU7XG59XG5cblN0cmluZyBib3VuZFZhcmlhYmxlTmFtZUZyb21TdGF0ZW1lbnROb2RlKE5vZGUgc3RhdGVtZW50Tm9kZSkge1xuICBTdHJpbmcgYm91bmRWYXJpYWJsZU5hbWUgPSBudWxsO1xuICBcbiAgTm9kZXMgY2hpbGROb2RlcztcbiAgXG4gIHsgY2hpbGROb2RlcyB9ID0gc3RhdGVtZW50Tm9kZTtcbiAgXG4gIE5vZGUgZmlyc3RDaGlsZE5vZGU7XG5cbiAgWyBmaXJzdENoaWxkTm9kZSBdID0gY2hpbGROb2RlcztcbiAgXG4gIEJvb2xlYW4gZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBpc1Rlcm1pbmFsTm9kZShmaXJzdENoaWxkTm9kZSk7XG4gIFxuICBJZiAoZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBOb2RlIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlO1xuICAgIFxuICAgIFN0cmluZyBjb250ZW50O1xuICAgIFxuICAgIHsgY29udGVudCB9ID0gZmlyc3RDaGlsZE5vZGU7XG4gICAgXG4gICAgSWYgKChjb250ZW50ID09IFwi4oiAXCIpIHx8IChjb250ZW50ID09IFwi4oiDXCIpKSB7XG4gICAgICBOb2RlIHNlY29uZENoaWxkTm9kZTtcbiAgICAgIFxuICAgICAgWyBfLCBzZWNvbmRDaGlsZE5vZGUgXSA9IGNoaWxkTm9kZXM7XG4gICAgICBcbiAgICAgIE5vZGUgYXJndW1lbnROb2RlID0gc2Vjb25kQ2hpbGROb2RlO1xuICAgICAgXG4gICAgICBOb2RlIGJvdW5kVmFyaWFibGVOYW1lVGVybWluYWxOb2RlID0gbm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSwgL2FyZ3VtZW50L3Rlcm0vdmFyaWFibGUvQG5hbWUpO1xuICAgICAgXG4gICAgICBJZiAoYm91bmRWYXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUgIT0gbnVsbCkge1xuICAgICAgICB7IGNvbnRlbnQgfSA9IGJvdW5kVmFyaWFibGVOYW1lVGVybWluYWxOb2RlO1xuICAgICAgICBcbiAgICAgICAgYm91bmRWYXJpYWJsZU5hbWUgPSBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAgIFxuICBSZXR1cm4gYm91bmRWYXJpYWJsZU5hbWU7XG59XG5gO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZnVydGxlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGdXJ0bGVWaWV3IiwicnVsZXNGcm9tRW50cmllcyIsImxleGVyVXRpbGl0aWVzIiwibGV4ZXJGcm9tUnVsZXMiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiZ2V0VG9rZW5zIiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJydWxlcyIsImZ1cnRsZUxleGVyIiwiRnVydGxlTGV4ZXIiLCJsZXhlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJnZXRQYXJzZVRyZWUiLCJwYXJzZVRyZWUiLCJibmYiLCJnZXRCTkYiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInN0YXJ0UnVsZU5hbWUiLCJmdXJ0bGVQYXJzZXIiLCJGdXJ0bGVQYXJzZXIiLCJwYXJzZXIiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsIlZpZXciLCJMZXhlciIsIlBhcnNlciIsInJlYWRPbmx5IiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkJBVlU7NEJBQ0M7cUNBQ087cUJBQ0c7MkRBRXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQixJQUFRQyxtQkFBcUNDLDJCQUFjLENBQW5ERCxrQkFBa0JFLGlCQUFtQkQsMkJBQWMsQ0FBakNDLGdCQUNsQkMsZUFBa0RDLDZCQUFlLENBQWpFRCxjQUFjRSxrQ0FBb0NELDZCQUFlLENBQW5EQztBQUVQLElBQUEsQUFBTU4sMkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLElBQ3ZDQyxVQUFVRixnQkFDVkcsUUFBUVYsaUJBQWlCUyxVQUN6QkUsY0FBY1QsZUFBZVUsa0JBQVcsRUFBRUYsUUFDMUNHLFFBQVFGLGFBQ1JHLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxTQUFTSCxNQUFNSSxRQUFRLENBQUNIO2dCQUU5QixPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFGLE1BQU07Z0JBQ2pCLElBQUlHLFlBQVk7Z0JBRWhCLElBQU1DLE1BQU0sSUFBSSxDQUFDQyxNQUFNO2dCQUV2QixJQUFJWDtnQkFFSkEsUUFBUVAsYUFBYWlCO2dCQUVyQlYsUUFBUVksSUFBQUEsNkNBQXNCLEVBQUNaLFFBQVMsR0FBRztnQkFFM0MsSUFBTWEsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLGdCQUFnQkYsVUFDaEJHLGVBQWVyQixnQ0FBZ0NzQixtQkFBWSxFQUFFakIsT0FBT2UsZ0JBQ3BFRyxTQUFTRixjQUNURyxPQUFPRCxPQUFPRSxLQUFLLENBQUNkO2dCQUUxQixJQUFJYSxTQUFTLE1BQU07b0JBQ2pCVixZQUFZVSxLQUFLRSxXQUFXLENBQUNmO2dCQUMvQjtnQkFFQSxPQUFPRztZQUNUOzs7V0FuQ21CcEI7RUFBbUJpQyxhQUFJO0FBcUMxQyxpQkFyQ21CakMsWUFxQ1prQyxTQUFRckIsa0JBQVc7QUFFMUIsaUJBdkNtQmIsWUF1Q1ptQyxVQUFTUCxtQkFBWTtBQUU1QixpQkF6Q21CNUIsWUF5Q1pvQyxZQUFXO0FBRWxCLGlCQTNDbUJwQyxZQTJDWnFDLGtCQUFrQjtBQThFekIsaUJBekhtQnJDLFlBeUhac0MscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==