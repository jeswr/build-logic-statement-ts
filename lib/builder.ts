/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
/**
 * Used to build and, or and xone statements
 */
import {
  AndStatement, LogicalStatementType, NotStatement, OrStatement, Statement, XoneStatement,
} from 'simplify-logic-statement-ts';

export type Builder<T> =
  | AndBuilder<T>
  | OrBuilder<T>
  | XoneBuilder<T>
  | StatementBuilder<T>
  | NotBuilder<T>;

abstract class CollectionBuilder<T, K extends AndStatement<T> | OrStatement<T> | XoneStatement<T>> {
  private [LogicalStatementType.and]: AndBuilder<T>[] = [];

  private [LogicalStatementType.or]: OrBuilder<T>[] = [];

  private [LogicalStatementType.xone]: XoneBuilder<T>[] = [];

  private [LogicalStatementType.not]: NotBuilder<T>[] = [];

  private [LogicalStatementType.statement]: StatementBuilder<T>[] = [];

  abstract readonly type: K['type']

  addAnd(): AndBuilder<T> {
    const statement = new AndBuilder<T>();
    this[LogicalStatementType.and].push(statement);
    return statement;
  }

  addOr(): OrBuilder<T> {
    const statement = new OrBuilder<T>();
    this[LogicalStatementType.or].push(statement);
    return statement;
  }

  addXone(): XoneBuilder<T> {
    const statement = new XoneBuilder<T>();
    this[LogicalStatementType.xone].push(statement);
    return statement;
  }

  addNot(): NotBuilder<T> {
    const statement = new NotBuilder<T>();
    this[LogicalStatementType.not].push(statement);
    return statement;
  }

  addStatement(statement: T) {
    const statementBuilder = new StatementBuilder<T>(statement);
    this[LogicalStatementType.statement].push(statementBuilder);
    return statementBuilder;
  }

  protected builder() {
    return {
      type: this.type,
      statement: {
        [LogicalStatementType.and]:
          this[LogicalStatementType.and].map((statement) => statement.build()),
        [LogicalStatementType.or]:
          this[LogicalStatementType.or].map((statement) => statement.build()),
        [LogicalStatementType.xone]:
          this[LogicalStatementType.xone].map((statement) => statement.build()),
        [LogicalStatementType.not]:
          this[LogicalStatementType.not].map((statement) => statement.build()),
        [LogicalStatementType.statement]:
          this[LogicalStatementType.statement].map((statement) => statement.build()),
      },
    };
  }
}

export class AndBuilder<T> extends CollectionBuilder<T, AndStatement<T>> {
  readonly type: LogicalStatementType.and = LogicalStatementType.and;

  build(): AndStatement<T> {
    return this.builder();
  }
}

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
      statement: this.statement.build(),
    };
  }
}

export class OrBuilder<T> extends CollectionBuilder<T, OrStatement<T>> {
  type: LogicalStatementType.or = LogicalStatementType.or;

  build(): OrStatement<T> {
    return this.builder();
  }
}

export class StatementBuilder<T> {
  private statement: T

  constructor(statement: T) {
    this.statement = statement;
  }

  build(): Statement<T> {
    return {
      type: LogicalStatementType.statement,
      statement: this.statement,
    };
  }
}

export class XoneBuilder<T> extends CollectionBuilder<T, XoneStatement<T>> {
  type: LogicalStatementType.xone = LogicalStatementType.xone;

  build(): XoneStatement<T> {
    return this.builder();
  }
}
