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
        "primary-keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|MetaLemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Hence|Then|Provisional|Type|Properties|Property|Variable|Constructor|Combinator|DependentType|DisjointType|Metavariable)\\b"
    },
    {
        "secondary-keyword": "^(?:is|in|an|a|of|by|from|for|satisfy|satisfies|provisionally)\\b"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzpAfDp8LClcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJicmFja2V0XCI6IFwiXig/OlxcXFwofFxcXFwpKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInByaW1hcnkta2V5d29yZFwiOiBcIl4oPzpSdWxlfEF4aW9tfFRoZW9yZW18TGVtbWF8Q29uamVjdHVyZXxNZXRhTGVtbWF8TWV0YXRoZW9yZW18UHJlbWlzZXN8UHJlbWlzZXxDb25jbHVzaW9ufFByb29mfFRoZXJlZm9yZXxTdXBwb3NlfEhlbmNlfFRoZW58UHJvdmlzaW9uYWx8VHlwZXxQcm9wZXJ0aWVzfFByb3BlcnR5fFZhcmlhYmxlfENvbnN0cnVjdG9yfENvbWJpbmF0b3J8RGVwZW5kZW50VHlwZXxEaXNqb2ludFR5cGV8TWV0YXZhcmlhYmxlKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic2Vjb25kYXJ5LWtleXdvcmRcIjogXCJeKD86aXN8aW58YW58YXxvZnxieXxmcm9tfGZvcnxzYXRpc2Z5fHNhdGlzZmllc3xwcm92aXNpb25hbGx5KVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibWV0YS10eXBlXCI6IFwiXig/OlN0YXRlbWVudHxSZWZlcmVuY2V8RnJhbWUpXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJuYW1lXCI6IFwiXltBLVphLXrOkS3Oqc6xLc+JXVtBLVphLXrOkS3Oqc6xLc+JXzAtOV0qXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXFxcXChcXFxcKTosXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudHJpZXM7XHJcbiJdLCJuYW1lcyI6WyJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwQkE7OztlQUFBOzs7QUF4QkEsSUFBTUEsVUFBVTtJQUNkO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLG1CQUFtQjtJQUNyQjtJQUNBO1FBQ0UscUJBQXFCO0lBQ3ZCO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsY0FBYztJQUNoQjtDQUNEO0lBRUQsV0FBZUEifQ==