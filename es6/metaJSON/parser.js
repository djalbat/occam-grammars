"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser } from "occam-parsers";
import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export default class MetaJSONParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          metaJSONParser = MetaJSONParser.fromRules(rules);

    return metaJSONParser;
  }

  static fromRules(rules) { return CommonParser.fromRules(MetaJSONParser, rules); }

  static fromNothing() { return MetaJSONParser.fromBNF(bnf); }
}
