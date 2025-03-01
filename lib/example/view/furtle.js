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
var _furtle = require("../utilities/furtle");
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
var furtleLexerFromEntries = _index.lexersUtilities.furtleLexerFromEntries, furtleParserFromBNFAndStartRuleName = _index.parsersUtilities.furtleParserFromBNFAndStartRuleName;
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
                var lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, augmented = false, furtleLexer = furtleLexerFromEntries(entries, augmented), lexer = furtleLexer, content = this.getContent(), tokens = lexer.tokenise(content);
                return tokens;
            }
        },
        {
            key: "getParseTree",
            value: function getParseTree(tokens) {
                var parseTree = null;
                var bnf = this.getBNF(), ruleName = this.getRuleName(), startRuleName = ruleName, augmented = false, furtleParser = furtleParserFromBNFAndStartRuleName(bnf, startRuleName, augmented), parser = furtleParser, node = parser.parse(tokens);
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                return parseTree;
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _this_constructor = this.constructor, initialContent = _this_constructor.initialContent, initialRuleName = _this_constructor.initialRuleName, bnf = (0, _furtle.bnfFromNothing)(), entries = (0, _furtle.entriesFromNothing)(), content = initialContent, ruleName = initialRuleName, lexicalEntries = entries; ///
                this.setBNF(bnf);
                this.setContent(content);
                this.setRuleName(ruleName);
                this.setLexicalEntries(lexicalEntries);
                this.keyUpHandler();
            }
        }
    ]);
    return FurtleView;
}(_view.default);
_define_property(FurtleView, "readOnly", false);
_define_property(FurtleView, "initialContent", 'String boundVariableNameFromQualifiedStatementChildNodes(Nodes qualifiedStatementChildNodes) {\n  [ _, Node argumentNode ] = qualifiedStatementChildNodes;\n\n  Node boundVariableNameTerminalNode = nodeQuery(argumentNode, /argument/term/variable/@name);\n\n  String boundVariableName = \n\n    If (boundVariableNameTerminalNode != null)\n      (String (Node boundVariableNameTerminalNode) {\n        { String content As boundVariableName } = boundVariableNameTerminalNode;\n      \n        Return boundVariableName;\n      })(boundVariableNameTerminalNode)\n\n    Else\n      ""\n  ;\n    \n  Return boundVariableName;\n}\n');
_define_property(FurtleView, "defaultProperties", {
    className: "furtle"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5pbXBvcnQgeyBibmZGcm9tTm90aGluZywgZW50cmllc0Zyb21Ob3RoaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9mdXJ0bGVcIjtcblxuY29uc3QgeyBmdXJ0bGVMZXhlckZyb21FbnRyaWVzIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZ1cnRsZVBhcnNlckZyb21CTkZBbmRTdGFydFJ1bGVOYW1lIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdXJ0bGVWaWV3IGV4dGVuZHMgVmlldyB7XG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vLy9cbiAgICAgICAgICBhdWdtZW50ZWQgPSBmYWxzZSxcbiAgICAgICAgICBmdXJ0bGVMZXhlciA9IGZ1cnRsZUxleGVyRnJvbUVudHJpZXMoZW50cmllcywgYXVnbWVudGVkKSxcbiAgICAgICAgICBsZXhlciA9IGZ1cnRsZUxleGVyLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldFBhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBhdWdtZW50ZWQgPSBmYWxzZSxcbiAgICAgICAgICBmdXJ0bGVQYXJzZXIgPSBmdXJ0bGVQYXJzZXJGcm9tQk5GQW5kU3RhcnRSdWxlTmFtZShibmYsIHN0YXJ0UnVsZU5hbWUsIGF1Z21lbnRlZCksXG4gICAgICAgICAgcGFyc2VyID0gZnVydGxlUGFyc2VyLCAvLy9cbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQ29udGVudCwgaW5pdGlhbFJ1bGVOYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGJuZiA9IGJuZkZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBpbml0aWFsUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgcmVhZE9ubHkgPSBmYWxzZTtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgU3RyaW5nIGJvdW5kVmFyaWFibGVOYW1lRnJvbVF1YWxpZmllZFN0YXRlbWVudENoaWxkTm9kZXMoTm9kZXMgcXVhbGlmaWVkU3RhdGVtZW50Q2hpbGROb2Rlcykge1xuICBbIF8sIE5vZGUgYXJndW1lbnROb2RlIF0gPSBxdWFsaWZpZWRTdGF0ZW1lbnRDaGlsZE5vZGVzO1xuXG4gIE5vZGUgYm91bmRWYXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUgPSBub2RlUXVlcnkoYXJndW1lbnROb2RlLCAvYXJndW1lbnQvdGVybS92YXJpYWJsZS9AbmFtZSk7XG5cbiAgU3RyaW5nIGJvdW5kVmFyaWFibGVOYW1lID0gXG5cbiAgICBJZiAoYm91bmRWYXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUgIT0gbnVsbClcbiAgICAgIChTdHJpbmcgKE5vZGUgYm91bmRWYXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgeyBTdHJpbmcgY29udGVudCBBcyBib3VuZFZhcmlhYmxlTmFtZSB9ID0gYm91bmRWYXJpYWJsZU5hbWVUZXJtaW5hbE5vZGU7XG4gICAgICBcbiAgICAgICAgUmV0dXJuIGJvdW5kVmFyaWFibGVOYW1lO1xuICAgICAgfSkoYm91bmRWYXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUpXG5cbiAgICBFbHNlXG4gICAgICBcIlwiXG4gIDtcbiAgICBcbiAgUmV0dXJuIGJvdW5kVmFyaWFibGVOYW1lO1xufVxuYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZ1cnRsZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRnVydGxlVmlldyIsImZ1cnRsZUxleGVyRnJvbUVudHJpZXMiLCJsZXhlcnNVdGlsaXRpZXMiLCJmdXJ0bGVQYXJzZXJGcm9tQk5GQW5kU3RhcnRSdWxlTmFtZSIsInBhcnNlcnNVdGlsaXRpZXMiLCJnZXRUb2tlbnMiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiZW50cmllcyIsImF1Z21lbnRlZCIsImZ1cnRsZUxleGVyIiwibGV4ZXIiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwiZ2V0UGFyc2VUcmVlIiwicGFyc2VUcmVlIiwiYm5mIiwiZ2V0Qk5GIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInN0YXJ0UnVsZU5hbWUiLCJmdXJ0bGVQYXJzZXIiLCJwYXJzZXIiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxSdWxlTmFtZSIsImJuZkZyb21Ob3RoaW5nIiwiZW50cmllc0Zyb21Ob3RoaW5nIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldFJ1bGVOYW1lIiwic2V0TGV4aWNhbEVudHJpZXMiLCJrZXlVcEhhbmRsZXIiLCJWaWV3IiwicmVhZE9ubHkiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7cUJBVDZCOzJEQUVqQztzQkFFa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5ELElBQU0sQUFBRUMseUJBQTJCQyxzQkFBZSxDQUExQ0Qsd0JBQ0YsQUFBRUUsc0NBQXdDQyx1QkFBZ0IsQ0FBeEREO0FBRU8sSUFBQSxBQUFNSCwyQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxpQkFBaUIsSUFBSSxDQUFDQyxpQkFBaUIsSUFDdkNDLFVBQVVGLGdCQUNWRyxZQUFZLE9BQ1pDLGNBQWNULHVCQUF1Qk8sU0FBU0MsWUFDOUNFLFFBQVFELGFBQ1JFLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxTQUFTSCxNQUFNSSxRQUFRLENBQUNIO2dCQUU5QixPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFGLE1BQU07Z0JBQ2pCLElBQUlHLFlBQVk7Z0JBRWhCLElBQU1DLE1BQU0sSUFBSSxDQUFDQyxNQUFNLElBQ2pCQyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsZ0JBQWdCRixVQUNoQlgsWUFBWSxPQUNaYyxlQUFlcEIsb0NBQW9DZSxLQUFLSSxlQUFlYixZQUN2RWUsU0FBU0QsY0FDVEUsT0FBT0QsT0FBT0UsS0FBSyxDQUFDWjtnQkFFMUIsSUFBSVcsU0FBUyxNQUFNO29CQUNqQlIsWUFBWVEsS0FBS0UsV0FBVyxDQUFDYjtnQkFDL0I7Z0JBRUEsT0FBT0c7WUFDVDs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7Z0JBRWxCLElBQTRDLG9CQUFBLElBQUksQ0FBQ0MsV0FBVyxFQUFwREMsaUJBQW9DLGtCQUFwQ0EsZ0JBQWdCQyxrQkFBb0Isa0JBQXBCQSxpQkFDbEJkLE1BQU1lLElBQUFBLHNCQUFjLEtBQ3BCekIsVUFBVTBCLElBQUFBLDBCQUFrQixLQUM1QnRCLFVBQVVtQixnQkFDVlgsV0FBV1ksaUJBQ1gxQixpQkFBaUJFLFNBQVMsR0FBRztnQkFFbkMsSUFBSSxDQUFDMkIsTUFBTSxDQUFDakI7Z0JBRVosSUFBSSxDQUFDa0IsVUFBVSxDQUFDeEI7Z0JBRWhCLElBQUksQ0FBQ3lCLFdBQVcsQ0FBQ2pCO2dCQUVqQixJQUFJLENBQUNrQixpQkFBaUIsQ0FBQ2hDO2dCQUV2QixJQUFJLENBQUNpQyxZQUFZO1lBQ25COzs7V0FsRG1CdkM7RUFBbUJ3QyxhQUFJO0FBb0QxQyxpQkFwRG1CeEMsWUFvRFp5QyxZQUFXO0FBRWxCLGlCQXREbUJ6QyxZQXNEWitCLGtCQUFrQjtBQXNCekIsaUJBNUVtQi9CLFlBNEVaMEMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==