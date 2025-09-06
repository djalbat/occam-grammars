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
        "primary-keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|MetaLemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Hence|Then|Provisional|Type|Properties|Property|Variable|Constructor|Combinator|Metavariable|Given)\\b"
    },
    {
        "secondary-keyword": "^(?:is|in|an|a|of|by|because|for|satisfies|provisionally|defined|undefined|missing|present)\\b"
    },
    {
        "meta-type": "^(?:Statement|Reference|Frame)\\b"
    },
    {
        "name": "^[A-Z][A-Za-z]*"
    },
    {
        "identifier": "^[\\p{Script=Latin}\\p{Script=Greek}][\\p{Script=Latin}\\p{Script=Greek}_0-9']*"
    },
    {
        "special": "^(?:\\.\\.\\.|\\|-|@|,|::|:|=)"
    },
    {
        "bracket": "^(?:\\(|\\)|\\[|\\])"
    },
    {
        "reserved": "^(?:\\|=|<|>|;|\\.|\\+|-|\\*|/|%|\\^|&|!|'|\"|#|\\$|\\?|~|`|\\\\|\\||\\{|\\})"
    },
    {
        "unassigned": "^[^\\s\\(\\)\\[\\]:,]+"
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwicHJpbWFyeS1rZXl3b3JkXCI6IFwiXig/OlJ1bGV8QXhpb218VGhlb3JlbXxMZW1tYXxDb25qZWN0dXJlfE1ldGFMZW1tYXxNZXRhdGhlb3JlbXxQcmVtaXNlc3xQcmVtaXNlfENvbmNsdXNpb258UHJvb2Z8VGhlcmVmb3JlfFN1cHBvc2V8SGVuY2V8VGhlbnxQcm92aXNpb25hbHxUeXBlfFByb3BlcnRpZXN8UHJvcGVydHl8VmFyaWFibGV8Q29uc3RydWN0b3J8Q29tYmluYXRvcnxNZXRhdmFyaWFibGV8R2l2ZW4pXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzZWNvbmRhcnkta2V5d29yZFwiOiBcIl4oPzppc3xpbnxhbnxhfG9mfGJ5fGJlY2F1c2V8Zm9yfHNhdGlzZmllc3xwcm92aXNpb25hbGx5fGRlZmluZWR8dW5kZWZpbmVkfG1pc3Npbmd8cHJlc2VudClcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm1ldGEtdHlwZVwiOiBcIl4oPzpTdGF0ZW1lbnR8UmVmZXJlbmNlfEZyYW1lKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibmFtZVwiOiBcIl5bQS1aXVtBLVphLXpdKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkZW50aWZpZXJcIjogXCJeW1xcXFxwe1NjcmlwdD1MYXRpbn1cXFxccHtTY3JpcHQ9R3JlZWt9XVtcXFxccHtTY3JpcHQ9TGF0aW59XFxcXHB7U2NyaXB0PUdyZWVrfV8wLTknXSpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXig/OlxcXFwuXFxcXC5cXFxcLnxcXFxcfC18QHwsfDo6fDp8PSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJicmFja2V0XCI6IFwiXig/OlxcXFwofFxcXFwpfFxcXFxbfFxcXFxdKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInJlc2VydmVkXCI6IFwiXig/OlxcXFx8PXw8fD58O3xcXFxcLnxcXFxcK3wtfFxcXFwqfC98JXxcXFxcXnwmfCF8J3xcXFwifCN8XFxcXCR8XFxcXD98fnxgfFxcXFxcXFxcfFxcXFx8fFxcXFx7fFxcXFx9KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc1xcXFwoXFxcXClcXFxcW1xcXFxdOixdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cmllcztcclxuXHJcbiJdLCJuYW1lcyI6WyJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQ0E7OztlQUFBOzs7QUE5QkEsSUFBTUEsVUFBVTtJQUNkO1FBQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7UUFDRSxxQkFBcUI7SUFDdkI7SUFDQTtRQUNFLGFBQWE7SUFDZjtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsWUFBWTtJQUNkO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7SUFFRCxXQUFlQSJ9