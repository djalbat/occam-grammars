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
var LATIN = "[\\p{Script=Latin}]", GREEK = "[\\p{Script=Greek}]", DECIMAL = "[0-9]", MATHEMATICAL_SCRIPT = "[\\u{1D49C}-\\u{1D4CF}\\u{210A}\\u{210B}\\u{2110}\\u{2112}\\u{211B}\\u{212C}\\u{2130}\\u{2131}\\u{2133}\\u{2134}]", MATHEMATICAL_FRAKTUR = "[\\u{1D504}-\\u{1D537}\\u{210C}\\u{2111}\\u{211C}\\u{2128}\\u{212D}]", MATHEMATICAL_SANS_SERIF_BOLD = "[\\u{1D5D4}-\\u{1D607}]";
var entries = [
    {
        "primary-keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|MetaLemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Hence|Then|Provisional|Type|TypeAlias|Properties|Property|Variable|Constructor|Combinator|Metavariable|Given)\\b"
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
        "identifier": "^(?:".concat(LATIN, "+").concat(DECIMAL, "*|").concat(GREEK, "+|").concat(MATHEMATICAL_SCRIPT, "+|").concat(MATHEMATICAL_FRAKTUR, "+|").concat(MATHEMATICAL_SANS_SERIF_BOLD, "+)")
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBMQVRJTiA9IFwiW1xcXFxwe1NjcmlwdD1MYXRpbn1dXCIsXHJcbiAgICAgIEdSRUVLID0gXCJbXFxcXHB7U2NyaXB0PUdyZWVrfV1cIixcclxuICAgICAgREVDSU1BTCA9IFwiWzAtOV1cIixcclxuICAgICAgTUFUSEVNQVRJQ0FMX1NDUklQVCA9IFwiW1xcXFx1ezFENDlDfS1cXFxcdXsxRDRDRn1cXFxcdXsyMTBBfVxcXFx1ezIxMEJ9XFxcXHV7MjExMH1cXFxcdXsyMTEyfVxcXFx1ezIxMUJ9XFxcXHV7MjEyQ31cXFxcdXsyMTMwfVxcXFx1ezIxMzF9XFxcXHV7MjEzM31cXFxcdXsyMTM0fV1cIixcclxuICAgICAgTUFUSEVNQVRJQ0FMX0ZSQUtUVVIgPSBcIltcXFxcdXsxRDUwNH0tXFxcXHV7MUQ1Mzd9XFxcXHV7MjEwQ31cXFxcdXsyMTExfVxcXFx1ezIxMUN9XFxcXHV7MjEyOH1cXFxcdXsyMTJEfV1cIixcclxuICAgICAgTUFUSEVNQVRJQ0FMX1NBTlNfU0VSSUZfQk9MRCA9IFwiW1xcXFx1ezFENUQ0fS1cXFxcdXsxRDYwN31dXCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwicHJpbWFyeS1rZXl3b3JkXCI6IFwiXig/OlJ1bGV8QXhpb218VGhlb3JlbXxMZW1tYXxDb25qZWN0dXJlfE1ldGFMZW1tYXxNZXRhdGhlb3JlbXxQcmVtaXNlc3xQcmVtaXNlfENvbmNsdXNpb258UHJvb2Z8VGhlcmVmb3JlfFN1cHBvc2V8SGVuY2V8VGhlbnxQcm92aXNpb25hbHxUeXBlfFR5cGVBbGlhc3xQcm9wZXJ0aWVzfFByb3BlcnR5fFZhcmlhYmxlfENvbnN0cnVjdG9yfENvbWJpbmF0b3J8TWV0YXZhcmlhYmxlfEdpdmVuKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic2Vjb25kYXJ5LWtleXdvcmRcIjogXCJeKD86aXN8aW58YW58YXxvZnxieXxiZWNhdXNlfGZvcnxzYXRpc2ZpZXN8cHJvdmlzaW9uYWxseXxkZWZpbmVkfHVuZGVmaW5lZHxtaXNzaW5nfHByZXNlbnQpXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJtZXRhLXR5cGVcIjogXCJeKD86U3RhdGVtZW50fFJlZmVyZW5jZXxGcmFtZSlcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm5hbWVcIjogXCJeKD86W2Etel1bQS1aYS16XStbMC05XSp8W0EtWl1bQS1aYS16XSpbMC05XSopXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRlbnRpZmllclwiOiBgXig/OiR7TEFUSU59KyR7REVDSU1BTH0qfCR7R1JFRUt9K3wke01BVEhFTUFUSUNBTF9TQ1JJUFR9K3wke01BVEhFTUFUSUNBTF9GUkFLVFVSfSt8JHtNQVRIRU1BVElDQUxfU0FOU19TRVJJRl9CT0xEfSspYFxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJkZWxpbWl0ZXJcIjogXCJeKD86XFxcXC5cXFxcLlxcXFwufCx8XFxcXCh8XFxcXCl8XFxcXFt8XFxcXF0pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzpcXFxcfC18QHw6Onw6fD0pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXFxcXChcXFxcKVxcXFxbXFxcXF06LF0rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzO1xyXG4iXSwibmFtZXMiOlsiTEFUSU4iLCJHUkVFSyIsIkRFQ0lNQUwiLCJNQVRIRU1BVElDQUxfU0NSSVBUIiwiTUFUSEVNQVRJQ0FMX0ZSQUtUVVIiLCJNQVRIRU1BVElDQUxfU0FOU19TRVJJRl9CT0xEIiwiZW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0NBOzs7ZUFBQTs7O0FBbENBLElBQU1BLFFBQVEsdUJBQ1JDLFFBQVEsdUJBQ1JDLFVBQVUsU0FDVkMsc0JBQXNCLHFIQUN0QkMsdUJBQXVCLHdFQUN2QkMsK0JBQStCO0FBRXJDLElBQU1DLFVBQVU7SUFDZDtRQUNFLG1CQUFtQjtJQUNyQjtJQUNBO1FBQ0UscUJBQXFCO0lBQ3ZCO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsY0FBYyxBQUFDLE9BQWVKLE9BQVRGLE9BQU0sS0FBZUMsT0FBWkMsU0FBUSxNQUFjQyxPQUFWRixPQUFNLE1BQTRCRyxPQUF4QkQscUJBQW9CLE1BQTZCRSxPQUF6QkQsc0JBQXFCLE1BQWlDLE9BQTdCQyw4QkFBNkI7SUFDcEk7SUFDQTtRQUNFLGFBQWE7SUFDZjtJQUNBO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7SUFFRCxXQUFlQyJ9