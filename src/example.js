"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";

import TeXView from "./example/view/tex";
import JSONView from "./example/view/json";
import FurtleView from "./example/view/furtle";
import PlainTextView from "./example/view/plainText";
import CustomGrammarBNFView from "./example/view/customGrammarBNF";
import CustomGrammarVocabularyView from "./example/view/customGrammarVocabulary";

const { renderStyles } = withStyle;

let View;

const body = new Body(),
      example = window.location.search.substring(1);  ///

switch (example) {
  case "tex" : View = TeXView; break;
  case "json" : View = JSONView; break;
  case "furtle" : View = FurtleView; break;
  case "plain-text" : View = PlainTextView; break;
  case "custom-grammar-bnf" : View = CustomGrammarBNFView; break;
  case "custom-grammar-vocabulary" : View = CustomGrammarVocabularyView; break;
}

renderStyles();

body.mount(

  <View/>

);
