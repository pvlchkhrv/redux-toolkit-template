import React from 'react';
import {postAPI} from '../services/PostService';
import PostItem from './PostItem';

const PostContainer2 = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(10);
    return (
        <div>
            {/*{isLoading && <h1>Loading...</h1>}*/}
            {/*{error && <h1>Error has been occurred while loading</h1>}*/}
            {/*{posts && posts.map( post =>*/}
            {/*    <PostItem key={post.id} post={post}/>*/}
            {/*)}*/}
        </div>
    );
};

export default PostContainer2;
