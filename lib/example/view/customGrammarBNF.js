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
_defineProperty(CustomGrammarBNFView, "initialContent", '\n\n                      term!  ::=  operation ( <NO_WHITESPACE>"(" expression ")" )?\n\n                               ;\n\n\n                  operation  ::=  "insert"<NO_WHITESPACE>"(" expression "," expression ")"\n\n                               |  "delete"<NO_WHITESPACE>"(" expression "," expression ")" \n\n                               |  "empty"<NO_WHITESPACE>"("<NO_WHITESPACE>")"\n\n                               ;\n');
_defineProperty(CustomGrammarBNFView, "defaultProperties", {
    className: "custom-grammar-bnf"
});
exports.default = CustomGrammarBNFView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckJORi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ3VzdG9tR3JhbW1hckJORkxleGVyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyQk5GVmlldyBleHRlbmRzIFZpZXcge1xuICBnZXRQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCB7IFBhcnNlciB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTWFwID0gcGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIExleGVyID0gQ3VzdG9tR3JhbW1hckJORkxleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBDdXN0b21HcmFtbWFyQk5GUGFyc2VyO1xuXG4gIHN0YXRpYyByZWFkT25seSA9IHRydWU7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYFxuXG4gICAgICAgICAgICAgICAgICAgICAgdGVybSEgIDo6PSAgb3BlcmF0aW9uICggPE5PX1dISVRFU1BBQ0U+XCIoXCIgZXhwcmVzc2lvbiBcIilcIiApP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbiAgOjo9ICBcImluc2VydFwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgZXhwcmVzc2lvbiBcIixcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcImRlbGV0ZVwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgZXhwcmVzc2lvbiBcIixcIiBleHByZXNzaW9uIFwiKVwiIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJlbXB0eVwiPE5PX1dISVRFU1BBQ0U+XCIoXCI8Tk9fV0hJVEVTUEFDRT5cIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImN1c3RvbS1ncmFtbWFyLWJuZlwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXJCTkZWaWV3IiwiZ2V0UGFyc2VUcmVlIiwidG9rZW5zIiwicGFyc2VUcmVlIiwiUGFyc2VyIiwiY29uc3RydWN0b3IiLCJwYXJzZXIiLCJmcm9tTm90aGluZyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGUiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsIlZpZXciLCJMZXhlciIsIkN1c3RvbUdyYW1tYXJCTkZMZXhlciIsIkN1c3RvbUdyYW1tYXJCTkZQYXJzZXIiLCJyZWFkT25seSIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFeUIsSUFBQSxNQUFhLFdBQWIsYUFBYSxDQUFBO0FBR2xDLElBQUEsS0FBUyxrQ0FBVCxTQUFTLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVgsSUFBQSxBQUFNQSxvQkFBb0IsaUJDUHRDLEFET1k7OzthQUFNQSxvQkFBb0I7Ozs7OztZQUN2Q0MsR0FBWSxFQUFaQSxjQUFZO21CQUFaQSxTQUFBQSxZQUFZLENBQUNDLE1BQU0sRUFBRTtnQkFDbkIsSUFBSUMsU0FBUyxHQUFHLElBQUksQUFBQztnQkFFckIsSUFBTSxBQUFFQyxNQUFNLEdBQUssSUFBSSxDQUFDQyxXQUFXLENBQTNCRCxNQUFNLEFBQXFCLEVBQzdCRSxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0csV0FBVyxFQUFFLEVBQzdCQyxRQUFRLEdBQUcsSUFBSSxDQUFDQyxXQUFXLEVBQUUsRUFDN0JDLE9BQU8sR0FBR0osTUFBTSxDQUFDSyxVQUFVLEVBQUUsRUFDN0JDLElBQUksR0FBR0YsT0FBTyxDQUFDRixRQUFRLENBQUMsRUFDeEJLLElBQUksR0FBR1AsTUFBTSxDQUFDUSxLQUFLLENBQUNaLE1BQU0sRUFBRVUsSUFBSSxDQUFDLEFBQUM7Z0JBRXhDLElBQUlDLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ2pCVixTQUFTLEdBQUdVLElBQUksQ0FBQ0UsV0FBVyxDQUFDYixNQUFNLENBQUMsQ0FBQztpQkFDdEM7Z0JBRUQsT0FBT0MsU0FBUyxDQUFDO2FBQ2xCOzs7O0NBMkJGLENBM0NpRGEsS0FBSSxRQUFBLENBMkNyRDtBQXpCQyxnQkFsQm1CaEIsb0JBQW9CLEVBa0JoQ2lCLE9BQUssRUFBR0MsTUFBcUIsc0JBQUEsQ0FBQztBQUVyQyxnQkFwQm1CbEIsb0JBQW9CLEVBb0JoQ0ksUUFBTSxFQUFHZSxNQUFzQix1QkFBQSxDQUFDO0FBRXZDLGdCQXRCbUJuQixvQkFBb0IsRUFzQmhDb0IsVUFBUSxFQUFHLElBQUksQ0FBQztBQUV2QixnQkF4Qm1CcEIsb0JBQW9CLEVBd0JoQ3FCLGdCQUFjLEVBQUksa2JBYzNCLENBQUU7QUFFQSxnQkF4Q21CckIsb0JBQW9CLEVBd0NoQ3NCLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsb0JBQW9CO0NBQ2hDLENBQUM7a0JBMUNpQnZCLG9CQUFvQiJ9