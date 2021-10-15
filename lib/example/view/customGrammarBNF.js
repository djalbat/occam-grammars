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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckJORi5qcyJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyQk5GTGV4ZXIiLCJDdXN0b21HcmFtbWFyQk5GUGFyc2VyIiwiVmlldyIsIkN1c3RvbUdyYW1tYXJCTkZWaWV3IiwiTGV4ZXIiLCJQYXJzZXIiLCJoZWFkaW5nIiwicmVhZE9ubHkiLCJpbml0aWFsQ29udGVudCIsImdldFBhcnNlVHJlZSIsInRva2VucyIsInBhcnNlVHJlZSIsInBhcnNlciIsImZyb21Ob3RoaW5nIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwicnVsZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRTBCLEdBQWEsQ0FBYixNQUFhO0FBR2xDLEdBQVMsQ0FBVCxLQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUwsb0JBQW9CLGlCQUExQixRQUFRO2NBQUYsb0JBQW9CO2FBQXBCLG9CQUFvQjs4QkFBcEIsb0JBQW9COztpRUFBcEIsb0JBQW9CO3VEQUN2QyxDQUFLLFFBTitCLE1BQWE7dURBUWpELENBQU0sU0FSOEIsTUFBYTt1REFVakQsQ0FBTyxVQUFHLENBQTRCO3VEQUV0QyxDQUFRLFdBQUcsSUFBSTt1REFFZixDQUFjLGlCQUFJLENBY3BCOzs7aUJBdkJxQixvQkFBb0I7O1lBeUJ2QyxHQUFZLEVBQVosQ0FBWTttQkFBWixRQUFRLENBQVIsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNwQixHQUFHLENBQUMsU0FBUyxHQUFHLElBQUk7Z0JBRXBCLEdBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQ2hDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUMzQixPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsSUFDM0IsSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEdBQ3ZCLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJO2dCQUV0QyxFQUFFLEVBQUUsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO29CQUNsQixTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNO2dCQUNyQyxDQUFDO2dCQUVELE1BQU0sQ0FBQyxTQUFTO1lBQ2xCLENBQUM7OztXQXZDa0Isb0JBQW9CO0VBRnhCLEtBQVM7Z0JBRUwsb0JBQW9CLEVBeUNoQyxDQUFpQixvQkFBRyxDQUFDO0lBQzFCLFNBQVMsRUFBRSxDQUFvQjtBQUNqQyxDQUFDO2tCQTNDa0Isb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXJCTkZMZXhlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBDdXN0b21HcmFtbWFyQk5GUGFyc2VyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hckJORlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgTGV4ZXIgPSBDdXN0b21HcmFtbWFyQk5GTGV4ZXI7XG5cbiAgUGFyc2VyID0gQ3VzdG9tR3JhbW1hckJORlBhcnNlcjtcblxuICBoZWFkaW5nID0gXCJDdXN0b20gR3JhbW1hciBCTkYgZXhhbXBsZVwiO1xuXG4gIHJlYWRPbmx5ID0gdHJ1ZTtcblxuICBpbml0aWFsQ29udGVudCA9IGBcblxuICAgICAgICAgICAgICAgICAgICAgICB0ZXJtICA6Oj0gIG9wZXJhdGlvbiAoIDxOT19XSElURVNQQUNFPlwiKFwiIGV4cHJlc3Npb24gXCIpXCIgKT9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgICAgICAgICAgICAgICBvcGVyYXRpb24gIDo6PSAgXCJpbnNlcnRcIjxOT19XSElURVNQQUNFPlwiKFwiIGV4cHJlc3Npb24gXCIsXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJkZWxldGVcIjxOT19XSElURVNQQUNFPlwiKFwiIGV4cHJlc3Npb24gXCIsXCIgZXhwcmVzc2lvbiBcIilcIiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiZW1wdHlcIjxOT19XSElURVNQQUNFPlwiKFwiPE5PX1dISVRFU1BBQ0U+XCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcbmA7XG5cbiAgZ2V0UGFyc2VUcmVlKHRva2Vucykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyc2VyID0gdGhpcy5QYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTWFwID0gcGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjdXN0b20tZ3JhbW1hci1ibmZcIlxuICB9O1xufVxuIl19