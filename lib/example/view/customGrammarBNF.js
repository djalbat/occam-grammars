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
var CustomGrammarBNFView = /*#__PURE__*/ function(View) {
    _inherits(CustomGrammarBNFView, View);
    function CustomGrammarBNFView() {
        _classCallCheck(this, CustomGrammarBNFView);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomGrammarBNFView).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "Lexer", _index.CustomGrammarBNFLexer);
        _defineProperty(_assertThisInitialized(_this), "Parser", _index.CustomGrammarBNFParser);
        _defineProperty(_assertThisInitialized(_this), "heading", "Custom Grammar BNF example");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckJORi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ3VzdG9tR3JhbW1hckJORkxleGVyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyQk5GVmlldyBleHRlbmRzIFZpZXcge1xuICBMZXhlciA9IEN1c3RvbUdyYW1tYXJCTkZMZXhlcjtcblxuICBQYXJzZXIgPSBDdXN0b21HcmFtbWFyQk5GUGFyc2VyO1xuXG4gIGhlYWRpbmcgPSBcIkN1c3RvbSBHcmFtbWFyIEJORiBleGFtcGxlXCI7XG5cbiAgcmVhZE9ubHkgPSB0cnVlO1xuXG4gIGluaXRpYWxDb250ZW50ID0gYFxuXG4gICAgICAgICAgICAgICAgICAgICAgIHRlcm0gIDo6PSAgb3BlcmF0aW9uICggPE5PX1dISVRFU1BBQ0U+XCIoXCIgZXhwcmVzc2lvbiBcIilcIiApP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbiAgOjo9ICBcImluc2VydFwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgZXhwcmVzc2lvbiBcIixcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcImRlbGV0ZVwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgZXhwcmVzc2lvbiBcIixcIiBleHByZXNzaW9uIFwiKVwiIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJlbXB0eVwiPE5PX1dISVRFU1BBQ0U+XCIoXCI8Tk9fV0hJVEVTUEFDRT5cIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuYDtcblxuICBnZXRQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJzZXIgPSB0aGlzLlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGVNYXAgPSBwYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3J1bGVOYW1lXSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2VucywgcnVsZSk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImN1c3RvbS1ncmFtbWFyLWJuZlwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hckJORlZpZXciLCJMZXhlciIsIlBhcnNlciIsImhlYWRpbmciLCJyZWFkT25seSIsImluaXRpYWxDb250ZW50IiwiZ2V0UGFyc2VUcmVlIiwidG9rZW5zIiwicGFyc2VUcmVlIiwicGFyc2VyIiwiZnJvbU5vdGhpbmciLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJydWxlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFMEIsR0FBYSxDQUFiLE1BQWE7QUFHbEMsR0FBUyxDQUFULEtBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTEEsb0JBQW9CLGlCQUExQixRQUFRO2NBQUZBLG9CQUFvQjthQUFwQkEsb0JBQW9COzhCQUFwQkEsb0JBQW9COztpRUFBcEJBLG9CQUFvQjt1REFDdkNDLENBQUssUUFOK0IsTUFBYTt1REFRakRDLENBQU0sU0FSOEIsTUFBYTt1REFVakRDLENBQU8sVUFBRyxDQUE0Qjt1REFFdENDLENBQVEsV0FBRyxJQUFJO3VEQUVmQyxDQUFjLGlCQUFJLENBY3BCOzs7aUJBdkJxQkwsb0JBQW9COztZQXlCdkNNLEdBQVksRUFBWkEsQ0FBWTttQkFBWkEsUUFBUSxDQUFSQSxZQUFZLENBQUNDLE1BQU0sRUFBRSxDQUFDO2dCQUNwQixHQUFHLENBQUNDLFNBQVMsR0FBRyxJQUFJO2dCQUVwQixHQUFLLENBQUNDLE1BQU0sR0FBRyxJQUFJLENBQUNQLE1BQU0sQ0FBQ1EsV0FBVyxJQUNoQ0MsUUFBUSxHQUFHLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsT0FBTyxHQUFHSixNQUFNLENBQUNLLFVBQVUsSUFDM0JDLElBQUksR0FBR0YsT0FBTyxDQUFDRixRQUFRLEdBQ3ZCSyxJQUFJLEdBQUdQLE1BQU0sQ0FBQ1EsS0FBSyxDQUFDVixNQUFNLEVBQUVRLElBQUk7Z0JBRXRDLEVBQUUsRUFBRUMsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO29CQUNsQlIsU0FBUyxHQUFHUSxJQUFJLENBQUNFLFdBQVcsQ0FBQ1gsTUFBTTtnQkFDckMsQ0FBQztnQkFFRCxNQUFNLENBQUNDLFNBQVM7WUFDbEIsQ0FBQzs7O1dBdkNrQlIsb0JBQW9CO0VBRnhCLEtBQVM7Z0JBRUxBLG9CQUFvQixFQXlDaENtQixDQUFpQixvQkFBRyxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsQ0FBb0I7QUFDakMsQ0FBQztrQkEzQ2tCcEIsb0JBQW9CIn0=