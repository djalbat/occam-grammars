"use strict";

import { CustomGrammarLexicalPatternLexer } from "../../index";  ///
import { CustomGrammarLexicalPatternParser } from "../../index";  ///

import View from "../view";

export default class CustomGrammarLexicalPatternView extends View {
  Lexer = CustomGrammarLexicalPatternLexer;

  Parser = CustomGrammarLexicalPatternParser;

  heading = "Custom Grammar Lexical Pattern Example";

  readOnly = false;

  initialContent = "<=|>=|<|>|\\+|\\-|×|÷";

  static defaultProperties = {
    className: "custom-grammar-lexical-pattern"
  };
}
