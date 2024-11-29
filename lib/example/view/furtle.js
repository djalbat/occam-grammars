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
var furtleParserFromBNF = _index.parsersUtilities.furtleParserFromBNF, furtleLexerFromEntries = _index.lexersUtilities.furtleLexerFromEntries;
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
                var lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, furtleLexer = furtleLexerFromEntries(entries), lexer = furtleLexer, content = this.getContent(), tokens = lexer.tokenise(content);
                return tokens;
            }
        },
        {
            key: "getParseTree",
            value: function getParseTree(tokens) {
                var parseTree = null;
                var bnf = this.getBNF(), furtleParser = furtleParserFromBNF(bnf), parser = furtleParser, node = parser.parse(tokens);
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
_define_property(FurtleView, "initialContent", 'Boolean isBound(Node termNode, Node statementNode) {\n  Boolean bound = false;\n    \n  String variableName = variableNameFromTermNode(termNode);\n  \n  If (variableName != null) {\n    Nodes statementNodes = nodesQuery(statementNode, //statement);\n\n    ForEach(statementNodes, (Node statementNode) {\n      String boundVariableName = boundVariableNameFromStatementNode(statementNode); \n      \n      If (boundVariableName == variableName) {\n        bound = true;\n      }\n    });\n  }\n  \n  Return bound;\n}\n  \nString variableNameFromTermNode(Node termNode) {\n  String variableName = null;\n  \n  Node variableNameTerminalNode = nodeQuery(termNode, /term/variable/@name);\n  \n  If (variableNameTerminalNode != null) {\n    { String content } = variableNameTerminalNode;\n    \n    variableName = content;\n  }\n  \n  Return variableName;\n}\n\nString boundVariableNameFromStatementNode(Node statementNode) {\n  String boundVariableName = null;\n  \n  { Nodes childNodes } = statementNode;\n  \n  [ Node firstChildNode ] = childNodes;\n  \n  { String content } = firstChildNode;\n  \n  If ((content == "∀") || (content == "∃")) {\n    [ _, Node argumentNode ] = childNodes;\n    \n    Node boundVariableNameTerminalNode = nodeQuery(argumentNode, /argument/term/variable/@name);\n    \n    If (boundVariableNameTerminalNode != null) {\n      { content } = boundVariableNameTerminalNode;\n      \n      boundVariableName = content;\n    }\n  }\n    \n  Return boundVariableName;\n}\n');
_define_property(FurtleView, "defaultProperties", {
    className: "furtle"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGdXJ0bGVMZXhlciwgRnVydGxlUGFyc2VyLCBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5jb25zdCB7IGZ1cnRsZVBhcnNlckZyb21CTkYgfSA9IHBhcnNlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZ1cnRsZUxleGVyRnJvbUVudHJpZXMgfSA9IGxleGVyc1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVydGxlVmlldyBleHRlbmRzIFZpZXcge1xuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy8vXG4gICAgICAgICAgZnVydGxlTGV4ZXIgPSBmdXJ0bGVMZXhlckZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGxleGVyID0gZnVydGxlTGV4ZXIsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKHRva2Vucykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBmdXJ0bGVQYXJzZXIgPSBmdXJ0bGVQYXJzZXJGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcGFyc2VyID0gZnVydGxlUGFyc2VyLCAvLy9cbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgTGV4ZXIgPSBGdXJ0bGVMZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gRnVydGxlUGFyc2VyO1xuXG4gIHN0YXRpYyByZWFkT25seSA9IGZhbHNlO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBCb29sZWFuIGlzQm91bmQoTm9kZSB0ZXJtTm9kZSwgTm9kZSBzdGF0ZW1lbnROb2RlKSB7XG4gIEJvb2xlYW4gYm91bmQgPSBmYWxzZTtcbiAgICBcbiAgU3RyaW5nIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSk7XG4gIFxuICBJZiAodmFyaWFibGVOYW1lICE9IG51bGwpIHtcbiAgICBOb2RlcyBzdGF0ZW1lbnROb2RlcyA9IG5vZGVzUXVlcnkoc3RhdGVtZW50Tm9kZSwgLy9zdGF0ZW1lbnQpO1xuXG4gICAgRm9yRWFjaChzdGF0ZW1lbnROb2RlcywgKE5vZGUgc3RhdGVtZW50Tm9kZSkge1xuICAgICAgU3RyaW5nIGJvdW5kVmFyaWFibGVOYW1lID0gYm91bmRWYXJpYWJsZU5hbWVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTsgXG4gICAgICBcbiAgICAgIElmIChib3VuZFZhcmlhYmxlTmFtZSA9PSB2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgYm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIFxuICBSZXR1cm4gYm91bmQ7XG59XG4gIFxuU3RyaW5nIHZhcmlhYmxlTmFtZUZyb21UZXJtTm9kZShOb2RlIHRlcm1Ob2RlKSB7XG4gIFN0cmluZyB2YXJpYWJsZU5hbWUgPSBudWxsO1xuICBcbiAgTm9kZSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUgPSBub2RlUXVlcnkodGVybU5vZGUsIC90ZXJtL3ZhcmlhYmxlL0BuYW1lKTtcbiAgXG4gIElmICh2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUgIT0gbnVsbCkge1xuICAgIHsgU3RyaW5nIGNvbnRlbnQgfSA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICB2YXJpYWJsZU5hbWUgPSBjb250ZW50O1xuICB9XG4gIFxuICBSZXR1cm4gdmFyaWFibGVOYW1lO1xufVxuXG5TdHJpbmcgYm91bmRWYXJpYWJsZU5hbWVGcm9tU3RhdGVtZW50Tm9kZShOb2RlIHN0YXRlbWVudE5vZGUpIHtcbiAgU3RyaW5nIGJvdW5kVmFyaWFibGVOYW1lID0gbnVsbDtcbiAgXG4gIHsgTm9kZXMgY2hpbGROb2RlcyB9ID0gc3RhdGVtZW50Tm9kZTtcbiAgXG4gIFsgTm9kZSBmaXJzdENoaWxkTm9kZSBdID0gY2hpbGROb2RlcztcbiAgXG4gIHsgU3RyaW5nIGNvbnRlbnQgfSA9IGZpcnN0Q2hpbGROb2RlO1xuICBcbiAgSWYgKChjb250ZW50ID09IFwi4oiAXCIpIHx8IChjb250ZW50ID09IFwi4oiDXCIpKSB7XG4gICAgWyBfLCBOb2RlIGFyZ3VtZW50Tm9kZSBdID0gY2hpbGROb2RlcztcbiAgICBcbiAgICBOb2RlIGJvdW5kVmFyaWFibGVOYW1lVGVybWluYWxOb2RlID0gbm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSwgL2FyZ3VtZW50L3Rlcm0vdmFyaWFibGUvQG5hbWUpO1xuICAgIFxuICAgIElmIChib3VuZFZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSAhPSBudWxsKSB7XG4gICAgICB7IGNvbnRlbnQgfSA9IGJvdW5kVmFyaWFibGVOYW1lVGVybWluYWxOb2RlO1xuICAgICAgXG4gICAgICBib3VuZFZhcmlhYmxlTmFtZSA9IGNvbnRlbnQ7XG4gICAgfVxuICB9XG4gICAgXG4gIFJldHVybiBib3VuZFZhcmlhYmxlTmFtZTtcbn1cbmA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmdXJ0bGVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkZ1cnRsZVZpZXciLCJmdXJ0bGVQYXJzZXJGcm9tQk5GIiwicGFyc2Vyc1V0aWxpdGllcyIsImZ1cnRsZUxleGVyRnJvbUVudHJpZXMiLCJsZXhlcnNVdGlsaXRpZXMiLCJnZXRUb2tlbnMiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiZW50cmllcyIsImZ1cnRsZUxleGVyIiwibGV4ZXIiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwiZ2V0UGFyc2VUcmVlIiwicGFyc2VUcmVlIiwiYm5mIiwiZ2V0Qk5GIiwiZnVydGxlUGFyc2VyIiwicGFyc2VyIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJWaWV3IiwiTGV4ZXIiLCJGdXJ0bGVMZXhlciIsIlBhcnNlciIsIkZ1cnRsZVBhcnNlciIsInJlYWRPbmx5IiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7cUJBUHdEOzJEQUU1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBTSxBQUFFQyxzQkFBd0JDLHVCQUFnQixDQUF4Q0QscUJBQ0YsQUFBRUUseUJBQTJCQyxzQkFBZSxDQUExQ0Q7QUFFTyxJQUFBLEFBQU1ILDJCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGlCQUFpQixJQUFJLENBQUNDLGlCQUFpQixJQUN2Q0MsVUFBVUYsZ0JBQ1ZHLGNBQWNOLHVCQUF1QkssVUFDckNFLFFBQVFELGFBQ1JFLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxTQUFTSCxNQUFNSSxRQUFRLENBQUNIO2dCQUU5QixPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFGLE1BQU07Z0JBQ2pCLElBQUlHLFlBQVk7Z0JBRWhCLElBQU1DLE1BQU0sSUFBSSxDQUFDQyxNQUFNLElBQ2pCQyxlQUFlbEIsb0JBQW9CZ0IsTUFDbkNHLFNBQVNELGNBQ1RFLE9BQU9ELE9BQU9FLEtBQUssQ0FBQ1Q7Z0JBRTFCLElBQUlRLFNBQVMsTUFBTTtvQkFDakJMLFlBQVlLLEtBQUtFLFdBQVcsQ0FBQ1Y7Z0JBQy9CO2dCQUVBLE9BQU9HO1lBQ1Q7OztXQXpCbUJoQjtFQUFtQndCLGFBQUk7QUEyQjFDLGlCQTNCbUJ4QixZQTJCWnlCLFNBQVFDLGtCQUFXO0FBRTFCLGlCQTdCbUIxQixZQTZCWjJCLFVBQVNDLG1CQUFZO0FBRTVCLGlCQS9CbUI1QixZQStCWjZCLFlBQVc7QUFFbEIsaUJBakNtQjdCLFlBaUNaOEIsa0JBQWtCO0FBMkR6QixpQkE1Rm1COUIsWUE0RlorQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9