"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CustomGrammarBNFParser;
    }
});
var _occamparsers = require("occam-parsers");
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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
var bnf = _occamparsers.BNFParser.bnf;
var CustomGrammarBNFParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(CustomGrammarBNFParser, CommonParser);
    function CustomGrammarBNFParser() {
        _class_call_check(this, CustomGrammarBNFParser);
        return _call_super(this, CustomGrammarBNFParser, arguments);
    }
    _create_class(CustomGrammarBNFParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamparsers.CommonParser.fromNothing(CustomGrammarBNFParser);
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                return _occamparsers.CommonParser.fromBNF(CustomGrammarBNFParser, bnf);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamparsers.CommonParser.fromRules(CustomGrammarBNFParser, rules);
            }
        }
    ]);
    return CustomGrammarBNFParser;
}(_occamparsers.CommonParser);
_define_property(CustomGrammarBNFParser, "bnf", bnf);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyQk5GL3BhcnNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk5GUGFyc2VyLCBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCB7IGJuZiB9ID0gQk5GUGFyc2VyO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyQk5GUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbU5vdGhpbmcoQ3VzdG9tR3JhbW1hckJORlBhcnNlcik7IH1cblxuICBzdGF0aWMgZnJvbUJORihibmYpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tQk5GKEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIsIGJuZik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKEN1c3RvbUdyYW1tYXJCTkZQYXJzZXIsIHJ1bGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXJCTkZQYXJzZXIiLCJibmYiLCJCTkZQYXJzZXIiLCJmcm9tTm90aGluZyIsIkNvbW1vblBhcnNlciIsImZyb21CTkYiLCJmcm9tUnVsZXMiLCJydWxlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7NEJBSm1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBTSxBQUFFQyxNQUFRQyx1QkFBUyxDQUFqQkQ7QUFFTyxJQUFBLEFBQU1ELHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFHWkcsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLDBCQUFZLENBQUNELFdBQVcsQ0FIbkNIO1lBRzZEOzs7WUFFekVLLEtBQUFBO21CQUFQLFNBQU9BLFFBQVFKLEdBQUc7Z0JBQUksT0FBT0csMEJBQVksQ0FBQ0MsT0FBTyxDQUw5Qkwsd0JBS3VEQztZQUFNOzs7WUFFekVLLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVDLEtBQUs7Z0JBQUksT0FBT0gsMEJBQVksQ0FBQ0UsU0FBUyxDQVBwQ04sd0JBTzZETztZQUFROzs7V0FQckVQO0VBQStCSSwwQkFBWTtBQUM5RCxpQkFEbUJKLHdCQUNaQyxPQUFNQSJ9