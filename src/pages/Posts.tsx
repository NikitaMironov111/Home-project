import React, { useEffect, useState } from 'react';
import http from '../components/http';
import { initialPost } from '../components/Posts/initialPost';
import { IPost } from '../components/Posts/IPost';
import PostCards from '../components/Posts/PostCards';
import { useSearch } from '../hooks/useSearch';

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [search, setSearch] = useState('');

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
  // const searchedPosts = useSearch({posts, 'title', search});
  return (
    <>
      {/* <Search setOpenModal={setOpenModal} setSearch={setSearch}></Search> */}
      <PostCards posts={posts} deletePost={deletePost}></PostCards>
    </>
  );
};

export default Posts;
