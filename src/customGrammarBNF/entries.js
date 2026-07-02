"use strict";

const entries = [
  {
    "backtick": "^`"
  },
  {
    "special": "^(?:\\||\\(|\\)|\\?|\\*|\\+|::=|;|<NO_WHITESPACE>|<END_OF_LINE>)"
  },
  {
    "number": "^(?:0|[1-9][0-9]*)"
  },
  {
    "name": "^[\\w~]+"
  },
  {
    "type": "^\\[[^\\]]+\\]"
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
