"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CustomGrammarBNFView;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var CustomGrammarBNFView = /*#__PURE__*/ function(View) {
    _inherits(CustomGrammarBNFView, View);
    var _super = _create_super(CustomGrammarBNFView);
    function CustomGrammarBNFView() {
        _class_call_check(this, CustomGrammarBNFView);
        return _super.apply(this, arguments);
    }
    _create_class(CustomGrammarBNFView, [
        {
            key: "getParseTree",
            value: function getParseTree(tokens) {
                var parseTree = null;
                var Parser = this.constructor.Parser, parser = Parser.fromNothing(), ruleName = this.getRuleName(), ruleMap = parser.getRuleMap(), rule = ruleMap[ruleName], node = parser.parse(tokens, rule);
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                return parseTree;
            }
        }
    ]);
    return CustomGrammarBNFView;
}(_view.default);
_define_property(CustomGrammarBNFView, "Lexer", _index.CustomGrammarBNFLexer);
_define_property(CustomGrammarBNFView, "Parser", _index.CustomGrammarBNFParser);
_define_property(CustomGrammarBNFView, "readOnly", true);
_define_property(CustomGrammarBNFView, "initialContent", '\n\n                      term!  ::=  operation ( <NO_WHITESPACE>"(" term ")" )? ;\n\n\n                  operation  ::=  "insert"<NO_WHITESPACE>"(" term "," term ")"\n\n                               |  "delete"<NO_WHITESPACE>"(" term "," term ")" \n\n                               |  "empty"<NO_WHITESPACE>"("<NO_WHITESPACE>")"\n\n                               ;\n');
_define_property(CustomGrammarBNFView, "defaultProperties", {
    className: "custom-grammar-bnf"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckJORi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ3VzdG9tR3JhbW1hckJORkxleGVyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyQk5GVmlldyBleHRlbmRzIFZpZXcge1xuICBnZXRQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCB7IFBhcnNlciB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTWFwID0gcGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIExleGVyID0gQ3VzdG9tR3JhbW1hckJORkxleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBDdXN0b21HcmFtbWFyQk5GUGFyc2VyO1xuXG4gIHN0YXRpYyByZWFkT25seSA9IHRydWU7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYFxuXG4gICAgICAgICAgICAgICAgICAgICAgdGVybSEgIDo6PSAgb3BlcmF0aW9uICggPE5PX1dISVRFU1BBQ0U+XCIoXCIgdGVybSBcIilcIiApPyA7XG5cblxuICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uICA6Oj0gIFwiaW5zZXJ0XCI8Tk9fV0hJVEVTUEFDRT5cIihcIiB0ZXJtIFwiLFwiIHRlcm0gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiZGVsZXRlXCI8Tk9fV0hJVEVTUEFDRT5cIihcIiB0ZXJtIFwiLFwiIHRlcm0gXCIpXCIgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcImVtcHR5XCI8Tk9fV0hJVEVTUEFDRT5cIihcIjxOT19XSElURVNQQUNFPlwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5gO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY3VzdG9tLWdyYW1tYXItYm5mXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hckJORlZpZXciLCJnZXRQYXJzZVRyZWUiLCJ0b2tlbnMiLCJwYXJzZVRyZWUiLCJQYXJzZXIiLCJjb25zdHJ1Y3RvciIsInBhcnNlciIsImZyb21Ob3RoaW5nIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwicnVsZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwiVmlldyIsIkxleGVyIiwiQ3VzdG9tR3JhbW1hckJORkxleGVyIiwiQ3VzdG9tR3JhbW1hckJORlBhcnNlciIsInJlYWRPbmx5IiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7cUJBTGlCOzJEQUdyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRixJQUFBLEFBQU1BLHFDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsTUFBTSxFQUFFO2dCQUNuQixJQUFJQyxZQUFZLElBQUk7Z0JBRXBCLElBQU0sQUFBRUMsU0FBVyxJQUFJLENBQUNDLFdBQVcsQ0FBM0JELFFBQ0ZFLFNBQVNGLE9BQU9HLFdBQVcsSUFDM0JDLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyxVQUFVSixPQUFPSyxVQUFVLElBQzNCQyxPQUFPRixPQUFPLENBQUNGLFNBQVMsRUFDeEJLLE9BQU9QLE9BQU9RLEtBQUssQ0FBQ1osUUFBUVU7Z0JBRWxDLElBQUlDLFNBQVMsSUFBSSxFQUFFO29CQUNqQlYsWUFBWVUsS0FBS0UsV0FBVyxDQUFDYjtnQkFDL0IsQ0FBQztnQkFFRCxPQUFPQztZQUNUOzs7V0FoQm1CSDtFQUE2QmdCLGFBQUk7QUFrQnBELGlCQWxCbUJoQixzQkFrQlppQixTQUFRQyw0QkFBcUI7QUFFcEMsaUJBcEJtQmxCLHNCQW9CWkksVUFBU2UsNkJBQXNCO0FBRXRDLGlCQXRCbUJuQixzQkFzQlpvQixZQUFXLElBQUk7QUFFdEIsaUJBeEJtQnBCLHNCQXdCWnFCLGtCQUFrQjtBQWN6QixpQkF0Q21CckIsc0JBc0Nac0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==