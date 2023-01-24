import classes from './App.module.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className={classes.app}>
      <Navbar />
      <h1>React</h1>
      <Outlet />
    </div>
  )
}

export default App
