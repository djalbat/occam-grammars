"use strict";

const entries = [
  {
    "special": "^(?:,|::|:|=|\\||\\(|\\)|\\[|\\]|\\.\\.\\.)"
  },
  {
    "primary-keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|Metalemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Hence|Then|Type|Variable|Constructor|Combinator|DependentType|DisjointType|Metavariable)\\b"
  },
  {
    "secondary-keyword": "^(?:from|by)\\b"
  },
  {
    "meta-type": "^(?:Statement|Context|Label)\\b"
  },
  {
    "name": "^[A-Za-zΑ-Ωα-ω][A-Za-zΑ-Ωα-ω_0-9]*"
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
