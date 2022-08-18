"use strict";

const entries = [
  {
    "keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|Metalemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Type|Variable|Constructor|Combinator|DependentType|DisjointType|Metavariable|Let|for|from|by)\\b"
  },
  {
    "special": "^(?:,|=|::|:|\\|-|\\(|\\)|\\[|\\]|\\.\\.\\.)"
  },
  {
    "reserved": "^(?:undefined|free|not|in|is)\\b"
  },
  {
    "name": "^[A-Za-zΑ-Ωα-ω_0-9]+"
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
