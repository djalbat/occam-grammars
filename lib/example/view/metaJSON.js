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
var MetaJSONView = /*#__PURE__*/ function(View) {
    _inherits(MetaJSONView, View);
    var _super = _createSuper(MetaJSONView);
    function MetaJSONView() {
        _classCallCheck(this, MetaJSONView);
        return _super.apply(this, arguments);
    }
    return MetaJSONView;
}(_view.default);
exports.default = MetaJSONView;
_defineProperty(MetaJSONView, "Lexer", _index.MetaJSONLexer);
_defineProperty(MetaJSONView, "Parser", _index.MetaJSONParser);
_defineProperty(MetaJSONView, "readOnly", false);
_defineProperty(MetaJSONView, "initialContent", "{\n  \"repository\": \"https://github.com/djalbat/strings\",\n  \"dependencies\": [\n    \"natural-numbers\",\n    \"arithmetic\"\n  ]\n}\n");
_defineProperty(MetaJSONView, "defaultProperties", {
    className: "meta-json"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvbWV0YUpTT04uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1ldGFKU09OTGV4ZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuaW1wb3J0IHsgTWV0YUpTT05QYXJzZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhSlNPTlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIExleGVyID0gTWV0YUpTT05MZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gTWV0YUpTT05QYXJzZXI7XG5cbiAgc3RhdGljIHJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYHtcbiAgXCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvc3RyaW5nc1wiLFxuICBcImRlcGVuZGVuY2llc1wiOiBbXG4gICAgXCJuYXR1cmFsLW51bWJlcnNcIixcbiAgICBcImFyaXRobWV0aWNcIlxuICBdXG59XG5gO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWV0YS1qc29uXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTWV0YUpTT05WaWV3IiwiVmlldyIsIkxleGVyIiwiTWV0YUpTT05MZXhlciIsIlBhcnNlciIsIk1ldGFKU09OUGFyc2VyIiwicmVhZE9ubHkiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRThCLElBQUEsTUFBYSxXQUFiLGFBQWEsQ0FBQTtBQUcxQixJQUFBLEtBQVMsa0NBQVQsU0FBUyxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBTDFCOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBT2UsSUFBQSxBQUFNQSxZQUFZLGlCQ1A5QixBRE9ZO2lDQVBmOzthQU9xQkEsWUFBWTsyQ0FQakM7Ozs7Q0EwQkMsQ0FuQnlDQyxLQUFJLFNBbUI3QztrQkFuQm9CRCxZQUFZLEFBUGpDO0FBUUUsZ0JBRG1CQSxZQUFZLEVBQ3hCRSxPQUFLLEVBQUdDLE1BQWEsZUFBQyxBQVIvQjtBQVVFLGdCQUhtQkgsWUFBWSxFQUd4QkksUUFBTSxFQUFHQyxNQUFjLGdCQUFDLEFBVmpDO0FBWUUsZ0JBTG1CTCxZQUFZLEVBS3hCTSxVQUFRLEVBQUcsS0FBSyxDQUFDLEFBWjFCO0FBY0UsZ0JBUG1CTixZQUFZLEVBT3hCTyxnQkFBYyxFQUFJLDZJQU8zQixDQUFFLEFBckJGO0FBdUJFLGdCQWhCbUJQLFlBQVksRUFnQnhCUSxtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLFdBQVc7Q0FDdkIsQ0FBQyxBQXpCSiJ9