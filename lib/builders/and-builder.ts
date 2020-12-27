import { AndStatement, LogicalStatementType } from 'simplify-logic-statement-ts';
import { CollectionBuilder } from './collection-builder';

export class AndBuilder<T> extends CollectionBuilder<T, AndStatement<T>> {
  readonly type: LogicalStatementType.and = LogicalStatementType.and;
  build(): AndStatement<T> {
    return this._build();
  }
}
