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
    "name": "^(?:[a-z][A-Za-z0-9]+|[A-Z][A-Za-z0-9]*)"
  },
  {
    "identifier": "^[\\p{Script=Latin}\\p{Script=Greek}][\\p{Script=Latin}\\p{Script=Greek}_0-9']*"
  },
  {
    "special": "^(?:\\.\\.\\.|\\|-|@|::|:|=)"
  },
  {
    "comma": "^,"
  },
  {
    "bracket": "^(?:\\(|\\)|\\[|\\])"
  },
  {
    "unassigned": "^[^\\s\\(\\)\\[\\]:,]+"
  }
];

export default entries;

