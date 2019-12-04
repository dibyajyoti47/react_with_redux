import jsonPlaceHolder from '../apis/jsonPlaceHolder'

/*  //just shortened syntax below, everything is same
export const fetchPosts = () => {
    return async (dispatch) => {
        const res = await jsonPlaceHolder.get('./posts');
        dispatch ({
            type: 'FETCH_POSTS',
            payLoad: res
        });
    };    
} */

export const fetchPosts = () => async dispatch => {
        const res = await jsonPlaceHolder.get('./posts');
        dispatch ({type: 'FETCH_POSTS',payLoad: res});
    }    