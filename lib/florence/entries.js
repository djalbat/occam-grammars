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
        "special": "^(?:,|=|::|:|\\|-|\\(|\\)|\\[|\\]|\\.\\.\\.)"
    },
    {
        "keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|Metalemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Types|Type|Variables|Variable|Constructors|Constructor|Combinators|Combinator|Comparators|Comparator|DependentTypes|DependentType|DisjointTypes|DisjointType|Metavariables|Metavariable|Let|for|from|by)\\b"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCJeKD86LHw9fDo6fDp8XFxcXHwtfFxcXFwofFxcXFwpfFxcXFxbfFxcXFxdfFxcXFwuXFxcXC5cXFxcLilcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJrZXl3b3JkXCI6IFwiXig/OlJ1bGV8QXhpb218VGhlb3JlbXxMZW1tYXxDb25qZWN0dXJlfE1ldGFsZW1tYXxNZXRhdGhlb3JlbXxQcmVtaXNlc3xQcmVtaXNlfENvbmNsdXNpb258UHJvb2Z8VGhlcmVmb3JlfFN1cHBvc2V8VGhlbnxIZW5jZXxUeXBlc3xUeXBlfFZhcmlhYmxlc3xWYXJpYWJsZXxDb25zdHJ1Y3RvcnN8Q29uc3RydWN0b3J8Q29tYmluYXRvcnN8Q29tYmluYXRvcnxDb21wYXJhdG9yc3xDb21wYXJhdG9yfERlcGVuZGVudFR5cGVzfERlcGVuZGVudFR5cGV8RGlzam9pbnRUeXBlc3xEaXNqb2ludFR5cGV8TWV0YXZhcmlhYmxlc3xNZXRhdmFyaWFibGV8TGV0fGZvcnxmcm9tfGJ5KVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwicmVzZXJ2ZWRcIjogXCJeKD86dW5kZWZpbmVkfGZyZWV8bm90fGlufGlzKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibmFtZVwiOiBcIl5bQS1aYS16zpEtzqnOsS3PiV8wLTldK1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc10rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzO1xyXG4iXSwibmFtZXMiOlsiZW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQW9CYixTQUF1Qjs7O2VBQXZCLFFBQXVCOzs7QUFsQnZCLElBQU1BLE9BQU8sR0FBRztJQUNkO1FBQ0UsU0FBUyxFQUFFLDhDQUE4QztLQUMxRDtJQUNEO1FBQ0UsU0FBUyxFQUFFLDBVQUEwVTtLQUN0VjtJQUNEO1FBQ0UsVUFBVSxFQUFFLGtDQUFrQztLQUMvQztJQUNEO1FBQ0UsTUFBTSxFQUFFLHNCQUFzQjtLQUMvQjtJQUNEO1FBQ0UsWUFBWSxFQUFFLFVBQVU7S0FDekI7Q0FDRixBQUFDO0lBRUYsUUFBdUIsR0FBUkEsT0FBTyJ9