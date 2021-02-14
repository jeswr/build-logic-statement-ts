# build-logic-statement-ts
Build logical statements

[![GitHub license](https://img.shields.io/github/license/jeswr/build-logic-statement-ts.svg)](https://github.com/jeswr/build-logic-statement-ts/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/build-logic-statement-ts.svg)](https://www.npmjs.com/package/build-logic-statement-ts)
[![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/)

## Usage

Note, this library is developed to be used in conjunction with [simplify-logic-statement-ts](https://github.com/jeswr/simplify-logic-statement-ts)

### And Statements

```ts
import { AndBuilder } from 'build-logic-statement-ts';

new AndBuilder().build();
// {
//   type: LogicalStatementType.and,
//     statement: {
//       [LogicalStatementType.and]: [],
//       [LogicalStatementType.or]: [],
//       [LogicalStatementType.not]: [],
//       [LogicalStatementType.xone]: [],
//       [LogicalStatementType.statement]: [],
//     },
// }

const myAndBuilder = new AndBuilder();
builder.addAnd()
builder.addOr()
builder.addNot().setStatement('hi')
builder.addXone()
builder.addStatement('hi')
builder.build()
// {
//   type: LogicalStatementType.and,
//     statement: {
//     [LogicalStatementType.and]: [{
//       type: LogicalStatementType.and,
//       statement: {
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.statement]: [],
//       },
//     }],
//       [LogicalStatementType.or]: [{
//         type: LogicalStatementType.or,
//         statement: {
//           [LogicalStatementType.and]: [],
//           [LogicalStatementType.or]: [],
//           [LogicalStatementType.not]: [],
//           [LogicalStatementType.xone]: [],
//           [LogicalStatementType.statement]: [],
//         },
//       }],
//         [LogicalStatementType.not]: [{
//           type: LogicalStatementType.not,
//           statement: {
//             type: LogicalStatementType.statement,
//             statement: 'hi'
//           }
//         }],
//           [LogicalStatementType.xone]: [{
//             type: LogicalStatementType.xone,
//             statement: {
//               [LogicalStatementType.and]: [],
//               [LogicalStatementType.or]: [],
//               [LogicalStatementType.not]: [],
//               [LogicalStatementType.xone]: [],
//               [LogicalStatementType.statement]: [],
//             },
//           }],
//             [LogicalStatementType.statement]: [{
//               type: LogicalStatementType.statement,
//               statement: 'hi'
//             }],
//       },
// }
```

There are equivalent API's for the `NotBuilder`, `OrBuilder` and `XoneBuilder`.

## License
©2020–present
[Jesse Wright](https://github.com/jeswr).
[MIT License](https://github.com/jeswr/useState/blob/master/LICENSE.md).
