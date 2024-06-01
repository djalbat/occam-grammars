"use strict";

import { BNFParser } from "occam-parsers";

import State from "../state";

export default class CustomGrammarBNFParser extends BNFParser {
  static State = State;
}
