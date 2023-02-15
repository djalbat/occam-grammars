"use strict";

import { PlainTextLexer } from "../../index";  ///
import { PlainTextParser } from "../../index";  ///

import View from "../view";

export default class PlainTextView extends View {
  static Lexer = PlainTextLexer;

  static Parser = PlainTextParser;

  static readOnly = false;

  static initialContent = "";

  static defaultProperties = {
    className: "plain-text"
  };
}
