import { combineReducers } from 'redux';
// renaming the property reducer to formReducer
import { reducer as formReducer } from 'redux-form';
import PostsReducer from "./ReducerPosts";

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer // key has to be "form"
});

export default rootReducer;