"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return State;
    }
});
var _occamparsers = require("occam-parsers");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var State = /*#__PURE__*/ function(StateBase) {
    _inherits(State, StateBase);
    var _super = _create_super(State);
    function State(index, tokens, ruleMap, precedence, startOfContent) {
        _class_call_check(this, State);
        var _this;
        _this = _super.call(this, index, tokens, ruleMap, precedence, startOfContent);
        _this.startOfContent = startOfContent;
        return _this;
    }
    _create_class(State, [
        {
            key: "isAtStartOfContent",
            value: function isAtStartOfContent() {
                var atStartOfContent = false;
                if (this.startOfContent) {
                    atStartOfContent = _get(_get_prototype_of(State.prototype), "isAtStartOfContent", this).call(this);
                }
                return atStartOfContent;
            }
        }
    ], [
        {
            key: "fromTokensAndRuleMap",
            value: function fromTokensAndRuleMap(tokens, ruleMap, startOfContent) {
                return _occamparsers.State.fromTokensAndRuleMap(State, tokens, ruleMap, startOfContent);
            }
        }
    ]);
    return State;
}(_occamparsers.State);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU3RhdGUgYXMgU3RhdGVCYXNlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUgZXh0ZW5kcyBTdGF0ZUJhc2Uge1xuICBjb25zdHJ1Y3RvcihpbmRleCwgdG9rZW5zLCBydWxlTWFwLCBwcmVjZWRlbmNlLCBzdGFydE9mQ29udGVudCkge1xuICAgIHN1cGVyKGluZGV4LCB0b2tlbnMsIHJ1bGVNYXAsIHByZWNlZGVuY2UsIHN0YXJ0T2ZDb250ZW50KTtcblxuICAgIHRoaXMuc3RhcnRPZkNvbnRlbnQgPSBzdGFydE9mQ29udGVudDtcbiAgfVxuXG4gIGlzQXRTdGFydE9mQ29udGVudCgpIHtcbiAgICBsZXQgYXRTdGFydE9mQ29udGVudCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhcnRPZkNvbnRlbnQpIHtcbiAgICAgIGF0U3RhcnRPZkNvbnRlbnQgPSBzdXBlci5pc0F0U3RhcnRPZkNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXRTdGFydE9mQ29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9rZW5zQW5kUnVsZU1hcCh0b2tlbnMsIHJ1bGVNYXAsIHN0YXJ0T2ZDb250ZW50KSB7IHJldHVybiBTdGF0ZUJhc2UuZnJvbVRva2Vuc0FuZFJ1bGVNYXAoU3RhdGUsIHRva2VucywgcnVsZU1hcCwgc3RhcnRPZkNvbnRlbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiU3RhdGUiLCJpbmRleCIsInRva2VucyIsInJ1bGVNYXAiLCJwcmVjZWRlbmNlIiwic3RhcnRPZkNvbnRlbnQiLCJpc0F0U3RhcnRPZkNvbnRlbnQiLCJhdFN0YXJ0T2ZDb250ZW50IiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJTdGF0ZUJhc2UiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzRCQUZjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQUEsQUFBTUEsc0JBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEsTUFDUEMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxjQUFjO2dDQUQzQ0w7O2tDQUVYQyxPQUFPQyxRQUFRQyxTQUFTQyxZQUFZQztRQUUxQyxNQUFLQSxjQUFjLEdBQUdBOzs7a0JBSkxMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBSSxJQUFJLENBQUNGLGNBQWMsRUFBRTtvQkFDdkJFLG1CQUFtQix1QkFYSlAsa0JBV1VNLHNCQUFOLElBQUs7Z0JBQzFCO2dCQUVBLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCTixNQUFNLEVBQUVDLE9BQU8sRUFBRUUsY0FBYztnQkFBSSxPQUFPSSxtQkFBUyxDQUFDRCxvQkFBb0IsQ0FqQmpGUixPQWlCeUZFLFFBQVFDLFNBQVNFO1lBQWlCOzs7V0FqQjNITDtFQUFjUyxtQkFBUyJ9