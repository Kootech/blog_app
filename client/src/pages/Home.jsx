import React, { useEffect } from "react";
import Card from "../components/Card";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllPost } from "../features/post/postSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { posts, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchAllPost());
    console.log(posts);
  }, []);
  return (
    <>
      <div className="m-2 py-2 grid grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
