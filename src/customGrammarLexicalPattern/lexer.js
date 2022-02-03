"use strict";

import { CommonLexer, WhitespaceToken, EndOfLineSignificantToken } from "occam-lexers";

import entries from "./entries";

export default class CustomGrammarLexicalPatternLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = null;

  static fromNothing() { return CommonLexer.fromNothing(CustomGrammarLexicalPatternLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(CustomGrammarLexicalPatternLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(CustomGrammarLexicalPatternLexer, entries); }
}
