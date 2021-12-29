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
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "Lexer", _index.CustomGrammarBNFLexer);
        _defineProperty(_assertThisInitialized(_this), "Parser", _index.CustomGrammarBNFParser);
        _defineProperty(_assertThisInitialized(_this), "readOnly", true);
        _defineProperty(_assertThisInitialized(_this), "initialContent", "\n\n                       term  ::=  operation ( <NO_WHITESPACE>\"(\" expression \")\" )?\n\n                               ;\n\n\n                  operation  ::=  \"insert\"<NO_WHITESPACE>\"(\" expression \",\" expression \")\"\n\n                               |  \"delete\"<NO_WHITESPACE>\"(\" expression \",\" expression \")\" \n\n                               |  \"empty\"<NO_WHITESPACE>\"(\"<NO_WHITESPACE>\")\"\n\n                               ;\n");
        return _this;
    }
    _createClass(CustomGrammarBNFView, [
        {
            key: "getParseTree",
            value: function getParseTree(tokens) {
                var parseTree = null;
                var parser = this.Parser.fromNothing(), ruleName = this.getRuleName(), ruleMap = parser.getRuleMap(), rule = ruleMap[ruleName], node = parser.parse(tokens, rule);
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                return parseTree;
            }
        }
    ]);
    return CustomGrammarBNFView;
}(_view.default);
_defineProperty(CustomGrammarBNFView, "defaultProperties", {
    className: "custom-grammar-bnf"
});
exports.default = CustomGrammarBNFView;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckJORi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ3VzdG9tR3JhbW1hckJORkxleGVyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyQk5GVmlldyBleHRlbmRzIFZpZXcge1xuICBMZXhlciA9IEN1c3RvbUdyYW1tYXJCTkZMZXhlcjtcblxuICBQYXJzZXIgPSBDdXN0b21HcmFtbWFyQk5GUGFyc2VyO1xuXG4gIHJlYWRPbmx5ID0gdHJ1ZTtcblxuICBpbml0aWFsQ29udGVudCA9IGBcblxuICAgICAgICAgICAgICAgICAgICAgICB0ZXJtICA6Oj0gIG9wZXJhdGlvbiAoIDxOT19XSElURVNQQUNFPlwiKFwiIGV4cHJlc3Npb24gXCIpXCIgKT9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgICAgICAgICAgICAgICBvcGVyYXRpb24gIDo6PSAgXCJpbnNlcnRcIjxOT19XSElURVNQQUNFPlwiKFwiIGV4cHJlc3Npb24gXCIsXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJkZWxldGVcIjxOT19XSElURVNQQUNFPlwiKFwiIGV4cHJlc3Npb24gXCIsXCIgZXhwcmVzc2lvbiBcIilcIiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiZW1wdHlcIjxOT19XSElURVNQQUNFPlwiKFwiPE5PX1dISVRFU1BBQ0U+XCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcbmA7XG5cbiAgZ2V0UGFyc2VUcmVlKHRva2Vucykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyc2VyID0gdGhpcy5QYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTWFwID0gcGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjdXN0b20tZ3JhbW1hci1ibmZcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXJCTkZWaWV3IiwiTGV4ZXIiLCJQYXJzZXIiLCJyZWFkT25seSIsImluaXRpYWxDb250ZW50IiwiZ2V0UGFyc2VUcmVlIiwidG9rZW5zIiwicGFyc2VUcmVlIiwicGFyc2VyIiwiZnJvbU5vdGhpbmciLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJydWxlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFMEIsR0FBYSxDQUFiLE1BQWE7QUFHbEMsR0FBUyxDQUFULEtBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUxBLG9CQUFvQixpQkFBMUIsUUFBUTtjQUFGQSxvQkFBb0I7OEJBQXBCQSxvQkFBb0I7YUFBcEJBLG9CQUFvQjs4QkFBcEJBLG9CQUFvQjs7O3VEQUN2Q0MsQ0FBSyxRQU4rQixNQUFhO3VEQVFqREMsQ0FBTSxTQVI4QixNQUFhO3VEQVVqREMsQ0FBUSxXQUFHLElBQUk7dURBRWZDLENBQWMsaUJBQUksQ0FjcEI7OztpQkFyQnFCSixvQkFBb0I7O1lBdUJ2Q0ssR0FBWSxFQUFaQSxDQUFZO21CQUFaQSxRQUFRLENBQVJBLFlBQVksQ0FBQ0MsTUFBTSxFQUFFLENBQUM7Z0JBQ3BCLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLElBQUk7Z0JBRXBCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ04sTUFBTSxDQUFDTyxXQUFXLElBQ2hDQyxRQUFRLEdBQUcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyxPQUFPLEdBQUdKLE1BQU0sQ0FBQ0ssVUFBVSxJQUMzQkMsSUFBSSxHQUFHRixPQUFPLENBQUNGLFFBQVEsR0FDdkJLLElBQUksR0FBR1AsTUFBTSxDQUFDUSxLQUFLLENBQUNWLE1BQU0sRUFBRVEsSUFBSTtnQkFFdEMsRUFBRSxFQUFFQyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ2xCUixTQUFTLEdBQUdRLElBQUksQ0FBQ0UsV0FBVyxDQUFDWCxNQUFNO2dCQUNyQyxDQUFDO2dCQUVELE1BQU0sQ0FBQ0MsU0FBUztZQUNsQixDQUFDOzs7V0FyQ2tCUCxvQkFBb0I7RUFGeEIsS0FBUztnQkFFTEEsb0JBQW9CLEVBdUNoQ2tCLENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFvQjtBQUNqQyxDQUFDO2tCQXpDa0JuQixvQkFBb0IifQ==