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
_define_property(FurtleView, "defaultProperties", {
    className: "furtle"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGdXJ0bGVMZXhlciwgRnVydGxlUGFyc2VyLCBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5jb25zdCB7IGZ1cnRsZUxleGVyRnJvbUVudHJpZXMgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgZnVydGxlUGFyc2VyRnJvbUJORkFuZFN0YXJ0UnVsZU5hbWUgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1cnRsZVZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vL1xuICAgICAgICAgIGZ1cnRsZUxleGVyID0gZnVydGxlTGV4ZXJGcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBsZXhlciA9IGZ1cnRsZUxleGVyLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldFBhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBmdXJ0bGVQYXJzZXIgPSBmdXJ0bGVQYXJzZXJGcm9tQk5GQW5kU3RhcnRSdWxlTmFtZShibmYsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnNlciA9IGZ1cnRsZVBhcnNlciwgLy8vXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIExleGVyID0gRnVydGxlTGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IEZ1cnRsZVBhcnNlcjtcblxuICBzdGF0aWMgcmVhZE9ubHkgPSBmYWxzZTtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBge1xuICB7IFN0cmluZyBjb250ZW50IH0gPSBmb287XG59YDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZ1cnRsZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRnVydGxlVmlldyIsImZ1cnRsZUxleGVyRnJvbUVudHJpZXMiLCJsZXhlcnNVdGlsaXRpZXMiLCJmdXJ0bGVQYXJzZXJGcm9tQk5GQW5kU3RhcnRSdWxlTmFtZSIsInBhcnNlcnNVdGlsaXRpZXMiLCJnZXRUb2tlbnMiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiZW50cmllcyIsImZ1cnRsZUxleGVyIiwibGV4ZXIiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwiZ2V0UGFyc2VUcmVlIiwicGFyc2VUcmVlIiwiYm5mIiwiZ2V0Qk5GIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInN0YXJ0UnVsZU5hbWUiLCJmdXJ0bGVQYXJzZXIiLCJwYXJzZXIiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsIlZpZXciLCJMZXhlciIsIkZ1cnRsZUxleGVyIiwiUGFyc2VyIiwiRnVydGxlUGFyc2VyIiwicmVhZE9ubHkiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztxQkFQd0Q7MkRBRTVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQixJQUFNLEFBQUVDLHlCQUEyQkMsc0JBQWUsQ0FBMUNELHdCQUNGLEFBQUVFLHNDQUF3Q0MsdUJBQWdCLENBQXhERDtBQUVPLElBQUEsQUFBTUgsMkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLElBQ3ZDQyxVQUFVRixnQkFDVkcsY0FBY1IsdUJBQXVCTyxVQUNyQ0UsUUFBUUQsYUFDUkUsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLFNBQVNILE1BQU1JLFFBQVEsQ0FBQ0g7Z0JBRTlCLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUYsTUFBTTtnQkFDakIsSUFBSUcsWUFBWTtnQkFFaEIsSUFBTUMsTUFBTSxJQUFJLENBQUNDLE1BQU0sSUFDakJDLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyxnQkFBZ0JGLFVBQ2hCRyxlQUFlbkIsb0NBQW9DYyxLQUFLSSxnQkFDeERFLFNBQVNELGNBQ1RFLE9BQU9ELE9BQU9FLEtBQUssQ0FBQ1o7Z0JBRTFCLElBQUlXLFNBQVMsTUFBTTtvQkFDakJSLFlBQVlRLEtBQUtFLFdBQVcsQ0FBQ2I7Z0JBQy9CO2dCQUVBLE9BQU9HO1lBQ1Q7OztXQTNCbUJoQjtFQUFtQjJCLGFBQUk7QUE2QjFDLGlCQTdCbUIzQixZQTZCWjRCLFNBQVFDLGtCQUFXO0FBRTFCLGlCQS9CbUI3QixZQStCWjhCLFVBQVNDLG1CQUFZO0FBRTVCLGlCQWpDbUIvQixZQWlDWmdDLFlBQVc7QUFFbEIsaUJBbkNtQmhDLFlBbUNaaUMsa0JBQWtCO0FBSXpCLGlCQXZDbUJqQyxZQXVDWmtDLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=