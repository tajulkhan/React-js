import './App.css'
import Profile from './components/profile';
import PackingList from './components/conditional-rendering.jsx';
import RenderingList from './components/rendering-lists.jsx';
import Counter from './components/counter.jsx';
function App() {
  
  return (
    <>
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
