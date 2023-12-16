# Occam Grammars

[Occam](https://github.com/djalbat/occam)'s grammars.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Examples](#examples)
- [Usage](#usage)
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

## Examples

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The examples will then be available at the following URL:

http://localhost:8888

The source for the examples can be found in the `src/example.js` file and corresponding `src/example` folder. You are encouraged to try the examples whilst reading what follows. You can rebuild them on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

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

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com

