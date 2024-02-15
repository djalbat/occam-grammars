"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

export default class CustomGrammarPatternParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(CustomGrammarPatternParser); }
}
