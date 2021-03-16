"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser } from "occam-parsers";
import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

import { termBNF, expressionBNF, statementBNF, metastatementBNF } from "./defaultCustomGrammar";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export default class FlorenceParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    bnf = `
    
      ${bnf}
      
      ${termBNF}
      
      ${expressionBNF}
      
      ${statementBNF}
      
      ${metastatementBNF}
      
    `; ///

    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          florenceParser = FlorenceParser.fromRules(rules);

    return florenceParser;
  }

  static fromRules(rules) { return CommonParser.fromRules(FlorenceParser, rules); }

  static fromNothing() { return FlorenceParser.fromBNF(bnf); }
}
