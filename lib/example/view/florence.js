"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../../index");
var _view = _interopRequireDefault(require("../view"));
var _parser = require("../../florence/parser");
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
var FlorenceView = /*#__PURE__*/ function(View) {
    _inherits(FlorenceView, View);
    var _super = _createSuper(FlorenceView);
    function FlorenceView() {
        _classCallCheck(this, FlorenceView);
        return _super.apply(this, arguments);
    }
    _createClass(FlorenceView, [
        {
            key: "getParseTree",
            value: function getParseTree(tokens) {
                var parseTree = null, bnf = this.getBNF();
                bnf = "".concat(bnf, " ").concat(_parser.defaultCustomGrammarBNF); ///
                var Parser = this.constructor.Parser, parser = Parser.fromBNF(bnf), ruleName = this.getRuleName(), ruleMap = parser.getRuleMap(), rule = ruleMap[ruleName], node = parser.parse(tokens, rule);
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                return parseTree;
            }
        }
    ]);
    return FlorenceView;
}(_view.default);
exports.default = FlorenceView;
_defineProperty(FlorenceView, "Lexer", _index.FlorenceLexer);
_defineProperty(FlorenceView, "Parser", _index.FlorenceParser);
_defineProperty(FlorenceView, "readOnly", false);
_defineProperty(FlorenceView, "initialContent", "Rule (Explosion)\n  Conclusion\n    \u03C1 |- R::P\n  ");
_defineProperty(FlorenceView, "defaultProperties", {
    className: "florence"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZmxvcmVuY2UuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEZsb3JlbmNlTGV4ZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuaW1wb3J0IHsgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5pbXBvcnQgeyBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORiB9IGZyb20gXCIuLi8uLi9mbG9yZW5jZS9wYXJzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvcmVuY2VWaWV3IGV4dGVuZHMgVmlldyB7XG4gIGdldFBhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbCxcbiAgICAgICAgYm5mID0gdGhpcy5nZXRCTkYoKTtcblxuICAgIGJuZiA9IGAke2JuZn0gJHtkZWZhdWx0Q3VzdG9tR3JhbW1hckJORn1gOyAvLy9cblxuICAgIGNvbnN0IHsgUGFyc2VyIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHBhcnNlciA9IFBhcnNlci5mcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZU1hcCA9IHBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBydWxlKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBMZXhlciA9IEZsb3JlbmNlTGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IEZsb3JlbmNlUGFyc2VyO1xuXG4gIHN0YXRpYyByZWFkT25seSA9IGZhbHNlO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBSdWxlIChFeHBsb3Npb24pXG4gIENvbmNsdXNpb25cbiAgICDPgSB8LSBSOjpQXG4gIGA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmbG9yZW5jZVwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkZsb3JlbmNlVmlldyIsImdldFBhcnNlVHJlZSIsInRva2VucyIsInBhcnNlVHJlZSIsImJuZiIsImdldEJORiIsImRlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwiUGFyc2VyIiwiY29uc3RydWN0b3IiLCJwYXJzZXIiLCJmcm9tQk5GIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwicnVsZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwiVmlldyIsIkxleGVyIiwiRmxvcmVuY2VMZXhlciIsIkZsb3JlbmNlUGFyc2VyIiwicmVhZE9ubHkiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWlCLElBQUEsTUFBYSxXQUFiLGFBQWEsQ0FBQTtBQUcxQixJQUFBLEtBQVMsa0NBQVQsU0FBUyxFQUFBO0FBRWMsSUFBQSxPQUF1QixXQUF2Qix1QkFBdUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEQsSUFBQSxBQUFNQSxZQUFZLGlCQ1Q5QixBRFNZOzs7YUFBTUEsWUFBWTs7Ozs7O1lBQy9CQyxHQUFZLEVBQVpBLGNBQVk7bUJBQVpBLFNBQUFBLFlBQVksQ0FBQ0MsTUFBTSxFQUFFO2dCQUNuQixJQUFJQyxTQUFTLEdBQUcsSUFBSSxFQUNoQkMsR0FBRyxHQUFHLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEFBQUM7Z0JBRXhCRCxHQUFHLEdBQUcsQUFBQyxFQUFBLENBQVNFLE1BQXVCLENBQTlCRixHQUFHLEVBQUMsR0FBQyxDQUEwQixDQUFBLE1BQUEsQ0FBeEJFLE9BQXVCLHdCQUFBLENBQUUsQ0FBQyxDQUFDLEdBQUc7Z0JBRTlDLElBQU0sQUFBRUMsTUFBTSxHQUFLLElBQUksQ0FBQ0MsV0FBVyxDQUEzQkQsTUFBTSxBQUFxQixFQUM3QkUsTUFBTSxHQUFHRixNQUFNLENBQUNHLE9BQU8sQ0FBQ04sR0FBRyxDQUFDLEVBQzVCTyxRQUFRLEdBQUcsSUFBSSxDQUFDQyxXQUFXLEVBQUUsRUFDN0JDLE9BQU8sR0FBR0osTUFBTSxDQUFDSyxVQUFVLEVBQUUsRUFDN0JDLElBQUksR0FBR0YsT0FBTyxDQUFDRixRQUFRLENBQUMsRUFDeEJLLElBQUksR0FBR1AsTUFBTSxDQUFDUSxLQUFLLENBQUNmLE1BQU0sRUFBRWEsSUFBSSxDQUFDLEFBQUM7Z0JBRXhDLElBQUlDLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ2pCYixTQUFTLEdBQUdhLElBQUksQ0FBQ0UsV0FBVyxDQUFDaEIsTUFBTSxDQUFDLENBQUM7aUJBQ3RDO2dCQUVELE9BQU9DLFNBQVMsQ0FBQzthQUNsQjs7OztDQWdCRixDQW5DeUNnQixLQUFJLFFBQUEsQ0FtQzdDO2tCQW5Db0JuQixZQUFZO0FBcUIvQixnQkFyQm1CQSxZQUFZLEVBcUJ4Qm9CLE9BQUssRUFBR0MsTUFBYSxjQUFBLENBQUM7QUFFN0IsZ0JBdkJtQnJCLFlBQVksRUF1QnhCTyxRQUFNLEVBQUdlLE1BQWMsZUFBQSxDQUFDO0FBRS9CLGdCQXpCbUJ0QixZQUFZLEVBeUJ4QnVCLFVBQVEsRUFBRyxLQUFLLENBQUM7QUFFeEIsZ0JBM0JtQnZCLFlBQVksRUEyQnhCd0IsZ0JBQWMsRUFBSSx3REFHekIsQ0FBRTtBQUVGLGdCQWhDbUJ4QixZQUFZLEVBZ0N4QnlCLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsVUFBVTtDQUN0QixDQUFDIn0=