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
        "primary-keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|MetaLemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Hence|Then|Provisional|Type|TypePrefix|Properties|Property|Variable|Constructor|Combinator|Metavariable|Given)\\b"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBMQVRJTiA9IFwiW1xcXFxwe1NjcmlwdD1MYXRpbn1dXCIsXHJcbiAgICAgIEdSRUVLID0gXCJbXFxcXHB7U2NyaXB0PUdyZWVrfV1cIixcclxuICAgICAgREVDSU1BTCA9IFwiWzAtOV1cIixcclxuICAgICAgTUFUSEVNQVRJQ0FMX1NDUklQVCA9IFwiW1xcXFx1ezFENDlDfS1cXFxcdXsxRDRDRn1cXFxcdXsyMTBBfVxcXFx1ezIxMEJ9XFxcXHV7MjExMH1cXFxcdXsyMTEyfVxcXFx1ezIxMUJ9XFxcXHV7MjEyQ31cXFxcdXsyMTMwfVxcXFx1ezIxMzF9XFxcXHV7MjEzM31cXFxcdXsyMTM0fV1cIixcclxuICAgICAgTUFUSEVNQVRJQ0FMX0ZSQUtUVVIgPSBcIltcXFxcdXsxRDUwNH0tXFxcXHV7MUQ1Mzd9XFxcXHV7MjEwQ31cXFxcdXsyMTExfVxcXFx1ezIxMUN9XFxcXHV7MjEyOH1cXFxcdXsyMTJEfV1cIixcclxuICAgICAgTUFUSEVNQVRJQ0FMX1NBTlNfU0VSSUZfQk9MRCA9IFwiW1xcXFx1ezFENUQ0fS1cXFxcdXsxRDYwN31dXCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwicHJpbWFyeS1rZXl3b3JkXCI6IFwiXig/OlJ1bGV8QXhpb218VGhlb3JlbXxMZW1tYXxDb25qZWN0dXJlfE1ldGFMZW1tYXxNZXRhdGhlb3JlbXxQcmVtaXNlc3xQcmVtaXNlfENvbmNsdXNpb258UHJvb2Z8VGhlcmVmb3JlfFN1cHBvc2V8SGVuY2V8VGhlbnxQcm92aXNpb25hbHxUeXBlfFR5cGVQcmVmaXh8UHJvcGVydGllc3xQcm9wZXJ0eXxWYXJpYWJsZXxDb25zdHJ1Y3RvcnxDb21iaW5hdG9yfE1ldGF2YXJpYWJsZXxHaXZlbilcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNlY29uZGFyeS1rZXl3b3JkXCI6IFwiXig/OmlzfGlufGFufGF8b2Z8Ynl8YmVjYXVzZXxmb3J8c2F0aXNmaWVzfHByb3Zpc2lvbmFsbHl8ZGVmaW5lZHx1bmRlZmluZWR8bWlzc2luZ3xwcmVzZW50KVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibWV0YS10eXBlXCI6IFwiXig/OlN0YXRlbWVudHxSZWZlcmVuY2V8RnJhbWUpXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJuYW1lXCI6IFwiXig/OlthLXpdW0EtWmEtel0rWzAtOV0qfFtBLVpdW0EtWmEtel0qWzAtOV0qKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkZW50aWZpZXJcIjogYF4oPzoke0xBVElOfSske0RFQ0lNQUx9Knwke0dSRUVLfSt8JHtNQVRIRU1BVElDQUxfU0NSSVBUfSt8JHtNQVRIRU1BVElDQUxfRlJBS1RVUn0rfCR7TUFUSEVNQVRJQ0FMX1NBTlNfU0VSSUZfQk9MRH0rKWBcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZGVsaW1pdGVyXCI6IFwiXig/OlxcXFwuXFxcXC5cXFxcLnwsfFxcXFwofFxcXFwpfFxcXFxbfFxcXFxdKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCJeKD86XFxcXHwtfEB8Ojp8Onw9KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc1xcXFwoXFxcXClcXFxcW1xcXFxdOixdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cmllcztcclxuIl0sIm5hbWVzIjpbIkxBVElOIiwiR1JFRUsiLCJERUNJTUFMIiwiTUFUSEVNQVRJQ0FMX1NDUklQVCIsIk1BVEhFTUFUSUNBTF9GUkFLVFVSIiwiTUFUSEVNQVRJQ0FMX1NBTlNfU0VSSUZfQk9MRCIsImVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9DQTs7O2VBQUE7OztBQWxDQSxJQUFNQSxRQUFRLHVCQUNSQyxRQUFRLHVCQUNSQyxVQUFVLFNBQ1ZDLHNCQUFzQixxSEFDdEJDLHVCQUF1Qix3RUFDdkJDLCtCQUErQjtBQUVyQyxJQUFNQyxVQUFVO0lBQ2Q7UUFDRSxtQkFBbUI7SUFDckI7SUFDQTtRQUNFLHFCQUFxQjtJQUN2QjtJQUNBO1FBQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDRSxRQUFRO0lBQ1Y7SUFDQTtRQUNFLGNBQWMsQUFBQyxPQUFlSixPQUFURixPQUFNLEtBQWVDLE9BQVpDLFNBQVEsTUFBY0MsT0FBVkYsT0FBTSxNQUE0QkcsT0FBeEJELHFCQUFvQixNQUE2QkUsT0FBekJELHNCQUFxQixNQUFpQyxPQUE3QkMsOEJBQTZCO0lBQ3BJO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsY0FBYztJQUNoQjtDQUNEO0lBRUQsV0FBZUMifQ==