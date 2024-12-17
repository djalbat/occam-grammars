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
        "special": "^(?::|,)"
    },
    {
        "bracket": "^(?:\\(|\\))"
    },
    {
        "primary-keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|MetaLemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Hence|Then|Type|Properties|Property|Variable|Constructor|Combinator|DependentType|DisjointType|Metavariable)\\b"
    },
    {
        "secondary-keyword": "^(?:is|in|an|a|of|by|from)\\b"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzo6fCwpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiYnJhY2tldFwiOiBcIl4oPzpcXFxcKHxcXFxcKSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJwcmltYXJ5LWtleXdvcmRcIjogXCJeKD86UnVsZXxBeGlvbXxUaGVvcmVtfExlbW1hfENvbmplY3R1cmV8TWV0YUxlbW1hfE1ldGF0aGVvcmVtfFByZW1pc2VzfFByZW1pc2V8Q29uY2x1c2lvbnxQcm9vZnxUaGVyZWZvcmV8U3VwcG9zZXxIZW5jZXxUaGVufFR5cGV8UHJvcGVydGllc3xQcm9wZXJ0eXxWYXJpYWJsZXxDb25zdHJ1Y3RvcnxDb21iaW5hdG9yfERlcGVuZGVudFR5cGV8RGlzam9pbnRUeXBlfE1ldGF2YXJpYWJsZSlcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNlY29uZGFyeS1rZXl3b3JkXCI6IFwiXig/OmlzfGlufGFufGF8b2Z8Ynl8ZnJvbSlcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm1ldGEtdHlwZVwiOiBcIl4oPzpTdGF0ZW1lbnR8UmVmZXJlbmNlfEZyYW1lKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibmFtZVwiOiBcIl5bQS1aYS16zpEtzqnOsS3PiV1bQS1aYS16zpEtzqnOsS3PiV8wLTldKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc1xcXFwoXFxcXCk6LF0rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzO1xyXG4iXSwibmFtZXMiOlsiZW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMEJBOzs7ZUFBQTs7O0FBeEJBLElBQU1BLFVBQVU7SUFDZDtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxtQkFBbUI7SUFDckI7SUFDQTtRQUNFLHFCQUFxQjtJQUN2QjtJQUNBO1FBQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDRSxRQUFRO0lBQ1Y7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtJQUVELFdBQWVBIn0=