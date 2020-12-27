/* eslint-disable no-undef */
import { LogicalStatementType } from 'simplify-logic-statement-ts';
import { AndBuilder } from '../lib';

describe('And Builder Tests', () => {
  it('should build an empty and statement', () => {
    expect(new AndBuilder().build()).toEqual({
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
  it('should handle having statements added to each entry', () => {
    const builder = new AndBuilder<string>();
    builder.addAnd()
    builder.addOr()
    builder.addNot().setStatement('hi')
    builder.addXone()
    builder.addStatement('hi')
    expect(builder.build()).toEqual({
      type: LogicalStatementType.and,
      statement: {
        [LogicalStatementType.and]: [{
          type: LogicalStatementType.and,
          statement: {
            [LogicalStatementType.and]: [],
            [LogicalStatementType.or]: [],
            [LogicalStatementType.not]: [],
            [LogicalStatementType.xone]: [],
            [LogicalStatementType.statement]: [],
          },
        }],
        [LogicalStatementType.or]: [{
          type: LogicalStatementType.or,
          statement: {
            [LogicalStatementType.and]: [],
            [LogicalStatementType.or]: [],
            [LogicalStatementType.not]: [],
            [LogicalStatementType.xone]: [],
            [LogicalStatementType.statement]: [],
          },
        }],
        [LogicalStatementType.not]: [{
          type: LogicalStatementType.not,
          statement: {
            type: LogicalStatementType.statement,
            statement: 'hi'
          }
        }],
        [LogicalStatementType.xone]: [{
          type: LogicalStatementType.xone,
          statement: {
            [LogicalStatementType.and]: [],
            [LogicalStatementType.or]: [],
            [LogicalStatementType.not]: [],
            [LogicalStatementType.xone]: [],
            [LogicalStatementType.statement]: [],
          },
        }],
        [LogicalStatementType.statement]: [{
          type: LogicalStatementType.statement,
          statement: 'hi'
        }],
      },
    })
  })
})






// const collection: LogicalStatementCollection<string> = {
//   [LogicalStatementType.and]: [],
//   [LogicalStatementType.or]: [],
//   [LogicalStatementType.not]: [],
//   [LogicalStatementType.xone]: [],
//   [LogicalStatementType.statement]: [{
//     type: LogicalStatementType.statement,
//     statement: 'hello',
//   }, {
//     type: LogicalStatementType.statement,
//     statement: 'helloes',
//   }],
// };

// const statement: () => AndStatement<string> = () => ({
//   type: LogicalStatementType.and,
//   statement: collection,
// });

// describe('and handler tests', () => {
//   it('should mantain standard and statements', () => {
//     expect(simplify(statement())).toEqual(statement());
//     expect(simplifyAnd(statement())).toEqual(statement());
//   });

  // it('should flatten nested ands', () => {
  //   expect(simplify({
  //     type: LogicalStatementType.and,
  //     statement: {
  //       [LogicalStatementType.and]: [statement()],
  //       [LogicalStatementType.or]: [],
  //       [LogicalStatementType.not]: [],
  //       [LogicalStatementType.xone]: [],
  //       [LogicalStatementType.statement]: [],
  //     },
  //   })).toEqual(statement());

//     expect(simplifyAnd({
//       type: LogicalStatementType.and,
//       statement: {
//         [LogicalStatementType.and]: [statement()],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.statement]: [],
//       },
//     })).toEqual(statement());
//   });

//   it('should extract single elements', () => {
//     expect(simplifyAnd({
//       type: LogicalStatementType.and,
//       statement: {
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.statement]: [{
//           type: LogicalStatementType.statement,
//           statement: 'hello',
//         }],
//       },
//     })).toEqual({
//       type: LogicalStatementType.statement,
//       statement: 'hello',
//     });
//     expect(simplify({
//       type: LogicalStatementType.and,
//       statement: {
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.statement]: [{
//           type: LogicalStatementType.statement,
//           statement: 'hello',
//         }],
//       },
//     })).toEqual({
//       type: LogicalStatementType.statement,
//       statement: 'hello',
//     });
//     expect(simplifyAnd({
//       type: LogicalStatementType.and,
//       statement: {
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.or]: [{
//           type: LogicalStatementType.or,
//           statement: {
//             [LogicalStatementType.and]: [],
//             [LogicalStatementType.or]: [],
//             [LogicalStatementType.not]: [],
//             [LogicalStatementType.xone]: [],
//             [LogicalStatementType.statement]: [{
//               type: LogicalStatementType.statement,
//               statement: 'hello',
//             }, {
//               type: LogicalStatementType.statement,
//               statement: 'hello2',
//             }],
//           },
//         }],
//         [LogicalStatementType.statement]: [],
//       },
//     })).toEqual({
//       type: LogicalStatementType.or,
//       statement: {
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.statement]: [{
//           type: LogicalStatementType.statement,
//           statement: 'hello',
//         }, {
//           type: LogicalStatementType.statement,
//           statement: 'hello2',
//         }],
//       },
//     });
//     expect(simplify({
//       type: LogicalStatementType.or,
//       statement: {
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.or]: [{
//           type: LogicalStatementType.or,
//           statement: {
//             [LogicalStatementType.and]: [],
//             [LogicalStatementType.or]: [],
//             [LogicalStatementType.not]: [],
//             [LogicalStatementType.xone]: [],
//             [LogicalStatementType.statement]: [{
//               type: LogicalStatementType.statement,
//               statement: 'hello',
//             }, {
//               type: LogicalStatementType.statement,
//               statement: 'hello2',
//             }],
//           },
//         }],
//         [LogicalStatementType.statement]: [],
//       },
//     })).toEqual({
//       type: LogicalStatementType.or,
//       statement: {
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.statement]: [{
//           type: LogicalStatementType.statement,
//           statement: 'hello',
//         }, {
//           type: LogicalStatementType.statement,
//           statement: 'hello2',
//         }],
//       },
//     });
//     expect(simplifyAnd({
//       type: LogicalStatementType.and,
//       statement: {
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.xone]: [{
//           type: LogicalStatementType.xone,
//           statement: {
//             [LogicalStatementType.and]: [],
//             [LogicalStatementType.or]: [],
//             [LogicalStatementType.not]: [],
//             [LogicalStatementType.xone]: [],
//             [LogicalStatementType.statement]: [{
//               type: LogicalStatementType.statement,
//               statement: 'hello',
//             }, {
//               type: LogicalStatementType.statement,
//               statement: 'hello2',
//             }],
//           },
//         }],
//         [LogicalStatementType.statement]: [],
//       },
//     })).toEqual({
//       type: LogicalStatementType.xone,
//       statement: {
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.statement]: [{
//           type: LogicalStatementType.statement,
//           statement: 'hello',
//         }, {
//           type: LogicalStatementType.statement,
//           statement: 'hello2',
//         }],
//       },
//     });
//     expect(simplify({
//       type: LogicalStatementType.and,
//       statement: {
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.xone]: [{
//           type: LogicalStatementType.xone,
//           statement: {
//             [LogicalStatementType.and]: [],
//             [LogicalStatementType.or]: [],
//             [LogicalStatementType.not]: [],
//             [LogicalStatementType.xone]: [],
//             [LogicalStatementType.statement]: [{
//               type: LogicalStatementType.statement,
//               statement: 'hello',
//             }, {
//               type: LogicalStatementType.statement,
//               statement: 'hello2',
//             }],
//           },
//         }],
//         [LogicalStatementType.statement]: [],
//       },
//     })).toEqual({
//       type: LogicalStatementType.xone,
//       statement: {
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.statement]: [{
//           type: LogicalStatementType.statement,
//           statement: 'hello',
//         }, {
//           type: LogicalStatementType.statement,
//           statement: 'hello2',
//         }],
//       },
//     });
//     // This is more of an integration test tbh
//     expect(simplifyAnd({
//       type: LogicalStatementType.and,
//       statement: {
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.xone]: [{
//           type: LogicalStatementType.xone,
//           statement: {
//             [LogicalStatementType.and]: [],
//             [LogicalStatementType.or]: [],
//             [LogicalStatementType.not]: [],
//             [LogicalStatementType.xone]: [],
//             [LogicalStatementType.statement]: [{
//               type: LogicalStatementType.statement,
//               statement: 'hello',
//             }],
//           },
//         }],
//         [LogicalStatementType.statement]: [],
//       },
//     })).toEqual({
//       type: LogicalStatementType.statement,
//       statement: 'hello',
//     });
//     expect(simplify({
//       type: LogicalStatementType.and,
//       statement: {
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.xone]: [{
//           type: LogicalStatementType.xone,
//           statement: {
//             [LogicalStatementType.and]: [],
//             [LogicalStatementType.or]: [],
//             [LogicalStatementType.not]: [],
//             [LogicalStatementType.xone]: [],
//             [LogicalStatementType.statement]: [{
//               type: LogicalStatementType.statement,
//               statement: 'hello',
//             }],
//           },
//         }],
//         [LogicalStatementType.statement]: [],
//       },
//     })).toEqual({
//       type: LogicalStatementType.statement,
//       statement: 'hello',
//     });
//     expect(simplifyAnd({
//       type: LogicalStatementType.and,
//       statement: {
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.statement]: [{
//           type: LogicalStatementType.statement,
//           statement: 'hello',
//         }],
//       },
//     })).toEqual({
//       type: LogicalStatementType.statement,
//       statement: 'hello',
//     });
//     expect(simplify({
//       type: LogicalStatementType.and,
//       statement: {
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.statement]: [{
//           type: LogicalStatementType.statement,
//           statement: 'hello',
//         }],
//       },
//     })).toEqual({
//       type: LogicalStatementType.statement,
//       statement: 'hello',
//     });
//     expect(simplifyAnd({
//       type: LogicalStatementType.and,
//       statement: {
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [{
//           type: LogicalStatementType.not,
//           statement: {
//             type: LogicalStatementType.statement,
//             statement: 'hello',
//           },
//         }],
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.statement]: [],
//       },
//     })).toEqual({
//       type: LogicalStatementType.not,
//       statement: {
//         type: LogicalStatementType.statement,
//         statement: 'hello',
//       },
//     });
//   });

//   it('should handle empty and', () => {
//     expect(simplifyAnd({
//       type: LogicalStatementType.and,
//       statement: {
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.statement]: [],
//       },
//     })).toEqual({ type: LogicalStatementType.empty, statement: true });
//     expect(simplify({
//       type: LogicalStatementType.and,
//       statement: {
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [],
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.statement]: [],
//       },
//     })).toEqual({ type: LogicalStatementType.empty, statement: true });
//   });

//   it('Returns an empty false when there is one empty false statement present', () => {
//     expect(simplifyAnd({
//       type: LogicalStatementType.and,
//       statement: {
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [{
//           type: LogicalStatementType.not,
//           statement: {
//             type: LogicalStatementType.and,
//             statement: {
//               [LogicalStatementType.and]: [],
//               [LogicalStatementType.not]: [],
//               [LogicalStatementType.or]: [],
//               [LogicalStatementType.xone]: [],
//               [LogicalStatementType.statement]: [],
//             },
//           },
//         }],
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.statement]: [],
//       },
//     })).toEqual({ type: LogicalStatementType.empty, statement: false });
//     expect(simplify({
//       type: LogicalStatementType.and,
//       statement: {
//         [LogicalStatementType.and]: [],
//         [LogicalStatementType.or]: [],
//         [LogicalStatementType.not]: [{
//           type: LogicalStatementType.not,
//           statement: {
//             type: LogicalStatementType.and,
//             statement: {
//               [LogicalStatementType.and]: [],
//               [LogicalStatementType.not]: [],
//               [LogicalStatementType.or]: [],
//               [LogicalStatementType.xone]: [],
//               [LogicalStatementType.statement]: [],
//             },
//           },
//         }],
//         [LogicalStatementType.xone]: [],
//         [LogicalStatementType.statement]: [],
//       },
//     })).toEqual({ type: LogicalStatementType.empty, statement: false });
//   });
// });
