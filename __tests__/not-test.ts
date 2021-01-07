// /* eslint-disable no-undef */
import { LogicalStatementType } from "simplify-logic-statement-ts/dist";
import { NotBuilder } from "../lib";

describe('Not Builder Tests', () => {
  it('should throw error when building without statement', () => {
    expect(() => new NotBuilder<string>().build()).toThrow('Statement in \'not\' builder is undefined');
  });
  it('should build single negated statement', () => {
    const builder = new NotBuilder<string>();
    const statement = builder.setStatement('hello');
    expect(builder.build()).toEqual({
      type: LogicalStatementType.not,
      statement: {
        type: LogicalStatementType.statement,
        statement: 'hello'
      }
    });
    expect(statement.build()).toEqual({
      type: LogicalStatementType.statement,
      statement: 'hello'
    });
  });
  it('should build single empty negated and statement', () => {
    const builder = new NotBuilder<string>();
    const and = builder.setAnd();
    expect(builder.build()).toEqual({
      type: LogicalStatementType.not,
      statement: {
        type: LogicalStatementType.and,
        statement: {
          [LogicalStatementType.and]: [],
          [LogicalStatementType.or]: [],
          [LogicalStatementType.not]: [],
          [LogicalStatementType.xone]: [],
          [LogicalStatementType.statement]: [],
        },
      }
    });
    expect(and.build()).toEqual({
      type: LogicalStatementType.and,
      statement: {
        [LogicalStatementType.and]: [],
        [LogicalStatementType.or]: [],
        [LogicalStatementType.not]: [],
        [LogicalStatementType.xone]: [],
        [LogicalStatementType.statement]: [],
      },
    });
  });
  it('should build single empty negated or statement', () => {
    const builder = new NotBuilder<string>();
    const or = builder.setOr();
    expect(builder.build()).toEqual({
      type: LogicalStatementType.not,
      statement: {
        type: LogicalStatementType.or,
        statement: {
          [LogicalStatementType.and]: [],
          [LogicalStatementType.or]: [],
          [LogicalStatementType.not]: [],
          [LogicalStatementType.xone]: [],
          [LogicalStatementType.statement]: [],
        },
      }
    });
    expect(or.build()).toEqual({
      type: LogicalStatementType.or,
      statement: {
        [LogicalStatementType.and]: [],
        [LogicalStatementType.or]: [],
        [LogicalStatementType.not]: [],
        [LogicalStatementType.xone]: [],
        [LogicalStatementType.statement]: [],
      },
    });
  });
  it('should build single empty negated xone statement', () => {
    const builder = new NotBuilder<string>();
    const xone = builder.setXone();
    expect(builder.build()).toEqual({
      type: LogicalStatementType.not,
      statement: {
        type: LogicalStatementType.xone,
        statement: {
          [LogicalStatementType.and]: [],
          [LogicalStatementType.or]: [],
          [LogicalStatementType.not]: [],
          [LogicalStatementType.xone]: [],
          [LogicalStatementType.statement]: [],
        },
      }
    });
    expect(xone.build()).toEqual({
      type: LogicalStatementType.xone,
      statement: {
        [LogicalStatementType.and]: [],
        [LogicalStatementType.or]: [],
        [LogicalStatementType.not]: [],
        [LogicalStatementType.xone]: [],
        [LogicalStatementType.statement]: [],
      },
    });
  });
  it('should throw error on empty nested not', () => {
    const builder = new NotBuilder<string>();
    const not = builder.setNot();
    expect(() => builder.build()).toThrow('Statement in \'not\' builder is undefined');
    expect(() => not.build()).toThrow('Statement in \'not\' builder is undefined');
  });
  it('should build statement inside nested not', () => {
    const builder = new NotBuilder<string>();
    const not = builder.setNot();
    const statement = not.setStatement('hello');
    expect(not.build()).toEqual({
      type: LogicalStatementType.not,
      statement: {
        type: LogicalStatementType.statement,
        statement: 'hello'
      }
    });
    expect(builder.build()).toEqual({
      type: LogicalStatementType.not,
      statement: {
        type: LogicalStatementType.not,
        statement: {
          type: LogicalStatementType.statement,
          statement: 'hello'
        }
      }
    });
  });
});

