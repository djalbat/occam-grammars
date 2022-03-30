"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _bnf = _interopRequireDefault(require("./bnf"));
var _defaultCustomGrammar = require("./defaultCustomGrammar");
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
var FlorenceParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(FlorenceParser, CommonParser);
    var _super = _createSuper(FlorenceParser);
    function FlorenceParser() {
        _classCallCheck(this, FlorenceParser);
        return _super.apply(this, arguments);
    }
    _createClass(FlorenceParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var _$bnf = FlorenceParser.bnf;
                _$bnf = augmentBNF(_$bnf); ///
                return _occamParsers.CommonParser.fromBNF(FlorenceParser, _$bnf);
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                bnf = augmentBNF(bnf); ///
                return _occamParsers.CommonParser.fromBNF(FlorenceParser, bnf);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamParsers.CommonParser.fromRules(FlorenceParser, rules);
            }
        }
    ]);
    return FlorenceParser;
}(_occamParsers.CommonParser);
exports.default = FlorenceParser;
_defineProperty(FlorenceParser, "bnf", _bnf.default);
function augmentBNF(bnf) {
    bnf = "\n    \n      ".concat(bnf, "\n      \n      ").concat(_defaultCustomGrammar.termBNF, "\n      \n      ").concat(_defaultCustomGrammar.expressionBNF, "\n      \n      ").concat(_defaultCustomGrammar.statementBNF, "\n      \n      ").concat(_defaultCustomGrammar.metastatementBNF, "\n      \n    "); ///
    return bnf;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5cbmltcG9ydCB7IHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORiB9IGZyb20gXCIuL2RlZmF1bHRDdXN0b21HcmFtbWFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgbGV0IHsgYm5mIH0gPSBGbG9yZW5jZVBhcnNlcjtcblxuICAgIGJuZiA9IGF1Z21lbnRCTkYoYm5mKTsgIC8vL1xuXG4gICAgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tQk5GKEZsb3JlbmNlUGFyc2VyLCBibmYpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgYm5mID0gYXVnbWVudEJORihibmYpOyAgLy8vXG5cbiAgICByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21CTkYoRmxvcmVuY2VQYXJzZXIsIGJuZik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKEZsb3JlbmNlUGFyc2VyLCBydWxlcyk7IH1cbn1cblxuZnVuY3Rpb24gYXVnbWVudEJORihibmYpIHtcbiAgYm5mID0gYFxuICAgIFxuICAgICAgJHtibmZ9XG4gICAgICBcbiAgICAgICR7dGVybUJORn1cbiAgICAgIFxuICAgICAgJHtleHByZXNzaW9uQk5GfVxuICAgICAgXG4gICAgICAke3N0YXRlbWVudEJORn1cbiAgICAgIFxuICAgICAgJHttZXRhc3RhdGVtZW50Qk5GfVxuICAgICAgXG4gICAgYDsgLy8vXG5cbiAgcmV0dXJuIGJuZjtcbn0iXSwibmFtZXMiOlsiRmxvcmVuY2VQYXJzZXIiLCJmcm9tTm90aGluZyIsImJuZiIsImF1Z21lbnRCTkYiLCJDb21tb25QYXJzZXIiLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJ0ZXJtQk5GIiwiZXhwcmVzc2lvbkJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFZ0IsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBRTVCLElBQUEsSUFBTyxrQ0FBUCxPQUFPLEVBQUE7QUFFZ0QsSUFBQSxxQkFBd0IsV0FBeEIsd0JBQXdCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsQUFBTUEsY0FBYyxpQkFvQmhDLEFBcEJZOzs7YUFBTUEsY0FBYzs7Ozs7O1lBRzFCQyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsR0FBRztnQkFDbkIsSUFBSSxBQUFFQyxLQUFHLEdBQUtGLGNBQWMsQ0FBdEJFLEdBQUcsQUFBbUIsQUFBQztnQkFFN0JBLEtBQUcsR0FBR0MsVUFBVSxDQUFDRCxLQUFHLENBQUMsQ0FBQyxDQUFFLEdBQUc7Z0JBRTNCLE9BQU9FLGFBQVksYUFBQSxDQUFDQyxPQUFPLENBQUNMLGNBQWMsRUFBRUUsS0FBRyxDQUFDLENBQUM7YUFDbEQ7OztZQUVNRyxHQUFPLEVBQVBBLFNBQU87bUJBQWQsU0FBT0EsT0FBTyxDQUFDSCxHQUFHLEVBQUU7Z0JBQ2xCQSxHQUFHLEdBQUdDLFVBQVUsQ0FBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBRSxHQUFHO2dCQUUzQixPQUFPRSxhQUFZLGFBQUEsQ0FBQ0MsT0FBTyxDQUFDTCxjQUFjLEVBQUVFLEdBQUcsQ0FBQyxDQUFDO2FBQ2xEOzs7WUFFTUksR0FBUyxFQUFUQSxXQUFTO21CQUFoQixTQUFPQSxTQUFTLENBQUNDLEtBQUssRUFBRTtnQkFBRSxPQUFPSCxhQUFZLGFBQUEsQ0FBQ0UsU0FBUyxDQUFDTixjQUFjLEVBQUVPLEtBQUssQ0FBQyxDQUFDO2FBQUU7Ozs7Q0FDbEYsQ0FsQjJDSCxhQUFZLGFBQUEsQ0FrQnZEO2tCQWxCb0JKLGNBQWM7QUFDakMsZ0JBRG1CQSxjQUFjLEVBQzFCRSxLQUFHLEVBQUdBLElBQUcsUUFBQSxDQUFDO0FBbUJuQixTQUFTQyxVQUFVLENBQUNELEdBQUcsRUFBRTtJQUN2QkEsR0FBRyxHQUFHLEFBQUMsZ0JBRUgsQ0FFRU0sTUFBTyxDQUZQTixHQUFHLEVBQUMsa0JBRU4sQ0FBVSxDQUVSTyxNQUFhLENBRmJELHFCQUFPLFFBQUEsRUFBQyxrQkFFVixDQUFnQixDQUVkRSxNQUFZLENBRlpELHFCQUFhLGNBQUEsRUFBQyxrQkFFaEIsQ0FBZSxDQUViRSxNQUFnQixDQUZoQkQscUJBQVksYUFBQSxFQUFDLGtCQUVmLENBQW1CLENBQUEsTUFFckIsQ0FGSUMscUJBQWdCLGlCQUFBLEVBQUMsZ0JBRXJCLENBQUMsQ0FBQyxDQUFDLEdBQUc7SUFFUixPQUFPVCxHQUFHLENBQUM7Q0FDWiJ9