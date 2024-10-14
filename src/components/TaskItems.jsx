import { useContext } from "react";
import taskContext from "../Context/taskContext";

const TaskItems = () => {
  // eslint-disable-next-line no-unused-vars
  const { taskItems, setTaskItems } = useContext(taskContext);
  const handleCheck = (t) => {
    console.log(t);
    let newTaskItems = [...taskItems];
    const taskIndex = taskItems.findIndex((item) => item.id === t);
    newTaskItems[taskIndex].done = !taskItems[taskIndex].done;
    setTaskItems(newTaskItems);
  };
  const handleDelete = (t) => {
    let newTaskItems = taskItems.filter((item) => item.id !== t);
    setTaskItems(newTaskItems);
  };
  return (
    <ul className="list-group m-0 p-0 mt-2">
      {!taskItems.length ? (
        <p className="list-group-item">موردی برای نمایش وجود ندارد </p>
      ) : (
        taskItems.map((item) => {
          return (
            <li
              key={item.id}
              className={`list-group-item d-flex justify-content-between ${
                item.done ? "list-group-item-success" : ""
              }`}
            >
              {item.title}
              <span>
                {!item.done ? (
                  <i
                    className="me-3 pointer fas fa-check text-success transition_200 text_hover_shadow"
                    onClick={() => {
                      handleCheck(item.id);
                    }}
                  ></i>
                ) : (
                  <i
                    className="me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow"
                    onClick={() => {
                      handleCheck(item.id);
                    }}
                  ></i>
                )}
                <i
                  className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                ></i>
              </span>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default TaskItems;
