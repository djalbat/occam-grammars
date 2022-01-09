"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

export default class CustomGrammarLexicalPatternParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(CustomGrammarLexicalPatternParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(CustomGrammarLexicalPatternParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(CustomGrammarLexicalPatternParser, rules); }
}
