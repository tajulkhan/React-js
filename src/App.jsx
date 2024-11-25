import './App.css'
import Profile from './components/profile';
import PackingList from './components/conditional-rendering.jsx';
import RenderingList from './components/rendering-lists.jsx';
import Counter from './components/counter.jsx';
import Card from './components/state/card.jsx';
import UseEffectExample from './components/effect/useEffectExample';
import GitHubUser from './components/effect/GitHubUser';
function App() {
  
  return (
    <>
      <GitHubUser/>

    <div className="">
      <Card/>
      <UseEffectExample/>
    </div>
    <div className="">
      <Counter/>
    </div>
    <div>
      <RenderingList/>
    </div>
    <PackingList/>
    <Profile/>
    </>
  )
}

export default App
