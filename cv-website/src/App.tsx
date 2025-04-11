// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom' 
import HomePage from './pages/HomePage'
// import GraphicOnDisplayList from './components/GraphicOnDisplayList'
import './css/App.css'

function App() {
  // OUR ENTIRE REACT APP LIVES HERE. THIS IS THE BASE

  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    //   <GraphicOnDisplayList graphics={items}/>
    // </>
    <main className="main-contents">
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </main>
  )
}

export default App