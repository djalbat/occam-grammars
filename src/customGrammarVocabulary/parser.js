"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

export default class CustomGrammarVocabularyParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(CustomGrammarVocabularyParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(CustomGrammarVocabularyParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(CustomGrammarVocabularyParser, rules); }
}
