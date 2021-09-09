"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _singleLine = _interopRequireDefault(require("./token/nonSignificant/comment/singleLine"));
var _endOf = _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/endOf"));
var _startOf = _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/startOf"));
var _middleOf = _interopRequireDefault(require("./token/nonSignificant/comment/multiLine/middleOf"));
var _entries = _interopRequireDefault(require("./entries"));
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var FlorenceLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(FlorenceLexer, CommonLexer);
    function FlorenceLexer() {
        _classCallCheck(this, FlorenceLexer);
        return _possibleConstructorReturn(this, _getPrototypeOf(FlorenceLexer).apply(this, arguments));
    }
    _createClass(FlorenceLexer, [
        {
            key: "tokeniseEndOfLines",
            value: function tokeniseEndOfLines(content) {
                return _get(_getPrototypeOf(FlorenceLexer.prototype), "tokeniseEndOfLines", this).call(this, content, _occamLexers.EndOfLineSignificantToken);
            }
        },
        {
            key: "matchBrokenComment",
            value: function matchBrokenComment(content, inComment) {
                return null;
            }
        },
        {
            key: "matchSingleLineComment",
            value: function matchSingleLineComment(content, inComment) {
                var singleLineCommentToken = inComment ? null : _singleLine.default.match(content);
                return singleLineCommentToken;
            }
        },
        {
            key: "matchMultiLineCommentInComment",
            value: function matchMultiLineCommentInComment(content, inComment) {
                var multiLinCommentToken = inComment ? _endOf.default.match(content) || _middleOf.default.match(content) : null;
                return multiLinCommentToken;
            }
        },
        {
            key: "matchMultiLineCommentNotInComment",
            value: function matchMultiLineCommentNotInComment(content, inComment) {
                var multiLinCommentToken = inComment ? null : _startOf.default.match(content);
                return multiLinCommentToken;
            }
        },
        {
            key: "matchRegularExpression",
            value: function matchRegularExpression(content) {
                return null;
            }
        },
        {
            key: "matchSinglyQuotedStringLiteral",
            value: function matchSinglyQuotedStringLiteral(content) {
                return null;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return FlorenceLexer.fromEntries(_entries.default);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamLexers.CommonLexer.fromEntries(FlorenceLexer, entries);
            }
        }
    ]);
    return FlorenceLexer;
}(_occamLexers.CommonLexer);
_defineProperty(FlorenceLexer, "entries", _entries.default);
exports.default = FlorenceLexer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9sZXhlci5qcyJdLCJuYW1lcyI6WyJDb21tb25MZXhlciIsIkVuZE9mTGluZVNpZ25pZmljYW50VG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJlbnRyaWVzIiwiRmxvcmVuY2VMZXhlciIsInRva2VuaXNlRW5kT2ZMaW5lcyIsImNvbnRlbnQiLCJtYXRjaEJyb2tlbkNvbW1lbnQiLCJpbkNvbW1lbnQiLCJtYXRjaFNpbmdsZUxpbmVDb21tZW50Iiwic2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIm1hdGNoIiwibWF0Y2hNdWx0aUxpbmVDb21tZW50SW5Db21tZW50IiwibXVsdGlMaW5Db21tZW50VG9rZW4iLCJtYXRjaE11bHRpTGluZUNvbW1lbnROb3RJbkNvbW1lbnQiLCJtYXRjaFJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsIiwiZnJvbU5vdGhpbmciLCJmcm9tRW50cmllcyJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFZ0IsR0FBYyxDQUFkLFlBQWM7QUFHUCxHQUEyQyxDQUEzQyxXQUEyQztBQUN2QyxHQUFnRCxDQUFoRCxNQUFnRDtBQUM5QyxHQUFrRCxDQUFsRCxRQUFrRDtBQUNqRCxHQUFtRCxDQUFuRCxTQUFtRDtBQUV6RSxHQUFXLENBQVgsUUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVYsYUFBYSxpQkFBbkIsUUFBUTtjQUFGLGFBQWE7YUFBYixhQUFhOzhCQUFiLGFBQWE7Z0VBQWIsYUFBYTs7aUJBQWIsYUFBYTs7WUFDaEMsR0FBa0IsR0FBbEIsa0JBQWtCO21CQUFsQixRQUFRLENBQVIsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxzQkFEakIsYUFBYSxjQUNXLGtCQUFrQixHQUF4QixJQUFLLGFBQW9CLE9BQU8sRUFYM0MsWUFBYztZQVcyRCxDQUFDOzs7WUFFcEcsR0FBa0IsR0FBbEIsa0JBQWtCO21CQUFsQixRQUFRLENBQVIsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQUUsQ0FBQzs7O1lBRXZELEdBQXNCLEdBQXRCLHNCQUFzQjttQkFBdEIsUUFBUSxDQUFSLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFDMUMsR0FBSyxDQUFDLHNCQUFzQixHQUFHLFNBQVMsR0FDUCxJQUFJLEdBZE4sV0FBMkMsU0FlaEIsS0FBSyxDQUFDLE9BQU87Z0JBRXZFLE1BQU0sQ0FBQyxzQkFBc0I7WUFDL0IsQ0FBQzs7O1lBRUQsR0FBOEIsR0FBOUIsOEJBQThCO21CQUE5QixRQUFRLENBQVIsOEJBQThCLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO2dCQUNsRCxHQUFLLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxHQXBCSCxNQUFnRCxTQXFCekIsS0FBSyxDQUFDLE9BQU8sS0FuQmpDLFNBQW1ELFNBbUJpQixLQUFLLENBQUMsT0FBTyxJQUN0RixJQUFJO2dCQUVyQyxNQUFNLENBQUMsb0JBQW9CO1lBQzdCLENBQUM7OztZQUVELEdBQWlDLEdBQWpDLGlDQUFpQzttQkFBakMsUUFBUSxDQUFSLGlDQUFpQyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFDckQsR0FBSyxDQUFDLG9CQUFvQixHQUFHLFNBQVMsR0FDUCxJQUFJLEdBNUJFLFFBQWtELFNBNkJ6QixLQUFLLENBQUMsT0FBTztnQkFFM0UsTUFBTSxDQUFDLG9CQUFvQjtZQUM3QixDQUFDOzs7WUFFRCxHQUFzQixHQUF0QixzQkFBc0I7bUJBQXRCLFFBQVEsQ0FBUixzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSTtZQUFFLENBQUM7OztZQUVoRCxHQUE4QixHQUE5Qiw4QkFBOEI7bUJBQTlCLFFBQVEsQ0FBUiw4QkFBOEIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSTtZQUFFLENBQUM7Ozs7WUFJakQsR0FBVyxHQUFYLFdBQVc7bUJBQWxCLFFBQVEsQ0FBRCxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FyQ3JDLFFBQVc7WUFxQ3FDLENBQUM7OztZQUU1RCxHQUFXLEdBQVgsV0FBVzttQkFBbEIsUUFBUSxDQUFELFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBL0NWLFlBQWMsYUErQ1MsV0FBVyxDQUFDLGFBQWEsRUFBRSxPQUFPO1lBQUcsQ0FBQzs7O1dBckNwRSxhQUFhO0VBVk4sWUFBYztnQkFVckIsYUFBYSxHQWlDekIsT0FBTyxHQW5DSSxRQUFXO2tCQUVWLGFBQWEifQ==