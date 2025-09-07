"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

export default class CustomGrammarBNFParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(CustomGrammarBNFParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(CustomGrammarBNFParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(CustomGrammarBNFParser, rules); }
}
