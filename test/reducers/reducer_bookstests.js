import reducers from '../../reducers';

test('reducers', () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({books:[{title:'Javascript: The Good Parts',pages:101},{title:'Harry Potter',pages:39},{title:'The Dark Tower',pages:85},{title:'Eloquent Ruby',pages:1}]});
});
