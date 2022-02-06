import Header from './components/Header';
import Home from './components/home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Box} from '@material-ui/core';
import Detailsview from './components/post/Detailsview';
import Createpost from './components/post/Createpost';

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Box style={{marginTop:64}}>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route  exact path='/details' element={<Detailsview/>}/>  
              <Route  exact path='/create' element={<Createpost/>}/>
            </Routes>
          </Box> 
      </Router>
    </div>
  );
}

export default App;
