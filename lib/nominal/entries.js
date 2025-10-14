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
var DECIMAL = "[0-9]", GREEK = "[\\p{Script=Greek}]", LATIN = "[\\p{Script=Latin}]", LOWER_CASE_LATIN = "[\\p{Script=Latin}&&\\p{Lowercase}]", UPPER_CASE_LATIN = "[\\p{Script=Latin}&&\\p{Uppercase}]", MATHEMATICAL_SCRIPT = "[\\p{Style=Math_Script}]", MATHEMATICAL_FRAKTUR = "[\\p{Style=Math_Fraktur}]", MATHEMATICAL_SANS_SERIF_BOLD = "[\\u{1D5D4}-\\u{1D607}]";
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
        "name": "^(?:".concat(LOWER_CASE_LATIN).concat(LATIN, "+").concat(DECIMAL, "*|").concat(UPPER_CASE_LATIN).concat(LATIN, "*").concat(DECIMAL, "*)")
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBERUNJTUFMID0gXCJbMC05XVwiLFxyXG4gICAgICBHUkVFSyA9IFwiW1xcXFxwe1NjcmlwdD1HcmVla31dXCIsXHJcbiAgICAgIExBVElOID0gXCJbXFxcXHB7U2NyaXB0PUxhdGlufV1cIixcclxuICAgICAgTE9XRVJfQ0FTRV9MQVRJTiA9IFwiW1xcXFxwe1NjcmlwdD1MYXRpbn0mJlxcXFxwe0xvd2VyY2FzZX1dXCIsXHJcbiAgICAgIFVQUEVSX0NBU0VfTEFUSU4gPSBcIltcXFxccHtTY3JpcHQ9TGF0aW59JiZcXFxccHtVcHBlcmNhc2V9XVwiLFxyXG4gICAgICBNQVRIRU1BVElDQUxfU0NSSVBUID0gXCJbXFxcXHB7U3R5bGU9TWF0aF9TY3JpcHR9XVwiLFxyXG4gICAgICBNQVRIRU1BVElDQUxfRlJBS1RVUiA9IFwiW1xcXFxwe1N0eWxlPU1hdGhfRnJha3R1cn1dXCIsXHJcbiAgICAgIE1BVEhFTUFUSUNBTF9TQU5TX1NFUklGX0JPTEQgPSBcIltcXFxcdXsxRDVENH0tXFxcXHV7MUQ2MDd9XVwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcInByaW1hcnkta2V5d29yZFwiOiBcIl4oPzpSdWxlfEF4aW9tfFRoZW9yZW18TGVtbWF8Q29uamVjdHVyZXxNZXRhTGVtbWF8TWV0YXRoZW9yZW18UHJlbWlzZXN8UHJlbWlzZXxDb25jbHVzaW9ufFByb29mfFRoZXJlZm9yZXxTdXBwb3NlfEhlbmNlfFRoZW58UHJvdmlzaW9uYWx8VHlwZXxUeXBlUHJlZml4fFByb3BlcnRpZXN8UHJvcGVydHl8VmFyaWFibGV8Q29uc3RydWN0b3J8Q29tYmluYXRvcnxNZXRhdmFyaWFibGV8R2l2ZW4pXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzZWNvbmRhcnkta2V5d29yZFwiOiBcIl4oPzppc3xpbnxhbnxhfG9mfGJ5fGJlY2F1c2V8Zm9yfHNhdGlzZmllc3xwcm92aXNpb25hbGx5fGRlZmluZWR8dW5kZWZpbmVkfG1pc3Npbmd8cHJlc2VudClcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm1ldGEtdHlwZVwiOiBcIl4oPzpTdGF0ZW1lbnR8UmVmZXJlbmNlfEZyYW1lKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibmFtZVwiOiBgXig/OiR7TE9XRVJfQ0FTRV9MQVRJTn0ke0xBVElOfSske0RFQ0lNQUx9Knwke1VQUEVSX0NBU0VfTEFUSU59JHtMQVRJTn0qJHtERUNJTUFMfSopYCxcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRlbnRpZmllclwiOiBgXig/OiR7TEFUSU59KyR7REVDSU1BTH0qfCR7R1JFRUt9K3wke01BVEhFTUFUSUNBTF9TQ1JJUFR9K3wke01BVEhFTUFUSUNBTF9GUkFLVFVSfSt8JHtNQVRIRU1BVElDQUxfU0FOU19TRVJJRl9CT0xEfSspYFxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJkZWxpbWl0ZXJcIjogXCJeKD86XFxcXC5cXFxcLlxcXFwufCx8XFxcXCh8XFxcXCl8XFxcXFt8XFxcXF0pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzpcXFxcfC18QHw6Onw6fD0pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXFxcXChcXFxcKVxcXFxbXFxcXF06LF0rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzO1xyXG4iXSwibmFtZXMiOlsiREVDSU1BTCIsIkdSRUVLIiwiTEFUSU4iLCJMT1dFUl9DQVNFX0xBVElOIiwiVVBQRVJfQ0FTRV9MQVRJTiIsIk1BVEhFTUFUSUNBTF9TQ1JJUFQiLCJNQVRIRU1BVElDQUxfRlJBS1RVUiIsIk1BVEhFTUFUSUNBTF9TQU5TX1NFUklGX0JPTEQiLCJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQ0E7OztlQUFBOzs7QUFwQ0EsSUFBTUEsVUFBVSxTQUNWQyxRQUFRLHVCQUNSQyxRQUFRLHVCQUNSQyxtQkFBbUIsdUNBQ25CQyxtQkFBbUIsdUNBQ25CQyxzQkFBc0IsNEJBQ3RCQyx1QkFBdUIsNkJBQ3ZCQywrQkFBK0I7QUFFckMsSUFBTUMsVUFBVTtJQUNkO1FBQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7UUFDRSxxQkFBcUI7SUFDdkI7SUFDQTtRQUNFLGFBQWE7SUFDZjtJQUNBO1FBQ0UsUUFBUSxBQUFDLE9BQXlCTixPQUFuQkMsa0JBQTRCSCxPQUFURSxPQUFNLEtBQWVFLE9BQVpKLFNBQVEsTUFBdUJFLE9BQW5CRSxrQkFBNEJKLE9BQVRFLE9BQU0sS0FBVyxPQUFSRixTQUFRO0lBQzdGO0lBQ0E7UUFDRSxjQUFjLEFBQUMsT0FBZUEsT0FBVEUsT0FBTSxLQUFlRCxPQUFaRCxTQUFRLE1BQWNLLE9BQVZKLE9BQU0sTUFBNEJLLE9BQXhCRCxxQkFBb0IsTUFBNkJFLE9BQXpCRCxzQkFBcUIsTUFBaUMsT0FBN0JDLDhCQUE2QjtJQUNwSTtJQUNBO1FBQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtJQUVELFdBQWVDIn0=