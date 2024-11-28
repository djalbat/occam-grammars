"use strict";

import { CustomGrammarBNFLexer, CustomGrammarBNFParser } from "../../index";  ///

import View from "../view";

export default class CustomGrammarBNFView extends View {
  static Lexer = CustomGrammarBNFLexer;

  static Parser = CustomGrammarBNFParser;

  static readOnly = true;

  static initialContent = `

       term  ::=  operation ( <NO_WHITESPACE>"(" term ")" )? ;


  operation  ::=  "insert"<NO_WHITESPACE>"(" term "," term ")"

               |  "delete"<NO_WHITESPACE>"(" term "," term ")" 

               |  "empty"<NO_WHITESPACE>"("<NO_WHITESPACE>")"

               ;
`;

  static defaultProperties = {
    className: "custom-grammar-bnf"
  };
}
