"use strict";

import { lexerUtilities } from "occam-lexers";

import FurtleLexer from "../furtle/lexer";

import { augmentLexicalRules } from "../utilities/query";

const { lexerFromRules, rulesFromEntries } = lexerUtilities;

export function furtleLexerFromEntries(entries, augmented = true) {
  let rules;

  rules = rulesFromEntries(entries);

  if (augmented) {
    rules = augmentRules(rules);
  }

  const furtleLexer = lexerFromRules(FurtleLexer, rules);

  return furtleLexer;
}

export function furtleLexerFromNothing(augmented = true) {
  const { entries } = FurtleLexer;

  let rules;

  rules = rulesFromEntries(entries);

  if (augmented) {
    rules = augmentRules(rules);
  }

  const furtleLexer = lexerFromRules(FurtleLexer, rules);

  return furtleLexer;
}

export default {
  furtleLexerFromEntries,
  furtleLexerFromNothing
};

function augmentRules(rules) {
  let lexicalRules = rules; ///

  lexicalRules = augmentLexicalRules(lexicalRules);

  rules = lexicalRules; ///

  return rules;
}
