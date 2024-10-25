import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Upload from './upload'
import Login from './Login'
import Home from './Home'
import Visualization from './visualization'
import Resources from './resource'


function App() {
  const [results, setResults] = useState(null);

  return (
   <BrowserRouter> 
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/visualization" element={<Visualization />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/upload" element={<Upload setResults={setResults} />}></Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
