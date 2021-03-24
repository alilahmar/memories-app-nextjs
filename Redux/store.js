import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import rootReducer from './reducers'


const store = () => createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export const wrapper = createWrapper(store, { debug: true })