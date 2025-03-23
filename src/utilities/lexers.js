"use strict";

import { lexerUtilities } from "occam-lexers";

import FurtleLexer from "../furtle/lexer";

const { lexerFromRules, rulesFromEntries } = lexerUtilities;

export function furtleLexerFromEntries(entries) {
  let rules;

  rules = rulesFromEntries(entries);

  const furtleLexer = lexerFromRules(FurtleLexer, rules);

  return furtleLexer;
}

export function furtleLexerFromNothing() {
  const { entries } = FurtleLexer;

  let rules;

  rules = rulesFromEntries(entries);

  const furtleLexer = lexerFromRules(FurtleLexer, rules);

  return furtleLexer;
}

export default {
  furtleLexerFromEntries,
  furtleLexerFromNothing
};
