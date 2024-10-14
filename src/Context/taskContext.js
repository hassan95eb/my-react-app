import { createContext } from "react";

const taskContext = createContext({
  taskItems: [],
  setTaskItems: () => {},
});
export default taskContext;
