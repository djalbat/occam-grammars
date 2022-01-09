"use strict";

import { CommonLexer } from "occam-lexers";

import entries from "./entries";

export default class MetaJSONLexer extends CommonLexer {
  static entries = entries;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static fromNothing() { return CommonLexer.fromNothing(MetaJSONLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(MetaJSONLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(MetaJSONLexer, entries); }
}
