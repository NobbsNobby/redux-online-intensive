// Core
import { fromJS, List } from 'immutable';

// Types
import { types } from './types';

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_POSTS:
            return fromJS(action.payload);
        case types.CREATE_POST:
            return state.unshift(fromJS(action.payload));
        case types.REMOVE_POST:
            return state.filter((post) => post.get('id') !== action.payload);
        case types.LIKE_POST:
            return state.updateIn(
                [
                    state.findIndex((post) => {
                        return post.get('id') === action.payload.postId;
                    }),
                    'likes'
                ],
                (likes) => likes.unshift(action.payload.liker));
        case types.UNLIKE_POST:
            console.log('-> action.payload', action.payload);

            return state.updateIn(
                [
                    state.findIndex((post) => {
                        return post.get('id') === action.payload.postId;
                    }),
                    'likes'
                ],
                (likes) => likes.filter((like) => like.get('id') !== action.payload.liker.get('id')));

            /*{
            const likedPost = state.find((post) => {
                return post.get('id') === action.payload.postId;
            });

            return state.deleteIn([
                state.findIndex((post) => {
                    return post.get('id') === action.payload.postId;
                }),
                'likes',
                likedPost.get('likes').findIndex((liker) => {
                    return liker.get('id') === action.payload.liker.id;
                })
            ]);
        }*/
        case types.CLEAR_POSTS:
            return state.clear();
        default:
            return state;
    }
};
