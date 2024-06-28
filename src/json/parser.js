"use strict";

import bnf from "./bnf";
import CommonParser from "../common/parser";

export default class JSONParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(JSONParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(JSONParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(JSONParser, rules); }
}
