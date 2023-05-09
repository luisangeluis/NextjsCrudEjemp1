//Dependencies
import Link from 'next/link';
import { useRouter } from 'next/router';
//React icons
import { AiOutlinePlus } from 'react-icons/ai';
//useContext
import { useTasks } from '@/context/TaskContext';

const Layout = ({ children }) => {
  const router = useRouter();
  const { tasks } = useTasks();

  return (
    <div>
      <header className="flex items-center bg-gray-800 text-white px-28 py-5">
        <Link href="/">
          <h1 className="font-black text-lg">Task app</h1>
        </Link>
        <span className='flex-center ml-2 text-gray-400'>{tasks.length} Tasks</span>
        <div className="flex-grow text-right">
          <button className='bg-green-500 hover:bg-green-400 px-5 py-2 font-bold rounded-sm inline-flex items-center'
            onClick={() => router.push("/new")}>
            <AiOutlinePlus className='mr-2' />
            Add Task
          </button>
        </div>
      </header>
      {children}
    </div>
  )
}

export default Layout