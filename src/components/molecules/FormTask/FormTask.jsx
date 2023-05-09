import TextArea from '@/components/atoms/TextArea/TextArea'
import InputWithLabel from '../InputWithLabel/InputWithLabel'

const FormTask = () => {
  return (
    
    <form>
      <h2>Add a task</h2>
      <InputWithLabel id="title" label="Write a title" type="text" placeholder="Write a title"/>
      <TextArea />
    </form>
  )
}

export default FormTask