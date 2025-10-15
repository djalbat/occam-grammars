"use strict";

const DECIMAL = "[0-9]",
      GREEK = "[\\p{Script=Greek}]",
      LATIN = "[\\p{Script=Latin}]",
      LOWER_CASE_LATIN = "[\\p{Script=Latin}&&\\p{Lowercase}]",
      UPPER_CASE_LATIN = "[\\p{Script=Latin}&&\\p{Uppercase}]",
      MATHEMATICAL_SCRIPT = "[\\u{1D49C}\\u{212C}\\u{1D49E}\\u{1D49F}\\u{2130}\\u{2131}\\u{1D4A2}\\u{210B}\\u{2110}\\u{1D4A5}\\u{1D4A6}\\u{2112}\\u{2133}\\u{1D4A9}-\\u{1D4AC}\\u{211B}\\u{1D4AE}-\\u{1D4B5}\\u{1D4B6}-\\u{1D4CF}]",
      MATHEMATICAL_FRAKTUR = "[\\u{1D504}\\u{1D505}\\u{212D}\\u{1D507}-\\u{1D50A}\\u{210C}\\u{2111}\\u{1D50D}-\\u{1D514}\\u{211C}\\u{1D516}-\\u{1D51C}\\u{2128}\\u{1D51E}-\\u{1D537}]",
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
