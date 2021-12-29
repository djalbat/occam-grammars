"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _easyLayout = require("easy-layout");
var _columns = _interopRequireDefault(require("./div/columns"));
var _subHeading = _interopRequireDefault(require("./subHeading"));
var _sizeable = _interopRequireDefault(require("./div/sizeable"));
var _bnf = _interopRequireDefault(require("./textarea/bnf"));
var _ruleName = _interopRequireDefault(require("./input/ruleName"));
var _tokens = _interopRequireDefault(require("./textarea/tokens"));
var _content = _interopRequireDefault(require("./textarea/content"));
var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));
var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));
var _lexicalEntries = _interopRequireDefault(require("./textarea/lexicalEntries"));
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
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
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        return _super.apply(this, arguments);
    }
    _createClass(View, [
        {
            key: "getTokens",
            value: function getTokens() {
                var lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, lexer = this.Lexer.fromEntries(entries), content = this.getContent(), tokens = lexer.tokenise(content);
                return tokens;
            }
        },
        {
            key: "getParseTree",
            value: function getParseTree(tokens) {
                var parseTree = null;
                var bnf = this.getBNF(), parser = this.Parser.fromBNF(bnf), ruleName = this.getRuleName(), ruleMap = parser.getRuleMap(), rule = ruleMap[ruleName], node = parser.parse(tokens, rule);
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                return parseTree;
            }
        },
        {
            key: "keyUpHandler",
            value: function keyUpHandler() {
                try {
                    var tokens = this.getTokens(), parseTree = this.getParseTree(tokens);
                    this.setTokens(tokens);
                    this.setParseTree(parseTree);
                } catch (error) {
                    console.log(error);
                    this.clearTokens();
                    this.clearParseTree();
                }
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var keyUpHandler = this.keyUpHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(_columns.default, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                        onKeyUp: keyUpHandler,
                        readOnly: this.readOnly
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                        onKeyUp: keyUpHandler,
                        readOnly: this.readOnly
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Rule name"), /*#__PURE__*/ React.createElement(_ruleName.default, {
                        onKeyUp: keyUpHandler
                    }))), /*#__PURE__*/ React.createElement(_vertical.default, null), /*#__PURE__*/ React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Tokens"), /*#__PURE__*/ React.createElement(_tokens.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var bnf = this.Parser.bnf, entries = this.Lexer.entries, content = this.initialContent, lexicalEntries = entries; ///
                this.setBNF(bnf);
                this.setContent(content);
                this.setLexicalEntries(lexicalEntries);
                this.keyUpHandler();
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "tagName", "div");
exports.default = View;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBDb2x1bW5zRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5zXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgUnVsZU5hbWVJbnB1dCBmcm9tIFwiLi9pbnB1dC9ydWxlTmFtZVwiO1xuaW1wb3J0IFRva2Vuc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3Rva2Vuc1wiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgVmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWxcIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXRQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTWFwID0gcGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpLFxuICAgICAgICAgICAgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyVG9rZW5zKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gcmVhZE9ubHk9e3RoaXMucmVhZE9ubHl9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSByZWFkT25seT17dGhpcy5yZWFkT25seX0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBSdWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxSdWxlTmFtZUlucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgVG9rZW5zXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8VG9rZW5zVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBibmYgfSA9IHRoaXMuUGFyc2VyLFxuICAgICAgICAgIHsgZW50cmllcyB9ID0gdGhpcy5MZXhlcixcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5pbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcbn1cbiJdLCJuYW1lcyI6WyJWaWV3IiwiZ2V0VG9rZW5zIiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJsZXhlciIsIkxleGVyIiwiZnJvbUVudHJpZXMiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwiZ2V0UGFyc2VUcmVlIiwicGFyc2VUcmVlIiwiYm5mIiwiZ2V0Qk5GIiwicGFyc2VyIiwiUGFyc2VyIiwiZnJvbUJORiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGUiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsImtleVVwSGFuZGxlciIsInNldFRva2VucyIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyVG9rZW5zIiwiY2xlYXJQYXJzZVRyZWUiLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIm9uS2V5VXAiLCJyZWFkT25seSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbENvbnRlbnQiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJ0YWdOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVZLEdBQU0sQ0FBTixLQUFNO0FBQ0ssR0FBYSxDQUFiLFdBQWE7QUFFekIsR0FBZSxDQUFmLFFBQWU7QUFDZixHQUFjLENBQWQsV0FBYztBQUNiLEdBQWdCLENBQWhCLFNBQWdCO0FBQ2hCLEdBQWdCLENBQWhCLElBQWdCO0FBQ2QsR0FBa0IsQ0FBbEIsU0FBa0I7QUFDakIsR0FBbUIsQ0FBbkIsT0FBbUI7QUFDbEIsR0FBb0IsQ0FBcEIsUUFBb0I7QUFDbEIsR0FBc0IsQ0FBdEIsVUFBc0I7QUFDcEIsR0FBeUIsQ0FBekIsU0FBeUI7QUFDdEIsR0FBMkIsQ0FBM0IsZUFBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV6Q0EsSUFBSSxpQkFBVixRQUFRO2NBQUZBLElBQUk7OEJBQUpBLElBQUk7YUFBSkEsSUFBSTs4QkFBSkEsSUFBSTs7O2lCQUFKQSxJQUFJOztZQUN2QkMsR0FBUyxFQUFUQSxDQUFTO21CQUFUQSxRQUFRLENBQVJBLFNBQVMsR0FBRyxDQUFDO2dCQUNYLEdBQUssQ0FBQ0MsY0FBYyxHQUFHLElBQUksQ0FBQ0MsaUJBQWlCLElBQ3ZDQyxPQUFPLEdBQUdG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