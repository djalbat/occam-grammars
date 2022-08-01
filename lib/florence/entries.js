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
        "keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|Metalemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Types|Type|Variables|Variable|Constructors|Constructor|Combinators|Combinator|Comparators|Comparator|DependentTypes|DependentType|DisjointTypes|DisjointType|Metavariables|Metavariable|Let|for|from|by)\\b"
    },
    {
        "special": "^(?:,|=|::|:|\\|-|\\(|\\)|\\[|\\]|\\.\\.\\.)"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcImtleXdvcmRcIjogXCJeKD86UnVsZXxBeGlvbXxUaGVvcmVtfExlbW1hfENvbmplY3R1cmV8TWV0YWxlbW1hfE1ldGF0aGVvcmVtfFByZW1pc2VzfFByZW1pc2V8Q29uY2x1c2lvbnxQcm9vZnxUaGVyZWZvcmV8U3VwcG9zZXxUaGVufEhlbmNlfFR5cGVzfFR5cGV8VmFyaWFibGVzfFZhcmlhYmxlfENvbnN0cnVjdG9yc3xDb25zdHJ1Y3RvcnxDb21iaW5hdG9yc3xDb21iaW5hdG9yfENvbXBhcmF0b3JzfENvbXBhcmF0b3J8RGVwZW5kZW50VHlwZXN8RGVwZW5kZW50VHlwZXxEaXNqb2ludFR5cGVzfERpc2pvaW50VHlwZXxNZXRhdmFyaWFibGVzfE1ldGF2YXJpYWJsZXxMZXR8Zm9yfGZyb218YnkpXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXig/Oix8PXw6Onw6fFxcXFx8LXxcXFxcKHxcXFxcKXxcXFxcW3xcXFxcXXxcXFxcLlxcXFwuXFxcXC4pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwicmVzZXJ2ZWRcIjogXCJeKD86dW5kZWZpbmVkfGZyZWV8bm90fGlufGlzKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibmFtZVwiOiBcIl5bQS1aYS16zpEtzqnOsS3PiV8wLTldK1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc10rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzO1xyXG4iXSwibmFtZXMiOlsiZW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQW9CYixTQUF1Qjs7O2VBQXZCLFFBQXVCOzs7QUFsQnZCLElBQU1BLE9BQU8sR0FBRztJQUNkO1FBQ0UsU0FBUyxFQUFFLDBVQUEwVTtLQUN0VjtJQUNEO1FBQ0UsU0FBUyxFQUFFLDhDQUE4QztLQUMxRDtJQUNEO1FBQ0UsVUFBVSxFQUFFLGtDQUFrQztLQUMvQztJQUNEO1FBQ0UsTUFBTSxFQUFFLHNCQUFzQjtLQUMvQjtJQUNEO1FBQ0UsWUFBWSxFQUFFLFVBQVU7S0FDekI7Q0FDRixBQUFDO0lBRUYsUUFBdUIsR0FBUkEsT0FBTyJ9