import { LogicalStatementType, OrStatement } from 'simplify-logic-statement-ts';
import { CollectionBuilder } from './collection-builder';

export class OrBuilder<T> extends CollectionBuilder<T, OrStatement<T>> {
  type: LogicalStatementType.or = LogicalStatementType.or;
  build(): OrStatement<T> {
    return this._build();
  }
}
