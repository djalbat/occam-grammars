"use strict";

import { WhitespaceToken, EndOfLineSignificantToken } from "occam-lexers";

import entries from "./entries";
import CommonLexer from "../common/lexer";

export default class CustomGrammarPatternLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = null;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = null;

  static fromNothing() { return CommonLexer.fromNothing(CustomGrammarPatternLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(CustomGrammarPatternLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(CustomGrammarPatternLexer, entries); }
}
