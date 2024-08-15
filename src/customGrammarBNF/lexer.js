"use strict";

import { BNFLexer, CommonLexer, WhitespaceToken, RegularExpressionToken, EndOfLineNonSignificantToken, DoublyQuotedStringLiteralToken } from "occam-lexers";

const { entries } = BNFLexer;

export default class CustomGrammarBNFnLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = null;

  static RegularExpressionToken = RegularExpressionToken;

  static SingleLineCommentToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;

  static fromNothing() { return CommonLexer.fromNothing(CustomGrammarBNFnLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(CustomGrammarBNFnLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(CustomGrammarBNFnLexer, entries); }
}
