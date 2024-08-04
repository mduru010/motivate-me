import { useState, useEffect } from 'react';

// Define a type for the theme names
type ThemeName = 'default' | 'space' | 'superhero';

const themes: Record<ThemeName, {
  moodColors: {
    happy: string;
    meh: string;
    angry: string;
  };
  buttonColor: string;
  buttonHoverColor: string;
}> = {
  default: {
    moodColors: {
      happy: 'bg-green-500',
      meh: 'bg-yellow-500',
      angry: 'bg-red-500'
    },
    buttonColor: 'bg-blue-500',
    buttonHoverColor: 'bg-blue-600',
  },
  space: {
    moodColors: {
      happy: 'bg-purple-500',
      meh: 'bg-blue-500',
      angry: 'bg-red-800'
    },
    buttonColor: 'bg-teal-500',
    buttonHoverColor: 'bg-teal-600',
  },
  superhero: {
    moodColors: {
      happy: 'bg-yellow-500',
      meh: 'bg-blue-700',
      angry: 'bg-gray-700'
    },
    buttonColor: 'bg-red-500',
    buttonHoverColor: 'bg-red-600',
  }
};

// Define quests
const quests = [
  { id: 1, description: 'Complete 3 tasks today', reward: 'New Roast', completed: false },
  { id: 2, description: 'Finish 5 tasks this week', reward: 'Funny Animation', completed: false },
  { id: 3, description: 'Achieve 100% progress in a day', reward: 'Unlock New Theme', completed: false },
];

