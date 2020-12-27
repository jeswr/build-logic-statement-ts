import { LogicalStatementType, Statment } from 'simplify-logic-statement-ts';

export class StatementBuilder<T> {
  constructor(private statement: T) { };
  build(): Statment<T> {
    return {
      type: LogicalStatementType.statement,
      statement: this.statement
    };
  }
}