describe('Not Builder Tests (using add)', () => {
  it('should throw error when building without statement', () => {
    expect(() => new NotBuilder<string>().build()).toThrow('Statement in \'not\' builder is undefined');
  });
  it('should build single negated statement', () => {
    const builder = new NotBuilder<string>();
    const statement = builder.addStatement('hello');
    expect(builder.build()).toEqual({
      type: LogicalStatementType.not,
      statement: {
        type: LogicalStatementType.statement,
        statement: 'hello'
      }
    });
    expect(statement.build()).toEqual({
      type: LogicalStatementType.statement,
      statement: 'hello'
    });
  });
  it('should build single empty negated and statement', () => {
    const builder = new NotBuilder<string>();
    const and = builder.addAnd();
    expect(builder.build()).toEqual({
      type: LogicalStatementType.not,
      statement: {
        type: LogicalStatementType.and,
        statement: {
          [LogicalStatementType.and]: [],
          [LogicalStatementType.or]: [],
          [LogicalStatementType.not]: [],
          [LogicalStatementType.xone]: [],
          [LogicalStatementType.statement]: [],
        },
      }
    });
    expect(and.build()).toEqual({
      type: LogicalStatementType.and,
      statement: {
        [LogicalStatementType.and]: [],
        [LogicalStatementType.or]: [],
        [LogicalStatementType.not]: [],
        [LogicalStatementType.xone]: [],
        [LogicalStatementType.statement]: [],
      },
    });
  });
  it('should build single empty negated or statement', () => {
    const builder = new NotBuilder<string>();
    const or = builder.addOr();
    expect(builder.build()).toEqual({
      type: LogicalStatementType.not,
      statement: {
        type: LogicalStatementType.or,
        statement: {
          [LogicalStatementType.and]: [],
          [LogicalStatementType.or]: [],
          [LogicalStatementType.not]: [],
          [LogicalStatementType.xone]: [],
          [LogicalStatementType.statement]: [],
        },
      }
    });
    expect(or.build()).toEqual({
      type: LogicalStatementType.or,
      statement: {
        [LogicalStatementType.and]: [],
        [LogicalStatementType.or]: [],
        [LogicalStatementType.not]: [],
        [LogicalStatementType.xone]: [],
        [LogicalStatementType.statement]: [],
      },
    });
  });
  it('should build single empty negated xone statement', () => {
    const builder = new NotBuilder<string>();
    const xone = builder.addXone();
    expect(builder.build()).toEqual({
      type: LogicalStatementType.not,
      statement: {
        type: LogicalStatementType.xone,
        statement: {
          [LogicalStatementType.and]: [],
          [LogicalStatementType.or]: [],
          [LogicalStatementType.not]: [],
          [LogicalStatementType.xone]: [],
          [LogicalStatementType.statement]: [],
        },
      }
    });
    expect(xone.build()).toEqual({
      type: LogicalStatementType.xone,
      statement: {
        [LogicalStatementType.and]: [],
        [LogicalStatementType.or]: [],
        [LogicalStatementType.not]: [],
        [LogicalStatementType.xone]: [],
        [LogicalStatementType.statement]: [],
      },
    });
  });
  it('should throw error on empty nested not', () => {
    const builder = new NotBuilder<string>();
    const not = builder.addNot();
    expect(() => builder.build()).toThrow('Statement in \'not\' builder is undefined');
    expect(() => not.build()).toThrow('Statement in \'not\' builder is undefined');
  });
  it('should build statement inside nested not', () => {
    const builder = new NotBuilder<string>();
    const not = builder.addNot();
    const statement = not.addStatement('hello');
    expect(not.build()).toEqual({
      type: LogicalStatementType.not,
      statement: {
        type: LogicalStatementType.statement,
        statement: 'hello'
      }
    });
    expect(builder.build()).toEqual({
      type: LogicalStatementType.not,
      statement: {
        type: LogicalStatementType.not,
        statement: {
          type: LogicalStatementType.statement,
          statement: 'hello'
        }
      }
    });
  });
})
// import {
//   LogicalStatement, LogicalStatementType, NotStatement, simplify,
// } from '../lib';
// import { simplifyNot } from '../lib/simplifiers/not';

