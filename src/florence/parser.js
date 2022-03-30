"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

import { termBNF, expressionBNF, statementBNF, metastatementBNF } from "./defaultCustomGrammar";

export default class FlorenceParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() {
    let { bnf } = FlorenceParser;

    bnf = augmentBNF(bnf);  ///

    return CommonParser.fromBNF(FlorenceParser, bnf);
  }

  static fromBNF(bnf) {
    bnf = augmentBNF(bnf);  ///

    return CommonParser.fromBNF(FlorenceParser, bnf);
  }

  static fromRules(rules) { return CommonParser.fromRules(FlorenceParser, rules); }
}

function augmentBNF(bnf) {
  bnf = `
    
      ${bnf}
      
      ${termBNF}
      
      ${expressionBNF}
      
      ${statementBNF}
      
      ${metastatementBNF}
      
    `; ///

  return bnf;
}