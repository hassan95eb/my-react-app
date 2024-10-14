import { useState } from "react";
import TaskItems from "./components/TaskItems";
import TopForm from "./components/TopForm";
import taskContext from "./Context/taskContext";

const App = () => {
  const [taskItems, setTaskItems] = useState([]);
  return (
    <>
      <taskContext.Provider
        value={{
          taskItems,
          setTaskItems,
        }}
      >
        <div className="container w-100 h-100 p-3">
          <div className="row h-100 justify-content-center align-align-items-start">
            <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h_fit">
              <TopForm />
              <TaskItems />
            </div>
          </div>
        </div>
      </taskContext.Provider>
    </>
  );
};
export default App;
