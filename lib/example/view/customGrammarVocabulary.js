"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CustomGrammarVocabularyView;
    }
});
var _index = require("../../index");
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var CustomGrammarVocabularyView = /*#__PURE__*/ function(View) {
    _inherits(CustomGrammarVocabularyView, View);
    function CustomGrammarVocabularyView() {
        _class_call_check(this, CustomGrammarVocabularyView);
        return _call_super(this, CustomGrammarVocabularyView, arguments);
    }
    return CustomGrammarVocabularyView;
}(_view.default);
_define_property(CustomGrammarVocabularyView, "Lexer", _index.CustomGrammarVocabularyLexer);
_define_property(CustomGrammarVocabularyView, "Parser", _index.CustomGrammarVocabularyParser);
_define_property(CustomGrammarVocabularyView, "readOnly", false);
_define_property(CustomGrammarVocabularyView, "initialContent", "adsf\n\naadf\n");
_define_property(CustomGrammarVocabularyView, "defaultProperties", {
    className: "custom-grammar-vocabulary"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hclZvY2FidWxhcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXJWb2NhYnVsYXJ5TGV4ZXIsIEN1c3RvbUdyYW1tYXJWb2NhYnVsYXJ5UGFyc2VyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hclZvY2FidWxhcnlWaWV3IGV4dGVuZHMgVmlldyB7XG4gIHN0YXRpYyBMZXhlciA9IEN1c3RvbUdyYW1tYXJWb2NhYnVsYXJ5TGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IEN1c3RvbUdyYW1tYXJWb2NhYnVsYXJ5UGFyc2VyO1xuXG4gIHN0YXRpYyByZWFkT25seSA9IGZhbHNlO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBhZHNmXG5cbmFhZGZcbmA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjdXN0b20tZ3JhbW1hci12b2NhYnVsYXJ5XCIsXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hclZvY2FidWxhcnlWaWV3IiwiVmlldyIsIkxleGVyIiwiQ3VzdG9tR3JhbW1hclZvY2FidWxhcnlMZXhlciIsIlBhcnNlciIsIkN1c3RvbUdyYW1tYXJWb2NhYnVsYXJ5UGFyc2VyIiwicmVhZE9ubHkiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztxQkFKdUQ7MkRBRTNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRixJQUFBLEFBQU1BLDRDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztXQUFBQTtFQUFvQ0MsYUFBSTtBQUMzRCxpQkFEbUJELDZCQUNaRSxTQUFRQyxtQ0FBNEI7QUFFM0MsaUJBSG1CSCw2QkFHWkksVUFBU0Msb0NBQTZCO0FBRTdDLGlCQUxtQkwsNkJBS1pNLFlBQVc7QUFFbEIsaUJBUG1CTiw2QkFPWk8sa0JBQWlCO0FBS3hCLGlCQVptQlAsNkJBWVpRLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=