// const nestedNot = (statement: LogicalStatement<string>): NotStatement<string> => ({
//   type: LogicalStatementType.not,
//   statement: {
//     type: LogicalStatementType.not,
//     statement,
//   },
// });

// describe('Not handler tests', () => {
//   it('Should remove basic double negation (simplifyNot)', () => {
//     expect(simplifyNot(nestedNot({
//       type: LogicalStatementType.statement,
//       statement: 'a',
//     }))).toEqual({
//       type: LogicalStatementType.statement,
//       statement: 'a',
//     });
//   });

//   it('Should remove basic double negation (simplify)', () => {
//     expect(simplify(nestedNot({
//       type: LogicalStatementType.statement,
//       statement: 'a',
//     }))).toEqual({
//       type: LogicalStatementType.statement,
//       statement: 'a',
//     });
//   });

//   it('Should remove basic quadruple negation (simplifyNot)', () => {
//     expect(simplifyNot(nestedNot(nestedNot({
//       type: LogicalStatementType.statement,
//       statement: 'a',
//     })))).toEqual({
//       type: LogicalStatementType.statement,
//       statement: 'a',
//     });
//   });

//   it('Should remove basic quadruple negation (simplify)', () => {
//     expect(simplify(nestedNot(nestedNot({
//       type: LogicalStatementType.statement,
//       statement: 'a',
//     })))).toEqual({
//       type: LogicalStatementType.statement,
//       statement: 'a',
//     });
//   });

//   it('Should remove basic triple negation (simplifyNot)', () => {
//     expect(simplifyNot(nestedNot(nestedNot({
//       type: LogicalStatementType.statement,
//       statement: 'a',
//     })))).toEqual({
//       type: LogicalStatementType.statement,
//       statement: 'a',
//     });
//   });

//   it('Should remove basic triple negation (simplify)', () => {
//     expect(simplify(nestedNot({
//       type: LogicalStatementType.not,
//       statement: {
//         type: LogicalStatementType.statement,
//         statement: 'a',
//       },
//     }))).toEqual({
//       type: LogicalStatementType.not,
//       statement: {
//         type: LogicalStatementType.statement,
//         statement: 'a',
//       },
//     });
//   });

//   it('Should manipulate empty statements', () => {
//     // // eslint-disable-next-line
//     // let simplify: (statement: LogicalStatement<boolean>) => LogicalStatementOutput<boolean>;

//     // beforeEach(() => {
//     //   // eslint-disable-next-line no-unused-vars
//     //   simplify = (statement: LogicalStatement<boolean>): LogicalStatementOutput<boolean> => ({
//     //     type: LogicalStatementType.empty,
//     //     statement: Boolean(statement.statement),
//     //   });
//     // });

//     expect(simplifyNot({
//       type: LogicalStatementType.not,
//       statement: {
//         type: LogicalStatementType.and,
//         statement: {
//           [LogicalStatementType.and]: [],
//           [LogicalStatementType.or]: [],
//           [LogicalStatementType.not]: [],
//           [LogicalStatementType.xone]: [],
//           [LogicalStatementType.statement]: [],
//         },
//       },
//     })).toEqual({
//       type: LogicalStatementType.empty,
//       statement: false,
//     });

//     expect(simplify({
//       type: LogicalStatementType.not,
//       statement: {
//         type: LogicalStatementType.or,
//         statement: {
//           [LogicalStatementType.and]: [],
//           [LogicalStatementType.or]: [],
//           [LogicalStatementType.not]: [],
//           [LogicalStatementType.xone]: [],
//           [LogicalStatementType.statement]: [],
//         },
//       },
//     })).toEqual({
//       type: LogicalStatementType.empty,
//       statement: true,
//     });
//   });
// });
