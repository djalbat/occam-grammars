"use strict";

import { parserUtilities } from "occam-parsers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";

import FurtleParser from "../furtle/parser";

import { augmentBNFRules } from "../utilities/query";

const { rulesFromBNF, parserFromRules, parserFromRulesAndStartRuleName } = parserUtilities;

export function furtleParserFromBNF(bnf, augmented = true) {
  let rules;

  rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  if (augmented) {
    rules = augmentRules(rules);
  }

  const furtleParser = parserFromRules(FurtleParser, rules);

  return furtleParser;
}

export function furtleParserFromNothing(augmented = true) {
  const { bnf } = FurtleParser;

  let rules;

  rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  if (augmented) {
    rules = augmentRules(rules);
  }

  const furtleParser = parserFromRules(FurtleParser, rules);

  return furtleParser;
}

export function furtleParserFromBNFAndStartRuleName(bnf, startRuleName, augmented = true) {
  let rules;

  rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  if (augmented) {
    rules = augmentRules(rules);
  }

  const furtleParser = parserFromRulesAndStartRuleName(FurtleParser, rules, startRuleName);

  return furtleParser;
}

export default {
  furtleParserFromBNF,
  furtleParserFromNothing,
  furtleParserFromBNFAndStartRuleName
};

function augmentRules(rules) {
  let bnfRules = rules; ///

  bnfRules = augmentBNFRules(bnfRules);

  rules = bnfRules; ///

  return rules;
}
