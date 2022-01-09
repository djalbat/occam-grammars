"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

export default class MetaJSONParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(MetaJSONParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(MetaJSONParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(MetaJSONParser, rules); }
}
