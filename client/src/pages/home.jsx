import React from "react";
import HomeLayout from "../components/HomeLayout";
import TaskList from "../components/TaskList";

function Home() {
  return (
    <HomeLayout>
      <TaskList />
    </HomeLayout>
  );
}

export default Home;
