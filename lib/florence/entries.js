"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var entries = [
    {
        "keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|Metalemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Hence|Then|Type|Variable|Constructor|Combinator|DependentType|DisjointType|Metavariable|Statement|Context|for|from|by|construction)\\b"
    },
    {
        "special": "^(?:,|::|:|\\|-|\\(|\\)|\\[|\\]|\\.\\.\\.)"
    },
    {
        "reserved": "^(?:undefined|free|not|in|is)\\b"
    },
    {
        "name": "^[A-Za-zΑ-Ωα-ω_0-9]+"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcImtleXdvcmRcIjogXCJeKD86UnVsZXxBeGlvbXxUaGVvcmVtfExlbW1hfENvbmplY3R1cmV8TWV0YWxlbW1hfE1ldGF0aGVvcmVtfFByZW1pc2VzfFByZW1pc2V8Q29uY2x1c2lvbnxQcm9vZnxUaGVyZWZvcmV8U3VwcG9zZXxIZW5jZXxUaGVufFR5cGV8VmFyaWFibGV8Q29uc3RydWN0b3J8Q29tYmluYXRvcnxEZXBlbmRlbnRUeXBlfERpc2pvaW50VHlwZXxNZXRhdmFyaWFibGV8U3RhdGVtZW50fENvbnRleHR8Zm9yfGZyb218Ynl8Y29uc3RydWN0aW9uKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzosfDo6fDp8XFxcXHwtfFxcXFwofFxcXFwpfFxcXFxbfFxcXFxdfFxcXFwuXFxcXC5cXFxcLilcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJyZXNlcnZlZFwiOiBcIl4oPzp1bmRlZmluZWR8ZnJlZXxub3R8aW58aXMpXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJuYW1lXCI6IFwiXltBLVphLXrOkS3Oqc6xLc+JXzAtOV0rXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudHJpZXM7XHJcbiJdLCJuYW1lcyI6WyJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQkE7OztlQUFBOzs7QUFsQkEsSUFBTUEsVUFBVTtJQUNkO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLFlBQVk7SUFDZDtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7SUFFRCxXQUFlQSJ9