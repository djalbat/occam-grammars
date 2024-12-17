"use strict";

const entries = [
  {
    "special": "^(?::|,)"
  },
  {
    "bracket": "^(?:\\(|\\))"
  },
  {
    "primary-keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|MetaLemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Hence|Then|Type|Properties|Property|Variable|Constructor|Combinator|DependentType|DisjointType|Metavariable)\\b"
  },
  {
    "secondary-keyword": "^(?:is|in|the|an|a|of|by|from|for|not)\\b"
  },
  {
    "meta-type": "^(?:Statement|Reference|Frame)\\b"
  },
  {
    "name": "^[A-Za-zΑ-Ωα-ω][A-Za-zΑ-Ωα-ω_0-9]*"
  },
  {
    "unassigned": "^[^\\s\\(\\):,]+"
  }
];

export default entries;
