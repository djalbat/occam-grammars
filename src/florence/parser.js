"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

import { typeBNF, termBNF, expressionBNF, statementBNF, metastatementBNF } from "./defaultCustomGrammar";

export default class FlorenceParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() {
    let { bnf } = FlorenceParser;

    bnf = `${bnf} ${defaultCustomGrammarBNF}`; ///

    const florenceParser = CommonParser.fromBNF(FlorenceParser, bnf);

    return florenceParser;
  }

  static fromBNF(bnf) { return CommonParser.fromBNF(FlorenceParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(FlorenceParser, rules); }
}

export const defaultCustomGrammarBNF = `
    
  ${typeBNF}

  ${termBNF}
  
  ${expressionBNF}
  
  ${statementBNF}
  
  ${metastatementBNF}
    
`;
