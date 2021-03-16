"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser } from "occam-parsers";
import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export default class CustomGrammarLexicalPatternParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          customGrammarLexicalPatternParser = CustomGrammarLexicalPatternParser.fromRules(rules);

    return customGrammarLexicalPatternParser;
  }

  static fromRules(rules) { return CommonParser.fromRules(CustomGrammarLexicalPatternParser, rules); }

  static fromNothing() { return CustomGrammarLexicalPatternParser.fromBNF(bnf); }
}
