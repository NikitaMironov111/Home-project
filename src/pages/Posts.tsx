import React, { useEffect, useState } from 'react';
import http from '../components/http';
import { initialPost } from '../components/Posts/initialPost';
import { IPost } from '../components/Posts/IPost';
import PostCards from '../components/Posts/PostCards';
import { useSearch } from '../hooks/useSearch';
import Search from '../components/Search';
import AddPostWindow from '../components/Posts/AddPostWindow';

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [post, setPost] = useState(initialPost);
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const deletePost = async (id: number) => {
    const isDelete = window.confirm('Do you really want to delete post?');
    if (isDelete) {
      const deletedPost = await http.delete(`posts/${id}`);
      if (deletedPost.status === 200) {
        setPosts(posts.filter((post) => post.id !== id));
      }
    }
  };

  const getPost = async () => {
    try {
      const posts = await http.get('posts');
      setPosts(posts.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPost();
  }, []);
  const searchedPosts = useSearch(posts, 'title', 'body', search);
  return (
    <>
      {openModal && (
        <AddPostWindow
          openModal={setOpenModal}
          post={post}
          setPost={setPost}
          posts={posts}
          setPosts={setPosts}
        />
      )}
      <Search
        btnName={'Add new Post'}
        field={'Enter post title or body'}
        setOpenModal={setOpenModal}
        setSearch={setSearch}
      ></Search>
      <PostCards posts={searchedPosts} deletePost={deletePost}></PostCards>
    </>
  );
};

export default Posts;
