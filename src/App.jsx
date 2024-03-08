import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div id='body'>
      <Header/>
      <main>
      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
export default App
