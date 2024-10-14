import { useContext, useState } from "react";
import taskContext from "../Context/taskContext";

const TopForm = () => {
  const [task, setTask] = useState("");
  const { taskItems, setTaskItems } = useContext(taskContext);
  const handleClick = (event) => {
    setTask(event.target.value);
  };

  const handleAddData = (event) => {
    setTaskItems([
      ...taskItems,
      { id: taskItems.length + 1, title: task, done: false },
    ]);
    event.preventDefault();
    setTask("");
  };
  return (
    <>
      <h4 className="text-center text-info text_shdow">به کدیاد خوش اومدید</h4>
      <form onSubmit={handleAddData}>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control"
            onChange={handleClick}
            value={task}
          />
          <button type="submit" className="btn btn-success me-1">
            ثبت
          </button>
        </div>
      </form>
    </>
  );
};

export default TopForm;
