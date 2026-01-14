# parse-number <br> [![Test workflow status](https://github.com/ChrisCodesThings/parse-number/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/parse-number)](https://www.npmjs.com/package/@chriscodesthings/parse-number) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **A numeric sanitizer that fixes Number() edge cases and allows for percentages.**

## Description

A utility function that parses inputs into numbers while specifically handling edge cases like "Infinity", whitespace, and percentage strings.

### See...
- [Install/Usage](#install-from-npm "Install and Usage")
- [Syntax](#syntax "Syntax")
- [Examples](#examples "Examples")
- [See Also](#see-also "See Also")

---

## Install from NPM

```sh
npm install @chriscodesthings/parse-number
```

## Usage

### Node / CDN

```js
// Node
import parseNumber from '@chriscodesthings/parse-number';

// ... or ... //

// jsDelivr
import parseNumber from 'https://cdn.jsdelivr.net/npm/@chriscodesthings/parse-number';

// ... or ... //

// Unpkg
import parseNumber from 'https://unpkg.com/@chriscodesthings/parse-number';


console.log(parseNumber("50%")); // 50
```

## Syntax

```js
parseNumber(x);
```

### Parameters

- *x*: any - The value to parse into a number.

### Return Value

Returns a `number`. Returns `NaN` if the input is non-numeric, a blank string, or "Infinity".

## Examples

```js
import parseNumber from '@chriscodesthings/parse-number';

parseNumber(123);      // 123
parseNumber("123");    // 123
parseNumber("  45  "); // 45
parseNumber("0xff");   // 255
parseNumber("75%");    // 75
parseNumber("");       // NaN
parseNumber("Infinity"); // NaN
```

## See Also...

- [**is**: Type checking utilities](https://github.com/ChrisCodesThings/is "Type checking utilities")
- [**color-utils**: A collection of lightweight utilities for color identification, conversion, and simple manipulation](https://github.com/ChrisCodesThings/color-utils "A collection of lightweight utilities for color identification, conversion, and simple manipulation")

## License

MIT © ChrisCodesThings