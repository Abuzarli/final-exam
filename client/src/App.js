import { Route, Routes } from 'react-router-dom'
import NAVBAR from './components/navbar/navbar'
import ADDPRODUCT from './pages/addProduct'
import HOME from './pages/home'
import './style.css'

const App = () => {
  return (
    <div>
      <NAVBAR/>
      <Routes>
        <Route path='' element={<HOME/>}/>
        <Route path='/add-exercise' element={<ADDPRODUCT/>}/>
      </Routes>
    </div>
  )
}

export default App