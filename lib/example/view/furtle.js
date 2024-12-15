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
        }
    ]);
    return FurtleView;
}(_view.default);
_define_property(FurtleView, "Lexer", _index.FurtleLexer);
_define_property(FurtleView, "Parser", _index.FurtleParser);
_define_property(FurtleView, "readOnly", false);
_define_property(FurtleView, "initialContent", "{\n  { String content } = foo;\n}");
_define_property(FurtleView, "initialRuleName", "block");
_define_property(FurtleView, "defaultProperties", {
    className: "furtle"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGdXJ0bGVMZXhlciwgRnVydGxlUGFyc2VyLCBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5jb25zdCB7IGZ1cnRsZUxleGVyRnJvbUVudHJpZXMgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgZnVydGxlUGFyc2VyRnJvbUJORkFuZFN0YXJ0UnVsZU5hbWUgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1cnRsZVZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vL1xuICAgICAgICAgIGZ1cnRsZUxleGVyID0gZnVydGxlTGV4ZXJGcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBsZXhlciA9IGZ1cnRsZUxleGVyLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldFBhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBmdXJ0bGVQYXJzZXIgPSBmdXJ0bGVQYXJzZXJGcm9tQk5GQW5kU3RhcnRSdWxlTmFtZShibmYsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnNlciA9IGZ1cnRsZVBhcnNlciwgLy8vXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIExleGVyID0gRnVydGxlTGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IEZ1cnRsZVBhcnNlcjtcblxuICBzdGF0aWMgcmVhZE9ubHkgPSBmYWxzZTtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBge1xuICB7IFN0cmluZyBjb250ZW50IH0gPSBmb287XG59YDtcblxuICBzdGF0aWMgaW5pdGlhbFJ1bGVOYW1lID0gXCJibG9ja1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZnVydGxlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGdXJ0bGVWaWV3IiwiZnVydGxlTGV4ZXJGcm9tRW50cmllcyIsImxleGVyc1V0aWxpdGllcyIsImZ1cnRsZVBhcnNlckZyb21CTkZBbmRTdGFydFJ1bGVOYW1lIiwicGFyc2Vyc1V0aWxpdGllcyIsImdldFRva2VucyIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwiZnVydGxlTGV4ZXIiLCJsZXhlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJnZXRQYXJzZVRyZWUiLCJwYXJzZVRyZWUiLCJibmYiLCJnZXRCTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwic3RhcnRSdWxlTmFtZSIsImZ1cnRsZVBhcnNlciIsInBhcnNlciIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwiVmlldyIsIkxleGVyIiwiRnVydGxlTGV4ZXIiLCJQYXJzZXIiLCJGdXJ0bGVQYXJzZXIiLCJyZWFkT25seSIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbFJ1bGVOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3FCQVB3RDsyREFFNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpCLElBQU0sQUFBRUMseUJBQTJCQyxzQkFBZSxDQUExQ0Qsd0JBQ0YsQUFBRUUsc0NBQXdDQyx1QkFBZ0IsQ0FBeEREO0FBRU8sSUFBQSxBQUFNSCwyQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxpQkFBaUIsSUFBSSxDQUFDQyxpQkFBaUIsSUFDdkNDLFVBQVVGLGdCQUNWRyxjQUFjUix1QkFBdUJPLFVBQ3JDRSxRQUFRRCxhQUNSRSxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsU0FBU0gsTUFBTUksUUFBUSxDQUFDSDtnQkFFOUIsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhRixNQUFNO2dCQUNqQixJQUFJRyxZQUFZO2dCQUVoQixJQUFNQyxNQUFNLElBQUksQ0FBQ0MsTUFBTSxJQUNqQkMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLGdCQUFnQkYsVUFDaEJHLGVBQWVuQixvQ0FBb0NjLEtBQUtJLGdCQUN4REUsU0FBU0QsY0FDVEUsT0FBT0QsT0FBT0UsS0FBSyxDQUFDWjtnQkFFMUIsSUFBSVcsU0FBUyxNQUFNO29CQUNqQlIsWUFBWVEsS0FBS0UsV0FBVyxDQUFDYjtnQkFDL0I7Z0JBRUEsT0FBT0c7WUFDVDs7O1dBM0JtQmhCO0VBQW1CMkIsYUFBSTtBQTZCMUMsaUJBN0JtQjNCLFlBNkJaNEIsU0FBUUMsa0JBQVc7QUFFMUIsaUJBL0JtQjdCLFlBK0JaOEIsVUFBU0MsbUJBQVk7QUFFNUIsaUJBakNtQi9CLFlBaUNaZ0MsWUFBVztBQUVsQixpQkFuQ21CaEMsWUFtQ1ppQyxrQkFBa0I7QUFJekIsaUJBdkNtQmpDLFlBdUNaa0MsbUJBQWtCO0FBRXpCLGlCQXpDbUJsQyxZQXlDWm1DLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=