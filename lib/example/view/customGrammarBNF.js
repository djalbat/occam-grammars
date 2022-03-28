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
exports.default = CustomGrammarBNFView;
_defineProperty(CustomGrammarBNFView, "Lexer", _index.CustomGrammarBNFLexer);
_defineProperty(CustomGrammarBNFView, "Parser", _index.CustomGrammarBNFParser);
_defineProperty(CustomGrammarBNFView, "readOnly", true);
_defineProperty(CustomGrammarBNFView, "initialContent", "\n\n                       term  ::=  operation ( <NO_WHITESPACE>\"(\" expression \")\" )?\n\n                               ;\n\n\n                  operation  ::=  \"insert\"<NO_WHITESPACE>\"(\" expression \",\" expression \")\"\n\n                               |  \"delete\"<NO_WHITESPACE>\"(\" expression \",\" expression \")\" \n\n                               |  \"empty\"<NO_WHITESPACE>\"(\"<NO_WHITESPACE>\")\"\n\n                               ;\n");
_defineProperty(CustomGrammarBNFView, "defaultProperties", {
    className: "custom-grammar-bnf"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hckJORi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXJCTkZMZXhlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBDdXN0b21HcmFtbWFyQk5GUGFyc2VyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hckJORlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgZ2V0UGFyc2VUcmVlKHRva2Vucykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgeyBQYXJzZXIgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgcGFyc2VyID0gUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZU1hcCA9IHBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBydWxlKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBMZXhlciA9IEN1c3RvbUdyYW1tYXJCTkZMZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gQ3VzdG9tR3JhbW1hckJORlBhcnNlcjtcblxuICBzdGF0aWMgcmVhZE9ubHkgPSB0cnVlO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBcblxuICAgICAgICAgICAgICAgICAgICAgICB0ZXJtICA6Oj0gIG9wZXJhdGlvbiAoIDxOT19XSElURVNQQUNFPlwiKFwiIGV4cHJlc3Npb24gXCIpXCIgKT9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgICAgICAgICAgICAgICBvcGVyYXRpb24gIDo6PSAgXCJpbnNlcnRcIjxOT19XSElURVNQQUNFPlwiKFwiIGV4cHJlc3Npb24gXCIsXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJkZWxldGVcIjxOT19XSElURVNQQUNFPlwiKFwiIGV4cHJlc3Npb24gXCIsXCIgZXhwcmVzc2lvbiBcIilcIiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiZW1wdHlcIjxOT19XSElURVNQQUNFPlwiKFwiPE5PX1dISVRFU1BBQ0U+XCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcbmA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjdXN0b20tZ3JhbW1hci1ibmZcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyQk5GVmlldyIsImdldFBhcnNlVHJlZSIsInRva2VucyIsInBhcnNlVHJlZSIsIlBhcnNlciIsImNvbnN0cnVjdG9yIiwicGFyc2VyIiwiZnJvbU5vdGhpbmciLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJydWxlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJWaWV3IiwiTGV4ZXIiLCJDdXN0b21HcmFtbWFyQk5GTGV4ZXIiLCJDdXN0b21HcmFtbWFyQk5GUGFyc2VyIiwicmVhZE9ubHkiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRXNDLElBQUEsTUFBYSxXQUFiLGFBQWEsQ0FBQTtBQUdsQyxJQUFBLEtBQVMsa0NBQVQsU0FBUyxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7OERBTDFCO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7Ozs7O1VBQUE7O3dCQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFPZSxJQUFBLEFBQU1BLG9CQUFvQixpQkNQdEMsQURPWTt5Q0FQZjs7YUFPcUJBLG9CQUFvQjttREFQekM7Ozs7O1lBUUVDLEdBQVksRUFBWkEsY0FBWTtZRVJkLE9GUUVBLFNBQUFBLFlBQVksQ0FBQ0MsTUFBTSxFQUFFO2dCQUNuQixJQUFJQyxTQUFTLEdBQUcsSUFBSSxBQUFDO2dCQUVyQixJQUFNLEFBQUVDLE1BQU0sR0FBSyxJQUFJLENBQUNDLFdBQVcsQ0FBM0JELE1BQU0sQUFBcUIsRUFDN0JFLE1BQU0sR0FBR0YsTUFBTSxDQUFDRyxXQUFXLEVBQUUsRUFDN0JDLFFBQVEsR0FBRyxJQUFJLENBQUNDLFdBQVcsRUFBRSxFQUM3QkMsT0FBTyxHQUFHSixNQUFNLENBQUNLLFVBQVUsRUFBRSxFQUM3QkMsSUFBSSxHQUFHRixPQUFPLENBQUNGLFFBQVEsQ0FBQyxFQUN4QkssSUFBSSxHQUFHUCxNQUFNLENBQUNRLEtBQUssQ0FBQ1osTUFBTSxFQUFFVSxJQUFJLENBQUMsQUFBQztnQkFFeEMsSUFBSUMsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDakJWLFNBQVMsR0FBR1UsSUFBSSxDQUFDRSxXQUFXLENBQUNiLE1BQU0sQ0FBQyxDQUFDO2lCQUN0QztnQkFFRCxPQUFPQyxTQUFTLENBQUM7YUFDbEI7O01BdkJIOztDQWtEQyxDQTNDaURhLEtBQUksU0EyQ3JEO2tCQTNDb0JoQixvQkFBb0IsQUFQekM7QUF5QkUsZ0JBbEJtQkEsb0JBQW9CLEVBa0JoQ2lCLE9BQUssRUFBR0MsTUFBcUIsdUJBQUMsQUF6QnZDO0FBMkJFLGdCQXBCbUJsQixvQkFBb0IsRUFvQmhDSSxRQUFNLEVBQUdlLE1BQXNCLHdCQUFDLEFBM0J6QztBQTZCRSxnQkF0Qm1CbkIsb0JBQW9CLEVBc0JoQ29CLFVBQVEsRUFBRyxJQUFJLENBQUMsQUE3QnpCO0FBK0JFLGdCQXhCbUJwQixvQkFBb0IsRUF3QmhDcUIsZ0JBQWMsRUFBSSw0Y0FjM0IsQ0FBRSxBQTdDRjtBQStDRSxnQkF4Q21CckIsb0JBQW9CLEVBd0NoQ3NCLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsb0JBQW9CO0NBQ2hDLENBQUMsQUFqREoifQ==