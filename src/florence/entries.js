"use strict";

const entries = [
  {
    "special": "^(?:,|::|:|\\|-|\\(|\\)|\\[|\\]|\\.\\.\\.)"
  },
  {
    "keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|Metalemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Hence|Then|Type|Variable|Constructor|Combinator|DependentType|DisjointType|Metavariable|from|by|construction|undefined|free|not|in|is)\\b"
  },
  {
    "metatype": "^(?:Statement)\\b"
  },
  {
    "name": "^[A-Za-zΑ-Ωα-ω_0-9]+"
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
