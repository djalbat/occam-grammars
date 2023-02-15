"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

export default class PlainTextParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(PlainTextParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(PlainTextParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(PlainTextParser, rules); }
}
