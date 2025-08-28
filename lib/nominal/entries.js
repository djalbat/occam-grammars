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
        "special": "^(?:@|:|,)"
    },
    {
        "bracket": "^(?:\\(|\\))"
    },
    {
        "primary-keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|MetaLemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Hence|Then|Provisional|Type|Properties|Property|Variable|Constructor|Combinator|Metavariable|Given)\\b"
    },
    {
        "secondary-keyword": "^(?:is|in|an|a|of|by|from|for|satisfies|provisionally)\\b"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzpAfDp8LClcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJicmFja2V0XCI6IFwiXig/OlxcXFwofFxcXFwpKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInByaW1hcnkta2V5d29yZFwiOiBcIl4oPzpSdWxlfEF4aW9tfFRoZW9yZW18TGVtbWF8Q29uamVjdHVyZXxNZXRhTGVtbWF8TWV0YXRoZW9yZW18UHJlbWlzZXN8UHJlbWlzZXxDb25jbHVzaW9ufFByb29mfFRoZXJlZm9yZXxTdXBwb3NlfEhlbmNlfFRoZW58UHJvdmlzaW9uYWx8VHlwZXxQcm9wZXJ0aWVzfFByb3BlcnR5fFZhcmlhYmxlfENvbnN0cnVjdG9yfENvbWJpbmF0b3J8TWV0YXZhcmlhYmxlfEdpdmVuKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic2Vjb25kYXJ5LWtleXdvcmRcIjogXCJeKD86aXN8aW58YW58YXxvZnxieXxmcm9tfGZvcnxzYXRpc2ZpZXN8cHJvdmlzaW9uYWxseSlcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm1ldGEtdHlwZVwiOiBcIl4oPzpTdGF0ZW1lbnR8UmVmZXJlbmNlfEZyYW1lKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibmFtZVwiOiBcIl5bQS1aYS16zpEtzqnOsS3PiV1bQS1aYS16zpEtzqnOsS3PiV8wLTldKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc1xcXFwoXFxcXCk6LF0rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzO1xyXG4iXSwibmFtZXMiOlsiZW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMEJBOzs7ZUFBQTs7O0FBeEJBLElBQU1BLFVBQVU7SUFDZDtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxtQkFBbUI7SUFDckI7SUFDQTtRQUNFLHFCQUFxQjtJQUN2QjtJQUNBO1FBQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDRSxRQUFRO0lBQ1Y7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtJQUVELFdBQWVBIn0=