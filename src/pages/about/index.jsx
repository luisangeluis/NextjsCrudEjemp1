import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const about = () => {
  const values = useContext(TaskContext);
  console.log(values);
  return (
    <div>about</div>
  )
}

export default about