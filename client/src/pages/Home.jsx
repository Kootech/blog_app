import React, { useEffect, useState } from "react";
import Card from "../components/Card";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllPost } from "../features/post/postSlice";

import { getPostApiRequest } from "../services/api";

const Home = () => {
  const data = [{ name: "kelvin" }, { name: "koome" }, { name: "mutethia" }];
  const dispatch = useDispatch();

  const { posts, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchAllPost());

    // const getPost = async () => {
    //   const data = await getPostApiRequest();

    //   setPost(data);
    // };

    // getPost();
  }, []);
  return (
    <>
      {console.log(posts.length)}
      <div>
        {posts.length > 0 ? (
          <div className="m-2 py-2 grid grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-4">
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </>
  );
};

export default Home;
