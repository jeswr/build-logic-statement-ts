import { LogicalStatementType, NotStatement } from 'simplify-logic-statement-ts';
import { AndBuilder } from './and-builder';
import { OrBuilder } from './or-builder';
import { XoneBuilder } from './xone-builder';
import { Builder } from "./builder-type";
import { StatementBuilder } from "./statement-builder";

export class NotBuilder<T> {
  private statement: Builder<T> | undefined;

  setAnd() {
    this.statement = new AndBuilder<T>();
    return this.statement;
  }
  setOr() {
    this.statement = new OrBuilder<T>();
    return this.statement;
  }
  setXone() {
    this.statement = new XoneBuilder<T>();
    return this.statement;
  }
  setNot() {
    this.statement = new NotBuilder<T>();
    return this.statement;
  }
  setStatement(statement: T) {
    this.statement = new StatementBuilder<T>(statement);
    return this.statement;
  }

  build(): NotStatement<T> {
    if (this.statement === undefined) {
      throw new Error('Statement in \'not\' builder is undefined');
    }
    return {
      type: LogicalStatementType.not,
      statement: this.statement.build()
    };
  }
}
