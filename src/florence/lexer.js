"use strict";

import { CommonLexer } from "occam-lexers";
import { EndOfLineSignificantToken } from "occam-lexers";

import entries from "./entries";
import SingleLineCommentToken from "./token/nonSignificant/comment/singleLine";
import EndOfMultiLineCommentToken from "./token/nonSignificant/comment/multiLine/endOf";
import StartOfMultiLineCommentToken from "./token/nonSignificant/comment/multiLine/startOf";
import MiddleOfMultiLineCommentToken from "./token/nonSignificant/comment/multiLine/middleOf";

export default class FlorenceLexer extends CommonLexer {
  matchRegularExpression(content) { return null; }

  matchSinglyQuotedStringLiteral(content) { return null; }

  static entries = entries;

  static EndOfLineToken = EndOfLineSignificantToken; ///

  static SingleLineCommentToken = SingleLineCommentToken;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = EndOfMultiLineCommentToken;

  static StartOfMultiLineCommentToken = StartOfMultiLineCommentToken;

  static MiddleOfMultiLineCommentToken = MiddleOfMultiLineCommentToken;

  static SinglyQuotedStringLiteralToken = null;

  static fromRules(rules) { return CommonLexer.fromRules(FlorenceLexer, rules); }

  static fromNothing() { return CommonLexer.fromEntries(FlorenceLexer, entries); }

  static fromEntries(entries) { return CommonLexer.fromEntries(FlorenceLexer, entries); }
}
