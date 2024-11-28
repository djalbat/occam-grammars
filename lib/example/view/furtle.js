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
_define_property(FurtleView, "initialContent", 'Node* termNode, statementNode; Boolean* bound = false;\n  \nString variableName = variableNameFromTermNode(termNode);\n\nIf (variableName == null) {\n  Break;\n}\n\nNodes statementNodes = nodesQuery(statementNode, //statement);\n\nForEach(statementNodes, (Node statementNode) {\n  String boundVariableName = boundVariableNameFromStatementNode(statementNode); \n  \n  If (boundVariableName == variableName) {\n    bound = true;\n    \n    Break;\n  }\n});\n  \n  \nString variableNameFromTermNode(Node termNode) {\n  String variableName = null;\n  \n  Node variableNameTerminalNode = nodeQuery(termNode, /term/variable/@name);\n  \n  If (variableNameTerminalNode != null) {\n    String content;\n    \n    { content } = variableNameTerminalNode;\n    \n    variableName = content;\n  }\n  \n  Return variableName;\n}\n\nString boundVariableNameFromStatementNode(Node statementNode) {\n  String boundVariableName = null;\n  \n  Nodes childNodes;\n  \n  { childNodes } = statementNode;\n  \n  Node firstChildNode;\n\n  [ firstChildNode ] = childNodes;\n  \n  Boolean firstChildNodeTerminalNode = isTerminalNode(firstChildNode);\n  \n  If (firstChildNodeTerminalNode) {\n    Node terminalNode = firstChildNode;\n    \n    String content;\n    \n    { content } = firstChildNode;\n    \n    If ((content == "∀") || (content == "∃")) {\n      Node secondChildNode;\n      \n      [ _, secondChildNode ] = childNodes;\n      \n      Node argumentNode = secondChildNode;\n      \n      Node boundVariableNameTerminalNode = nodeQuery(argumentNode, /argument/term/variable/@name);\n      \n      If (boundVariableNameTerminalNode != null) {\n        { content } = boundVariableNameTerminalNode;\n        \n        boundVariableName = content;\n      }\n    }\n  }\n    \n  Return boundVariableName;\n}\n');
_define_property(FurtleView, "defaultProperties", {
    className: "furtle"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGdXJ0bGVMZXhlciwgRnVydGxlUGFyc2VyLCBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5jb25zdCB7IGZ1cnRsZVBhcnNlckZyb21CTkYgfSA9IHBhcnNlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZ1cnRsZUxleGVyRnJvbUVudHJpZXMgfSA9IGxleGVyc1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVydGxlVmlldyBleHRlbmRzIFZpZXcge1xuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy8vXG4gICAgICAgICAgZnVydGxlTGV4ZXIgPSBmdXJ0bGVMZXhlckZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGxleGVyID0gZnVydGxlTGV4ZXIsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKHRva2Vucykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBmdXJ0bGVQYXJzZXIgPSBmdXJ0bGVQYXJzZXJGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcGFyc2VyID0gZnVydGxlUGFyc2VyLCAvLy9cbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgTGV4ZXIgPSBGdXJ0bGVMZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gRnVydGxlUGFyc2VyO1xuXG4gIHN0YXRpYyByZWFkT25seSA9IGZhbHNlO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBOb2RlKiB0ZXJtTm9kZSwgc3RhdGVtZW50Tm9kZTsgQm9vbGVhbiogYm91bmQgPSBmYWxzZTtcbiAgXG5TdHJpbmcgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuSWYgKHZhcmlhYmxlTmFtZSA9PSBudWxsKSB7XG4gIEJyZWFrO1xufVxuXG5Ob2RlcyBzdGF0ZW1lbnROb2RlcyA9IG5vZGVzUXVlcnkoc3RhdGVtZW50Tm9kZSwgLy9zdGF0ZW1lbnQpO1xuXG5Gb3JFYWNoKHN0YXRlbWVudE5vZGVzLCAoTm9kZSBzdGF0ZW1lbnROb2RlKSB7XG4gIFN0cmluZyBib3VuZFZhcmlhYmxlTmFtZSA9IGJvdW5kVmFyaWFibGVOYW1lRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IFxuICBcbiAgSWYgKGJvdW5kVmFyaWFibGVOYW1lID09IHZhcmlhYmxlTmFtZSkge1xuICAgIGJvdW5kID0gdHJ1ZTtcbiAgICBcbiAgICBCcmVhaztcbiAgfVxufSk7XG4gIFxuICBcblN0cmluZyB2YXJpYWJsZU5hbWVGcm9tVGVybU5vZGUoTm9kZSB0ZXJtTm9kZSkge1xuICBTdHJpbmcgdmFyaWFibGVOYW1lID0gbnVsbDtcbiAgXG4gIE5vZGUgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlID0gbm9kZVF1ZXJ5KHRlcm1Ob2RlLCAvdGVybS92YXJpYWJsZS9AbmFtZSk7XG4gIFxuICBJZiAodmFyaWFibGVOYW1lVGVybWluYWxOb2RlICE9IG51bGwpIHtcbiAgICBTdHJpbmcgY29udGVudDtcbiAgICBcbiAgICB7IGNvbnRlbnQgfSA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICB2YXJpYWJsZU5hbWUgPSBjb250ZW50O1xuICB9XG4gIFxuICBSZXR1cm4gdmFyaWFibGVOYW1lO1xufVxuXG5TdHJpbmcgYm91bmRWYXJpYWJsZU5hbWVGcm9tU3RhdGVtZW50Tm9kZShOb2RlIHN0YXRlbWVudE5vZGUpIHtcbiAgU3RyaW5nIGJvdW5kVmFyaWFibGVOYW1lID0gbnVsbDtcbiAgXG4gIE5vZGVzIGNoaWxkTm9kZXM7XG4gIFxuICB7IGNoaWxkTm9kZXMgfSA9IHN0YXRlbWVudE5vZGU7XG4gIFxuICBOb2RlIGZpcnN0Q2hpbGROb2RlO1xuXG4gIFsgZmlyc3RDaGlsZE5vZGUgXSA9IGNoaWxkTm9kZXM7XG4gIFxuICBCb29sZWFuIGZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlID0gaXNUZXJtaW5hbE5vZGUoZmlyc3RDaGlsZE5vZGUpO1xuICBcbiAgSWYgKGZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgTm9kZSB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZTtcbiAgICBcbiAgICBTdHJpbmcgY29udGVudDtcbiAgICBcbiAgICB7IGNvbnRlbnQgfSA9IGZpcnN0Q2hpbGROb2RlO1xuICAgIFxuICAgIElmICgoY29udGVudCA9PSBcIuKIgFwiKSB8fCAoY29udGVudCA9PSBcIuKIg1wiKSkge1xuICAgICAgTm9kZSBzZWNvbmRDaGlsZE5vZGU7XG4gICAgICBcbiAgICAgIFsgXywgc2Vjb25kQ2hpbGROb2RlIF0gPSBjaGlsZE5vZGVzO1xuICAgICAgXG4gICAgICBOb2RlIGFyZ3VtZW50Tm9kZSA9IHNlY29uZENoaWxkTm9kZTtcbiAgICAgIFxuICAgICAgTm9kZSBib3VuZFZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSA9IG5vZGVRdWVyeShhcmd1bWVudE5vZGUsIC9hcmd1bWVudC90ZXJtL3ZhcmlhYmxlL0BuYW1lKTtcbiAgICAgIFxuICAgICAgSWYgKGJvdW5kVmFyaWFibGVOYW1lVGVybWluYWxOb2RlICE9IG51bGwpIHtcbiAgICAgICAgeyBjb250ZW50IH0gPSBib3VuZFZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZTtcbiAgICAgICAgXG4gICAgICAgIGJvdW5kVmFyaWFibGVOYW1lID0gY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgICBcbiAgUmV0dXJuIGJvdW5kVmFyaWFibGVOYW1lO1xufVxuYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZ1cnRsZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRnVydGxlVmlldyIsImZ1cnRsZVBhcnNlckZyb21CTkYiLCJwYXJzZXJzVXRpbGl0aWVzIiwiZnVydGxlTGV4ZXJGcm9tRW50cmllcyIsImxleGVyc1V0aWxpdGllcyIsImdldFRva2VucyIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwiZnVydGxlTGV4ZXIiLCJsZXhlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJnZXRQYXJzZVRyZWUiLCJwYXJzZVRyZWUiLCJibmYiLCJnZXRCTkYiLCJmdXJ0bGVQYXJzZXIiLCJwYXJzZXIiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsIlZpZXciLCJMZXhlciIsIkZ1cnRsZUxleGVyIiwiUGFyc2VyIiwiRnVydGxlUGFyc2VyIiwicmVhZE9ubHkiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztxQkFQd0Q7MkRBRTVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQixJQUFNLEFBQUVDLHNCQUF3QkMsdUJBQWdCLENBQXhDRCxxQkFDRixBQUFFRSx5QkFBMkJDLHNCQUFlLENBQTFDRDtBQUVPLElBQUEsQUFBTUgsMkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLElBQ3ZDQyxVQUFVRixnQkFDVkcsY0FBY04sdUJBQXVCSyxVQUNyQ0UsUUFBUUQsYUFDUkUsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLFNBQVNILE1BQU1JLFFBQVEsQ0FBQ0g7Z0JBRTlCLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUYsTUFBTTtnQkFDakIsSUFBSUcsWUFBWTtnQkFFaEIsSUFBTUMsTUFBTSxJQUFJLENBQUNDLE1BQU0sSUFDakJDLGVBQWVsQixvQkFBb0JnQixNQUNuQ0csU0FBU0QsY0FDVEUsT0FBT0QsT0FBT0UsS0FBSyxDQUFDVDtnQkFFMUIsSUFBSVEsU0FBUyxNQUFNO29CQUNqQkwsWUFBWUssS0FBS0UsV0FBVyxDQUFDVjtnQkFDL0I7Z0JBRUEsT0FBT0c7WUFDVDs7O1dBekJtQmhCO0VBQW1Cd0IsYUFBSTtBQTJCMUMsaUJBM0JtQnhCLFlBMkJaeUIsU0FBUUMsa0JBQVc7QUFFMUIsaUJBN0JtQjFCLFlBNkJaMkIsVUFBU0MsbUJBQVk7QUFFNUIsaUJBL0JtQjVCLFlBK0JaNkIsWUFBVztBQUVsQixpQkFqQ21CN0IsWUFpQ1o4QixrQkFBa0I7QUE4RXpCLGlCQS9HbUI5QixZQStHWitCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=