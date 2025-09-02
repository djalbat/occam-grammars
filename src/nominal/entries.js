"use strict";

const entries = [
  {
    "special": "^(?:\\.\\.\\.|\\|-|@|,|::|:|=)"
  },
  {
    "bracket": "^(?:\\(|\\)|\\[|\\])"
  },
  {
    "primary-keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|MetaLemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Hence|Then|Provisional|Type|Properties|Property|Variable|Constructor|Combinator|Metavariable|Given)\\b"
  },
  {
    "secondary-keyword": "^(?:is|in|an|a|of|by|from|because|for|satisfies|provisionally|defined|undefined|missing|present)\\b"
  },
  {
    "meta-type": "^(?:Statement|Reference|Frame)\\b"
  },
  {
    "identifier": "^[A-Za-zΑ-Ωα-ω][A-Za-zΑ-Ωα-ω_0-9]*"
  },
  {
    "reserved": "^(?:\\{|\\}|<|>|;|\.|\\+|-|\\*|/|%|\\^|&|!|'|\"|#|\\$|\\?|~|`|\\\\|\\|=|\\|)"
  },
  {
    "unassigned": "^[^\\s\\(\\)\\[\\]:,]+"
  }
];

export default entries;
