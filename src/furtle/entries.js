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
    "keyword": "^(?:if|else|reduce|every|some|as|return)"
  },
  {
    "primitive": "^(?:null|true|false)"
  },
  {
    "bracket": "^(?:\\{|\\})"
  },
  {
    "special": "^(?:!=|==|!|=|,|;|_|&&|\\|\\||\\(|\\)|\\[|\\])"
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
