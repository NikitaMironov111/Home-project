import React, { ChangeEvent, FormEvent } from 'react';
import { IPost } from './IPost';
import { initialPost } from './initialPost';
import http from '../http';

interface AddPostWindowProps {
  openModal: any;
  post: object;
  setPost: any;
  posts: any;
  setPosts: any;
}
const AddPostWindow = ({
  openModal,
  post,
  setPost,
  posts,
  setPosts,
}: AddPostWindowProps) => {
  const onChangePostData = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.id;
    setPost({ ...post, [field]: event.target.value });
  };

  const addPost = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const addedPost = await http.post('posts', post);

      if (addedPost.data) {
        setPosts([...posts, post]);
        setPost(initialPost);
      }
    } catch (e) {
      console.log(e);
    }
    openModal(false);
  };
  return (
    <div className="modal_window">
      <div className="input_container">
        <h2>ADD NEW POST</h2>
        <div className="input_group">
          <form onSubmit={(event) => addPost(event)}>
            {Object.keys(post).map((field) => {
              let postField = field;
              if (field === 'id' || field === 'userId') return;
              else if (field == 'title') {
                postField = 'Title';
              } else if (field == 'body') {
                postField = 'Body';
              }
              return (
                <div className="mb-3" key={field}>
                  <label htmlFor={field} className="form-label">
                    {postField}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={field}
                    required
                    value={
                      post[
                        field as keyof Omit<
                          IPost,
                          'id' | 'userId' | 'title' | 'body'
                        >
                      ]
                    }
                    onChange={(event) => onChangePostData(event)}
                  />
                </div>
              );
            })}
            <button className="btn btn-success mx-5 mb-2">Add Post</button>
            <button
              className="btn btn-danger mx-5"
              onClick={() => openModal(false)}
            >
              Close window
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPostWindow;
