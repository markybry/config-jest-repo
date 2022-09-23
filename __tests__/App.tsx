import 'react-native';
import renderer, {act} from 'react-test-renderer'; // Note: test renderer must be required after react-native.
import React from 'react';
import App from '../App';

it('App renders correctly', async () => {
 
  let tree;
  await act(async () => {
    tree = renderer.create(<App />);
  });
  
  expect(tree.toJSON()).toMatchSnapshot();
});
