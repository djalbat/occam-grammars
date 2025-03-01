"use strict";

import { lexersUtilities, parsersUtilities } from "../../index";
import { rulesUtilities as lexersRulesUtilities } from "occam-lexers";
import { rulesUtilities as parsersRulesUtilities } from "occam-parsers";

const { rulesAsEntries } = lexersRulesUtilities,
      { rulesAsString, rulesFromStartRuleAndRuleMap } = parsersRulesUtilities;

const { furtleLexerFromNothing } = lexersUtilities,
      { furtleParserFromNothing } = parsersUtilities;

export function bnfFromNothing() {
  const furtleParser = furtleParserFromNothing(),
        startRule = furtleParser.getStartRule(),
        ruleMap = furtleParser.getRuleMap(),
        rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap),
        multiline = true,
        string = rulesAsString(rules, multiline),
        bnf = string; ///

  return bnf;
}

export function entriesFromNothing() {
  const furtleLexer = furtleLexerFromNothing(),
        rules = furtleLexer.getRules(),
        entries = rulesAsEntries(rules);

  return entries;
}
