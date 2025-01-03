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
        "secondary-keyword": "^(?:is|in|an|a|of|by|from|for)\\b"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzosfDopXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiYnJhY2tldFwiOiBcIl4oPzpcXFxcKHxcXFxcKSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJwcmltYXJ5LWtleXdvcmRcIjogXCJeKD86UnVsZXxBeGlvbXxUaGVvcmVtfExlbW1hfENvbmplY3R1cmV8TWV0YUxlbW1hfE1ldGF0aGVvcmVtfFByZW1pc2VzfFByZW1pc2V8Q29uY2x1c2lvbnxQcm9vZnxUaGVyZWZvcmV8U3VwcG9zZXxIZW5jZXxUaGVufFR5cGV8UHJvcGVydGllc3xQcm9wZXJ0eXxWYXJpYWJsZXxDb25zdHJ1Y3RvcnxDb21iaW5hdG9yfERlcGVuZGVudFR5cGV8RGlzam9pbnRUeXBlfE1ldGF2YXJpYWJsZSlcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNlY29uZGFyeS1rZXl3b3JkXCI6IFwiXig/OmlzfGlufGFufGF8b2Z8Ynl8ZnJvbXxmb3IpXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJtZXRhLXR5cGVcIjogXCJeKD86U3RhdGVtZW50fFJlZmVyZW5jZXxGcmFtZSlcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm5hbWVcIjogXCJeW0EtWmEtes6RLc6pzrEtz4ldW0EtWmEtes6RLc6pzrEtz4lfMC05XSpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNcXFxcKFxcXFwpOixdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cmllcztcclxuIl0sIm5hbWVzIjpbImVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBCQTs7O2VBQUE7OztBQXhCQSxJQUFNQSxVQUFVO0lBQ2Q7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7UUFDRSxxQkFBcUI7SUFDdkI7SUFDQTtRQUNFLGFBQWE7SUFDZjtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7SUFFRCxXQUFlQSJ9