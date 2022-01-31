import React, { useEffect } from "react";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions/postActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="container mx-auto pb-10">
      <div className="flex items-center rounded-lg h-16 justify-center bg-blue-500">
        <h3 className="text-4xl font-semibold text-white">Memories</h3>
        <img
          className="w-12 ml-4"
          src="https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI"
          alt="logo"
        />
      </div>
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

export default App;
