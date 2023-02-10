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
        "special": "^(?:,|::|:|\\|-|\\(|\\)|\\[|\\]|\\.\\.\\.)"
    },
    {
        "keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|Metalemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Hence|Then|Type|Variable|Constructor|Combinator|DependentType|DisjointType|Metavariable|from|by|undefined|free|not|in|is)\\b"
    },
    {
        "meta-type": "^(?:Statement)\\b"
    },
    {
        "name": "^[A-Za-zΑ-Ωα-ω_0-9]+"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCJeKD86LHw6Onw6fFxcXFx8LXxcXFxcKHxcXFxcKXxcXFxcW3xcXFxcXXxcXFxcLlxcXFwuXFxcXC4pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwia2V5d29yZFwiOiBcIl4oPzpSdWxlfEF4aW9tfFRoZW9yZW18TGVtbWF8Q29uamVjdHVyZXxNZXRhbGVtbWF8TWV0YXRoZW9yZW18UHJlbWlzZXN8UHJlbWlzZXxDb25jbHVzaW9ufFByb29mfFRoZXJlZm9yZXxTdXBwb3NlfEhlbmNlfFRoZW58VHlwZXxWYXJpYWJsZXxDb25zdHJ1Y3RvcnxDb21iaW5hdG9yfERlcGVuZGVudFR5cGV8RGlzam9pbnRUeXBlfE1ldGF2YXJpYWJsZXxmcm9tfGJ5fHVuZGVmaW5lZHxmcmVlfG5vdHxpbnxpcylcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm1ldGEtdHlwZVwiOiBcIl4oPzpTdGF0ZW1lbnQpXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJuYW1lXCI6IFwiXltBLVphLXrOkS3Oqc6xLc+JXzAtOV0rXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudHJpZXM7XHJcbiJdLCJuYW1lcyI6WyJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQkE7OztlQUFBOzs7QUFsQkEsSUFBTUEsVUFBVTtJQUNkO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLGFBQWE7SUFDZjtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7SUFFRCxXQUFlQSJ9