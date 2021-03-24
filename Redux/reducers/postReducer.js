import { HYDRATE } from 'next-redux-wrapper'

export default function posts(state = [], action) {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload }
        case 'GET_POSTS':
            return action.payload
        case 'SAVE_POSTS':
            return [...state, action.payload]

        default:
            return state
    }

}