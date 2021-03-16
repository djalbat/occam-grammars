"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser } from "occam-parsers";
import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export default class LaTeXParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          laTeXParser = LaTeXParser.fromRules(rules);

    return laTeXParser;
  }

  static fromRules(rules) { return CommonParser.fromRules(LaTeXParser, rules); }

  static fromNothing() { return LaTeXParser.fromBNF(bnf); }
}
