"use strict";

import { State as StateBase } from "occam-parsers";

export default class State extends StateBase {
  constructor(index, tokens, ruleMap, precedence, startOfContent) {
    super(index, tokens, ruleMap, precedence, startOfContent);

    this.startOfContent = startOfContent;
  }

  isAtStartOfContent() {
    let atStartOfContent = false;

    if (this.startOfContent) {
      atStartOfContent = super.isAtStartOfContent();
    }

    return atStartOfContent;
  }

  static fromTokensAndRuleMap(tokens, ruleMap, startOfContent) { return StateBase.fromTokensAndRuleMap(State, tokens, ruleMap, startOfContent); }
}
