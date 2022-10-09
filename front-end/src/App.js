import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

//Components 
import NavBar from './Components/NavBar';

//Pages
import Edit from './Pages/Edit';
import Home from './Pages/Home';
import Index from './Pages/index';
import New from './Pages/New';
import Show from './Pages/Show';

function App() {
  return (
    <div className="App">
      <Router>
       <NavBar/>
      <main> 
        <Routes> 
          <Route path='/' element ={<Home/>}/> 
          <Route path='/lounges' element={<Index/>}/>
          <Route path='/lounges/new' element={<New/>}/>
          <Route path='/lounges/:id' element={<Show/>}/>
          <Route path='/lounges/:id/edit' element={<Edit/>}/>
        </Routes>
      </main>
      </Router>
      
    </div>
  );
}

export default App;