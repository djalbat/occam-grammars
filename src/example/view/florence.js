"use strict";

import { FlorenceLexer } from "../../index";  ///
import { FlorenceParser } from "../../index";  ///

import View from "../view";

import { defaultCustomGrammarBNF } from "../../florence/parser";

export default class FlorenceView extends View {
  getParseTree(tokens) {
    let parseTree = null,
        bnf = this.getBNF();

    bnf = `${bnf} ${defaultCustomGrammarBNF}`; ///

    const { Parser } = this.constructor,
          parser = Parser.fromBNF(bnf),
          ruleName = this.getRuleName(),
          ruleMap = parser.getRuleMap(),
          rule = ruleMap[ruleName],
          node = parser.parse(tokens, rule);

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

  static Lexer = FlorenceLexer;

  static Parser = FlorenceParser;

  static readOnly = false;

  static initialContent = `Rule (Explosion)
  Conclusion
    ρ |- R::P
  `;

  static defaultProperties = {
    className: "florence"
  };
}
