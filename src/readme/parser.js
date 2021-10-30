"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser } from "occam-parsers";
import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export default class PlainParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          readmeParser = PlainParser.fromRules(rules);

    return readmeParser;
  }

  static fromRules(rules) { return CommonParser.fromRules(PlainParser, rules); }

  static fromNothing() { return PlainParser.fromBNF(bnf); }
}
