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
        "special": "^(?:\\.\\.\\.|\\|-|@|,|::|:|=)"
    },
    {
        "bracket": "^(?:\\(|\\)|\\[|\\])"
    },
    {
        "primary-keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|MetaLemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Hence|Then|Provisional|Type|Properties|Property|Variable|Constructor|Combinator|Metavariable|Given)\\b"
    },
    {
        "secondary-keyword": "^(?:is|in|an|a|of|by|from|because|for|satisfies|provisionally|defined|undefined|missing|present)\\b"
    },
    {
        "meta-type": "^(?:Statement|Reference|Frame)\\b"
    },
    {
        "identifier": "^[A-Za-zΑ-Ωα-ω][A-Za-zΑ-Ωα-ω_0-9]*"
    },
    {
        "reserved": "^(?:\\{|\\}|<|>|;|\.|\\+|-|\\*|/|%|\\^|&|!|'|\"|#|\\$|\\?|~|`|\\\\|\\|=|\\|)"
    },
    {
        "unassigned": "^[^\\s\\(\\)\\[\\]:,]+"
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzpcXFxcLlxcXFwuXFxcXC58XFxcXHwtfEB8LHw6Onw6fD0pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiYnJhY2tldFwiOiBcIl4oPzpcXFxcKHxcXFxcKXxcXFxcW3xcXFxcXSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJwcmltYXJ5LWtleXdvcmRcIjogXCJeKD86UnVsZXxBeGlvbXxUaGVvcmVtfExlbW1hfENvbmplY3R1cmV8TWV0YUxlbW1hfE1ldGF0aGVvcmVtfFByZW1pc2VzfFByZW1pc2V8Q29uY2x1c2lvbnxQcm9vZnxUaGVyZWZvcmV8U3VwcG9zZXxIZW5jZXxUaGVufFByb3Zpc2lvbmFsfFR5cGV8UHJvcGVydGllc3xQcm9wZXJ0eXxWYXJpYWJsZXxDb25zdHJ1Y3RvcnxDb21iaW5hdG9yfE1ldGF2YXJpYWJsZXxHaXZlbilcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNlY29uZGFyeS1rZXl3b3JkXCI6IFwiXig/OmlzfGlufGFufGF8b2Z8Ynl8ZnJvbXxiZWNhdXNlfGZvcnxzYXRpc2ZpZXN8cHJvdmlzaW9uYWxseXxkZWZpbmVkfHVuZGVmaW5lZHxtaXNzaW5nfHByZXNlbnQpXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJtZXRhLXR5cGVcIjogXCJeKD86U3RhdGVtZW50fFJlZmVyZW5jZXxGcmFtZSlcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkZW50aWZpZXJcIjogXCJeW0EtWmEtes6RLc6pzrEtz4ldW0EtWmEtes6RLc6pzrEtz4lfMC05XSpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJyZXNlcnZlZFwiOiBcIl4oPzpcXFxce3xcXFxcfXw8fD58O3xcXC58XFxcXCt8LXxcXFxcKnwvfCV8XFxcXF58JnwhfCd8XFxcInwjfFxcXFwkfFxcXFw/fH58YHxcXFxcXFxcXHxcXFxcfD18XFxcXHwpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXFxcXChcXFxcKVxcXFxbXFxcXF06LF0rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzO1xyXG4iXSwibmFtZXMiOlsiZW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkJBOzs7ZUFBQTs7O0FBM0JBLElBQU1BLFVBQVU7SUFDZDtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxtQkFBbUI7SUFDckI7SUFDQTtRQUNFLHFCQUFxQjtJQUN2QjtJQUNBO1FBQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0lBQ0E7UUFDRSxZQUFZO0lBQ2Q7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtJQUVELFdBQWVBIn0=