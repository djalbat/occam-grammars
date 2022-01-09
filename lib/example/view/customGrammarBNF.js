"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../../index");
var _view = _interopRequireDefault(require("../view"));
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
_defineProperty(CustomGrammarBNFView, "initialContent", "\n\n                       term  ::=  operation ( <NO_WHITESPACE>\"(\" expression \")\" )?\n\n                               ;\n\n\n                  operation  ::=  \"insert\"<NO_WHITESPACE>\"(\" expression \",\" expression \")\"\n\n                               |  \"delete\"<NO_WHITESPACE>\"(\" expression \",\" expression \")\" \n\n                               |  \"empty\"<NO_WHITESPACE>\"(\"<NO_WHITESPACE>\")\"\n\n                               ;\n");
_defineProperty(CustomGrammarBNFView, "defaultProperties", {
    className: "custom-grammar-bnf"
});
exports.default = CustomGrammarBNFView;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckJORi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ3VzdG9tR3JhbW1hckJORkxleGVyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyQk5GVmlldyBleHRlbmRzIFZpZXcge1xuICBnZXRQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCB7IFBhcnNlciB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTWFwID0gcGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIExleGVyID0gQ3VzdG9tR3JhbW1hckJORkxleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBDdXN0b21HcmFtbWFyQk5GUGFyc2VyO1xuXG4gIHN0YXRpYyByZWFkT25seSA9IHRydWU7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYFxuXG4gICAgICAgICAgICAgICAgICAgICAgIHRlcm0gIDo6PSAgb3BlcmF0aW9uICggPE5PX1dISVRFU1BBQ0U+XCIoXCIgZXhwcmVzc2lvbiBcIilcIiApP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbiAgOjo9ICBcImluc2VydFwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgZXhwcmVzc2lvbiBcIixcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcImRlbGV0ZVwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgZXhwcmVzc2lvbiBcIixcIiBleHByZXNzaW9uIFwiKVwiIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJlbXB0eVwiPE5PX1dISVRFU1BBQ0U+XCIoXCI8Tk9fV0hJVEVTUEFDRT5cIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImN1c3RvbS1ncmFtbWFyLWJuZlwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hckJORlZpZXciLCJnZXRQYXJzZVRyZWUiLCJ0b2tlbnMiLCJwYXJzZVRyZWUiLCJQYXJzZXIiLCJjb25zdHJ1Y3RvciIsInBhcnNlciIsImZyb21Ob3RoaW5nIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwicnVsZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwiTGV4ZXIiLCJyZWFkT25seSIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRTBCLEdBQWEsQ0FBYixNQUFhO0FBR2xDLEdBQVMsQ0FBVCxLQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUxBLG9CQUFvQixpQkFBMUIsUUFBUTtjQUFGQSxvQkFBb0I7OEJBQXBCQSxvQkFBb0I7YUFBcEJBLG9CQUFvQjs4QkFBcEJBLG9CQUFvQjs7O2lCQUFwQkEsb0JBQW9COztZQUN2Q0MsR0FBWSxFQUFaQSxDQUFZO21CQUFaQSxRQUFRLENBQVJBLFlBQVksQ0FBQ0MsTUFBTSxFQUFFLENBQUM7Z0JBQ3BCLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLElBQUk7Z0JBRXBCLEdBQUssQ0FBR0MsTUFBTSxHQUFLLElBQUksQ0FBQ0MsV0FBVyxDQUEzQkQsTUFBTSxFQUNSRSxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0csV0FBVyxJQUMzQkMsUUFBUSxHQUFHLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsT0FBTyxHQUFHSixNQUFNLENBQUNLLFVBQVUsSUFDM0JDLElBQUksR0FBR0YsT0FBTyxDQUFDRixRQUFRLEdBQ3ZCSyxJQUFJLEdBQUdQLE1BQU0sQ0FBQ1EsS0FBSyxDQUFDWixNQUFNLEVBQUVVLElBQUk7Z0JBRXRDLEVBQUUsRUFBRUMsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO29CQUNsQlYsU0FBUyxHQUFHVSxJQUFJLENBQUNFLFdBQVcsQ0FBQ2IsTUFBTTtnQkFDckMsQ0FBQztnQkFFRCxNQUFNLENBQUNDLFNBQVM7WUFDbEIsQ0FBQzs7O1dBaEJrQkgsb0JBQW9CO0VBRnhCLEtBQVM7Z0JBRUxBLG9CQUFvQixFQWtCaENnQixDQUFLLFFBdkJ3QixNQUFhO2dCQUs5QmhCLG9CQUFvQixFQW9CaENJLENBQU0sU0F6QnVCLE1BQWE7Z0JBSzlCSixvQkFBb0IsRUFzQmhDaUIsQ0FBUSxXQUFHLElBQUk7Z0JBdEJIakIsb0JBQW9CLEVBd0JoQ2tCLENBQWMsaUJBQUksQ0FjM0I7Z0JBdENxQmxCLG9CQUFvQixFQXdDaENtQixDQUFpQixvQkFBRyxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsQ0FBb0I7QUFDakMsQ0FBQztrQkExQ2tCcEIsb0JBQW9CIn0=