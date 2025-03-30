"use strict";

import { lexersUtilities, parsersUtilities } from "../../index";  ///

import View from "../view";

import { bnfFromNothing, entriesFromNothing } from "../utilities/furtle";

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

  initialise() {
    this.assignContext();

    const { initialContent, initialRuleName } = this.constructor,
          bnf = bnfFromNothing(),
          entries = entriesFromNothing(),
          content = initialContent, ///
          ruleName = initialRuleName, ///
          lexicalEntries = entries; ///

    this.setBNF(bnf);

    this.setContent(content);

    this.setRuleName(ruleName);

    this.setLexicalEntries(lexicalEntries);

    this.keyUpHandler();
  }

  static readOnly = false;

  static initialContent = `Boolean isMetavariableFree(Node frameNode, Node statementNode) {
  Boolean metavariableBound = isMetavariableBound(frameNode, statementNode);

  Boolean metavariableFree = !metavariableBound;

  Return metavariableFree;
}
`;

  static defaultProperties = {
    className: "furtle"
  };
}
