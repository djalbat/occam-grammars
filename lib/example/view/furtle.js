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
_define_property(FurtleView, "initialContent", "Boolean isMetavariableFree(Node frameNode, Node statementNode) {\n  Boolean metavariableBound = isMetavariableBound(frameNode, statementNode);\n\n  Boolean metavariableFree = !metavariableBound;\n\n  Return metavariableFree;\n}\n");
_define_property(FurtleView, "defaultProperties", {
    className: "furtle"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5pbXBvcnQgeyBibmZGcm9tTm90aGluZywgZW50cmllc0Zyb21Ob3RoaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9mdXJ0bGVcIjtcblxuY29uc3QgeyBmdXJ0bGVMZXhlckZyb21FbnRyaWVzIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZ1cnRsZVBhcnNlckZyb21CTkZBbmRTdGFydFJ1bGVOYW1lIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdXJ0bGVWaWV3IGV4dGVuZHMgVmlldyB7XG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vLy9cbiAgICAgICAgICBmdXJ0bGVMZXhlciA9IGZ1cnRsZUxleGVyRnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgbGV4ZXIgPSBmdXJ0bGVMZXhlciwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXRQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBydWxlTmFtZSwgLy8vXG4gICAgICAgICAgZnVydGxlUGFyc2VyID0gZnVydGxlUGFyc2VyRnJvbUJORkFuZFN0YXJ0UnVsZU5hbWUoYm5mLCBzdGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJzZXIgPSBmdXJ0bGVQYXJzZXIsIC8vL1xuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxDb250ZW50LCBpbml0aWFsUnVsZU5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgYm5mID0gYm5mRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0Zyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IGluaXRpYWxSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyByZWFkT25seSA9IGZhbHNlO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBCb29sZWFuIGlzTWV0YXZhcmlhYmxlRnJlZShOb2RlIGZyYW1lTm9kZSwgTm9kZSBzdGF0ZW1lbnROb2RlKSB7XG4gIEJvb2xlYW4gbWV0YXZhcmlhYmxlQm91bmQgPSBpc01ldGF2YXJpYWJsZUJvdW5kKGZyYW1lTm9kZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgQm9vbGVhbiBtZXRhdmFyaWFibGVGcmVlID0gIW1ldGF2YXJpYWJsZUJvdW5kO1xuXG4gIFJldHVybiBtZXRhdmFyaWFibGVGcmVlO1xufVxuYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZ1cnRsZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRnVydGxlVmlldyIsImZ1cnRsZUxleGVyRnJvbUVudHJpZXMiLCJsZXhlcnNVdGlsaXRpZXMiLCJmdXJ0bGVQYXJzZXJGcm9tQk5GQW5kU3RhcnRSdWxlTmFtZSIsInBhcnNlcnNVdGlsaXRpZXMiLCJnZXRUb2tlbnMiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiZW50cmllcyIsImZ1cnRsZUxleGVyIiwibGV4ZXIiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwiZ2V0UGFyc2VUcmVlIiwicGFyc2VUcmVlIiwiYm5mIiwiZ2V0Qk5GIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInN0YXJ0UnVsZU5hbWUiLCJmdXJ0bGVQYXJzZXIiLCJwYXJzZXIiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsUnVsZU5hbWUiLCJibmZGcm9tTm90aGluZyIsImVudHJpZXNGcm9tTm90aGluZyIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRSdWxlTmFtZSIsInNldExleGljYWxFbnRyaWVzIiwia2V5VXBIYW5kbGVyIiwiVmlldyIsInJlYWRPbmx5IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3FCQVQ2QjsyREFFakM7c0JBRWtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRCxJQUFNLEFBQUVDLHlCQUEyQkMsc0JBQWUsQ0FBMUNELHdCQUNGLEFBQUVFLHNDQUF3Q0MsdUJBQWdCLENBQXhERDtBQUVPLElBQUEsQUFBTUgsMkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxpQkFBaUIsSUFBSSxDQUFDQyxpQkFBaUIsSUFDdkNDLFVBQVVGLGdCQUNWRyxjQUFjUix1QkFBdUJPLFVBQ3JDRSxRQUFRRCxhQUNSRSxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsU0FBU0gsTUFBTUksUUFBUSxDQUFDSDtnQkFFOUIsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhRixNQUFNO2dCQUNqQixJQUFJRyxZQUFZO2dCQUVoQixJQUFNQyxNQUFNLElBQUksQ0FBQ0MsTUFBTSxJQUNqQkMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLGdCQUFnQkYsVUFDaEJHLGVBQWVuQixvQ0FBb0NjLEtBQUtJLGdCQUN4REUsU0FBU0QsY0FDVEUsT0FBT0QsT0FBT0UsS0FBSyxDQUFDWjtnQkFFMUIsSUFBSVcsU0FBUyxNQUFNO29CQUNqQlIsWUFBWVEsS0FBS0UsV0FBVyxDQUFDYjtnQkFDL0I7Z0JBRUEsT0FBT0c7WUFDVDs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7Z0JBRWxCLElBQTRDLG9CQUFBLElBQUksQ0FBQyxXQUFXLEVBQXBEQyxpQkFBb0Msa0JBQXBDQSxnQkFBZ0JDLGtCQUFvQixrQkFBcEJBLGlCQUNsQmIsTUFBTWMsSUFBQUEsc0JBQWMsS0FDcEJ2QixVQUFVd0IsSUFBQUEsMEJBQWtCLEtBQzVCckIsVUFBVWtCLGdCQUNWVixXQUFXVyxpQkFDWHhCLGlCQUFpQkUsU0FBUyxHQUFHO2dCQUVuQyxJQUFJLENBQUN5QixNQUFNLENBQUNoQjtnQkFFWixJQUFJLENBQUNpQixVQUFVLENBQUN2QjtnQkFFaEIsSUFBSSxDQUFDd0IsV0FBVyxDQUFDaEI7Z0JBRWpCLElBQUksQ0FBQ2lCLGlCQUFpQixDQUFDOUI7Z0JBRXZCLElBQUksQ0FBQytCLFlBQVk7WUFDbkI7OztXQWhEbUJyQztFQUFtQnNDLGFBQUk7QUFrRDFDLGlCQWxEbUJ0QyxZQWtEWnVDLFlBQVc7QUFFbEIsaUJBcERtQnZDLFlBb0RaNkIsa0JBQWlCO0FBU3hCLGlCQTdEbUI3QixZQTZEWndDLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=