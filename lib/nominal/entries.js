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
        "name": "^(?:[a-z][A-Za-z]+[0-9]*|[A-Z][A-Za-z]*[0-9]*)"
    },
    {
        "identifier": "^(?:[\\p{Script=Latin}]+[0-9]*|[\\p{Script=Greek}]+|[\\u{1D5D4}-\\u{1D607}]|[\\u{1D504}-\\u{1D537}\\u{210C}\\u{2111}\\u{211C}\\u{2128}\\u{212D}]|[\\u{1D49C}-\\u{1D4CF}\\u{210A}\\u{210B}\\u{2110}\\u{2112}\\u{211B}\\u{212C}\\u{2130}\\u{2131}\\u{2133}\\u{2134}])"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub21pbmFsL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwicHJpbWFyeS1rZXl3b3JkXCI6IFwiXig/OlJ1bGV8QXhpb218VGhlb3JlbXxMZW1tYXxDb25qZWN0dXJlfE1ldGFMZW1tYXxNZXRhdGhlb3JlbXxQcmVtaXNlc3xQcmVtaXNlfENvbmNsdXNpb258UHJvb2Z8VGhlcmVmb3JlfFN1cHBvc2V8SGVuY2V8VGhlbnxQcm92aXNpb25hbHxUeXBlfFByb3BlcnRpZXN8UHJvcGVydHl8VmFyaWFibGV8Q29uc3RydWN0b3J8Q29tYmluYXRvcnxNZXRhdmFyaWFibGV8R2l2ZW4pXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzZWNvbmRhcnkta2V5d29yZFwiOiBcIl4oPzppc3xpbnxhbnxhfG9mfGJ5fGJlY2F1c2V8Zm9yfHNhdGlzZmllc3xwcm92aXNpb25hbGx5fGRlZmluZWR8dW5kZWZpbmVkfG1pc3Npbmd8cHJlc2VudClcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm1ldGEtdHlwZVwiOiBcIl4oPzpTdGF0ZW1lbnR8UmVmZXJlbmNlfEZyYW1lKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibmFtZVwiOiBcIl4oPzpbYS16XVtBLVphLXpdK1swLTldKnxbQS1aXVtBLVphLXpdKlswLTldKilcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZGVudGlmaWVyXCI6IFwiXig/OltcXFxccHtTY3JpcHQ9TGF0aW59XStbMC05XSp8W1xcXFxwe1NjcmlwdD1HcmVla31dK3xbXFxcXHV7MUQ1RDR9LVxcXFx1ezFENjA3fV18W1xcXFx1ezFENTA0fS1cXFxcdXsxRDUzN31cXFxcdXsyMTBDfVxcXFx1ezIxMTF9XFxcXHV7MjExQ31cXFxcdXsyMTI4fVxcXFx1ezIxMkR9XXxbXFxcXHV7MUQ0OUN9LVxcXFx1ezFENENGfVxcXFx1ezIxMEF9XFxcXHV7MjEwQn1cXFxcdXsyMTEwfVxcXFx1ezIxMTJ9XFxcXHV7MjExQn1cXFxcdXsyMTJDfVxcXFx1ezIxMzB9XFxcXHV7MjEzMX1cXFxcdXsyMTMzfVxcXFx1ezIxMzR9XSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJkZWxpbWl0ZXJcIjogXCJeKD86XFxcXC5cXFxcLlxcXFwufCx8XFxcXCh8XFxcXCl8XFxcXFt8XFxcXF0pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzpcXFxcfC18QHw6Onw6fD0pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXFxcXChcXFxcKVxcXFxbXFxcXF06LF0rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzO1xyXG4iXSwibmFtZXMiOlsiZW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkJBOzs7ZUFBQTs7O0FBM0JBLElBQU1BLFVBQVU7SUFDZDtRQUNFLG1CQUFtQjtJQUNyQjtJQUNBO1FBQ0UscUJBQXFCO0lBQ3ZCO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsY0FBYztJQUNoQjtJQUNBO1FBQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtJQUVELFdBQWVBIn0=