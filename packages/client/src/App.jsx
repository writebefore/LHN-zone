import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-he
      
      ader">
        <img src={logo} className="App-logo" alt="logo" />
        <p>LHN ZONE</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          施工中🚧
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
      <footer className='App-footer'>
        <a className='Goverment-link' href='https://beian.miit.gov.cn/'>京ICP备2021038028号-1</a>
      </footer>
    </div>
  )
}

export default App
