import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from "redux-thunk";
import { reducerCounter } from './allReducers/counterReducer';
import { reducerGithubFetchApi } from './allReducers/fetchgithubapiReducer';

//middleware k bagair hmy reducer aur initial store pass krna tha
//but middleware k sath reducer jayega aur inital stores reducers m chlygye ab dono ko combine krengy

//hamari mrzi h k yaha initial stores rkhen aur reducers ko den ya phr reducer m rkhen aur yaha le aayen
//best practices m ye ha k store alag alag ka alag alag m rkhen ta k manage krna easy ho

//ab hamarypaas 2 ya xyada reducers hain tu unhy combine krengy ta k ek bny aur then middleware k sath pass krengy
const allReducers = combineReducers({
    counter: reducerCounter,
    fetchapi: reducerGithubFetchApi
});

export const store = createStore(allReducers, applyMiddleware(reduxThunk))