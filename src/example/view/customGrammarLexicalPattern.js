"use strict";

import { CustomGrammarLexicalPatternLexer } from "../../index";  ///
import { CustomGrammarLexicalPatternParser } from "../../index";  ///

import View from "../view";

export default class CustomGrammarLexicalPatternView extends View {
  static Lexer = CustomGrammarLexicalPatternLexer;

  static Parser = CustomGrammarLexicalPatternParser;

  static readOnly = false;

  static initialContent = "<=|>=|<|>|\\+|\\-|×|÷";

  static defaultProperties = {
    className: "custom-grammar-lexical-pattern"
  };
}
