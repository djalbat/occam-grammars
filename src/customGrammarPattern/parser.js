"use strict";

import bnf from "./bnf";
import CommonParser from "../common/parser";

export default class CustomGrammarPatternParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(CustomGrammarPatternParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(CustomGrammarPatternParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(CustomGrammarPatternParser, rules); }
}
