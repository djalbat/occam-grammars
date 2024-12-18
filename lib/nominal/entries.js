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
        "special": "^(?:,|:)"
    },
    {
        "bracket": "^(?:\\(|\\))"
    },
    {
        "primary-keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|MetaLemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Hence|Then|Type|Properties|Property|Variable|Constructor|Combinator|DependentType|DisjointType|Metavariable)\\b"
    },
    {
        "secondary-keyword": "^(?:is|in|the|an|a|of|by|from|for)\\b"
    },
    {
        "meta-type": "^(?:Statement|Reference|Frame)\\b"
    },
    {
        "name": "^[A-Za-zΑ-Ωα-ω][A-Za-zΑ-Ωα-ω_0-9]*"
    },
    {
        "unassigned": "^[^\\s\\(\\):,]+"
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzosfDopXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiYnJhY2tldFwiOiBcIl4oPzpcXFxcKHxcXFxcKSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJwcmltYXJ5LWtleXdvcmRcIjogXCJeKD86UnVsZXxBeGlvbXxUaGVvcmVtfExlbW1hfENvbmplY3R1cmV8TWV0YUxlbW1hfE1ldGF0aGVvcmVtfFByZW1pc2VzfFByZW1pc2V8Q29uY2x1c2lvbnxQcm9vZnxUaGVyZWZvcmV8U3VwcG9zZXxIZW5jZXxUaGVufFR5cGV8UHJvcGVydGllc3xQcm9wZXJ0eXxWYXJpYWJsZXxDb25zdHJ1Y3RvcnxDb21iaW5hdG9yfERlcGVuZGVudFR5cGV8RGlzam9pbnRUeXBlfE1ldGF2YXJpYWJsZSlcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNlY29uZGFyeS1rZXl3b3JkXCI6IFwiXig/OmlzfGlufHRoZXxhbnxhfG9mfGJ5fGZyb218Zm9yKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibWV0YS10eXBlXCI6IFwiXig/OlN0YXRlbWVudHxSZWZlcmVuY2V8RnJhbWUpXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJuYW1lXCI6IFwiXltBLVphLXrOkS3Oqc6xLc+JXVtBLVphLXrOkS3Oqc6xLc+JXzAtOV0qXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXFxcXChcXFxcKTosXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudHJpZXM7XHJcbiJdLCJuYW1lcyI6WyJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwQkE7OztlQUFBOzs7QUF4QkEsSUFBTUEsVUFBVTtJQUNkO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLG1CQUFtQjtJQUNyQjtJQUNBO1FBQ0UscUJBQXFCO0lBQ3ZCO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsY0FBYztJQUNoQjtDQUNEO0lBRUQsV0FBZUEifQ==