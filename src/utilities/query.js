"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";
import { ExpressionLexer, ExpressionParser } from "occam-query";

import { ERROR_RULE_NAME, EXPRESSION_RULE_NAME } from "../constants";

const { first, extract } = arrayUtilities;

const expressionBNFRules = expressionBNFRulesFromNothing(),
      expressionLexicalRules = expressionLexicalRulesFromNothing();

export function augmentLexicalRules(lexicalRules) {
  lexicalRules = [  ///
    ...lexicalRules
  ];

  const unassignedLexicalRule = lexicalRules.pop(); ///

  lexicalRules = [  ///
    ...lexicalRules,
    ...expressionLexicalRules
  ];

  return lexicalRules;
}

export function augmentBNFRules(bnrRules) {
  bnrRules = [ ///
    ...bnrRules,
    ...expressionBNFRules
  ];

  return bnrRules;
}

function expressionLexicalRulesFromNothing() {
  const expressionLexer = ExpressionLexer.fromNothing(),
        rules = expressionLexer.getRules(),
        expressionLexicalRules = [  ///
          ...rules
        ];

  return expressionLexicalRules;
}

function expressionBNFRulesFromNothing() {
  const expressionParser = ExpressionParser.fromNothing(),
        ruleMap = expressionParser.getRuleMap(),
        rules = Object.values(ruleMap);

  extract(rules, (rule) => {
    const ruleName = rule.getName();

    if (ruleName === ERROR_RULE_NAME) {
      return true;
    }
  });

  const expressionRule = extract(rules, (rule) => {
    const ruleName = rule.getName();

    if (ruleName === EXPRESSION_RULE_NAME) {
      return true;
    }
  });

  let rule = expressionRule,  ///
      definitions = rule.getDefinitions();

  const name = rule.getName(),
        opacity = rule.getOpacity(),
        NonTerminalNode = rule.getNonTerminalNode(),
        firstDefinition = first(definitions),
        definition = firstDefinition; ///

  definitions = [
    definition
  ];

  rule = Rule.fromNameOpacityDefinitionsAndNonTerminalNode(name, opacity, definitions, NonTerminalNode);

  rules.unshift(rule);

  const expressionBNFRules = rules;  ///

  return expressionBNFRules;
}
