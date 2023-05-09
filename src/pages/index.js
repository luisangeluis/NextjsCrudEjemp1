//Dependencies
import { useTasks } from '@/context/TaskContext'
//Components
import Layout from '@/components/layout/Layout';

const index = () => {
  const { tasks } = useTasks();
  
  console.log(tasks);

  return (
    <Layout>
      <main>home page</main>
    </Layout>
  )
}

export default index