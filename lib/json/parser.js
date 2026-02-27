"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JSONParser;
    }
});
const _occamparsers = require("occam-parsers");
const _bnf = /*#__PURE__*/ _interop_require_default(require("./bnf"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class JSONParser extends _occamparsers.CommonParser {
    static bnf = _bnf.default;
    static fromNothing() {
        return _occamparsers.CommonParser.fromNothing(JSONParser);
    }
    static fromBNF(bnf) {
        return _occamparsers.CommonParser.fromBNF(JSONParser, bnf);
    }
    static fromRules(rules) {
        return _occamparsers.CommonParser.fromRules(JSONParser, rules);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qc29uL3BhcnNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNPTlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21Ob3RoaW5nKEpTT05QYXJzZXIpOyB9XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbUJORihKU09OUGFyc2VyLCBibmYpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhKU09OUGFyc2VyLCBydWxlcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJKU09OUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiYm5mIiwiZnJvbU5vdGhpbmciLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIiwicnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7OEJBSlE7NERBRWI7Ozs7OztBQUVELE1BQU1BLG1CQUFtQkMsMEJBQVk7SUFDbEQsT0FBT0MsTUFBTUEsWUFBRyxDQUFDO0lBRWpCLE9BQU9DLGNBQWM7UUFBRSxPQUFPRiwwQkFBWSxDQUFDRSxXQUFXLENBQUNIO0lBQWE7SUFFcEUsT0FBT0ksUUFBUUYsR0FBRyxFQUFFO1FBQUUsT0FBT0QsMEJBQVksQ0FBQ0csT0FBTyxDQUFDSixZQUFZRTtJQUFNO0lBRXBFLE9BQU9HLFVBQVVDLEtBQUssRUFBRTtRQUFFLE9BQU9MLDBCQUFZLENBQUNJLFNBQVMsQ0FBQ0wsWUFBWU07SUFBUTtBQUM5RSJ9