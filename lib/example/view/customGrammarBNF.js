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
var _view = /*#__PURE__*/ _interopRequireDefault(require("../view"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var CustomGrammarBNFView = /*#__PURE__*/ function(View) {
    _inherits(CustomGrammarBNFView, View);
    var _super = _createSuper(CustomGrammarBNFView);
    function CustomGrammarBNFView() {
        _classCallCheck(this, CustomGrammarBNFView);
        return _super.apply(this, arguments);
    }
    _createClass(CustomGrammarBNFView, [
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
_defineProperty(CustomGrammarBNFView, "Lexer", _index.CustomGrammarBNFLexer);
_defineProperty(CustomGrammarBNFView, "Parser", _index.CustomGrammarBNFParser);
_defineProperty(CustomGrammarBNFView, "readOnly", true);
_defineProperty(CustomGrammarBNFView, "initialContent", '\n\n                      term!  ::=  operation ( <NO_WHITESPACE>"(" term ")" )? ;\n\n\n                  operation  ::=  "insert"<NO_WHITESPACE>"(" term "," term ")"\n\n                               |  "delete"<NO_WHITESPACE>"(" term "," term ")" \n\n                               |  "empty"<NO_WHITESPACE>"("<NO_WHITESPACE>")"\n\n                               ;\n');
_defineProperty(CustomGrammarBNFView, "defaultProperties", {
    className: "custom-grammar-bnf"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckJORi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ3VzdG9tR3JhbW1hckJORkxleGVyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyQk5GVmlldyBleHRlbmRzIFZpZXcge1xuICBnZXRQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCB7IFBhcnNlciB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTWFwID0gcGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIExleGVyID0gQ3VzdG9tR3JhbW1hckJORkxleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBDdXN0b21HcmFtbWFyQk5GUGFyc2VyO1xuXG4gIHN0YXRpYyByZWFkT25seSA9IHRydWU7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYFxuXG4gICAgICAgICAgICAgICAgICAgICAgdGVybSEgIDo6PSAgb3BlcmF0aW9uICggPE5PX1dISVRFU1BBQ0U+XCIoXCIgdGVybSBcIilcIiApPyA7XG5cblxuICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uICA6Oj0gIFwiaW5zZXJ0XCI8Tk9fV0hJVEVTUEFDRT5cIihcIiB0ZXJtIFwiLFwiIHRlcm0gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiZGVsZXRlXCI8Tk9fV0hJVEVTUEFDRT5cIihcIiB0ZXJtIFwiLFwiIHRlcm0gXCIpXCIgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcImVtcHR5XCI8Tk9fV0hJVEVTUEFDRT5cIihcIjxOT19XSElURVNQQUNFPlwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5gO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY3VzdG9tLWdyYW1tYXItYm5mXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hckJORlZpZXciLCJnZXRQYXJzZVRyZWUiLCJ0b2tlbnMiLCJwYXJzZVRyZWUiLCJQYXJzZXIiLCJjb25zdHJ1Y3RvciIsInBhcnNlciIsImZyb21Ob3RoaW5nIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwicnVsZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwiVmlldyIsIkxleGVyIiwiQ3VzdG9tR3JhbW1hckJORkxleGVyIiwiQ3VzdG9tR3JhbW1hckJORlBhcnNlciIsInJlYWRPbmx5IiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBT1FBLG9CQUFvQjs7O3FCQUxILGFBQWE7eURBR2xDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVgsSUFBQSxBQUFNQSxvQkFBb0IsaUJBQTFCOzs7YUFBTUEsb0JBQW9COzs7Ozs7WUFDdkNDLEdBQVksRUFBWkEsY0FBWTttQkFBWkEsU0FBQUEsWUFBWSxDQUFDQyxNQUFNLEVBQUU7Z0JBQ25CLElBQUlDLFNBQVMsR0FBRyxJQUFJLEFBQUM7Z0JBRXJCLElBQU0sQUFBRUMsTUFBTSxHQUFLLElBQUksQ0FBQ0MsV0FBVyxDQUEzQkQsTUFBTSxBQUFxQixFQUM3QkUsTUFBTSxHQUFHRixNQUFNLENBQUNHLFdBQVcsRUFBRSxFQUM3QkMsUUFBUSxHQUFHLElBQUksQ0FBQ0MsV0FBVyxFQUFFLEVBQzdCQyxPQUFPLEdBQUdKLE1BQU0sQ0FBQ0ssVUFBVSxFQUFFLEVBQzdCQyxJQUFJLEdBQUdGLE9BQU8sQ0FBQ0YsUUFBUSxDQUFDLEVBQ3hCSyxJQUFJLEdBQUdQLE1BQU0sQ0FBQ1EsS0FBSyxDQUFDWixNQUFNLEVBQUVVLElBQUksQ0FBQyxBQUFDO2dCQUV4QyxJQUFJQyxJQUFJLEtBQUssSUFBSSxFQUFFO29CQUNqQlYsU0FBUyxHQUFHVSxJQUFJLENBQUNFLFdBQVcsQ0FBQ2IsTUFBTSxDQUFDLENBQUM7aUJBQ3RDO2dCQUVELE9BQU9DLFNBQVMsQ0FBQzthQUNsQjs7OztDQXlCRixDQXpDaURhLEtBQUksUUFBQSxDQXlDckQ7QUF2QkMsZ0JBbEJtQmhCLG9CQUFvQixFQWtCaENpQixPQUFLLEVBQUdDLE1BQXFCLHNCQUFBLENBQUM7QUFFckMsZ0JBcEJtQmxCLG9CQUFvQixFQW9CaENJLFFBQU0sRUFBR2UsTUFBc0IsdUJBQUEsQ0FBQztBQUV2QyxnQkF0Qm1CbkIsb0JBQW9CLEVBc0JoQ29CLFVBQVEsRUFBRyxJQUFJLENBQUM7QUFFdkIsZ0JBeEJtQnBCLG9CQUFvQixFQXdCaENxQixnQkFBYyxFQUFJLGtYQVkzQixDQUFFO0FBRUEsZ0JBdENtQnJCLG9CQUFvQixFQXNDaENzQixtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLG9CQUFvQjtDQUNoQyxDQUFDIn0=