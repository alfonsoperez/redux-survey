import { Map, fromJS} from 'immutable';
import { expect } from 'chai';

import { questionList } from '../../src/reducers/questionlist';

const sampleQuestionList = [
  {
    questionText: 'Question 1',
    answer: null,
    possibleAnswers: [1,2,3],
    getScore: score => score
  },
  {
    questionText: 'Question 2',
    answer: null,
    possibleAnswers: [1,2,3],
    getScore: score => score + 1
  }
];

describe('questionList reducer', () => {

  it('handles ANSWER_QUESTION', () => {

    const initialState = Map(fromJS({questionList: sampleQuestionList}));

    const action = {
      type: 'ANSWER_QUESTION',
      questionIndex: 1,
      answer: 2
    };

    const updatedQuestionlist = [
      {
        questionText: 'Question 1',
        answer: null,
        possibleAnswers: [1,2,3],
        getScore: sampleQuestionList[0].getScore
      },
      {
        questionText: 'Question 2',
        answer: 2,
        possibleAnswers: [1,2,3],
        getScore: sampleQuestionList[1].getScore
      }
    ];

    const nextQuestionList = questionList(initialState, action).get('questionList').toJS();
    expect(nextQuestionList).to.deep.equal(updatedQuestionlist);
  });
});
