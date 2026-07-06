/* eslint-disable no-undef */
import { LogicalStatementType } from 'simplify-logic-statement-ts';
import { EmptyBuilder } from '../lib';

describe('Empty Builder Tests', () => {
  it('should build an always-true empty statement', () => {
    expect(new EmptyBuilder(true).build()).toEqual({
      type: LogicalStatementType.empty,
      statement: true,
    });
  });
  it('should build an always-false empty statement', () => {
    expect(new EmptyBuilder(false).build()).toEqual({
      type: LogicalStatementType.empty,
      statement: false,
    });
  });
});
