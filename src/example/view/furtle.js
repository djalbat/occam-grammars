"use strict";

import { lexerUtilities } from "occam-lexers";
import { parserUtilities } from "occam-parsers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";
import { FurtleLexer, FurtleParser } from "../../index";  ///

import View from "../view";

const { rulesFromEntries, lexerFromRules } = lexerUtilities,
      { rulesFromBNF, parserFromRulesAndStartRuleName } = parserUtilities;

export default class FurtleView extends View {
  getTokens() {
    const lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries, ///
          rules = rulesFromEntries(entries),
          furtleLexer = lexerFromRules(FurtleLexer, rules),
          lexer = furtleLexer,  ///
          content = this.getContent(),
          tokens = lexer.tokenise(content);

    return tokens;
  }

  getParseTree(tokens) {
    let parseTree = null;

    const bnf = this.getBNF();

    let rules;

    rules = rulesFromBNF(bnf);

    rules = eliminateLeftRecursion(rules);  ///

    const ruleName = this.getRuleName(),
          startRuleName = ruleName, ///
          furtleParser = parserFromRulesAndStartRuleName(FurtleParser, rules, startRuleName),
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

  static initialContent = `Node* termNode, statementNode; Boolean* bound = false;
  
String variableName = variableNameFromTermNode(termNode);

If (variableName == null) {
  Break;
}

Nodes statementNodes = nodesQuery(statementNode, //statement);

ForEach(statementNodes, (Node statementNode) {
  String boundVariableName = boundVariableNameFromStatementNode(statementNode); 
  
  If (boundVariableName == variableName) {
    bound = true;
    
    Break;
  }
});
  
  
String variableNameFromTermNode(Node termNode) {
  String variableName = null;
  
  Node variableNameTerminalNode = nodeQuery(termNode, /term/variable/@name);
  
  If (variableNameTerminalNode != null) {
    String content;
    
    { content } = variableNameTerminalNode;
    
    variableName = content;
  }
  
  Return variableName;
}

String boundVariableNameFromStatementNode(Node statementNode) {
  String boundVariableName = null;
  
  Nodes childNodes;
  
  { childNodes } = statementNode;
  
  Node firstChildNode;

  [ firstChildNode ] = childNodes;
  
  Boolean firstChildNodeTerminalNode = isTerminalNode(firstChildNode);
  
  If (firstChildNodeTerminalNode) {
    Node terminalNode = firstChildNode;
    
    String content;
    
    { content } = firstChildNode;
    
    If ((content == "∀") || (content == "∃")) {
      Node secondChildNode;
      
      [ _, secondChildNode ] = childNodes;
      
      Node argumentNode = secondChildNode;
      
      Node boundVariableNameTerminalNode = nodeQuery(argumentNode, /argument/term/variable/@name);
      
      If (boundVariableNameTerminalNode != null) {
        { content } = boundVariableNameTerminalNode;
        
        boundVariableName = content;
      }
    }
  }
    
  Return boundVariableName;
}
`;

  static defaultProperties = {
    className: "furtle"
  };
}
