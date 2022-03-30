"use strict";

const entries = [
  {
    "special": "^(?:,|=|::|:|\\|-|\\(|\\))|\\[|\\]|\\.\\.\\."
  },
  {
    "keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|Metalemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Types|Type|Variables|Variable|Constructors|Constructor|Combinators|Combinator|DependentTypes|DependentType|DisjointTypes|DisjointType|Metavariables|Metavariable|Let|for|from|by)\\b"
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
