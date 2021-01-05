# build-logic-statement-ts
Build logical statements

### Build not statement
```ts
import { NotBuilder } from 'build-logic-statement-ts'

const builder = new NotBuilder<string>();
const statement = builder.setStatement('hello');

builder.build()
//  {
//    type: LogicalStatementType.not,
//      statement: {
//      type: LogicalStatementType.statement,
//      statement: 'hello',
//   }
//  }
```
