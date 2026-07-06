/* eslint-disable no-undef */
import { LogicalStatementType as UpstreamLogicalStatementType } from 'simplify-logic-statement-ts';
import {
  AndBuilder, AndStatement, LogicalStatementType, Statement,
} from '../lib';

describe('Type Export Tests', () => {
  it('should re-export the LogicalStatementType enum', () => {
    expect(LogicalStatementType).toBe(UpstreamLogicalStatementType);
  });
  it('should allow statement types to be used from the package index', () => {
    const built: AndStatement<string> = new AndBuilder<string>().build();
    const statement: Statement<string> = {
      type: LogicalStatementType.statement,
      statement: 'hi',
    };
    expect(built.type).toBe(LogicalStatementType.and);
    expect(statement.statement).toBe('hi');
  });
});
