"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";

import FlorenceView from "./example/view/florence";
import PlainView from "./example/view/plain";
import MetaJSONView from "./example/view/metaJSON";
import CustomGrammarBNFView from "./example/view/customGrammarBNF";
import CustomGrammarLexicalPatternView from "./example/view/customGrammarLexicalPattern";

const { renderStyles } = withStyle;

let View;

const body = new Body(),
      example = window.location.search.substring(1);  ///

switch (example) {
  case "florence" : View = FlorenceView; break;
  case "plain" : View = PlainView; break;
  case "metaJSON" : View = MetaJSONView; break;
  case "customGrammarBNF" : View = CustomGrammarBNFView; break;
  case "customGrammarLexicalPattern" : View = CustomGrammarLexicalPatternView; break;
}

renderStyles();

body.mount(

  <View/>

);
