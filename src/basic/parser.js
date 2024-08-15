"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

export default class BasicParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(BasicParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(BasicParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(BasicParser, rules); }
}
