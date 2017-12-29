import { FETCH_POSTS, FETCH_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // ES5 syntax
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;

      // ES6 syntax
      // []: assign data as value to key with 'id'
      return { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_POSTS:
      // console.log(action.payload.data); // [ post1, post2 ]
      // { 4: post }
      return _.mapKeys(action.payload.data, 'id');
  
    default:
      return state;
  }
};