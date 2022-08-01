"use strict";

import { CustomGrammarPatternLexer } from "../../index";  ///
import { CustomGrammarPatternParser } from "../../index";  ///

import View from "../view";

export default class CustomGrammarPatternView extends View {
  static Lexer = CustomGrammarPatternLexer;

  static Parser = CustomGrammarPatternParser;

  static readOnly = false;

  static initialContent = "<=|>=|<|>|\\+|\\-|×|÷";

  static defaultProperties = {
    className: "custom-grammar-pattern"
  };
}
