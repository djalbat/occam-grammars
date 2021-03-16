"use strict";

import { BNFLexer } from "occam-lexers";

export default class CustomGrammarBNFLexer extends BNFLexer {
  static fromNothing() {
    const bnfLexer = BNFLexer.fromNothing(),
          rules = bnfLexer.getRules(),
          customGrammarBNFLexer = new CustomGrammarBNFLexer(rules);

    return customGrammarBNFLexer;
  }
}
