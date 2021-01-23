import { createStore } from 'redux'
import { mainReducer } from './reducers'

const initialStore = {
    count: 0
}

export const store = createStore(mainReducer, initialStore)