"use strict";

import { CommonLexer,
         WhitespaceToken,
         RegularExpressionToken,
         EndOfLineNonSignificantToken,
         SinglyQuotedStringLiteralToken,
         DoublyQuotedStringLiteralToken,
         PythonStyleSingleLineCommentToken,
         EndOfLineCommentNonSignificantToken,
         PythonStyleEndOfMultiLineCommentToken,
         PythonStyleStartOfMultiLineCommentToken,
         PythonStyleMiddleOfMultiLineCommentToken } from "occam-lexers";

import entries from "./entries";

export default class BasicLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = EndOfLineCommentNonSignificantToken; ///

  static RegularExpressionToken = RegularExpressionToken;

  static SingleLineCommentToken = PythonStyleSingleLineCommentToken; ///

  static EndOfMultiLineCommentToken = PythonStyleEndOfMultiLineCommentToken; ///

  static StartOfMultiLineCommentToken = PythonStyleStartOfMultiLineCommentToken; ///

  static MiddleOfMultiLineCommentToken = PythonStyleMiddleOfMultiLineCommentToken; ///

  static SinglyQuotedStringLiteralToken = SinglyQuotedStringLiteralToken;

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;

  static fromNothing() { return CommonLexer.fromNothing(BasicLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(BasicLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(BasicLexer, entries); }
}
