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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBMQVRJTiA9IFwiW1xcXFxwe1NjcmlwdD1MYXRpbn1dXCIsXHJcbiAgICAgIEdSRUVLID0gXCJbXFxcXHB7U2NyaXB0PUdyZWVrfV1cIixcclxuICAgICAgREVDSU1BTCA9IFwiWzAtOV1cIixcclxuICAgICAgTUFUSEVNQVRJQ0FMX1NDUklQVCA9IFwiW1xcXFx1ezFENDlDfS1cXFxcdXsxRDRDRn1cXFxcdXsyMTBBfVxcXFx1ezIxMEJ9XFxcXHV7MjExMH1cXFxcdXsyMTEyfVxcXFx1ezIxMUJ9XFxcXHV7MjEyQ31cXFxcdXsyMTMwfVxcXFx1ezIxMzF9XFxcXHV7MjEzM31cXFxcdXsyMTM0fV1cIixcclxuICAgICAgTUFUSEVNQVRJQ0FMX0ZSQUtUVVIgPSBcIltcXFxcdXsxRDUwNH0tXFxcXHV7MUQ1Mzd9XFxcXHV7MjEwQ31cXFxcdXsyMTExfVxcXFx1ezIxMUN9XFxcXHV7MjEyOH1cXFxcdXsyMTJEfV1cIixcclxuICAgICAgTUFUSEVNQVRJQ0FMX1NBTlNfU0VSSUZfQk9MRCA9IFwiW1xcXFx1ezFENUQ0fS1cXFxcdXsxRDYwN31dXCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwicHJpbWFyeS1rZXl3b3JkXCI6IFwiXig/OlJ1bGV8QXhpb218VGhlb3JlbXxMZW1tYXxDb25qZWN0dXJlfE1ldGFMZW1tYXxNZXRhdGhlb3JlbXxQcmVtaXNlc3xQcmVtaXNlfENvbmNsdXNpb258UHJvb2Z8VGhlcmVmb3JlfFN1cHBvc2V8SGVuY2V8VGhlbnxQcm92aXNpb25hbHxUeXBlfFByb3BlcnRpZXN8UHJvcGVydHl8VmFyaWFibGV8Q29uc3RydWN0b3J8Q29tYmluYXRvcnxNZXRhdmFyaWFibGV8R2l2ZW4pXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzZWNvbmRhcnkta2V5d29yZFwiOiBcIl4oPzppc3xpbnxhbnxhfG9mfGJ5fGJlY2F1c2V8Zm9yfHNhdGlzZmllc3xwcm92aXNpb25hbGx5fGRlZmluZWR8dW5kZWZpbmVkfG1pc3Npbmd8cHJlc2VudClcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm1ldGEtdHlwZVwiOiBcIl4oPzpTdGF0ZW1lbnR8UmVmZXJlbmNlfEZyYW1lKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibmFtZVwiOiBcIl4oPzpbYS16XVtBLVphLXpdK1swLTldKnxbQS1aXVtBLVphLXpdKlswLTldKilcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZGVudGlmaWVyXCI6IGBeKD86JHtMQVRJTn0rJHtERUNJTUFMfSp8JHtHUkVFS30rfCR7TUFUSEVNQVRJQ0FMX1NDUklQVH0rfCR7TUFUSEVNQVRJQ0FMX0ZSQUtUVVJ9K3wke01BVEhFTUFUSUNBTF9TQU5TX1NFUklGX0JPTER9KylgXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImRlbGltaXRlclwiOiBcIl4oPzpcXFxcLlxcXFwuXFxcXC58LHxcXFxcKHxcXFxcKXxcXFxcW3xcXFxcXSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXig/OlxcXFx8LXxAfDo6fDp8PSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNcXFxcKFxcXFwpXFxcXFtcXFxcXTosXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudHJpZXM7XHJcbiJdLCJuYW1lcyI6WyJMQVRJTiIsIkdSRUVLIiwiREVDSU1BTCIsIk1BVEhFTUFUSUNBTF9TQ1JJUFQiLCJNQVRIRU1BVElDQUxfRlJBS1RVUiIsIk1BVEhFTUFUSUNBTF9TQU5TX1NFUklGX0JPTEQiLCJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQ0E7OztlQUFBOzs7QUFsQ0EsSUFBTUEsUUFBUSx1QkFDUkMsUUFBUSx1QkFDUkMsVUFBVSxTQUNWQyxzQkFBc0IscUhBQ3RCQyx1QkFBdUIsd0VBQ3ZCQywrQkFBK0I7QUFFckMsSUFBTUMsVUFBVTtJQUNkO1FBQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7UUFDRSxxQkFBcUI7SUFDdkI7SUFDQTtRQUNFLGFBQWE7SUFDZjtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxjQUFjLEFBQUMsT0FBZUosT0FBVEYsT0FBTSxLQUFlQyxPQUFaQyxTQUFRLE1BQWNDLE9BQVZGLE9BQU0sTUFBNEJHLE9BQXhCRCxxQkFBb0IsTUFBNkJFLE9BQXpCRCxzQkFBcUIsTUFBaUMsT0FBN0JDLDhCQUE2QjtJQUNwSTtJQUNBO1FBQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtJQUVELFdBQWVDIn0=