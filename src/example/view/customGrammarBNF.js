"use strict";

import { CustomGrammarBNFLexer } from "../../index";  ///
import { CustomGrammarBNFParser } from "../../index";  ///

import View from "../view";

export default class CustomGrammarBNFView extends View {
  Lexer = CustomGrammarBNFLexer;

  Parser = CustomGrammarBNFParser;

  readOnly = true;

  initialContent = `

                       term  ::=  operation ( <NO_WHITESPACE>"(" expression ")" )?

                               ;


                  operation  ::=  "insert"<NO_WHITESPACE>"(" expression "," expression ")"

                               |  "delete"<NO_WHITESPACE>"(" expression "," expression ")" 

                               |  "empty"<NO_WHITESPACE>"("<NO_WHITESPACE>")"

                               ;
`;

  getParseTree(tokens) {
    let parseTree = null;

    const parser = this.Parser.fromNothing(),
          ruleName = this.getRuleName(),
          ruleMap = parser.getRuleMap(),
          rule = ruleMap[ruleName],
          node = parser.parse(tokens, rule);

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

  static defaultProperties = {
    className: "custom-grammar-bnf"
  };
}
