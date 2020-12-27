import { LogicalStatementType, XoneStatement } from 'simplify-logic-statement-ts';
import { CollectionBuilder } from './collection-builder';

export class XoneBuilder<T> extends CollectionBuilder<T, XoneStatement<T>> {
  type: LogicalStatementType.xone = LogicalStatementType.xone;
  build(): XoneStatement<T> {
    return this._build();
  }
}
