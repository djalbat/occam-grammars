"use strict";

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
    "name": "^[\\p{Latin}&&\\p{Uppercase}][\\p{Latin}]*"
  },
  {
    "identifier": "^[\\p{Latin}&&\\p{Lowercase}\\p{Greek}][\\p{Latin}\\p{Greek}_0-9']*"
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

export default entries;

