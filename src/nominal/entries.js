"use strict";

const DECIMAL = "[0-9]",
      GREEK = "[\\p{Script=Greek}]",
      LATIN = "[\\p{Script=Latin}]",
      LOWER_CASE_LATIN = "[\\p{Script=Latin}&&\\p{Lowercase}]",
      UPPER_CASE_LATIN = "[\\p{Script=Latin}&&\\p{Uppercase}]",
      MATHEMATICAL_SCRIPT = "[\\p{Style=Math_Script}]",
      MATHEMATICAL_FRAKTUR = "[\\p{Style=Math_Fraktur}]",
      MATHEMATICAL_SANS_SERIF_BOLD = "[\\u{1D5D4}-\\u{1D607}]";

const entries = [
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
    "name": `^(?:${LOWER_CASE_LATIN}${LATIN}+${DECIMAL}*|${UPPER_CASE_LATIN}${LATIN}*${DECIMAL}*)`,
  },
  {
    "identifier": `^(?:${LATIN}+${DECIMAL}*|${GREEK}+|${MATHEMATICAL_SCRIPT}+|${MATHEMATICAL_FRAKTUR}+|${MATHEMATICAL_SANS_SERIF_BOLD}+)`
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

export default entries;
