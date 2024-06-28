"use strict";

const entries = [
  {
    "special": "^(?:,|:|\\{|\\}|\\[|\\])"
  },
  {
    "number": "^-?[1-9][0-9]*(\\.[0-9]+)?"
  },
  {
    "boolean": "^(?:true|false)"
  },
  {
    "null": "^(?:null)"
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
