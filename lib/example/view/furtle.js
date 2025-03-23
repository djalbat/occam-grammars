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
                var lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, furtleLexer = furtleLexerFromEntries(entries), lexer = furtleLexer, content = this.getContent(), tokens = lexer.tokenise(content);
                return tokens;
            }
        },
        {
            key: "getParseTree",
            value: function getParseTree(tokens) {
                var parseTree = null;
                var bnf = this.getBNF(), ruleName = this.getRuleName(), startRuleName = ruleName, furtleParser = furtleParserFromBNFAndStartRuleName(bnf, startRuleName), parser = furtleParser, node = parser.parse(tokens);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5pbXBvcnQgeyBibmZGcm9tTm90aGluZywgZW50cmllc0Zyb21Ob3RoaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9mdXJ0bGVcIjtcblxuY29uc3QgeyBmdXJ0bGVMZXhlckZyb21FbnRyaWVzIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZ1cnRsZVBhcnNlckZyb21CTkZBbmRTdGFydFJ1bGVOYW1lIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdXJ0bGVWaWV3IGV4dGVuZHMgVmlldyB7XG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vLy9cbiAgICAgICAgICBmdXJ0bGVMZXhlciA9IGZ1cnRsZUxleGVyRnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgbGV4ZXIgPSBmdXJ0bGVMZXhlciwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXRQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBydWxlTmFtZSwgLy8vXG4gICAgICAgICAgZnVydGxlUGFyc2VyID0gZnVydGxlUGFyc2VyRnJvbUJORkFuZFN0YXJ0UnVsZU5hbWUoYm5mLCBzdGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJzZXIgPSBmdXJ0bGVQYXJzZXIsIC8vL1xuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxDb250ZW50LCBpbml0aWFsUnVsZU5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgYm5mID0gYm5mRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0Zyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IGluaXRpYWxSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyByZWFkT25seSA9IGZhbHNlO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBTdHJpbmcgYm91bmRWYXJpYWJsZU5hbWVGcm9tUXVhbGlmaWVkU3RhdGVtZW50Q2hpbGROb2RlcyhOb2RlcyBxdWFsaWZpZWRTdGF0ZW1lbnRDaGlsZE5vZGVzKSB7XG4gIFsgXywgTm9kZSBhcmd1bWVudE5vZGUgXSA9IHF1YWxpZmllZFN0YXRlbWVudENoaWxkTm9kZXM7XG5cbiAgTm9kZSBib3VuZFZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSA9IG5vZGVRdWVyeShhcmd1bWVudE5vZGUsIC9hcmd1bWVudC90ZXJtL3ZhcmlhYmxlL0BuYW1lKTtcblxuICBTdHJpbmcgYm91bmRWYXJpYWJsZU5hbWUgPSBcblxuICAgIElmIChib3VuZFZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSAhPSBudWxsKVxuICAgICAgKFN0cmluZyAoTm9kZSBib3VuZFZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICB7IFN0cmluZyBjb250ZW50IEFzIGJvdW5kVmFyaWFibGVOYW1lIH0gPSBib3VuZFZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZTtcbiAgICAgIFxuICAgICAgICBSZXR1cm4gYm91bmRWYXJpYWJsZU5hbWU7XG4gICAgICB9KShib3VuZFZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSlcblxuICAgIEVsc2VcbiAgICAgIFwiXCJcbiAgO1xuICAgIFxuICBSZXR1cm4gYm91bmRWYXJpYWJsZU5hbWU7XG59XG5gO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZnVydGxlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGdXJ0bGVWaWV3IiwiZnVydGxlTGV4ZXJGcm9tRW50cmllcyIsImxleGVyc1V0aWxpdGllcyIsImZ1cnRsZVBhcnNlckZyb21CTkZBbmRTdGFydFJ1bGVOYW1lIiwicGFyc2Vyc1V0aWxpdGllcyIsImdldFRva2VucyIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwiZnVydGxlTGV4ZXIiLCJsZXhlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJnZXRQYXJzZVRyZWUiLCJwYXJzZVRyZWUiLCJibmYiLCJnZXRCTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwic3RhcnRSdWxlTmFtZSIsImZ1cnRsZVBhcnNlciIsInBhcnNlciIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbFJ1bGVOYW1lIiwiYm5mRnJvbU5vdGhpbmciLCJlbnRyaWVzRnJvbU5vdGhpbmciLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0UnVsZU5hbWUiLCJzZXRMZXhpY2FsRW50cmllcyIsImtleVVwSGFuZGxlciIsIlZpZXciLCJyZWFkT25seSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OztxQkFUNkI7MkRBRWpDO3NCQUVrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkQsSUFBTSxBQUFFQyx5QkFBMkJDLHNCQUFlLENBQTFDRCx3QkFDRixBQUFFRSxzQ0FBd0NDLHVCQUFnQixDQUF4REQ7QUFFTyxJQUFBLEFBQU1ILDJCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGlCQUFpQixJQUFJLENBQUNDLGlCQUFpQixJQUN2Q0MsVUFBVUYsZ0JBQ1ZHLGNBQWNSLHVCQUF1Qk8sVUFDckNFLFFBQVFELGFBQ1JFLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxTQUFTSCxNQUFNSSxRQUFRLENBQUNIO2dCQUU5QixPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFGLE1BQU07Z0JBQ2pCLElBQUlHLFlBQVk7Z0JBRWhCLElBQU1DLE1BQU0sSUFBSSxDQUFDQyxNQUFNLElBQ2pCQyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsZ0JBQWdCRixVQUNoQkcsZUFBZW5CLG9DQUFvQ2MsS0FBS0ksZ0JBQ3hERSxTQUFTRCxjQUNURSxPQUFPRCxPQUFPRSxLQUFLLENBQUNaO2dCQUUxQixJQUFJVyxTQUFTLE1BQU07b0JBQ2pCUixZQUFZUSxLQUFLRSxXQUFXLENBQUNiO2dCQUMvQjtnQkFFQSxPQUFPRztZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsYUFBYTtnQkFFbEIsSUFBNEMsb0JBQUEsSUFBSSxDQUFDQyxXQUFXLEVBQXBEQyxpQkFBb0Msa0JBQXBDQSxnQkFBZ0JDLGtCQUFvQixrQkFBcEJBLGlCQUNsQmQsTUFBTWUsSUFBQUEsc0JBQWMsS0FDcEJ4QixVQUFVeUIsSUFBQUEsMEJBQWtCLEtBQzVCdEIsVUFBVW1CLGdCQUNWWCxXQUFXWSxpQkFDWHpCLGlCQUFpQkUsU0FBUyxHQUFHO2dCQUVuQyxJQUFJLENBQUMwQixNQUFNLENBQUNqQjtnQkFFWixJQUFJLENBQUNrQixVQUFVLENBQUN4QjtnQkFFaEIsSUFBSSxDQUFDeUIsV0FBVyxDQUFDakI7Z0JBRWpCLElBQUksQ0FBQ2tCLGlCQUFpQixDQUFDL0I7Z0JBRXZCLElBQUksQ0FBQ2dDLFlBQVk7WUFDbkI7OztXQWhEbUJ0QztFQUFtQnVDLGFBQUk7QUFrRDFDLGlCQWxEbUJ2QyxZQWtEWndDLFlBQVc7QUFFbEIsaUJBcERtQnhDLFlBb0RaOEIsa0JBQWtCO0FBc0J6QixpQkExRW1COUIsWUEwRVp5QyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9