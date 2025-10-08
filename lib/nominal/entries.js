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
var LATIN = "[\\p{Script=Latin}]", GREEK = "[\\p{Script=Greek}]", SCRIPT = "[\\u{1D49C}-\\u{1D4CF}\\u{210A}\\u{210B}\\u{2110}\\u{2112}\\u{211B}\\u{212C}\\u{2130}\\u{2131}\\u{2133}\\u{2134}]", DECIMAL = "[0-9]", FRAKTUR = "[\\u{1D504}-\\u{1D537}\\u{210C}\\u{2111}\\u{211C}\\u{2128}\\u{212D}]", SANS_SERIF = "[\\u{1D5D4}-\\u{1D607}]";
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
        "name": "^(?:[a-z][A-Za-z]+[0-9]*|[A-Z][A-Za-z]*[0-9]*)"
    },
    {
        "identifier": "^(?:".concat(LATIN, "+").concat(DECIMAL, "*|").concat(GREEK, "+|").concat(FRAKTUR, "+|").concat(SCRIPT, "+|").concat(SANS_SERIF, "+)")
    },
    {
        "delimiter": "^(?:\\.\\.\\.|,|\\(|\\)|\\[|\\])"
    },
    {
        "special": "^(?:\\|-|@|::|:|=)"
    },
    {
        "unassigned": "^[^\\s\\(\\)\\[\\]:,]+"
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBMQVRJTiA9IFwiW1xcXFxwe1NjcmlwdD1MYXRpbn1dXCIsXHJcbiAgICAgIEdSRUVLID0gXCJbXFxcXHB7U2NyaXB0PUdyZWVrfV1cIixcclxuICAgICAgU0NSSVBUID0gXCJbXFxcXHV7MUQ0OUN9LVxcXFx1ezFENENGfVxcXFx1ezIxMEF9XFxcXHV7MjEwQn1cXFxcdXsyMTEwfVxcXFx1ezIxMTJ9XFxcXHV7MjExQn1cXFxcdXsyMTJDfVxcXFx1ezIxMzB9XFxcXHV7MjEzMX1cXFxcdXsyMTMzfVxcXFx1ezIxMzR9XVwiLFxyXG4gICAgICBERUNJTUFMID0gXCJbMC05XVwiLFxyXG4gICAgICBGUkFLVFVSID0gXCJbXFxcXHV7MUQ1MDR9LVxcXFx1ezFENTM3fVxcXFx1ezIxMEN9XFxcXHV7MjExMX1cXFxcdXsyMTFDfVxcXFx1ezIxMjh9XFxcXHV7MjEyRH1dXCIsXHJcbiAgICAgIFNBTlNfU0VSSUYgPSBcIltcXFxcdXsxRDVENH0tXFxcXHV7MUQ2MDd9XVwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcInByaW1hcnkta2V5d29yZFwiOiBcIl4oPzpSdWxlfEF4aW9tfFRoZW9yZW18TGVtbWF8Q29uamVjdHVyZXxNZXRhTGVtbWF8TWV0YXRoZW9yZW18UHJlbWlzZXN8UHJlbWlzZXxDb25jbHVzaW9ufFByb29mfFRoZXJlZm9yZXxTdXBwb3NlfEhlbmNlfFRoZW58UHJvdmlzaW9uYWx8VHlwZXxQcm9wZXJ0aWVzfFByb3BlcnR5fFZhcmlhYmxlfENvbnN0cnVjdG9yfENvbWJpbmF0b3J8TWV0YXZhcmlhYmxlfEdpdmVuKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic2Vjb25kYXJ5LWtleXdvcmRcIjogXCJeKD86aXN8aW58YW58YXxvZnxieXxiZWNhdXNlfGZvcnxzYXRpc2ZpZXN8cHJvdmlzaW9uYWxseXxkZWZpbmVkfHVuZGVmaW5lZHxtaXNzaW5nfHByZXNlbnQpXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJtZXRhLXR5cGVcIjogXCJeKD86U3RhdGVtZW50fFJlZmVyZW5jZXxGcmFtZSlcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm5hbWVcIjogXCJeKD86W2Etel1bQS1aYS16XStbMC05XSp8W0EtWl1bQS1aYS16XSpbMC05XSopXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRlbnRpZmllclwiOiBgXig/OiR7TEFUSU59KyR7REVDSU1BTH0qfCR7R1JFRUt9K3wke0ZSQUtUVVJ9K3wke1NDUklQVH0rfCR7U0FOU19TRVJJRn0rKWBcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZGVsaW1pdGVyXCI6IFwiXig/OlxcXFwuXFxcXC5cXFxcLnwsfFxcXFwofFxcXFwpfFxcXFxbfFxcXFxdKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCJeKD86XFxcXHwtfEB8Ojp8Onw9KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc1xcXFwoXFxcXClcXFxcW1xcXFxdOixdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cmllcztcclxuIl0sIm5hbWVzIjpbIkxBVElOIiwiR1JFRUsiLCJTQ1JJUFQiLCJERUNJTUFMIiwiRlJBS1RVUiIsIlNBTlNfU0VSSUYiLCJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQ0E7OztlQUFBOzs7QUFsQ0EsSUFBTUEsUUFBUSx1QkFDUkMsUUFBUSx1QkFDUkMsU0FBUyxxSEFDVEMsVUFBVSxTQUNWQyxVQUFVLHdFQUNWQyxhQUFhO0FBRW5CLElBQU1DLFVBQVU7SUFDZDtRQUNFLG1CQUFtQjtJQUNyQjtJQUNBO1FBQ0UscUJBQXFCO0lBQ3ZCO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsY0FBYyxBQUFDLE9BQWVILE9BQVRILE9BQU0sS0FBZUMsT0FBWkUsU0FBUSxNQUFjQyxPQUFWSCxPQUFNLE1BQWdCQyxPQUFaRSxTQUFRLE1BQWVDLE9BQVhILFFBQU8sTUFBZSxPQUFYRyxZQUFXO0lBQ3hGO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsY0FBYztJQUNoQjtDQUNEO0lBRUQsV0FBZUMifQ==