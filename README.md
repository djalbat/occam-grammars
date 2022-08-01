# Occam Grammars

[Occam](https://github.com/djalbat/occam)'s grammars.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Building](#building)
- [Contact](#contact)

## Introduction

In Occam parlance, a grammar is a combination of lexical entries for a lexer and BNF for a parser. This package contains all the grammars for Occam, specifically:

* Florence
* Plain
* Meta JSON
* Custom grammar BNF
* Custom grammar pattern

This package exports the lexers and parsers to support these grammars.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-grammars

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-grammars.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Usage

Import the requisite lexer and parser from this package. Then call their fromNothing(...) factory methods.

```
import { FlorenceLexer } from "occam-grammars";
import { FlorenceParser } from "occam-grammars"

const florenceLexer = FlorenceLexer.fromNothing(),
      florenceParser = FlorenceParser.fromNothing();

const content = `

        ...

      `,
      tokens = florenceLexer.tokenise(content),
      node = florenceParser.parse(tokens);

...
```

The tokens returned from the lexers's `tokenise(...)`` method can be passed directly to the parser's `parse(...) method`, which itself returns a node or `null`.

## Examples

There are examples for each grammar. To view them, open the `index.html` file in the root of the repository. Each example shows a representation of the parse tree, which is useful for debugging.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

You can also start a small development server:

    npm start

The example will then be available at http://localhost:8888 and will reload automatically when changes are made.

## Contact

* james.smith@openmathematics.org
