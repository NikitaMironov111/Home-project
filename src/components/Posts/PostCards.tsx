import React from 'react';
import Spinner from '../Spinner/Spinner';
import { IPost } from './IPost';
const PostCards = ({
  posts,
  deletePost,
}: {
  posts: IPost[];
  deletePost: (id: number) => void;
}) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-2">
        {posts.length ? (
          posts.map((post) => (
            <div className="card mb-3" key={post.id}>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => deletePost(post.id)}
                >
                  Delete Post
                </button>
              </div>
            </div>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default PostCards;
