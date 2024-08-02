import { useState } from 'react';

const DashboardTwo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', done: false },
    { id: 2, text: 'Task 2', done: false },
    { id: 3, text: 'Task 3', done: false },
  ]);
  const [sargeMessage, setSargeMessage] = useState("Let's get to work!");
  const [newTask, setNewTask] = useState('');

  const handleTaskToggle = (taskId: number) => {
    const updatedTasks = tasks.map((task) => 
      task.id === taskId ? { ...task, done: !task.done } : task
    );

    setTasks(updatedTasks);

    const task = updatedTasks.find((task) => task.id === taskId);
    if (task) {
      setSargeMessage(task.done ? "About time!" : "You slacker!");
    }
  };

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      setSargeMessage("You can't add an empty task!");
      return;
    }

    const newTaskObj = { id: tasks.length + 1, text: newTask, done: false };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
    setSargeMessage("New task added!");
  };

  const progress = (tasks.filter((task) => task.done).length / tasks.length) * 100;

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black">
      <div className="mb-6 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-lg text-gray-700">{sargeMessage}</p>
      </div>

      <div className="mb-6 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleTaskToggle(task.id)}
                className="mr-3 h-5 w-5"
              />
              <span className={`text-lg ${task.done ? 'line-through text-gray-500' : 'text-gray-900'}`}>{task.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>
        <div className="flex items-center">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 p-3 border rounded-lg text-lg"
            placeholder="Enter a new task"
          />
          <button
            onClick={handleAddTask}
            className="ml-3 p-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Progress</h2>
        <div className="relative pt-1">
          <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-blue-200">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            ></div>
          </div>
          <p className="text-lg text-gray-700">{progress.toFixed(2)}% completed</p>
          <p className="text-lg text-gray-700">
            {progress === 100 ? 'Excellent work!' : progress >= 50 ? 'Keep it up!' : 'You need to do better!'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardTwo;
