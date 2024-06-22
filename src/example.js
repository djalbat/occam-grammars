"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";

import MetaJSONView from "./example/view/metaJSON";
import PlainTextView from "./example/view/plainText";
import CustomGrammarBNFView from "./example/view/customGrammarBNF";
import CustomGrammarPatternView from "./example/view/customGrammarPattern";

import { META_JSON_DOCUMENT_TYPE,
         PLAIN_TEXT_DOCUMENT_TYPE,
         CUSTOM_GRAMMAR_BNF_DOCUMENT_TYPE,
         CUSTOM_GRAMMAR_PATTERN_DOCUMENT_TYPE } from "./documentTypes";

const { renderStyles } = withStyle;

let View;

const body = new Body(),
      example = window.location.search.substring(1);  ///

switch (example) {
  case META_JSON_DOCUMENT_TYPE : View = MetaJSONView; break;
  case PLAIN_TEXT_DOCUMENT_TYPE : View = PlainTextView; break;
  case CUSTOM_GRAMMAR_BNF_DOCUMENT_TYPE : View = CustomGrammarBNFView; break;
  case CUSTOM_GRAMMAR_PATTERN_DOCUMENT_TYPE : View = CustomGrammarPatternView; break;
}

renderStyles();

body.mount(

  <View/>

);
