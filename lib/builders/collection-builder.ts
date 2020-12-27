/**
 * Used to build and, or and xone statements
 */
// TODO: FIX SPELLING OF STATEMENT UPSTREAM
import { AndStatement, LogicalStatementType, OrStatement, XoneStatement } from 'simplify-logic-statement-ts';
import { AndBuilder } from './and-builder';
import { NotBuilder } from './not-builder';
import { OrBuilder } from './or-builder';
import { StatementBuilder } from './statement-builder';
import { XoneBuilder } from './xone-builder';

export abstract class CollectionBuilder<T, K extends AndStatement<T> | OrStatement<T> | XoneStatement<T>> {
  private [LogicalStatementType.and]: AndBuilder<T>[] = [];
  private [LogicalStatementType.or]: OrBuilder<T>[] = [];
  private [LogicalStatementType.xone]: XoneBuilder<T>[] = [];
  private [LogicalStatementType.not]: NotBuilder<T>[] = [];
  private [LogicalStatementType.statement]: StatementBuilder<T>[] = [];
  abstract readonly type: K['type']
  
  addAnd(): AndBuilder<T> {
    const statement = new AndBuilder<T>();
    this[LogicalStatementType.and].push(statement);
    return statement
  }

  addOr(): OrBuilder<T> {
    const statement = new OrBuilder<T>();
    this[LogicalStatementType.or].push(statement);
    return statement
  }

  addXone(): XoneBuilder<T> {
    const statement = new XoneBuilder<T>();
    this[LogicalStatementType.xone].push(statement);
    return statement
  }

  addNot(): NotBuilder<T> {
    const statement = new NotBuilder<T>();
    this[LogicalStatementType.not].push(statement);
    return statement
  }

  addStatement(statement: T) {
    const statementBuilder = new StatementBuilder<T>(statement)
    this[LogicalStatementType.statement].push(statementBuilder)
    return statementBuilder
  }

  _build() {
    return {
      type: this.type,
      statement: {
        [LogicalStatementType.and]: this[LogicalStatementType.and].map(statement => statement.build()),
        [LogicalStatementType.or]: this[LogicalStatementType.or].map(statement => statement.build()),
        [LogicalStatementType.xone]: this[LogicalStatementType.xone].map(statement => statement.build()),
        [LogicalStatementType.not]: this[LogicalStatementType.not].map(statement => statement.build()),
        [LogicalStatementType.statement]: this[LogicalStatementType.statement].map(statement => statement.build()),
      }
    }
  }
}


