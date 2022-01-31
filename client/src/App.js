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
    <div className="container mx-auto">
      <div className="flex items-center rounded-lg h-16 justify-center bg-blue-500">
        <h3 className="text-4xl font-semibold text-white">Memories</h3>
        <img
          className="w-12 ml-4"
          src="https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI"
          alt="logo"
        />
      </div>
      <div className="grid lg:grid-cols-3 gap-x-4 mt-10">
        <div className="col-span-2">
          <Posts />
        </div>
        <div className="col-span-1">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
