import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Login from './Pages/login'
import Olt_list from './Pages/olt_list'
import Sites_list from './Pages/sites_list'

import Account from './Pages/account'
import Essay from './Pages/essay'
import Sites from './Pages/sites'
import ShowFile from './Pages/ShowFile'
import ShowFileexlsx from './Pages/ShowFilexlsx'
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/olt_list' element={<Olt_list/>}/>
          <Route path='/sites_list/:id' element={<Sites_list/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/essay' element={<Essay/>}/>
          <Route path='/sites/:idfdt' element={<Sites/>}/>
          <Route path='/file/:name' element={<ShowFile/>}/>
          <Route path='/file2/:name' element={<ShowFileexlsx/>}/>
        </Routes>
       </Router>
    </div>

  );
}

export default App;
