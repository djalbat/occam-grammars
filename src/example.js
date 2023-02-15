"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";

import TeXView from "./example/view/tex";
import MetaJSONView from "./example/view/metaJSON";
import PlainTextView from "./example/view/plainText";
import CustomGrammarBNFView from "./example/view/customGrammarBNF";
import CustomGrammarPatternView from "./example/view/customGrammarPattern";

const { renderStyles } = withStyle;

let View;

const body = new Body(),
      example = window.location.search.substring(1);  ///

switch (example) {
  case "tex" : View = TeXView; break;
  case "meta-json" : View = MetaJSONView; break;
  case "plain-text" : View = PlainTextView; break;
  case "custom-grammar-bnf" : View = CustomGrammarBNFView; break;
  case "custom-grammar-pattern" : View = CustomGrammarPatternView; break;
}

renderStyles();

body.mount(

  <View/>

);
