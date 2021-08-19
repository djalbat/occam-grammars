"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser } from "occam-parsers";
import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export default class TeXParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          teXParser = TeXParser.fromRules(rules);

    return teXParser;
  }

  static fromRules(rules) { return CommonParser.fromRules(TeXParser, rules); }

  static fromNothing() { return TeXParser.fromBNF(bnf); }
}
