import "./App.css";
import Profile from "./components/profile";
import PackingList from "./components/conditional-rendering.jsx";
import RenderingList from "./components/rendering-lists.jsx";
import Counter from "./components/counter.jsx";
import UseEffectExample from "./components/effect/useEffectExample";
import GitHubUser from "./components/effect/GitHubUser";
import Timer from "./components/effect/timer.jsx";
import Home from "./components/home/home.jsx";
import Login from "./components/login/login.jsx";
import Student from "./components/context/withContext/student.jsx";
import { TaskProvider } from "./components/reducer/taskapp";
import TaskList from "./components/reducer/tasklist";
function App() {
  return (
    <>
      <h3>Task Management app use in useReducer hooks</h3>
      <TaskProvider>
        <TaskList />
      </TaskProvider>
      <hr />
      <Student />
      <hr />
      <Login />
      <h3>Card logic use to useState & useEffect hooks</h3>
      <hr />
      <Home />
      <hr />
      <h3>Timer logic use to useState & useEffect hooks</h3>
      <Timer />
      <hr />
      <h3>Api fetch logic use to useState & useEffect hooks & async</h3>
      <GitHubUser />
      <hr />
      <div className="">
        {/* <Card /> */}
        <UseEffectExample />
      </div>
      <hr />
      <h3>Counter logic use to useState hooks</h3>
      <div className="">
        <Counter />
      </div>
      <hr />
      <h3>Data Rendering List logic use to useState and map method</h3>
      <div>
        <RenderingList />
      </div>
      <PackingList />
      <Profile />
    </>
  );
}

export default App;
