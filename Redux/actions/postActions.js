import axios from 'axios'

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await axios.get('http://localhost:5000/api/posts')
        dispatch(
            {
                type: 'GET_POSTS',
                payload: data
            }
        )
    } catch (err) {
        console.log(data)
    }
}



export const getPost = () => async (dispatch) => {

    try {
        const { data } = await axios.get('http://localhost:5000/api/posts')
        dispatch(
            {
                type: 'GET_POSTS',
                payload: data
            }
        )
    } catch (err) {
        console.log(data)
    }
}



export const savePost = (postData) => async (dispatch) => {

    try {
        const { data } = await axios.post('http://localhost:5000/api/posts', postData)
        dispatch(
            {
                type: 'SAVE_POSTS',
                payload: data
            }
        )

    } catch (err) {
        console.log(err.message)
    }

}


export const deletePost = (id) => async (dispatch) => {

    try {
        const { data } = await axios.delete(`http://localhost:5000/api/posts/${id}/delete`)
        dispatch(
            {
                type: 'DELETE_POST',
                payload: data
            }
        )

    } catch (err) {
        console.log(err.message)
    }

}


