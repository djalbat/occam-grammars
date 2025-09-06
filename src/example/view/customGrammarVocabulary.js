"use strict";

import { CustomGrammarVocabularyLexer, CustomGrammarVocabularyParser } from "../../index";  ///

import View from "../view";

export default class CustomGrammarVocabularyView extends View {
  static Lexer = CustomGrammarVocabularyLexer;

  static Parser = CustomGrammarVocabularyParser;

  static readOnly = false;

  static initialContent = `adsf

aadf
`;

  static defaultProperties = {
    className: "custom-grammar-vocabulary",
  };
}
