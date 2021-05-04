"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var entries = [
    {
        "special": "^(?:,|=|::|:|\\|-|\\(|\\))|\\[|\\]|\\.\\.\\."
    },
    {
        "keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|Metalemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Types|Type|Operators|Operator|Variables|Variable|Constructors|Constructor|DependentTypes|DependentType|DisjointTypes|DisjointType|Metavariables|Metavariable|Abbreviations|Abbreviation|Statement|Context|Let|for|from|by)\\b"
    },
    {
        "reserved": "^(?:undefined|free|not|in|is)\\b"
    },
    {
        "name": "^[A-Za-z\u{391}-\u{3a9}\u{3b1}-\u{3c9}_0-9]+"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCJeKD86LHw9fDo6fDp8XFxcXHwtfFxcXFwofFxcXFwpKXxcXFxcW3xcXFxcXXxcXFxcLlxcXFwuXFxcXC5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJrZXl3b3JkXCI6IFwiXig/OlJ1bGV8QXhpb218VGhlb3JlbXxMZW1tYXxDb25qZWN0dXJlfE1ldGFsZW1tYXxNZXRhdGhlb3JlbXxQcmVtaXNlc3xQcmVtaXNlfENvbmNsdXNpb258UHJvb2Z8VGhlcmVmb3JlfFN1cHBvc2V8VGhlbnxIZW5jZXxUeXBlc3xUeXBlfE9wZXJhdG9yc3xPcGVyYXRvcnxWYXJpYWJsZXN8VmFyaWFibGV8Q29uc3RydWN0b3JzfENvbnN0cnVjdG9yfERlcGVuZGVudFR5cGVzfERlcGVuZGVudFR5cGV8RGlzam9pbnRUeXBlc3xEaXNqb2ludFR5cGV8TWV0YXZhcmlhYmxlc3xNZXRhdmFyaWFibGV8QWJicmV2aWF0aW9uc3xBYmJyZXZpYXRpb258U3RhdGVtZW50fENvbnRleHR8TGV0fGZvcnxmcm9tfGJ5KVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwicmVzZXJ2ZWRcIjogXCJeKD86dW5kZWZpbmVkfGZyZWV8bm90fGlufGlzKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibmFtZVwiOiBcIl5bQS1aYS16zpEtzqnOsS3PiV8wLTldK1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc10rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzO1xyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFTixPQUFPOztTQUVULE9BQVMsSUFBRSw0Q0FBOEM7OztTQUd6RCxPQUFTLElBQUUsMFZBQTRWOzs7U0FHdlcsUUFBVSxJQUFFLGdDQUFrQzs7O1NBRzlDLElBQU0sSUFBRSw0Q0FBc0I7OztTQUc5QixVQUFZLElBQUUsUUFBVTs7O2VBSWIsT0FBTyJ9