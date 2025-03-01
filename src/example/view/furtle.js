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
          augmented = false,
          furtleLexer = furtleLexerFromEntries(entries, augmented),
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
          augmented = false,
          furtleParser = furtleParserFromBNFAndStartRuleName(bnf, startRuleName, augmented),
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

  static initialContent = `String boundVariableNameFromQualifiedStatementChildNodes(Nodes qualifiedStatementChildNodes) {
  [ _, Node argumentNode ] = qualifiedStatementChildNodes;

  Node boundVariableNameTerminalNode = nodeQuery(argumentNode, /argument/term/variable/@name);

  String boundVariableName = 

    If (boundVariableNameTerminalNode != null)
      (String (Node boundVariableNameTerminalNode) {
        { String content As boundVariableName } = boundVariableNameTerminalNode;
      
        Return boundVariableName;
      })(boundVariableNameTerminalNode)

    Else
      ""
  ;
    
  Return boundVariableName;
}
`;

  static defaultProperties = {
    className: "furtle"
  };
}
