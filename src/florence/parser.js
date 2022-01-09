"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

import { termBNF, expressionBNF, statementBNF, metastatementBNF } from "./defaultCustomGrammar";

export default class FlorenceParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(FlorenceParser); }

  static fromBNF(bnf) {
    bnf = `
    
      ${bnf}
      
      ${termBNF}
      
      ${expressionBNF}
      
      ${statementBNF}
      
      ${metastatementBNF}
      
    `; ///

    return CommonParser.fromBNF(FlorenceParser, bnf);
  }

  static fromRules(rules) { return CommonParser.fromRules(FlorenceParser, rules); }
}
