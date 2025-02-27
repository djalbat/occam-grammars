"use strict";

import { FurtleLexer, FurtleParser, lexersUtilities, parsersUtilities } from "../../index";  ///

import View from "../view";

const { furtleLexerFromEntries } = lexersUtilities,
      { furtleParserFromBNFAndStartRuleName } = parsersUtilities;

export default class FurtleView extends View {
  getTokens() {
    const lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries, ////
          furtleLexer = furtleLexerFromEntries(entries),
          lexer = furtleLexer,  ///
          content = this.getContent(),
          tokens = lexer.tokenise(content);

    return tokens;
  }

  getParseTree(tokens) {
    let parseTree = null;

    const bnf = this.getBNF(),
          ruleName = this.getRuleName(),
          startRuleName = ruleName, ///
          furtleParser = furtleParserFromBNFAndStartRuleName(bnf, startRuleName),
          parser = furtleParser, ///
          node = parser.parse(tokens);

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

  static Lexer = FurtleLexer;

  static Parser = FurtleParser;

  static readOnly = false;

  static initialContent = `{
  { String content } = foo;
}`;

  static defaultProperties = {
    className: "furtle"
  };
}
