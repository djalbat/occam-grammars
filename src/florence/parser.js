"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

import { typeBNF, termBNF, statementBNF, metastatementBNF } from "./defaultCustomGrammar";

export default class FlorenceParser extends CommonParser {
  static bnf = bnf;
}

export const defaultCustomGrammarBNF = `
    
  ${typeBNF}

  ${termBNF}
  
  ${statementBNF}
  
  ${metastatementBNF}
    
`;
