"use strict";

const LATIN = "[\\p{Script=Latin}]",
      DECIMAL = "[0-9]";

const entries = [
  {
    "type": "^(?:Nodes|Node|String|Number|Boolean)"
  },
  {
    "query": "^(?:nodeQuery|nodesQuery)"
  },
  {
    "primary-keyword": "^return"
  },
  {
    "secondary-keyword": "^(?:if|else|reduce|every|some|as)"
  },
  {
    "primitive": "^(?:null|true|false)"
  },
  {
    "bracket": "^(?:\\{|\\})"
  },
  {
    "special": "^(?:!|=|!=|==|,|;|_|&&|\\|\\||\\(|\\)|\\[|\\])"
  },
  {
    "name": `^${LATIN}+${DECIMAL}*`,
  },
  {
    "number": `^${DECIMAL}+`
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
