import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';

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

export const fetchPostsAndUser = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => {
        dispatch (fetchUser(id));
    });
}

export const fetchPosts = () => async dispatch => {
    const res = await jsonPlaceHolder.get('./posts');
    dispatch ({type: 'FETCH_POSTS',payload: res.data} );
}
    
export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch ( {type: 'FETCH_USER', payload: response.data} );
}