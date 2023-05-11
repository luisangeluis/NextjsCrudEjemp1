import styles from "./FormTask.module.css";

//Components
import TextArea from '@/components/atoms/TextArea/TextArea'
import InputWithLabel from '../InputWithLabel/InputWithLabel'
import Input from "@/components/atoms/Input/Input";
import { useState } from "react";

const FormTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  console.log(task);
  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  return (
    <form className={styles.form}>
      <h2>Add a task</h2>
      <Input type="text" placeholder="Write a title" onChange={handleChange} name="title" />
      <TextArea name="description" onChange={handleChange}/>
      <button className={`bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30`} disabled>
        Save
      </button>
    </form>
  )
}

export default FormTask