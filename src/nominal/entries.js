"use strict";

const LATIN = "[\\p{Script=Latin}]",
      GREEK = "[\\p{Script=Greek}]",
      SCRIPT = "[\\u{1D49C}-\\u{1D4CF}\\u{210A}\\u{210B}\\u{2110}\\u{2112}\\u{211B}\\u{212C}\\u{2130}\\u{2131}\\u{2133}\\u{2134}]",
      DECIMAL = "[0-9]",
      FRAKTUR = "[\\u{1D504}-\\u{1D537}\\u{210C}\\u{2111}\\u{211C}\\u{2128}\\u{212D}]",
      SANS_SERIF = "[\\u{1D5D4}-\\u{1D607}]";

const entries = [
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
    "identifier": `^(?:${LATIN}+${DECIMAL}*|${GREEK}+|${SANS_SERIF}+|${FRAKTUR}+|${SCRIPT}+)`
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
