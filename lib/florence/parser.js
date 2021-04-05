"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var bnfLexer = _occamLexers.BNFLexer.fromNothing(), bnfParser = _occamParsers.BNFParser.fromNothing();
var FlorenceParser = function(CommonParser) {
    _inherits(FlorenceParser, _occamParsers.CommonParser);
    function FlorenceParser() {
        _classCallCheck(this, FlorenceParser);
        return _possibleConstructorReturn(this, _getPrototypeOf(FlorenceParser).apply(this, arguments));
    }
    _createClass(FlorenceParser, null, [
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                bnf = "\n    \n      ".concat(bnf, "\n      \n      ").concat(_defaultCustomGrammar.termBNF, "\n      \n      ").concat(_defaultCustomGrammar.expressionBNF, "\n      \n      ").concat(_defaultCustomGrammar.statementBNF, "\n      \n      ").concat(_defaultCustomGrammar.metastatementBNF, "\n      \n    "); ///
                var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), florenceParser = FlorenceParser.fromRules(rules);
                return florenceParser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamParsers.CommonParser.fromRules(FlorenceParser, rules);
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                return FlorenceParser.fromBNF(_bnf.default);
            }
        }
    ]);
    return FlorenceParser;
}(_occamParsers.CommonParser);
_defineProperty(FlorenceParser, "bnf", _bnf.default);
exports.default = FlorenceParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgQk5GUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5cbmltcG9ydCB7IHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORiB9IGZyb20gXCIuL2RlZmF1bHRDdXN0b21HcmFtbWFyXCI7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgYm5mID0gYFxuICAgIFxuICAgICAgJHtibmZ9XG4gICAgICBcbiAgICAgICR7dGVybUJORn1cbiAgICAgIFxuICAgICAgJHtleHByZXNzaW9uQk5GfVxuICAgICAgXG4gICAgICAke3N0YXRlbWVudEJORn1cbiAgICAgIFxuICAgICAgJHttZXRhc3RhdGVtZW50Qk5GfVxuICAgICAgXG4gICAgYDsgLy8vXG5cbiAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhGbG9yZW5jZVBhcnNlciwgcnVsZXMpOyB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gRmxvcmVuY2VQYXJzZXIuZnJvbUJORihibmYpOyB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFYSxZQUFjO0lBQ2IsYUFBZTtJQUd6QixJQUFPO0lBRWdELHFCQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV6RixRQUFRLEdBUlcsWUFBYyxVQVFiLFdBQVcsSUFDL0IsU0FBUyxHQVJXLGFBQWUsV0FRYixXQUFXO0lBRWxCLGNBQWMsWUFBUyxZQUFZO2NBQW5DLGNBQWMsRUFWVCxhQUFlO2FBVXBCLGNBQWM7OEJBQWQsY0FBYztnRUFBZCxjQUFjOztpQkFBZCxjQUFjOztBQUcxQixlQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPLENBQUMsR0FBRztBQUNoQixtQkFBRyxJQUFJLGNBRUwsRUFFRSxNQUFPLENBRlAsR0FBRyxHQUFDLGdCQUVOLEdBRUUsTUFBYSxDQWZrRCxxQkFBd0IsV0FhL0UsZ0JBRVYsR0FFRSxNQUFZLENBakJtRCxxQkFBd0IsaUJBZXpFLGdCQUVoQixHQUVFLE1BQWdCLENBbkIrQyxxQkFBd0IsZ0JBaUIxRSxnQkFFZixHQUFtQixNQUVyQixDQXJCbUUscUJBQXdCLG9CQW1CdEUsY0FFckIsR0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRUEsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUNuQyxLQUFLLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQ3hDLGNBQWMsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUs7dUJBRTlDLGNBQWM7Ozs7QUFHaEIsZUFBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxDQUFDLEtBQUs7dUJBbkNFLGFBQWUsY0FtQ08sU0FBUyxDQUFDLGNBQWMsRUFBRSxLQUFLOzs7O0FBRXRFLGVBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7dUJBQVksY0FBYyxDQUFDLE9BQU8sQ0FsQ3RDLElBQU87Ozs7V0FPRixjQUFjO0VBVlQsYUFBZTtnQkFVcEIsY0FBYyxHQUMxQixHQUFHLEdBUkksSUFBTztrQkFPRixjQUFjIn0=