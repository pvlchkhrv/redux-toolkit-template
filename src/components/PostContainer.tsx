import React, {useEffect, useState} from 'react';
import {postAPI} from '../services/PostService';
import PostItem from './PostItem';
import {IPost} from '../models/IPost';

const PostContainer = () => {
    const [limit, setLimit] = useState<number>(10);
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit);
    const [createPost, {error: creatError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();

    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3)
        // }, 2000)
    }, []);

    const handleCreate = async () => {
        const title = prompt();
        await createPost({title, body: title} as IPost)
    }
    const handleUpdate = (post: IPost) => {
        updatePost(post);
    }
    const handleRemove = (post: IPost) => {
        deletePost(post);
    }

    return (
        <div>
            <div>
                <button onClick={() => refetch()}>REFETCH</button>
            </div>
            <div>
                <button onClick={handleCreate}>Add new Post</button>
            </div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error has been occurred while loading</h1>}
            {posts && posts.map(post =>
                <PostItem key={post.id}
                          post={post}
                          remove={handleRemove}
                          update={handleUpdate}
                />
            )}
        </div>
    );
};

export default PostContainer;
