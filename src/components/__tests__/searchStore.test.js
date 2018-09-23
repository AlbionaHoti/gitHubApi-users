import { reducer, actionCreators, SEARCH_BY_TEXT } from '../../store/searchStore'
import thunk from 'redux-thunk'

describe('search reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({'text': ''});
  });

  it('search action calls dispatch with the value requested', async () => {
    const dispatch = jest.fn()
    
    const expectedAction = {
      type: SEARCH_BY_TEXT,
      text: 'test'
    }
    await actionCreators.search('test')(dispatch)
    expect(dispatch).toBeCalledWith(expectedAction)
  });

  it('reducer should return the updated state', () => {
    const data = reducer([], {type: SEARCH_BY_TEXT, text: 'alb'})
    expect(data).toEqual({'text': 'alb'});
  });

});