const DashboardTwo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Kiss up to the Sarge (Daily Task)', done: false },
  ]);
  const [sargeMessage, setSargeMessage] = useState("Let's get to work!");
  const [newTask, setNewTask] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>('default');
  const [questStatus, setQuestStatus] = useState(quests);

  const handleTaskToggle = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );

    setTasks(updatedTasks);
    updateQuests(updatedTasks);
  };

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      setSargeMessage("You can't add an empty task!");
      return;
    }

    const newTaskObj = { id: tasks.length + 1, text: newTask, done: false };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
    updateQuests([...tasks, newTaskObj]);
  };

  const updateQuests = (updatedTasks: { id: number; text: string; done: boolean }[]) => {
    const completedTasks = updatedTasks.filter(task => task.done).length;
    const allTasks = updatedTasks.length;
    const questUpdates = questStatus.map(quest => {
      switch (quest.id) {
        case 1:
          if (completedTasks >= 3 && !quest.completed) {
            return { ...quest, completed: true, reward: 'This mungus ;)' };
          }
          break;
        case 2:
          if (completedTasks >= 5 && !quest.completed) {
            return { ...quest, completed: true, reward: 'Nothing. Haha.' };
          }
          break;
        case 3:
          if (completedTasks / allTasks === 1 && !quest.completed) {
            return { ...quest, completed: true, reward: 'Your mom hehe.' };
          }
          break;
        default:
          return quest;
      }
      return quest;
    });
    setQuestStatus(questUpdates);
  };

  const progress = (tasks.filter((task) => task.done).length / tasks.length) * 100;

  const getRandomMessage = (messages: string[]) => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const getSargeMood = () => {
    const happyMessages = [
      'Excellent work!',
      'You’re crushing it!',
      'Keep up the great work!',
      'Fantastic job!',
      'You’re a superstar!',
      'Way to go!',
      'You’re doing amazing!',
      'Outstanding performance!',
      'You’ve got this!',
      'You’re on fire!',
      'Keep the momentum going!',
      'You’re really nailing it!',
      'Awesome job!',
      'You’re the best!',
      'Great effort!',
      'You’re doing fantastic!',
      'You’re making great progress!',
      'Your hard work is paying off!',
      'You’re killing it!',
      'Keep pushing!',
      'You’re making a huge impact!',
      'You’re doing wonders!',
      'You’re really making strides!',
      'You’re absolutely fantastic!',
      'You’re performing like a pro!',
      'You’re doing incredibly well!'
    ];

    const mehMessages = [
      'Keep it up!',
      'You’re almost there!',
      'Good effort, but more to do!',
      'Not bad, but you can do better!',
      'You’re on the right track!',
      'Keep pushing, you’re getting there!',
      'Nice try, but there’s room for improvement!',
      'You’re making progress, but stay focused!',
      'You’re getting there, just a bit more effort!',
      'Solid work, but don’t get complacent!',
      'Not too shabby, but let’s aim higher!',
      'You’re getting closer, keep at it!',
      'Decent job, but let’s step it up!',
      'You’re doing okay, but you can do better!',
      'You’re improving, but keep going!',
      'Keep at it, you’re on the right path!',
      'You’re moving in the right direction!',
      'Good effort, just a little more to go!',
      'You’re doing alright, but strive for more!',
      'You’re making some headway, but there’s more to be done!',
      'You’re doing fine, just push a bit harder!',
      'You’re making progress, stay motivated!',
      'You’re doing well, just need to keep going!',
      'You’re on the right path, keep pushing!',
      'You’re doing okay, but let’s improve!',
      'You’re advancing, just a bit more effort needed!',
      'You’re moving forward, but don’t slack off!'
    ];

    const angryMessages = [
      'You need to do a lot better!',
      'Get your act together immediately!',
      'This is seriously disappointing!',
      'Do you even care about this?',
      'You’re way off track!',
      'This is completely unacceptable!',
      'You’re barely making any progress!',
      'You need to step up your game now!',
      'This effort is pathetic!',
      'You’re falling behind fast!',
      'You’re really slacking off!',
      'This is an absolute disaster!',
      'You’re not even close to where you should be!',
      'You’re failing miserably!',
      'This is a complete mess!',
      'You need to get serious or quit!',
      'You’re completely underperforming!',
      'Your lack of effort is infuriating!',
      'This is far from acceptable!',
      'You need to drastically improve or face consequences!',
      'Your performance is disgraceful!',
      'You’re making zero progress!',
      'This is beyond frustrating!',
      'You’re a huge letdown!',
      'You’re failing to meet even basic expectations!'
    ];

    if (progress === 100) {
      return {
        moodColor: themes[selectedTheme].moodColors.happy,
        mood: 'happy',
        message: getRandomMessage(happyMessages)
      };
    } else if (progress >= 50) {
      return {
        moodColor: themes[selectedTheme].moodColors.meh,
        mood: 'meh',
        message: getRandomMessage(mehMessages)
      };
    } else {
      return {
        moodColor: themes[selectedTheme].moodColors.angry,
        mood: 'angry',
        message: getRandomMessage(angryMessages)
      };
    }
  };

  useEffect(() => {
    const { message } = getSargeMood();
    setSargeMessage(message);
  }, [tasks, selectedTheme]); // Update message whenever tasks or theme change

  const { moodColor, mood, message } = getSargeMood();

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black">
      <div className="mb-6 flex justify-between items-center">
        <div className="text-3xl font-bold mb-2">Motivate Me Sarge</div>
        <select
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value as ThemeName)}
          className="p-2 border rounded-lg"
        >
          {Object.keys(themes).map((theme) => (
            <option key={theme} value={theme}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className={`flex-col justify-center items-center	text-center b-6 p-6 ${moodColor} text-white flex items-center rounded-t-lg`}>
        <div className="m-1">
          {/* Mood Image - Replace with actual Sarge images based on mood */}
          <img
            src={`./sarge.gif`} // Replace with actual path
            alt={`Sarge is ${mood}`}
            className="w-16 h-16 rounded-full"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Sgt. Hugh Mungus Says...</h1>
          <p className="text-lg">{sargeMessage}</p>
          <p className='text-lg'>Sarge is {mood}!</p>
        </div>
      </div>

      <div className="mb-6 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
        {tasks.length === 0 ? (
          <p className="text-lg text-gray-700">No tasks yet! What are you waiting for? Enter a task below and lets get to work!</p>
        ) : (
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
        )}
      </div>

      <div className="mb-6 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>
        <div className="flex-col items-center">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 p-3 border rounded-lg text-lg mb-3"
            placeholder="Enter a new task"
          />
          <button
            onClick={handleAddTask}
            className={`ml-3 p-3 ${themes[selectedTheme].buttonColor} text-white rounded-lg shadow hover:${themes[selectedTheme].buttonHoverColor}`}
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="mb-6 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Sarge’s Daily Quests</h2>
        <ul>
          {questStatus.map((quest) => (
            <li
              key={quest.id}
              className={`mb-3 p-4 rounded-lg ${quest.completed ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
            >
              <p className={`text-lg ${quest.completed ? 'line-through' : ''}`}>{quest.description}</p>
              {quest.completed && <p className="mt-2 text-sm text-gray-600">Reward: {quest.reward}</p>}
            </li>
          ))}
        </ul>
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
