"use strict";

import { parserUtilities } from "occam-parsers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";

import FurtleParser from "../furtle/parser";

const { rulesFromBNF, parserFromRules } = parserUtilities;

export function furtleParserFromNothing() {
  const { bnf } = FurtleParser;

  let rules;

  rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  const furtleParser = parserFromRules(FurtleParser, rules);

  return furtleParser;
}


export default {
  furtleParserFromNothing
};
