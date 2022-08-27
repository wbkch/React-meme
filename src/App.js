
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Edit from './pages/Edit';

function App() {
  return (
    <>
    <h1>MeMe Generator</h1>

<Routes>
  <Route path={'/'} element={<Home/>}/>
  <Route path={'/edit'} element={<Edit/>}/>
</Routes>
</>    
  );
}

export default App;
