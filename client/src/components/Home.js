import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/actions/postActions";
import Form from "./Form/Form";
import Posts from "./Posts/Posts";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="container mx-auto pb-10">
      <div className="grid lg:grid-cols-3 gap-y-10 lg:gap-y-0 lg:gap-x-4 mt-10 px-5 lg:px-0">
        <div className="lg:col-span-2 order-last lg:order-first">
          <Posts />
        </div>
        <div className="lg:col-span-1 order-first lg:order-last">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Home;
